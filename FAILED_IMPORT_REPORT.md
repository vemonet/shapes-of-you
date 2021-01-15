## Fails loading files to `rdflib`
*Please check if your RDF file is properly formatted. We recommend to **use https://www.easyrdf.org/converter to get better insights on the error**, and store the shapes in `.ttl` files*


File: https://raw.githubusercontent.com/GovDataOfficial/DCAT-AP.de-SHACL-Validation/master/validator%2Fresources%2Fv1.0.2%2Fshapes%2Fdcat-ap-de-shapes-specification.ttl

In repository: https://github.com/GovDataOfficial/DCAT-AP.de-SHACL-Validation
> at line 16 of <>:
Bad syntax (expected '.' or '}' or ']' at end of statement) at ^ in:
"...b'-advanced.ttl\n\n@prefix : <http://dcat-ap.de/def/dcatde/1.0.2'^b'/#>\n@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns'..."

---
File: https://raw.githubusercontent.com/GovDataOfficial/DCAT-AP.de-SHACL-Validation/master/validator%2Fresources%2Fv1.0.2%2Fshapes%2Fdcat-ap-de-lists.ttl

In repository: https://github.com/GovDataOfficial/DCAT-AP.de-SHACL-Validation
> maximum recursion depth exceeded while getting the str of an object

---
File: https://raw.githubusercontent.com/AKSW/shacl-shapes/master/shape-groups%2Fadult-person%2Fadult-person.ttl

