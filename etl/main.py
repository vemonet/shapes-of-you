import logging
import os
import pathlib
import re
import shutil
import sys
import urllib
from datetime import datetime, timedelta

import gitlab
import obonet
import requests
import yaml
# from d2s.sparql_operations import insert_graph_in_sparql_endpoint
from prance import ResolvingParser
from pyshexc.parser_impl import generate_shexj
from python_graphql_client import GraphqlClient
from rdflib import RDF, ConjunctiveGraph, Graph, Literal, Namespace, URIRef
from rdflib.namespace import DC, DCTERMS, OWL, RDFS, SKOS, VOID, XSD
from rdflib.plugins.sparql.algebra import translateQuery
from rdflib.plugins.sparql.sparql import Query
from SPARQLWrapper import JSON, POST, SPARQLWrapper
from src.config import GITEE_TOKEN, GITHUB_TOKEN, GITLAB_TOKEN, SCHEMA
from src.fetch import (
    fetch_from_gitee,
    fetch_from_github,
    fetch_from_github_extra,
    fetch_from_gitlab,
    fetch_from_lod,
    fetch_from_yummydata,
)
from src.load import load_rdf_to_ldp
from src.utils import current_folder, test_sparql_endpoint

# from rdflib import plugin
# from rdflib.serializer import Serializer
# from rdflib.plugins.sparql.parser import Query
# from rdflib.plugins.sparql.processor import translateQuery



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
  with open(current_folder / '../REPORT.md', 'w') as f:
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
    shapes_graph = fetch_from_lod(shapes_graph)

    shapes_graph = fetch_from_yummydata(shapes_graph)

    # Extras SPARQL endpoints to check
    extra_endpoints = []
    with open(str(current_folder) + '/../EXTRAS_SPARQL_ENDPOINTS.txt', 'r') as f:
      for line in f:
        extra_endpoints.append(line.rstrip('\n').strip())
    for endpoint in extra_endpoints:
      shapes_graph = test_sparql_endpoint(endpoint, shapes_graph)

    load_rdf_to_ldp(shapes_graph, 'lod-cloud', 'apis')

  # print(f"Number of triples generated: {len(shapes_graph)}")
  # shapes_graph.serialize('shapes-rdf.ttl', format='turtle')



if __name__ == "__main__":
  # The script starts here
  
  # Not sure if garethr repos are actually causing issues, but openapi search overtime when reaching it
  main(sys.argv)

