import os
import sys
import shutil
import pathlib
from datetime import datetime, timedelta
import re
import urllib
import requests

import yaml
from prance import ResolvingParser
from rdflib import Graph, plugin, Literal, RDF, URIRef, Namespace
from rdflib.serializer import Serializer
from rdflib.namespace import RDFS, XSD, DC, DCTERMS, VOID, OWL, SKOS
from rdflib.plugins.sparql.parser import Query, UpdateUnit
from rdflib.plugins.sparql.processor import translateQuery
from SPARQLWrapper import SPARQLWrapper, POST, JSON
import obonet
from pyshexc.parser_impl import generate_shexj

from python_graphql_client import GraphqlClient
import gitlab

# from logging import exception

SPARQL_ENDPOINT_URL='https://graphdb.dumontierlab.com/repositories/shapes-registry'
SPARQL_ENDPOINT_UPDATE_URL='https://graphdb.dumontierlab.com/repositories/shapes-registry/statements'
SPARQL_ENDPOINT_USERNAME='import_user'
SPARQL_ENDPOINT_PASSWORD = os.getenv('SPARQL_PASSWORD')
GITHUB_TOKEN = os.environ.get("API_GITHUB_TOKEN", "")
GITLAB_TOKEN = os.environ.get("GITLAB_TOKEN", "")
GITEE_TOKEN = os.environ.get("GITEE_TOKEN", "")

RDFS = Namespace("http://www.w3.org/2000/01/rdf-schema#")
RDF = Namespace("http://www.w3.org/1999/02/22-rdf-syntax-ns#")
SH = Namespace("http://www.w3.org/ns/shacl#")
SHEX = Namespace("http://www.w3.org/ns/shex#")
SCHEMA = Namespace("https://schema.org/")
SIO = Namespace("http://semanticscience.org/resource/")

def main(argv):
  if len(argv) > 1:
    git_registry = argv[1].lower()
  else:
    git_registry = 'github'

  github_direct_search = False
  # Default topics if not provided
  topics = 'owl,shacl-shapes,shex,grlc,skos,obofoundry'
  if len(argv) > 2:
    topics = argv[2]
    if git_registry != 'github-extras':
      if topics.startswith('direct:'):
        github_direct_search = True
        topics = topics.replace('direct:', '')
      topics = topics.split(',')
  print('[' + datetime.now().strftime("%m/%d/%Y, %H:%M:%S") + '] 🗂  Indexing topics: ' + str(topics))

  # Reset report file
  with open(root / '../REPORT.md', 'w') as f:
    f.write('## Fails loading files to `rdflib`\n\n' +
      '**Indexing topics**: `' + '`, `'.join(topics) + '`'
      '\n\n*Please check if your RDF file is properly formatted. We recommend to **use https://www.easyrdf.org/converter to get better insights on the error**, and store the shapes in `.ttl` files*\n\n\n')

  client = GraphqlClient(endpoint="https://api.github.com/graphql")
  shapes_graph = Graph()

  # Default topics list is used if not provided
  if git_registry == 'github':
    shapes_graph = fetch_from_github(shapes_graph, client, GITHUB_TOKEN, topics, github_direct_search)

  elif git_registry == 'github-extras':
    shapes_graph = fetch_from_github_extra(shapes_graph, client, GITHUB_TOKEN, topics)

  elif git_registry == 'gitlab':
    gl = gitlab.Gitlab('https://gitlab.com', private_token=GITLAB_TOKEN)
    shapes_graph = fetch_from_gitlab(shapes_graph, gl, topics)

  elif git_registry == 'gitee':
    shapes_graph = fetch_from_gitee(shapes_graph, GITEE_TOKEN, topics)

  # Add all valids SPARQL graphs we found
  for sparql_endpoint, endpoint_metadata in VALID_ENDPOINTS.items():
    shapes_graph.add((URIRef(sparql_endpoint), RDF.type, SCHEMA['EntryPoint']))
    shapes_graph.add((URIRef(sparql_endpoint), RDFS.label, Literal(endpoint_metadata['label'])))
    if 'description' in endpoint_metadata:
      shapes_graph.add((URIRef(sparql_endpoint), RDFS.comment, Literal(endpoint_metadata['description'])))

  shapes_graph.serialize('shapes-rdf.ttl', format='turtle')

