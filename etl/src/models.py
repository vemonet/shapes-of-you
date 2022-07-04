import json
import logging
import os
import shutil
from datetime import datetime, timedelta
from typing import List, Optional

from pydantic import BaseModel, Field, validator
from rdflib import RDF, ConjunctiveGraph, Graph, Literal, Namespace, URIRef
from rdflib.namespace import DC, DCTERMS, OWL, RDFS, SKOS, VOID, XSD
from src.config import CSVW, DCAT, NP_TEMPLATE, R2RML, RML, SCHEMA, SH, SHEX, SIO
from src.load import load_file_to_elastic, load_rdf_to_ldp

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
# SCHEMA['DataCatalog'] for git repos


class IndexRepo(BaseModel):
    uri: Optional[str] = None
    stars: Optional[int] = None
    label: Optional[str] = None
    description: Optional[str] = None
    keywords: Optional[List[str]] = None
    branch: Optional[str] = 'main'
    service: Optional[str] = None # TODO: improve, atm: github, gitlab, gitee...

    def __init__(self, 
        *args,
        uri: str,
        branch: str,
        description: str,
        service: str,
        **kwargs,
    ) -> None:
        super().__init__(*args, **kwargs)
        self.uri = uri
        self.branch = branch
        self.description = description
        self.service = service
        self.label = uri.rsplit('/', 1)[1]
        # self.repo_id = uri.rsplit('/')[-2] + '-' + uri.rsplit('/')[-1]

        logging.info('[' + datetime.now().strftime("%m/%d/%Y, %H:%M:%S") + '] 📥 Cloning ' + repo_url)
        shutil.rmtree('cloned_repo', ignore_errors=True, onerror=None)
        os.system('git clone --quiet --depth 1 --recurse-submodules --shallow-submodules ' + repo_url + ' cloned_repo')
        # os.chdir('cloned_repo') # Specifying the path where the cloned project needs to be copied

        rdf_extensions = []
        # First do RDF based files
        # Then do custom extensions

        # Special case for RDF to avoid parsing the same file multiple time
        # Iterate over all RDF file, parse them first, then all indexers supporting RDF
        for file_path in get_files(rdf_extensions):
            g = parse_rdf(file_path)
            for Indexer in indexers_folder:
                if Indexer.format = 'rdf':
                    indexed = Indexer(file_path=file_path, repo=self, g=g)
                
        # For custom file format (not RDF): iterate over all indexers,
        # then iterate over all files that have the extension provided as attribute.
        # Parsing will be done in the Indexer() constructor
        for Indexer in indexers_folder:
            Indexer.extensions
            for file_path in get_files(Indexer.extensions):
                indexed = Indexer(file_path=file_path, repo=self, g=None)



        # for rdf_file_path in get_files(['*.json', '*.jsonld', '*.json-ld']):
        #     shapes_graph = process_shapes_file('json-ld', shapes_graph, rdf_file_path, repo_url, branch, repo_description)
        #     indexed_file = Index

        # # TODO: move ShexJ to jsonld part?
        # for rdf_file_path in get_files(['*.shex', '*.shexj']):
        #     shapes_graph = process_shapes_file('shex', shapes_graph, rdf_file_path, repo_url, branch, repo_description)
        #     # TODO: uses classes
        #     # ParseFile(rdf_file_path, 'ttl') or ParseRdf(rdf_file_path)
        #     # Then ParseFile() calls IndexFile()
        #     # IndexFile(format='shex', rdf_file_path, repo)
        #     # Or: IndexShex(rdf_file_path, repo)

        # for rdf_file_path in get_files(['*.yml', '*.yaml', '*.json']):
        #     shapes_graph = process_shapes_file('openapi', shapes_graph, rdf_file_path, repo_url, branch, repo_description)

        # for rdf_file_path in get_files(['*.rq', '*.sparql']):
        #     shapes_graph = process_shapes_file('sparql', shapes_graph, rdf_file_path, repo_url, branch, repo_description)

        # for rdf_file_path in get_files(['*.n3']):
        #     shapes_graph = process_shapes_file('n3', shapes_graph, rdf_file_path, repo_url, branch, repo_description)

        # for rdf_file_path in get_files(['*.trig']):
        #     shapes_graph = process_shapes_file('trig', shapes_graph, rdf_file_path, repo_url, branch, repo_description)

        # for rdf_file_path in get_files(['*.json', '*.jsonld', '*.json-ld']):
        #     shapes_graph = process_shapes_file('json-ld', shapes_graph, rdf_file_path, repo_url, branch, repo_description)

        # for rdf_file_path in get_files(['*.xml', '*.rdf', '*.owl']):
        #     shapes_graph = process_shapes_file('xml', shapes_graph, rdf_file_path, repo_url, branch, repo_description)

        # for rdf_file_path in get_files(['*.ttl', '*.shacl']):
        #     shapes_graph = process_shapes_file('ttl', shapes_graph, rdf_file_path, repo_url, branch, repo_description)

        # for rdf_file_path in get_files(['*.nt']):
        #     shapes_graph = process_shapes_file('nt', shapes_graph, rdf_file_path, repo_url, branch, repo_description)

        # for rdf_file_path in get_files(['*.obo']):
        #     shapes_graph = process_shapes_file('obo', shapes_graph, rdf_file_path, repo_url, branch, repo_description)

        # dry_run = False
        # if dry_run:
        # shapes_graph.serialize('shapes-' + repo_id + '.ttl', format='turtle')
        # else:
        # load_rdf_to_ldp(shapes_graph, repo_id, git_service)


    def to_rdf(self) -> Graph:
        g = Graph()
        g.add((self.uri, RDF.type, SCHEMA['DataCatalog']))
        g.add((self.uri, RDFS.label, Literal(self.label)))
        if self.description:
            g.add((self.uri, RDFS.comment, Literal(self.description)))
        if self.license:
            g.add((self.uri, DC.license, URIRef(self.license)))
        return g

    def publish(self):
        load_rdf_to_ldp(self.to_rdf(), self.uri, self.service)
        # load_file_to_elastic(self.to_elastic_bulk())



