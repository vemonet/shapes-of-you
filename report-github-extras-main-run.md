## Fails loading files to `rdflib`

**Indexing topics**: `extras`

*Please check if your RDF file is properly formatted. We recommend to **use https://www.easyrdf.org/converter to get better insights on the error**, and store the shapes in `.ttl` files*


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
File: https://raw.githubusercontent.com/neo4j-labs/neosemantics/4.2/docs%2F_unused%2Frdf%2FRDFDataset%2FRDFDatasetDelete.trig

In repository: https://github.com/neo4j-labs/neosemantics
> at line 17 of <>:
Bad syntax (expected '.' or '}' or ']' at end of statement) at ^ in:
"...b'anagement ;\n              ex:knows exDoc:John . }\n\nexDoc:G2 '^b'{\n    exDoc:Monica\n              ex:city "New York" ;\n      '..."

---
File: https://raw.githubusercontent.com/neo4j-labs/neosemantics/4.2/docs%2F_unused%2Frdf%2FRDFDataset%2FRDFDataset.trig

In repository: https://github.com/neo4j-labs/neosemantics
> at line 20 of <>:
Bad syntax (expected '.' or '}' or ']' at end of statement) at ^ in:
"...b'ogramming ;\n              ex:knows exDoc:John . }\n\nexDoc:G2 '^b'{\n    exDoc:Monica\n              ex:city "New York" ;\n      '..."

---
File: https://raw.githubusercontent.com/neo4j-labs/neosemantics/4.2/src%2Ftest%2Fresources%2FRDFDatasets%2FRDFDatasetBNodesPostDeletion.trig

In repository: https://github.com/neo4j-labs/neosemantics
> at line 14 of <>:
Bad syntax (EOF found in middle of path syntax) at ^ in:
"b'@prefix ex: <http://www.example.org/vocabulary#> .\n@prefix exDoc: <http://www.example.org/exampleDocument#> .\n\nexDoc:G1 {\n    exDoc:Resource\n      \tex:professor _:entity ;\n        ex:students _:students ;\n        ex:generatedBy _:activity1 .\n\n    _:entity\n       ex:fullName "Alice Carol" ;\n       ex:homePage <http://example.net/alice-carol> ;\n       ex:hasAddress _:address .\n '^b''..."

---
File: https://raw.githubusercontent.com/neo4j-labs/neosemantics/4.2/src%2Ftest%2Fresources%2FRDFDatasets%2FRDFDatasetDelete.trig

In repository: https://github.com/neo4j-labs/neosemantics
> at line 17 of <>:
Bad syntax (expected '.' or '}' or ']' at end of statement) at ^ in:
"...b'anagement ;\n              ex:knows exDoc:John . }\n\nexDoc:G2 '^b'{\n    exDoc:Monica\n              ex:city "New York" ;\n      '..."

---
File: https://raw.githubusercontent.com/neo4j-labs/neosemantics/4.2/src%2Ftest%2Fresources%2FRDFDatasets%2FRDFDataset.trig

In repository: https://github.com/neo4j-labs/neosemantics
> at line 20 of <>:
Bad syntax (expected '.' or '}' or ']' at end of statement) at ^ in:
"...b'ogramming ;\n              ex:knows exDoc:John . }\n\nexDoc:G2 '^b'{\n    exDoc:Monica\n              ex:city "New York" ;\n      '..."

---
File: https://raw.githubusercontent.com/neo4j-labs/neosemantics/4.2/src%2Ftest%2Fresources%2FRDFDatasets%2FRDFDatasetBNodes.trig

In repository: https://github.com/neo4j-labs/neosemantics
> at line 17 of <>:
Bad syntax (expected '.' or '}' or ']' at end of statement) at ^ in:
"...b'lice-carol> ;\n       ex:hasAddress _:address .\n }\n\nexDoc:G2 '^b'{\n    exDoc:Monica\n              ex:city "New York" ;\n      '..."

---
File: https://raw.githubusercontent.com/neo4j-labs/neosemantics/4.2/src%2Ftest%2Fresources%2FRDFDatasets%2FRDFDatasetBNodesDelete.trig

In repository: https://github.com/neo4j-labs/neosemantics
> at line 15 of <>:
Bad syntax (expected '.' or '}' or ']' at end of statement) at ^ in:
"...b'lice-carol> ;\n       ex:hasAddress _:address .\n }\n\nexDoc:G2 '^b'{\n    exDoc:Monica\n              ex:city "New York" ;\n      '..."

---
File: https://raw.githubusercontent.com/neo4j-labs/neosemantics/4.2/docs%2F_unused%2Frdf%2Fvw.owl

In repository: https://github.com/neo4j-labs/neosemantics
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/docs/_unused/rdf/vw.owl:1:0: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/neo4j-labs/neosemantics/4.2/docs%2F_unused%2Frdf%2FcustomDataTypes.ttl

In repository: https://github.com/neo4j-labs/neosemantics
> at line 4 of <>:
Bad syntax (Prefix "rdf:" not bound) at ^ in:
"b'@prefix ex: <http://example.com/> .\n\nex:Mercedes \n\t'^b'rdf:type ex:Car ;\n\tex:price "10000"^^ex:EUR ;\n\tex:power "300'..."

---
File: https://raw.githubusercontent.com/neo4j-labs/neosemantics/4.2/src%2Ftest%2Fresources%2FcustomDataTypes.ttl

In repository: https://github.com/neo4j-labs/neosemantics
> at line 5 of <>:
Bad syntax (Prefix "rdf:" not bound) at ^ in:
"...b'x xsd: <http://www.w3.org/2001/XMLSchema#> .\n\nex:Mercedes \n\t'^b'rdf:type ex:Car ;\n\tex:price "10000"^^ex:EUR ;\n\tex:price "110'..."

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
File: https://raw.githubusercontent.com/neo4j-labs/neosemantics/4.2/src%2Ftest%2Fresources%2Fshacl%2Fperson0-shacl.ttl

In repository: https://github.com/neo4j-labs/neosemantics
> at line 9 of <>:
Bad syntax (bad escape) at ^ in:
"...b'rson ;\n\tsh:property [\n\t\tsh:path neo4j:name ;\n\t\tsh:pattern "^'^b'\\w[\\s\\w\\.]*$" ;\n\t\tsh:maxCount 1 ;\n        sh:datatype xsd:st'..."

---
File: https://raw.githubusercontent.com/neo4j-labs/neosemantics/4.2/src%2Ftest%2Fresources%2Fshacl%2Fperson1-shacl.ttl

In repository: https://github.com/neo4j-labs/neosemantics
> at line 11 of <>:
Bad syntax (Prefix "xsd:" not bound) at ^ in:
"...b'trains the values of ex:ssn\n\t\tsh:maxCount 1 ;\n\t\tsh:datatype '^b'xsd:string ;\n\t\tsh:pattern "^\\\\d{3}-\\\\d{2}-\\\\d{4}$" ;\n\t] ;\n\ts'..."

---
File: https://raw.githubusercontent.com/neo4j-labs/neosemantics/4.2/src%2Ftest%2Fresources%2Fshacl%2Fperson2-shacl.ttl

In repository: https://github.com/neo4j-labs/neosemantics
> at line 11 of <>:
Bad syntax (Prefix "xsd:" not bound) at ^ in:
"...b'\tsh:maxCount 1 ;                # cardinality\n\t\tsh:datatype '^b'xsd:string ;       # data type\n\t\tsh:pattern "^\\w[\\s\\w\\.]*$" '..."

---
File: https://raw.githubusercontent.com/neo4j-labs/neosemantics/4.2/src%2Ftest%2Fresources%2Fshacl%2Fmusictest%2Fdata.ttl

In repository: https://github.com/neo4j-labs/neosemantics
> at line 21 of <>:
Bad syntax (Prefix "xsd:" not bound) at ^ in:
"...b'um ;\n    :name "Please Please Me" ;\n    :date "1963-03-22"^^'^b'xsd:date , "1963-02-23"^^xsd:date ;\n    :artist :The_Beatles'..."

