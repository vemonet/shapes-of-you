## Fails loading files to `rdflib`

**Indexing topic**: `topic:rml-mapping`

*Please check if your RDF file is properly formatted. We recommend to **use https://www.easyrdf.org/converter to get better insights on the error**, and store the shapes in `.ttl` files*




---
File: https://raw.githubusercontent.com/carml/carml/master/carml-engine%2Fsrc%2Ftest%2Fresources%2FRmlMapper%2FexceptionTests%2FexceptionFormat.jsonld



---
RDF parsed as json-ld, in repository: https://github.com/carml/carml
> Expecting value: line 1 column 1 (char 0)

---
File: https://raw.githubusercontent.com/carml/carml/master/carml-engine%2Fsrc%2Ftest%2Fresources%2FValidator%2Fvalidationtests%2FfaultyRefObjMapping.rml.ttl



---
RDF parsed as ttl, in repository: https://github.com/carml/carml
> at line 24 of <>:
Bad syntax (']' expected) at ^ in:
"...b';\n\t\n\trr:predicateObjectMap [\n\t\trr:predicate ex:hasParents\n\t\t'^b'rr:objectMap [\n\t\t\trr:parentTriplesMap <#RefObjectParentA>;\n\t'..."

---
File: https://raw.githubusercontent.com/carml/carml/master/carml-engine%2Fsrc%2Ftest%2Fresources%2FValidator%2Fvalidationtests%2FfaultySubjectClassMappingD.rml.ttl



---
RDF parsed as ttl, in repository: https://github.com/carml/carml
> at line 19 of <>:
Bad syntax (objectList expected) at ^ in:
"...b'/faulty.subject.class.example.com/Child/{first}";\n\t\trr:class'^b' first\n\t].'"

---
File: https://raw.githubusercontent.com/carml/carml/master/carml-engine%2Fsrc%2Ftest%2Fresources%2FValidator%2Fvalidationtests%2FfaultySubjectClassMapping.rml.ttl



---
RDF parsed as ttl, in repository: https://github.com/carml/carml
> at line 72 of <>:
Bad syntax (objectList expected) at ^ in:
"...b'/faulty.subject.class.example.com/Child/{first}";\n\t\trr:class'^b' first\n\t].'"

---
File: https://raw.githubusercontent.com/carml/carml/master/carml-engine%2Fsrc%2Ftest%2Fresources%2FValidator%2Fvalidationtests%2FfaultyObjectLanguageMapping.rml.ttl



---
RDF parsed as ttl, in repository: https://github.com/carml/carml
> at line 25 of <>:
Bad syntax (']' expected) at ^ in:
"...b';\n\t\n\trr:predicateObjectMap [\n\t\trr:predicate ex:hasParents\n\t\t'^b'rr:objectMap [\n\t\t\trr:template "http://faulty.object.lang.exa'..."

---
File: https://raw.githubusercontent.com/carml/carml/master/carml-engine%2Fsrc%2Ftest%2Fresources%2FValidator%2Fvalidationtests%2FfaultyPredicateObjectMapping.rml.ttl



---
RDF parsed as ttl, in repository: https://github.com/carml/carml
> at line 69 of <>:
Bad syntax (']' expected) at ^ in:
"...b'p [rr:constant <http://faultyPredicateGraph.example.com>;\n\t]'^b'.\n\t\n\t\n\t\n\n###################################################'..."

---
File: https://raw.githubusercontent.com/carml/carml/master/carml-engine%2Fsrc%2Ftest%2Fresources%2FValidator%2Fvalidationtests%2FfaultyTermTypesMapping.rml.ttl



---
RDF parsed as ttl, in repository: https://github.com/carml/carml
> at line 25 of <>:
Bad syntax (']' expected) at ^ in:
"...b';\n\t\n\trr:predicateObjectMap [\n\t\trr:predicate ex:hasParents\n\t\t'^b'rr:objectMap [\n\t\t\trml:reference "parents"\n\t\t]\n\t].\n\t\n\n\t\n#####'..."

---
File: https://raw.githubusercontent.com/carml/carml/master/carml-engine%2Fsrc%2Ftest%2Fresources%2FValidator%2Fvalidationtests%2FfaultyLogicalSourceMapping.rml.ttl



---
RDF parsed as ttl, in repository: https://github.com/carml/carml
> at line 95 of <>:
Bad syntax (']' expected) at ^ in:
"...b'\trml:referenceFormulation ql:JSONPath;\n\t\trml:iterator "$"\n\t\t'^b'rml:iterator "$"\n\t];\n\t\n\trr:subjectMap [\n\t\trr:template "http:'..."

---
File: https://raw.githubusercontent.com/carml/carml/master/carml-engine%2Fsrc%2Ftest%2Fresources%2FValidator%2Fvalidationtests%2FfaultyValueMapping.rml.ttl



---
RDF parsed as ttl, in repository: https://github.com/carml/carml
> at line 24 of <>:
Bad syntax (']' expected) at ^ in:
"...b';\n\t\n\trr:predicateObjectMap [\n\t\trr:predicate ex:hasParents\n\t\t'^b'rr:objectMap [\n\t\t\trml:reference "parents"\n\t\t]\n\t].\n\n#########'..."

---
File: https://raw.githubusercontent.com/carml/carml/master/carml-engine%2Fsrc%2Ftest%2Fresources%2Fcom%2Ftaxonic%2Fcarml%2Frmltestcases%2Ftest-cases%2FRMLTC0007d-SPARQL%2Fmapping.ttl



---
RDF parsed as ttl, in repository: https://github.com/carml/carml
> at line 42 of <>:
Bad syntax (Prefix "foaf:" not bound) at ^ in:
"...b'bjectMap [\n        rr:predicate rdf:type;\n        rr:object '^b'foaf:Person;\n      ];\n\n      rr:predicateObjectMap [\n       '..."

---
File: https://raw.githubusercontent.com/carml/carml/master/carml-engine%2Fsrc%2Ftest%2Fresources%2Fcom%2Ftaxonic%2Fcarml%2Frmltestcases%2Ftest-cases%2FRMLTC0007a-JSON%2Fmapping.ttl



---
RDF parsed as ttl, in repository: https://github.com/carml/carml
> at line 22 of <>:
Bad syntax (Prefix "rdf:" not bound) at ^ in:
"...b'rstName}"\n  ];\n\n  rr:predicateObjectMap [ \n    rr:predicate '^b'rdf:type;\n    rr:object foaf:Person; \n  ].\n\n\n'"

---
File: https://raw.githubusercontent.com/carml/carml/master/carml-engine%2Fsrc%2Ftest%2Fresources%2Fcom%2Ftaxonic%2Fcarml%2Frmltestcases%2Ftest-cases%2FRMLTC0009b-CSV%2Fmapping.ttl



---
RDF parsed as ttl, in repository: https://github.com/carml/carml
> at line 58 of <>:
Bad syntax (Prefix "rdfs:" not bound) at ^ in:
"...b'orts> ;\n  ]; \n\t\n  rr:predicateObjectMap [ \n    rr:predicate '^b'rdfs:label ; \n    rr:objectMap [ rml:reference "Name" ];\n  ]'..."

---
File: https://raw.githubusercontent.com/carml/carml/master/carml-engine%2Fsrc%2Ftest%2Fresources%2Fcom%2Ftaxonic%2Fcarml%2Frmltestcases%2Ftest-cases%2FRMLTC0007f-SPARQL%2Fmapping.ttl



---
RDF parsed as ttl, in repository: https://github.com/carml/carml
> at line 43 of <>:
Bad syntax (Prefix "foaf:" not bound) at ^ in:
"...b'bjectMap [\n        rr:predicate rdf:type;\n        rr:object '^b'foaf:Person\n      ].\n'"

---
File: https://raw.githubusercontent.com/carml/carml/master/carml-engine%2Fsrc%2Ftest%2Fresources%2Fcom%2Ftaxonic%2Fcarml%2Frmltestcases%2Ftest-cases%2FRMLTC0008b-PostgreSQL%2Fmapping.ttl



---
RDF parsed as ttl, in repository: https://github.com/carml/carml
> at line 23 of <>:
Bad syntax (Prefix "rdf:" not bound) at ^ in:
"...b'com/{Sport}" ];\n\n  rr:predicateObjectMap [\n    rr:predicate '^b'rdf:type ;\n    rr:object activity:Sport ;\n  ] .\n\n<TriplesMap'..."

---
File: https://raw.githubusercontent.com/carml/carml/master/carml-engine%2Fsrc%2Ftest%2Fresources%2Fcom%2Ftaxonic%2Fcarml%2Frmltestcases%2Ftest-cases%2FRMLTC0015a-PostgreSQL%2Fmapping.ttl



