## Fails loading files to `rdflib`

**Indexing topics**: `E`, `X`, `T`, `R`, `A`, `S`, `_`, `G`, `I`, `T`, `H`, `U`, `B`, `_`, `R`, `E`, `P`, `O`, `S`, `I`, `T`, `O`, `R`, `I`, `E`, `S`, `_`, `2`, `.`, `t`, `x`, `t`

*Please check if your RDF file is properly formatted. We recommend to **use https://www.easyrdf.org/converter to get better insights on the error**, and store the shapes in `.ttl` files*


SPARQL endpoint failed: http://iricelino.org/rdfa/sample-annotated-page.html

EndPointNotFound: it was impossible to connect with the endpoint in that address, check if it is correct. 

Response:
b'<!DOCTYPE HTML PUBLIC "-//IETF//DTD HTML 2.0//EN">\n<html><head>\n<title>404 Not Found</title>\n</head><body>\n<h1>Not Found</h1>\n<p>The requested URL was not found on this server.</p>\n</body></html>\n'

---
SPARQL endpoint failed: https://raw.githubusercontent.com/albertmeronyo/lodapi/master/ghostbusters.ttl

byte indices must be integers or slices, not str

---
SPARQL endpoint failed: any

unknown url type: 'any?query=SELECT+%2A+WHERE+%7B+%3Fs+%3Fp+%3Fo+%7D+LIMIT+10&format=json&output=json&results=json'

---
SPARQL endpoint failed: any

unknown url type: 'any?query=SELECT+%2A+WHERE+%7B+%3Fs+%3Fp+%3Fo+%7D+LIMIT+10&format=json&output=json&results=json'

---
File: https://raw.githubusercontent.com/SmartDataAnalytics/jena-sparql-api/master/jena-sparql-api-mapper-parent%2Fjena-sparql-api-mapper-core%2Fsrc%2Ftest%2Fresources%2Fdbpedia-companies.ttl parsed as ttl

In repository: https://github.com/SmartDataAnalytics/jena-sparql-api
> at line 2 of <>:
Bad syntax (expected '.' or '}' or ']' at end of statement) at ^ in:
"b'@prefix rdf:  <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\n'^b'@prefix xsd:  <http://www.w3.org/2001/XMLSchema#>\n@prefix rd'..."

---
File: https://raw.githubusercontent.com/SmartDataAnalytics/jena-sparql-api/master/jena-sparql-api-dcat-parent%2Fjena-sparql-api-dcat-api%2Fsrc%2Fmain%2Fresources%2Flangs.ttl parsed as ttl

In repository: https://github.com/SmartDataAnalytics/jena-sparql-api
> at line 9 of <>:
Bad syntax (Prefix "skos:" not bound) at ^ in:
"...b'http://www.example.org/> .\n\n\nr:rdfxml\n  a o:ContentType ;\n  '^b'skos:prefLabel "RDF/XML" ;\n  skos:altLabel "RDFXML", "RDF/XM'..."

---
File: https://raw.githubusercontent.com/SmartDataAnalytics/jena-sparql-api/master/jena-sparql-api-resources%2Fsrc%2Fmain%2Fresources%2Fxsd-ontology.ttl parsed as ttl

In repository: https://github.com/SmartDataAnalytics/jena-sparql-api
> at line 4 of <>:
Bad syntax (Prefix "rdfs:" not bound) at ^ in:
"...b'http://www.w3.org/2000/01/rdf-schema#>\n\nxsd:negativeInteger '^b'rdfs:subClassOf xsd:nonPositiveInteger .\nxsd:nonPositiveInte'..."

---
File: https://raw.githubusercontent.com/SmartDataAnalytics/jena-sparql-api/master/jena-sparql-api-algebra%2Fsrc%2Fmain%2Fresources%2Fbnode-rewrites.ttl parsed as ttl

In repository: https://github.com/SmartDataAnalytics/jena-sparql-api
> at line 10 of <>:
Bad syntax (expected '.' or '}' or ']' at end of statement) at ^ in:
"...b'/> .\n\n@prefix ent: <http://www.ontotext.com/owlim/entity#>\n\n'^b'@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .'..."

---
File: https://raw.githubusercontent.com/SmartDataAnalytics/jena-sparql-api/master/jena-sparql-api-io-core%2Fsrc%2Fmain%2Fresources%2Fsys-encoders.ttl parsed as ttl