---
File: https://raw.githubusercontent.com/neo4j-labs/neosemantics/4.2/src%2Ftest%2Fresources%2Fshacl%2Fmusictest%2Fmusic.shacl

In repository: https://github.com/neo4j-labs/neosemantics
> at line 8 of <>:
Bad syntax (Prefix "xsd:" not bound) at ^ in:
"...b'\n     sh:path :name ;\n     sh:minCount 1 ;\n     sh:datatype '^b'xsd:string\n   ] .\n\n:ArtistShape a sh:Shape ;\n   sh:targetCla'..."

---
File: https://raw.githubusercontent.com/INCF/neuroshapes/master/taxonomies%2Fprotocol-types.ttl

In repository: https://github.com/INCF/neuroshapes
> at line 25 of <>:
Bad syntax (Prefix "nsg:" not bound) at ^ in:
"...b'types: .\n\nprotocol-types:stimulusexperiment a skos:Concept, '^b'nsg:ProtocolType;\n    skos:broader protocol-types:activity;\n'..."

---
File: https://raw.githubusercontent.com/INCF/neuroshapes/master/taxonomies%2Fstimulus-types.ttl

In repository: https://github.com/INCF/neuroshapes
> at line 18 of <>:
Bad syntax (expected '.' or '}' or ']' at end of statement) at ^ in:
"...b'ator "Anna-Kristin Kaufmann <anna-kristin.kaufmann@epfl.ch>"'^b'";\n    dc:contributor "Sy Mohameth Francois <mohameth.sy@epf'..."

---
File: https://raw.githubusercontent.com/INCF/neuroshapes/master/taxonomies%2Fobjects-of-study.ttl

In repository: https://github.com/INCF/neuroshapes
> at line 40 of <>:
Bad syntax (objectList expected) at ^ in:
"...b' skos:inScheme objectsofstudy:;\n\n\nobjectsofstudy:brainregion'^b' a skos:Concept;\n    rdfs:label "Brain Region"@en;\n    skos:'..."

---
File: https://raw.githubusercontent.com/BlueBrain/nexus/master/delta%2Fsdk%2Fsrc%2Ftest%2Fresources%2Fresource-compacted.jsonld

In repository: https://github.com/BlueBrain/nexus
> HTTP Error 404: Not Found

---
File: https://raw.githubusercontent.com/BlueBrain/nexus/master/delta%2Fapp%2Fsrc%2Ftest%2Fresources%2Fpermissions%2Ffetch_compacted.jsonld

In repository: https://github.com/BlueBrain/nexus
> Expecting property name enclosed in double quotes: line 8 column 21 (char 246)

---
File: https://raw.githubusercontent.com/BlueBrain/nexus/master/delta%2Fapp%2Fsrc%2Ftest%2Fresources%2Fpermissions%2Freject_incorrect_rev.jsonld

In repository: https://github.com/BlueBrain/nexus
> Expecting property name enclosed in double quotes: line 4 column 16 (char 115)

---
File: https://raw.githubusercontent.com/BlueBrain/nexus/master/delta%2Frdf%2Fsrc%2Ftest%2Fresources%2Fntriples.nt

In repository: https://github.com/BlueBrain/nexus
> Invalid line: '{{{rootNode}}} <http://example.com/address> {{bnode}} .'

---
File: https://raw.githubusercontent.com/AKSW/RDFUnit/master/rdfunit-io%2Fsrc%2Ftest%2Fresources%2Forg%2Faksw%2Frdfunit%2Fio%2Fonetriple.trig

In repository: https://github.com/AKSW/RDFUnit
> at line 12 of <>:
Bad syntax (EOF found in middle of path syntax) at ^ in:
"b'@prefix : <http://rdfunit.aksw.org> .\n@prefix owl: <http://www.w3.org/2002/07/owl#> .\n@prefix dbp: <http://dbpedia.org/resource/> .\n\n{\n: owl:sameAs dbp:Cool.\n\n}\n\n<http://rdfunit.aksw.org> {\n: owl:sameAs dbp:Super .\n'^b''..."

---
File: https://raw.githubusercontent.com/AKSW/RDFUnit/master/rdfunit-core%2Fsrc%2Ftest%2Fresources%2Forg%2Faksw%2Frdfunit%2Fvalidate%2Fdata%2Fdsp%2Fstandalone_class_Correct.ttl

In repository: https://github.com/AKSW/RDFUnit
> at line 10 of <>:
Bad syntax (expected '.' or '}' or ']' at end of statement) at ^ in:
"...b'owl#> .\n\n@prefix dsp:      <http://dublincore.org/dc-dsp#>\n\n'^b'exdsp:correct1 a exdsp:StandaloneClass.\n\n'"

---
File: https://raw.githubusercontent.com/AKSW/RDFUnit/master/rdfunit-core%2Fsrc%2Ftest%2Fresources%2Forg%2Faksw%2Frdfunit%2Fvalidate%2Fdata%2Fdsp%2Fproperty_cardinality_Correct.ttl

In repository: https://github.com/AKSW/RDFUnit
> at line 10 of <>:
Bad syntax (expected '.' or '}' or ']' at end of statement) at ^ in:
"...b'owl#> .\n\n@prefix dsp:      <http://dublincore.org/dc-dsp#>\n\n'^b'exdsp:correcta1 a exdsp:PropCard_1_1 ;\n\texdsp:prop_1_1 exdsp'..."

---
File: https://raw.githubusercontent.com/AKSW/RDFUnit/master/rdfunit-core%2Fsrc%2Ftest%2Fresources%2Forg%2Faksw%2Frdfunit%2Fvalidate%2Fdata%2Fdsp%2Fstandalone_class_Wrong.ttl

In repository: https://github.com/AKSW/RDFUnit
> at line 10 of <>:
Bad syntax (expected '.' or '}' or ']' at end of statement) at ^ in:
"...b'owl#> .\n\n@prefix dsp:      <http://dublincore.org/dc-dsp#>\n\n'^b'exdsp:correct1 a exdsp:StandaloneClass ;\n\texdsp:anyProperty '..."

---
File: https://raw.githubusercontent.com/AKSW/RDFUnit/master/rdfunit-core%2Fsrc%2Ftest%2Fresources%2Forg%2Faksw%2Frdfunit%2Fvalidate%2Fdata%2Fdsp%2Fproperty_cardinality_Wrong.ttl

In repository: https://github.com/AKSW/RDFUnit
> at line 12 of <>:
Bad syntax (expected '.' or '}' or ']' at end of statement) at ^ in:
"...b'l#> .\n\n@prefix dsp:      <http://dublincore.org/dc-dsp#>\n\n\n\n'^b'exdsp:correcta1 a exdsp:PropCard_1_1 . # error\n\nexdsp:correc'..."

---
File: https://raw.githubusercontent.com/AKSW/RDFUnit/master/rdfunit-core%2Fsrc%2Ftest%2Fresources%2Forg%2Faksw%2Frdfunit%2Fvalidate%2Fdata%2Fowl%2FOWLQCARDT_Wrong_Min.ttl

In repository: https://github.com/AKSW/RDFUnit
> at line 21 of <>:
Bad syntax (EOF found when expected verb in property list) at ^ in:
"...b'in2 ex:abc5b ;        # 1 error\n\t.\nex:abc5b a ex:QCardMin2 ;'^b'\n\n\n\n'"

---
File: https://raw.githubusercontent.com/AKSW/RDFUnit/master/rdfunit-model%2Fsrc%2Ftest%2Fresources%2Forg%2Faksw%2Frdfunit%2Fshacl%2FsampleShapeTarget.ttl

In repository: https://github.com/AKSW/RDFUnit
> at line 32 of <>:
Bad syntax (EOF found when expected verb in property list) at ^ in:
"...b'ex:MyNestedShape2 ;\n\t] ;\n\t.\n\nex:MyNestedShape2\n\ta sh:Shape ;'^b'\n'"