---
RDF parsed as ttl, in repository: https://github.com/carml/carml
> at line 29 of <>:
Bad syntax (Prefix "rdfs:" not bound) at ^ in:
"...b'om/{code}"\n  ];\n\n  rr:predicateObjectMap [\n    rr:predicate '^b'rdfs:label ;\n    rr:objectMap [\n      rml:reference "name";\n'..."

---
File: https://raw.githubusercontent.com/carml/carml/master/carml-engine%2Fsrc%2Ftest%2Fresources%2Fcom%2Ftaxonic%2Fcarml%2Frmltestcases%2Ftest-cases%2FRMLTC0015a-SQLServer%2Fmapping.ttl



---
RDF parsed as ttl, in repository: https://github.com/carml/carml
> at line 29 of <>:
Bad syntax (Prefix "rdfs:" not bound) at ^ in:
"...b'om/{Code}"\n  ];\n\n  rr:predicateObjectMap [\n    rr:predicate '^b'rdfs:label ;\n    rr:objectMap [\n      rml:reference "Name";\n'..."

---
File: https://raw.githubusercontent.com/carml/carml/master/carml-engine%2Fsrc%2Ftest%2Fresources%2Fcom%2Ftaxonic%2Fcarml%2Frmltestcases%2Ftest-cases%2FRMLTC0010c-JSON%2Fmapping.ttl



---
RDF parsed as ttl, in repository: https://github.com/carml/carml
> at line 23 of <>:
Bad syntax (bad escape) at ^ in:
"...b'\n    rr:predicate ex:code ;\n    rr:objectMap [ rr:template "'^b'\\{\\{\\{ {ISO 3166} \\}\\}\\}"; rr:termType rr:Literal]\n  ] .\n'"

---
File: https://raw.githubusercontent.com/carml/carml/master/carml-engine%2Fsrc%2Ftest%2Fresources%2Fcom%2Ftaxonic%2Fcarml%2Frmltestcases%2Ftest-cases%2FRMLTC0007c-SPARQL%2Fmapping.ttl



---
RDF parsed as ttl, in repository: https://github.com/carml/carml
> at line 37 of <>:
Bad syntax (Prefix "foaf:" not bound) at ^ in:
"...b'com/Student/{ID.value}/{FirstName.value}";\n        rr:class '^b'foaf:Person, ex:Student\n      ];\n\n      rr:predicateObjectMa'..."

---
File: https://raw.githubusercontent.com/carml/carml/master/carml-engine%2Fsrc%2Ftest%2Fresources%2Fcom%2Ftaxonic%2Fcarml%2Frmltestcases%2Ftest-cases%2FRMLTC0008a-PostgreSQL%2Fmapping.ttl



---
RDF parsed as ttl, in repository: https://github.com/carml/carml
> at line 25 of <>:
Bad syntax (Prefix "rdf:" not bound) at ^ in:
"...b'Name}" ]\n  ];\n\t\n  rr:predicateObjectMap [ \n    rr:predicate '^b'rdf:type ;\n    rr:object foaf:Person; \n  ];\n\t\n  rr:predicate'..."

---
File: https://raw.githubusercontent.com/carml/carml/master/carml-engine%2Fsrc%2Ftest%2Fresources%2Fcom%2Ftaxonic%2Fcarml%2Frmltestcases%2Ftest-cases%2FRMLTC0007b-XML%2Fmapping.ttl



---
RDF parsed as ttl, in repository: https://github.com/carml/carml
> at line 23 of <>:
Bad syntax (Prefix "rdf:" not bound) at ^ in:
"...b'rsonGraph\n  ];\n\n  rr:predicateObjectMap [ \n    rr:predicate '^b'rdf:type;\n    rr:object foaf:Person; \n  ];\n\n  rr:predicateOb'..."

---
File: https://raw.githubusercontent.com/carml/carml/master/carml-engine%2Fsrc%2Ftest%2Fresources%2Fcom%2Ftaxonic%2Fcarml%2Frmltestcases%2Ftest-cases%2FRMLTC0015a-MySQL%2Fmapping.ttl



---
RDF parsed as ttl, in repository: https://github.com/carml/carml
> at line 29 of <>:
Bad syntax (Prefix "rdfs:" not bound) at ^ in:
"...b'om/{Code}"\n  ];\n\n  rr:predicateObjectMap [\n    rr:predicate '^b'rdfs:label ;\n    rr:objectMap [\n      rml:reference "Name";\n'..."

---
File: https://raw.githubusercontent.com/carml/carml/master/carml-engine%2Fsrc%2Ftest%2Fresources%2Fcom%2Ftaxonic%2Fcarml%2Frmltestcases%2Ftest-cases%2FRMLTC0015b-PostgreSQL%2Fmapping.ttl



---
RDF parsed as ttl, in repository: https://github.com/carml/carml
> at line 28 of <>:
Bad syntax (Prefix "rdfs:" not bound) at ^ in:
"...b'om/{Code}"\n  ];\n\n  rr:predicateObjectMap [\n    rr:predicate '^b'rdfs:label ;\n    rr:objectMap [\n      rml:reference "Name";\n'..."

---
File: https://raw.githubusercontent.com/carml/carml/master/carml-engine%2Fsrc%2Ftest%2Fresources%2Fcom%2Ftaxonic%2Fcarml%2Frmltestcases%2Ftest-cases%2FRMLTC0009b-SQLServer%2Fmapping.ttl



---
RDF parsed as ttl, in repository: https://github.com/carml/carml
> at line 61 of <>:
Bad syntax (Prefix "rdfs:" not bound) at ^ in:
"...b'orts> ;\n  ]; \n\t\n  rr:predicateObjectMap [ \n    rr:predicate '^b'rdfs:label ; \n    rr:objectMap [ rml:reference "Name" ];\n  ]'..."

---
File: https://raw.githubusercontent.com/carml/carml/master/carml-engine%2Fsrc%2Ftest%2Fresources%2Fcom%2Ftaxonic%2Fcarml%2Frmltestcases%2Ftest-cases%2FRMLTC0009a-JSON%2Fmapping.ttl



---
RDF parsed as ttl, in repository: https://github.com/carml/carml
> at line 50 of <>:
Bad syntax (Prefix "rdfs:" not bound) at ^ in:
"...b'ort_{ID}" ]; \n\t\n  rr:predicateObjectMap [ \n    rr:predicate '^b'rdfs:label ; \n    rr:objectMap [ rml:reference "Name" ];\n  ]'..."

---
File: https://raw.githubusercontent.com/carml/carml/master/carml-engine%2Fsrc%2Ftest%2Fresources%2Fcom%2Ftaxonic%2Fcarml%2Frmltestcases%2Ftest-cases%2FRMLTC0008b-CSV%2Fmapping.ttl



---
RDF parsed as ttl, in repository: https://github.com/carml/carml
> at line 20 of <>:
Bad syntax (Prefix "rdf:" not bound) at ^ in:
"...b'com/{Sport}" ];\n\n  rr:predicateObjectMap [\n    rr:predicate '^b'rdf:type ;\n    rr:object activity:Sport ;\n  ] .\n\n<TriplesMap'..."

---
File: https://raw.githubusercontent.com/carml/carml/master/carml-engine%2Fsrc%2Ftest%2Fresources%2Fcom%2Ftaxonic%2Fcarml%2Frmltestcases%2Ftest-cases%2FRMLTC0008a-MySQL%2Fmapping.ttl



---
RDF parsed as ttl, in repository: https://github.com/carml/carml
> at line 25 of <>:
Bad syntax (Prefix "rdf:" not bound) at ^ in:
"...b'Name}" ]\n  ];\n\t\n  rr:predicateObjectMap [ \n    rr:predicate '^b'rdf:type ;\n    rr:object foaf:Person; \n  ];\n\t\n  rr:predicate'..."

---
File: https://raw.githubusercontent.com/carml/carml/master/carml-engine%2Fsrc%2Ftest%2Fresources%2Fcom%2Ftaxonic%2Fcarml%2Frmltestcases%2Ftest-cases%2FRMLTC0009a-SQLServer%2Fmapping.ttl



---
RDF parsed as ttl, in repository: https://github.com/carml/carml
> at line 51 of <>:
Bad syntax (Prefix "rdfs:" not bound) at ^ in:
"...b'ort_{ID}" ]; \n\t\n  rr:predicateObjectMap [ \n    rr:predicate '^b'rdfs:label ; \n    rr:objectMap [ rml:reference "Name" ];\n  ]'..."

---
File: https://raw.githubusercontent.com/carml/carml/master/carml-engine%2Fsrc%2Ftest%2Fresources%2Fcom%2Ftaxonic%2Fcarml%2Frmltestcases%2Ftest-cases%2FRMLTC0009a-SPARQL%2Fmapping.ttl



---
RDF parsed as ttl, in repository: https://github.com/carml/carml
> at line 12 of <>:
Bad syntax (Prefix "sd:" not bound) at ^ in:
"...b'fu-berlin.de/suhl/bizer/D2RQ/0.1#> .\n\n<#InputSPARQL1>\n    a '^b'sd:Service ;\n    sd:endpoint <http://localhost:PORT/ds1/spar'..."

---
File: https://raw.githubusercontent.com/carml/carml/master/carml-engine%2Fsrc%2Ftest%2Fresources%2Fcom%2Ftaxonic%2Fcarml%2Frmltestcases%2Ftest-cases%2FRMLTC0004a-SPARQL%2Fmapping.ttl



---
RDF parsed as ttl, in repository: https://github.com/carml/carml
> at line 41 of <>:
Bad syntax (Prefix "foaf:" not bound) at ^ in:
"...b'     ];\n\n      rr:predicateObjectMap [\n        rr:predicate '^b'foaf:name ;\n        rr:objectMap [\n          rml:reference "'..."

---
File: https://raw.githubusercontent.com/carml/carml/master/carml-engine%2Fsrc%2Ftest%2Fresources%2Fcom%2Ftaxonic%2Fcarml%2Frmltestcases%2Ftest-cases%2FRMLTC0004b-SPARQL%2Fmapping.ttl



---
RDF parsed as ttl, in repository: https://github.com/carml/carml
> at line 40 of <>:
Bad syntax (Prefix "foaf:" not bound) at ^ in:
"...b'l\n     ];\n\n     rr:predicateObjectMap [\n       rr:predicate '^b'foaf:name;\n       rr:objectMap [\n         rml:reference "Nam'..."

---
File: https://raw.githubusercontent.com/carml/carml/master/carml-engine%2Fsrc%2Ftest%2Fresources%2Fcom%2Ftaxonic%2Fcarml%2Frmltestcases%2Ftest-cases%2FRMLTC0009a-XML%2Fmapping.ttl



---
RDF parsed as ttl, in repository: https://github.com/carml/carml
> at line 50 of <>:
Bad syntax (Prefix "rdfs:" not bound) at ^ in:
"...b'ort_{ID}" ]; \n\t\n  rr:predicateObjectMap [ \n    rr:predicate '^b'rdfs:label ; \n    rr:objectMap [ rml:reference "Name" ];\n  ]'..."