In repository: https://github.com/SmartDataAnalytics/jena-sparql-api
> at line 1 of <>:
Bad syntax (Prefix "eg:" not bound) at ^ in:
"b''^b'eg:sysCmdLbzip2\n  a eg:SysCmd ;\n  eg:sysCmd "/usr/bin/lbzip2'..."

---
SPARQL endpoint failed: http://test-endpoint/transform/sparql/

<urlopen error [Errno -3] Temporary failure in name resolution>

---
SPARQL endpoint failed: http://test-endpoint/from-decorator/sparql

<urlopen error [Errno -3] Temporary failure in name resolution>

---
SPARQL endpoint failed: http://example.com/sparql

EndPointNotFound: it was impossible to connect with the endpoint in that address, check if it is correct. 

Response:
b'<!doctype html>\n<html>\n<head>\n    <title>Example Domain</title>\n\n    <meta charset="utf-8" />\n    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1" />\n    <style type="text/css">\n    body {\n        background-color: #f0f0f2;\n        margin: 0;\n        padding: 0;\n        font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;\n        \n    }\n    div {\n        width: 600px;\n        margin: 5em auto;\n        padding: 2em;\n        background-color: #fdfdff;\n        border-radius: 0.5em;\n        box-shadow: 2px 3px 7px 2px rgba(0,0,0,0.02);\n    }\n    a:link, a:visited {\n        color: #38488f;\n        text-decoration: none;\n    }\n    @media (max-width: 700px) {\n        div {\n            margin: 0 auto;\n            width: auto;\n        }\n    }\n    </style>    \n</head>\n\n<body>\n<div>\n    <h1>Example Domain</h1>\n    <p>This domain is for use in illustrative examples in documents. You may use this\n    domain in literature without prior coordination or asking for permission.</p>\n    <p><a href="https://www.iana.org/domains/example">More information...</a></p>\n</div>\n</body>\n</html>\n'

---
SPARQL endpoint failed: http://example.com/sparql

EndPointNotFound: it was impossible to connect with the endpoint in that address, check if it is correct. 

Response:
b'<!doctype html>\n<html>\n<head>\n    <title>Example Domain</title>\n\n    <meta charset="utf-8" />\n    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1" />\n    <style type="text/css">\n    body {\n        background-color: #f0f0f2;\n        margin: 0;\n        padding: 0;\n        font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;\n        \n    }\n    div {\n        width: 600px;\n        margin: 5em auto;\n        padding: 2em;\n        background-color: #fdfdff;\n        border-radius: 0.5em;\n        box-shadow: 2px 3px 7px 2px rgba(0,0,0,0.02);\n    }\n    a:link, a:visited {\n        color: #38488f;\n        text-decoration: none;\n    }\n    @media (max-width: 700px) {\n        div {\n            margin: 0 auto;\n            width: auto;\n        }\n    }\n    </style>    \n</head>\n\n<body>\n<div>\n    <h1>Example Domain</h1>\n    <p>This domain is for use in illustrative examples in documents. You may use this\n    domain in literature without prior coordination or asking for permission.</p>\n    <p><a href="https://www.iana.org/domains/example">More information...</a></p>\n</div>\n</body>\n</html>\n'

---
SPARQL endpoint failed: https://api.druid.datalegend.net/datasets/RubenS/Spanjestrijders-test/services/Spanjestrijders-test/sparql

EndPointNotFound: it was impossible to connect with the endpoint in that address, check if it is correct. 

Response:
b'{\n  "message": "Not found or unauthorized."\n}'

---
File: https://raw.githubusercontent.com/CLARIAH/wp4-cow-conversions/master/temp%2Fhg%2Fhg-api.rdf parsed as xml

In repository: https://github.com/CLARIAH/wp4-cow-conversions
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/temp/hg/hg-api.rdf:1:0: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/CLARIAH/wp4-cow-conversions/master/temp%2Fhg%2Fhg-vocab.rdf parsed as xml

In repository: https://github.com/CLARIAH/wp4-cow-conversions
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/temp/hg/hg-vocab.rdf:1:0: not well-formed (invalid token)

---
SPARQL endpoint failed: https://api.druid.datalegend.net/datasets/RubenS/Spanjestrijders-test/services/Spanjestrijders-test/sparql

EndPointNotFound: it was impossible to connect with the endpoint in that address, check if it is correct. 

Response:
b'{\n  "message": "Not found or unauthorized."\n}'

---
SPARQL endpoint failed: https://api.druid.datalegend.net/datasets/RubenS/Spanjestrijders-test/services/Spanjestrijders-test/sparql