def check_run_time(time_start, repo_list, current_repo):
  """Check for how long the script has been running to stop before hitting GitHub Actions workflow 6h job limit
  Stop if more than 5h45 (345 min)
  """
  runtime = datetime.now() - time_start
  # if runtime > timedelta(seconds=40):
  if runtime > timedelta(minutes=345):
    print('[' + datetime.now().strftime("%m/%d/%Y, %H:%M:%S") + '] Running for ' + str(runtime) + ' - stopping the workflow to avoid hitting GitHub Actions runner 6h job limits')
    repo_missing = repo_list[repo_list.index(current_repo):]
    add_to_report('Running for ' + str(runtime) + ' - stopping the workflow to avoid hitting GitHub Actions runner 6h job limits\n\n'
      + 'The following repositories did not have the time to be processed:\n\n\n' + str(repo_missing))
    return True
  else:
    return False

def add_to_report(report_string):
  with open(root / '../REPORT.md', 'a') as f:
    f.write(report_string)

def generate_github_file_url(repo_url, filepath, branch):
  """GitHub does not provide a way to get the download URL directly from GraphQL
  So we need to build the file URL from the github repo URL + branch + file path
  """
  # file_url = ''
  if repo_url.startswith('https://gitlab.com/'):
    file_url = repo_url + '/-/raw/' + branch + '/' + urllib.parse.quote_plus(filepath)
  elif repo_url.startswith('https://gitee.com/'):
    file_url = repo_url + '/raw/' + branch + '/' + urllib.parse.quote_plus(filepath)
  else:
    file_url = repo_url.replace("https://github.com/", "https://raw.githubusercontent.com/")
    file_url += '/' + branch + '/' + urllib.parse.quote_plus(filepath)
  # https://gitlab.com/european-data-portal/metrics/edp-metrics-validating-shacl/-/raw/master/src/main/resources/config.schema.json

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
    Large function, contain parsing for all formats: RDF, OBO, ShEx, OpenAPI...
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
          shapes_graph.add((file_uri, DC.source, URIRef(repo_url)))
          shape_label = data.get('name')
          if not shape_label:
            shape_label = id_
          shapes_graph.add((file_uri, DCTERMS.hasPart, Literal(shape_label)))
      except Exception as e:
        # print('[' + datetime.now().strftime("%m/%d/%Y, %H:%M:%S") + '] 🗑 Issue with OBO parser for file ' + github_file_url)
        add_to_report('File: ' + github_file_url + "\n\n"
              + 'In repository: ' + repo_url + "\n> " 
              + str(e) + "\n\n---\n")

    # Index OpenAPI files
    elif shape_format == 'openapi':
      try:
        parser = ResolvingParser(github_file_url)
        shape_found = True
        shapes_graph.add((file_uri, RDF.type, SCHEMA['SoftwareSourceCode']))
        shapes_graph.add((file_uri, RDF.type, SCHEMA['WebAPI']))
        shapes_graph.add((file_uri, RDFS.label, Literal(rdf_file_path.name)))
        shapes_graph.add((file_uri, DC.source, URIRef(repo_url)))
        file_descriptions = []
        if parser.specification['info']['title']:
          file_descriptions.append(parser.specification['info']['title'])
        if parser.specification['info']['description']:
          file_descriptions.append(parser.specification['info']['description'])
        if len(file_descriptions) > 0:
          shapes_graph.add((file_uri, DC.description, Literal(' - '.join(file_descriptions))))
        # if not shape_label:
        #   shape_label = id_
        # TODO: get operations hasPart?
        shapes_graph.add((file_uri, DCTERMS.hasPart, Literal('OpenAPI')))
      except Exception as e:
        pass
        # print('[' + datetime.now().strftime("%m/%d/%Y, %H:%M:%S") + '] 🗑 Issue with OpenAPI parser for file ' + github_file_url)
        # print(e)
        # add_to_report('File: ' + github_file_url + "\n\n"
        #       + 'In repository: ' + repo_url + "\n> " 
        #       + str(e) + "\n\n---\n")

    # Search for shex files
    elif shape_format == 'shex':
      # no parsing possible for shex
      shape_found = True
      # TODO: use https://schema.org/SoftwareSourceCode ?
      shapes_graph.add((file_uri, RDF.type, SCHEMA['SoftwareSourceCode']))
      shapes_graph.add((file_uri, RDF.type, SHEX.Schema))
      shapes_graph.add((file_uri, RDFS.label, Literal(rdf_file_path.name)))
      shapes_graph.add((file_uri, DCTERMS.hasPart, Literal('ShEx model')))
      shapes_graph.add((file_uri, DC.source, URIRef(repo_url)))
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

    # Parse SPARQL query files
    elif shape_format == 'sparql':
      shape_found = True
      shapes_graph.add((file_uri, RDF.type, SCHEMA['SoftwareSourceCode']))
      shapes_graph.add((file_uri, RDF.type, SH.SPARQLFunction))
      shapes_graph.add((file_uri, RDFS.label, Literal(rdf_file_path.name)))
      shapes_graph.add((file_uri, DC.source, URIRef(repo_url)))
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
            sparql_endpoint = grlc_metadata['endpoint']
            shapes_graph.add((file_uri, VOID.sparqlEndpoint, Literal(sparql_endpoint)))
            # TODO: check if in hashes of already tested endpoints valid and failing3
            # Test endpoint with SPARQLWrapper, add it to hash of valid or failing endpoints
            # Then, like repos, add them as schema:EntryPoint
            if sparql_endpoint not in VALID_ENDPOINTS.keys() and sparql_endpoint not in FAILED_ENDPOINTS.keys():
              sparql_test_query = 'SELECT * WHERE { ?s ?p ?o } LIMIT 10'
              sparql = SPARQLWrapper(sparql_endpoint)
              sparql.setReturnFormat(JSON)
              sparql.setQuery(sparql_test_query)
              try:
                results = sparql.query().convert()
                # Check SPARQL query sent back at least 5 triples
                results_array = results["results"]["bindings"]
                if len(results_array) > 4:
                  VALID_ENDPOINTS[sparql_endpoint] = {
                    'label': sparql_endpoint
                  }
                else:
                  FAILED_ENDPOINTS[sparql_endpoint] = 'failed'
              except Exception as e:
                add_to_report('SPARQL endpoint failed: ' + sparql_endpoint + "\n\n"
                  + str(e) + "\n\n---\n")


          if 'summary' in grlc_metadata and grlc_metadata['summary']:
            file_descriptions.append(grlc_metadata['summary'])
          if 'description' in grlc_metadata and grlc_metadata['description']:
            file_descriptions.append(grlc_metadata['description'])
            
          if len(file_descriptions) > 0:
            shapes_graph.add((file_uri, DC.description, Literal(' - '.join(file_descriptions))))
          # If default params described for grlc SPARQL query we add then as shapes
          if 'defaults' in grlc_metadata:
            for args in grlc_metadata['defaults']:
              for arg, default_label in args.items():
                shapes_graph.add((file_uri, DCTERMS.hasPart, Literal(arg)))

        try:
          # Parse query to get its operation (select, construct..)
          parsed_query = translateQuery(Query.parseString(query_string, parseAll=True))
          query_operation = re.sub(r"(\w)([A-Z])", r"\1 \2", parsed_query.algebra.name)
          shapes_graph.add((file_uri, DCTERMS.hasPart, Literal(query_operation)))
        except:
          shapes_graph.add((file_uri, DCTERMS.hasPart, Literal('SPARQL Query')))

    # Parse RDF files
    else:
      try:
          g.parse(str(rdf_file_path.absolute()), format=shape_format)
      except Exception as e:
          print('[' + datetime.now().strftime("%m/%d/%Y, %H:%M:%S") + '] 🗑 RDF parser for ' + shape_format + ' did not worked for the file ' + github_file_url)
          if not str(rdf_file_path).endswith('.xml') and not str(rdf_file_path).endswith('.json'):
              add_to_report('File: ' + github_file_url + " parsed as " + shape_format + "\n\n"
                  + 'In repository: ' + repo_url + "\n> " 
                  + str(e) + "\n\n---\n")

      # Search for SHACL shapes
      for shape in g.subjects(RDF.type, SH.NodeShape):
          # add_shape_to_graph(shapes_graph, rdf_file_path, github_file_url, repo_url, shape_uri, shape_type)
          shape_found = True
          shapes_graph.add((file_uri, RDF.type, SCHEMA['SoftwareSourceCode']))
          shapes_graph.add((file_uri, RDF.type, SH.Shape))
          shapes_graph.add((file_uri, RDFS.label, Literal(rdf_file_path.name)))
          shapes_graph.add((file_uri, DC.source, URIRef(repo_url)))
          shape_label = shape
          for label in g.objects(shape, RDFS.label):
              # Try to get the label of the shape
              shape_label = label
              # Fixing
          shapes_graph.add((file_uri, DCTERMS.hasPart, Literal(shape_label)))

      # Search for OWL classes, limit to max 300 classes/concepts retrieved
      classes_limit = 300
      classes_count = 0
      for shape in g.subjects(RDF.type, OWL.Class):
          # add_shape_to_graph(shapes_graph, rdf_file_path, github_file_url, repo_url, shape_uri, shape_type)
          shape_found = True
          shapes_graph.add((file_uri, RDF.type, SCHEMA['SoftwareSourceCode']))
          shapes_graph.add((file_uri, RDF.type, OWL.Ontology))
          shapes_graph.add((file_uri, RDFS.label, Literal(rdf_file_path.name)))
          shapes_graph.add((file_uri, DC.source, URIRef(repo_url)))
          shape_label = shape
          for label in g.objects(shape, RDFS.label):
              # Try to get the label of the class
              shape_label = label
          shapes_graph.add((file_uri, DCTERMS.hasPart, Literal(shape_label)))
          classes_count += 1
          if classes_count >= classes_limit:
            break

      # Get rdfs:label of owl:Ontology and shaclTest:Validate for file description
      file_descriptions = []
      for shape in g.subjects(RDF.type, OWL.ontology):
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
          for label in g.objects(shape, DC.description):
            file_descriptions.append(str(label))
          for description in g.objects(shape, DCTERMS.description):
            file_descriptions.append(str(description))
      for shape in g.subjects(RDF.type, URIRef('http://www.w3.org/ns/shacl-test#Validate')):
          for ontology_label in g.objects(shape, RDFS.label):
            file_descriptions.append(str(ontology_label))
      if len(file_descriptions) > 0:
        shapes_graph.add((file_uri, DC.description, Literal(' - '.join(file_descriptions))))

      # Get SKOS concepts and concept scheme
      classes_count = 0
      for shape in g.subjects(RDF.type, SKOS.Concept):
          # add_shape_to_graph(shapes_graph, rdf_file_path, github_file_url, repo_url, shape_uri, shape_type)
          shape_found = True
          shapes_graph.add((file_uri, RDF.type, SCHEMA['SoftwareSourceCode']))
          shapes_graph.add((file_uri, RDF.type, SKOS.ConceptScheme))
          shapes_graph.add((file_uri, RDFS.label, Literal(rdf_file_path.name)))
          shapes_graph.add((file_uri, DC.source, URIRef(repo_url)))
          shape_label = shape
          for label in g.objects(shape, SKOS.prefLabel):
              # Try to get the label of the class
              shape_label = label
          shapes_graph.add((file_uri, DCTERMS.hasPart, Literal(shape_label)))
          classes_count += 1
          if classes_count >= classes_limit:
            break
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
          for label in g.objects(shape, DC.description):
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
          shapes_graph.add((file_uri, DC.source, URIRef(repo_url)))
          shape_label = shape
          for label in g.objects(shape, RDFS.label):
              # Try to get the label of the shape
              shape_label = label
          shapes_graph.add((file_uri, DCTERMS.hasPart, Literal(shape_label)))

      for shape in g.subjects(RDF.type, SHEX.Shape):
          shape_found = True
          shapes_graph.add((file_uri, RDF.type, SCHEMA['SoftwareSourceCode']))
          shapes_graph.add((file_uri, RDF.type, SHEX.Schema))
          shapes_graph.add((file_uri, RDFS.label, Literal(rdf_file_path.name)))
          shapes_graph.add((file_uri, DC.source, URIRef(repo_url)))
          shape_label = shape
          for label in g.objects(shape, RDFS.label):
              # Try to get the label of the shape
              shape_label = label
          shapes_graph.add((file_uri, DCTERMS.hasPart, Literal(shape_label)))

    # Add repository RDF
    if shape_found:
      shapes_graph.add((URIRef(repo_url), RDF.type, SCHEMA['codeRepository']))
      # TODO: change, schema:codeRepository is a property, not a class, but not much available..
      shapes_graph.add((URIRef(repo_url), RDFS.label, Literal(repo_url.rsplit('/', 1)[1])))
      if (repo_description):
        shapes_graph.add((URIRef(repo_url), RDFS.comment, Literal(repo_description)))

    return shapes_graph

