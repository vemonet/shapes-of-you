import os
import pandas as pd
from elasticsearch import Elasticsearch, helpers
import json
import time
from rdflib import Graph, Namespace, URIRef, Literal, RDF, RDFS, XSD
from rdflib.namespace import FOAF, DC
import requests

# PHP script: https://github.com/prefixcommons/data-ingest/blob/master/code/LSR2json.php

# https://docs.google.com/spreadsheets/d/1c4DmQqTGS4ZvJU_Oq2MFnLk-3UUND6pWhuMoP8jgZhg/edit#gid=0
googledocs_id = '1c4DmQqTGS4ZvJU_Oq2MFnLk-3UUND6pWhuMoP8jgZhg'
sheet = 'resource'

# Build URL to download CSV from google docs
googledocs_url = 'https://docs.google.com/spreadsheets/d/' + googledocs_id + '/gviz/tq?tqx=out:csv&sheet=' + sheet
print('Downloading ' + googledocs_url)

virtuoso_url = 'http://virtuoso:8890/DAV/ldp'
# virtuoso_url = 'http://data.registry.bio2kg.org/DAV/ldp'

es_index = 'registry'
# es_url = 'elasticsearch:9200'
es_url = 'http://elastic:' + os.getenv('ELASTIC_PASSWORD') + '@elasticsearch:9200'
# es_url = 'https://elastic:' + os.getenv('ELASTIC_PASSWORD') + '@elastic.registry.bio2kg.org'

es = Elasticsearch(
    [es_url],
    timeout=30, max_retries=100, retry_on_timeout=True
    # http_auth=('elastic', os.getenv('ELASTIC_PASSWORD')), port=9200,
)

## Load csv to a pandas dataframe from the URL
df = pd.read_csv(googledocs_url)
## Read from local to dev faster:
# df = pd.read_csv('data/data.csv')
print('Data loaded')

## Optional: check for duplicate values in 1st col, use .any() for boolean
# print(df['Preferred Prefix'].duplicated().sort_values())

col_mapping = {
    'Preferred Prefix': { 
        'label': 'preferredPrefix',
        'uri': 'http://identifiers.org/idot/preferredPrefix'
    },
    'Alt-prefix': { 
        'label': 'altPrefix',
        'uri': 'http://identifiers.org/idot/alternatePrefix'
    },
    'Provider Base URI': { 
        'label': 'providerBaseUri',
        'uri': 'http://rdfs.org/ns/void#uriRegexPattern'
    },
    'Alternative Base URI': { 
        'label': 'alternativeBaseUri',
        'uri': 'http://w3id.org/bio2kg/vocabulary#alternativeBaseUri'
    },
    'MIRIAM': { 
        'label': 'miriam',
        'uri': 'https://www.ebi.ac.uk/miriam/main/resources/'
    },
    'identifiers.org': {
        'label': 'identifiersPrefix',
        'uri': ''
    },
    'BioPortal Ontology ID': { 
        'label': 'bioportalOntologyId',
        'uri': 'http://w3id.org/bio2kg/vocabulary#bioportalOntologyId'
        ## value iri https://identifiers.org/bioportal:
    },
    'thedatahub': {  ## obsolete
        'label': 'thedatahub',
        'uri': 'http://w3id.org/bio2kg/vocabulary#theDataHubId'
    },
    'Abbreviation': { 
        'label': 'abbreviation',
        'uri': 'http://purl.org/linguistics/gold/abbreviation'
    },
    'Title': { 
        'label': 'title',
        'uri': 'http://purl.org/dc/terms/title'
    },
    'Description': { 
        'label': 'description',
        'uri': 'http://purl.org/dc/terms/description'
    },
    'PubMed ID': { 
        'label': 'pubmedId',
        'uri': 'http://w3id.org/bio2kg/vocabulary#pubmedId'
        ## value iri 'http://www.ncbi.nlm.nih.gov/pubmed/'
    },
    'Organization': { 
        'label': 'organization',
        'uri': 'http://purl.org/dc/terms/publisher'
    },
    'Type (warehouse, dataset or terminology)': { 
        'label': 'type',
        'uri': 'http://www.w3.org/1999/02/22-rdf-syntax-ns#type'
    },
    'Keywords': { 
        'label': 'keywords',
        'uri': 'http://www.w3.org/ns/dcat#keyword'
    },
    'Homepage': { 
        'label': 'homepage',
        'uri': 'http://xmlns.com/foaf/0.1/homepage'
    },
    'homepage still available?': { ## @todo use possible values: 'up', 'down', 'probably up', 'obsolete resource', 'restricted access' and 'unknown'.
        'label': 'homepageStillAvailable',
        'uri': 'http://identifiers.org/idot/state'
    },
    'sub-namespace in dataset': { 
        'label': 'subNamespaceInDataset',
        'uri': 'http://purl.org/dc/terms/isPartOf'
    },
    'part of collection': { 
        'label': 'partOfCollection',
        'uri': 'http://purl.org/dc/terms/isPartOf'
    },
    'License URL': { 
        'label': 'licenseUrl',
        'uri': 'http://purl.org/dc/terms/license'
    },
    'License Text': { 
        'label': 'licenseText',
        'uri': 'http://purl.org/dc/terms/license'
    },
    'Rights': { 
        'label': 'rights',
        'uri': 'http://purl.org/dc/terms/rights'
    },
    'ID regex': { 
        'label': 'regex',
        'uri': 'http://identifiers.org/idot/identifierPattern'
    },
    'ExampleID': { 
        'label': 'exampleId',
        'uri': 'http://identifiers.org/idot/exampleIdentifier'
    },
    'Provider HTML URL': { 
        'label': 'providerHtmlUrl',
        'uri': 'http://identifiers.org/idot/accessPattern'
    },
    'MIRIAM checked': { ## ignore
        'label': 'miriamChecked',
        'uri': ''
    },
    'MIRIAM curator notes': {   ## ignore
        'label': 'miriamCuratorNotes',
        'uri': ''
    },
    'MIRIAM coverage': {   ## ignore
        'label': 'miriamCoverage',
        'uri': ''
    },
    'updates': {   ## ignore
        'label': 'updates',
        'uri': ''
    },
    'year last accessible': {
        'label': 'yearLastAccessible',
        'uri': ''
    },
    'wayback url': {
        'label': 'waybackUrl',
        'uri': ''
    },
    'last updated': {
        'label': 'lastUpdated',
        'uri': ''
    },
    'last updated by': {
        'label': 'lastUpdatedBy',
        'uri': ''
    },    
    'last updated by (orcid)': {
        'label': 'lastUpdatedByOrcid',
        'uri': ''
    }
}
# Preferred Prefix
# Alt-prefix	Provider Base URI	Alternative Base URI	MIRIAM	BiodbcoreID	BioPortal Ontology ID	thedatahub	Abbreviation	Title	Description	PubMed ID	Organization	Type (warehouse, dataset or terminology)	Keywords	Homepage	homepage still available?	sub-namespace in dataset	part of collection	License URL	License Text	Rights	ID regex	ExampleID	Provider HTML URL		MIRIAM checked	MIRIAM curator notes	MIRIAM coverage	updates
context = {}
for key, value in col_mapping.items():
    df.rename({
        key: value['label']
    }, axis=1, inplace=True)
    if value['uri']:
        context[value['label']] = value['uri']