---
File: https://raw.githubusercontent.com/carml/carml/master/carml-engine%2Fsrc%2Ftest%2Fresources%2Fcom%2Ftaxonic%2Fcarml%2Frmltestcases%2Ftest-cases%2FRMLTC0002b-SPARQL%2Fmapping.ttl



---
RDF parsed as ttl, in repository: https://github.com/carml/carml
> at line 40 of <>:
Bad syntax (Prefix "foaf:" not bound) at ^ in:
"...b'     ];\n\n      rr:predicateObjectMap [\n        rr:predicate '^b'foaf:name;\n        rr:objectMap [ rml:reference "Name.value"'..."

---
File: https://raw.githubusercontent.com/carml/carml/master/carml-engine%2Fsrc%2Ftest%2Fresources%2Fcom%2Ftaxonic%2Fcarml%2Frmltestcases%2Ftest-cases%2FRMLTC0008a-XML%2Fmapping.ttl



---
RDF parsed as ttl, in repository: https://github.com/carml/carml
> at line 24 of <>:
Bad syntax (Prefix "rdf:" not bound) at ^ in:
"...b'Name}" ]\n  ];\n\t\n  rr:predicateObjectMap [ \n    rr:predicate '^b'rdf:type ;\n    rr:object foaf:Person; \n  ];\n\t\n  rr:predicate'..."

---
File: https://raw.githubusercontent.com/carml/carml/master/carml-engine%2Fsrc%2Ftest%2Fresources%2Fcom%2Ftaxonic%2Fcarml%2Frmltestcases%2Ftest-cases%2FRMLTC0020a-CSV%2Fmapping.ttl



---
RDF parsed as ttl, in repository: https://github.com/carml/carml
> at line 25 of <>:
Bad syntax (Prefix "rdf:" not bound) at ^ in:
"...b'ype rr:IRI\n  ];\n\n  rr:predicateObjectMap [\n    rr:predicate '^b'rdf:type;\n    rr:object foaf:Person\n  ].\n'"

---
File: https://raw.githubusercontent.com/carml/carml/master/carml-engine%2Fsrc%2Ftest%2Fresources%2Fcom%2Ftaxonic%2Fcarml%2Frmltestcases%2Ftest-cases%2FRMLTC0002a-SPARQL%2Fmapping.ttl



---
RDF parsed as ttl, in repository: https://github.com/carml/carml
> at line 36 of <>:
Bad syntax (Prefix "foaf:" not bound) at ^ in:
"...b'/example.com/{ID.value}/{Name.value}";\n            rr:class '^b'foaf:Person\n    ];\n\n    rr:predicateObjectMap [\n      rr:pre'..."

---
File: https://raw.githubusercontent.com/carml/carml/master/carml-engine%2Fsrc%2Ftest%2Fresources%2Fcom%2Ftaxonic%2Fcarml%2Frmltestcases%2Ftest-cases%2FRMLTC0015a-JSON%2Fmapping.ttl



---
RDF parsed as ttl, in repository: https://github.com/carml/carml
> at line 23 of <>:
Bad syntax (Prefix "rdfs:" not bound) at ^ in:
"...b'/{Code}"\n  ];\n\t\n  rr:predicateObjectMap [ \n    rr:predicate '^b'rdfs:label ;\n    rr:objectMap [\n      rml:reference "Name";\n'..."

---
File: https://raw.githubusercontent.com/carml/carml/master/carml-engine%2Fsrc%2Ftest%2Fresources%2Fcom%2Ftaxonic%2Fcarml%2Frmltestcases%2Ftest-cases%2FRMLTC0000-SPARQL%2Fmapping.ttl



---
RDF parsed as ttl, in repository: https://github.com/carml/carml
> at line 36 of <>:
Bad syntax (Prefix "foaf:" not bound) at ^ in:
"...b'}"\n    ];\n\n    rr:predicateObjectMap [\n        rr:predicate '^b'foaf:name ;\n        rr:objectMap [\n            rml:reference'..."

---
File: https://raw.githubusercontent.com/carml/carml/master/carml-engine%2Fsrc%2Ftest%2Fresources%2Fcom%2Ftaxonic%2Fcarml%2Frmltestcases%2Ftest-cases%2FRMLTC0015b-MySQL%2Fmapping.ttl



---
RDF parsed as ttl, in repository: https://github.com/carml/carml
> at line 29 of <>:
Bad syntax (Prefix "rdfs:" not bound) at ^ in:
"...b'om/{Code}"\n  ];\n\n  rr:predicateObjectMap [\n    rr:predicate '^b'rdfs:label ;\n    rr:objectMap [\n      rml:reference "Name";\n'..."

---
File: https://raw.githubusercontent.com/carml/carml/master/carml-engine%2Fsrc%2Ftest%2Fresources%2Fcom%2Ftaxonic%2Fcarml%2Frmltestcases%2Ftest-cases%2FRMLTC0008b-JSON%2Fmapping.ttl



---
RDF parsed as ttl, in repository: https://github.com/carml/carml
> at line 21 of <>:
Bad syntax (Prefix "rdf:" not bound) at ^ in:
"...b'com/{Sport}" ];\n\n  rr:predicateObjectMap [\n    rr:predicate '^b'rdf:type ;\n    rr:object activity:Sport ;\n  ] .\n\n<TriplesMap'..."

---
File: https://raw.githubusercontent.com/carml/carml/master/carml-engine%2Fsrc%2Ftest%2Fresources%2Fcom%2Ftaxonic%2Fcarml%2Frmltestcases%2Ftest-cases%2FRMLTC0007h-SPARQL%2Fmapping.ttl



---
RDF parsed as ttl, in repository: https://github.com/carml/carml
> at line 41 of <>:
Bad syntax (Prefix "foaf:" not bound) at ^ in:
"...b'     ];\n\n      rr:predicateObjectMap [\n        rr:predicate '^b'foaf:name;\n        rr:objectMap [\n          rml:reference "N'..."

---
File: https://raw.githubusercontent.com/carml/carml/master/carml-engine%2Fsrc%2Ftest%2Fresources%2Fcom%2Ftaxonic%2Fcarml%2Frmltestcases%2Ftest-cases%2FRMLTC0003c-SPARQL%2Fmapping.ttl



---
RDF parsed as ttl, in repository: https://github.com/carml/carml
> at line 40 of <>:
Bad syntax (Prefix "foaf:" not bound) at ^ in:
"...b'     ];\n\n      rr:predicateObjectMap [\n        rr:predicate '^b'foaf:name ;\n        rr:objectMap [\n          rr:template "{F'..."

---
File: https://raw.githubusercontent.com/carml/carml/master/carml-engine%2Fsrc%2Ftest%2Fresources%2Fcom%2Ftaxonic%2Fcarml%2Frmltestcases%2Ftest-cases%2FRMLTC0010c-SQLServer%2Fmapping.ttl



---
RDF parsed as ttl, in repository: https://github.com/carml/carml
> at line 24 of <>:
Bad syntax (bad escape) at ^ in:
"...b'\n    rr:predicate ex:code ;\n    rr:objectMap [ rr:template "'^b'\\{\\{\\{ {ISO 3166} \\}\\}\\}"; rr:termType rr:Literal]\n  ] .\n\n<#'..."

---
File: https://raw.githubusercontent.com/carml/carml/master/carml-engine%2Fsrc%2Ftest%2Fresources%2Fcom%2Ftaxonic%2Fcarml%2Frmltestcases%2Ftest-cases%2FRMLTC0008a-SQLServer%2Fmapping.ttl



---
RDF parsed as ttl, in repository: https://github.com/carml/carml
> at line 25 of <>:
Bad syntax (Prefix "rdf:" not bound) at ^ in:
"...b'Name}" ]\n  ];\n\t\n  rr:predicateObjectMap [ \n    rr:predicate '^b'rdf:type ;\n    rr:object foaf:Person; \n  ];\n\t\n  rr:predicate'..."

---
File: https://raw.githubusercontent.com/carml/carml/master/carml-engine%2Fsrc%2Ftest%2Fresources%2Fcom%2Ftaxonic%2Fcarml%2Frmltestcases%2Ftest-cases%2FRMLTC0008c-SPARQL%2Fmapping.ttl



---
RDF parsed as ttl, in repository: https://github.com/carml/carml
> at line 12 of <>:
Bad syntax (Prefix "sd:" not bound) at ^ in:
"...b'.fu-berlin.de/suhl/bizer/D2RQ/0.1#> .\n\n<#InputSPARQL>\n    a '^b'sd:Service ;\n    sd:endpoint <http://localhost:PORT/ds1/spar'..."

---
File: https://raw.githubusercontent.com/carml/carml/master/carml-engine%2Fsrc%2Ftest%2Fresources%2Fcom%2Ftaxonic%2Fcarml%2Frmltestcases%2Ftest-cases%2FRMLTC0009a-CSV%2Fmapping.ttl



---
RDF parsed as ttl, in repository: https://github.com/carml/carml
> at line 48 of <>:
Bad syntax (Prefix "rdfs:" not bound) at ^ in:
"...b'ort_{ID}" ]; \n\t\n  rr:predicateObjectMap [ \n    rr:predicate '^b'rdfs:label ; \n    rr:objectMap [ rml:reference "Name" ];\n  ]'..."

---
File: https://raw.githubusercontent.com/carml/carml/master/carml-engine%2Fsrc%2Ftest%2Fresources%2Fcom%2Ftaxonic%2Fcarml%2Frmltestcases%2Ftest-cases%2FRMLTC0010c-PostgreSQL%2Fmapping.ttl



---
RDF parsed as ttl, in repository: https://github.com/carml/carml
> at line 24 of <>:
Bad syntax (bad escape) at ^ in:
"...b'\n    rr:predicate ex:code ;\n    rr:objectMap [ rr:template "'^b'\\{\\{\\{ {ISO 3166} \\}\\}\\}"; rr:termType rr:Literal]\n  ] .\n\n<#'..."

---
File: https://raw.githubusercontent.com/carml/carml/master/carml-engine%2Fsrc%2Ftest%2Fresources%2Fcom%2Ftaxonic%2Fcarml%2Frmltestcases%2Ftest-cases%2FRMLTC0008b-MySQL%2Fmapping.ttl



---
RDF parsed as ttl, in repository: https://github.com/carml/carml
> at line 23 of <>:
Bad syntax (Prefix "rdf:" not bound) at ^ in:
"...b'com/{Sport}" ];\n\n  rr:predicateObjectMap [\n    rr:predicate '^b'rdf:type ;\n    rr:object activity:Sport ;\n  ] .\n\n<TriplesMap'..."