def clone_and_process_repo(shapes_graph, repo_url, branch, repo_description):
    print('[' + datetime.now().strftime("%m/%d/%Y, %H:%M:%S") + '] 📥 Cloning ' + repo_url)
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

    for rdf_file_path in get_files(['*.trig', '*.n3']):
        shapes_graph = process_shapes_file('n3', shapes_graph, rdf_file_path, repo_url, branch, repo_description)

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
        
    return shapes_graph


# Get all shapes for all repos with shacl-shapes tag
def github_graphql_get_shapes(github_topic, github_direct_search, after_cursor=None):
    if github_direct_search == False:
      github_topic = "topic:" + github_topic
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

# Retrieve releases in projects returned by the GraphQL calls
def fetch_from_github(shapes_graph, client, oauth_token, topics, github_direct_search):
    """Fetch shapes files from GitHub using the GraphQL API.
    We filter repositories by topics provided as argument
    """
    time_start = datetime.now()
    stopping_job = False
    for github_topic in topics:
      has_next_page = True
      after_cursor = None
      while has_next_page:
          data = client.execute(
              query=github_graphql_get_shapes(github_topic, github_direct_search, after_cursor),
              headers={"Authorization": "Bearer {}".format(oauth_token)},
          )
          if stopping_job:
            add_to_report('\n\n\nSkipping result pages for topic ' + str(github_topic))
            break
          # print(json.dumps(data, indent=4))
          for repository in data["data"]["search"]["repositories"]:
              stopping_job = check_run_time(time_start, data["data"]["search"]["repositories"], repository)
              if stopping_job:
                break
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
      if stopping_job:
        add_to_report('\n\n\nSkipping topic: ' + github_topic + ' in ' + str(topics))
        break
    
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

