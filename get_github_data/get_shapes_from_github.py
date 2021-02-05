from python_graphql_client import GraphqlClient
import pathlib
import os
import shutil
import urllib
from rdflib import Graph, plugin, Literal, RDF, URIRef, Namespace
from rdflib.serializer import Serializer
from rdflib.namespace import RDFS, XSD, DC, DCTERMS, VOID
from rdflib.plugins.sparql.parser import Query, UpdateUnit
from rdflib.plugins.sparql.processor import translateQuery
import yaml
import re

from pyshexc.parser_impl import generate_shexj
# from logging import exception

SPARQL_ENDPOINT_URL='https://graphdb.dumontierlab.com/repositories/shapes-registry'
SPARQL_ENDPOINT_UPDATE_URL='https://graphdb.dumontierlab.com/repositories/shapes-registry/statements'
SPARQL_ENDPOINT_USERNAME='import_user'
SPARQL_ENDPOINT_PASSWORD = os.getenv('SPARQL_PASSWORD')
TOKEN = os.environ.get("GITHUB_TOKEN", "")

RDFS = Namespace("http://www.w3.org/2000/01/rdf-schema#")
RDF = Namespace("http://www.w3.org/1999/02/22-rdf-syntax-ns#")
SH = Namespace("http://www.w3.org/ns/shacl#")
SHEX = Namespace("http://www.w3.org/ns/shex#")
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
      shapes_graph.add((file_uri, RDF.type, SHEX.Schema))
      shapes_graph.add((file_uri, RDFS.label, Literal(rdf_file_path.name)))
      shapes_graph.add((file_uri, DCTERMS.hasPart, Literal('ShEx model')))
      shapes_graph.add((file_uri, DC.source, URIRef(repo_url)))
      if (repo_description):
        shapes_graph.add((URIRef(repo_url), RDFS.comment, Literal(repo_description)))
      # Convert ShEx to RDF shex and parse it
      # shex_rdf = ''
      # if rdf_file_path.endswith('.shex'):
      #   with open(root / '../' + rdf_file_path, 'a') as f:
      #     shex_rdf = generate_shexj.parse(f.read())
      # # if rdf_file_path.endswith('.shexj'):
      # #   with open(root / '../' + rdf_file_path, 'a') as f:
      # #     shex_rdf = f.read()
      
      # print(shex_rdf)
      # # for shape in g.subjects(RDF.type, SHEX.ShapeAnd):
      # #     add_shape_to_graph(shapes_graph, rdf_file_path, github_file_url, repo_url, shape, SHEX.schema)
      # # for shape in g.subjects(RDF.type, SHEX.Shape):
      # #     add_shape_to_graph(shapes_graph, rdf_file_path, github_file_url, repo_url, shape, SHEX.schema)

    elif shape_format == 'sparql':
      file_uri = URIRef(github_file_url)
      shapes_graph.add((file_uri, RDF.type, SCHEMA['DataDownload']))
      shapes_graph.add((file_uri, RDF.type, SH.SPARQLFunction))
      shapes_graph.add((file_uri, RDFS.label, Literal(rdf_file_path.name)))
      shapes_graph.add((file_uri, DC.source, URIRef(repo_url)))
      if (repo_description):
        shapes_graph.add((URIRef(repo_url), RDFS.comment, Literal(repo_description)))
      with open(rdf_file_path.absolute()) as file:
        sparql_query = file.read()
        # Parse SPARQL query
        yaml_string = "\n".join([row.lstrip('#+') for row in sparql_query.split('\n') if row.startswith('#+')])
        query_string = "\n".join([row for row in sparql_query.split('\n') if not row.startswith('#+')])
        shapes_graph.add((file_uri, SCHEMA['query'], Literal(query_string)))
        
        grlc_metadata = {}
        try:  # Invalid YAMLs will produce empty metadata
          grlc_metadata = yaml.load(yaml_string, Loader=yaml.FullLoader)
        except:
          pass
        # Get metadata like grlc metadata
        if grlc_metadata:
          file_descriptions = []
          if 'endpoint' in grlc_metadata:
            shapes_graph.add((file_uri, VOID.sparqlEndpoint, Literal(grlc_metadata['endpoint'])))
          if 'summary' in grlc_metadata:
            file_descriptions.append(grlc_metadata['summary'])
          if 'description' in grlc_metadata:
            file_descriptions.append(grlc_metadata['description'])
          shapes_graph.add((file_uri, DC.description, Literal(' - '.join(file_descriptions))))
          # If default params described for grlc SPARQL query we add then as shapes
          if 'defaults' in grlc_metadata:
            for args in grlc_metadata['defaults']:
              for arg, default_label in args.items():
                shapes_graph.add((file_uri, DCTERMS.hasPart, Literal(arg)))

        try:
          parsed_query = translateQuery(Query.parseString(query_string, parseAll=True))
          query_operation = re.sub(r"(\w)([A-Z])", r"\1 \2", parsed_query.algebra.name)
          shapes_graph.add((file_uri, DCTERMS.hasPart, Literal(query_operation)))
        except:
          shapes_graph.add((file_uri, DCTERMS.hasPart, Literal('SPARQL Query')))

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

      # Search for SHACL shapes
      for shape in g.subjects(RDF.type, SH.NodeShape):
          # add_shape_to_graph(shapes_graph, rdf_file_path, github_file_url, repo_url, shape_uri, shape_type)
          file_uri = URIRef(github_file_url)
          shapes_graph.add((file_uri, RDF.type, SCHEMA['DataDownload']))
          shapes_graph.add((file_uri, RDF.type, SH.Shape))
          shapes_graph.add((file_uri, RDFS.label, Literal(rdf_file_path.name)))
          shapes_graph.add((file_uri, DC.source, URIRef(repo_url)))
          shape_label = shape
          for label in g.objects(shape, RDFS.label):
              # Try to get the label of the shape
              shape_label = label
          shapes_graph.add((file_uri, DCTERMS.hasPart, Literal(shape_label)))

      # TODO: Search for ShEx Shapes and ShapeAnd
      for shape in g.subjects(RDF.type, SHEX.ShapeAnd):
          file_uri = URIRef(github_file_url)
          shapes_graph.add((file_uri, RDF.type, SCHEMA['DataDownload']))
          shapes_graph.add((file_uri, RDF.type, SHEX.Schema))
          shapes_graph.add((file_uri, RDFS.label, Literal(rdf_file_path.name)))
          shapes_graph.add((file_uri, DC.source, URIRef(repo_url)))
          shape_label = shape
          for label in g.objects(shape, RDFS.label):
              # Try to get the label of the shape
              shape_label = label
          shapes_graph.add((file_uri, DCTERMS.hasPart, Literal(shape_label)))

      for shape in g.subjects(RDF.type, SHEX.Shape):
          file_uri = URIRef(github_file_url)
          shapes_graph.add((file_uri, RDF.type, SCHEMA['DataDownload']))
          shapes_graph.add((file_uri, RDF.type, SHEX.Schema))
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

    # TODO: move ShexJ to jsonld part?
    for rdf_file_path in get_files(['*.shex', '*.shexj']):
        shapes_graph = process_shapes_file('shex', shapes_graph, rdf_file_path, repo_url, branch, repo_description)

    for rdf_file_path in get_files(['*.rq', '*.sparql']):
        shapes_graph = process_shapes_file('sparql', shapes_graph, rdf_file_path, repo_url, branch, repo_description)

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
    topics = ['shacl-shapes', 'shex', 'grlc']

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

def fetch_extra_shape_files(shapes_graph, client, oauth_token):
  """Fetch additional Shapes files from a list of GitHub repos
  """
  extra_shapes_repositories = []
  with open(root / '../EXTERNAL_REPOSITORIES.txt', 'r') as f:
    for line in f:
      extra_shapes_repositories.append(line.rstrip('\n').strip())

  for extra_repo in extra_shapes_repositories:
    data = client.execute(
        query=get_extra_graphql_query(extra_repo),
        headers={"Authorization": "Bearer {}".format(oauth_token)},
    )
    # print(json.dumps(data, indent=4))
    repo_json = data["data"]["repository"]
    repo_url = repo_json["url"]
    try:
      branch = repo_json['defaultBranchRef']['name']
      repo_description = repo_json["description"]
    except Exception as e:
      print(e)
      print('Trying with master branch')
      branch = 'master'
      repo_description = ''
    shapes_graph = clone_and_process_repo(shapes_graph, repo_url, branch, repo_description)
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