---
File: https://raw.githubusercontent.com/fekaputra/shacl-plugin/master/src%2Fmain%2Fresources%2Fexample3-data.owl

In repository: https://github.com/fekaputra/shacl-plugin
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/main/resources/example3-data.owl:1:0: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/fekaputra/shacl-plugin/master/src%2Fmain%2Fresources%2Fexample2.ttl

In repository: https://github.com/fekaputra/shacl-plugin
> at line 18 of <>:
Bad syntax (EOF found when expected verb in property list) at ^ in:
"...b't 1 ;\n    sh:minCount 1 ;\n    sh:datatype xsd:string ;\n  ] ;'^b'\n\n'"

---
File: https://raw.githubusercontent.com/jwchoi/Shape4RDB2RDF/master/output%2Frdf%2Fiswc-dump.rdf

In repository: https://github.com/jwchoi/Shape4RDB2RDF
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/output/rdf/iswc-dump.rdf:1:0: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/jwchoi/Shape4RDB2RDF/master/input%2Fiswc-mapping_test.rdf

In repository: https://github.com/jwchoi/Shape4RDB2RDF
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/input/iswc-mapping_test.rdf:1:0: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/cjc121703/ShaclValidation/master/src%2Ftest%2Fresources%2Fperson.ttl

In repository: https://github.com/cjc121703/ShaclValidation
> at line 5 of <>:
Bad syntax (expected '.' or '}' or ']' at end of statement) at ^ in:
"...b'-schema#> .\r\n@prefix owl: <http://www.w3.org/2002/07/owl#>\r\n'^b'@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .\r\n\r\nex:Ali'..."

---
File: https://raw.githubusercontent.com/geneontology/go-shapes/master/ontology%2Fgo-lego-local.owl

In repository: https://github.com/geneontology/go-shapes
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/ontology/go-lego-local.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/biotea/validation-shapes-bioschemas/master/journal.jsonld

In repository: https://github.com/biotea/validation-shapes-bioschemas
> Expecting value: line 2 column 1 (char 1)

---
File: https://raw.githubusercontent.com/rgmprabodha/Internship_Testing_Projects/master/shexjava%2Fsrc%2Fmain%2Fresources%2FtemperatureReport.ttl

In repository: https://github.com/rgmprabodha/Internship_Testing_Projects
> at line 1 of <>:
Bad syntax (expected directive or statement) at ^ in:
"b''^b'ResultShapeMap [associations=[ShapeAssociation [nodeSelector'..."

---
File: https://raw.githubusercontent.com/rgmprabodha/Internship_Testing_Projects/master/shexjava%2Ftarget%2Fclasses%2FtemperatureReport.ttl

In repository: https://github.com/rgmprabodha/Internship_Testing_Projects
> at line 1 of <>:
Bad syntax (expected directive or statement) at ^ in:
"b''^b'ResultShapeMap [associations=[ShapeAssociation [nodeSelector'..."

---
File: https://raw.githubusercontent.com/shexSpec/examples/master/ShEx_vs_OWL%2Fuser.owl

In repository: https://github.com/shexSpec/examples
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/ShEx_vs_OWL/user.owl:1:0: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/hsolbrig/PyShEx/master/tests%2Ftest_utils%2Fobject%2Fobservation_example_haplotype1.ttl

In repository: https://github.com/hsolbrig/PyShEx
> at line 1 of <>:
Bad syntax (Prefix "rdf:" not bound) at ^ in:
"b'<http://hl7.org/fhir/MolecularSequence/example-pgx-1> '^b'rdf:type fhir:MolecularSequence .\n<http://hl7.org/fhir/Molec'..."

---
File: https://raw.githubusercontent.com/labra/ShExcala/master/src%2Ftest%2Fresources%2Fschemas%2FsimpleRDF.ttl

In repository: https://github.com/labra/ShExcala
> at line 3 of <>:
Bad syntax (expected '.' or '}' or ']' at end of statement) at ^ in:
"b'@prefix : <http://example.org/>\n\n'^b':x :p 1 .'"

---
File: https://raw.githubusercontent.com/labra/ShExcala/master/src%2Ftest%2Fresources%2Ftest-suite%2Falgebra%2Fmanifest_compact_syntax.ttl

In repository: https://github.com/labra/ShExcala
> at line 48 of <>:
Bad syntax (expected item in list or ')') at ^ in:
"...b'a_or_bq-_A\n        :aq_or_b-0\n        :aq_or_b-_B\n        :('^b'a_or_b)c-ab\n        :(a_or_b)cq-ab\n        :(a_or_b)cq-abc\n '..."

---
File: https://raw.githubusercontent.com/labra/ShExcala/master/src%2Ftest%2Fresources%2Ftest-suite%2Falgebra%2Fmanifest.ttl

In repository: https://github.com/labra/ShExcala
> at line 44 of <>:
Bad syntax (expected item in list or ')') at ^ in:
"...b'T-_A\n        :a_OPT_OR_b-0\n        :a_OPT_OR_b-_B\n        :('^b'a_OR_b)c-ab\n        :(a_OR_b)c_OPT-ab\n        :(a_OR_b)c_OPT'..."

---
File: https://raw.githubusercontent.com/labra/ShExcala/master/src%2Ftest%2Fresources%2Ftest-suite%2Falgebra%2Fmanifest_turtle_syntax.ttl

In repository: https://github.com/labra/ShExcala
> at line 49 of <>:
Bad syntax (expected item in list or ')') at ^ in:
"...b'a_or_bq-_A\n        :aq_or_b-0\n        :aq_or_b-_B\n        :('^b'a_or_b)c-ab\n        :(a_or_b)cq-ab\n        :(a_or_b)cq-abc\n '..."

---
File: https://raw.githubusercontent.com/labra/ShExcala/master/src%2Ftest%2Fresources%2FshexTest%2Fvalidation%2Fsimple-group.shacl

In repository: https://github.com/labra/ShExcala
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix :'^b'      &lt;http://a.example/&gt; .\n@prefix sh:    &lt;http://'..."

---
File: https://raw.githubusercontent.com/labra/ShExcala/master/src%2Ftest%2Fresources%2FshexTest%2Fvalidation%2Fiovka.shacl

In repository: https://github.com/labra/ShExcala
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix :'^b'      &lt;http://a.example/&gt; .\n@prefix sh:    &lt;http://'..."

---
File: https://raw.githubusercontent.com/labra/ShExcala/master/src%2Ftest%2Fresources%2FshexTest%2Fvalidation%2Frepeated-group.shacl

In repository: https://github.com/labra/ShExcala
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix :'^b'      &lt;http://a.example/&gt; .\n@prefix sh:    &lt;http://'..."

---
File: https://raw.githubusercontent.com/labra/ShExcala/master/src%2Ftest%2Fresources%2FshexTest%2Fvalidation%2FnPlus1.shacl

In repository: https://github.com/labra/ShExcala
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix :'^b'      &lt;http://a.example/&gt; .\n@prefix sh:    &lt;http://'..."

---
File: https://raw.githubusercontent.com/labra/ShExcala/master/src%2Ftest%2Fresources%2FshexTest%2Fvalidation%2Fskipped.shacl

In repository: https://github.com/labra/ShExcala
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix :'^b'      &lt;http://a.example/&gt; .\n@prefix sh:    &lt;http://'..."

---
File: https://raw.githubusercontent.com/labra/ShExcala/master/src%2Ftest%2Fresources%2FshexTest%2Fvalidation%2Fnested-repeated-group.shacl

In repository: https://github.com/labra/ShExcala
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix :'^b'      &lt;http://a.example/&gt; .\n@prefix sh:    &lt;http://'..."

---
File: https://raw.githubusercontent.com/labra/ShExcala/master/src%2Ftest%2Fresources%2FshexTest%2Fschemas%2F1literalLength.shacl

In repository: https://github.com/labra/ShExcala
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix sh:'^b'    &lt;http://www.w3.org/ns/shacl/core#&gt; .\n@prefix xsd: '..."