def fetch_from_github_extra(shapes_graph, client, oauth_token, filename):
  """Fetch additional Shapes files from a list of GitHub repos
  """
  extra_shapes_repositories = []
  with open(root / '../' + filename, 'r') as f:
    for line in f:
      extra_shapes_repositories.append(line.rstrip('\n').strip())

  for extra_repo in extra_shapes_repositories:
    data = client.execute(
        query=github_graphql_get_extra(extra_repo),
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
      print('🕊 No default_branch found for repo_url, using master')
      branch = 'master'
      repo_description = ''
    shapes_graph = clone_and_process_repo(shapes_graph, repo_url, branch, repo_description)
  return shapes_graph

# Fetch files from GitLab
def fetch_from_gitlab(shapes_graph, gl, topics):
    for search_topic in topics:
      gitlab_repos_list = gl.search(gitlab.SEARCH_SCOPE_PROJECTS, search_topic)
      for repo_json in gitlab_repos_list:
        repo_url = repo_json["web_url"]
        if 'default_branch' in repo_json:
          branch = repo_json['default_branch']
        else:
          branch = 'master'
          print('🕊 No default_branch found for repo_url, using master')
        repo_descriptions = []
        if repo_json["name"]:
          repo_descriptions.append(repo_json["name"])
        if repo_json["description"]:
          repo_descriptions.append(repo_json["description"])

        repo_description = ' - '.join(repo_descriptions)
        shapes_graph = clone_and_process_repo(shapes_graph, repo_url, branch, repo_description)
    
    return shapes_graph

def fetch_from_gitee(shapes_graph, token, topics):
    # Record time to avoid hitting GitHub Actions limits
    time_start = datetime.now()
    
    # Repos with issues or too big (hitting GitHub Actions 6h limit)
    avoid_repos = [
      'https://gitee.com/mad_matrix/OntologyModelin', 
      'https://gitee.com/jiahuarao/HumanDiseaseOntology'
    ]
    stopping_job = False

    for search_topic in topics:
      gitee_repos_list = requests.get('https://gitee.com/api/v5/search/repositories?access_token=' + token + '&page=1&per_page=100&order=desc&q=' + search_topic).json()
      for repo_json in gitee_repos_list:
        stopping_job = check_run_time(time_start, gitee_repos_list, repo_json)
        if stopping_job:
          break

        repo_url = repo_json["html_url"].rstrip('.git')

        if repo_url in avoid_repos:
          continue
        if 'default_branch' in repo_json:
          branch = repo_json['default_branch']
        else:
          branch = 'master'
          print('🕊 No default_branch found for repo_url, using master')
        repo_descriptions = []
        if repo_json["name"]:
          repo_descriptions.append(repo_json["name"])
        if repo_json["description"]:
          repo_descriptions.append(repo_json["description"])

        repo_description = ' - '.join(repo_descriptions)
        # repo_description = repo_json["shortDescriptionHTML"]
        shapes_graph = clone_and_process_repo(shapes_graph, repo_url, branch, repo_description)
      if stopping_job:
        add_to_report('\n\n\nSkipping topic: ' + search_topic + ' in ' + str(topics))
        break
    return shapes_graph


if __name__ == "__main__":
  # The script starts here
  root = pathlib.Path(__file__).parent.resolve()
  global VALID_ENDPOINTS
  VALID_ENDPOINTS = {}
  global FAILED_ENDPOINTS
  FAILED_ENDPOINTS = {}
  main(sys.argv)

