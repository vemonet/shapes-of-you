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


class ParseRdf(BaseModel):
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

        # TODO: Then call IndexOwl(g) or IndexShacl(g)
        # One 



