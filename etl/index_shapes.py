import os
import sys
import shutil
import pathlib
import logging
from datetime import datetime, timedelta
import re
import urllib
import requests

import yaml
from prance import ResolvingParser
from rdflib import Graph, ConjunctiveGraph, plugin, Literal, RDF, URIRef, Namespace
from rdflib.serializer import Serializer
from rdflib.namespace import RDFS, XSD, DC, DCTERMS, VOID, OWL, SKOS
from rdflib.plugins.sparql.parser import Query, UpdateUnit
from rdflib.plugins.sparql.processor import translateQuery
from SPARQLWrapper import SPARQLWrapper, POST, JSON
import obonet
from pyshexc.parser_impl import generate_shexj

from python_graphql_client import GraphqlClient
import gitlab

# from d2s.sparql_operations import sparql_update_instance

GITHUB_TOKEN = os.environ.get("API_GITHUB_TOKEN", "")
GITLAB_TOKEN = os.environ.get("GITLAB_TOKEN", "")
GITEE_TOKEN = os.environ.get("GITEE_TOKEN", "")

ENDPOINT_URL = os.environ.get("ENDPOINT_URL", "https://data.index.semanticscience.org/sparql")
ENDPOINT_USER = os.environ.get("ENDPOINT_USER", "")
ENDPOINT_PASSWORD = os.environ.get("ENDPOINT_PASSWORD", "")

RDFS = Namespace("http://www.w3.org/2000/01/rdf-schema#")
RDF = Namespace("http://www.w3.org/1999/02/22-rdf-syntax-ns#")
SH = Namespace("http://www.w3.org/ns/shacl#")
SHEX = Namespace("http://www.w3.org/ns/shex#")
SCHEMA = Namespace("https://schema.org/")
SIO = Namespace("http://semanticscience.org/resource/")
R2RML = Namespace("http://www.w3.org/ns/r2rml#")
RML = Namespace("http://semweb.mmlab.be/ns/rml#")
NP_TEMPLATE = Namespace("https://w3id.org/np/o/ntemplate/")
DCAT = Namespace("http://www.w3.org/ns/dcat#")
CSVW = Namespace("http://www.w3.org/ns/csvw#")

def main(argv):
  logging_level = os.environ.get("LOGGING_LEVEL", "")
  if logging_level == 'info':
    logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
  elif logging_level == 'error':
    logging.basicConfig(level=logging.ERROR, format='%(asctime)s - %(levelname)s - %(message)s')
  else:
    logging.basicConfig(level=logging.DEBUG, format='%(asctime)s - %(levelname)s - %(message)s')
    # filename='/tmp/app.log', filemode='w')

  # Get git service to query from args
  if len(argv) > 1:
    git_registry = argv[1].lower()
  else:
    git_registry = 'github'

  # Default topics if not provided
  search_topic = 'shacl-shapes'
  if len(argv) > 2:
    search_topic = argv[2]
  logging.info('[' + datetime.now().strftime("%m/%d/%Y, %H:%M:%S") + '] 🗂  Indexing topics: ' + str(search_topic))

  # Reset report file
  with open(root / '../REPORT.md', 'w') as f:
    f.write('## Fails loading files to `rdflib`\n\n' +
      '**Indexing topic**: `' + search_topic + '`'
      '\n\n*Please check if your RDF file is properly formatted. We recommend to **use https://www.easyrdf.org/converter to get better insights on the error**, and store the shapes in `.ttl` files*\n\n\n')

  client = GraphqlClient(endpoint="https://api.github.com/graphql")
  shapes_graph = Graph()

  # Default topics list is used if not provided
  if git_registry == 'github':
    shapes_graph = fetch_from_github(shapes_graph, client, GITHUB_TOKEN, search_topic)

  elif git_registry == 'github-extras':
    shapes_graph = fetch_from_github_extra(shapes_graph, client, GITHUB_TOKEN, search_topic)

  elif git_registry == 'gitlab':
    gl = gitlab.Gitlab('https://gitlab.com', private_token=GITLAB_TOKEN)
    shapes_graph = fetch_from_gitlab(shapes_graph, gl, search_topic)

  elif git_registry == 'gitee':
    shapes_graph = fetch_from_gitee(shapes_graph, GITEE_TOKEN, search_topic)

  elif git_registry == 'lod-cloud':
    fetch_from_lod()

    fetch_from_yummydata()

    # Extras SPARQL endpoints to check
    extra_endpoints = []
    with open(str(root) + '/../EXTRAS_SPARQL_ENDPOINTS.txt', 'r') as f:
      for line in f:
        extra_endpoints.append(line.rstrip('\n').strip())
    for endpoint in extra_endpoints:
      test_sparql_endpoint(endpoint)

    # Add all valids SPARQL graphs we found
    # TODO: split lod-cloud, yummidata and extra endpoints in 3 files
    shapes_graph = Graph()
    for sparql_endpoint, endpoint_metadata in VALID_ENDPOINTS.items():
      shapes_graph.add((URIRef(sparql_endpoint), RDF.type, SCHEMA['EntryPoint']))
      shapes_graph.add((URIRef(sparql_endpoint), RDFS.label, Literal(endpoint_metadata['label'])))
      if 'description' in endpoint_metadata:
        shapes_graph.add((URIRef(sparql_endpoint), RDFS.comment, Literal(endpoint_metadata['description'])))
    load_rdf_to_ldp(shapes_graph, 'lod-cloud', 'apis')

  shapes_graph.serialize('shapes-rdf.ttl', format='turtle')
  # shapes_graph.serialize('shapes-rdf.nt', format='nt')


