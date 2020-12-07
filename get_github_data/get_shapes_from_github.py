from python_graphql_client import GraphqlClient
import pathlib
import os
import urllib
from rdflib import Graph, Literal, RDF, URIRef, Namespace
from rdflib.namespace import RDFS, XSD, DC, DCTERMS, VOID
from SPARQLWrapper import SPARQLWrapper, POST, JSON
# import traceback
# import json
# from io import StringIO

EXTRA_SHAPES_REPOSITORIES = ['w3c/data-shapes', 'SEMICeu/dcat-ap_shacl', 'labra/solid-shapes', 'solid/chat-pane', 'dbpedia/archivo']

SPARQL_ENDPOINT_URL='https://graphdb.dumontierlab.com/repositories/shapes-registry'
SPARQL_ENDPOINT_UPDATE_URL='https://graphdb.dumontierlab.com/repositories/shapes-registry/statements'
GRAPH_URI='https://w3id.org/um/ids/shapes'
SPARQL_ENDPOINT_USERNAME='import_user'
SPARQL_ENDPOINT_PASSWORD = os.getenv('SPARQL_PASSWORD')
TOKEN = os.environ.get("GITHUB_TOKEN", "")


RDFS = Namespace("http://www.w3.org/2000/01/rdf-schema#")
RDF = Namespace("http://www.w3.org/1999/02/22-rdf-syntax-ns#")
SH = Namespace("http://www.w3.org/ns/shacl#")
SCHEMA = Namespace("https://schema.org/")

def main():
  # Reset failed shapes report file
  with open(root / '../FAILED_IMPORT_REPORT.md', 'w') as f:
    f.write('## Fails loading files to `rdflib`\n' +
      '*Please check if your RDF file is properly formatted. We recommend to **use https://www.easyrdf.org/converter to get better insights on the error**, and store the shapes in `.ttl` files*\n\n\n')

  fetch_shape_files(TOKEN)

  fetch_extra_shape_files(TOKEN)

  insert_graph_in_sparql_endpoint(shapes_graph)


def insert_graph_in_sparql_endpoint(g):
  """Insert rdflib graph in a Update SPARQL endpoint using SPARQLWrapper

  :param g: rdflib graph to insert
  :return: SPARQL update query result
  """
  # print(g.serialize(format='nt').decode('utf-8'))
  sparql = SPARQLWrapper(SPARQL_ENDPOINT_UPDATE_URL)
  sparql.setMethod(POST)
  # sparql.setHTTPAuth(BASIC)
  sparql.setCredentials(SPARQL_ENDPOINT_USERNAME, SPARQL_ENDPOINT_PASSWORD)
  query = """INSERT DATA {{ GRAPH  <{graph}>
  {{
  {ntriples}
  }}
  }}
  """.format(ntriples=g.serialize(format='nt').decode('utf-8'), graph=GRAPH_URI)

  sparql.setQuery(query)
  return sparql.query()


def generate_github_file_url(repo_url, filepath, branch):
  """GitHub does not provide a way to get the download URL directly from GraphQL
  So we need to build the file URL from the github repo URL + branch + file path
  """
  file_url = repo_url.replace("https://github.com/", "https://raw.githubusercontent.com/")
  file_url += '/' + branch + '/' + filepath
  return file_url