---
File: https://raw.githubusercontent.com/carml/carml/master/carml-engine%2Fsrc%2Ftest%2Fresources%2Fcom%2Ftaxonic%2Fcarml%2Frmltestcases%2Ftest-cases%2FRMLTC0009a-PostgreSQL%2Fmapping.ttl



---
RDF parsed as ttl, in repository: https://github.com/carml/carml
> at line 51 of <>:
Bad syntax (Prefix "rdfs:" not bound) at ^ in:
"...b'ort_{ID}" ]; \n\t\n  rr:predicateObjectMap [ \n    rr:predicate '^b'rdfs:label ; \n    rr:objectMap [ rml:reference "Name" ];\n  ]'..."

---
File: https://raw.githubusercontent.com/carml/carml/master/carml-engine%2Fsrc%2Ftest%2Fresources%2Fcom%2Ftaxonic%2Fcarml%2Frmltestcases%2Ftest-cases%2FRMLTC0012a-SPARQL%2Fmapping.ttl



---
RDF parsed as ttl, in repository: https://github.com/carml/carml
> at line 38 of <>:
Bad syntax (Prefix "foaf:" not bound) at ^ in:
"...b'ode; ];\n\n      rr:predicateObjectMap [\n        rr:predicate '^b'foaf:name ;\n        rr:objectMap [\n          rr:template "{f'..."

---
File: https://raw.githubusercontent.com/carml/carml/master/carml-engine%2Fsrc%2Ftest%2Fresources%2Fcom%2Ftaxonic%2Fcarml%2Frmltestcases%2Ftest-cases%2FRMLTC0009a-MySQL%2Fmapping.ttl



---
RDF parsed as ttl, in repository: https://github.com/carml/carml
> at line 51 of <>:
Bad syntax (Prefix "rdfs:" not bound) at ^ in:
"...b'ort_{ID}" ]; \n\t\n  rr:predicateObjectMap [ \n    rr:predicate '^b'rdfs:label ; \n    rr:objectMap [ rml:reference "Name" ];\n  ]'..."

---
File: https://raw.githubusercontent.com/carml/carml/master/carml-engine%2Fsrc%2Ftest%2Fresources%2Fcom%2Ftaxonic%2Fcarml%2Frmltestcases%2Ftest-cases%2FRMLTC0009b-SPARQL%2Fmapping.ttl



---
RDF parsed as ttl, in repository: https://github.com/carml/carml
> at line 12 of <>:
Bad syntax (Prefix "sd:" not bound) at ^ in:
"...b'fu-berlin.de/suhl/bizer/D2RQ/0.1#> .\n\n<#InputSPARQL1>\n    a '^b'sd:Service ;\n    sd:endpoint <http://localhost:PORT/ds1/spar'..."

---
File: https://raw.githubusercontent.com/carml/carml/master/carml-engine%2Fsrc%2Ftest%2Fresources%2Fcom%2Ftaxonic%2Fcarml%2Frmltestcases%2Ftest-cases%2FRMLTC0015b-SQLServer%2Fmapping.ttl



---
RDF parsed as ttl, in repository: https://github.com/carml/carml
> at line 28 of <>:
Bad syntax (Prefix "rdfs:" not bound) at ^ in:
"...b'om/{Code}"\n  ];\n\n  rr:predicateObjectMap [\n    rr:predicate '^b'rdfs:label ;\n    rr:objectMap [\n      rml:reference "Name";\n'..."

---
File: https://raw.githubusercontent.com/carml/carml/master/carml-engine%2Fsrc%2Ftest%2Fresources%2Fcom%2Ftaxonic%2Fcarml%2Frmltestcases%2Ftest-cases%2FRMLTC0008b-SQLServer%2Fmapping.ttl



---
RDF parsed as ttl, in repository: https://github.com/carml/carml
> at line 23 of <>:
Bad syntax (Prefix "rdf:" not bound) at ^ in:
"...b'com/{Sport}" ];\n\n  rr:predicateObjectMap [\n    rr:predicate '^b'rdf:type ;\n    rr:object activity:Sport ;\n  ] .\n\n<TriplesMap'..."

---
File: https://raw.githubusercontent.com/carml/carml/master/carml-engine%2Fsrc%2Ftest%2Fresources%2Fcom%2Ftaxonic%2Fcarml%2Frmltestcases%2Ftest-cases%2FRMLTC0008a-SPARQL%2Fmapping.ttl



---
RDF parsed as ttl, in repository: https://github.com/carml/carml
> at line 42 of <>:
Bad syntax (Prefix "rdf:" not bound) at ^ in:
"...b'     ];\n\n      rr:predicateObjectMap [\n        rr:predicate '^b'rdf:type ;\n        rr:object foaf:Person;\n      ];\n\n      rr'..."

---
File: https://raw.githubusercontent.com/carml/carml/master/carml-engine%2Fsrc%2Ftest%2Fresources%2Fcom%2Ftaxonic%2Fcarml%2Frmltestcases%2Ftest-cases%2FRMLTC0001b-SPARQL%2Fmapping.ttl



---
RDF parsed as ttl, in repository: https://github.com/carml/carml
> at line 37 of <>:
Bad syntax (Prefix "foaf:" not bound) at ^ in:
"...b'}"\n    ];\n\n    rr:predicateObjectMap [\n        rr:predicate '^b'foaf:name ;\n        rr:objectMap [\n            rml:reference'..."

---
File: https://raw.githubusercontent.com/carml/carml/master/carml-engine%2Fsrc%2Ftest%2Fresources%2Fcom%2Ftaxonic%2Fcarml%2Frmltestcases%2Ftest-cases%2FRMLTC0010c-MySQL%2Fmapping.ttl



---
RDF parsed as ttl, in repository: https://github.com/carml/carml
> at line 24 of <>:
Bad syntax (bad escape) at ^ in:
"...b'\n    rr:predicate ex:code ;\n    rr:objectMap [ rr:template "'^b'\\{\\{\\{ {ISO 3166} \\}\\}\\}"; rr:termType rr:Literal]\n  ] .\n\n<#'..."

---
File: https://raw.githubusercontent.com/carml/carml/master/carml-engine%2Fsrc%2Ftest%2Fresources%2Fcom%2Ftaxonic%2Fcarml%2Frmltestcases%2Ftest-cases%2FRMLTC0009b-PostgreSQL%2Fmapping.ttl



---
RDF parsed as ttl, in repository: https://github.com/carml/carml
> at line 61 of <>:
Bad syntax (Prefix "rdfs:" not bound) at ^ in:
"...b'orts> ;\n  ]; \n\t\n  rr:predicateObjectMap [ \n    rr:predicate '^b'rdfs:label ; \n    rr:objectMap [ rml:reference "Name" ];\n  ]'..."

---
File: https://raw.githubusercontent.com/carml/carml/master/carml-engine%2Fsrc%2Ftest%2Fresources%2Fcom%2Ftaxonic%2Fcarml%2Frmltestcases%2Ftest-cases%2FRMLTC0008b-SPARQL%2Fmapping.ttl



---
RDF parsed as ttl, in repository: https://github.com/carml/carml
> at line 40 of <>:
Bad syntax (Prefix "rdf:" not bound) at ^ in:
"...b'ue}" ];\n\n      rr:predicateObjectMap [\n        rr:predicate '^b'rdf:type ;\n        rr:object activity:Sport ;\n      ] .\n\n\n<T'..."

---
File: https://raw.githubusercontent.com/carml/carml/master/carml-engine%2Fsrc%2Ftest%2Fresources%2Fcom%2Ftaxonic%2Fcarml%2Frmltestcases%2Ftest-cases%2FRMLTC0009b-XML%2Fmapping.ttl



---
RDF parsed as ttl, in repository: https://github.com/carml/carml
> at line 60 of <>:
Bad syntax (Prefix "rdfs:" not bound) at ^ in:
"...b'ports> ;\n  ];\n\t\n  rr:predicateObjectMap [ \n    rr:predicate '^b'rdfs:label ; \n    rr:objectMap [ rml:reference "Name" ];\n  ]'..."

---
File: https://raw.githubusercontent.com/carml/carml/master/carml-engine%2Fsrc%2Ftest%2Fresources%2Fcom%2Ftaxonic%2Fcarml%2Frmltestcases%2Ftest-cases%2FRMLTC0001a-SPARQL%2Fmapping.ttl



---
RDF parsed as ttl, in repository: https://github.com/carml/carml
> at line 37 of <>:
Bad syntax (Prefix "foaf:" not bound) at ^ in:
"...b'}"\n    ];\n\n    rr:predicateObjectMap [\n        rr:predicate '^b'foaf:name ;\n        rr:objectMap [\n            rml:reference'..."

---
File: https://raw.githubusercontent.com/carml/carml/master/carml-engine%2Fsrc%2Ftest%2Fresources%2Fcom%2Ftaxonic%2Fcarml%2Frmltestcases%2Ftest-cases%2FRMLTC0007a-SPARQL%2Fmapping.ttl



---
RDF parsed as ttl, in repository: https://github.com/carml/carml
> at line 42 of <>:
Bad syntax (Prefix "foaf:" not bound) at ^ in:
"...b'bjectMap [\n        rr:predicate rdf:type;\n        rr:object '^b'foaf:Person;\n      ].\n'"

---
File: https://raw.githubusercontent.com/carml/carml/master/carml-engine%2Fsrc%2Ftest%2Fresources%2Fcom%2Ftaxonic%2Fcarml%2Frmltestcases%2Ftest-cases%2FRMLTC0009b-JSON%2Fmapping.ttl



---
RDF parsed as ttl, in repository: https://github.com/carml/carml
> at line 58 of <>:
Bad syntax (Prefix "rdfs:" not bound) at ^ in:
"...b'orts> ;\n  ]; \n\t\n  rr:predicateObjectMap [ \n    rr:predicate '^b'rdfs:label ; \n    rr:objectMap [ rml:reference "Name" ];\n  ]'..."

---
File: https://raw.githubusercontent.com/carml/carml/master/carml-engine%2Fsrc%2Ftest%2Fresources%2Fcom%2Ftaxonic%2Fcarml%2Frmltestcases%2Ftest-cases%2FRMLTC0009b-MySQL%2Fmapping.ttl



---
RDF parsed as ttl, in repository: https://github.com/carml/carml
> at line 61 of <>:
Bad syntax (Prefix "rdfs:" not bound) at ^ in:
"...b'orts> ;\n  ]; \n\t\n  rr:predicateObjectMap [ \n    rr:predicate '^b'rdfs:label ; \n    rr:objectMap [ rml:reference "Name" ];\n  ]'..."

---
File: https://raw.githubusercontent.com/carml/carml/master/carml-engine%2Fsrc%2Ftest%2Fresources%2Fcom%2Ftaxonic%2Fcarml%2Frmltestcases%2Ftest-cases%2FRMLTC0015a-XML%2Fmapping.ttl



---
RDF parsed as ttl, in repository: https://github.com/carml/carml
> at line 23 of <>:
Bad syntax (Prefix "rdfs:" not bound) at ^ in:
"...b'/{Code}"\n  ];\n\t\n  rr:predicateObjectMap [ \n    rr:predicate '^b'rdfs:label ;\n    rr:objectMap [\n      rml:reference "Name";\n'..."

---
File: https://raw.githubusercontent.com/carml/carml/master/carml-engine%2Fsrc%2Ftest%2Fresources%2Fcom%2Ftaxonic%2Fcarml%2Frmltestcases%2Ftest-cases%2FRMLTC0007e-SPARQL%2Fmapping.ttl



---
RDF parsed as ttl, in repository: https://github.com/carml/carml
> at line 38 of <>:
Bad syntax (Prefix "foaf:" not bound) at ^ in:
"...b'value}";\n        rr:graph ex:PersonGraph ;\n        rr:class '^b'foaf:Person\n      ].'"

---
File: https://raw.githubusercontent.com/carml/carml/master/carml-engine%2Fsrc%2Ftest%2Fresources%2Fcom%2Ftaxonic%2Fcarml%2Frmltestcases%2Ftest-cases%2FRMLTC0010c-CSV%2Fmapping.ttl



---
RDF parsed as ttl, in repository: https://github.com/carml/carml
> at line 22 of <>:
Bad syntax (bad escape) at ^ in:
"...b'\n    rr:predicate ex:code ;\n    rr:objectMap [ rr:template "'^b'\\{\\{\\{ {ISO 3166} \\}\\}\\}"; rr:termType rr:Literal]\n  ] .\n'"

---
File: https://raw.githubusercontent.com/carml/carml/master/carml-engine%2Fsrc%2Ftest%2Fresources%2Fcom%2Ftaxonic%2Fcarml%2Frmltestcases%2Ftest-cases%2FRMLTC0008a-JSON%2Fmapping.ttl



---
RDF parsed as ttl, in repository: https://github.com/carml/carml
> at line 24 of <>:
Bad syntax (Prefix "rdf:" not bound) at ^ in:
"...b'Name}" ]\n  ];\n\t\n  rr:predicateObjectMap [ \n    rr:predicate '^b'rdf:type ;\n    rr:object foaf:Person; \n  ];\n\t\n  rr:predicate'..."

