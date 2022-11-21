import json

import requests
from src.config import BASE_URI, ELASTIC_URL, ENDPOINT_PASSWORD, ENDPOINT_USER

# https://www.elastic.co/guide/en/elasticsearch/reference/current/docs-bulk.html
# POST to /_bulk:
# { "index" : { "_index" : "test", "_id" : "1" } }
# { "field1" : "value1" }

# Or 1 by 1: https://www.elastic.co/guide/en/elasticsearch/reference/current/docs-index_.html

def load_file_to_elastic(payload):
  # payload =''
  # insert = { "index" : { "_index" : "files", "_id" : file_url } }
  # payload = payload + '\n' + json.dumps(insert) + '\n' + json.dumps(file_metadata)

  try:
    resp = requests.post(f"{ELASTIC_URL}/_bulk",
      data=payload.encode('utf-8'),
      # headers={ 'Content-Type': 'text/turtle' },
      # data=str(shapes_graph.serialize(format='turtle')).encode('utf-8'),
      auth=(ENDPOINT_USER, ENDPOINT_PASSWORD),
    )
    resp.raise_for_status
  except Exception as e:
    print('Error uploading to ElasticSearch')
    print(resp, e)



def load_rdf_to_ldp(shapes_graph, repo_id, ldp_folder):
  """Load a RDFLib Graph to a triplestore using the Graph store protocol (e.g. Virtuoso)"""

  if (None, None, None) in shapes_graph:
    print(f'Loading {len(shapes_graph)} triples for {str(repo_id)}')
    # shapes_graph.serialize('shapes-rdf.ttl', format='turtle')
    # shapes_graph.serialize('shapes-rdf.nt', format='nt')
    # os.system(f'java -jar sparql-operations.jar -o upload -i shapes-rdf.ttl -e "https://graphdb.dumontierlab.com/repositories/shapes-registry/statements" -u $ENDPOINT_USER -p $ENDPOINT_PASSWORD -g https://w3id.org/um/ids/shapes/$GIT_SERVICE')

    graph_uri = f"{BASE_URI}/{ldp_folder}"
    endpoint = f"https://data.index.semanticscience.org/store?graph={graph_uri}"

    try:
      resp = requests.post(endpoint,
        headers={ 'Content-Type': 'text/turtle' },
        data=str(shapes_graph.serialize(format='turtle')).encode('utf-8'),
        auth=(ENDPOINT_USER, ENDPOINT_PASSWORD),
      )
      resp.raise_for_status
    except Exception as e:
      print('Error uploading RDF to the triplestore')
      print(resp, e)

    # insert_graph_in_sparql_endpoint(
    #   shapes_graph,
    #   ## Loading in Ontotext GraphDB:
    #   # sparql_endpoint=f"https://graphdb.dumontierlab.com/repositories/shapes-registry/rdf-graphs/shapes:{os.getenv('GIT_SERVICE')}",
    #   # ?graph={BASE_URI}/{os.getenv('GIT_SERVICE')}
    #   # TODO: with Oxigraph
    #   sparql_endpoint=endpoint,
    #   username=os.getenv('ENDPOINT_USER'), password=os.getenv('ENDPOINT_PASSWORD'),
    #   # graph_uri=f"shapes:{os.getenv('GIT_SERVICE')}",
    #   # chunks_size=1000, operation='INSERT'
    # )

    ## For Virtuoso LDP:
    # os.system(f'curl -H "Accept: text/turtle" -H "Content-type: text/turtle" -u {ENDPOINT_USER}:{ENDPOINT_PASSWORD} --data-binary @shapes-rdf.ttl -H "Slug: {repo_id}" https://data.index.semanticscience.org/DAV/ldp/{ldp_folder}/')
    # requests.post(
    #   f'https://data.index.semanticscience.org/DAV/home/ldp/{ldp_folder}/',
    #   data=shapes_graph.serialize(format='turtle'),
    #   auth=(ENDPOINT_USER, ENDPOINT_PASSWORD),
    #   headers= {
    #     'Slug': repo_id,
    #     'Accept': 'text/turtle',
    #     'Content-type': 'text/turtle'
    #   }
    # )
    # try:
    #   os.remove('shapes-rdf.ttl')
    # except:
    #   pass