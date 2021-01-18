from python_graphql_client import GraphqlClient
import pathlib
import os
import shutil
import urllib
from rdflib import Graph, plugin, Literal, RDF, URIRef, Namespace
from rdflib.serializer import Serializer
from rdflib.namespace import RDFS, XSD, DC, DCTERMS, VOID
# from logging import exception

SPARQL_ENDPOINT_URL='https://graphdb.dumontierlab.com/repositories/shapes-registry'
SPARQL_ENDPOINT_UPDATE_URL='https://graphdb.dumontierlab.com/repositories/shapes-registry/statements'
SPARQL_ENDPOINT_USERNAME='import_user'
SPARQL_ENDPOINT_PASSWORD = os.getenv('SPARQL_PASSWORD')
TOKEN = os.environ.get("GITHUB_TOKEN", "")

RDFS = Namespace("http://www.w3.org/2000/01/rdf-schema#")
RDF = Namespace("http://www.w3.org/1999/02/22-rdf-syntax-ns#")
SH = Namespace("http://www.w3.org/ns/shacl#")
SCHEMA = Namespace("https://schema.org/")

def main():
  client = GraphqlClient(endpoint="https://api.github.com/graphql")

  # Reset failed shapes report file
  with open(root / '../FAILED_IMPORT_REPORT.md', 'w') as f:
    f.write('## Fails loading files to `rdflib`\n' +
      '*Please check if your RDF file is properly formatted. We recommend to **use https://www.easyrdf.org/converter to get better insights on the error**, and store the shapes in `.ttl` files*\n\n\n')

  shapes_graph = Graph()
  shapes_graph = fetch_shape_files(shapes_graph, client, TOKEN)
  shapes_graph = fetch_extra_shape_files(shapes_graph, client, TOKEN)

  shapes_graph.serialize('shapes-of-you-rdf.ttl', format='turtle')


def generate_github_file_url(repo_url, filepath, branch):
  """GitHub does not provide a way to get the download URL directly from GraphQL
  So we need to build the file URL from the github repo URL + branch + file path
  """
  file_url = repo_url.replace("https://github.com/", "https://raw.githubusercontent.com/")
  file_url += '/' + branch + '/' + urllib.parse.quote_plus(filepath)
  return file_url

def get_files(extensions):
    """List all files with given extensions in subfolders
    :param extensions: Array of extensions, e.g. .ttl, .rdf
    """
    all_files = []
    for ext in extensions:
        all_files.extend(pathlib.Path('cloned_repo').rglob(ext))
    return all_files


def process_shapes_file(shape_format, shapes_graph, rdf_file_path, repo_url, branch, repo_description):
    """Process a Shapes file, check its content and add entry to the shapes graph
    """
    relative_filepath = str(rdf_file_path)[12:]
    github_file_url = generate_github_file_url(repo_url, relative_filepath, branch)
    g = Graph()
    if shape_format == 'shex':
      # no parsing possible for shex
      file_uri = URIRef(github_file_url)
      shapes_graph.add((file_uri, RDF.type, SCHEMA['DataDownload']))
      shapes_graph.add((file_uri, RDFS.label, Literal(rdf_file_path.name)))
      shapes_graph.add((file_uri, DCTERMS.hasPart, Literal('ShEx model')))
      shapes_graph.add((file_uri, DC.source, URIRef(repo_url)))
      if (repo_description):
        shapes_graph.add((URIRef(repo_url), RDFS.comment, Literal(repo_description)))
    else:
      try:
          g.parse(str(rdf_file_path.absolute()), format=shape_format)
      except Exception as e:
          print('No parser worked for the file ' + github_file_url)
          if not str(rdf_file_path).endswith('.xml') and not str(rdf_file_path).endswith('.json'):
              with open(root / '../FAILED_IMPORT_REPORT.md', 'a') as f:
                f.write('File: ' + github_file_url + "\n\n"
                    + 'In repository: ' + repo_url + "\n> " 
                    + str(e) + "\n\n---\n")

      for shape in g.subjects(RDF.type, SH.NodeShape):
          file_uri = URIRef(github_file_url)
          shapes_graph.add((file_uri, RDF.type, SCHEMA['DataDownload']))
          shapes_graph.add((file_uri, RDFS.label, Literal(rdf_file_path.name)))
          shapes_graph.add((file_uri, DC.source, URIRef(repo_url)))
          shape_label = shape
          for label in g.objects(shape, RDFS.label):
              # Try to get the label of the shape
              shape_label = label
          shapes_graph.add((file_uri, DCTERMS.hasPart, Literal(shape_label)))

    return shapes_graph

