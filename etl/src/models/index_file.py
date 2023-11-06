import json
import logging
import os
import shutil
import pathlib
import urllib
from datetime import datetime, timedelta
from typing import List, Optional, Any, Dict

from pydantic import BaseModel, Field, validator, root_validator
from rdflib import RDF, ConjunctiveGraph, Graph, Literal, Namespace, URIRef
from rdflib.namespace import DC, DCTERMS, OWL, RDFS, SKOS, VOID, XSD
from src.config import CSVW, DCAT, NP_TEMPLATE, R2RML, RML, SCHEMA, SH, SHEX, SIO
from src.load import load_file_to_elastic, load_rdf_to_ldp
from src.utils import parse_rdf, types_map
# from src.models.index_repo import IndexRepo


class IndexFile(BaseModel):
    # uri: str
    type: str
    repo: Any
    # repo: IndexRepo
    file_path: Optional[str] = None
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

    @root_validator(skip_on_failure=True)
    def generate_github_file_url(cls, values) -> Dict:
        """GitHub does not provide a way to get the download URL directly from GraphQL
        So we need to build the file URL from the github repo URL + branch + file path
        """
        print(values)
        print(cls)
        if values["repo"].uri.startswith('https://gitlab.com/'):
            values["uri"] = values["repo"].uri + '/-/raw/' + values["repo"].branch + '/' + urllib.parse.quote(values["file_path"])
        elif values["repo"].uri.startswith('https://gitee.com/'):
            values["uri"] = values["repo"].uri + '/raw/' + values["repo"].branch + '/' + urllib.parse.quote(values["file_path"])
        else:
            values["uri"] = values["repo"].uri.replace("https://github.com/", "https://raw.githubusercontent.com/")
            values["uri"] += '/' + values["repo"].branch + '/' + urllib.parse.quote(values["file_path"])
        return values


    # def generate_github_file_url(repo_url, filepath, branch):
    #     """GitHub does not provide a way to get the download URL directly from GraphQL
    #     So we need to build the file URL from the github repo URL + branch + file path
    #     """
    #     if repo_url.startswith('https://gitlab.com/'):
    #         file_url = repo_url + '/-/raw/' + branch + '/' + urllib.parse.quote(filepath)
    #     elif repo_url.startswith('https://gitee.com/'):
    #         file_url = repo_url + '/raw/' + branch + '/' + urllib.parse.quote(filepath)
    #     else:
    #         file_url = repo_url.replace("https://github.com/", "https://raw.githubusercontent.com/")
    #         file_url += '/' + branch + '/' + urllib.parse.quote(filepath)
    #     return file_url



    # def __init__(self,
    #     *args,
    #     type: str,
    #     file_path: str,
    #     repo: Any,
    #     g: Graph,
    #     **kwargs,
    # ) -> None:
    #     super().__init__(*args, **kwargs)
    #     self.type = type
    #     self.file_path = file_path
    #     self.repo = repo
    #     self.g = g
    #     self.uri = self.generate_github_file_url(repo.uri, file_path, repo.branch)


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
# class IndexOwl(IndexFile):
#     def __init__(self,
#         *args,
#         uri: str,
#         g: Graph,
#         **kwargs,
#     ) -> None:
#         super().__init__(*args, **kwargs)
#         self.uri = uri
#         # Search for OWL classes
#         # for shape in g.subjects(RDF.type, OWL.Class):
#         #     shape_found = True
#         #     shapes_graph.add((file_uri, RDF.type, SCHEMA['SoftwareSourceCode']))
#         #     shapes_graph.add((file_uri, RDF.type, OWL.Ontology))
#         #     shapes_graph.add((file_uri, RDFS.label, Literal(rdf_file_path.name)))
#         #     shapes_graph.add((file_uri, SCHEMA.codeRepository, URIRef(repo_url)))
#         #     shapes_graph = add_shape(g, shapes_graph, file_uri, shape)
#         #     shape_label = shape
#         #     for label in g.objects(shape, RDFS.label):
#         #         # Try to get the label of the class
#         #         shape_label = label
#         #     shapes_graph.add((file_uri, DCTERMS.hasPart, Literal(shape_label)))

