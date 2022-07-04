import logging
import os
import pathlib
import shutil
from datetime import datetime, timedelta

import obonet
import requests
import yaml
from prance import ResolvingParser
from rdflib import RDF, ConjunctiveGraph, Graph, Literal, Namespace, URIRef
from rdflib.namespace import DC, DCTERMS, OWL, RDFS, SKOS, VOID, XSD
from rdflib.plugins.sparql.algebra import translateQuery
from rdflib.plugins.sparql.sparql import Query
from src.config import CSVW, DCAT, NP_TEMPLATE, R2RML, RML, SCHEMA, SH, SHEX, SIO
from src.load import load_rdf_to_ldp
from src.models import IndexFile
from src.utils import add_to_report, generate_github_file_url, test_sparql_endpoint


def get_files(extensions):
    """List all files with given extensions in subfolders
    :param extensions: Array of extensions, e.g. .ttl, .rdf
    """
    all_files = []
    for ext in extensions:
        all_files.extend(pathlib.Path('cloned_repo').rglob(ext))
    return all_files



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
        # TODO: uses classes
        # ParseFile(rdf_file_path, 'ttl') or ParseRdf(rdf_file_path)
        # Then ParseFile() calls IndexFile()
        # IndexFile(format='shex', rdf_file_path, repo)
        # Or: IndexShex(rdf_file_path, repo)

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

    repo_id = repo_url.rsplit('/')[-2] + '-' + repo_url.rsplit('/')[-1]

    dry_run = False
    if dry_run:
      shapes_graph.serialize('shapes-' + repo_id + '.ttl', format='turtle')
    else:
      load_rdf_to_ldp(shapes_graph, repo_id, git_service)
      shapes_graph = Graph()

    return shapes_graph



def add_shape(g, shapes_graph, file_uri, shape_uri):
  """Function to add shapes extracted from shape file to the main graph"""
  for label in g.objects(shape_uri, RDFS.label):
      # Try to get the label of the class
      shape_label = label
      shapes_graph.add((URIRef(shape_uri), RDFS.label, Literal(shape_label)))
  shapes_graph.add((file_uri, DCTERMS.hasPart, URIRef(shape_uri)))
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
                shapes_graph = test_sparql_endpoint(sparql_endpoint, shapes_graph)
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
          # try:
          #   # Parse the query to get its operation (select, construct..)
          #   parsed_query = translateQuery(Query.parseString(query_string, parseAll=True))
          #   query_operation = re.sub(r"(\w)([A-Z])", r"\1 \2", parsed_query.algebra.name)
          #   shapes_graph.add((file_uri, DCTERMS.hasPart, Literal(query_operation)))
          # except:
          #   shapes_graph.add((file_uri, DCTERMS.hasPart, Literal('SPARQL Query')))
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