def add_shape(g, shapes_graph, file_uri, shape_uri):
  for label in g.objects(shape_uri, RDFS.label):
      # Try to get the label of the class
      shape_label = label
      shapes_graph.add((URIRef(shape_uri), RDFS.label, Literal(shape_label)))
  shapes_graph.add((file_uri, DCTERMS.hasPart, URIRef(shape_uri)))
  return shapes_graph



def load_rdf_to_ldp(shapes_graph, repo_id, ldp_folder):
  if (None, None, None) in shapes_graph:
    print('Loading to: ' + str(repo_id))
    shapes_graph.serialize('shapes-rdf.ttl', format='turtle')
    # shapes_graph.serialize('shapes-rdf.nt', format='nt')
    os.system('curl -H "Accept: text/turtle" -H "Content-type: text/turtle" -u ldp:' + ENDPOINT_PASSWORD +' --data-binary @shapes-rdf.ttl -H "Slug: ' + repo_id + '" https://data.index.semanticscience.org/DAV/home/ldp/' + ldp_folder + '/')
    try:
      os.remove('shapes-rdf.ttl')
    except:
      pass

def fetch_from_lod():
  """Fetch and test SPARQL endpoints from LOD dataset (JSON file)"""
  lod_datasets_count = 0
  lod_endpoints_count = 0
  added_endpoints_count = 0
  lod_obj = requests.get('https://lod-cloud.net/lod-data.json').json()
  for dataset_id, dataset_obj in lod_obj.items():
    lod_datasets_count += 1
    if 'sparql' in dataset_obj:
      for sparql_obj in dataset_obj['sparql']:
        lod_endpoints_count += 1
        print('Testing endpoint: ' + str(sparql_obj['access_url']))
        endpoint_added = test_sparql_endpoint(str(sparql_obj['access_url']))
        if endpoint_added:
          added_endpoints_count += 1
  add_to_report('Datasets in LOD: ' + str(lod_datasets_count) +
    '\nSPARQL endpoints in LOD: ' + str(lod_endpoints_count) +
    '\nActive SPARQL endpoints: ' + str(added_endpoints_count))

def fetch_from_yummydata():
  """Fetch and test SPARQL endpoints from http://yummydata.org/api"""
  lod_datasets_count = 0
  lod_endpoints_count = 0
  added_endpoints_count = 0
  lod_obj = requests.get('https://yummydata.org/api/endpoint/search', headers={'accept': 'application/json'}).json()
  for dataset_obj in lod_obj:
    lod_datasets_count += 1
    if 'endpoint_url' in dataset_obj:
      endpoint_added = test_sparql_endpoint(str(dataset_obj['endpoint_url']))
      if endpoint_added:
        added_endpoints_count += 1
  add_to_report('Datasets in LOD: ' + str(lod_datasets_count) +
    '\nSPARQL endpoints in LOD: ' + str(lod_endpoints_count) +
    '\nActive SPARQL endpoints: ' + str(added_endpoints_count))

# curl -L -H 'Accept: application/json' https://yummydata.org/api/endpoint/search

# Retrieve releases in projects returned by the GraphQL calls
def fetch_from_github(shapes_graph, client, oauth_token, search_topic):
    """Fetch shapes files from GitHub using the GraphQL API.
    We filter repositories by topics provided as argument
    """
    time_start = datetime.now()
    # for github_topic in topics:
    has_next_page = True
    after_cursor = None
    while has_next_page:
        data = client.execute(
            query=github_graphql_get_shapes(search_topic, after_cursor),
            headers={"Authorization": "Bearer {}".format(oauth_token)},
        )
        for repository in data["data"]["search"]["repositories"]:
            check_run_time(time_start, data["data"]["search"]["repositories"], repository)
            repo_json = repository["repo"]
            repo_url = repo_json["url"]
            if repo_url in SKIP_REPOS:
              continue
            try:
              branch = repo_json['defaultBranchRef']['name']
              repo_description = repo_json["description"]
            except Exception as e:
              logging.error(e)
              logging.warning('🕊 No default_branch found for ' + repo_url + ', using master')
              branch = 'master'
              repo_description = ''
            repo_description = repo_json["description"]
            # repo_description = repo_json["shortDescriptionHTML"]
            shapes_graph = clone_and_process_repo(shapes_graph, repo_url, branch, repo_description, 'github')
        has_next_page = data["data"]["search"]["pageInfo"][
            "hasNextPage"
        ]
        after_cursor = data["data"]["search"]["pageInfo"]["endCursor"]
    
    return shapes_graph