In repository: https://github.com/AKSW/shacl-shapes
> at line 12 of <>:
Bad syntax (Prefix "srekl:" not bound) at ^ in:
"...b'which is considered an adult.\n\n:AdultShapeInfo\n    rdf:type '^b'srekl:ShapeInfo ;\n    dc11:title "Defines an adult person (f'..."

---
File: https://raw.githubusercontent.com/ThiagoCComelli/JS2SHACL-JSON-Schema-to-SHACL-conversor/master/outputSchemas%2F702-JS4Geo-Feature-JSONSchema.ttl

In repository: https://github.com/ThiagoCComelli/JS2SHACL-JSON-Schema-to-SHACL-conversor
> at line 20 of <>:
Bad syntax (EOF found after object) at ^ in:
"b'@prefix sh: <http://www.w3.org/ns/shacl#> .\n@prefix ex: <http://example.org/#> .\n@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .\n@prefix owl: <http://www.w3.org/2002/07/owl#> .\n@prefix dash: <http://datashapes.org/dash#> .\n@prefix sf: <http://www.opengis.net/ont/sf#> .\n\n<http://www.example.org>\n  rdf:type owl:Ontology ;\n  owl:imports <http://localhost/SHACL/JS4Geo-ShapesGraph.ttl> .\n\nex:JS_id_Shape a sh:NodeShape;\n  sh:targetClass ex:JS_id;\n  sh:or (\n    ex:featureShape\n  ).\n\nex:propertiesShape a sh:NodeShape;\n  sh:targetClass ex:properties'^b''..."

---
File: https://raw.githubusercontent.com/ThiagoCComelli/JS2SHACL-JSON-Schema-to-SHACL-conversor/master/outputSchemas%2Ftest1.ttl

In repository: https://github.com/ThiagoCComelli/JS2SHACL-JSON-Schema-to-SHACL-conversor
> at line 10 of <>:
Bad syntax (']' expected) at ^ in:
"...b';\n  sh:targetClass ex:JS_id;\n  sh:property [\n    sh:path ex:'^b'@context;\n    sh:datatype xsd:string;\n    sh:pattern "http:/'..."

---
File: https://raw.githubusercontent.com/ThiagoCComelli/JS2SHACL-JSON-Schema-to-SHACL-conversor/master/outputSchemas%2Ftest.ttl

In repository: https://github.com/ThiagoCComelli/JS2SHACL-JSON-Schema-to-SHACL-conversor
> at line 8 of <>:
Bad syntax (']' expected) at ^ in:
"...b';\n  sh:targetClass ex:JS_id;\n  sh:property [\n    sh:path ex:'^b'@context;\n    sh:datatype xsd:string;\n    sh:pattern "http:/'..."

---
File: https://raw.githubusercontent.com/ThiagoCComelli/JS2SHACL-JSON-Schema-to-SHACL-conversor/master/outputSchemas%2F802-JS4Geo-FeatureCollection-JSONSchema.ttl

In repository: https://github.com/ThiagoCComelli/JS2SHACL-JSON-Schema-to-SHACL-conversor
> at line 20 of <>:
Bad syntax (EOF found after object) at ^ in:
"b'@prefix sh: <http://www.w3.org/ns/shacl#> .\n@prefix ex: <http://example.org/#> .\n@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .\n@prefix owl: <http://www.w3.org/2002/07/owl#> .\n@prefix dash: <http://datashapes.org/dash#> .\n@prefix sf: <http://www.opengis.net/ont/sf#> .\n\n<http://www.example.org>\n  rdf:type owl:Ontology ;\n  owl:imports <http://localhost/SHACL/JS4Geo-ShapesGraph.ttl> .\n\nex:JS_id_Shape a sh:NodeShape;\n  sh:targetClass ex:JS_id;\n  sh:or (\n    ex:featureCollectionShape\n  ).\n\nex:propertiesShape a sh:NodeShape;\n  sh:targetClass ex:properties'^b''..."

---
File: https://raw.githubusercontent.com/ThiagoCComelli/JS2SHACL-JSON-Schema-to-SHACL-conversor/master/outputSchemas%2Fpayloadtoolarge.ttl

In repository: https://github.com/ThiagoCComelli/JS2SHACL-JSON-Schema-to-SHACL-conversor
> at line 17 of <>:
Bad syntax (bad escape) at ^ in:
"...b'h ex:version;\n    sh:datatype xsd:string;\n    sh:pattern "^('^b'\\d\\.)(\\d)$";\n    sh:minCount 1;\n  ];\n  sh:property [\n    sh:'..."

---
File: https://raw.githubusercontent.com/landportal/data/master/landlibrary%2Fimporters%2Fconstituteproject.org%2Ffao-geopolitical-update.ttl

In repository: https://github.com/landportal/data
> at line 3 of <>:
Bad syntax (expected '.' or '}' or ']' at end of statement) at ^ in:
"...b'efix ontology: <http://www.constituteproject.org/ontology/>\n'^b'<http://www.constituteproject.org/ontology/Taiwan> ontology:'..."

---
File: https://raw.githubusercontent.com/w3c/data-shapes/gh-pages/unmaintained%2Fdata-shapes-primer%2Fldomsquare.ldom.ttl

In repository: https://github.com/w3c/data-shapes
> at line 15 of <>:
Bad syntax (expected '.' or '}' or ']' at end of statement) at ^ in:
"...b'2000/01/rdf-schema#> .\n@prefix schema: <http://schema.org/>\n'^b'@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .\n\n\n# The l'..."

---
File: https://raw.githubusercontent.com/solid/chat-pane/master/shapes%2Fchat-shapes.ttl

In repository: https://github.com/solid/chat-pane
> at line 194 of <>:
Bad syntax (objectList expected) at ^ in:
"...b'h flow:message ] ;\n      sh:minCount 1; sh:maxCount 1 \n    ]'^b' .\n\n\n########## Actions express sentiments\n\n:ActionShape a s'..."

---
File: https://raw.githubusercontent.com/neo4j-labs/neosemantics/4.2/src%2Ftest%2Fresources%2FRDFDatasets%2FRDFDatasetBNodesDelete.trig

In repository: https://github.com/neo4j-labs/neosemantics
> at line 15 of <>:
Bad syntax (expected '.' or '}' or ']' at end of statement) at ^ in:
"...b'lice-carol> ;\n       ex:hasAddress _:address .\n }\n\nexDoc:G2 '^b'{\n    exDoc:Monica\n              ex:city "New York" ;\n      '..."

---
File: https://raw.githubusercontent.com/neo4j-labs/neosemantics/4.2/src%2Ftest%2Fresources%2FRDFDatasets%2FRDFDataset.trig

In repository: https://github.com/neo4j-labs/neosemantics
> at line 20 of <>:
Bad syntax (expected '.' or '}' or ']' at end of statement) at ^ in:
"...b'ogramming ;\n              ex:knows exDoc:John . }\n\nexDoc:G2 '^b'{\n    exDoc:Monica\n              ex:city "New York" ;\n      '..."

---
File: https://raw.githubusercontent.com/neo4j-labs/neosemantics/4.2/src%2Ftest%2Fresources%2FRDFDatasets%2FRDFDatasetDelete.trig

In repository: https://github.com/neo4j-labs/neosemantics
> at line 17 of <>:
Bad syntax (expected '.' or '}' or ']' at end of statement) at ^ in:
"...b'anagement ;\n              ex:knows exDoc:John . }\n\nexDoc:G2 '^b'{\n    exDoc:Monica\n              ex:city "New York" ;\n      '..."

---
File: https://raw.githubusercontent.com/neo4j-labs/neosemantics/4.2/src%2Ftest%2Fresources%2FRDFDatasets%2FRDFDatasetBNodesPostDeletion.trig

In repository: https://github.com/neo4j-labs/neosemantics
> at line 14 of <>:
Bad syntax (EOF found in middle of path syntax) at ^ in:
"b'@prefix ex: <http://www.example.org/vocabulary#> .\n@prefix exDoc: <http://www.example.org/exampleDocument#> .\n\nexDoc:G1 {\n    exDoc:Resource\n      \tex:professor _:entity ;\n        ex:students _:students ;\n        ex:generatedBy _:activity1 .\n\n    _:entity\n       ex:fullName "Alice Carol" ;\n       ex:homePage <http://example.net/alice-carol> ;\n       ex:hasAddress _:address .\n '^b''..."

---
File: https://raw.githubusercontent.com/neo4j-labs/neosemantics/4.2/src%2Ftest%2Fresources%2FRDFDatasets%2FRDFDatasetBNodes.trig

In repository: https://github.com/neo4j-labs/neosemantics
> at line 17 of <>:
Bad syntax (expected '.' or '}' or ']' at end of statement) at ^ in:
"...b'lice-carol> ;\n       ex:hasAddress _:address .\n }\n\nexDoc:G2 '^b'{\n    exDoc:Monica\n              ex:city "New York" ;\n      '..."

---
File: https://raw.githubusercontent.com/neo4j-labs/neosemantics/4.2/docs%2F_unused%2Frdf%2FRDFDataset%2FRDFDataset.trig

In repository: https://github.com/neo4j-labs/neosemantics
> at line 20 of <>:
Bad syntax (expected '.' or '}' or ']' at end of statement) at ^ in:
"...b'ogramming ;\n              ex:knows exDoc:John . }\n\nexDoc:G2 '^b'{\n    exDoc:Monica\n              ex:city "New York" ;\n      '..."

---
File: https://raw.githubusercontent.com/neo4j-labs/neosemantics/4.2/docs%2F_unused%2Frdf%2FRDFDataset%2FRDFDatasetDelete.trig

In repository: https://github.com/neo4j-labs/neosemantics
> at line 17 of <>:
Bad syntax (expected '.' or '}' or ']' at end of statement) at ^ in:
"...b'anagement ;\n              ex:knows exDoc:John . }\n\nexDoc:G2 '^b'{\n    exDoc:Monica\n              ex:city "New York" ;\n      '..."

---
File: https://raw.githubusercontent.com/neo4j-labs/neosemantics/4.2/src%2Ftest%2Fresources%2FcustomDataTypes.ttl

In repository: https://github.com/neo4j-labs/neosemantics
> at line 5 of <>:
Bad syntax (Prefix "rdf:" not bound) at ^ in:
"...b'x xsd: <http://www.w3.org/2001/XMLSchema#> .\n\nex:Mercedes \n\t'^b'rdf:type ex:Car ;\n\tex:price "10000"^^ex:EUR ;\n\tex:price "110'..."

---
File: https://raw.githubusercontent.com/neo4j-labs/neosemantics/4.2/src%2Ftest%2Fresources%2Fshacl%2Fperson0-shacl.ttl

In repository: https://github.com/neo4j-labs/neosemantics
> at line 9 of <>:
Bad syntax (bad escape) at ^ in:
"...b'rson ;\n\tsh:property [\n\t\tsh:path neo4j:name ;\n\t\tsh:pattern "^'^b'\\w[\\s\\w\\.]*$" ;\n\t\tsh:maxCount 1 ;\n        sh:datatype xsd:st'..."

---
File: https://raw.githubusercontent.com/neo4j-labs/neosemantics/4.2/src%2Ftest%2Fresources%2Fshacl%2Fperson2-shacl.ttl

In repository: https://github.com/neo4j-labs/neosemantics
> at line 11 of <>:
Bad syntax (Prefix "xsd:" not bound) at ^ in:
"...b'\tsh:maxCount 1 ;                # cardinality\n\t\tsh:datatype '^b'xsd:string ;       # data type\n\t\tsh:pattern "^\\w[\\s\\w\\.]*$" '..."

---
File: https://raw.githubusercontent.com/neo4j-labs/neosemantics/4.2/src%2Ftest%2Fresources%2Fshacl%2Fperson1-shacl.ttl

In repository: https://github.com/neo4j-labs/neosemantics
> at line 11 of <>:
Bad syntax (Prefix "xsd:" not bound) at ^ in:
"...b'trains the values of ex:ssn\n\t\tsh:maxCount 1 ;\n\t\tsh:datatype '^b'xsd:string ;\n\t\tsh:pattern "^\\\\d{3}-\\\\d{2}-\\\\d{4}$" ;\n\t] ;\n\ts'..."

---
File: https://raw.githubusercontent.com/neo4j-labs/neosemantics/4.2/src%2Ftest%2Fresources%2Fshacl%2Fmusictest%2Fdata.ttl

In repository: https://github.com/neo4j-labs/neosemantics
> at line 21 of <>:
Bad syntax (Prefix "xsd:" not bound) at ^ in:
"...b'um ;\n    :name "Please Please Me" ;\n    :date "1963-03-22"^^'^b'xsd:date , "1963-02-23"^^xsd:date ;\n    :artist :The_Beatles'..."

---
File: https://raw.githubusercontent.com/neo4j-labs/neosemantics/4.2/src%2Ftest%2Fresources%2FdeleteRDF%2FbNodesPostDeletion.ttl

In repository: https://github.com/neo4j-labs/neosemantics
> at line 20 of <>:
Bad syntax (Prefix "rdf:" not bound) at ^ in:
"...b'A1A1A1" ;\n   ex:addressLocality "London" .\n\n_:students\n   a '^b'rdf:Bag ;\n   ex:hasMember _:s1 ;\n   ex:hasMember _:s2 .\n\n_:a'..."

---
File: https://raw.githubusercontent.com/neo4j-labs/neosemantics/4.2/src%2Ftest%2Fresources%2FdeleteRDF%2FbNodes.ttl

In repository: https://github.com/neo4j-labs/neosemantics
> at line 21 of <>:
Bad syntax (Prefix "rdf:" not bound) at ^ in:
"...b'1A1A1" ;\n   ex:addressLocality "London" .\n \n_:students\n   a '^b'rdf:Bag ;\n   ex:hasMember _:s1 ;\n   ex:hasMember _:s2 .\n \n_:'..."

---
File: https://raw.githubusercontent.com/neo4j-labs/neosemantics/4.2/docs%2F_unused%2Frdf%2FcustomDataTypes.ttl

In repository: https://github.com/neo4j-labs/neosemantics
> at line 4 of <>:
Bad syntax (Prefix "rdf:" not bound) at ^ in:
"b'@prefix ex: <http://example.com/> .\n\nex:Mercedes \n\t'^b'rdf:type ex:Car ;\n\tex:price "10000"^^ex:EUR ;\n\tex:power "300'..."

---
File: https://raw.githubusercontent.com/neo4j-labs/neosemantics/4.2/src%2Ftest%2Fresources%2Fshacl%2Fmusictest%2Fmusic.shacl

In repository: https://github.com/neo4j-labs/neosemantics
> at line 8 of <>:
Bad syntax (Prefix "xsd:" not bound) at ^ in:
"...b'\n     sh:path :name ;\n     sh:minCount 1 ;\n     sh:datatype '^b'xsd:string\n   ] .\n\n:ArtistShape a sh:Shape ;\n   sh:targetCla'..."

---
