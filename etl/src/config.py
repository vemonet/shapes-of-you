import os

from rdflib import RDF, ConjunctiveGraph, Graph, Literal, Namespace, URIRef

GITHUB_TOKEN = os.environ.get("API_GITHUB_TOKEN", "")
GITLAB_TOKEN = os.environ.get("GITLAB_TOKEN", "")
GITEE_TOKEN = os.environ.get("GITEE_TOKEN", "")

# 62392 files in 1222 repositories
# ENDPOINT_URL = os.environ.get("ENDPOINT_URL", "https://data.index.semanticscience.org/sparql")
# ENDPOINT_USER = os.environ.get("ENDPOINT_USER", "dav")
# ENDPOINT_PASSWORD = os.environ.get("ENDPOINT_PASSWORD", "dba")
ENDPOINT_USER = os.environ.get("ENDPOINT_USER", "oxigraph")
ENDPOINT_PASSWORD = os.environ.get("ENDPOINT_PASSWORD", "oxigraphy")

ELASTIC_URL="elastic.index.semanticscience.137.120.31.148.nip.io"
# ELASTIC_URL="elastic.index.semanticscience.org"

BASE_URI="https://w3id.org/shapes-of-you"
# BASE_URI="https://w3id.org/um/ids/shapes"

RDFS = Namespace("http://www.w3.org/2000/01/rdf-schema#")
RDF = Namespace("http://www.w3.org/1999/02/22-rdf-syntax-ns#")
SH = Namespace("http://www.w3.org/ns/shacl#")
SHEX = Namespace("http://www.w3.org/ns/shex#")
SCHEMA = Namespace("https://schema.org/")
SIO = Namespace("http://semanticscience.org/resource/")
R2RML = Namespace("http://www.w3.org/ns/r2rml#")
RML = Namespace("http://semweb.mmlab.be/ns/rml#")
NP_TEMPLATE = Namespace("https://w3id.org/np/o/ntemplate/")
DCAT = Namespace("http://www.w3.org/ns/dcat#")
CSVW = Namespace("http://www.w3.org/ns/csvw#")

SKIP_REPOS = [
  'https://gitee.com/mad_matrix/OntologyModelin', 
  'https://gitee.com/jiahuarao/HumanDiseaseOntology',
  'https://gitee.com/smallei/HumanDiseaseOntology',
  'https://github.com/garethr/kubernetes-json-schema',
  'https://github.com/garethr/openshift-json-schema',
]