---
File: https://raw.githubusercontent.com/labra/ShExcala/master/src%2Ftest%2Fresources%2FshexTest%2Fschemas%2Fopen1dotclose.shacl

In repository: https://github.com/labra/ShExcala
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix sh:'^b'    &lt;http://www.w3.org/ns/shacl/core#&gt; .\n@prefix xsd: '..."

---
File: https://raw.githubusercontent.com/labra/ShExcala/master/src%2Ftest%2Fresources%2FshexTest%2Fschemas%2F1val1STRING_LITERAL1.shacl

In repository: https://github.com/labra/ShExcala
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix sh:'^b'    &lt;http://www.w3.org/ns/shacl/core#&gt; .\n@prefix xsd: '..."

---
File: https://raw.githubusercontent.com/labra/ShExcala/master/src%2Ftest%2Fresources%2FshexTest%2Fschemas%2FstartCode1.shacl

In repository: https://github.com/labra/ShExcala
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix sh:'^b'    &lt;http://www.w3.org/ns/shacl/core#&gt; .\n@prefix xsd: '..."

---
File: https://raw.githubusercontent.com/labra/ShExcala/master/src%2Ftest%2Fresources%2FshexTest%2Fschemas%2F1val1LANGTAG.shacl

In repository: https://github.com/labra/ShExcala
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix sh:'^b'    &lt;http://www.w3.org/ns/shacl/core#&gt; .\n@prefix xsd: '..."

---
File: https://raw.githubusercontent.com/labra/ShExcala/master/src%2Ftest%2Fresources%2FshexTest%2Fschemas%2Fopen1dotcloseCode1.shacl

In repository: https://github.com/labra/ShExcala
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix sh:'^b'    &lt;http://www.w3.org/ns/shacl/core#&gt; .\n@prefix xsd: '..."

---
File: https://raw.githubusercontent.com/labra/ShExcala/master/src%2Ftest%2Fresources%2FshexTest%2Fschemas%2Fopen3groupdotclosecard23Annot3Code2.shacl

In repository: https://github.com/labra/ShExcala
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix sh:'^b'    &lt;http://www.w3.org/ns/shacl/core#&gt; .\n@prefix xsd: '..."

---
File: https://raw.githubusercontent.com/labra/ShExcala/master/src%2Ftest%2Fresources%2FshexTest%2Fschemas%2F1negatedinversedot.shacl

In repository: https://github.com/labra/ShExcala
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix sh:'^b'    &lt;http://www.w3.org/ns/shacl/core#&gt; .\n@prefix xsd: '..."

---
File: https://raw.githubusercontent.com/labra/ShExcala/master/src%2Ftest%2Fresources%2FshexTest%2Fschemas%2F1val1STRING_LITERAL2_with_LANGTAG.shacl

In repository: https://github.com/labra/ShExcala
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix sh:'^b'    &lt;http://www.w3.org/ns/shacl/core#&gt; .\n@prefix xsd: '..."

---
File: https://raw.githubusercontent.com/labra/ShExcala/master/src%2Ftest%2Fresources%2FshexTest%2Fschemas%2F1iriRefLength1.shacl

In repository: https://github.com/labra/ShExcala
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix sh:'^b'    &lt;http://www.w3.org/ns/shacl/core#&gt; .\n@prefix xsd: '..."

---
File: https://raw.githubusercontent.com/labra/ShExcala/master/src%2Ftest%2Fresources%2FshexTest%2Fschemas%2F1dotOr1dot.shacl

In repository: https://github.com/labra/ShExcala
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix sh:'^b'    &lt;http://www.w3.org/ns/shacl/core#&gt; .\n@prefix xsd: '..."

---
File: https://raw.githubusercontent.com/labra/ShExcala/master/src%2Ftest%2Fresources%2FshexTest%2Fschemas%2F1iriMaxlength.shacl

In repository: https://github.com/labra/ShExcala
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix sh:'^b'    &lt;http://www.w3.org/ns/shacl/core#&gt; .\n@prefix xsd: '..."

---
File: https://raw.githubusercontent.com/labra/ShExcala/master/src%2Ftest%2Fresources%2FshexTest%2Fschemas%2F1nonliteralLength.shacl

In repository: https://github.com/labra/ShExcala
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix sh:'^b'    &lt;http://www.w3.org/ns/shacl/core#&gt; .\n@prefix xsd: '..."

---
File: https://raw.githubusercontent.com/labra/ShExcala/master/src%2Ftest%2Fresources%2FshexTest%2Fschemas%2F1literalMaxlength.shacl

In repository: https://github.com/labra/ShExcala
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix sh:'^b'    &lt;http://www.w3.org/ns/shacl/core#&gt; .\n@prefix xsd: '..."

---
File: https://raw.githubusercontent.com/labra/ShExcala/master/src%2Ftest%2Fresources%2FshexTest%2Fschemas%2F1refbnode1.shacl

In repository: https://github.com/labra/ShExcala
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix sh:'^b'    &lt;http://www.w3.org/ns/shacl/core#&gt; .\n@prefix xsd: '..."

---
File: https://raw.githubusercontent.com/labra/ShExcala/master/src%2Ftest%2Fresources%2FshexTest%2Fschemas%2F3groupdot3Extra.shacl

In repository: https://github.com/labra/ShExcala
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix sh:'^b'    &lt;http://www.w3.org/ns/shacl/core#&gt; .\n@prefix xsd: '..."

---
File: https://raw.githubusercontent.com/labra/ShExcala/master/src%2Ftest%2Fresources%2FshexTest%2Fschemas%2F1val1DOUBLE.shacl

In repository: https://github.com/labra/ShExcala
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix sh:'^b'    &lt;http://www.w3.org/ns/shacl/core#&gt; .\n@prefix xsd: '..."

---
File: https://raw.githubusercontent.com/labra/ShExcala/master/src%2Ftest%2Fresources%2FshexTest%2Fschemas%2F1dotShapeCode1.shacl

In repository: https://github.com/labra/ShExcala
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix sh:'^b'    &lt;http://www.w3.org/ns/shacl/core#&gt; .\n@prefix xsd: '..."

---
File: https://raw.githubusercontent.com/labra/ShExcala/master/src%2Ftest%2Fresources%2FshexTest%2Fschemas%2F1val1DECIMAL.shacl

In repository: https://github.com/labra/ShExcala
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix sh:'^b'    &lt;http://www.w3.org/ns/shacl/core#&gt; .\n@prefix xsd: '..."

---
File: https://raw.githubusercontent.com/labra/ShExcala/master/src%2Ftest%2Fresources%2FshexTest%2Fschemas%2F1literalMininclusive.shacl

In repository: https://github.com/labra/ShExcala
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix sh:'^b'    &lt;http://www.w3.org/ns/shacl/core#&gt; .\n@prefix xsd: '..."

---
File: https://raw.githubusercontent.com/labra/ShExcala/master/src%2Ftest%2Fresources%2FshexTest%2Fschemas%2F3groupdotExtra3.shacl

In repository: https://github.com/labra/ShExcala
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix sh:'^b'    &lt;http://www.w3.org/ns/shacl/core#&gt; .\n@prefix xsd: '..."

---
File: https://raw.githubusercontent.com/labra/ShExcala/master/src%2Ftest%2Fresources%2FshexTest%2Fschemas%2F1val1STRING_LITERAL_LONG2.shacl

In repository: https://github.com/labra/ShExcala
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix sh:'^b'    &lt;http://www.w3.org/ns/shacl/core#&gt; .\n@prefix xsd: '..."

---
File: https://raw.githubusercontent.com/labra/ShExcala/master/src%2Ftest%2Fresources%2FshexTest%2Fschemas%2F1dotExtra1.shacl

In repository: https://github.com/labra/ShExcala
> at line 4 of <>:
Bad syntax (Prefix "shex:" not bound) at ^ in:
"...b'http://www.w3.org/2001/XMLSchema#> .\n\n<http://a.example/S1> '^b'shex:extra <http://a.example/p1> ;\n        sh:property  [ a '..."

