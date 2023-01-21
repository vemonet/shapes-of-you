import logging
import os
import pathlib
import re
import shutil
import sys
import urllib
from datetime import datetime, timedelta

from rdflib import RDF, ConjunctiveGraph, Graph, Literal, Namespace, URIRef
from rdflib.namespace import DC, DCTERMS, OWL, RDFS, SKOS, VOID, XSD
from src.config import CSVW, DCAT, NP_TEMPLATE, R2RML, RML, SCHEMA, SH, SHEX, SIO
from rdflib.plugins.sparql.algebra import translateQuery
from rdflib.plugins.sparql.sparql import Query
from SPARQLWrapper import JSON, POST, SPARQLWrapper

current_folder = pathlib.Path(__file__).parent.resolve()


types_map = {
    # RDF parser
    'shacl': SH.Shape,
    'csvw': CSVW.Schema,
    'dcat': DCAT.Dataset,
    'nanopub': NP_TEMPLATE.AssertionTemplate,
    'rml': RML.LogicalSource,
    'r2rml': R2RML.TriplesMap,
    'skos': SKOS.ConceptScheme,
    'owl': OWL.Ontology,

    # Specific parser
    'obo': SIO['SIO_000623'],
    'openapi': SCHEMA['APIReference'], # ['*.yml', '*.yaml', '*.json']
    'shex': SHEX.Schema,
    'sparql_query': SH.SPARQLFunction,
}


def parse_rdf(file, format=None) -> Graph:
  g = Graph()
  if not format:
    g.parse(file)
  else:
    g.parse(file, format=format)
  return g


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
    with open(current_folder / '../REPORT.md', 'a') as f:
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


def test_sparql_endpoint(sparql_endpoint, shapes_graph):
    """Test endpoint with SPARQLWrapper, add it to hash of valid or failing endpoints
    Then add them in the graph as schema:EntryPoint
    """
    # TODO: check if already added first?
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
            endpoint_label = sparql_endpoint
            shapes_graph.add((URIRef(sparql_endpoint), RDF.type, SCHEMA['EntryPoint']))
            shapes_graph.add((URIRef(sparql_endpoint), RDFS.label, Literal(endpoint_label)))
            # shapes_graph.add((URIRef(sparql_endpoint), RDFS.comment, Literal(endpoint_label)))

            return shapes_graph
        else:
            return shapes_graph
    except Exception as e:
        logging.debug('✔️ Done tested, failed: ' + str(sparql_endpoint))
        add_to_report('SPARQL endpoint failed: ' + sparql_endpoint + "\n\n" + str(e))
    return shapes_graph