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
from src.utils import parse_rdf, types_map


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