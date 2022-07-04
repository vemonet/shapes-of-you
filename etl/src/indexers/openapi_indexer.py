import json
import logging
import os
import shutil
from datetime import datetime, timedelta
from typing import List, Optional

from prance import ResolvingParser
from pydantic import BaseModel, Field, validator
from rdflib import RDF, ConjunctiveGraph, Graph, Literal, Namespace, URIRef
from rdflib.namespace import DC, DCTERMS, OWL, RDFS, SKOS, VOID, XSD
from src.config import CSVW, DCAT, NP_TEMPLATE, R2RML, RML, SCHEMA, SH, SHEX, SIO
from src.load import load_file_to_elastic, load_rdf_to_ldp
from src.models import IndexFile


# TODO: e.g. what to do with a big ontology?
# Upload the full onto RDFLib Graph in a graph named after the onto file uri  
# Iterate over concepts and add them to the ElasticSearch index
class Indexer(IndexFile):
    # format: str = 'rdf'
    extensions: List[str] = ['*.yml', '*.yaml', '*.json']


    def __init__(self, 
        *args,
        file_path: str,
        g: Graph,
        **kwargs,
    ) -> None:
        super().__init__(*args, **kwargs)
        self.filepath
        # self.uri = uri
        # Parse OpenAPI
        # parser = ResolvingParser(github_file_url)
        # self.filename = file_path.name
        # file_descriptions = []
        # if parser.specification['info']['title']:
        #   file_descriptions.append(parser.specification['info']['title'])
        # if parser.specification['info']['description']:
        #   file_descriptions.append(parser.specification['info']['description'])
        # if len(file_descriptions) > 0:
        #   shapes_graph.add((file_uri, RDFS.comment, Literal(' - '.join(file_descriptions))))