---
File: https://raw.githubusercontent.com/carml/carml/master/carml-engine%2Fsrc%2Ftest%2Fresources%2Fcom%2Ftaxonic%2Fcarml%2Frmltestcases%2Ftest-cases%2FRMLTC0015a-CSV%2Fmapping.ttl



---
RDF parsed as ttl, in repository: https://github.com/carml/carml
> at line 22 of <>:
Bad syntax (Prefix "rdfs:" not bound) at ^ in:
"...b'/{Code}"\n  ];\n\t\n  rr:predicateObjectMap [ \n    rr:predicate '^b'rdfs:label ;\n    rr:objectMap [\n      rml:reference "Name";\n'..."

---
File: https://raw.githubusercontent.com/carml/carml/master/carml-engine%2Fsrc%2Ftest%2Fresources%2Fcom%2Ftaxonic%2Fcarml%2Frmltestcases%2Ftest-cases%2FRMLTC0012b-SPARQL%2Fmapping.ttl



---
RDF parsed as ttl, in repository: https://github.com/carml/carml
> at line 12 of <>:
Bad syntax (Prefix "sd:" not bound) at ^ in:
"...b'fu-berlin.de/suhl/bizer/D2RQ/0.1#> .\n\n<#InputSPARQL1>\n    a '^b'sd:Service ;\n    sd:endpoint <http://localhost:PORT/ds1/spar'..."

---
File: https://raw.githubusercontent.com/carml/carml/master/carml-engine%2Fsrc%2Ftest%2Fresources%2Fcom%2Ftaxonic%2Fcarml%2Frmltestcases%2Ftest-cases%2FRMLTC0007g-SPARQL%2Fmapping.ttl



---
RDF parsed as ttl, in repository: https://github.com/carml/carml
> at line 41 of <>:
Bad syntax (Prefix "foaf:" not bound) at ^ in:
"...b'     ];\n\n      rr:predicateObjectMap [\n        rr:predicate '^b'foaf:name;\n        rr:objectMap [\n          rml:reference "F'..."

---
File: https://raw.githubusercontent.com/carml/carml/master/carml-engine%2Fsrc%2Ftest%2Fresources%2Fcom%2Ftaxonic%2Fcarml%2Frmltestcases%2Ftest-cases%2FRMLTC0007b-SPARQL%2Fmapping.ttl



---
RDF parsed as ttl, in repository: https://github.com/carml/carml
> at line 41 of <>:
Bad syntax (Prefix "rdf:" not bound) at ^ in:
"...b'     ];\n\n      rr:predicateObjectMap [\n        rr:predicate '^b'rdf:type;\n        rr:object foaf:Person;\n      ];\n\n      rr:'..."

---
File: https://raw.githubusercontent.com/carml/carml/master/carml-engine%2Fsrc%2Ftest%2Fresources%2Fcom%2Ftaxonic%2Fcarml%2Frmltestcases%2Ftest-cases%2FRMLTC0010c-XML%2Fmapping.ttl



---
RDF parsed as ttl, in repository: https://github.com/carml/carml
> at line 23 of <>:
Bad syntax (bad escape) at ^ in:
"...b'\n    rr:predicate ex:code ;\n    rr:objectMap [ rr:template "'^b'\\{\\{\\{ {ISO3166} \\}\\}\\}"; rr:termType rr:Literal]\n  ] .\n'"

---
File: https://raw.githubusercontent.com/carml/carml/master/carml-engine%2Fsrc%2Ftest%2Fresources%2FRmlMapper%2Fnormalizedrelief.output.ttl



---
RDF parsed as ttl, in repository: https://github.com/carml/carml
> at line 1 of <>:
Bad syntax (expected '.' or '}' or ']' at end of statement) at ^ in:
"...b' 468516.492, 128640.711 468518.232, 128657.668 468517.362)" '^b'<http://brt.basisregistraties.overheid.nl/id/dataset/top10nl'..."

---
File: https://raw.githubusercontent.com/carml/carml/master/carml-engine%2Fsrc%2Ftest%2Fresources%2FRmlMapper%2Ftest12%2FremoveNonLatinCharsFunction.fno.ttl



---
RDF parsed as ttl, in repository: https://github.com/carml/carml
> at line 1 of <>:
Bad syntax (Prefix "ex:" not bound) at ^ in:
"b''^b'ex:removeNonLatinCharsFunction a fno:Function;\n\tfno:name "Th'..."

---
File: https://raw.githubusercontent.com/carml/carml/master/carml-engine%2Fsrc%2Ftest%2Fresources%2FRmlMapper%2Fwaterdeel%2Fnormalizedwaterdeel.output.ttl



---
RDF parsed as ttl, in repository: https://github.com/carml/carml
> at line 1 of <>:
Bad syntax (expected '.' or '}' or ']' at end of statement) at ^ in:
"...b'519834.448, 198688.066 519838.971, 198690.063 519850.601))" '^b'<http://brt.basisregistraties.overheid.nl/id/dataset/top10nl'..."

---
File: https://raw.githubusercontent.com/carml/carml/master/carml-engine%2Fsrc%2Ftest%2Fresources%2FRmlMapper%2Ftest11%2FtoBoolFunction.fno.ttl



---
RDF parsed as ttl, in repository: https://github.com/carml/carml
> at line 1 of <>:
Bad syntax (Prefix "ex:" not bound) at ^ in:
"b''^b'ex:toBoolFunction a fno:Function;\n\tfno:name "The toBool func'..."

---
File: https://raw.githubusercontent.com/carml/carml/master/carml-engine%2Fsrc%2Ftest%2Fresources%2FRmlMapper%2Ftest18%2FsumFunction.fno.ttl



---
RDF parsed as ttl, in repository: https://github.com/carml/carml
> at line 1 of <>:
Bad syntax (Prefix "ex:" not bound) at ^ in:
"b''^b'ex:sumFunction a fno:Function;\n\tfno:name "The sum function"^'..."

---
File: https://raw.githubusercontent.com/carml/carml/master/carml-engine%2Fsrc%2Ftest%2Fresources%2FRmlMapper%2Ftest18%2FlistTakingFunctionMapping.rml.ttl



---
RDF parsed as ttl, in repository: https://github.com/carml/carml
> at line 43 of <>:
Bad syntax (Prefix "xsd:" not bound) at ^ in:
"...b't" ;\n            ]\n          ];\n      ] ;\n      rr:datatype '^b'xsd:string;\n    ] ;\n  ] ;\n.\n'"

