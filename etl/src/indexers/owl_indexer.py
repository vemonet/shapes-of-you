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
from src.models import IndexFile


# TODO: e.g. what to do with a big ontology?
# Upload the full onto RDFLib Graph in a graph named after the onto file uri
# Iterate over concepts and add them to the ElasticSearch index
class Indexer(IndexFile):
    format: str = 'rdf'
    # extensions: List[str] = ['*.json', '*.jsonld', '*.json-ld']


    def __init__(self,
        *args,
        uri: str,
        g: Graph,
        **kwargs,
    ) -> None:
        super().__init__(*args, **kwargs)
        self.uri = uri
        # TODO: exctract metadata from OWL ontology
        # Search for OWL classes
        for shape in g.subjects(RDF.type, OWL.Class):
            shape_found = True
            shapes_graph.add((file_uri, RDF.type, SCHEMA['SoftwareSourceCode']))
            shapes_graph.add((file_uri, RDF.type, OWL.Ontology))
            shapes_graph.add((file_uri, RDFS.label, Literal(rdf_file_path.name)))
            shapes_graph.add((file_uri, SCHEMA.codeRepository, URIRef(repo_url)))
            shapes_graph = add_shape(g, shapes_graph, file_uri, shape)
            shape_label = shape
            for label in g.objects(shape, RDFS.label):
                # Try to get the label of the class
                shape_label = label
            shapes_graph.add((file_uri, DCTERMS.hasPart, Literal(shape_label)))



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