---
File: https://raw.githubusercontent.com/labra/ShExcala/master/src%2Ftest%2Fresources%2FshexTest%2Fschemas%2F1val1INTEGER.shacl

In repository: https://github.com/labra/ShExcala
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix sh:'^b'    &lt;http://www.w3.org/ns/shacl/core#&gt; .\n@prefix xsd: '..."

---
File: https://raw.githubusercontent.com/labra/ShExcala/master/src%2Ftest%2Fresources%2FshexTest%2Fschemas%2F1inversenegateddot.shacl

In repository: https://github.com/labra/ShExcala
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix sh:'^b'    &lt;http://www.w3.org/ns/shacl/core#&gt; .\n@prefix xsd: '..."

---
File: https://raw.githubusercontent.com/labra/ShExcala/master/src%2Ftest%2Fresources%2FshexTest%2Fschemas%2F1val1STRING_LITERAL1_with_all_punctuation.shacl

In repository: https://github.com/labra/ShExcala
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix sh:'^b'    &lt;http://www.w3.org/ns/shacl/core#&gt; .\n@prefix xsd: '..."

---
File: https://raw.githubusercontent.com/labra/ShExcala/master/src%2Ftest%2Fresources%2FshexTest%2Fschemas%2F1literalMaxexclusive.shacl

In repository: https://github.com/labra/ShExcala
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix sh:'^b'    &lt;http://www.w3.org/ns/shacl/core#&gt; .\n@prefix xsd: '..."

---
File: https://raw.githubusercontent.com/labra/ShExcala/master/src%2Ftest%2Fresources%2FshexTest%2Fschemas%2F1iriRef1.shacl

In repository: https://github.com/labra/ShExcala
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix sh:'^b'    &lt;http://www.w3.org/ns/shacl/core#&gt; .\n@prefix xsd: '..."

---
File: https://raw.githubusercontent.com/labra/ShExcala/master/src%2Ftest%2Fresources%2FshexTest%2Fschemas%2F1val1STRING_LITERAL_LONG1.shacl

In repository: https://github.com/labra/ShExcala
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix sh:'^b'    &lt;http://www.w3.org/ns/shacl/core#&gt; .\n@prefix xsd: '..."

---
File: https://raw.githubusercontent.com/labra/ShExcala/master/src%2Ftest%2Fresources%2FshexTest%2Fschemas%2F1negateddot.shacl

In repository: https://github.com/labra/ShExcala
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix sh:'^b'    &lt;http://www.w3.org/ns/shacl/core#&gt; .\n@prefix xsd: '..."

---
File: https://raw.githubusercontent.com/labra/ShExcala/master/src%2Ftest%2Fresources%2FshexTest%2Fschemas%2FstartCode1startRef.shacl

In repository: https://github.com/labra/ShExcala
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix sh:'^b'    &lt;http://www.w3.org/ns/shacl/core#&gt; .\n@prefix xsd: '..."

---
File: https://raw.githubusercontent.com/labra/ShExcala/master/src%2Ftest%2Fresources%2FshexTest%2Fschemas%2F3groupdot.shacl

In repository: https://github.com/labra/ShExcala
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix sh:'^b'    &lt;http://www.w3.org/ns/shacl/core#&gt; .\n@prefix xsd: '..."

---
File: https://raw.githubusercontent.com/labra/ShExcala/master/src%2Ftest%2Fresources%2FshexTest%2Fschemas%2F1literalTotaldigits.shacl

In repository: https://github.com/labra/ShExcala
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix sh:'^b'    &lt;http://www.w3.org/ns/shacl/core#&gt; .\n@prefix xsd: '..."

---
File: https://raw.githubusercontent.com/labra/ShExcala/master/src%2Ftest%2Fresources%2FshexTest%2Fschemas%2F1val1DOUBLElowercase.shacl

In repository: https://github.com/labra/ShExcala
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix sh:'^b'    &lt;http://www.w3.org/ns/shacl/core#&gt; .\n@prefix xsd: '..."

---
File: https://raw.githubusercontent.com/labra/ShExcala/master/src%2Ftest%2Fresources%2FshexTest%2Fschemas%2F1literalMinlength.shacl

In repository: https://github.com/labra/ShExcala
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix sh:'^b'    &lt;http://www.w3.org/ns/shacl/core#&gt; .\n@prefix xsd: '..."

---
File: https://raw.githubusercontent.com/labra/ShExcala/master/src%2Ftest%2Fresources%2FshexTest%2Fschemas%2F1val1STRING_LITERAL1_with_ascii_boundaries.shacl

In repository: https://github.com/labra/ShExcala
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix sh:'^b'    &lt;http://www.w3.org/ns/shacl/core#&gt; .\n@prefix xsd: '..."

---
File: https://raw.githubusercontent.com/labra/ShExcala/master/src%2Ftest%2Fresources%2FshexTest%2Fschemas%2F1val1STRING_LITERAL2.shacl

In repository: https://github.com/labra/ShExcala
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix sh:'^b'    &lt;http://www.w3.org/ns/shacl/core#&gt; .\n@prefix xsd: '..."

---
File: https://raw.githubusercontent.com/labra/ShExcala/master/src%2Ftest%2Fresources%2FshexTest%2Fschemas%2F1literalFractiondigits.shacl

In repository: https://github.com/labra/ShExcala
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix sh:'^b'    &lt;http://www.w3.org/ns/shacl/core#&gt; .\n@prefix xsd: '..."

---
File: https://raw.githubusercontent.com/labra/ShExcala/master/src%2Ftest%2Fresources%2FshexTest%2Fschemas%2F1val1IRIREFDatatype.shacl

In repository: https://github.com/labra/ShExcala
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix sh:'^b'    &lt;http://www.w3.org/ns/shacl/core#&gt; .\n@prefix xsd: '..."

---
File: https://raw.githubusercontent.com/labra/ShExcala/master/src%2Ftest%2Fresources%2FshexTest%2Fschemas%2F1dotRefSpaceNS1.shacl

In repository: https://github.com/labra/ShExcala
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix PersonShape:'^b' &lt;http://a.example/PersonShape&gt; .\n@prefix sh:    &lt;h'..."

---
File: https://raw.githubusercontent.com/labra/ShExcala/master/src%2Ftest%2Fresources%2FshexTest%2Fschemas%2F1val1true.shacl

In repository: https://github.com/labra/ShExcala
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix sh:'^b'    &lt;http://www.w3.org/ns/shacl/core#&gt; .\n@prefix xsd: '..."

---
File: https://raw.githubusercontent.com/labra/ShExcala/master/src%2Ftest%2Fresources%2FshexTest%2Fschemas%2Fopen3groupdotcloseAnnot3.shacl

In repository: https://github.com/labra/ShExcala
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix sh:'^b'    &lt;http://www.w3.org/ns/shacl/core#&gt; .\n@prefix xsd: '..."

---
File: https://raw.githubusercontent.com/labra/ShExcala/master/src%2Ftest%2Fresources%2FshexTest%2Fschemas%2F1val1IRIREF.shacl

In repository: https://github.com/labra/ShExcala
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix sh:'^b'    &lt;http://www.w3.org/ns/shacl/core#&gt; .\n@prefix xsd: '..."

---
File: https://raw.githubusercontent.com/labra/ShExcala/master/src%2Ftest%2Fresources%2FshexTest%2Fschemas%2F1nonliteralMinlength.shacl

In repository: https://github.com/labra/ShExcala
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix sh:'^b'    &lt;http://www.w3.org/ns/shacl/core#&gt; .\n@prefix xsd: '..."

---
File: https://raw.githubusercontent.com/labra/ShExcala/master/src%2Ftest%2Fresources%2FshexTest%2Fschemas%2F1val1STRING_LITERAL_LONG2_with_subtag.shacl