def process_file_object(file_object, repo_url, branch):
  # If the object is a RDF file, we read it with rdflib
  if file_object["path"].endswith('.ttl') or file_object["path"].endswith('.rdf') or file_object["path"].endswith('.nt') or file_object["path"].endswith('.nq') or file_object["path"].endswith('.trig'):
    if file_object["object"]["text"]:
      github_file_url = generate_github_file_url(repo_url, urllib.parse.quote_plus(file_object["path"]), branch)
      print(file_object["path"])
      print(github_file_url)
      # print(file_object["object"]["text"])

      g = Graph()
      try:
        g.parse(data=file_object["object"]["text"], format="ttl")
      except:
        try:
          # TODO: RDF/XML parsing seems to fail all the time
          # RDF tooling is so bad the only lib on Python cant even parse XML
          rdf_string = file_object["object"]["text"]
          # rdf_string = file_object["object"]["text"].replace('<?xml version="1.0" encoding="UTF-8"?>', '')
          print(rdf_string[:200])
          g.parse(data=rdf_string)
          # g.parse(data=rdf_string, format="xml")
          # g.parse(StringIO.StringIO(rdf_string), format="xml")
        except Exception as e:
          with open(root / '../FAILED_IMPORT_REPORT.md', 'a') as f:
            f.write('File: ' + github_file_url + "\n\n"
                + 'In repository: ' + repo_url + "\n> " 
                + str(e) + "\n\n---\n")
            # f.write(github_file_url + "\n```python\n" 
            #     + str(traceback.format_exc()) + "\n```\n\n\n")
          print('No parser worked for the file ' + github_file_url)
      
      # Check if sh:ShapeNode present
      for shape in g.subjects(RDF.type, SH.NodeShape):
        file_uri = URIRef(github_file_url)
        shapes_graph.add((file_uri, RDF.type, SCHEMA['DataDownload']))
        shapes_graph.add((file_uri, RDFS.label, Literal(file_object["name"])))
        shapes_graph.add((file_uri, DC.source, URIRef(repo_url)))
        shape_label = shape
        for label in g.objects(shape, RDFS.label):
          # Try to get the label of the shape
          shape_label = label
        shapes_graph.add((file_uri, DCTERMS.hasPart, Literal(shape_label)))
        # TODO: get more infos about the shapes?
        # e.g. owl:Ontology metadata https://raw.githubusercontent.com/SEMICeu/dcat-ap_shacl/master/dev%2Fxslt%2Fdcat-ap.shacl.rdf
  
  # If the object is a folder we process it recusively
  if file_object["object"] and "entries" in file_object["object"]:
    for entries in file_object["object"]["entries"]:
      process_file_object(entries, repo_url, branch)

  # GitHub GraphQL API output:
  # {
  #   "repo": {
  #     "url": "https://github.com/ThiagoCComelli/JS2SHACL-JSON-Schema-to-SHACL-conversor",
  #     "shortDescriptionHTML": "JSON Schema conversor to SHACL conversor.",
  #     "name": "JS2SHACL-JSON-Schema-to-SHACL-conversor",
  #     "description": "JSON Schema conversor to SHACL conversor.",
      # "object": {
      #   "entries": [ ITERATE HERE
      #     {
      #       "name": ".gitignore",
      #       "path": ".gitignore",
      #       "object": {
      #         "text": "/supportFiles\n/node_modules"
      #       }
      #     },
          # {
          #   "name": "AFRB-SURV",
          #   "path": "RDF/generated-from-landbook-importers/AFRB-SURV",
          #   "object": {
          #     "entries": [
          #       {
          #         "name": "AFRB-SURV.rdf",
          #         "path": "RDF/generated-from-landbook-importers/AFRB-SURV/AFRB-SURV.rdf",
          #         "object": {
          #           "text": "<?xml version"


# Get all shapes for all repos with shacl-shapes tag
def get_shapes_query(after_cursor=None):
    return """
query {
  search(query:"topic:shacl-shapes", type:REPOSITORY, last: 100, after:AFTER) {
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
          object(expression: "HEAD:") {
            ... on Blob {
              text
            }
            ... on Tree{
              entries {
              name
              path
              object {
                ... on Blob {
                  text
                }
                ... on Tree {
                entries {
                  name
                  path
                  object {
                    ... on Blob {
                      text
                    }
                    ... on Tree {
                    entries {
                      name
                      path
                      object {
                        ... on Blob {
                          text
                        }
                      }
                    }
                    }
                    }
                  }
                  }
                }
                }
            }
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
def fetch_shape_files(oauth_token):
    has_next_page = True
    after_cursor = None

    while has_next_page:
        data = client.execute(
            query=get_shapes_query(after_cursor),
            headers={"Authorization": "Bearer {}".format(oauth_token)},
        )
        # print(json.dumps(data, indent=4))
        for repository in data["data"]["search"]["repositories"]:
            repo_json = repository["repo"]
            branch = repo_json['defaultBranchRef']['name']
            print(repo_json["url"])
            if repo_json["object"]:
              for entries in repo_json["object"]["entries"]:
                process_file_object(entries, repo_json["url"], branch)
                
        has_next_page = data["data"]["search"]["pageInfo"][
            "hasNextPage"
        ]
        after_cursor = data["data"]["search"]["pageInfo"]["endCursor"]


def get_extra_graphql_query(repo):
  """Generate GraphQL query for repos in the list EXTRA_SHAPES_REPOSITORIES
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
    object(expression: "HEAD:") {
      ... on Blob {
        text
      }
      ... on Tree{
        entries {
        name
        path
        object {
          ... on Blob {
            text
          }
          ... on Tree {
          entries {
            name
            path
            object {
              ... on Blob {
                text
              }
              ... on Tree {
              entries {
                name
                path
                object {
                  ... on Blob {
                    text
                  }
                  ... on Tree {
                  entries {
                    name
                    path
                    object {
                      ... on Blob {
                        text
                      }
                    }
                  }
                  }
                }
              }
              }
              }
            }
            }
          }
          }
      }
    }
  }
}
  '''

def fetch_extra_shape_files(oauth_token):
  """Fetch additional Shapes files from a list of GitHub repos
  """
  for extra_repo in EXTRA_SHAPES_REPOSITORIES:
    data = client.execute(
        query=get_extra_graphql_query(extra_repo),
        headers={"Authorization": "Bearer {}".format(oauth_token)},
    )
    # print(json.dumps(data, indent=4))
    repo_json = data["data"]["repository"]
    branch = repo_json['defaultBranchRef']['name']
    print(repo_json["url"])
    if repo_json["object"]:
      for entries in repo_json["object"]["entries"]:
        process_file_object(entries, repo_json["url"], branch)


if __name__ == "__main__":
  # Scripts starts here
  root = pathlib.Path(__file__).parent.resolve()
  client = GraphqlClient(endpoint="https://api.github.com/graphql")

  global shapes_graph
  shapes_graph = Graph()

  main()