## Check the list of columns:
# print('" , "'.join(list(col_mapping.values())))

print('Drop null values and convert to JSON')
lsr_json = df.apply(lambda x: [x.dropna()], axis=1).to_json()
lsr_dict = json.loads(lsr_json)

# Prepare JSON for ElasticSearch ingestion and build RDF graph
elastic_json = []
g = Graph()
for key, entry in lsr_dict.items():
    entry = entry[0]
    if 'altPrefix' in entry.keys(): 
        entry['altPrefix'] = str(entry['altPrefix']).split(',')
        for i in range(len(entry['altPrefix'])):
            entry['altPrefix'][i] = entry['altPrefix'][i].strip()    
    if 'alternativeBaseUri' in entry.keys(): 
        entry['alternativeBaseUri'] = str(entry['alternativeBaseUri']).split(',')
        for i in range(len(entry['alternativeBaseUri'])):
            entry['alternativeBaseUri'][i] = entry['alternativeBaseUri'][i].strip()                
    if 'pubmedId' in entry.keys(): 
        entry['pubmedId'] = str(entry['pubmedId']).split(',')
        for i in range(len(entry['pubmedId'])):
            entry['pubmedId'][i] = str(entry['pubmedId'][i].strip())
    if 'keywords' in entry.keys(): 
        entry['keywords'] = str(entry['keywords']).split(',')
        for i in range(len(entry['keywords'])):
            entry['keywords'][i] = entry['keywords'][i].strip()

    # TODO: add relevant fields to make it JSON-LD
    entry['@type'] = 'http://semanticscience.org/resource/namespace'
    entry['@context'] = context

    elastic_json.append({
        "_index": es_index,
        # "_type": "document",
        "_id": entry['preferredPrefix'],
        "_source": entry
    })

    # Add ElasticSearch entry in a rdflib graph
    subject_uri = URIRef('https://w3id.org/bio2kg/registry/' + entry['preferredPrefix'])
    g.add((subject_uri, RDF.type, URIRef(entry['@type'])))
    for key, mapping in col_mapping.items():
        # Get predicate URIs from col_mapping JSON above
        if mapping['label'] in entry and mapping['uri']:
            if mapping['label'] == 'type':
                g.add((subject_uri, URIRef(mapping['uri']), URIRef('http://semanticscience.org/resource/' + entry[mapping['label']])))
            else:
                g.add((subject_uri, URIRef(mapping['uri']), Literal(entry[mapping['label']])))

# print('Upload RDF to Virtuoso LDP')
# res = requests.post(
#     url=virtuoso_url,
#     # url='http://localhost:8890/DAV/ldp',
#     data=g.serialize(format='turtle'),
#     auth = requests.auth.HTTPBasicAuth('dav', os.getenv('ELASTIC_PASSWORD')),
#     headers={
#         'Content-Type': 'text/turtle',
#         'Accept': 'text/turtle',
#         'Slug': 'bio2kg-registry'
# })
# print(res.text)

# print(elastic_json)

print('Loading ' + str(len(elastic_json)) + ' entries in ElasticSearch index ' + es_index)


# Check for ElasticSearch up
for i in range(100):
    try:
        es.cluster.health(wait_for_status='yellow')
        print('Connected to ElasticSearch ⚡️')
        break
    # except ConnectionError:
    except:
        print('Could not connect to ElasticSearch. Attempt ' + str(i) + ' on 100 (every 5s)')
        time.sleep(5)
else:
    raise("Elasticsearch failed to start.")

load_results = helpers.bulk(es, elastic_json)
print(load_results)

# We might need to do a chown so the data is readable by ES?
# User: elasticsearch 1000
# Group: root 0

# sudo chown -R 1000:0 /data/bio2kg/registry/elasticsearch