In repository: https://github.com/labra/ShExcala
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix sh:'^b'    &lt;http://www.w3.org/ns/shacl/core#&gt; .\n@prefix xsd: '..."

---
File: https://raw.githubusercontent.com/labra/ShExcala/master/src%2Ftest%2Fresources%2FshexTest%2Fschemas%2F1refbnode_with_leading_underscore1.shacl

In repository: https://github.com/labra/ShExcala
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix sh:'^b'    &lt;http://www.w3.org/ns/shacl/core#&gt; .\n@prefix xsd: '..."

---
File: https://raw.githubusercontent.com/labra/ShExcala/master/src%2Ftest%2Fresources%2FshexTest%2Fschemas%2F1val1STRING_LITERAL1_with_all_controls.shacl

In repository: https://github.com/labra/ShExcala
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix sh:'^b'    &lt;http://www.w3.org/ns/shacl/core#&gt; .\n@prefix xsd: '..."

---
File: https://raw.githubusercontent.com/labra/ShExcala/master/src%2Ftest%2Fresources%2FshexTest%2Fschemas%2F1literalMaxinclusive.shacl

In repository: https://github.com/labra/ShExcala
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix sh:'^b'    &lt;http://www.w3.org/ns/shacl/core#&gt; .\n@prefix xsd: '..."

---
File: https://raw.githubusercontent.com/labra/ShExcala/master/src%2Ftest%2Fresources%2FshexTest%2Fschemas%2F1literal.shacl

In repository: https://github.com/labra/ShExcala
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix sh:'^b'    &lt;http://www.w3.org/ns/shacl/core#&gt; .\n@prefix xsd: '..."

---
File: https://raw.githubusercontent.com/labra/ShExcala/master/src%2Ftest%2Fresources%2FshexTest%2Fschemas%2FstartEqualSpaceInline.shacl

In repository: https://github.com/labra/ShExcala
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix sh:'^b'    &lt;http://www.w3.org/ns/shacl/core#&gt; .\n@prefix xsd: '..."

---
File: https://raw.githubusercontent.com/labra/ShExcala/master/src%2Ftest%2Fresources%2FshexTest%2Fschemas%2F1val1false.shacl

In repository: https://github.com/labra/ShExcala
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix sh:'^b'    &lt;http://www.w3.org/ns/shacl/core#&gt; .\n@prefix xsd: '..."

---
File: https://raw.githubusercontent.com/labra/ShExcala/master/src%2Ftest%2Fresources%2FshexTest%2Fschemas%2F1IRI_with_all_punctuationdot.shacl

In repository: https://github.com/labra/ShExcala
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix sh:'^b'    &lt;http://www.w3.org/ns/shacl/core#&gt; .\n@prefix xsd: '..."

---
File: https://raw.githubusercontent.com/labra/ShExcala/master/src%2Ftest%2Fresources%2FshexTest%2Fschemas%2F1nonliteralPattern.shacl

In repository: https://github.com/labra/ShExcala
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix sh:'^b'    &lt;http://www.w3.org/ns/shacl/core#&gt; .\n@prefix xsd: '..."

---
File: https://raw.githubusercontent.com/labra/ShExcala/master/src%2Ftest%2Fresources%2FshexTest%2Fschemas%2Fopen3groupdotclose.shacl

In repository: https://github.com/labra/ShExcala
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix sh:'^b'    &lt;http://www.w3.org/ns/shacl/core#&gt; .\n@prefix xsd: '..."

---
File: https://raw.githubusercontent.com/labra/ShExcala/master/src%2Ftest%2Fresources%2FshexTest%2Fschemas%2FstartCode3.shacl

In repository: https://github.com/labra/ShExcala
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix sh:'^b'    &lt;http://www.w3.org/ns/shacl/core#&gt; .\n@prefix xsd: '..."

---
File: https://raw.githubusercontent.com/labra/ShExcala/master/src%2Ftest%2Fresources%2FshexTest%2Fschemas%2F1iriPattern.shacl

In repository: https://github.com/labra/ShExcala
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix sh:'^b'    &lt;http://www.w3.org/ns/shacl/core#&gt; .\n@prefix xsd: '..."

---
File: https://raw.githubusercontent.com/labra/ShExcala/master/src%2Ftest%2Fresources%2FshexTest%2Fschemas%2F1iriLength.shacl

In repository: https://github.com/labra/ShExcala
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix sh:'^b'    &lt;http://www.w3.org/ns/shacl/core#&gt; .\n@prefix xsd: '..."

---
File: https://raw.githubusercontent.com/labra/ShExcala/master/src%2Ftest%2Fresources%2FshexTest%2Fschemas%2F1literalPattern.shacl

In repository: https://github.com/labra/ShExcala
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix sh:'^b'    &lt;http://www.w3.org/ns/shacl/core#&gt; .\n@prefix xsd: '..."

---
File: https://raw.githubusercontent.com/labra/ShExcala/master/src%2Ftest%2Fresources%2FshexTest%2Fschemas%2F1nonliteralMaxlength.shacl

In repository: https://github.com/labra/ShExcala
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix sh:'^b'    &lt;http://www.w3.org/ns/shacl/core#&gt; .\n@prefix xsd: '..."

---
File: https://raw.githubusercontent.com/labra/ShExcala/master/src%2Ftest%2Fresources%2FshexTest%2Fschemas%2F3groupdotExtra3NLex.shacl

In repository: https://github.com/labra/ShExcala
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix ex:'^b'    &lt;http://a.example/&gt; .\n@prefix sh:    &lt;http://ww'..."

---
File: https://raw.githubusercontent.com/labra/ShExcala/master/src%2Ftest%2Fresources%2FshexTest%2Fschemas%2Fopen1dotcloseAnnot3.shacl

In repository: https://github.com/labra/ShExcala
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix sh:'^b'    &lt;http://www.w3.org/ns/shacl/core#&gt; .\n@prefix xsd: '..."

---
File: https://raw.githubusercontent.com/labra/ShExcala/master/src%2Ftest%2Fresources%2FshexTest%2Fschemas%2F1refbnode_with_spanning_PN_CHARS_BASE1.shacl

In repository: https://github.com/labra/ShExcala
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix sh:'^b'    &lt;http://www.w3.org/ns/shacl/core#&gt; .\n@prefix xsd: '..."

---
File: https://raw.githubusercontent.com/labra/ShExcala/master/src%2Ftest%2Fresources%2FshexTest%2Fschemas%2F1refbnode_with_spanning_PN_CHARS1.shacl

In repository: https://github.com/labra/ShExcala
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix sh:'^b'    &lt;http://www.w3.org/ns/shacl/core#&gt; .\n@prefix xsd: '..."

---
File: https://raw.githubusercontent.com/labra/ShExcala/master/src%2Ftest%2Fresources%2FshexTest%2Fschemas%2F1dot.shacl

In repository: https://github.com/labra/ShExcala
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix sh:'^b'    &lt;http://www.w3.org/ns/shacl/core#&gt; .\n@prefix xsd: '..."

---
File: https://raw.githubusercontent.com/labra/ShExcala/master/src%2Ftest%2Fresources%2FshexTest%2Fschemas%2Fbnode1dot.shacl

In repository: https://github.com/labra/ShExcala
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix sh:'^b'    &lt;http://www.w3.org/ns/shacl/core#&gt; .\n@prefix xsd: '..."

---
File: https://raw.githubusercontent.com/labra/ShExcala/master/src%2Ftest%2Fresources%2FshexTest%2Fschemas%2F1val1STRING_LITERAL2_with_subtag.shacl

In repository: https://github.com/labra/ShExcala
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix sh:'^b'    &lt;http://www.w3.org/ns/shacl/core#&gt; .\n@prefix xsd: '..."

---
File: https://raw.githubusercontent.com/labra/ShExcala/master/src%2Ftest%2Fresources%2FshexTest%2Fschemas%2F1inversedotCode1.shacl

In repository: https://github.com/labra/ShExcala
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix sh:'^b'    &lt;http://www.w3.org/ns/shacl/core#&gt; .\n@prefix xsd: '..."