EndPointNotFound: it was impossible to connect with the endpoint in that address, check if it is correct. 

Response:
b'{\n  "message": "Not found or unauthorized."\n}'

---
SPARQL endpoint failed: ...

unknown url type: '...?query=SELECT+%2A+WHERE+%7B+%3Fs+%3Fp+%3Fo+%7D+LIMIT+10&format=json&output=json&results=json'

---
SPARQL endpoint failed: ...

unknown url type: '...?query=SELECT+%2A+WHERE+%7B+%3Fs+%3Fp+%3Fo+%7D+LIMIT+10&format=json&output=json&results=json'

---
SPARQL endpoint failed: ...

unknown url type: '...?query=SELECT+%2A+WHERE+%7B+%3Fs+%3Fp+%3Fo+%7D+LIMIT+10&format=json&output=json&results=json'

---
SPARQL endpoint failed: ...

unknown url type: '...?query=SELECT+%2A+WHERE+%7B+%3Fs+%3Fp+%3Fo+%7D+LIMIT+10&format=json&output=json&results=json'

---
SPARQL endpoint failed: ...

unknown url type: '...?query=SELECT+%2A+WHERE+%7B+%3Fs+%3Fp+%3Fo+%7D+LIMIT+10&format=json&output=json&results=json'

---
SPARQL endpoint failed: https://api.druid.datalegend.net/datasets/datalegend/AmsterdamTimeMachine/services/endpoint/sparql

EndPointNotFound: it was impossible to connect with the endpoint in that address, check if it is correct. 

Response:
b'{\n  "message": "Not found."\n}'

---
SPARQL endpoint failed: https://api.druid.datalegend.net/datasets/datalegend/AmsterdamTimeMachine/services/endpoint/sparql

EndPointNotFound: it was impossible to connect with the endpoint in that address, check if it is correct. 

Response:
b'{\n  "message": "Not found."\n}'

---
SPARQL endpoint failed: https://api.druid.datalegend.net/datasets/datalegend/AmsterdamTimeMachine/services/endpoint/sparql

EndPointNotFound: it was impossible to connect with the endpoint in that address, check if it is correct. 

Response:
b'{\n  "message": "Not found."\n}'

---
SPARQL endpoint failed: https://api.druid.datalegend.net/datasets/datalegend/AmsterdamTimeMachine/services/endpoint/sparql

EndPointNotFound: it was impossible to connect with the endpoint in that address, check if it is correct. 

Response:
b'{\n  "message": "Not found."\n}'

---
SPARQL endpoint failed: https://api.druid.datalegend.net/datasets/datalegend/AmsterdamTimeMachine/services/endpoint/sparql

EndPointNotFound: it was impossible to connect with the endpoint in that address, check if it is correct. 

Response:
b'{\n  "message": "Not found."\n}'

---
SPARQL endpoint failed: https://api.druid.datalegend.net/datasets/datalegend/AmsterdamTimeMachine/services/endpoint/sparql

EndPointNotFound: it was impossible to connect with the endpoint in that address, check if it is correct. 

Response:
b'{\n  "message": "Not found."\n}'

---
File: https://raw.githubusercontent.com/BFO-ontology/BFO/master/src%2Fontology%2Fowl-group%2Fexamples%2Fspatial-disjointness%2Fsd-bfo2-fail.owl parsed as xml

In repository: https://github.com/BFO-ontology/BFO
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/ontology/owl-group/examples/spatial-disjointness/sd-bfo2-fail.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/BFO-ontology/BFO/master/src%2Fontology%2Fowl-group%2Fexamples%2Fspatial-disjointness%2Fsd-bfo2-succeed.owl parsed as xml

In repository: https://github.com/BFO-ontology/BFO
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/ontology/owl-group/examples/spatial-disjointness/sd-bfo2-succeed.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/BFO-ontology/BFO/master/src%2Fontology%2Fowl-group%2Fexamples%2Fspatial-disjointness%2Fsd-atemporal.owl parsed as xml

In repository: https://github.com/BFO-ontology/BFO
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/ontology/owl-group/examples/spatial-disjointness/sd-atemporal.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/BFO-ontology/BFO/master/src%2Fontology%2Fowl-group%2Fexamples%2Fproperty-chains%2Fhas-part-chains.owl parsed as xml

In repository: https://github.com/BFO-ontology/BFO
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/ontology/owl-group/examples/property-chains/has-part-chains.owl:1:6: not well-formed (invalid token)

---