# Get all shapes for all repos with shacl-shapes tag
def github_graphql_get_shapes(github_topic, after_cursor=None):
    return """
query {
  search(query:"GITHUB_TOPIC", type:REPOSITORY, last: 100, after:AFTER) {
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
).replace(
    "GITHUB_TOPIC", github_topic
)

def fetch_from_github_extra(shapes_graph, client, oauth_token, filename):
  """Fetch additional Shapes files from a list of GitHub repos
  """
  extra_shapes_repositories = []
  with open(str(root) + '/../' + str(filename), 'r') as f:
    for line in f:
      extra_shapes_repositories.append(line.rstrip('\n').strip())

  for extra_repo in extra_shapes_repositories:
    data = client.execute(
        query=github_graphql_get_extra(extra_repo),
        headers={"Authorization": "Bearer {}".format(oauth_token)},
    )
    repo_json = data["data"]["repository"]
    repo_url = repo_json["url"]
    try:
      branch = repo_json['defaultBranchRef']['name']
      repo_description = repo_json["description"]
    except Exception as e:
      logging.error(e)
      logging.warning('🕊 No default_branch found for repo_url, using master')
      branch = 'master'
      repo_description = ''
    shapes_graph = clone_and_process_repo(shapes_graph, repo_url, branch, repo_description, 'github')
  return shapes_graph

def github_graphql_get_extra(repo):
  """Generate GraphQL query for repos in the list extra_shapes_repositories
  """
  if repo:
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

def fetch_from_gitlab(shapes_graph, gl, search_topic):
    """Fetch files from GitLab"""
    # for search_topic in topics:
    gitlab_repos_list = gl.search(gitlab.SEARCH_SCOPE_PROJECTS, search_topic)
    for repo_json in gitlab_repos_list:
      try:
        repo_url = repo_json["web_url"]
        if repo_url in SKIP_REPOS:
          continue
        if 'default_branch' in repo_json:
          branch = repo_json['default_branch']
        else:
          branch = 'master'
          logging.warning('🕊 No default_branch found for ' + repo_url + ', using master')
        repo_descriptions = []
        if repo_json["name"]:
          repo_descriptions.append(repo_json["name"])
        if repo_json["description"]:
          repo_descriptions.append(repo_json["description"])

        repo_description = ' - '.join(repo_descriptions)
        shapes_graph = clone_and_process_repo(shapes_graph, repo_url, branch, repo_description, 'gitlab')
      except Exception as e:
        add_to_report('GitLab issue processing: ' + str(repo_json) + '\n\n' + str(e))
    
    return shapes_graph

def fetch_from_gitee(shapes_graph, token, search_topic):
    """Fetch files from Gitee"""
    # Record time to avoid hitting GitHub Actions limits
    time_start = datetime.now()
    # for search_topic in topics:
    gitee_repos_list = requests.get('https://gitee.com/api/v5/search/repositories?access_token=' + token + '&page=1&per_page=100&order=desc&q=' + search_topic).json()
    for repo_json in gitee_repos_list:
      check_run_time(time_start, gitee_repos_list, repo_json)

      repo_url = repo_json["html_url"].rstrip('.git')

      if repo_url in SKIP_REPOS:
        continue
      if 'default_branch' in repo_json:
        branch = repo_json['default_branch']
      else:
        branch = 'master'
        logging.warning('🕊 No default_branch found for repo_url, using master')
      repo_descriptions = []
      if repo_json["name"]:
        repo_descriptions.append(repo_json["name"])
      if repo_json["description"]:
        repo_descriptions.append(repo_json["description"])

      repo_description = ' - '.join(repo_descriptions)
      # repo_description = repo_json["shortDescriptionHTML"]
      shapes_graph = clone_and_process_repo(shapes_graph, repo_url, branch, repo_description, 'gitee')
    return shapes_graph


def clone_and_process_repo(shapes_graph, repo_url, branch, repo_description, git_service):
    """Clone and process a repo found in a git service"""
    shapes_graph = Graph()

    logging.info('[' + datetime.now().strftime("%m/%d/%Y, %H:%M:%S") + '] 📥 Cloning ' + repo_url)
    shutil.rmtree('cloned_repo', ignore_errors=True, onerror=None)
    os.system('git clone --quiet --depth 1 --recurse-submodules --shallow-submodules ' + repo_url + ' cloned_repo')
    # os.chdir('cloned_repo') # Specifying the path where the cloned project needs to be copied

    # TODO: move ShexJ to jsonld part?
    for rdf_file_path in get_files(['*.shex', '*.shexj']):
        shapes_graph = process_shapes_file('shex', shapes_graph, rdf_file_path, repo_url, branch, repo_description)

    for rdf_file_path in get_files(['*.yml', '*.yaml', '*.json']):
        shapes_graph = process_shapes_file('openapi', shapes_graph, rdf_file_path, repo_url, branch, repo_description)

    for rdf_file_path in get_files(['*.rq', '*.sparql']):
        shapes_graph = process_shapes_file('sparql', shapes_graph, rdf_file_path, repo_url, branch, repo_description)

    for rdf_file_path in get_files(['*.n3']):
        shapes_graph = process_shapes_file('n3', shapes_graph, rdf_file_path, repo_url, branch, repo_description)

    for rdf_file_path in get_files(['*.trig']):
        shapes_graph = process_shapes_file('trig', shapes_graph, rdf_file_path, repo_url, branch, repo_description)

    for rdf_file_path in get_files(['*.json', '*.jsonld', '*.json-ld']):
        shapes_graph = process_shapes_file('json-ld', shapes_graph, rdf_file_path, repo_url, branch, repo_description)

    for rdf_file_path in get_files(['*.xml', '*.rdf', '*.owl']):
        shapes_graph = process_shapes_file('xml', shapes_graph, rdf_file_path, repo_url, branch, repo_description)

    for rdf_file_path in get_files(['*.ttl', '*.shacl']):
        shapes_graph = process_shapes_file('ttl', shapes_graph, rdf_file_path, repo_url, branch, repo_description)

    for rdf_file_path in get_files(['*.nt']):
        shapes_graph = process_shapes_file('nt', shapes_graph, rdf_file_path, repo_url, branch, repo_description)

    for rdf_file_path in get_files(['*.obo']):
        shapes_graph = process_shapes_file('obo', shapes_graph, rdf_file_path, repo_url, branch, repo_description)

    # Add valid SPARQL endpoints found in the repo
    for sparql_endpoint, endpoint_metadata in VALID_ENDPOINTS.items():
      shapes_graph.add((URIRef(sparql_endpoint), RDF.type, SCHEMA['EntryPoint']))
      shapes_graph.add((URIRef(sparql_endpoint), RDFS.label, Literal(endpoint_metadata['label'])))
      if 'description' in endpoint_metadata:
        shapes_graph.add((URIRef(sparql_endpoint), RDFS.comment, Literal(endpoint_metadata['description'])))
    VALID_ENDPOINTS = {}
    
    repo_id = repo_url.rsplit('/')[-2] + '-' + repo_url.rsplit('/')[-1]

    dry_run = False
    if dry_run:
      shapes_graph.serialize('shapes-' + repo_id + '.ttl', format='turtle')
    else:
      load_rdf_to_ldp(shapes_graph, repo_id, git_service)

    return shapes_graph


def process_shapes_file(shape_format, shapes_graph, rdf_file_path, repo_url, branch, repo_description):
    """Process a file, check its content and add entry to the shapes graph
    Large function, contain parsing for all formats: RDF, OBO, ShEx, OpenAPI, etc
    """
    relative_filepath = str(rdf_file_path)[12:]
    github_file_url = generate_github_file_url(repo_url, relative_filepath, branch)
    file_uri = URIRef(github_file_url)
    shape_found = False
    g = Graph()

    if shape_format == 'obo':
      # Get OBO ontologies
      try:
        graph = obonet.read_obo(github_file_url)
        # for id_, data in graph.nodes(data=True):
        for id_, data in graph.nodes(data=True):
          shape_found = True
          shapes_graph.add((file_uri, RDF.type, SCHEMA['SoftwareSourceCode']))
          shapes_graph.add((file_uri, RDF.type, SIO['SIO_000623'])) # OBO ontology
          shapes_graph.add((file_uri, RDFS.label, Literal(rdf_file_path.name)))
          shapes_graph.add((file_uri, SCHEMA.codeRepository, URIRef(repo_url)))
          shape_label = data.get('name')
          if not shape_label:
            shape_label = id_
          shapes_graph.add((file_uri, DCTERMS.hasPart, Literal(shape_label)))
      except Exception as e:
        add_to_report('In repository: ' + repo_url + "\n> " + str(e), github_file_url)

    # Index OpenAPI files 
    elif shape_format == 'openapi':
      try:
        parser = ResolvingParser(github_file_url)
        shape_found = True
        shapes_graph.add((file_uri, RDF.type, SCHEMA['SoftwareSourceCode']))
        shapes_graph.add((file_uri, RDF.type, SCHEMA['APIReference']))
        shapes_graph.add((file_uri, RDFS.label, Literal(rdf_file_path.name)))
        shapes_graph.add((file_uri, SCHEMA.codeRepository, URIRef(repo_url)))
        file_descriptions = []
        if parser.specification['info']['title']:
          file_descriptions.append(parser.specification['info']['title'])
        if parser.specification['info']['description']:
          file_descriptions.append(parser.specification['info']['description'])
        if len(file_descriptions) > 0:
          shapes_graph.add((file_uri, RDFS.comment, Literal(' - '.join(file_descriptions))))
        # if not shape_label:
        #   shape_label = id_
        # TODO: get operations hasPart?
        shapes_graph.add((file_uri, DCTERMS.hasPart, Literal('OpenAPI')))
      except Exception as e:
        pass
        # TODO: YARRML? Search for prefixes and mappings at the root of YAML
        # add_to_report('In repository: ' + repo_url + "\n> " 
        #       + str(e), github_file_url)

    # Search for shex files
    elif shape_format == 'shex':
      # No parsing possible for shex
      shape_found = True
      # TODO: use https://schema.org/SoftwareSourceCode ?
      shapes_graph.add((file_uri, RDF.type, SCHEMA['SoftwareSourceCode']))
      shapes_graph.add((file_uri, RDF.type, SHEX.Schema))
      shapes_graph.add((file_uri, RDFS.label, Literal(rdf_file_path.name)))
      shapes_graph.add((file_uri, DCTERMS.hasPart, Literal('ShEx model')))
      shapes_graph.add((file_uri, SCHEMA.codeRepository, URIRef(repo_url)))
      # Convert ShEx to RDF shex and parse it
      # shex_rdf = ''
      # if rdf_file_path.endswith('.shex'):
      #   with open(root / '../' + rdf_file_path, 'a') as f:
      #     shex_rdf = generate_shexj.parse(f.read())
      # # if rdf_file_path.endswith('.shexj'):
      # #   with open(root / '../' + rdf_file_path, 'a') as f:
      # #     shex_rdf = f.read()
      # logging.debug(shex_rdf)
      # # for shape in g.subjects(RDF.type, SHEX.ShapeAnd):
      # #     add_shape_to_graph(shapes_graph, rdf_file_path, github_file_url, repo_url, shape, SHEX.schema)
      # # for shape in g.subjects(RDF.type, SHEX.Shape):
      # #     add_shape_to_graph(shapes_graph, rdf_file_path, github_file_url, repo_url, shape, SHEX.schema)

    # Parse SPARQL query files
    elif shape_format == 'sparql':
      # TODO: sparql+queries search failing might be due to a test SPARQL query hanging for long time
      shape_found = True
      shapes_graph.add((file_uri, RDF.type, SCHEMA['SoftwareSourceCode']))
      shapes_graph.add((file_uri, RDF.type, SH.SPARQLFunction))
      shapes_graph.add((file_uri, RDFS.label, Literal(rdf_file_path.name)))
      shapes_graph.add((file_uri, SCHEMA.codeRepository, URIRef(repo_url)))
      try: 
        with open(rdf_file_path.absolute()) as file:
          sparql_query = file.read()
          # Parse SPARQL query (added fix for some malformed queries with =+ instead of #+)
          # sparql_query = "\n".join(['#+' + row.lstrip('=+') for row in sparql_query.split('\n') if row.startswith('=+')])
          yaml_string = "\n".join([row.lstrip('#+') for row in sparql_query.split('\n') if row.startswith('#+')])
          query_string = "\n".join([row for row in sparql_query.split('\n') if not row.startswith('#+')])
          shapes_graph.add((file_uri, SCHEMA['query'], Literal(sparql_query)))
          
          grlc_metadata = {}
          try:  # Invalid YAMLs will produce empty metadata
            grlc_metadata = yaml.load(yaml_string, Loader=yaml.FullLoader)
          except:
            pass
          # Get grlc query metadata
          if grlc_metadata:
            file_descriptions = []
            if 'endpoint' in grlc_metadata:
              sparql_endpoint = grlc_metadata['endpoint']
              try:
                shapes_graph.add((file_uri, VOID.sparqlEndpoint, URIRef(sparql_endpoint)))
                test_sparql_endpoint(sparql_endpoint)
              except Exception as e:
                logging.debug('Issue parsing SPARQL endpoint from .rq file')
                logging.debug(e)
            if 'summary' in grlc_metadata and grlc_metadata['summary']:
              file_descriptions.append(grlc_metadata['summary'])
            if 'description' in grlc_metadata and grlc_metadata['description']:
              file_descriptions.append(grlc_metadata['description'])
            # Add the query description to the graph
            if len(file_descriptions) > 0:
              shapes_graph.add((file_uri, RDFS.comment, Literal(' - '.join(file_descriptions))))
            # If default params described for grlc SPARQL query we add them as shapes
            if 'defaults' in grlc_metadata:
              for args in grlc_metadata['defaults']:
                for arg, default_label in args.items():
                  shapes_graph.add((file_uri, DCTERMS.hasPart, Literal(arg)))
          try:
            # Parse the query to get its operation (select, construct..)
            parsed_query = translateQuery(Query.parseString(query_string, parseAll=True))
            query_operation = re.sub(r"(\w)([A-Z])", r"\1 \2", parsed_query.algebra.name)
            shapes_graph.add((file_uri, DCTERMS.hasPart, Literal(query_operation)))
          except:
            shapes_graph.add((file_uri, DCTERMS.hasPart, Literal('SPARQL Query')))
      except:
        logging.error('❌️ Issue opening file: ' + str(rdf_file_path))

    # Parse RDF files
    else:
      try:
          if shape_format == 'trig':
            # Different graph required for trig to work
            g = ConjunctiveGraph()
          g.parse(str(rdf_file_path.absolute()), format=shape_format)
      except Exception as e:
          if shape_format == 'xml' and (str(rdf_file_path).endswith('.owl') or str(rdf_file_path).endswith('.rdf')):
            # Try parsing with turtle for .owl and .rdf files
            try: 
              g.parse(str(rdf_file_path.absolute()), format='ttl')
            except:
              add_to_report(
                'RDF parsed as ' + shape_format + ', in repository: ' + repo_url + "\n> " + str(e), 
                github_file_url
              )
          else:
            add_to_report(
              'RDF parsed as ' + shape_format + ', in repository: ' + repo_url + "\n> " + str(e), 
              github_file_url
            )

      # Search for SHACL shapes
      for shape in g.subjects(RDF.type, SH.NodeShape):
          shape_found = True
          shapes_graph.add((file_uri, RDF.type, SCHEMA['SoftwareSourceCode']))
          shapes_graph.add((file_uri, RDF.type, SH.Shape))
          shapes_graph.add((file_uri, RDFS.label, Literal(rdf_file_path.name)))
          shapes_graph.add((file_uri, SCHEMA.codeRepository, URIRef(repo_url)))
          shapes_graph = add_shape(g, shapes_graph, file_uri, shape)
          # shape_label = shape
          # for label in g.objects(shape, RDFS.label):
          #     # Try to get the label of the shape
          #     shape_label = label
          #     # Fixing
          # shapes_graph.add((file_uri, DCTERMS.hasPart, Literal(shape_label)))

      # Search for CSV on the Web RDF (csvw)
      # https://medium.swirrl.com/how-to-publish-csv-on-the-web-csvw-4ea6cbb603b4
      # https://www.w3.org/ns/csvw
      for shape_file in g.subjects(RDF.type, CSVW.Schema):
      # for shape_file in g.objects(None, CSVW.tableSchema):
          shape_found = True
          shapes_graph.add((file_uri, RDF.type, SCHEMA['SoftwareSourceCode']))
          shapes_graph.add((file_uri, RDF.type, CSVW.Schema))
          shapes_graph.add((file_uri, RDFS.label, Literal(rdf_file_path.name)))
          shapes_graph.add((file_uri, SCHEMA.codeRepository, URIRef(repo_url)))
          # Get file label
          # for file_label in g.objects(shape_file, RDFS.label):
          #   shapes_graph.add((file_uri, RDFS.comment, Literal(str(file_label))))
          #   break
          # Get columns label
          for col_label in g.objects(shape_file, CSVW.column):
            shapes_graph.add((file_uri, DCTERMS.hasPart, Literal(str(col_label))))

      # Search for DCAT Datasets
      for shape_file in g.subjects(RDF.type, DCAT.Dataset):
          shape_found = True
          shapes_graph.add((file_uri, RDF.type, SCHEMA['SoftwareSourceCode']))
          shapes_graph.add((file_uri, RDF.type, DCAT.Dataset))
          shapes_graph.add((file_uri, RDFS.label, Literal(rdf_file_path.name)))
          shapes_graph.add((file_uri, SCHEMA.codeRepository, URIRef(repo_url)))
          # Get file label
          for file_label in g.objects(shape_file, RDFS.label):
            shapes_graph.add((file_uri, RDFS.comment, Literal(str(file_label))))
            break
          for sparql_endpoint in g.objects(None, VOID.sparqlEndpoint):
            shapes_graph.add((file_uri, VOID.sparqlEndpoint, URIRef(sparql_endpoint)))
            # TODO: currently break to only add 1 if multiple, multi endpoints need to be checked
            # TODO: test it with GSS-Cogs/csvw-example DCAT datasets
            break
          # shape_label = shape_file
          # for label in g.objects(shape_file, RDFS.label):
          #     # Try to get the label of the shape
          #     shape_label = label
          #     # Fixing
          # shapes_graph.add((file_uri, DCTERMS.hasPart, Literal(shape_label)))

      # Search for nanopublication templates
      for shape_file in g.subjects(RDF.type, NP_TEMPLATE.AssertionTemplate):
          shape_found = True
          shapes_graph.add((file_uri, RDF.type, SCHEMA['SoftwareSourceCode']))
          shapes_graph.add((file_uri, RDF.type, NP_TEMPLATE.AssertionTemplate))
          shapes_graph.add((file_uri, RDFS.label, Literal(rdf_file_path.name)))
          shapes_graph.add((file_uri, SCHEMA.codeRepository, URIRef(repo_url)))
          # Get template label
          for template_label in g.objects(shape_file, RDFS.label):
            shapes_graph.add((file_uri, RDFS.comment, Literal(str(template_label))))
            break
          # TODO: get the shapes inside
          nanopub_inputs = [
            NP_TEMPLATE.GuidedChoicePlaceholder, 
            NP_TEMPLATE.LiteralPlaceholder, 
            NP_TEMPLATE.RestrictedChoicePlaceholder, 
            NP_TEMPLATE.UriPlaceholder
          ]
          for np_input in nanopub_inputs:
            for shape in g.subjects(RDF.type, np_input):
              shapes_graph = add_shape(g, shapes_graph, file_uri, shape)
              # shape_label = shape
              # for label in g.objects(shape, RDFS.label):
              #     # Try to get the label of the shape
              #     shape_label = label
              #     # Fixing
              # shapes_graph.add((file_uri, DCTERMS.hasPart, Literal(shape_label)))

      # Search for RML and R2RML mappings
      for shape in g.subjects(RDF.type, R2RML.SubjectMap):
          shape_found = True
          is_rml_mappings = False
          # Differenciate RML and R2RML mappings
          if (None, RML.logicalSource, None) in g:
            shapes_graph.add((file_uri, RDF.type, RML.LogicalSource))
          else:
            shapes_graph.add((file_uri, RDF.type, R2RML.TriplesMap))
          shapes_graph.add((file_uri, RDF.type, SCHEMA['SoftwareSourceCode']))
          shapes_graph.add((file_uri, RDFS.label, Literal(rdf_file_path.name)))
          shapes_graph.add((file_uri, SCHEMA.codeRepository, URIRef(repo_url)))
          shape_label = shape
          # Try to get the label or URI of the subjectMap
          # for label in g.objects(shape, R2RML.template):
          #     shape_label = label
          shapes_graph = add_shape(g, shapes_graph, file_uri, shape)

      # Search for OWL classes
      for shape in g.subjects(RDF.type, OWL.Class):
          shape_found = True
          shapes_graph.add((file_uri, RDF.type, SCHEMA['SoftwareSourceCode']))
          shapes_graph.add((file_uri, RDF.type, OWL.Ontology))
          shapes_graph.add((file_uri, RDFS.label, Literal(rdf_file_path.name)))
          shapes_graph.add((file_uri, SCHEMA.codeRepository, URIRef(repo_url)))
          shapes_graph = add_shape(g, shapes_graph, file_uri, shape)
          # shape_label = shape
          # for label in g.objects(shape, RDFS.label):
          #     # Try to get the label of the class
          #     shape_label = label
          # shapes_graph.add((file_uri, DCTERMS.hasPart, Literal(shape_label)))

      # Get rdfs:label of owl:Ontology and shaclTest:Validate for file description
      file_descriptions = []
      for shape in g.subjects(RDF.type, OWL.Ontology):
          # Get one of the labels
          for ontology_label in g.objects(shape, RDFS.label):
            if len(file_descriptions) < 1:
              file_descriptions.append(str(ontology_label))
          if len(file_descriptions) == 0:
            for label in g.objects(shape, DC.title):
              file_descriptions.append(str(label))
          if len(file_descriptions) == 0:
            for label in g.objects(shape, DCTERMS.title):
              file_descriptions.append(str(label))
          # Now add the description
          for comment in g.objects(shape, RDFS.comment):
            file_descriptions.append(str(comment))
          for label in g.objects(shape, RDFS.comment):
            file_descriptions.append(str(label))
          for description in g.objects(shape, DCTERMS.description):
            file_descriptions.append(str(description))
      for shape in g.subjects(RDF.type, URIRef('http://www.w3.org/ns/shacl-test#Validate')):
          for ontology_label in g.objects(shape, RDFS.label):
            file_descriptions.append(str(ontology_label))
      if len(file_descriptions) > 0:
        shapes_graph.add((file_uri, RDFS.comment, Literal(' - '.join(file_descriptions))))

      # Get SKOS concepts and concept scheme
      for shape in g.subjects(RDF.type, SKOS.Concept):
          shape_found = True
          shapes_graph.add((file_uri, RDF.type, SCHEMA['SoftwareSourceCode']))
          shapes_graph.add((file_uri, RDF.type, SKOS.ConceptScheme))
          shapes_graph.add((file_uri, RDFS.label, Literal(rdf_file_path.name)))
          shapes_graph.add((file_uri, SCHEMA.codeRepository, URIRef(repo_url)))
          for label in g.objects(shape, SKOS.prefLabel):
              shapes_graph.add((URIRef(shape), DCTERMS.hasPart, Literal(label)))
          shapes_graph.add((file_uri, DCTERMS.hasPart, URIRef(shape)))
      for shape in g.subjects(RDF.type, SKOS.ConceptScheme):
          # Get one of the labels
          for ontology_label in g.objects(shape, RDFS.label):
            if len(file_descriptions) < 1:
              file_descriptions.append(str(ontology_label))
          if len(file_descriptions) == 0:
            for label in g.objects(shape, DC.title):
              file_descriptions.append(str(label))
          if len(file_descriptions) == 0:
            for label in g.objects(shape, DCTERMS.title):
              file_descriptions.append(str(label))
          # Now add the description
          for comment in g.objects(shape, RDFS.comment):
            file_descriptions.append(str(comment))
          for label in g.objects(shape, RDFS.comment):
            file_descriptions.append(str(label))
          for description in g.objects(shape, DCTERMS.description):
            file_descriptions.append(str(description))

      # Search for ShEx Shapes and ShapeAnd
      # TODO: Improve
      for shape in g.subjects(RDF.type, SHEX.ShapeAnd):
          shape_found = True
          shapes_graph.add((file_uri, RDF.type, SCHEMA['SoftwareSourceCode']))
          shapes_graph.add((file_uri, RDF.type, SHEX.Schema))
          shapes_graph.add((file_uri, RDFS.label, Literal(rdf_file_path.name)))
          shapes_graph.add((file_uri, SCHEMA.codeRepository, URIRef(repo_url)))
          shapes_graph = add_shape(g, shapes_graph, file_uri, shape)
      for shape in g.subjects(RDF.type, SHEX.Shape):
          shape_found = True
          shapes_graph.add((file_uri, RDF.type, SCHEMA['SoftwareSourceCode']))
          shapes_graph.add((file_uri, RDF.type, SHEX.Schema))
          shapes_graph.add((file_uri, RDFS.label, Literal(rdf_file_path.name)))
          shapes_graph.add((file_uri, SCHEMA.codeRepository, URIRef(repo_url)))
          shapes_graph = add_shape(g, shapes_graph, file_uri, shape)

    # Add the git repo to the graph
    if shape_found:
      logging.debug('[' + datetime.now().strftime("%m/%d/%Y, %H:%M:%S") + '] ' + "✔️ Shape found in file " + github_file_url)
      shapes_graph.add((URIRef(repo_url), RDF.type, SCHEMA['DataCatalog']))
      shapes_graph.add((URIRef(repo_url), RDFS.label, Literal(repo_url.rsplit('/', 1)[1])))
      if (repo_description):
        shapes_graph.add((URIRef(repo_url), RDFS.comment, Literal(repo_description)))

    return shapes_graph


def check_run_time(time_start, repo_list, current_repo):
  """Check for how long the script has been running to stop before hitting GitHub Actions workflow 6h job limit
  Stop if more than 5h30 (330 min)
  """
  runtime = datetime.now() - time_start
  # if runtime > timedelta(seconds=40):
  if runtime >= timedelta(minutes=330):
    repo_missing = repo_list[repo_list.index(current_repo):]
    add_to_report('Running for ' + str(runtime) + ' - stopping the workflow to avoid hitting GitHub Actions runner 6h job limits\n\n'
      + 'The following repositories did not have the time to be processed:\n\n\n' + str(repo_missing))
    # Stop the script
    # sys.exit(0)

def add_to_report(report_message, file_provided=None):
  """A function to write file parsing error logs to a markdown file report
  """
  report_file = "\n\n---\n" + report_message
  if file_provided:
    # Report error for a file not properly parsed, ignore xml and json
    file_provided = str(file_provided)
    if file_provided.endswith('.xml') or file_provided.endswith('.json'):
      report_file = ''
    else:
      report_file = 'File: ' + file_provided + '\n\n' + report_file
      report_message = '🗑 File: ' + file_provided + ' - ' + report_message
  if report_file:
    report_file = "\n\n---\n" + report_file
    logging.info('[' + datetime.now().strftime("%m/%d/%Y, %H:%M:%S") + '] ' + report_message.replace('\n', ''))
    with open(root / '../REPORT.md', 'a') as f:
      f.write(report_file)

def generate_github_file_url(repo_url, filepath, branch):
  """GitHub does not provide a way to get the download URL directly from GraphQL
  So we need to build the file URL from the github repo URL + branch + file path
  """
  if repo_url.startswith('https://gitlab.com/'):
    file_url = repo_url + '/-/raw/' + branch + '/' + urllib.parse.quote(filepath)
  elif repo_url.startswith('https://gitee.com/'):
    file_url = repo_url + '/raw/' + branch + '/' + urllib.parse.quote(filepath)
  else:
    file_url = repo_url.replace("https://github.com/", "https://raw.githubusercontent.com/")
    file_url += '/' + branch + '/' + urllib.parse.quote(filepath)
  return file_url

def get_files(extensions):
    """List all files with given extensions in subfolders
    :param extensions: Array of extensions, e.g. .ttl, .rdf
    """
    all_files = []
    for ext in extensions:
        all_files.extend(pathlib.Path('cloned_repo').rglob(ext))
    return all_files

def test_sparql_endpoint(sparql_endpoint):
    """Test endpoint with SPARQLWrapper, add it to hash of valid or failing endpoints
    Then add them in the graph as schema:EntryPoint
    """
    if sparql_endpoint in VALID_ENDPOINTS.keys():
      return True
    elif sparql_endpoint in FAILED_ENDPOINTS.keys():
      return False
    else:
      sparql_test_query = 'SELECT * WHERE { ?s ?p ?o } LIMIT 10'
      sparql = SPARQLWrapper(sparql_endpoint)
      sparql.setReturnFormat(JSON)
      sparql.setQuery(sparql_test_query)
      logging.debug('✨️ Testing SPARQL endpoint: ' + str(sparql_endpoint))
      try:
        results = sparql.query().convert()
        logging.debug('✔️ Done tested, valid: ' + str(sparql_endpoint))
        # Check SPARQL query sent back at least 5 triples
        results_array = results["results"]["bindings"]
        if len(results_array) > 4:
          VALID_ENDPOINTS[sparql_endpoint] = {
            'label': sparql_endpoint
          }
          return True
        else:
          FAILED_ENDPOINTS[sparql_endpoint] = 'failed'
          return False
      except Exception as e:
        logging.debug('✔️ Done tested, failed: ' + str(sparql_endpoint))
        add_to_report('SPARQL endpoint failed: ' + sparql_endpoint + "\n\n" + str(e))
        return False

if __name__ == "__main__":
  # The script starts here
  root = pathlib.Path(__file__).parent.resolve()
  global VALID_ENDPOINTS
  VALID_ENDPOINTS = {}
  global FAILED_ENDPOINTS
  FAILED_ENDPOINTS = {}
  # Repos with issues or too big (hitting GitHub Actions 6h limit)
  global SKIP_REPOS
  SKIP_REPOS = [
    'https://gitee.com/mad_matrix/OntologyModelin', 
    'https://gitee.com/jiahuarao/HumanDiseaseOntology',
    'https://gitee.com/smallei/HumanDiseaseOntology',
    'https://github.com/garethr/kubernetes-json-schema',
    'https://github.com/garethr/openshift-json-schema',
  ]
  # Not sure if garethr repos are actually causing issues, but openapi search overtime when reaching it
  main(sys.argv)