---
File: https://raw.githubusercontent.com/labra/ShExcala/master/src%2Ftest%2Fresources%2FshexTest%2Fschemas%2F1dotRefOr3.shacl

In repository: https://github.com/labra/ShExcala
> at line 33 of <>:
Bad syntax (']' expected) at ^ in:
"...b' sh:predicate  <http://a.example/p4>\n                       '^b'sh:shapes (\n                         <http://a.example/Perso'..."

---
File: https://raw.githubusercontent.com/labra/ShExcala/master/src%2Ftest%2Fresources%2FshexTest%2Fschemas%2F1val1LNDatatype.shacl

In repository: https://github.com/labra/ShExcala
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix ex:'^b'    &lt;http://a.example/&gt; .\n@prefix sh:    &lt;http://ww'..."

---
File: https://raw.githubusercontent.com/labra/ShExcala/master/src%2Ftest%2Fresources%2FshexTest%2Fschemas%2Fopen3groupdotcloseCode1.shacl

In repository: https://github.com/labra/ShExcala
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix sh:'^b'    &lt;http://www.w3.org/ns/shacl/core#&gt; .\n@prefix xsd: '..."

---
File: https://raw.githubusercontent.com/labra/ShExcala/master/src%2Ftest%2Fresources%2FshexTest%2Fschemas%2FstartRef.shacl

In repository: https://github.com/labra/ShExcala
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix sh:'^b'    &lt;http://www.w3.org/ns/shacl/core#&gt; .\n@prefix xsd: '..."

---
File: https://raw.githubusercontent.com/labra/ShExcala/master/src%2Ftest%2Fresources%2FshexTest%2Fschemas%2F1val1STRING_LITERAL_LONG2_with_LANGTAG.shacl

In repository: https://github.com/labra/ShExcala
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix sh:'^b'    &lt;http://www.w3.org/ns/shacl/core#&gt; .\n@prefix xsd: '..."

---
File: https://raw.githubusercontent.com/labra/ShExcala/master/src%2Ftest%2Fresources%2FshexTest%2Fschemas%2F1val1STRING_LITERAL1_with_UTF8_boundaries.shacl

In repository: https://github.com/labra/ShExcala
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix sh:'^b'    &lt;http://www.w3.org/ns/shacl/core#&gt; .\n@prefix xsd: '..."

---
File: https://raw.githubusercontent.com/labra/ShExcala/master/src%2Ftest%2Fresources%2FshexTest%2Fschemas%2F2eachInclude1.shacl

In repository: https://github.com/labra/ShExcala
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix sh:'^b'    &lt;http://www.w3.org/ns/shacl/core#&gt; .\n@prefix xsd: '..."

---
File: https://raw.githubusercontent.com/labra/ShExcala/master/src%2Ftest%2Fresources%2FshexTest%2Fschemas%2F1inversedot.shacl

In repository: https://github.com/labra/ShExcala
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix sh:'^b'    &lt;http://www.w3.org/ns/shacl/core#&gt; .\n@prefix xsd: '..."

---
File: https://raw.githubusercontent.com/labra/ShExcala/master/src%2Ftest%2Fresources%2FshexTest%2Fschemas%2Fopenopen1dotcloseCode1closeCode2.shacl

In repository: https://github.com/labra/ShExcala
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix sh:'^b'    &lt;http://www.w3.org/ns/shacl/core#&gt; .\n@prefix xsd: '..."

---
File: https://raw.githubusercontent.com/labra/ShExcala/master/src%2Ftest%2Fresources%2FshexTest%2Fschemas%2FstartInline.shacl

In repository: https://github.com/labra/ShExcala
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix sh:'^b'    &lt;http://www.w3.org/ns/shacl/core#&gt; .\n@prefix xsd: '..."

---
File: https://raw.githubusercontent.com/labra/ShExcala/master/src%2Ftest%2Fresources%2FshexTest%2Fschemas%2F1inversedotAnnot3.shacl

In repository: https://github.com/labra/ShExcala
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix sh:'^b'    &lt;http://www.w3.org/ns/shacl/core#&gt; .\n@prefix xsd: '..."

---
File: https://raw.githubusercontent.com/labra/ShExcala/master/src%2Ftest%2Fresources%2FshexTest%2Fschemas%2F1literalMinexclusive.shacl

In repository: https://github.com/labra/ShExcala
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix sh:'^b'    &lt;http://www.w3.org/ns/shacl/core#&gt; .\n@prefix xsd: '..."

---
File: https://raw.githubusercontent.com/labra/ShExcala/master/src%2Ftest%2Fresources%2FshexTest%2Fschemas%2F3circularRef1.shacl

In repository: https://github.com/labra/ShExcala
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix sh:'^b'    &lt;http://www.w3.org/ns/shacl/core#&gt; .\n@prefix xsd: '..."

---
File: https://raw.githubusercontent.com/labra/ShExcala/master/src%2Ftest%2Fresources%2FshexTest%2Fschemas%2F1refbnode_with_leading_digit1.shacl

In repository: https://github.com/labra/ShExcala
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix sh:'^b'    &lt;http://www.w3.org/ns/shacl/core#&gt; .\n@prefix xsd: '..."

---
File: https://raw.githubusercontent.com/labra/ShExcala/master/src%2Ftest%2Fresources%2FshexTest%2Fschemas%2Fopen1dotclosecardOpt.shacl

In repository: https://github.com/labra/ShExcala
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix sh:'^b'    &lt;http://www.w3.org/ns/shacl/core#&gt; .\n@prefix xsd: '..."

---
File: https://raw.githubusercontent.com/labra/ShExcala/master/src%2Ftest%2Fresources%2FshexTest%2Fschemas%2FstartSpaceEqualInline.shacl

In repository: https://github.com/labra/ShExcala
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix sh:'^b'    &lt;http://www.w3.org/ns/shacl/core#&gt; .\n@prefix xsd: '..."

---
File: https://raw.githubusercontent.com/labra/ShExcala/master/src%2Ftest%2Fresources%2FshexTest%2Fschemas%2F1iriMinlength.shacl

In repository: https://github.com/labra/ShExcala
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix sh:'^b'    &lt;http://www.w3.org/ns/shacl/core#&gt; .\n@prefix xsd: '..."

---
File: https://raw.githubusercontent.com/labra/ShExcala/master/src%2Ftest%2Fresources%2FshexTest%2Fschemas%2F1IRI_with_UCHAR.1dot.shacl

In repository: https://github.com/labra/ShExcala
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix sh:'^b'    &lt;http://www.w3.org/ns/shacl/core#&gt; .\n@prefix xsd: '..."

---
File: https://raw.githubusercontent.com/labra/ShExcala/master/src%2Ftest%2Fresources%2FshexTest%2Fschemas%2FfutureWork%2F1dotVirtual.shacl

In repository: https://github.com/labra/ShExcala
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix sh:'^b'    &lt;http://www.w3.org/ns/shacl/core#&gt; .\n@prefix xsd: '..."

---
File: https://raw.githubusercontent.com/labra/ShExcala/master/src%2Ftest%2Fresources%2FshexTest%2Fschemas%2FfutureWork%2F1dotVirtualShapeCode1.shacl

In repository: https://github.com/labra/ShExcala
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix sh:'^b'    &lt;http://www.w3.org/ns/shacl/core#&gt; .\n@prefix xsd: '..."

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://128.178.60.47:8890/sparql

<urlopen error [Errno 110] Connection timed out>

---
SPARQL endpoint failed: http://sparql.wikipathways.org/

byte indices must be integers or slices, not str

---
SPARQL endpoint failed: http://sparql.wikipathways.org/

byte indices must be integers or slices, not str

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
SPARQL endpoint failed: https://api.druid.datalegend.net/datasets/datalegend/AmsterdamTimeMachine/services/endpoint/sparql

EndPointNotFound: it was impossible to connect with the endpoint in that address, check if it is correct. 