def clone_and_process_repo(shapes_graph, repo_url, branch, repo_description):
    print('Cloning ' + repo_url)
    os.system('git clone --quiet --depth 1 --recurse-submodules --shallow-submodules ' + repo_url + ' cloned_repo')
    # os.chdir('cloned_repo') # Specifying the path where the cloned project needs to be copied

    for rdf_file_path in get_files(['*.shex']):
        shapes_graph = process_shapes_file('shex', shapes_graph, rdf_file_path, repo_url, branch, repo_description)

    for rdf_file_path in get_files(['*.trig', '*.n3']):
        shapes_graph = process_shapes_file('n3', shapes_graph, rdf_file_path, repo_url, branch, repo_description)

    for rdf_file_path in get_files(['*.json', '*.jsonld', '*.json-ld']):
        shapes_graph = process_shapes_file('json-ld', shapes_graph, rdf_file_path, repo_url, branch, repo_description)

    for rdf_file_path in get_files(['*.xml', '*.rdf']):
        shapes_graph = process_shapes_file('xml', shapes_graph, rdf_file_path, repo_url, branch, repo_description)

    for rdf_file_path in get_files(['*.ttl', '*.shacl']):
        shapes_graph = process_shapes_file('ttl', shapes_graph, rdf_file_path, repo_url, branch, repo_description)

    for rdf_file_path in get_files(['*.nt']):
        shapes_graph = process_shapes_file('nt', shapes_graph, rdf_file_path, repo_url, branch, repo_description)
        
    shutil.rmtree('cloned_repo', ignore_errors=True, onerror=None)
    return shapes_graph


# Get all shapes for all repos with shacl-shapes tag
def get_shapes_query(github_topic, after_cursor=None):
    return """
query {
  search(query:"topic:""" + github_topic + """", type:REPOSITORY, last: 100, after:AFTER) {
    pageInfo {
      hasNextPage
      endCursor
    }
    repositories: edges {
      repo: node {
        ... on Repository {
          url
          shortDescriptionHTML
          name
          description
          defaultBranchRef {
            name
          }
        }
      }
    }
  }   
}
""".replace(
    "AFTER", '"{}"'.format(after_cursor) if after_cursor else "null"
)

# Retrieve releases in projects returned by the GraphQL calls
def fetch_shape_files(shapes_graph, client, oauth_token):
    topics = ['shacl-shapes', 'shex']

    for github_topic in topics:
      has_next_page = True
      after_cursor = None
      while has_next_page:
          data = client.execute(
              query=get_shapes_query(github_topic, after_cursor),
              headers={"Authorization": "Bearer {}".format(oauth_token)},
          )
          # print(json.dumps(data, indent=4))
          for repository in data["data"]["search"]["repositories"]:
              repo_json = repository["repo"]
              repo_url = repo_json["url"]
              branch = repo_json['defaultBranchRef']['name']
              repo_description = repo_json["description"]
              # repo_description = repo_json["shortDescriptionHTML"]
              shapes_graph = clone_and_process_repo(shapes_graph, repo_url, branch, repo_description)
                  
          has_next_page = data["data"]["search"]["pageInfo"][
              "hasNextPage"
          ]
          after_cursor = data["data"]["search"]["pageInfo"]["endCursor"]
    
    return shapes_graph


def get_extra_graphql_query(repo):
  """Generate GraphQL query for repos in the list extra_shapes_repositories
  """
  owner=repo.split('/')[0]
  repo_name=repo.split('/')[1]
  return '''query {
    repository(name:"''' + repo_name + '''", owner:"''' + owner + '''"){
      url
      shortDescriptionHTML
      name
      description
      defaultBranchRef {
        name
      }
    }
  }'''

def fetch_extra_shape_files(shapes_graph, client, oauth_token, extra_shapes_repositories):
  """Fetch additional Shapes files from a list of GitHub repos
  """
  extra_shapes_repositories = []
  with open(root / '../EXTERNAL_REPOSITORIES.txt', 'r') as f:
    for line in f:
      extra_shapes_repositories.append(line.rstrip('\n'))

  for extra_repo in extra_shapes_repositories:
    data = client.execute(
        query=get_extra_graphql_query(extra_repo),
        headers={"Authorization": "Bearer {}".format(oauth_token)},
    )
    # print(json.dumps(data, indent=4))
    repo_json = data["data"]["repository"]
    # try:
    branch = repo_json['defaultBranchRef']['name']
    repo_url = repo_json["url"]
    repo_description = repo_json["description"]
    shapes_graph = clone_and_process_repo(shapes_graph, repo_url, branch, repo_description)
    # except Exception as e:
    #   print('FAIL')
    #   print(e)
  return shapes_graph


if __name__ == "__main__":
  # The script starts here
  root = pathlib.Path(__file__).parent.resolve()

  # global extra_shapes_repositories
  # extra_shapes_repositories = []
  # with open(root / '../EXTERNAL_REPOSITORIES.txt', 'r') as f:
  #   for line in f:
  #     extra_shapes_repositories.append(line.rstrip('\n'))

  # client = GraphqlClient(endpoint="https://api.github.com/graphql")

  main()


# def insert_graph_in_sparql_endpoint(g):
#   """Insert rdflib graph in a Update SPARQL endpoint using SPARQLWrapper
#   :param g: rdflib graph to insert
#   :return: SPARQL update query result
#   """
#   # print(g.serialize(format='nt').decode('utf-8'))
#   sparql = SPARQLWrapper(SPARQL_ENDPOINT_UPDATE_URL)
#   sparql.setMethod(POST)
#   # sparql.setHTTPAuth(BASIC)
#   sparql.setCredentials(SPARQL_ENDPOINT_USERNAME, SPARQL_ENDPOINT_PASSWORD)
#   query = """INSERT DATA {{ GRAPH  <{graph}>
#   {{
#   {ntriples}
#   }}
#   }}
#   """.format(ntriples=g.serialize(format='nt').decode('utf-8'), graph=GRAPH_URI)
#   sparql.setQuery(query)
#   return sparql.query()