class IndexFile(BaseModel):
    uri: str
    type: str
    repo: IndexRepo
    filename: Optional[str] = None
    label: Optional[str] = None
    description: Optional[str] = None
    license: Optional[str] = None # Get from repo?
    sparql_endpoint: Optional[str] = None

    repo_url: Optional[str] = None
    repo_stars: Optional[int] = None
    repo_description: Optional[str] = None
    
    # concepts_count: Optional[int] = None
    # sub: str = Field(...)
    # assessments: List[str] = []

    @validator('type')
    def validate_type(cls,type):
      if type not in types_map:
        raise ValueError(f'Type {type} is not valid, it must be in {str(types_map.keys())}')
      return type

    def to_rdf(self) -> Graph:
        g = Graph()
        g.add((self.uri, RDF.type, SCHEMA['SoftwareSourceCode']))
        g.add((self.uri, RDF.type, types_map[self.type]))
        g.add((self.uri, RDFS.label, Literal(self.label)))
        g.add((self.uri, RDFS.comment, Literal(self.description)))
        g.add((self.uri, DC.license, URIRef(self.license)))
        g.add((self.uri, SCHEMA.codeRepository, URIRef(self.repo_url)))
        # DCTERMS.hasPart
        return g

    def to_elastic_bulk(self) -> str:
        bulk = json.dumps({ "index" : { "_index" : "files", "_id" : self.uri } })
        bulk = bulk + '\n' + json.dumps(self.dict(exclude_none=True)) + '\n'
        return bulk

    def publish(self):
        load_rdf_to_ldp(self.to_rdf(), self.repo.uri, self.repo.service)
        load_file_to_elastic(self.to_elastic_bulk())



# TODO: e.g. what to do with a big ontology?
# Upload the full onto RDFLib Graph in a graph named after the onto file uri  
# Iterate over concepts and add them to the ElasticSearch index
class IndexOwl(IndexFile):
    def __init__(self, 
        *args,
        uri: str,
        g: Graph,
        **kwargs,
    ) -> None:
        super().__init__(*args, **kwargs)
        self.uri = uri
        # Search for OWL classes
        # for shape in g.subjects(RDF.type, OWL.Class):
        #     shape_found = True
        #     shapes_graph.add((file_uri, RDF.type, SCHEMA['SoftwareSourceCode']))
        #     shapes_graph.add((file_uri, RDF.type, OWL.Ontology))
        #     shapes_graph.add((file_uri, RDFS.label, Literal(rdf_file_path.name)))
        #     shapes_graph.add((file_uri, SCHEMA.codeRepository, URIRef(repo_url)))
        #     shapes_graph = add_shape(g, shapes_graph, file_uri, shape)
        #     shape_label = shape
        #     for label in g.objects(shape, RDFS.label):
        #         # Try to get the label of the class
        #         shape_label = label
        #     shapes_graph.add((file_uri, DCTERMS.hasPart, Literal(shape_label)))



class IndexConcept(BaseModel):
    uri: str
    type: str

    label: Optional[str] = None
    description: Optional[str] = None
    license: Optional[str] = None # Get from repo?
    # properties: Optional[str] = None ?

    # file: IndexFile
    # repo: IndexRepo
    file_url: Optional[str] = None
    file_description: Optional[str] = None

    repo_url: Optional[str] = None
    repo_stars: Optional[int] = None
    repo_label: Optional[str] = None
    repo_description: Optional[str] = None

    @validator('type')
    def validate_type(cls,type):
      if type not in types_map:
        raise ValueError(f'Type {type} is not valid, it must be in {str(types_map.keys())}')
      return type

    def to_elastic_bulk(self) -> str:
        bulk = json.dumps({ "index" : { "_index" : "concepts", "_id" : self.uri } })
        bulk = bulk + '\n' + json.dumps(self.dict(exclude_none=True)) + '\n'
        return bulk