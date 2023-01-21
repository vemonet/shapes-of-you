import json
import logging
import os
import shutil
import pathlib
from datetime import datetime, timedelta
from typing import List, Optional

from pydantic import BaseModel, Field, validator
from rdflib import RDF, ConjunctiveGraph, Graph, Literal, Namespace, URIRef
from rdflib.namespace import DC, DCTERMS, OWL, RDFS, SKOS, VOID, XSD
from src.config import CSVW, DCAT, NP_TEMPLATE, R2RML, RML, SCHEMA, SH, SHEX, SIO
from src.load import load_file_to_elastic, load_rdf_to_ldp
from src.indexers import owl_indexer
from src.utils import parse_rdf


def get_files(extensions):
    """List all files with given extensions in subfolders
    :param extensions: Array of extensions, e.g. .ttl, .rdf
    """
    all_files = []
    for ext in extensions:
        all_files.extend(pathlib.Path('cloned_repo').rglob(ext))
    return all_files


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

        logging.info('[' + datetime.now().strftime("%m/%d/%Y, %H:%M:%S") + '] 📥 Cloning ' + uri)
        shutil.rmtree('cloned_repo', ignore_errors=True, onerror=None)
        os.system('git clone --quiet --depth 1 --recurse-submodules --shallow-submodules ' + uri + ' cloned_repo')
        # os.chdir('cloned_repo') # Specifying the path where the cloned project needs to be copied

        indexers = [owl_indexer.Indexer]

        rdf_extensions = [
            {
                "format": "ttl",
                "regexs": ['*.ttl', '*.shacl']
            },
            {
                "format": "trig",
                "regexs": ['*.trig']
            },
            {
                "format": "xml",
                "regexs": ['*.xml', '*.rdf', '*.owl']
            },
        ]
        # First do RDF based files
        # Then do custom extensions

        # Special case for RDF to avoid parsing the same file multiple time
        # Iterate over all RDF file, parse them first, then all indexers supporting RDF

        print(rdf_extensions)
        for rdf_ext in rdf_extensions:
            # for regex in rdf_ext['regexs']:
            #     print(rdf_extensions)
            for file_path in get_files(rdf_ext['regexs']):
                g = parse_rdf(file_path, rdf_ext['format'])
                for Indexer in indexers:
                    if Indexer.format == 'rdf':
                        indexed = Indexer(file_path=file_path, repo=self, g=g)
                        print(indexed)

        # For custom file format (not RDF): iterate over all indexers,
        # then iterate over all files that have the extension provided as attribute.
        # Parsing will be done in the Indexer() constructor
        # for Indexer in indexers_folder:
        #     Indexer.extensions
        #     for file_path in get_files(Indexer.extensions):
        #         indexed = Indexer(file_path=file_path, repo=self, g=None)



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