Response:
b'{\n  "message": "Not found."\n}'

---
SPARQL endpoint failed: http://zorin.beeldengeluid.nl:3020/sparql/

<urlopen error [Errno -2] Name or service not known>

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
File: https://raw.githubusercontent.com/fair-workflows/openpredict/master/data%2Fontology%2Fplex_tbox_0.1.1.owl

In repository: https://github.com/fair-workflows/openpredict
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/data/ontology/plex_tbox_0.1.1.owl:41:68: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#IRI

---
File: https://raw.githubusercontent.com/fair-workflows/openpredict/master/data%2Fontology%2Fplex_tbox_0.1.2.owl

In repository: https://github.com/fair-workflows/openpredict
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/data/ontology/plex_tbox_0.1.2.owl:41:68: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#IRI

---
SPARQL endpoint failed: http://fuseki:3030/TOOP/query

<urlopen error [Errno -3] Temporary failure in name resolution>

---
SPARQL endpoint failed: http://fuseki:3030/TOOP/query

<urlopen error [Errno -3] Temporary failure in name resolution>

---
SPARQL endpoint failed: http://fuseki:3030/TOOP/query

<urlopen error [Errno -3] Temporary failure in name resolution>

---
SPARQL endpoint failed: http://fuseki:3030/TOOP/query

<urlopen error [Errno -3] Temporary failure in name resolution>

---
SPARQL endpoint failed: https://stars-app.renci.org/pubmedgraph/sparql

HTTP Error 502: Bad Gateway

---
SPARQL endpoint failed: https://stars-app.renci.org/pubmedgraph/sparql

HTTP Error 502: Bad Gateway

---
File: https://raw.githubusercontent.com/ramaschittella/INK-Browser/master/DaSE%2Fowl%2FTreePattern.owl

In repository: https://github.com/ramaschittella/INK-Browser
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/DaSE/owl/TreePattern.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/ramaschittella/INK-Browser/master/DaSE%2Fowl%2FComputationalEnvironment.owl

In repository: https://github.com/ramaschittella/INK-Browser
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/DaSE/owl/ComputationalEnvironment.owl:27:137: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#Literal

---
SPARQL endpoint failed: https://raw.githubusercontent.com/albertmeronyo/lodapi/master/ghostbusters.ttl

byte indices must be integers or slices, not str

---
SPARQL endpoint failed: http://iricelino.org/rdfa/sample-annotated-page.html

EndPointNotFound: it was impossible to connect with the endpoint in that address, check if it is correct. 

Response:
b'<!DOCTYPE HTML PUBLIC "-//IETF//DTD HTML 2.0//EN">\n<html><head>\n<title>404 Not Found</title>\n</head><body>\n<h1>Not Found</h1>\n<p>The requested URL was not found on this server.</p>\n</body></html>\n'

---
SPARQL endpoint failed: any

unknown url type: 'any?query=SELECT+%2A+WHERE+%7B+%3Fs+%3Fp+%3Fo+%7D+LIMIT+10&format=json&output=json&results=json'

---
SPARQL endpoint failed: any

unknown url type: 'any?query=SELECT+%2A+WHERE+%7B+%3Fs+%3Fp+%3Fo+%7D+LIMIT+10&format=json&output=json&results=json'

---
File: https://raw.githubusercontent.com/SmartDataAnalytics/jena-sparql-api/master/jena-sparql-api-algebra%2Fsrc%2Fmain%2Fresources%2Fbnode-rewrites.ttl

In repository: https://github.com/SmartDataAnalytics/jena-sparql-api
> at line 10 of <>:
Bad syntax (expected '.' or '}' or ']' at end of statement) at ^ in:
"...b'/> .\n\n@prefix ent: <http://www.ontotext.com/owlim/entity#>\n\n'^b'@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .'..."

---
File: https://raw.githubusercontent.com/SmartDataAnalytics/jena-sparql-api/master/jena-sparql-api-dcat-parent%2Fjena-sparql-api-dcat-api%2Fsrc%2Fmain%2Fresources%2Flangs.ttl

In repository: https://github.com/SmartDataAnalytics/jena-sparql-api
> at line 9 of <>:
Bad syntax (Prefix "skos:" not bound) at ^ in:
"...b'http://www.example.org/> .\n\n\nr:rdfxml\n  a o:ContentType ;\n  '^b'skos:prefLabel "RDF/XML" ;\n  skos:altLabel "RDFXML", "RDF/XM'..."

---
File: https://raw.githubusercontent.com/SmartDataAnalytics/jena-sparql-api/master/jena-sparql-api-resources%2Fsrc%2Fmain%2Fresources%2Fxsd-ontology.ttl

In repository: https://github.com/SmartDataAnalytics/jena-sparql-api
> at line 4 of <>:
Bad syntax (Prefix "rdfs:" not bound) at ^ in:
"...b'http://www.w3.org/2000/01/rdf-schema#>\n\nxsd:negativeInteger '^b'rdfs:subClassOf xsd:nonPositiveInteger .\nxsd:nonPositiveInte'..."

---
File: https://raw.githubusercontent.com/SmartDataAnalytics/jena-sparql-api/master/jena-sparql-api-io-core%2Fsrc%2Fmain%2Fresources%2Fsys-encoders.ttl

In repository: https://github.com/SmartDataAnalytics/jena-sparql-api
> at line 1 of <>:
Bad syntax (Prefix "eg:" not bound) at ^ in:
"b''^b'eg:sysCmdLbzip2\n  a eg:SysCmd ;\n  eg:sysCmd "/usr/bin/lbzip2'..."

---
File: https://raw.githubusercontent.com/SmartDataAnalytics/jena-sparql-api/master/jena-sparql-api-mapper-parent%2Fjena-sparql-api-mapper-core%2Fsrc%2Ftest%2Fresources%2Fdbpedia-companies.ttl

In repository: https://github.com/SmartDataAnalytics/jena-sparql-api
> at line 2 of <>:
Bad syntax (expected '.' or '}' or ']' at end of statement) at ^ in:
"b'@prefix rdf:  <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\n'^b'@prefix xsd:  <http://www.w3.org/2001/XMLSchema#>\n@prefix rd'..."

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
File: https://raw.githubusercontent.com/CLARIAH/wp4-cow-conversions/master/temp%2Fhg%2Fhg-vocab.rdf

In repository: https://github.com/CLARIAH/wp4-cow-conversions
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/temp/hg/hg-vocab.rdf:1:0: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/CLARIAH/wp4-cow-conversions/master/temp%2Fhg%2Fhg-api.rdf

In repository: https://github.com/CLARIAH/wp4-cow-conversions
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/temp/hg/hg-api.rdf:1:0: not well-formed (invalid token)

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
File: https://raw.githubusercontent.com/BFO-ontology/BFO/master/src%2Fontology%2Fowl-group%2Fexamples%2Fproperty-chains%2Fhas-part-chains.owl

In repository: https://github.com/BFO-ontology/BFO
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/ontology/owl-group/examples/property-chains/has-part-chains.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/BFO-ontology/BFO/master/src%2Fontology%2Fowl-group%2Fexamples%2Fspatial-disjointness%2Fsd-atemporal.owl

In repository: https://github.com/BFO-ontology/BFO
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/ontology/owl-group/examples/spatial-disjointness/sd-atemporal.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/BFO-ontology/BFO/master/src%2Fontology%2Fowl-group%2Fexamples%2Fspatial-disjointness%2Fsd-bfo2-fail.owl

In repository: https://github.com/BFO-ontology/BFO
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/ontology/owl-group/examples/spatial-disjointness/sd-bfo2-fail.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/BFO-ontology/BFO/master/src%2Fontology%2Fowl-group%2Fexamples%2Fspatial-disjointness%2Fsd-bfo2-succeed.owl

In repository: https://github.com/BFO-ontology/BFO
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/ontology/owl-group/examples/spatial-disjointness/sd-bfo2-succeed.owl:1:6: not well-formed (invalid token)

---