---
File: https://raw.githubusercontent.com/carml/carml/master/carml-engine%2Fsrc%2Ftest%2Fresources%2FRmlMapper%2Ftest18%2FtoIntFunction.fno.ttl



---
RDF parsed as ttl, in repository: https://github.com/carml/carml
> at line 1 of <>:
Bad syntax (Prefix "ex:" not bound) at ^ in:
"b''^b'ex:toIntFunction a fno:Function;\n\tfno:name "The toInt functi'..."

---
File: https://raw.githubusercontent.com/carml/carml/master/carml-engine%2Fsrc%2Ftest%2Fresources%2FRmlMapper%2Ftest18%2FnestedFunctionMapping.output.ttl



---
RDF parsed as ttl, in repository: https://github.com/carml/carml
> at line 4 of <>:
Bad syntax (Prefix "xsd:" not bound) at ^ in:
"...b'le.com/Student/4567> a ex:studentId ;\n\tex:hasSumScore "88"^^'^b'xsd:int .\n'"

---
File: https://raw.githubusercontent.com/carml/carml/master/carml-engine%2Fsrc%2Ftest%2Fresources%2FRmlMapper%2Fgebouw%2Fgebouw.rml.ttl



---
RDF parsed as ttl, in repository: https://github.com/carml/carml
> at line 36 of <>:
Bad syntax (expected '.' or '}' or ']' at end of statement) at ^ in:
"...b'eference "bronactualiteit";\n\t\t\trr:datatype xsd:date;\n\t\t]\n\t];'^b'x\n\t\n\trr:predicateObjectMap [\n\t\trr:predicate vocab:bronbeschr'..."

---
File: https://raw.githubusercontent.com/laurirondolo/sig-linkeddata/master/websitemapping.rml.ttl



---
RDF parsed as ttl, in repository: https://github.com/laurirondolo/sig-linkeddata
> at line 70 of <>:
Bad syntax (Prefix "foaf:" not bound) at ^ in:
"...b'    ]\r\n  ];\r\n\r\n   rr:predicateObjectMap [\r\n    rr:predicate '^b'foaf:depiction;\r\n    rr:objectMap [\r\n      rml:reference "de'..."

---
File: https://raw.githubusercontent.com/vortic3/GTFS-RDF/master/output_RML%2BFnO_Tenerife.rdf



---
RDF parsed as xml, in repository: https://github.com/vortic3/GTFS-RDF
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/output_RML%2BFnO_Tenerife.rdf:1:0: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/vortic3/GTFS-RDF/master/output_GTFS%40RDF_Barcelona.rdf



---
RDF parsed as xml, in repository: https://github.com/vortic3/GTFS-RDF
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/output_GTFS%40RDF_Barcelona.rdf:1:0: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/vortic3/GTFS-RDF/master/output_GTFS%40RDF_MLRT_Madrid.rdf



---
RDF parsed as xml, in repository: https://github.com/vortic3/GTFS-RDF
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/output_GTFS%40RDF_MLRT_Madrid.rdf:1:0: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/vortic3/GTFS-RDF/master/output_GTFS%40RDF_Wroclaw.rdf



---
RDF parsed as xml, in repository: https://github.com/vortic3/GTFS-RDF
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/output_GTFS%40RDF_Wroclaw.rdf:1:0: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/vortic3/GTFS-RDF/master/output_RML%2BFnO_Brest.rdf



---
RDF parsed as xml, in repository: https://github.com/vortic3/GTFS-RDF
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/output_RML%2BFnO_Brest.rdf:1:0: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/vortic3/GTFS-RDF/master/output_RML%2BFnO_Hamburg.rdf



---
RDF parsed as xml, in repository: https://github.com/vortic3/GTFS-RDF
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/output_RML%2BFnO_Hamburg.rdf:1:0: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/vortic3/GTFS-RDF/master/output_GTFS%40RDF_Taichung.rdf



---
RDF parsed as xml, in repository: https://github.com/vortic3/GTFS-RDF
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/output_GTFS%40RDF_Taichung.rdf:1:0: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/vortic3/GTFS-RDF/master/output_GTFS%40RDF_Bus_Madrid.rdf



---
RDF parsed as xml, in repository: https://github.com/vortic3/GTFS-RDF
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/output_GTFS%40RDF_Bus_Madrid.rdf:1:0: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/vortic3/GTFS-RDF/master/output_RML%2BFnO_MLRT_Madrid.rdf



---
RDF parsed as xml, in repository: https://github.com/vortic3/GTFS-RDF
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/output_RML%2BFnO_MLRT_Madrid.rdf:1:0: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/vortic3/GTFS-RDF/master/output_RML%2BFnO_Bus_Madrid.rdf



---
RDF parsed as xml, in repository: https://github.com/vortic3/GTFS-RDF
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/output_RML%2BFnO_Bus_Madrid.rdf:1:0: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/vortic3/GTFS-RDF/master/output_RML%2BFnO_Wroclaw.rdf



---
RDF parsed as xml, in repository: https://github.com/vortic3/GTFS-RDF
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/output_RML%2BFnO_Wroclaw.rdf:1:0: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/vortic3/GTFS-RDF/master/output_GTFS%40RDF_Tenerife.rdf



---
RDF parsed as xml, in repository: https://github.com/vortic3/GTFS-RDF
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/output_GTFS%40RDF_Tenerife.rdf:1:0: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/vortic3/GTFS-RDF/master/output_GTFS%40RDF_Vizcaya.rdf



---
RDF parsed as xml, in repository: https://github.com/vortic3/GTFS-RDF
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/output_GTFS%40RDF_Vizcaya.rdf:1:0: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/vortic3/GTFS-RDF/master/output_RML%2BFnO_Taichung.rdf



---
RDF parsed as xml, in repository: https://github.com/vortic3/GTFS-RDF
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/output_RML%2BFnO_Taichung.rdf:1:0: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/vortic3/GTFS-RDF/master/output_RML%2BFnO_Vizcaya.rdf



---
RDF parsed as xml, in repository: https://github.com/vortic3/GTFS-RDF
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/output_RML%2BFnO_Vizcaya.rdf:1:0: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/vortic3/GTFS-RDF/master/output_RML%2BFnO_Barcelona.rdf



---
RDF parsed as xml, in repository: https://github.com/vortic3/GTFS-RDF
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/output_RML%2BFnO_Barcelona.rdf:1:0: not well-formed (invalid token)

---


---
SPARQL endpoint failed: https://semantic.eea.europa.eu/sparql

byte indices must be integers or slices, not str

---


---
SPARQL endpoint failed: https://joinup.ec.europa.eu/sparql

EndPointNotFound: it was impossible to connect with the endpoint in that address, check if it is correct. 

Response:
b'<!DOCTYPE html>\n<html lang="en" dir="ltr" prefix="og: https://ogp.me/ns#">\n  <head>\n    <meta charset="utf-8" />\n<noscript><style>form.antibot * :not(.antibot-message) { display: none !important; }</style>\n</noscript><script>var _paq = _paq || [];(function(){var u=(("https:" == document.location.protocol) ? "https://webanalytics.ec.europa.eu/" : "http://webanalytics.ec.europa.eu/");_paq.push(["setSiteId", "183"]);_paq.push(["setTrackerUrl", u+"matomo.php"]);_paq.push(["setDocumentTitle", "404/URL = " + encodeURIComponent(document.location.pathname+document.location.search) + "/From = " + encodeURIComponent(document.referrer)]);_paq.push(["setDownloadExtensions", "7z|aac|arc|arj|asf|asx|avi|bin|csv|doc(x|m)?|dot(x|m)?|exe|flv|gif|gx|gz|gzip|hqx|jar|jpe?g|js|mp(2|3|4|e?g)|mov(ie)?|msi|msp|pdf|phps|png|ppt(x|m)?|pot(x|m)?|pps(x|m)?|ppam|sld(x|m)?|thmx|qtm?|ra(m|r)?|sea|sit|tar|tgz|torrent|txt|wav|wma|wmv|wpd|xls(x|m|b)?|xlt(x|m)|xlam|xml|z|zip"]);_paq.push(["setDoNotTrack", 1]);_paq.push(["trackPageView"]);_paq.push(["setIgnoreClasses", ["no-tracking","colorbox"]]);_paq.push(["enableLinkTracking"]);var d=document,g=d.createElement("script"),s=d.getElementsByTagName("script")[0];g.type="text/javascript";g.defer=true;g.async=true;g.src=u+"matomo.js";s.parentNode.insertBefore(g,s);})();</script>\n<link rel="canonical" href="https://joinup.ec.europa.eu/sparql" />\n<meta property="og:site_name" content="Joinup" />\n<meta property="og:url" content="https://joinup.ec.europa.eu/sparql" />\n<meta property="og:title" content="Page not found" />\n<meta property="og:image" content="https://joinup.ec.europa.eu/themes/joinup/images/logo.svg" />\n<meta property="og:image:secure_url" content="https://joinup.ec.europa.eu/themes/joinup/images/logo.svg" />\n<meta property="og:image:type" content="image/svg+xml" />\n<script type="application/json">{"utility":"piwik","siteID":"183","sitePath":["joinup.ec.europa.eu"],"is404":true,"instance":"ec.europa.eu"}</script>\n<meta name="Generator" content="Drupal 8 (https://www.drupal.org)" />\n<meta name="MobileOptimized" content="width" />\n<meta name="HandheldFriendly" content="true" />\n<meta name="viewport" content="width=device-width, initial-scale=1.0" />\n<link rel="shortcut icon" href="/themes/joinup/favicon.ico" type="image/vnd.microsoft.icon" />\n\n    <title>Page not found | Joinup</title>\n    <link rel="stylesheet" media="all" href="/sites/default/files/css/css_GJJiJB0zquwBiq8_lUbVOFc6IsiNz58Eyht63vwISws.css" />\n<link rel="stylesheet" media="all" href="/sites/default/files/css/css_vLBk9_u3kdWzJiCCm3Qxi3hokN7fX8n3x-Xi6smDxPo.css" />\n\n    \n<!--[if lte IE 8]>\n<script src="/sites/default/files/js/js_VtafjXmRvoUgAzqzYTA3Wrjkx9wcWhjP0G4ZnnqRamA.js"></script>\n<![endif]-->\n<script src="/sites/default/files/js/js_c8LbWbHV1txem3q8oAzuadnL-HiBShaQH_WRviNqT_g.js"></script>\n<script src="//europa.eu/webtools/load.js?globan=1110" defer></script>\n<script src="//ec.europa.eu/wel/cookie-consent/consent.js"></script>\n<script src="/sites/default/files/js/js_qc8JTpXPc__gYBUlV0PfahsivI5qhVonwIuVyzont9k.js"></script>\n\n        <meta name="msapplication-wide310x150logo" content="/themes/joinup/images/favicon/mstile-310x150.png" />\n<meta name="msapplication-square150x150logo" content="/themes/joinup/images/favicon/mstile-150x150.png" />\n<meta name="msapplication-square310x310logo" content="/themes/joinup/images/favicon/mstile-310x310.png" />\n<meta name="msapplication-square70x70logo" content="/themes/joinup/images/favicon/mstile-70x70.png" />\n<link rel="apple-touch-icon" sizes="114x114" href="/themes/joinup/images/favicon/apple-touch-icon-114x114.png" />\n<link rel="apple-touch-icon" sizes="120x120" href="/themes/joinup/images/favicon/apple-touch-icon-120x120.png" />\n<meta name="msapplication-TileImage" content="/themes/joinup/images/favicon/mstile-144x144.png" />\n<link rel="apple-touch-icon" sizes="180x180" href="/themes/joinup/images/favicon/apple-touch-icon-180x180.png" />\n<link rel="icon" type="image/png" sizes="32x32" href="/themes/joinup/images/favicon/favicon-32x32.png" />\n<link rel="apple-touch-icon" sizes="152x152" href="/themes/joinup/images/favicon/apple-touch-icon-152x152.png" />\n<link rel="apple-touch-icon" sizes="144x144" href="/themes/joinup/images/favicon/apple-touch-icon-144x144.png" />\n<link rel="icon" type="image/png" sizes="192x192" href="/themes/joinup/images/favicon/android-chrome-192x192.png" />\n<link rel="apple-touch-icon" sizes="60x60" href="/themes/joinup/images/favicon/apple-touch-icon-60x60.png" />\n<link rel="apple-touch-icon" sizes="57x57" href="/themes/joinup/images/favicon/apple-touch-icon-57x57.png" />\n<link rel="icon" type="image/png" sizes="16x16" href="/themes/joinup/images/favicon/favicon-16x16.png" />\n<link rel="icon" type="image/png" sizes="96x96" href="/themes/joinup/images/favicon/favicon-96x96.png" />  </head>\n  <body class="user-anonymous">\n    <a href="#main-content" class="visually-hidden focusable skip-link">\n      Skip to main content\n    </a>\n    \n      <div class="dialog-off-canvas-main-canvas" data-off-canvas-main-canvas>\n    <div class="mdl-layout__container">\n  <div class="mdl-layout mdl-js-layout" >\n\n          <header class="section section--header" role="banner">\n  <div class="mdl-layout__header-row">\n    <a href="/" class="header-logo mdl-layout-title" title="Home">\n      <img src="/themes/joinup/images/logo.svg" alt="Home">\n    </a>\n    <div class="mdl-layout-spacer"></div>\n\n    <nav role="navigation" aria-labelledby="block-joinup-theme-main-menu-menu" id="block-joinup-theme-main-menu">\n            \n  <h2 class="visually-hidden" id="block-joinup-theme-main-menu-menu">Main navigation</h2>\n  \n\n        \n          <nav class="header-menu mdl-navigation">\n                                                                    \n          <a href="/collections" title="Collections are the main collaborative space where the content items are organised around a common topic or domain and where the users can share their content and engage their community." class="header-menu__link mdl-navigation__link sidebar-header-menu__link" data-drupal-link-system-path="collections"><span class="header-menu__wrapper"><span class="header-menu__icon icon icon--collections"></span><span class="header-menu__text">Collections</span></span></a>\n                                                                    \n          <a href="/solutions" title="A Solution on Joinup is a framework, tool, or service either hosted directly on Joinup or federated from third-party repositories." class="header-menu__link mdl-navigation__link sidebar-header-menu__link" data-drupal-link-system-path="solutions"><span class="header-menu__wrapper"><span class="header-menu__icon icon icon--solutions"></span><span class="header-menu__text">Solutions</span></span></a>\n                                                                    \n          <a href="/keep-up-to-date" title="KEEP UP TO DATE items, like news, events, discussions and documents can be included in both Collections and Solutions." class="header-menu__link mdl-navigation__link sidebar-header-menu__link" data-drupal-link-system-path="keep-up-to-date"><span class="header-menu__wrapper"><span class="header-menu__icon icon icon--keep-up-to-date"></span><span class="header-menu__text">Keep up to date</span></span></a>\n              </nav>\n  \n\n\n  </nav>\n\n\n    <div class="mdl-layout-spacer"></div>\n\n       <div id="block-global-search" class="search-bar search-bar--header search-bar--white mdl-textfield mdl-js-textfield mdl-chipfield mdl-textfield--expandable mdl-textfield--floating-label mdl-textfield--align-right block block-joinup-search block-joinup-search-global-search">\n  \n    \n      \n<div class="inputs">\n    <label class="search-bar__label header__search-icon mdl-button mdl-js-button mdl-button--icon" for="search-bar__input">\n        <span class="search-bar__icon icon icon--search"></span>\n    </label>\n\n    <form action="/search" class="search-bar__input-container mdl-textfield__expandable-holder">\n                <input class="search-bar__input mdl-textfield__input" type="text" name="keys" id="search-bar__input">\n    </form>\n</div>\n\n  </div>\n\n  <a href="/search" class="advanced-search--header">Advanced search</a>\n<nav role="navigation" aria-labelledby="block-support-menu" id="block-support" class="block--small-nav">\n            \n  <h2 class="visually-hidden" id="block-support-menu">Support</h2>\n  \n\n        \n      <div class="support-menu">\n      <div id="support-menu__button"  _block_id="support" class="support-menu__button">\n        <button aria-pressed="false" type="button" class="support-button mdl-button mdl-js-button mdl-button--icon" title="User support">\n          <span class="icon icon--help"></span>\n        </button>\n      </div>\n      <ul class="support-menu__dropdown mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect" for="support-menu__button">\n                  <li class="mdl-menu__item">\n            <a href="/contact" class="support-menu__link" data-drupal-link-system-path="contact">Contact support</a>\n          </li>\n                  <li class="mdl-menu__item">\n            <a href="/collection/joinup/about" class="support-menu__link" data-drupal-link-system-path="rdf_entity/http_e_f_fdata_ceuropa_ceu_fw21_fdf34e3a2_b207b_b4910_ba804_b344931654e20/about">About Joinup</a>\n          </li>\n                  <li class="mdl-menu__item">\n            <a href="/collection/joinup/faq" title="Frequently asked questions" class="support-menu__link" data-drupal-link-system-path="node/701545">FAQ</a>\n          </li>\n                  <li class="mdl-menu__item">\n            <a href="/collection/joinup/how-articles" title="How-To articles" class="support-menu__link" data-drupal-link-system-path="node/701543">HOW-TOs</a>\n          </li>\n                  <li class="mdl-menu__item">\n            <a href="/collection/joinup/federation-solutions" class="support-menu__link" data-drupal-link-system-path="node/702492">Federation of solutions</a>\n          </li>\n                  <li class="mdl-menu__item">\n            <a href="/collection/joinup/news/joinup-use-eu-login" class="support-menu__link" data-drupal-link-system-path="node/702253">Joinup &amp; EU Login</a>\n          </li>\n                  <li class="mdl-menu__item">\n            <a href="https://ec.europa.eu/eusurvey/runner/Joinup_Satisfaction_Survey" class="support-menu__link">Satisfaction survey</a>\n          </li>\n              </ul>\n    </div>\n    \n\n  </nav>\n\n\n       <nav role="navigation" aria-labelledby="block-joinup-theme-account-menu-menu" id="block-joinup-theme-account-menu" class="block--small-nav">\n            \n  <h2 class="visually-hidden" id="block-joinup-theme-account-menu-menu">User account menu</h2>\n  \n\n        \n      <div class="login-menu">\n      <div id="login-menu__button" class="login-menu__button mdl-button mdl-js-button">\n                  <img src="/themes/joinup/images/user-profile-icon.png" />\n              </div>\n      <ul class="login-menu__dropdown mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect" for="login-menu__button">\n                            <li class="mdl-menu__item">\n            <a href="/caslogin?returnto=https%3A//joinup.ec.europa.eu/not-found%3Fquery%3DSELECT%2520%252A%2520WHERE%2520%257B%2520%253Fs%2520%253Fp%2520%253Fo%2520%257D%2520LIMIT%252010%26format%3Djson%26output%3Djson%26results%3Djson" class="login-menu__link" data-drupal-link-query="{&quot;returnto&quot;:&quot;https:\\/\\/joinup.ec.europa.eu\\/not-found?query=SELECT%20%2A%20WHERE%20%7B%20%3Fs%20%3Fp%20%3Fo%20%7D%20LIMIT%2010\\u0026format=json\\u0026output=json\\u0026results=json&quot;}" data-drupal-link-system-path="caslogin">Sign in with EU Login</a>\n          </li>\n                            <li class="mdl-menu__item">\n            <a href="/collection/joinup/news/joinup-use-eu-login" class="login-menu__link" data-drupal-link-system-path="node/702253">More about EU Login</a>\n          </li>\n              </ul>\n    </div>\n    \n\n\n  </nav>\n\n\n\n</div>\n</header>\n<div class="mdl-layout__drawer">\n  <nav role="navigation" aria-labelledby="block-joinup-theme-main-menu-mobile-menu" id="block-joinup-theme-main-menu-mobile">\n            \n  <h2 class="visually-hidden" id="block-joinup-theme-main-menu-mobile-menu">Main navigation mobile</h2>\n  \n\n        \n          <nav class="mdl-navigation">\n                                                                    \n          <a href="/collections" title="Collections are the main collaborative space where the content items are organised around a common topic or domain and where the users can share their content and engage their community." class="mdl-navigation__link" data-drupal-link-system-path="collections"><span class="header-menu__wrapper"><span class="header-menu__icon icon icon--collections"></span><span class="header-menu__text">Collections</span></span></a>\n                                                                    \n          <a href="/solutions" title="A Solution on Joinup is a framework, tool, or service either hosted directly on Joinup or federated from third-party repositories." class="mdl-navigation__link" data-drupal-link-system-path="solutions"><span class="header-menu__wrapper"><span class="header-menu__icon icon icon--solutions"></span><span class="header-menu__text">Solutions</span></span></a>\n                                                                    \n          <a href="/keep-up-to-date" title="KEEP UP TO DATE items, like news, events, discussions and documents can be included in both Collections and Solutions." class="mdl-navigation__link" data-drupal-link-system-path="keep-up-to-date"><span class="header-menu__wrapper"><span class="header-menu__icon icon icon--keep-up-to-date"></span><span class="header-menu__text">Keep up to date</span></span></a>\n              </nav>\n  \n\n\n  </nav>\n\n</div>\n    \n          <div class="section section--featured">\n                     \n\n              </div>\n    \n        <main class="section section--content" role="main">\n      <div class="main-container">\n        <a id="main-content" tabindex="-1"></a>        <div class="row">\n          <div class="mdl-grid ">\n                          <aside class="section section--sidebar-left mdl-cell mdl-cell--2-col mdl-cell--8-col-tablet mdl-cell--8-col-phone" role="complementary">\n                                     \n\n                              </aside>\n            \n            <div class="section section--main mdl-cell content-container--default mdl-cell--8-col">\n                              <div class="section section--content-top ">\n                     <div data-drupal-messages-fallback class="hidden"></div>\n\n\n                </div>\n              \n                              <div class="section section--filters facet-region facet-region--inline-facets filters filters--horizontal">\n                     \n\n                </div>\n              \n              <div class="section section--content-middle ">\n                                   \n      \n  <div class="page__title-wrapper">\n              <h1 class="page__title">Page not found</h1>\n                </div>\n\n\n  \n<div class="page__content">\n      <div class="wrapper">\n    <p>The page you are looking for does not exist; it may have been moved, or removed altogether. You might want to: </p>\n    <ul>\n        <li>Try the <a href="/search">search function</a>; or</li>\n        <li>return to the <a href="/">home page</a></li>\n    </ul>\n</div>\n\n  </div>\n\n\n              </div>\n\n                          </div>          </div>\n        </div>\n      </div>    </main>\n\n    <footer class="section section--footer">\n  <div class="footer__first">\n    <div class="main-container">\n      <div class="row">\n        <div class="mdl-grid mdl-grid--center">\n          <div class="mdl-cell mdl-cell--8-col">\n            <div class="row">\n              <div class="mdl-grid">\n                <div class="mdl-cell mdl-cell--4-col">\n                  <h3 class="footer__site-name">\n                    <a href="/" title="Home">\n                      <img src="/themes/joinup/images/logo.svg" alt="Home">\n                    </a>\n                  </h3>\n                  <p class="footer__version"><a href="https://github.com/ec-europa/joinup-dev/releases/tag/v1.67.0">v1.67.0</a></p>\n                </div>\n                <div class="mdl-cell mdl-cell--4-col">\n\n                  <div class="social-media">\n\n                    <h3 class="social-media__label">Follow us:</h3>\n\n\n                    <ul class="social-media__menu">\n                      <li class="social-media__item">\n                        <a href="https://www.linkedin.com/groups/2600644/" class="social-media__link" target="_blank">\n                          <span class="icon icon--linkedin"></span>\n                          <span class="text">LinkedIn</span>\n                        </a>\n                      </li>\n                      <li class="social-media__item">\n                        <a href="http://twitter.com/Joinup_eu" class="social-media__link" target="_blank">\n                          <span class="icon icon--twitter"></span>\n                          <span class="text">Twitter</span>\n                        </a>\n                      </li>\n                      <li class="social-media__item">\n                        <a href="http://ec.europa.eu/newsroom/joinup/newsletter-specific-archive-issue.cfm?newsletter_service_id=877&lang=default" class="social-media__link" target="_blank">\n                          <span class="icon icon--footer-newsletter"></span>\n                          <span class="text">Joinup Newsletter</span>\n                        </a>\n                      </li>\n                    </ul>\n\n                  </div>\n                </div>\n                <div class="mdl-cell mdl-cell--4-col">\n                     <nav role="navigation" aria-labelledby="block-footer-menu-menu" id="block-footer-menu">\n            \n  <h2 class="visually-hidden" id="block-footer-menu-menu">Footer menu</h2>\n  \n\n        \n              <ul _block_id="footer_menu" class="menu vertical-menu">\n                    <li class="menu-item vertical-menu__item">\n        <a href="/adms-validator" title="Validate an RDF file for model errors." class="vertical-menu__link" data-drupal-link-system-path="adms-validator">ADMS-AP Validator</a>\n              </li>\n                <li class="menu-item vertical-menu__item">\n        <a href="/contact" class="vertical-menu__link" data-drupal-link-system-path="contact">Contact Joinup Support</a>\n              </li>\n        </ul>\n  \n\n\n  </nav>\n\n\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="footer__second">\n    <div class="main-container">\n      <div class="row">\n        <div class="mdl-grid mdl-grid--center">\n          <div class="mdl-cell mdl-cell--8-col">\n            <ul class="ec-menu">\n              <li class="ec-menu__item">\n                <a href="http://ec.europa.eu/info/about-commissions-new-web-presence_en" class="ec-menu__link" target="_blank">About the Commission\'s new web presence</a>\n              </li>\n              <li class="ec-menu__item">\n                <a href="http://ec.europa.eu/info/resources-partners_en" class="ec-menu__link" target="_blank">Resources for partners</a>\n              </li>\n              <li class="ec-menu__item">\n                <a href="http://ec.europa.eu/info/cookies_en" class="ec-menu__link" target="_blank">Cookies</a>\n              </li>\n              <li class="ec-menu__item">\n                <a href="/joinup/legal-notice" class="ec-menu__link" target="_blank">Legal notice</a>\n              </li>\n              <li class="ec-menu__item">\n                <a href="http://ec.europa.eu/info/contact_en" class="ec-menu__link" target="_blank">Contact</a>\n              </li>\n              <li class="ec-menu__item">\n                <a href="http://ec.europa.eu/info/europa-analytics_en" class="ec-menu__link" target="_blank">Europa Analytics</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</footer>\n\n  </div></div>\n  </div>\n\n    \n    <script type="application/json" data-drupal-selector="drupal-settings-json">{"path":{"baseUrl":"\\/","scriptPath":null,"pathPrefix":"","currentPath":"","currentPathIsAdmin":false,"isFront":false,"currentLanguage":"en","currentQuery":{"format":"json","output":"json","query":"SELECT * WHERE { ?s ?p ?o } LIMIT 10","results":"json"}},"pluralDelimiter":"\\u0003","suppressDeprecationErrors":true,"matomo":{"disableCookies":null,"trackMailto":false},"user":{"uid":0,"permissionsHash":"468ecf069ae244a5b2faee4a651fdb54e98464af452767f49cd19ac97e0f7867"}}</script>\n<script src="/sites/default/files/js/js_9eWbbsKVajaCGh0FUSk4OTr8Bs12uEpE4YaLg3dS1RU.js"></script>\n\n  </body>\n</html>\n'

---


---
SPARQL endpoint failed: http://publications.europa.eu/webapi/rdf/sparql

HTTP Error 503: Service Temporarily Unavailable

---


---
SPARQL endpoint failed: http://digital-agenda-data.eu/data/sparql

byte indices must be integers or slices, not str

---


---
SPARQL endpoint failed: http://pt.dbpedia.org/sparql

<urlopen error [Errno 110] Connection timed out>

---


---
SPARQL endpoint failed: http://cr.eionet.europa.eu/sparql

byte indices must be integers or slices, not str

---


---
SPARQL endpoint failed: http://www.linklion.org:8890/sparql

EndPointInternalError: endpoint returned code 500 and response. 

Response:
b'Virtuoso 42000 Error The estimated execution time 420 (sec) exceeds the limit of 400 (sec).\n\nSPARQL query:\nSELECT * WHERE { ?s ?p ?o } LIMIT 10'