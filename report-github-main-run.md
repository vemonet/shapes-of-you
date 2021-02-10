## Fails loading files to `rdflib`

**Indexing topics**: `owl`, `shacl-shapes`, `shex`, `grlc`, `skos`, `obofoundry`

*Please check if your RDF file is properly formatted. We recommend to **use https://www.easyrdf.org/converter to get better insights on the error**, and store the shapes in `.ttl` files*


File: https://raw.githubusercontent.com/ontop/ontop/version4/test%2Fsparql-compliance%2Fsrc%2Ftest%2Fresources%2Ftestdata-update%2Fdataset-update-example9.trig parsed as n3

In repository: https://github.com/ontop/ontop
> at line 15 of <>:
Bad syntax (expected '.' or '}' or ']' at end of statement) at ^ in:
"...b'itle "SPARQL 1.1 Tutorial" .\n}\n\n<http://example/bookStore2> '^b'{\n  <http://example/book4> dc:title "SPARQL 1.0 Tutorial" .\n'..."

---
File: https://raw.githubusercontent.com/ontop/ontop/version4/test%2Fsparql-compliance%2Fsrc%2Ftest%2Fresources%2Ftestdata-update%2Fdataset-update.trig parsed as n3

In repository: https://github.com/ontop/ontop
> at line 25 of <>:
Bad syntax (expected '.' or '}' or ']' at end of statement) at ^ in:
"...b' foaf:knows ex:alice .\n\n    ex:alice foaf:knows ex:bob .\n}\n\n'^b'ex:graph2 {\n    ex:alice foaf:name "Alice" ;\n\tfoaf:mbox "ali'..."

---
File: https://raw.githubusercontent.com/ontop/ontop/version4/test%2Fsparql-compliance%2Fsrc%2Ftest%2Fresources%2Ftestdata-query%2Fdataset-query.trig parsed as n3

In repository: https://github.com/ontop/ontop
> at line 38 of <>:
Bad syntax (expected '.' or '}' or ']' at end of statement) at ^ in:
"...b'oaf:knows ex:william .\n\n    ex:alice foaf:knows ex:bob .\n}\n\n'^b'ex:graph2 {\n    ex:alice foaf:name "Alice" ;\n\tfoaf:mbox "ali'..."

---
File: https://raw.githubusercontent.com/ontop/ontop/version4/test%2Fsparql-compliance%2Fsrc%2Ftest%2Fresources%2Ftestcases-dawg%2Ftest-manifest.n3 parsed as n3

In repository: https://github.com/ontop/ontop
> at line 88 of <>:
Bad syntax (newline found in string literal) at ^ in:
"...b'ment "A type of test specifically for syntax testing. Syntax'^b'\n      tests are not required to have an associated result, '..."

---
File: https://raw.githubusercontent.com/ontop/ontop/version4/test%2Fsparql-compliance%2Fsrc%2Ftest%2Fresources%2Ftestcases-dawg-quest%2Ftest-manifest.n3 parsed as n3

In repository: https://github.com/ontop/ontop
> at line 88 of <>:
Bad syntax (newline found in string literal) at ^ in:
"...b'ment "A type of test specifically for syntax testing. Syntax'^b'\n      tests are not required to have an associated result, '..."

---
File: https://raw.githubusercontent.com/ontop/ontop/version4/test%2Fdocker-tests%2Fsrc%2Ftest%2Fresources%2Foracle%2Fregex%2Foracle-regexp.owl parsed as xml

In repository: https://github.com/ontop/ontop
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/test/docker-tests/src/test/resources/oracle/regex/oracle-regexp.owl:35:31: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#Class

---
File: https://raw.githubusercontent.com/ontop/ontop/version4/test%2Fdocker-tests%2Fsrc%2Ftest%2Fresources%2Foracle%2FontologyType%2FdataPropertiesOntologyType.owl parsed as xml

In repository: https://github.com/ontop/ontop
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/test/docker-tests/src/test/resources/oracle/ontologyType/dataPropertiesOntologyType.owl:57:60: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#DataProperty

---
File: https://raw.githubusercontent.com/ontop/ontop/version4/test%2Fdocker-tests%2Fsrc%2Ftest%2Fresources%2Fpgsql%2FEPNet.owl parsed as xml

In repository: https://github.com/ontop/ontop
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/test/docker-tests/src/test/resources/pgsql/EPNet.owl:33:89: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#Literal

---
File: https://raw.githubusercontent.com/ontop/ontop/version4/test%2Fdocker-tests%2Fsrc%2Ftest%2Fresources%2Fpgsql%2Fimdb%2FontologyIMDB.owl parsed as xml

In repository: https://github.com/ontop/ontop
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/test/docker-tests/src/test/resources/pgsql/imdb/ontologyIMDB.owl:212:27: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#Class

---
File: https://raw.githubusercontent.com/ontop/ontop/version4/test%2Fdocker-tests%2Fsrc%2Ftest%2Fresources%2Flocal%2Fadp%2Fnpd-ql.owl parsed as xml

In repository: https://github.com/ontop/ontop
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/test/docker-tests/src/test/resources/local/adp/npd-ql.owl:1:0: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/ontop/ontop/version4/test%2Fdocker-tests%2Fsrc%2Ftest%2Fresources%2Ftestcases-docker%2Fboolean%2Fdatatypes.owl parsed as xml

In repository: https://github.com/ontop/ontop
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/test/docker-tests/src/test/resources/testcases-docker/boolean/datatypes.owl:194:45: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#DataProperty

---
File: https://raw.githubusercontent.com/ontop/ontop/version4/test%2Fdocker-tests%2Fsrc%2Ftest%2Fresources%2Ftestcases-docker%2Fcharacter%2Fdatatypes.owl parsed as xml

In repository: https://github.com/ontop/ontop
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/test/docker-tests/src/test/resources/testcases-docker/character/datatypes.owl:194:45: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#DataProperty

---
File: https://raw.githubusercontent.com/ontop/ontop/version4/test%2Fdocker-tests%2Fsrc%2Ftest%2Fresources%2Ftestcases-docker%2Fgeneral%2Fdatatypes.owl parsed as xml

In repository: https://github.com/ontop/ontop
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/test/docker-tests/src/test/resources/testcases-docker/general/datatypes.owl:194:45: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#DataProperty

---
File: https://raw.githubusercontent.com/ontop/ontop/version4/test%2Fdocker-tests%2Fsrc%2Ftest%2Fresources%2Ftestcases-docker%2Fnumeric%2Fdatatypes.owl parsed as xml

In repository: https://github.com/ontop/ontop
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/test/docker-tests/src/test/resources/testcases-docker/numeric/datatypes.owl:194:45: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#DataProperty

---
File: https://raw.githubusercontent.com/ontop/ontop/version4/test%2Fdocker-tests%2Fsrc%2Ftest%2Fresources%2Ftestcases-docker%2Fdatetime%2Fdatatypes.owl parsed as xml

In repository: https://github.com/ontop/ontop
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/test/docker-tests/src/test/resources/testcases-docker/datetime/datatypes.owl:194:45: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#DataProperty

---
File: https://raw.githubusercontent.com/ontop/ontop/version4/test%2Fdocker-tests%2Fsrc%2Ftest%2Fresources%2Fmysql%2Fmaterializer%2FMaterializeTest.owl parsed as xml

In repository: https://github.com/ontop/ontop
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/test/docker-tests/src/test/resources/mysql/materializer/MaterializeTest.owl:41:25: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#Class

---
File: https://raw.githubusercontent.com/ontop/ontop/version4/test%2Fdocker-tests%2Fsrc%2Ftest%2Fresources%2Fmysql%2Fnestedconcat%2Ftest.owl parsed as xml

In repository: https://github.com/ontop/ontop
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/test/docker-tests/src/test/resources/mysql/nestedconcat/test.owl:35:60: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#DataProperty

---
File: https://raw.githubusercontent.com/ontop/ontop/version4/test%2Fdocker-tests%2Fsrc%2Ftest%2Fresources%2Fmysql%2Fperson%2Fperson.owl parsed as xml

In repository: https://github.com/ontop/ontop
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/test/docker-tests/src/test/resources/mysql/person/person.owl:52:60: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#DataProperty

---
File: https://raw.githubusercontent.com/ontop/ontop/version4/test%2Fsemantic-index%2Fsrc%2Ftest%2Fresources%2FdescribeConstruct.owl parsed as xml

In repository: https://github.com/ontop/ontop
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/test/semantic-index/src/test/resources/describeConstruct.owl:35:53: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#NamedIndividual

---
File: https://raw.githubusercontent.com/ontop/ontop/version4/test%2Fsemantic-index%2Fsrc%2Ftest%2Fresources%2Ftest%2FnewDag%2FinverseEquivalents6b.owl parsed as xml

In repository: https://github.com/ontop/ontop
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/test/semantic-index/src/test/resources/test/newDag/inverseEquivalents6b.owl:42:24: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#Class

---
File: https://raw.githubusercontent.com/ontop/ontop/version4/test%2Fsemantic-index%2Fsrc%2Ftest%2Fresources%2Ftest%2Fdag%2Ffinal_project_original.owl parsed as xml

In repository: https://github.com/ontop/ontop
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/test/semantic-index/src/test/resources/test/dag/final_project_original.owl:161:8: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#ObjectSomeValuesFrom

---
File: https://raw.githubusercontent.com/ontop/ontop/version4/client%2Fprotege%2Fsrc%2Ftest%2Fresources%2Fit%2Funibz%2Finf%2Fontop%2Fapi%2Fio%2FSchool.owl parsed as xml

In repository: https://github.com/ontop/ontop
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/client/protege/src/test/resources/it/unibz/inf/ontop/api/io/School.owl:55:31: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#Class

---
File: https://raw.githubusercontent.com/ontop/ontop/version4/engine%2Fsystem%2Fsql%2Fowlapi%2Fsrc%2Ftest%2Fresources%2Fmaterializer%2FMaterializeTest.owl parsed as xml

In repository: https://github.com/ontop/ontop
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/engine/system/sql/owlapi/src/test/resources/materializer/MaterializeTest.owl:41:25: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#Class

---
File: https://raw.githubusercontent.com/ontop/ontop/version4/mapping%2Fsql%2Fall%2Fsrc%2Ftest%2Fresources%2Fit%2Funibz%2Finf%2Fontop%2Fio%2FSchool.owl parsed as xml

In repository: https://github.com/ontop/ontop
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/mapping/sql/all/src/test/resources/it/unibz/inf/ontop/io/School.owl:55:31: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#Class

---
File: https://raw.githubusercontent.com/ontop/ontop/version4/binding%2Fowlapi%2Fsrc%2Ftest%2Fresources%2Fdatatype%2Fdatatypes.owl parsed as xml

In repository: https://github.com/ontop/ontop
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/binding/owlapi/src/test/resources/datatype/datatypes.owl:194:45: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#DataProperty

---
File: https://raw.githubusercontent.com/ontop/ontop/version4/binding%2Fowlapi%2Fsrc%2Ftest%2Fresources%2Ftest%2Fswrl%2FpropertyExample.owl parsed as xml

In repository: https://github.com/ontop/ontop
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/binding/owlapi/src/test/resources/test/swrl/propertyExample.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/ontop/ontop/version4/binding%2Fowlapi%2Fsrc%2Ftest%2Fresources%2Ftest%2Fswrl%2Fcomplex_example.owl parsed as xml

In repository: https://github.com/ontop/ontop
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/binding/owlapi/src/test/resources/test/swrl/complex_example.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/ontop/ontop/version4/binding%2Fowlapi%2Fsrc%2Ftest%2Fresources%2Ftest%2Fswrl%2FexampleSWRL.owl parsed as xml

In repository: https://github.com/ontop/ontop
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/binding/owlapi/src/test/resources/test/swrl/exampleSWRL.owl:68:30: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#Class

---
File: https://raw.githubusercontent.com/ontop/ontop/version4/binding%2Fowlapi%2Fsrc%2Ftest%2Fresources%2Ftest%2Fwkt%2Fwkt_test.owl parsed as xml

In repository: https://github.com/ontop/ontop
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/binding/owlapi/src/test/resources/test/wkt/wkt_test.owl:1:0: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/ontop/ontop/version4/binding%2Fowlapi%2Fsrc%2Ftest%2Fresources%2Ftest%2FlangTag%2FlangTag.owl parsed as xml

In repository: https://github.com/ontop/ontop
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/binding/owlapi/src/test/resources/test/langTag/langTag.owl:18:35: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#IRI

---
File: https://raw.githubusercontent.com/ontop/ontop/version4/binding%2Fowlapi%2Fsrc%2Ftest%2Fresources%2Fnpd-v2%2Fbfo-1.1.owl parsed as xml

In repository: https://github.com/ontop/ontop
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/binding/owlapi/src/test/resources/npd-v2/bfo-1.1.owl:1:0: no element found

---
File: https://raw.githubusercontent.com/ontop/ontop/version4/binding%2Fowlapi%2Fsrc%2Ftest%2Fresources%2Fissue381%2Fontology.owl parsed as xml

In repository: https://github.com/ontop/ontop
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/binding/owlapi/src/test/resources/issue381/ontology.owl:1:0: no element found

---
File: https://raw.githubusercontent.com/ontop/ontop/version4/binding%2Fowlapi%2Fsrc%2Ftest%2Fresources%2Fproperty-characteristics%2Fsymmetric.owl parsed as xml

In repository: https://github.com/ontop/ontop
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/binding/owlapi/src/test/resources/property-characteristics/symmetric.owl:32:38: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#ObjectProperty

---
File: https://raw.githubusercontent.com/ontop/ontop/version4/binding%2Fowlapi%2Fsrc%2Ftest%2Fresources%2Fproperty-characteristics%2Fnoproperty.owl parsed as xml

In repository: https://github.com/ontop/ontop
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/binding/owlapi/src/test/resources/property-characteristics/noproperty.owl:32:38: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#ObjectProperty

---
File: https://raw.githubusercontent.com/ontop/ontop/version4/binding%2Fowlapi%2Fsrc%2Ftest%2Fresources%2Ffilter%2Fdatatypes.owl parsed as xml

In repository: https://github.com/ontop/ontop
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/binding/owlapi/src/test/resources/filter/datatypes.owl:194:45: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#DataProperty

---
File: https://raw.githubusercontent.com/ontop/ontop/version4/binding%2Fowlapi%2Fsrc%2Ftest%2Fresources%2Fljoptional%2Frais-ontology.owl parsed as xml

In repository: https://github.com/ontop/ontop
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/binding/owlapi/src/test/resources/ljoptional/rais-ontology.owl:1:0: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/ontop/ontop/version4/binding%2Fowlapi%2Fsrc%2Fmain%2Fresources%2Fsamples%2Fstock-exchange-classic.owl parsed as xml

In repository: https://github.com/ontop/ontop
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/binding/owlapi/src/main/resources/samples/stock-exchange-classic.owl:25:54: Repeat node-elements inside property elements: http://www.w3.org/2006/12/owl2-xml#Class

---
File: https://raw.githubusercontent.com/ontop/ontop/version4/test%2Fdocker-tests%2Fsrc%2Ftest%2Fresources%2Ftestcases-docker%2Fvirtual-mode%2Fbsbm%2Fquery-result-12.ttl parsed as ttl

In repository: https://github.com/ontop/ontop
> at line 6 of <>:
Bad syntax (expected '.' or '}' or ']' at end of statement) at ^ in:
"...b'p://www.w3.org/2001/XMLSchema#> .\n\nbsbm-inst:dataFromVendor2'^b'/Offer3470 \n\tbsbm:export/product \t\tbsbm-inst:dataFromProduce'..."

---
File: https://raw.githubusercontent.com/ontop/ontop/version4/test%2Fdocker-tests%2Fsrc%2Ftest%2Fresources%2Ftestcases-docker%2Fvirtual-mode%2Fstockexchange%2Ffilters%2Fboolean-nested-1.ttl parsed as ttl

In repository: https://github.com/ontop/ontop
> at line 1 of <>:
Bad syntax (expected directive or statement) at ^ in:
"...b'refix rsi:      <http://ontop.inf.unibz.it/tests/rs-info#> .'^b'\r@prefix rdf:     <http://www.w3.org/1999/02/22-rdf-syntax-n'..."

---
File: https://raw.githubusercontent.com/ontop/ontop/version4/test%2Fdocker-tests%2Fsrc%2Ftest%2Fresources%2Ftestcases-docker%2Fvirtual-mode%2Fstockexchange%2Ffilters%2Fboolean-nested-3.ttl parsed as ttl

In repository: https://github.com/ontop/ontop
> at line 1 of <>:
Bad syntax (expected directive or statement) at ^ in:
"...b'refix rsi:      <http://ontop.inf.unibz.it/tests/rs-info#> .'^b'\r@prefix rdf:     <http://www.w3.org/1999/02/22-rdf-syntax-n'..."

---
File: https://raw.githubusercontent.com/ontop/ontop/version4/test%2Fdocker-tests%2Fsrc%2Ftest%2Fresources%2Ftestcases-docker%2Fvirtual-mode%2Fstockexchange%2Ffilters%2Fboolean-nested-2.ttl parsed as ttl

In repository: https://github.com/ontop/ontop
> at line 1 of <>:
Bad syntax (expected directive or statement) at ^ in:
"...b'refix rsi:      <http://ontop.inf.unibz.it/tests/rs-info#> .'^b'\r@prefix rdf:     <http://www.w3.org/1999/02/22-rdf-syntax-n'..."

---
File: https://raw.githubusercontent.com/ontop/ontop/version4/test%2Fdocker-tests%2Fsrc%2Ftest%2Fresources%2Ftestcases-docker%2Fvirtual-mode%2Fstockexchange%2Fsimplecq%2Fbrokers-workfor-legal.ttl parsed as ttl

In repository: https://github.com/ontop/ontop
> at line 1 of <>:
Bad syntax (expected directive or statement) at ^ in:
"...b'refix rsi:      <http://ontop.inf.unibz.it/tests/rs-info#> .'^b'\r@prefix rdf:     <http://www.w3.org/1999/02/22-rdf-syntax-n'..."

---
File: https://raw.githubusercontent.com/ontop/ontop/version4/test%2Fdocker-tests%2Fsrc%2Ftest%2Fresources%2Ftestcases-docker%2Fvirtual-mode%2Fstockexchange%2Fsimplecq%2Ftransaction-offer-stock.ttl parsed as ttl

In repository: https://github.com/ontop/ontop
> at line 1 of <>:
Bad syntax (expected directive or statement) at ^ in:
"...b'refix rsi:      <http://ontop.inf.unibz.it/tests/rs-info#> .'^b'\r@prefix rdf:     <http://www.w3.org/1999/02/22-rdf-syntax-n'..."

---
File: https://raw.githubusercontent.com/ontop/ontop/version4/test%2Fdocker-tests%2Fsrc%2Ftest%2Fresources%2Ftestcases-docker%2Fvirtual-mode%2Fstockexchange%2Fsimplecq%2Ftransaction-stock-type.ttl parsed as ttl

In repository: https://github.com/ontop/ontop
> at line 1 of <>:
Bad syntax (expected directive or statement) at ^ in:
"...b'refix rsi:      <http://ontop.inf.unibz.it/tests/rs-info#> .'^b'\r@prefix rdf:     <http://www.w3.org/1999/02/22-rdf-syntax-n'..."

---
File: https://raw.githubusercontent.com/ontop/ontop/version4/test%2Fdocker-tests%2Fsrc%2Ftest%2Fresources%2Fmysql%2Fnorthwind%2Fmapping-northwind-platform.ttl parsed as ttl

In repository: https://github.com/ontop/ontop
> at line 6 of <>:
Bad syntax (newline found in string literal) at ^ in:
"...b'D5(CONCAT(COALESCE(Address, RAND()), COALESCE(City, RAND()),'^b'\n                                           COALESCE(Region,'..."

---
File: https://raw.githubusercontent.com/ontop/ontop/version4/binding%2Frdf4j%2Fsrc%2Ftest%2Fresources%2Fissue107b%2Fmapping.ttl parsed as ttl

In repository: https://github.com/ontop/ontop
> at line 2 of <>:
Bad syntax (Prefix "rr:" not bound) at ^ in:
"b'<#just_a_map_five>\n\ta '^b'rr:TriplesMap;\n\trr:logicalTable [\n\t\trr:tableName "SG_TABLE_O'..."

---
File: https://raw.githubusercontent.com/ontop/ontop/version4/binding%2Frdf4j%2Fsrc%2Ftest%2Fresources%2Fempty-query-mapping%2Fmapping.ttl parsed as ttl

In repository: https://github.com/ontop/ontop
> at line 2 of <>:
Bad syntax (Prefix "rr:" not bound) at ^ in:
"b'<agency>\n\t'^b'rr:logicalTable [\n\t\trr:sqlQuery "select * from AGENCY where '..."

---
File: https://raw.githubusercontent.com/ontop/ontop/version4/binding%2Frdf4j%2Fsrc%2Ftest%2Fresources%2Fissue390%2Fmapping.ttl parsed as ttl

In repository: https://github.com/ontop/ontop
> at line 2 of <>:
Bad syntax (Prefix "rr:" not bound) at ^ in:
"b'<agency>\n\t'^b'rr:logicalTable [\n\t\trr:tableName "AGENCY";\n\t];\n\trr:subjectMa'..."

---
File: https://raw.githubusercontent.com/ontop/ontop/version4/binding%2Frdf4j%2Fsrc%2Ftest%2Fresources%2Fissue325%2Fmapping.r2rml.ttl parsed as ttl

In repository: https://github.com/ontop/ontop
> at line 2 of <>:
Bad syntax (Prefix "rr:" not bound) at ^ in:
"b'<example1>\n\t'^b'rr:logicalTable [\n\t\trr:tableName "example1";\n\t];\n\trr:subject'..."

---
File: https://raw.githubusercontent.com/ontop/ontop/version4/binding%2Fowlapi%2Fsrc%2Ftest%2Fresources%2Ftest%2FrepeatedCN%2FrepeatedCN_test.ttl parsed as ttl

In repository: https://github.com/ontop/ontop
> at line 9 of <>:
Bad syntax (Prefix "rr:" not bound) at ^ in:
"...b': <http://www.w3.org/2000/01/rdf-schema#> .\n\n<#Professor> a '^b'rr:TriplesMap;\n        rr:logicalTable [ rr:tableName "profe'..."

---
File: https://raw.githubusercontent.com/ontop/ontop/version4/binding%2Fowlapi%2Fsrc%2Ftest%2Fresources%2Fnullif%2Fnullif.ttl parsed as ttl

In repository: https://github.com/ontop/ontop
> at line 1 of <>:
Bad syntax (expected directive or statement) at ^ in:
"b'PREFIX owl: <http://www.w3.org/2002/07/owl#> '^b'.\n\n<http://example.org/hasNumber> a owl:DataProperty .'"

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.20%2Ftypologies%2FIntrinsicAttributes-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/FleshWhiteColor> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/FleshWhiteColor> rdfs'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.20%2Ftypologies%2FGeopolitical-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/UrbanMunicipality-Germany> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/UrbanMunicipality-Ger'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.20%2Ftypologies%2FChemistry-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Elastin> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Elastin> rdfs:subClas'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.20%2Ftypologies%2FSituationTypes-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/NuclearAttack> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/NuclearAttack> rdfs:s'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.20%2Ftypologies%2FEconomicSystems-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/ContentsInsurance> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/ContentsInsurance> rd'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.20%2Ftypologies%2FOrganizations-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/HouseOfTudor> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/HouseOfTudor> rdfs:su'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.20%2Ftypologies%2FConceptualSystems-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Knife-Electric> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Knife-Electric> rdfs:'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.20%2Ftypologies%2FPlaces-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/AntarcticRegion> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/AntarcticRegion> rdfs'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.20%2Ftypologies%2FAssociatives-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/ConferenceProceedingsSeries> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/ConferenceProceedings'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.20%2Ftypologies%2FForms-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/FleshWhiteColor> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/FleshWhiteColor> rdfs'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.20%2Ftypologies%2FContextualAttributes-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/NewSchoolHipHop> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/NewSchoolHipHop> rdfs'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.20%2Ftypologies%2FAnimals-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Blephariceridae> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Blephariceridae> rdfs'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.20%2Ftypologies%2FSpaceTypes-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/HouseOfTudor> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/HouseOfTudor> rdfs:su'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.20%2Ftypologies%2FWrittenInfo-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/ContentsInsurance> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/ContentsInsurance> rd'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.20%2Ftypologies%2FEmergentKnowledge-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Emergence> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Emergence> rdfs:subCl'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.20%2Ftypologies%2FNaturalMatter-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Elastin> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Elastin> rdfs:subClas'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.20%2Ftypologies%2FProtistsFungus-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Acrasiomycota> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Acrasiomycota> rdfs:s'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.20%2Ftypologies%2FSociety-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/WestVirginiaCulture> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/WestVirginiaCulture> '..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.20%2Ftypologies%2FPersons-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/FleshWhiteColor> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/FleshWhiteColor> rdfs'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.20%2Ftypologies%2FEukaryotes-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Blephariceridae> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Blephariceridae> rdfs'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.20%2Ftypologies%2FIndexes-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/NewSchoolHipHop> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/NewSchoolHipHop> rdfs'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.20%2Ftypologies%2FPlants-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Brassicaceae> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Brassicaceae> rdfs:su'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.20%2Ftypologies%2FDirectRelations-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/LacrimalCanal> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/LacrimalCanal> rdfs:s'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.20%2Ftypologies%2FDiseases-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/PsychologicalAilment> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/PsychologicalAilment>'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.20%2Ftypologies%2FAudioInfo-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/NewSchoolHipHop> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/NewSchoolHipHop> rdfs'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.20%2Ftypologies%2FLocationPlace-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/UrbanMunicipality-Germany> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/UrbanMunicipality-Ger'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.20%2Ftypologies%2FConcepts-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/HouseOfTudor> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/HouseOfTudor> rdfs:su'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.20%2Ftypologies%2FVisualInfo-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/TVGameShow> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/TVGameShow> rdfs:subC'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.20%2Ftypologies%2FDrugs-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Pentobarbital> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Pentobarbital> rdfs:s'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.20%2Ftypologies%2FAtomsElements-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Meitnerium> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Meitnerium> rdfs:subC'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.20%2Ftypologies%2FConstituents-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Words> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Words> rdfs:subClassO'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.20%2Ftypologies%2FProducts-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Elastin> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Elastin> rdfs:subClas'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.20%2Ftypologies%2FStructuredInfo-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/ContentsInsurance> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/ContentsInsurance> rd'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.20%2Ftypologies%2FCopulativeRelations-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/HouseOfTudor> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/HouseOfTudor> rdfs:su'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.20%2Ftypologies%2FActionTypes-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/ChildGrooming> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/ChildGrooming> rdfs:s'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.20%2Ftypologies%2FFacilities-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Knife-Electric> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Knife-Electric> rdfs:'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.20%2Ftypologies%2FOrganicMatter-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Elastin> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Elastin> rdfs:subClas'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.20%2Ftypologies%2FTimeTypes-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Timekeeping> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Timekeeping> rdfs:sub'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.20%2Ftypologies%2FTopicsCategories-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Meitnerium> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Meitnerium> rdfs:subC'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.20%2Ftypologies%2FProkaryotes-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Bacterium-MotileByFlagellum> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Bacterium-MotileByFla'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.20%2Ftypologies%2FEventTypes-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/ChildGrooming> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/ChildGrooming> rdfs:s'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.20%2Ftypologies%2FShapes-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Elastin> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Elastin> rdfs:subClas'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.20%2Ftypologies%2FKnowledgeDomains-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/WestVirginiaCulture> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/WestVirginiaCulture> '..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.20%2Ftypologies%2FSocialSystems-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/ContentsInsurance> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/ContentsInsurance> rd'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.20%2Ftypologies%2FMethodeutic-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/TRIZ> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/TRIZ> rdfs:subClassOf'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.20%2Ftypologies%2FNaturalPhenomena-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/NewSchoolHipHop> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/NewSchoolHipHop> rdfs'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.20%2Ftypologies%2FSymbolic-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/HouseOfTudor> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/HouseOfTudor> rdfs:su'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.20%2Ftypologies%2FLearningProcesses-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/ContentsInsurance> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/ContentsInsurance> rd'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.20%2Ftypologies%2FAgents-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/HouseOfTudor> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/HouseOfTudor> rdfs:su'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.20%2Ftypologies%2FAdjunctualAttributes-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/FleshWhiteColor> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/FleshWhiteColor> rdfs'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.20%2Ftypologies%2FInformation-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/NewSchoolHipHop> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/NewSchoolHipHop> rdfs'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.20%2Ftypologies%2FTimes-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/SexualityInTheClassicalWorld> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/SexualityInTheClassic'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.20%2Ftypologies%2FInquiryMethods-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Morphism> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Morphism> rdfs:subCla'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.20%2Ftypologies%2FFoodDrink-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Elastin> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Elastin> rdfs:subClas'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.20%2Ftypologies%2FAreaRegion-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/AntarcticRegion> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/AntarcticRegion> rdfs'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.20%2Ftypologies%2FNaturalSubstances-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Meitnerium> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Meitnerium> rdfs:subC'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.20%2Ftypologies%2FAVInfo-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/TVGameShow> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/TVGameShow> rdfs:subC'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.20%2Ftypologies%2FRelationTypes-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/FunctionalRelation> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/FunctionalRelation> r'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.20%2Ftypologies%2FMediativeRelations-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/SportsAtTheWinterOlympics> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/SportsAtTheWinterOlym'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.20%2Ftypologies%2FDenotatives-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/NewSchoolHipHop> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/NewSchoolHipHop> rdfs'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.20%2Ftypologies%2FLivingThings-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Blephariceridae> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Blephariceridae> rdfs'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.20%2Ftypologies%2FOrganicChemistry-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Elastin> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Elastin> rdfs:subClas'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.20%2Ftypologies%2FBiologicalProcesses-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/CellularProcess> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/CellularProcess> rdfs'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.20%2Ftypologies%2FArtifacts-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/The2PillarsOfWisdom> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/The2PillarsOfWisdom> '..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.20%2Ftypologies%2FSystems-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/AutoAudioSystem> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/AutoAudioSystem> rdfs'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.20%2Ftypologies%2FManifestations-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Elastin> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Elastin> rdfs:subClas'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.50%2Ftypologies%2FIntrinsicAttributes-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/FleshWhiteColor> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/FleshWhiteColor> rdfs'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.50%2Ftypologies%2FGeopolitical-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/UrbanMunicipality-Germany> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/UrbanMunicipality-Ger'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.50%2Ftypologies%2FChemistry-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Meitnerium> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Meitnerium> rdfs:subC'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.50%2Ftypologies%2FSituationTypes-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Knife-Electric> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Knife-Electric> rdfs:'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.50%2Ftypologies%2FEconomicSystems-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/ContentsInsurance> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/ContentsInsurance> rd'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.50%2Ftypologies%2FOrganizations-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/HouseOfTudor> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/HouseOfTudor> rdfs:su'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.50%2Ftypologies%2FConceptualSystems-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Knife-Electric> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Knife-Electric> rdfs:'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.50%2Ftypologies%2FSecondarySectorProduct-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"...b'ttp://kbpedia.org/kko/rc/InMoldDecoratedInjectionMolding> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/InMoldDecoratedInject'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.50%2Ftypologies%2FTertiarySectorService-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/OffshoreEngineering> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/OffshoreEngineering> '..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.50%2Ftypologies%2FPlaces-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/AntarcticRegion> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/AntarcticRegion> rdfs'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.50%2Ftypologies%2FAssociatives-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/TVCommercial-IBT> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/TVCommercial-IBT> rdf'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.50%2Ftypologies%2FForms-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/FleshWhiteColor> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/FleshWhiteColor> rdfs'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.50%2Ftypologies%2FContextualAttributes-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/NewSchoolHipHop> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/NewSchoolHipHop> rdfs'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.50%2Ftypologies%2FAnimals-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Blephariceridae> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Blephariceridae> rdfs'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.50%2Ftypologies%2FSpaceTypes-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/HouseOfTudor> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/HouseOfTudor> rdfs:su'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.50%2Ftypologies%2FWrittenInfo-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Adware> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Adware> rdfs:subClass'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.50%2Ftypologies%2FEmergentKnowledge-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/KnowledgeGraph> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/KnowledgeGraph> rdfs:'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.50%2Ftypologies%2FNaturalMatter-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Meitnerium> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Meitnerium> rdfs:subC'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.50%2Ftypologies%2FProtistsFungus-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Acrasiomycota> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Acrasiomycota> rdfs:s'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.50%2Ftypologies%2FSociety-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/WestVirginiaCulture> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/WestVirginiaCulture> '..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.50%2Ftypologies%2FPersons-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/FleshWhiteColor> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/FleshWhiteColor> rdfs'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.50%2Ftypologies%2FEukaryotes-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/NFLCheerleader> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/NFLCheerleader> rdfs:'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.50%2Ftypologies%2FIndexes-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/NewSchoolHipHop> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/NewSchoolHipHop> rdfs'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.50%2Ftypologies%2FPlants-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Brassicaceae> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Brassicaceae> rdfs:su'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.50%2Ftypologies%2FDirectRelations-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/LacrimalCanal> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/LacrimalCanal> rdfs:s'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.50%2Ftypologies%2FDiseases-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/PsychologicalAilment> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/PsychologicalAilment>'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.50%2Ftypologies%2FAudioInfo-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/NewSchoolHipHop> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/NewSchoolHipHop> rdfs'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.50%2Ftypologies%2FLocationPlace-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/UrbanMunicipality-Germany> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/UrbanMunicipality-Ger'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.50%2Ftypologies%2FConcepts-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/HouseOfTudor> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/HouseOfTudor> rdfs:su'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.50%2Ftypologies%2FVisualInfo-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/TVGameShow> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/TVGameShow> rdfs:subC'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.50%2Ftypologies%2FDrugs-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/AnalgesicSynthesized> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/AnalgesicSynthesized>'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.50%2Ftypologies%2FAtomsElements-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Meitnerium> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Meitnerium> rdfs:subC'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.50%2Ftypologies%2FConstituents-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/KnowledgeGraph> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/KnowledgeGraph> rdfs:'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.50%2Ftypologies%2FProducts-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/WindowTreatment> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/WindowTreatment> rdfs'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.50%2Ftypologies%2FStructuredInfo-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Adware> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Adware> rdfs:subClass'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.50%2Ftypologies%2FCopulativeRelations-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/HouseOfTudor> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/HouseOfTudor> rdfs:su'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.50%2Ftypologies%2FActionTypes-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/ChildGrooming> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/ChildGrooming> rdfs:s'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.50%2Ftypologies%2FFacilities-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Knife-Electric> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Knife-Electric> rdfs:'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.50%2Ftypologies%2FOrganicMatter-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Elastin> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Elastin> rdfs:subClas'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.50%2Ftypologies%2FTimeTypes-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/TimeAsAQuantity-TimeTopic> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/TimeAsAQuantity-TimeT'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.50%2Ftypologies%2FTopicsCategories-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Meitnerium> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Meitnerium> rdfs:subC'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.50%2Ftypologies%2FProkaryotes-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Bacterium-MotileByFlagellum> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Bacterium-MotileByFla'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.50%2Ftypologies%2FEventTypes-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"...b'ttp://kbpedia.org/kko/rc/InMoldDecoratedInjectionMolding> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/InMoldDecoratedInject'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.50%2Ftypologies%2FShapes-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Elastin> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Elastin> rdfs:subClas'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.50%2Ftypologies%2FKnowledgeDomains-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Elastin> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Elastin> rdfs:subClas'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.50%2Ftypologies%2FSocialSystems-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/ContentsInsurance> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/ContentsInsurance> rd'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.50%2Ftypologies%2FMethodeutic-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/TRIZ> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/TRIZ> rdfs:subClassOf'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.50%2Ftypologies%2FNaturalPhenomena-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/NewSchoolHipHop> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/NewSchoolHipHop> rdfs'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.50%2Ftypologies%2FSymbolic-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/HouseOfTudor> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/HouseOfTudor> rdfs:su'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.50%2Ftypologies%2FLearningProcesses-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/ContentsInsurance> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/ContentsInsurance> rd'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.50%2Ftypologies%2FAgents-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/HouseOfTudor> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/HouseOfTudor> rdfs:su'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.50%2Ftypologies%2FAdjunctualAttributes-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"...b'ttp://kbpedia.org/kko/rc/InMoldDecoratedInjectionMolding> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/InMoldDecoratedInject'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.50%2Ftypologies%2FInformation-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/NewSchoolHipHop> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/NewSchoolHipHop> rdfs'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.50%2Ftypologies%2FTimes-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/SexualityInTheClassicalWorld> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/SexualityInTheClassic'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.50%2Ftypologies%2FInquiryMethods-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Morphism> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Morphism> rdfs:subCla'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.50%2Ftypologies%2FFoodDrink-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/PlumTree> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/PlumTree> rdfs:subCla'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.50%2Ftypologies%2FPrimarySectorProduct-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Elastin> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Elastin> rdfs:subClas'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.50%2Ftypologies%2FAreaRegion-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/AntarcticRegion> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/AntarcticRegion> rdfs'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.50%2Ftypologies%2FNaturalSubstances-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Meitnerium> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Meitnerium> rdfs:subC'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.50%2Ftypologies%2FAVInfo-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/TVGameShow> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/TVGameShow> rdfs:subC'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.50%2Ftypologies%2FRelationTypes-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/FunctionalRelation> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/FunctionalRelation> r'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.50%2Ftypologies%2FMediativeRelations-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/SportsAtTheWinterOlympics> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/SportsAtTheWinterOlym'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.50%2Ftypologies%2FDenotatives-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/TVCommercial-IBT> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/TVCommercial-IBT> rdf'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.50%2Ftypologies%2FLivingThings-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Blephariceridae> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Blephariceridae> rdfs'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.50%2Ftypologies%2FOrganicChemistry-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Elastin> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Elastin> rdfs:subClas'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.50%2Ftypologies%2FBiologicalProcesses-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/CellularProcess> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/CellularProcess> rdfs'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.50%2Ftypologies%2FArtifacts-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/The2PillarsOfWisdom> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/The2PillarsOfWisdom> '..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.50%2Ftypologies%2FSystems-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Modulator> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Modulator> rdfs:subCl'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.50%2Ftypologies%2FManifestations-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Elastin> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Elastin> rdfs:subClas'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.21%2Ftypologies%2FIntrinsicAttributes-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/FleshWhiteColor> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/FleshWhiteColor> rdfs'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.21%2Ftypologies%2FGeopolitical-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/UrbanMunicipality-Germany> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/UrbanMunicipality-Ger'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.21%2Ftypologies%2FChemistry-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Elastin> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Elastin> rdfs:subClas'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.21%2Ftypologies%2FSituationTypes-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/NuclearAttack> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/NuclearAttack> rdfs:s'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.21%2Ftypologies%2FEconomicSystems-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/ContentsInsurance> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/ContentsInsurance> rd'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.21%2Ftypologies%2FOrganizations-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/HouseOfTudor> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/HouseOfTudor> rdfs:su'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.21%2Ftypologies%2FConceptualSystems-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Knife-Electric> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Knife-Electric> rdfs:'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.21%2Ftypologies%2FPlaces-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/AntarcticRegion> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/AntarcticRegion> rdfs'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.21%2Ftypologies%2FAssociatives-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/ConferenceProceedingsSeries> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/ConferenceProceedings'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.21%2Ftypologies%2FForms-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/FleshWhiteColor> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/FleshWhiteColor> rdfs'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.21%2Ftypologies%2FContextualAttributes-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/NewSchoolHipHop> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/NewSchoolHipHop> rdfs'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.21%2Ftypologies%2FAnimals-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Blephariceridae> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Blephariceridae> rdfs'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.21%2Ftypologies%2FSpaceTypes-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/HouseOfTudor> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/HouseOfTudor> rdfs:su'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.21%2Ftypologies%2FWrittenInfo-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/ContentsInsurance> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/ContentsInsurance> rd'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.21%2Ftypologies%2FEmergentKnowledge-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Emergence> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Emergence> rdfs:subCl'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.21%2Ftypologies%2FNaturalMatter-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Elastin> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Elastin> rdfs:subClas'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.21%2Ftypologies%2FProtistsFungus-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Acrasiomycota> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Acrasiomycota> rdfs:s'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.21%2Ftypologies%2FSociety-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/WestVirginiaCulture> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/WestVirginiaCulture> '..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.21%2Ftypologies%2FPersons-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/FleshWhiteColor> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/FleshWhiteColor> rdfs'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.21%2Ftypologies%2FEukaryotes-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Blephariceridae> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Blephariceridae> rdfs'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.21%2Ftypologies%2FIndexes-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/NewSchoolHipHop> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/NewSchoolHipHop> rdfs'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.21%2Ftypologies%2FPlants-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Brassicaceae> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Brassicaceae> rdfs:su'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.21%2Ftypologies%2FDirectRelations-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/LacrimalCanal> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/LacrimalCanal> rdfs:s'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.21%2Ftypologies%2FDiseases-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/PsychologicalAilment> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/PsychologicalAilment>'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.21%2Ftypologies%2FAudioInfo-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/NewSchoolHipHop> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/NewSchoolHipHop> rdfs'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.21%2Ftypologies%2FLocationPlace-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/UrbanMunicipality-Germany> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/UrbanMunicipality-Ger'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.21%2Ftypologies%2FConcepts-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/HouseOfTudor> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/HouseOfTudor> rdfs:su'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.21%2Ftypologies%2FVisualInfo-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/TVGameShow> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/TVGameShow> rdfs:subC'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.21%2Ftypologies%2FDrugs-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Pentobarbital> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Pentobarbital> rdfs:s'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.21%2Ftypologies%2FAtomsElements-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Meitnerium> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Meitnerium> rdfs:subC'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.21%2Ftypologies%2FConstituents-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Words> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Words> rdfs:subClassO'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.21%2Ftypologies%2FProducts-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Elastin> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Elastin> rdfs:subClas'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.21%2Ftypologies%2FStructuredInfo-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/ContentsInsurance> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/ContentsInsurance> rd'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.21%2Ftypologies%2FCopulativeRelations-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/HouseOfTudor> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/HouseOfTudor> rdfs:su'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.21%2Ftypologies%2FActionTypes-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/ChildGrooming> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/ChildGrooming> rdfs:s'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.21%2Ftypologies%2FFacilities-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Knife-Electric> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Knife-Electric> rdfs:'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.21%2Ftypologies%2FOrganicMatter-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Elastin> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Elastin> rdfs:subClas'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.21%2Ftypologies%2FTimeTypes-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Timekeeping> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Timekeeping> rdfs:sub'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.21%2Ftypologies%2FTopicsCategories-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Meitnerium> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Meitnerium> rdfs:subC'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.21%2Ftypologies%2FProkaryotes-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Bacterium-MotileByFlagellum> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Bacterium-MotileByFla'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.21%2Ftypologies%2FEventTypes-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/ChildGrooming> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/ChildGrooming> rdfs:s'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.21%2Ftypologies%2FShapes-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Elastin> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Elastin> rdfs:subClas'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.21%2Ftypologies%2FKnowledgeDomains-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/WestVirginiaCulture> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/WestVirginiaCulture> '..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.21%2Ftypologies%2FSocialSystems-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/ContentsInsurance> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/ContentsInsurance> rd'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.21%2Ftypologies%2FMethodeutic-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/TRIZ> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/TRIZ> rdfs:subClassOf'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.21%2Ftypologies%2FNaturalPhenomena-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/NewSchoolHipHop> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/NewSchoolHipHop> rdfs'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.21%2Ftypologies%2FSymbolic-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/HouseOfTudor> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/HouseOfTudor> rdfs:su'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.21%2Ftypologies%2FLearningProcesses-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/ContentsInsurance> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/ContentsInsurance> rd'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.21%2Ftypologies%2FAgents-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/HouseOfTudor> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/HouseOfTudor> rdfs:su'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.21%2Ftypologies%2FAdjunctualAttributes-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/FleshWhiteColor> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/FleshWhiteColor> rdfs'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.21%2Ftypologies%2FInformation-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/NewSchoolHipHop> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/NewSchoolHipHop> rdfs'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.21%2Ftypologies%2FTimes-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/SexualityInTheClassicalWorld> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/SexualityInTheClassic'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.21%2Ftypologies%2FInquiryMethods-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Morphism> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Morphism> rdfs:subCla'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.21%2Ftypologies%2FFoodDrink-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Elastin> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Elastin> rdfs:subClas'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.21%2Ftypologies%2FAreaRegion-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/AntarcticRegion> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/AntarcticRegion> rdfs'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.21%2Ftypologies%2FNaturalSubstances-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Meitnerium> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Meitnerium> rdfs:subC'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.21%2Ftypologies%2FAVInfo-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/TVGameShow> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/TVGameShow> rdfs:subC'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.21%2Ftypologies%2FRelationTypes-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/FunctionalRelation> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/FunctionalRelation> r'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.21%2Ftypologies%2FMediativeRelations-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/SportsAtTheWinterOlympics> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/SportsAtTheWinterOlym'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.21%2Ftypologies%2FDenotatives-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/NewSchoolHipHop> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/NewSchoolHipHop> rdfs'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.21%2Ftypologies%2FLivingThings-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Blephariceridae> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Blephariceridae> rdfs'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.21%2Ftypologies%2FOrganicChemistry-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Elastin> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Elastin> rdfs:subClas'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.21%2Ftypologies%2FBiologicalProcesses-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/CellularProcess> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/CellularProcess> rdfs'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.21%2Ftypologies%2FArtifacts-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/The2PillarsOfWisdom> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/The2PillarsOfWisdom> '..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.21%2Ftypologies%2FSystems-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/AutoAudioSystem> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/AutoAudioSystem> rdfs'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.21%2Ftypologies%2FManifestations-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Elastin> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Elastin> rdfs:subClas'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F1.60%2Ftypologies%2FIntrinsicAttributes-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/FleshWhiteColor> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/FleshWhiteColor> rdfs'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F1.60%2Ftypologies%2FGeopolitical-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/WestVirginiaCulture> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/WestVirginiaCulture> '..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F1.60%2Ftypologies%2FChemistry-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Chemistry-Topic> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Chemistry-Topic> rdfs'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F1.60%2Ftypologies%2FSituationTypes-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/NuclearAttack> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/NuclearAttack> rdfs:s'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F1.60%2Ftypologies%2FEconomicSystems-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/ContentsInsurance> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/ContentsInsurance> rd'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F1.60%2Ftypologies%2FOrganizations-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/HouseOfTudor> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/HouseOfTudor> rdfs:su'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F1.60%2Ftypologies%2FConceptualSystems-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/GaugeTheories> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/GaugeTheories> rdfs:s'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F1.60%2Ftypologies%2FPlaces-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/WestVirginiaCulture> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/WestVirginiaCulture> '..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F1.60%2Ftypologies%2FAssociatives-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/ConferenceProceedingsSeries> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/ConferenceProceedings'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F1.60%2Ftypologies%2FForms-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/FleshWhiteColor> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/FleshWhiteColor> rdfs'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F1.60%2Ftypologies%2FContextualAttributes-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Widowed> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Widowed> rdfs:subClas'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F1.60%2Ftypologies%2FAnimals-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Blephariceridae> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Blephariceridae> rdfs'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F1.60%2Ftypologies%2FSpaceTypes-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/HouseOfTudor> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/HouseOfTudor> rdfs:su'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F1.60%2Ftypologies%2FWrittenInfo-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/ContentsInsurance> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/ContentsInsurance> rd'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F1.60%2Ftypologies%2FEmergentKnowledge-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Emergence> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Emergence> rdfs:subCl'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F1.60%2Ftypologies%2FNaturalMatter-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Meitnerium> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Meitnerium> rdfs:subC'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F1.60%2Ftypologies%2FProtistsFungus-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Acrasiomycota> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Acrasiomycota> rdfs:s'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F1.60%2Ftypologies%2FSociety-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/WestVirginiaCulture> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/WestVirginiaCulture> '..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F1.60%2Ftypologies%2FPersons-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/FleshWhiteColor> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/FleshWhiteColor> rdfs'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F1.60%2Ftypologies%2FEukaryotes-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Blephariceridae> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Blephariceridae> rdfs'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F1.60%2Ftypologies%2FIndexes-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/NewSchoolHipHop> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/NewSchoolHipHop> rdfs'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F1.60%2Ftypologies%2FPlants-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/PlumTree> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/PlumTree> rdfs:subCla'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F1.60%2Ftypologies%2FDirectRelations-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/WestVirginiaCulture> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/WestVirginiaCulture> '..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F1.60%2Ftypologies%2FDiseases-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/PsychologicalAilment> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/PsychologicalAilment>'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F1.60%2Ftypologies%2FAudioInfo-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/NewSchoolHipHop> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/NewSchoolHipHop> rdfs'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F1.60%2Ftypologies%2FLocationPlace-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/WestVirginiaCulture> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/WestVirginiaCulture> '..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F1.60%2Ftypologies%2FConcepts-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/HouseOfTudor> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/HouseOfTudor> rdfs:su'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F1.60%2Ftypologies%2FVisualInfo-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/TVGameShow> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/TVGameShow> rdfs:subC'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F1.60%2Ftypologies%2FDrugs-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Pentobarbital> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Pentobarbital> rdfs:s'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F1.60%2Ftypologies%2FAtomsElements-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Meitnerium> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Meitnerium> rdfs:subC'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F1.60%2Ftypologies%2FConstituents-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Paradoxes> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Paradoxes> rdfs:subCl'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F1.60%2Ftypologies%2FProducts-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Elastin> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Elastin> rdfs:subClas'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F1.60%2Ftypologies%2FStructuredInfo-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/ContentsInsurance> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/ContentsInsurance> rd'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F1.60%2Ftypologies%2FCopulativeRelations-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/HouseOfTudor> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/HouseOfTudor> rdfs:su'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F1.60%2Ftypologies%2FActionTypes-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/ChildGrooming> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/ChildGrooming> rdfs:s'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F1.60%2Ftypologies%2FFacilities-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Knife-Electric> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Knife-Electric> rdfs:'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F1.60%2Ftypologies%2FOrganicMatter-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Elastin> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Elastin> rdfs:subClas'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F1.60%2Ftypologies%2FTimeTypes-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Timekeeping> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Timekeeping> rdfs:sub'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F1.60%2Ftypologies%2FTopicsCategories-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Meitnerium> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Meitnerium> rdfs:subC'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F1.60%2Ftypologies%2FProkaryotes-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/PseudomonasPertucinogena> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/PseudomonasPertucinog'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F1.60%2Ftypologies%2FEventTypes-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/OffshoreEngineering> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/OffshoreEngineering> '..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F1.60%2Ftypologies%2FShapes-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Blephariceridae> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Blephariceridae> rdfs'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F1.60%2Ftypologies%2FKnowledgeDomains-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/WestVirginiaCulture> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/WestVirginiaCulture> '..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F1.60%2Ftypologies%2FSocialSystems-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/ContentsInsurance> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/ContentsInsurance> rd'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F1.60%2Ftypologies%2FMethodeutic-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/TeachingMethod> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/TeachingMethod> rdfs:'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F1.60%2Ftypologies%2FNaturalPhenomena-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/NewSchoolHipHop> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/NewSchoolHipHop> rdfs'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F1.60%2Ftypologies%2FSymbolic-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/HouseOfTudor> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/HouseOfTudor> rdfs:su'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F1.60%2Ftypologies%2FLearningProcesses-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"...b'ernativeTherapiesForDevelopmentalAndLearningDisabilities> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/AlternativeTherapiesF'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F1.60%2Ftypologies%2FAgents-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/HouseOfTudor> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/HouseOfTudor> rdfs:su'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F1.60%2Ftypologies%2FAdjunctualAttributes-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/FleshWhiteColor> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/FleshWhiteColor> rdfs'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F1.60%2Ftypologies%2FInformation-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/NewSchoolHipHop> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/NewSchoolHipHop> rdfs'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F1.60%2Ftypologies%2FTimes-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/SexualityInTheClassicalWorld> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/SexualityInTheClassic'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F1.60%2Ftypologies%2FInquiryMethods-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"...b'ttp://kbpedia.org/kko/rc/GraduateManagementAdmissionTest> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/GraduateManagementAdm'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F1.60%2Ftypologies%2FFoodDrink-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Elastin> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Elastin> rdfs:subClas'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F1.60%2Ftypologies%2FAreaRegion-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/AntarcticRegion> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/AntarcticRegion> rdfs'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F1.60%2Ftypologies%2FNaturalSubstances-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Meitnerium> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Meitnerium> rdfs:subC'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F1.60%2Ftypologies%2FAVInfo-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/TVGameShow> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/TVGameShow> rdfs:subC'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F1.60%2Ftypologies%2FRelationTypes-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/FunctionalRelation> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/FunctionalRelation> r'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F1.60%2Ftypologies%2FMediativeRelations-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/SportsAtTheWinterOlympics> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/SportsAtTheWinterOlym'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F1.60%2Ftypologies%2FDenotatives-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/TVCommercial-IBT> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/TVCommercial-IBT> rdf'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F1.60%2Ftypologies%2FLivingThings-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Widowed> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Widowed> rdfs:subClas'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F1.60%2Ftypologies%2FOrganicChemistry-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Elastin> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Elastin> rdfs:subClas'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F1.60%2Ftypologies%2FBiologicalProcesses-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/CellularRespiration-Aerobic> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/CellularRespiration-A'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F1.60%2Ftypologies%2FArtifacts-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/IndianCurries> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/IndianCurries> rdfs:s'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F1.60%2Ftypologies%2FSystems-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/AutoAudioSystem> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/AutoAudioSystem> rdfs'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F1.60%2Ftypologies%2FManifestations-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Elastin> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Elastin> rdfs:subClas'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F1.60%2Flinkages%2Fwikidata.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://www.wikidata.org/entity/Q127980> '^b'owl:equivalentClass <http://kbpedia.org/kko/rc/Fat> .\n<http:'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F1.60%2Flinkages%2Frss.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "rdfs:" not bound) at ^ in:
"b'<http://purl.org/rss/1.0/channel> '^b'rdfs:subClassOf <http://kbpedia.org/kko/rc/CommunicationChan'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F1.60%2Flinkages%2Ftime.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "kko:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/January> '^b'kko:superClassOf <http://www.w3.org/2006/time#January> .\n<ht'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F1.60%2Flinkages%2Fumbel.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://umbel.org/umbel/rc/Abnormal-Organism-Whole> '^b'owl:equivalentClass <http://kbpedia.org/kko/rc/Abnormal-Orga'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F1.60%2Flinkages%2Ffoaf.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "kko:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/IDDocument> '^b'kko:superClassOf <http://xmlns.com/foaf/0.1/PersonalProfileD'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F1.60%2Flinkages%2Fpo.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Broadcasting> '^b'owl:equivalentClass <http://purl.org/ontology/po/Broadcast> '..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F1.60%2Flinkages%2Fdbpedia-ontology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "kko:" not bound) at ^ in:
"b'<http://dbpedia.org/ontology/BiologicalDatabase> '^b'kko:superClassOf <http://kbpedia.org/kko/rc/MedicalDatabase>'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F1.60%2Flinkages%2Fcc.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/CopyrightLicense> '^b'owl:equivalentClass <http://creativecommons.org/ns#License> '..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F1.60%2Flinkages%2Foo.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "kko:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Agent-Generic> '^b'kko:superClassOf <http://purl.org/dc/terms/Agent> .\n<http://'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F1.60%2Flinkages%2Fdc.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "kko:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Encoding> '^b'kko:superClassOf <http://purl.org/dc/dcam/VocabularyEncoding'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F1.60%2Flinkages%2Ffrbr.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://purl.org/vocab/frbr/core#Concept> '^b'owl:equivalentClass <http:/kbpedia.org/kbpedia/rc/Concept> .'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F1.60%2Flinkages%2Fwikipedia.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://wikipedia.org/wiki/1-Amino-2-propanol> '^b'owl:equivalentClass <http://kbpedia.org/kko/rc/1-Amino-2-pro'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F1.60%2Flinkages%2Fbibo.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "rdfs:" not bound) at ^ in:
"b'<http://purl.org/ontology/bibo/AudioVisualDocument> '^b'rdfs:subClassOf <http://kbpedia.org/kko/rc/VideoConceptualWo'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F1.60%2Flinkages%2Fsioc.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/MessageThread> '^b'owl:equivalentClass <http://rdfs.org/sioc/ns#Thread> .\n<http'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F1.60%2Flinkages%2Forg.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "kko:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Business> '^b'kko:superClassOf <http://purl.org/goodrelations/v1#BusinessE'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F1.60%2Flinkages%2Ftransit.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "kko:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Fare> '^b'kko:superClassOf <http://vocab.org/transit/terms/Fare> .\n<ht'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F1.60%2Flinkages%2Fgeonames.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "kko:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Airfield> '^b'kko:superClassOf <http://www.geonames.org/ontology#S.AIRF> .'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F1.60%2Flinkages%2Fgeo.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/SpatialThing> '^b'owl:equivalentClass <http://www.w3.org/2003/01/geo/wgs84_pos'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F1.60%2Flinkages%2Fevent.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Event> '^b'owl:equivalentClass <http://purl.org/NET/c4dm/event.owl#Even'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F1.60%2Flinkages%2Fmo.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/MusicPerformanceAgent> '^b'owl:equivalentClass <http://purl.org/ontology/mo/MusicArtist'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F1.60%2Flinkages%2Fschema.org.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://schema.org/Abdomen> '^b'owl:equivalentClass <http://kbpedia.org/kko/rc/Abdomen> .\n<h'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F1.60%2Flinkages%2Fdoap.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "kko:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/InformationStore> '^b'kko:superClassOf <http://usefulinc.com/ns/doap#Repository> .'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.10%2Ftypologies%2FIntrinsicAttributes-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/FleshWhiteColor> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/FleshWhiteColor> rdfs'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.10%2Ftypologies%2FGeopolitical-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/UrbanMunicipality-Germany> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/UrbanMunicipality-Ger'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.10%2Ftypologies%2FChemistry-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Elastin> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Elastin> rdfs:subClas'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.10%2Ftypologies%2FSituationTypes-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/NuclearAttack> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/NuclearAttack> rdfs:s'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.10%2Ftypologies%2FEconomicSystems-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/ContentsInsurance> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/ContentsInsurance> rd'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.10%2Ftypologies%2FOrganizations-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/HouseOfTudor> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/HouseOfTudor> rdfs:su'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.10%2Ftypologies%2FConceptualSystems-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Knife-Electric> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Knife-Electric> rdfs:'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.10%2Ftypologies%2FPlaces-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/AntarcticRegion> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/AntarcticRegion> rdfs'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.10%2Ftypologies%2FAssociatives-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/ConferenceProceedingsSeries> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/ConferenceProceedings'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.10%2Ftypologies%2FForms-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/FleshWhiteColor> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/FleshWhiteColor> rdfs'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.10%2Ftypologies%2FContextualAttributes-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/NewSchoolHipHop> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/NewSchoolHipHop> rdfs'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.10%2Ftypologies%2FAnimals-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Blephariceridae> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Blephariceridae> rdfs'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.10%2Ftypologies%2FSpaceTypes-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/HouseOfTudor> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/HouseOfTudor> rdfs:su'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.10%2Ftypologies%2FWrittenInfo-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/ContentsInsurance> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/ContentsInsurance> rd'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.10%2Ftypologies%2FEmergentKnowledge-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Emergence> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Emergence> rdfs:subCl'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.10%2Ftypologies%2FNaturalMatter-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Elastin> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Elastin> rdfs:subClas'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.10%2Ftypologies%2FProtistsFungus-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Acrasiomycota> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Acrasiomycota> rdfs:s'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.10%2Ftypologies%2FSociety-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/WestVirginiaCulture> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/WestVirginiaCulture> '..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.10%2Ftypologies%2FPersons-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/FleshWhiteColor> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/FleshWhiteColor> rdfs'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.10%2Ftypologies%2FEukaryotes-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Blephariceridae> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Blephariceridae> rdfs'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.10%2Ftypologies%2FIndexes-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/NewSchoolHipHop> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/NewSchoolHipHop> rdfs'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.10%2Ftypologies%2FPlants-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/PlumTree> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/PlumTree> rdfs:subCla'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.10%2Ftypologies%2FDirectRelations-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/LacrimalCanal> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/LacrimalCanal> rdfs:s'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.10%2Ftypologies%2FDiseases-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/PsychologicalAilment> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/PsychologicalAilment>'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.10%2Ftypologies%2FAudioInfo-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/NewSchoolHipHop> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/NewSchoolHipHop> rdfs'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.10%2Ftypologies%2FLocationPlace-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/UrbanMunicipality-Germany> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/UrbanMunicipality-Ger'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.10%2Ftypologies%2FConcepts-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/HouseOfTudor> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/HouseOfTudor> rdfs:su'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.10%2Ftypologies%2FVisualInfo-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/TVGameShow> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/TVGameShow> rdfs:subC'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.10%2Ftypologies%2FDrugs-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Pentobarbital> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Pentobarbital> rdfs:s'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.10%2Ftypologies%2FAtomsElements-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Meitnerium> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Meitnerium> rdfs:subC'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.10%2Ftypologies%2FConstituents-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Words> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Words> rdfs:subClassO'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.10%2Ftypologies%2FProducts-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Elastin> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Elastin> rdfs:subClas'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.10%2Ftypologies%2FStructuredInfo-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/ContentsInsurance> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/ContentsInsurance> rd'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.10%2Ftypologies%2FCopulativeRelations-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/HouseOfTudor> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/HouseOfTudor> rdfs:su'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.10%2Ftypologies%2FActionTypes-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/ChildGrooming> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/ChildGrooming> rdfs:s'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.10%2Ftypologies%2FFacilities-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Knife-Electric> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Knife-Electric> rdfs:'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.10%2Ftypologies%2FOrganicMatter-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Elastin> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Elastin> rdfs:subClas'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.10%2Ftypologies%2FTimeTypes-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Timekeeping> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Timekeeping> rdfs:sub'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.10%2Ftypologies%2FTopicsCategories-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Meitnerium> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Meitnerium> rdfs:subC'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.10%2Ftypologies%2FProkaryotes-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/PseudomonasPertucinogena> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/PseudomonasPertucinog'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.10%2Ftypologies%2FEventTypes-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/ChildGrooming> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/ChildGrooming> rdfs:s'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.10%2Ftypologies%2FShapes-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Blephariceridae> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Blephariceridae> rdfs'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.10%2Ftypologies%2FKnowledgeDomains-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/WestVirginiaCulture> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/WestVirginiaCulture> '..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.10%2Ftypologies%2FSocialSystems-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/ContentsInsurance> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/ContentsInsurance> rd'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.10%2Ftypologies%2FMethodeutic-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/TeachingMethod> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/TeachingMethod> rdfs:'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.10%2Ftypologies%2FNaturalPhenomena-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/NewSchoolHipHop> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/NewSchoolHipHop> rdfs'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.10%2Ftypologies%2FSymbolic-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/HouseOfTudor> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/HouseOfTudor> rdfs:su'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.10%2Ftypologies%2FLearningProcesses-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/StandardModel> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/StandardModel> rdfs:s'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.10%2Ftypologies%2FAgents-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/HouseOfTudor> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/HouseOfTudor> rdfs:su'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.10%2Ftypologies%2FAdjunctualAttributes-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/FleshWhiteColor> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/FleshWhiteColor> rdfs'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.10%2Ftypologies%2FInformation-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/NewSchoolHipHop> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/NewSchoolHipHop> rdfs'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.10%2Ftypologies%2FTimes-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/SexualityInTheClassicalWorld> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/SexualityInTheClassic'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.10%2Ftypologies%2FInquiryMethods-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Morphism> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Morphism> rdfs:subCla'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.10%2Ftypologies%2FFoodDrink-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Elastin> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Elastin> rdfs:subClas'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.10%2Ftypologies%2FAreaRegion-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/AntarcticRegion> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/AntarcticRegion> rdfs'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.10%2Ftypologies%2FNaturalSubstances-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Meitnerium> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Meitnerium> rdfs:subC'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.10%2Ftypologies%2FAVInfo-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/TVGameShow> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/TVGameShow> rdfs:subC'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.10%2Ftypologies%2FRelationTypes-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/FunctionalRelation> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/FunctionalRelation> r'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.10%2Ftypologies%2FMediativeRelations-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/SportsAtTheWinterOlympics> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/SportsAtTheWinterOlym'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.10%2Ftypologies%2FDenotatives-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/NewSchoolHipHop> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/NewSchoolHipHop> rdfs'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.10%2Ftypologies%2FLivingThings-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Blephariceridae> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Blephariceridae> rdfs'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.10%2Ftypologies%2FOrganicChemistry-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Elastin> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Elastin> rdfs:subClas'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.10%2Ftypologies%2FBiologicalProcesses-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/CellularProcess> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/CellularProcess> rdfs'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.10%2Ftypologies%2FArtifacts-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/The2PillarsOfWisdom> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/The2PillarsOfWisdom> '..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.10%2Ftypologies%2FSystems-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/AutoAudioSystem> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/AutoAudioSystem> rdfs'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.10%2Ftypologies%2FManifestations-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Elastin> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Elastin> rdfs:subClas'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.00%2Ftypologies%2FIntrinsicAttributes-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/FleshWhiteColor> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/FleshWhiteColor> rdfs'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.00%2Ftypologies%2FGeopolitical-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/WesternEuropeanCountry> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/WesternEuropeanCountr'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.00%2Ftypologies%2FChemistry-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Elastin> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Elastin> rdfs:subClas'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.00%2Ftypologies%2FSituationTypes-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/NuclearAttack> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/NuclearAttack> rdfs:s'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.00%2Ftypologies%2FEconomicSystems-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/ContentsInsurance> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/ContentsInsurance> rd'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.00%2Ftypologies%2FOrganizations-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/HouseOfTudor> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/HouseOfTudor> rdfs:su'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.00%2Ftypologies%2FConceptualSystems-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Knife-Electric> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Knife-Electric> rdfs:'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.00%2Ftypologies%2FPlaces-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/AntarcticRegion> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/AntarcticRegion> rdfs'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.00%2Ftypologies%2FAssociatives-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/ConferenceProceedingsSeries> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/ConferenceProceedings'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.00%2Ftypologies%2FForms-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/FleshWhiteColor> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/FleshWhiteColor> rdfs'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.00%2Ftypologies%2FContextualAttributes-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Widowed> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Widowed> rdfs:subClas'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.00%2Ftypologies%2FAnimals-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Blephariceridae> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Blephariceridae> rdfs'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.00%2Ftypologies%2FSpaceTypes-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/HouseOfTudor> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/HouseOfTudor> rdfs:su'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.00%2Ftypologies%2FWrittenInfo-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/ContentsInsurance> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/ContentsInsurance> rd'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.00%2Ftypologies%2FEmergentKnowledge-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Emergence> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Emergence> rdfs:subCl'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.00%2Ftypologies%2FNaturalMatter-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Elastin> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Elastin> rdfs:subClas'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.00%2Ftypologies%2FProtistsFungus-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Acrasiomycota> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Acrasiomycota> rdfs:s'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.00%2Ftypologies%2FSociety-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/WestVirginiaCulture> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/WestVirginiaCulture> '..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.00%2Ftypologies%2FPersons-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/FleshWhiteColor> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/FleshWhiteColor> rdfs'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.00%2Ftypologies%2FEukaryotes-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Blephariceridae> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Blephariceridae> rdfs'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.00%2Ftypologies%2FIndexes-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/NewSchoolHipHop> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/NewSchoolHipHop> rdfs'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.00%2Ftypologies%2FPlants-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/PlumTree> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/PlumTree> rdfs:subCla'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.00%2Ftypologies%2FDirectRelations-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/LacrimalCanal> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/LacrimalCanal> rdfs:s'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.00%2Ftypologies%2FDiseases-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/PsychologicalAilment> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/PsychologicalAilment>'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.00%2Ftypologies%2FAudioInfo-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/NewSchoolHipHop> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/NewSchoolHipHop> rdfs'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.00%2Ftypologies%2FLocationPlace-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/WesternEuropeanCountry> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/WesternEuropeanCountr'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.00%2Ftypologies%2FConcepts-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/HouseOfTudor> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/HouseOfTudor> rdfs:su'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.00%2Ftypologies%2FVisualInfo-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/TVGameShow> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/TVGameShow> rdfs:subC'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.00%2Ftypologies%2FDrugs-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Pentobarbital> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Pentobarbital> rdfs:s'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.00%2Ftypologies%2FAtomsElements-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Meitnerium> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Meitnerium> rdfs:subC'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.00%2Ftypologies%2FConstituents-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Words> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Words> rdfs:subClassO'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.00%2Ftypologies%2FProducts-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Elastin> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Elastin> rdfs:subClas'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.00%2Ftypologies%2FStructuredInfo-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/ContentsInsurance> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/ContentsInsurance> rd'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.00%2Ftypologies%2FCopulativeRelations-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/HouseOfTudor> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/HouseOfTudor> rdfs:su'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.00%2Ftypologies%2FActionTypes-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/ChildGrooming> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/ChildGrooming> rdfs:s'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.00%2Ftypologies%2FFacilities-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Knife-Electric> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Knife-Electric> rdfs:'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.00%2Ftypologies%2FOrganicMatter-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Elastin> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Elastin> rdfs:subClas'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.00%2Ftypologies%2FTimeTypes-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Timekeeping> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Timekeeping> rdfs:sub'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.00%2Ftypologies%2FTopicsCategories-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Meitnerium> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Meitnerium> rdfs:subC'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.00%2Ftypologies%2FProkaryotes-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/PseudomonasPertucinogena> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/PseudomonasPertucinog'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.00%2Ftypologies%2FEventTypes-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/ChildGrooming> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/ChildGrooming> rdfs:s'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.00%2Ftypologies%2FShapes-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Blephariceridae> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Blephariceridae> rdfs'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.00%2Ftypologies%2FKnowledgeDomains-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/WestVirginiaCulture> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/WestVirginiaCulture> '..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.00%2Ftypologies%2FSocialSystems-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/ContentsInsurance> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/ContentsInsurance> rd'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.00%2Ftypologies%2FMethodeutic-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/TeachingMethod> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/TeachingMethod> rdfs:'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.00%2Ftypologies%2FNaturalPhenomena-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/NewSchoolHipHop> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/NewSchoolHipHop> rdfs'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.00%2Ftypologies%2FSymbolic-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/HouseOfTudor> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/HouseOfTudor> rdfs:su'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.00%2Ftypologies%2FLearningProcesses-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/StandardModel> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/StandardModel> rdfs:s'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.00%2Ftypologies%2FAgents-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/HouseOfTudor> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/HouseOfTudor> rdfs:su'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.00%2Ftypologies%2FAdjunctualAttributes-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/FleshWhiteColor> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/FleshWhiteColor> rdfs'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.00%2Ftypologies%2FInformation-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/NewSchoolHipHop> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/NewSchoolHipHop> rdfs'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.00%2Ftypologies%2FTimes-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/SexualityInTheClassicalWorld> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/SexualityInTheClassic'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.00%2Ftypologies%2FInquiryMethods-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Morphism> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Morphism> rdfs:subCla'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.00%2Ftypologies%2FFoodDrink-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Elastin> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Elastin> rdfs:subClas'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.00%2Ftypologies%2FAreaRegion-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/AntarcticRegion> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/AntarcticRegion> rdfs'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.00%2Ftypologies%2FNaturalSubstances-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Meitnerium> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Meitnerium> rdfs:subC'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.00%2Ftypologies%2FAVInfo-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/TVGameShow> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/TVGameShow> rdfs:subC'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.00%2Ftypologies%2FRelationTypes-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/FunctionalRelation> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/FunctionalRelation> r'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.00%2Ftypologies%2FMediativeRelations-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/SportsAtTheWinterOlympics> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/SportsAtTheWinterOlym'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.00%2Ftypologies%2FDenotatives-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/NewSchoolHipHop> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/NewSchoolHipHop> rdfs'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.00%2Ftypologies%2FLivingThings-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Blephariceridae> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Blephariceridae> rdfs'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.00%2Ftypologies%2FOrganicChemistry-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Elastin> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Elastin> rdfs:subClas'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.00%2Ftypologies%2FBiologicalProcesses-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/CellularProcess> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/CellularProcess> rdfs'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.00%2Ftypologies%2FArtifacts-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/The2PillarsOfWisdom> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/The2PillarsOfWisdom> '..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.00%2Ftypologies%2FSystems-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/AutoAudioSystem> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/AutoAudioSystem> rdfs'..."

---
File: https://raw.githubusercontent.com/Cognonto/kbpedia/master/versions%2F2.00%2Ftypologies%2FManifestations-typology.n3 parsed as n3

In repository: https://github.com/Cognonto/kbpedia
> at line 1 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'<http://kbpedia.org/kko/rc/Elastin> a '^b'owl:Class .\n<http://kbpedia.org/kko/rc/Elastin> rdfs:subClas'..."

---
File: https://raw.githubusercontent.com/obophenotype/human-phenotype-ontology/master/patterns%2Fpattern.owl parsed as xml

In repository: https://github.com/obophenotype/human-phenotype-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/patterns/pattern.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/obophenotype/human-phenotype-ontology/master/patterns%2Fdefinitions.owl parsed as xml

In repository: https://github.com/obophenotype/human-phenotype-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/patterns/definitions.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/obophenotype/human-phenotype-ontology/master/src%2Fpatterns%2Fpattern.owl parsed as xml

In repository: https://github.com/obophenotype/human-phenotype-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/patterns/pattern.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/obophenotype/human-phenotype-ontology/master/src%2Fpatterns%2Fdefinitions.owl parsed as xml

In repository: https://github.com/obophenotype/human-phenotype-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/patterns/definitions.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/obophenotype/human-phenotype-ontology/master/src%2Fontology%2Fhp_ncit_eq.owl parsed as xml

In repository: https://github.com/obophenotype/human-phenotype-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/ontology/hp_ncit_eq.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/obophenotype/human-phenotype-ontology/master/src%2Fontology%2Fhp-edit.owl parsed as xml

In repository: https://github.com/obophenotype/human-phenotype-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/ontology/hp-edit.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/obophenotype/human-phenotype-ontology/master/src%2Fontology%2Fhp-qc.owl parsed as xml

In repository: https://github.com/obophenotype/human-phenotype-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/ontology/hp-qc.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/obophenotype/human-phenotype-ontology/master/src%2Fontology%2Fhp-idranges.owl parsed as xml

In repository: https://github.com/obophenotype/human-phenotype-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/ontology/hp-idranges.owl:2:0: syntax error

---
File: https://raw.githubusercontent.com/obophenotype/human-phenotype-ontology/master/src%2Fontology%2Farchive%2Fhp_go-redundant.owl parsed as xml

In repository: https://github.com/obophenotype/human-phenotype-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/ontology/archive/hp_go-redundant.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/taurenshaman/semantic-web/master/data%2Fbeer.rdf parsed as xml

In repository: https://github.com/taurenshaman/semantic-web
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/data/beer.rdf:24:3315: two elements cannot use the same ID: 'file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/data/beer.rdf#Hops'

---
File: https://raw.githubusercontent.com/taurenshaman/semantic-web/master/data%2Flife%2FBiological+Taxonomy+Vocabulary+0.2+%28Core%29.rdf parsed as xml

In repository: https://github.com/taurenshaman/semantic-web
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/data/life/Biological%20Taxonomy%20Vocabulary%200.2%20%28Core%29.rdf:159:4: Property attr 'http://www.w3.org/1999/02/22-rdf-syntax-ns#datatype' now allowed here

---
File: https://raw.githubusercontent.com/taurenshaman/semantic-web/master/data%2Fontologi.es%2Fplace_arc.rdf parsed as xml

In repository: https://github.com/taurenshaman/semantic-web
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/data/ontologi.es/place_arc.rdf:1:1: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/taurenshaman/semantic-web/master/data%2Fontology.dumontierlab.com%2Fperiodic-table-complex.rdf parsed as xml

In repository: https://github.com/taurenshaman/semantic-web
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/data/ontology.dumontierlab.com/periodic-table-complex.rdf:37:90: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#Ontology

---
File: https://raw.githubusercontent.com/taurenshaman/semantic-web/master/data%2FPlans.owl parsed as xml

In repository: https://github.com/taurenshaman/semantic-web
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/data/Plans.owl:104:86: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#class

---
File: https://raw.githubusercontent.com/taurenshaman/semantic-web/master/data%2FProjectManagement.owl parsed as xml

In repository: https://github.com/taurenshaman/semantic-web
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/data/ProjectManagement.owl:558:10: Invalid property attribute URI: http://www.w3.org/1999/02/22-rdf-syntax-ns#resource

---
File: https://raw.githubusercontent.com/taurenshaman/semantic-web/master/data%2Fontology.eil.utoronto.ca%2Fgovstat.owl parsed as xml

In repository: https://github.com/taurenshaman/semantic-web
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/data/ontology.eil.utoronto.ca/govstat.owl:27:104: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#Literal

---
File: https://raw.githubusercontent.com/taurenshaman/semantic-web/master/data%2Fontology.eil.utoronto.ca%2Fkp.owl parsed as xml

In repository: https://github.com/taurenshaman/semantic-web
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/data/ontology.eil.utoronto.ca/kp.owl:35:100: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#Literal

---
File: https://raw.githubusercontent.com/taurenshaman/semantic-web/master/data%2Fontology.eil.utoronto.ca%2FGCI-Foundation.owl parsed as xml

In repository: https://github.com/taurenshaman/semantic-web
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/data/ontology.eil.utoronto.ca/GCI-Foundation.owl:47:92: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#Literal

---
File: https://raw.githubusercontent.com/taurenshaman/semantic-web/master/data%2Fontology.eil.utoronto.ca%2FGCI-Innovation.owl parsed as xml

In repository: https://github.com/taurenshaman/semantic-web
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/data/ontology.eil.utoronto.ca/GCI-Innovation.owl:54:70: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#Literal

---
File: https://raw.githubusercontent.com/taurenshaman/semantic-web/master/data%2Fontology.eil.utoronto.ca%2FGCI-Education.owl parsed as xml

In repository: https://github.com/taurenshaman/semantic-web
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/data/ontology.eil.utoronto.ca/GCI-Education.owl:50:92: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#Literal

---
File: https://raw.githubusercontent.com/taurenshaman/semantic-web/master/data%2Fontology.eil.utoronto.ca%2Ftrust.owl parsed as xml

In repository: https://github.com/taurenshaman/semantic-web
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/data/ontology.eil.utoronto.ca/trust.owl:35:77: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#Literal

---
File: https://raw.githubusercontent.com/taurenshaman/semantic-web/master/data%2Fontology.eil.utoronto.ca%2FInnovation-ISO+37120+Innovation+Theme+Indicators+Definitions.owl parsed as xml

In repository: https://github.com/taurenshaman/semantic-web
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/data/ontology.eil.utoronto.ca/Innovation-ISO%2037120%20Innovation%20Theme%20Indicators%20Definitions.owl:56:70: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#Literal

---
File: https://raw.githubusercontent.com/taurenshaman/semantic-web/master/data%2Fontology.eil.utoronto.ca%2Forganization.owl parsed as xml

In repository: https://github.com/taurenshaman/semantic-web
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/data/ontology.eil.utoronto.ca/organization.owl:31:98: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#Literal

---
File: https://raw.githubusercontent.com/taurenshaman/semantic-web/master/data%2Fontology.eil.utoronto.ca%2FEducation-ISO+37120+Education+Theme+Indicators+Definitions.owl parsed as xml

In repository: https://github.com/taurenshaman/semantic-web
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/data/ontology.eil.utoronto.ca/Education-ISO%2037120%20Education%20Theme%20Indicators%20Definitions.owl:50:41: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#Literal

---
File: https://raw.githubusercontent.com/taurenshaman/semantic-web/master/data%2Fontology.eil.utoronto.ca%2FISO37120.owl parsed as xml

In repository: https://github.com/taurenshaman/semantic-web
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/data/ontology.eil.utoronto.ca/ISO37120.owl:31:76: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#Literal

---
File: https://raw.githubusercontent.com/taurenshaman/semantic-web/master/data%2Fontology.eil.utoronto.ca%2Factivity.owl parsed as xml

In repository: https://github.com/taurenshaman/semantic-web
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/data/ontology.eil.utoronto.ca/activity.owl:21:100: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#Literal

---
File: https://raw.githubusercontent.com/taurenshaman/semantic-web/master/data%2Fontology.eil.utoronto.ca%2Fretail.owl parsed as xml

In repository: https://github.com/taurenshaman/semantic-web
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/data/ontology.eil.utoronto.ca/retail.owl:26:64: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#Literal

---
File: https://raw.githubusercontent.com/taurenshaman/semantic-web/master/data%2Fontology.eil.utoronto.ca%2Ficontact.owl parsed as xml

In repository: https://github.com/taurenshaman/semantic-web
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/data/ontology.eil.utoronto.ca/icontact.owl:41:125: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#Literal

---
File: https://raw.githubusercontent.com/taurenshaman/semantic-web/master/data%2Fontology.eil.utoronto.ca%2Fopen311.owl parsed as xml

In repository: https://github.com/taurenshaman/semantic-web
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/data/ontology.eil.utoronto.ca/open311.owl:42:92: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#Literal

---
File: https://raw.githubusercontent.com/taurenshaman/semantic-web/master/data%2Fontology.eil.utoronto.ca%2FCity+of+Toronto+2013+ISO+37120+Indicators%2FShelter+Theme+Indicators%2FISO37120_15_2013_TO.owl parsed as xml

In repository: https://github.com/taurenshaman/semantic-web
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/data/ontology.eil.utoronto.ca/City%20of%20Toronto%202013%20ISO%2037120%20Indicators/Shelter%20Theme%20Indicators/ISO37120_15_2013_TO.owl:46:92: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#Literal

---
File: https://raw.githubusercontent.com/taurenshaman/semantic-web/master/data%2Fontology.eil.utoronto.ca%2FCity+of+Toronto+2013+ISO+37120+Indicators%2FEducation+Theme+Indicators%2FISO37120_6_2013_TO.owl parsed as xml

In repository: https://github.com/taurenshaman/semantic-web
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/data/ontology.eil.utoronto.ca/City%20of%20Toronto%202013%20ISO%2037120%20Indicators/Education%20Theme%20Indicators/ISO37120_6_2013_TO.owl:46:92: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#Literal

---
File: https://raw.githubusercontent.com/taurenshaman/semantic-web/master/data%2FSWEET%2F2.2%2FreprSciUnits.owl parsed as xml

In repository: https://github.com/taurenshaman/semantic-web
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/data/SWEET/2.2/reprSciUnits.owl:714:2: two elements cannot use the same ID: 'http://sweet.jpl.nasa.gov/2.2/reprSciUnits.owl#lux'

---
File: https://raw.githubusercontent.com/taurenshaman/semantic-web/master/data%2Fw3id.org%2Fengineering-vocabulary.owl parsed as xml

In repository: https://github.com/taurenshaman/semantic-web
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/data/w3id.org/engineering-vocabulary.owl:1:0: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/taurenshaman/semantic-web/master/data%2Fdaml%2Fowl-s+1.2%2FServiceParameter.owl parsed as xml

In repository: https://github.com/taurenshaman/semantic-web
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/data/daml/owl-s%201.2/ServiceParameter.owl:80:2: two elements cannot use the same ID: 'http://www.daml.org/services/owl-s/1.2/ServiceParameter.owl#serviceParameter'

---
File: https://raw.githubusercontent.com/taurenshaman/semantic-web/master/data%2FeBiquity%2Fassertion.owl parsed as xml

In repository: https://github.com/taurenshaman/semantic-web
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/data/eBiquity/assertion.owl:279:2: two elements cannot use the same ID: 'http://ebiquity.umbc.edu/ontology/assertion.owl#hasResource'

---
File: https://raw.githubusercontent.com/taurenshaman/semantic-web/master/data%2Flike%28Ultra-simple+Review+Vocabulary%29.ttl parsed as ttl

In repository: https://github.com/taurenshaman/semantic-web
> at line 159 of <>:
Bad syntax (expected directive or statement) at ^ in:
"...b' ## ## ## ## ## ##\n\n# Imply flattened form from reified form'^b'.\n{ ?person like:opinion [ a like:PositiveOpinion ; like:reg'..."

---
File: https://raw.githubusercontent.com/taurenshaman/semantic-web/master/data%2Fw3id.org%2Ffunction%2Ffunctions.ttl parsed as ttl

In repository: https://github.com/taurenshaman/semantic-web
> at line 32 of <>:
Bad syntax (Prefix "xsd:" not bound) at ^ in:
"...b'e "Ben De Meester"@en\n  ];\n  dcterms:modified "2016-06-16"^^'^b'xsd:date;\n  cc:license <http://creativecommons.org/license/b'..."

---
File: https://raw.githubusercontent.com/taurenshaman/semantic-web/master/data%2Fw3.org%2Fw3-adms.ttl parsed as ttl

In repository: https://github.com/taurenshaman/semantic-web
> at line 26 of <>:
Bad syntax (']' expected) at ^ in:
"...b'p://www.w3.org/People/all#phila>;\n  \tfoaf:name "Phil Archer"'^b'.] ,\n    [schema:affiliation [foaf:homepage <http://ies.jrc.'..."

---
File: https://raw.githubusercontent.com/taurenshaman/semantic-web/master/data%2Fw3.org%2Fcsvw.ttl parsed as ttl

In repository: https://github.com/taurenshaman/semantic-web
> 'utf-8' codec can't decode byte 0xc3 in position 1956: invalid continuation byte

---
File: https://raw.githubusercontent.com/taurenshaman/semantic-web/master/data%2Fw3.org%2Fw3-person.ttl parsed as ttl

In repository: https://github.com/taurenshaman/semantic-web
> at line 66 of <>:
Bad syntax (objectList expected) at ^ in:
"...b'mple. In Bulgaria and Russia, patronymic names are in every '^b'day usage, for example, the &quot;Sergeyevich&quot; (\xd0\xa1\xd0\xb5\xd1\x80\xd0'..."

---
File: https://raw.githubusercontent.com/taurenshaman/semantic-web/master/data%2Fontologydesignpatterns.org%2Fregorg.ttl parsed as ttl

In repository: https://github.com/taurenshaman/semantic-web
> at line 24 of <>:
Bad syntax (']' expected) at ^ in:
"...b'Archer"@en;\n    schema:affiliation [foaf:name "W3C/ERCIM"@en'^b'.]],\n    [rdfs:seeAlso <http://andrea-perego.name/foaf/#me>;'..."

---
File: https://raw.githubusercontent.com/geneontology/go-ontology/master/src%2Fontology%2Fgo-idranges.owl parsed as xml

In repository: https://github.com/geneontology/go-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/ontology/go-idranges.owl:1:0: syntax error

---
File: https://raw.githubusercontent.com/geneontology/go-ontology/master/src%2Fontology%2Fimports%2Fgo-taxon-groupings-edit.owl parsed as xml

In repository: https://github.com/geneontology/go-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/ontology/imports/go-taxon-groupings-edit.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/geneontology/go-ontology/master/src%2Fontology%2Fextensions%2Flegorel.owl parsed as xml

In repository: https://github.com/geneontology/go-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/ontology/extensions/legorel.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/geneontology/go-ontology/master/src%2Fontology%2Fextensions%2Fgo-gci.owl parsed as xml

In repository: https://github.com/geneontology/go-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/ontology/extensions/go-gci.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/geneontology/go-ontology/master/src%2Fontology%2Fextensions%2Fgorel-edit.owl parsed as xml

In repository: https://github.com/geneontology/go-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/ontology/extensions/gorel-edit.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/geneontology/go-ontology/master/src%2Fontology%2Fextensions%2Fgo-bridge.owl parsed as xml

In repository: https://github.com/geneontology/go-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/ontology/extensions/go-bridge.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/geneontology/go-ontology/master/src%2Fontology%2Fextensions%2Fgo-modules-annotations.owl parsed as xml

In repository: https://github.com/geneontology/go-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/ontology/extensions/go-modules-annotations.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/geneontology/go-ontology/master/src%2Fontology%2Fextensions%2Fgo-upper.obo

In repository: https://github.com/geneontology/go-ontology
> local variable 'header' referenced before assignment

---
File: https://raw.githubusercontent.com/ESIPFed/sweet/master/ci%2Fontology%2Fsweet-edit.owl parsed as xml

In repository: https://github.com/ESIPFed/sweet
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/ci/ontology/sweet-edit.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/ESIPFed/sweet/master/ci%2Fontology%2Fsweet-idranges.owl parsed as xml

In repository: https://github.com/ESIPFed/sweet
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/ci/ontology/sweet-idranges.owl:1:0: syntax error

---
File: https://raw.githubusercontent.com/Galigator/openllet/integration/tests%2Fsrc%2Ftest%2Fresources%2Ftest%2Fdata%2Fsparql-dawg-tests%2Ftest-manifest.n3 parsed as n3

In repository: https://github.com/Galigator/openllet
> at line 82 of <>:
Bad syntax (newline found in string literal) at ^ in:
"...b'ment "A type of test specifically for syntax testing. Syntax'^b'\n      tests are not required to have an associated result, '..."

---
File: https://raw.githubusercontent.com/Galigator/openllet/integration/module-jena%2Fsrc%2Ftest%2Fresources%2Fjena-datatypes.owl parsed as xml

In repository: https://github.com/Galigator/openllet
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/module-jena/src/test/resources/jena-datatypes.owl:1:0: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/Galigator/openllet/integration/tests%2Fsrc%2Ftest%2Fresources%2Ftest%2Fdata%2Fmodularity%2Fgalen.owl parsed as xml

In repository: https://github.com/Galigator/openllet
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/tests/src/test/resources/test/data/modularity/galen.owl:39380:0: rdf:ID value is not a valid NCName: 1.0

---
File: https://raw.githubusercontent.com/Galigator/openllet/integration/tests%2Fsrc%2Ftest%2Fresources%2Ftest%2Fdata%2Fswrl-test%2Fmisc%2FbasicFamilyRules.owl parsed as xml

In repository: https://github.com/Galigator/openllet
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/tests/src/test/resources/test/data/swrl-test/misc/basicFamilyRules.owl:34:15: two elements cannot use the same ID: 'http://www.csc.liv.ac.uk/~luigi/basicFamily/rules#x'

---
File: https://raw.githubusercontent.com/Galigator/openllet/integration/tests%2Fsrc%2Ftest%2Fresources%2Ftest%2Fdata%2Fliebig-tests%2F29a.owl parsed as xml

In repository: https://github.com/Galigator/openllet
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/tests/src/test/resources/test/data/liebig-tests/29a.owl:38:0: two elements cannot use the same ID: 'http://www.informatik.uni-ulm.de/ki/Liebig/reasoner-eval/29a.owl#rs3'

---
File: https://raw.githubusercontent.com/Galigator/openllet/integration/tests%2Fsrc%2Ftest%2Fresources%2Ftest%2Fdata%2Fliebig-tests%2F29.owl parsed as xml

In repository: https://github.com/Galigator/openllet
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/tests/src/test/resources/test/data/liebig-tests/29.owl:38:0: two elements cannot use the same ID: 'http://www.informatik.uni-ulm.de/ki/Liebig/reasoner-eval/29.owl#rs3'

---
File: https://raw.githubusercontent.com/Galigator/openllet/integration/tests%2Fsrc%2Ftest%2Fresources%2Ftest%2Fdata%2Fliebig-tests%2F29b.owl parsed as xml

In repository: https://github.com/Galigator/openllet
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/tests/src/test/resources/test/data/liebig-tests/29b.owl:37:0: two elements cannot use the same ID: 'file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/tests/src/test/resources/test/data/liebig-tests/29b.owl#rs3'

---
File: https://raw.githubusercontent.com/Galigator/openllet/integration/module-owlapi%2Fsrc%2Ftest%2Fresources%2Ftest_data%2Frestriction_conjonction.owl parsed as xml

In repository: https://github.com/Galigator/openllet
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/module-owlapi/src/test/resources/test_data/restriction_conjonction.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/Galigator/openllet/integration/tests%2Fsrc%2Ftest%2Fresources%2Ftest%2Fdata%2Fsparqldl-tests%2Fsimple%2Fowl2ConstructorsData6.ttl parsed as ttl

In repository: https://github.com/Galigator/openllet
> at line 1 of <>:
Bad syntax (expected directive or statement) at ^ in:
"...b'prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> . '^b'\r@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .\r@pr'..."

---
File: https://raw.githubusercontent.com/Galigator/openllet/integration/tests%2Fsrc%2Ftest%2Fresources%2Ftest%2Fdata%2Fsparqldl-tests%2Fsimple%2Fowl2ConstructorsData3.ttl parsed as ttl

In repository: https://github.com/Galigator/openllet
> at line 1 of <>:
Bad syntax (expected directive or statement) at ^ in:
"...b'prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> . '^b'\r@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .\r@pr'..."

---
File: https://raw.githubusercontent.com/Galigator/openllet/integration/tests%2Fsrc%2Ftest%2Fresources%2Ftest%2Fdata%2Fsparqldl-tests%2Fsimple%2Fparent.ttl parsed as ttl

In repository: https://github.com/Galigator/openllet
> at line 1 of <>:
Bad syntax (expected directive or statement) at ^ in:
"...b'prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> . '^b'\r@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .\r@pr'..."

---
File: https://raw.githubusercontent.com/Galigator/openllet/integration/tests%2Fsrc%2Ftest%2Fresources%2Ftest%2Fdata%2Fsparqldl-tests%2Fsimple%2Fowl2ConstructorsData4.ttl parsed as ttl

In repository: https://github.com/Galigator/openllet
> at line 1 of <>:
Bad syntax (expected directive or statement) at ^ in:
"...b'prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> . '^b'\r@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .\r@pr'..."

---
File: https://raw.githubusercontent.com/Galigator/openllet/integration/tests%2Fsrc%2Ftest%2Fresources%2Ftest%2Fdata%2Fsparqldl-tests%2Fsimple%2Fowl2ConstructorsData1.ttl parsed as ttl

In repository: https://github.com/Galigator/openllet
> at line 1 of <>:
Bad syntax (expected directive or statement) at ^ in:
"...b'prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> . '^b'\r@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .\r@pr'..."

---
File: https://raw.githubusercontent.com/Galigator/openllet/integration/tests%2Fsrc%2Ftest%2Fresources%2Ftest%2Fdata%2Fsparqldl-tests%2Fsimple%2Fowl2ConstructorsData5.ttl parsed as ttl

In repository: https://github.com/Galigator/openllet
> at line 1 of <>:
Bad syntax (expected directive or statement) at ^ in:
"...b'prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> . '^b'\r@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .\r@pr'..."

---
File: https://raw.githubusercontent.com/Galigator/openllet/integration/tests%2Fsrc%2Ftest%2Fresources%2Ftest%2Fdata%2Fsparqldl-tests%2Fsimple%2Fsimple.ttl parsed as ttl

In repository: https://github.com/Galigator/openllet
> at line 1 of <>:
Bad syntax (expected directive or statement) at ^ in:
"...b'prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> . '^b'\r@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .\r@pr'..."

---
File: https://raw.githubusercontent.com/Galigator/openllet/integration/tests%2Fsrc%2Ftest%2Fresources%2Ftest%2Fdata%2Fsparqldl-tests%2Fsimple%2Flang.ttl parsed as ttl

In repository: https://github.com/Galigator/openllet
> at line 1 of <>:
Bad syntax (expected directive or statement) at ^ in:
"...b'prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> . '^b'\r@prefix foaf: <http://xmlns.com/foaf/0.1/> .\r@prefix : <htt'..."

---
File: https://raw.githubusercontent.com/Galigator/openllet/integration/tests%2Fsrc%2Ftest%2Fresources%2Ftest%2Fdata%2Fsparqldl-tests%2Fsimple%2Fowl2ConstructorsData2.ttl parsed as ttl

In repository: https://github.com/Galigator/openllet
> at line 1 of <>:
Bad syntax (expected directive or statement) at ^ in:
"...b'prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> . '^b'\r@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .\r@pr'..."

---
File: https://raw.githubusercontent.com/monarch-initiative/mondo/master/src%2Fpatterns%2Fdosdp-pattern.owl parsed as xml

In repository: https://github.com/monarch-initiative/mondo
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/patterns/dosdp-pattern.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/monarch-initiative/mondo/master/src%2Fpatterns%2Fcomponents%2Fpattern-ontology-remove-axioms.owl parsed as xml

In repository: https://github.com/monarch-initiative/mondo
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/patterns/components/pattern-ontology-remove-axioms.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/monarch-initiative/mondo/master/src%2Fontology%2Fmondo-idranges.owl parsed as xml

In repository: https://github.com/monarch-initiative/mondo
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/ontology/mondo-idranges.owl:1:0: syntax error

---
File: https://raw.githubusercontent.com/monarch-initiative/mondo/master/src%2Fontology%2Fmodules%2Fequivs.owl parsed as xml

In repository: https://github.com/monarch-initiative/mondo
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/ontology/modules/equivs.owl:1:0: syntax error

---
File: https://raw.githubusercontent.com/monarch-initiative/mondo/master/src%2Fontology%2Fmodules%2Fdisease_by_location.owl parsed as xml

In repository: https://github.com/monarch-initiative/mondo
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/ontology/modules/disease_by_location.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/monarch-initiative/mondo/master/scratch%2Fvicc.obo

In repository: https://github.com/monarch-initiative/mondo
> local variable 'header' referenced before assignment

---
File: https://raw.githubusercontent.com/monarch-initiative/mondo/master/src%2Fsparql%2Fbad.obo

In repository: https://github.com/monarch-initiative/mondo
> local variable 'header' referenced before assignment

---
File: https://raw.githubusercontent.com/monarch-initiative/mondo/master/src%2Fontology%2Fomim-exclusion-set.obo

In repository: https://github.com/monarch-initiative/mondo
> local variable 'header' referenced before assignment

---
File: https://raw.githubusercontent.com/monarch-initiative/mondo/master/src%2Fontology%2Freports%2Freasoner-diff.obo

In repository: https://github.com/monarch-initiative/mondo
> local variable 'header' referenced before assignment

---
File: https://raw.githubusercontent.com/RDFLib/pyLODE/master/pylode%2Ftests%2Ftest_broken_rdf.ttl parsed as ttl

In repository: https://github.com/RDFLib/pyLODE
> at line 11 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"...b'Schema#> .\n\n@prefix : <http://example-ontology.org/> .\n\n: a '^b'owl:Ontology .\n\n# normal, basic\n:testprop\n    a owl:ObjectPr'..."

---
File: https://raw.githubusercontent.com/SANSA-Stack/Archived-SANSA-ML/master/sansa-ml-spark%2Fsrc%2Ftest%2Fresources%2FClassification%2Font_functional.owl parsed as xml

In repository: https://github.com/SANSA-Stack/Archived-SANSA-ML
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/sansa-ml-spark/src/test/resources/Classification/ont_functional.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/SANSA-Stack/Archived-SANSA-ML/master/sansa-ml-spark%2Fsrc%2Ftest%2Fresources%2FClassification%2Ftrains.owl parsed as xml

In repository: https://github.com/SANSA-Stack/Archived-SANSA-ML
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/sansa-ml-spark/src/test/resources/Classification/trains.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/Ebiquity/Unified-Cybersecurity-Ontology/master/uco_1_5.owl parsed as xml

In repository: https://github.com/Ebiquity/Unified-Cybersecurity-Ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/uco_1_5.owl:673:32: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#Class

---
File: https://raw.githubusercontent.com/obophenotype/cell-ontology/master/imports%2Fnif_import.owl parsed as xml

In repository: https://github.com/obophenotype/cell-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/imports/nif_import.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/obophenotype/cell-ontology/master/patterns%2Fpattern.owl parsed as xml

In repository: https://github.com/obophenotype/cell-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/patterns/pattern.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/obophenotype/cell-ontology/master/patterns%2Fdefinitions.owl parsed as xml

In repository: https://github.com/obophenotype/cell-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/patterns/definitions.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/obophenotype/cell-ontology/master/src%2Fpatterns%2Fpattern.owl parsed as xml

In repository: https://github.com/obophenotype/cell-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/patterns/pattern.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/obophenotype/cell-ontology/master/src%2Fpatterns%2Fdefinitions.owl parsed as xml

In repository: https://github.com/obophenotype/cell-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/patterns/definitions.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/obophenotype/cell-ontology/master/src%2Fontology%2Fcl-edit.owl parsed as xml

In repository: https://github.com/obophenotype/cell-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/ontology/cl-edit.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/obophenotype/cell-ontology/master/src%2Fontology%2Fcl-removedaxioms.owl parsed as xml

In repository: https://github.com/obophenotype/cell-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/ontology/cl-removedaxioms.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/obophenotype/cell-ontology/master/src%2Fontology%2Fcl-refactored.owl parsed as xml

In repository: https://github.com/obophenotype/cell-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/ontology/cl-refactored.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/obophenotype/cell-ontology/master/src%2Fontology%2Fcl-idranges.owl parsed as xml

In repository: https://github.com/obophenotype/cell-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/ontology/cl-idranges.owl:1:1: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/obophenotype/cell-ontology/master/src%2Fontology%2Fimports%2Fnif_import.owl parsed as xml

In repository: https://github.com/obophenotype/cell-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/ontology/imports/nif_import.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/obophenotype/cell-ontology/master/src%2Fontology%2Fimports%2Fro_seed.owl parsed as xml

In repository: https://github.com/obophenotype/cell-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/ontology/imports/ro_seed.owl:1:0: syntax error

---
File: https://raw.githubusercontent.com/MaastrichtU-IDS/semanticscience/master/wiki%2Fregistry-example.n3 parsed as n3

In repository: https://github.com/MaastrichtU-IDS/semanticscience
> at line 3 of <>:
Bad syntax (expected directive or statement) at ^ in:
"b'# http://code.google.com/p/semanticscience/wiki/Registry\n\n'^b'prefix dcterms: <http://purl.org/dc/terms/>\nprefix registry:'..."

---
File: https://raw.githubusercontent.com/MaastrichtU-IDS/semanticscience/master/wiki%2Fserv_example.owl parsed as xml

In repository: https://github.com/MaastrichtU-IDS/semanticscience
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/wiki/serv_example.owl:40:41: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/MaastrichtU-IDS/semanticscience/master/OnToology%2Fwiki%2Fserv_example.owl parsed as xml

In repository: https://github.com/MaastrichtU-IDS/semanticscience
> [Errno 21] Is a directory: '/home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/OnToology/wiki/serv_example.owl'

---
File: https://raw.githubusercontent.com/MaastrichtU-IDS/semanticscience/master/OnToology%2Fwiki%2Fserv.owl parsed as xml

In repository: https://github.com/MaastrichtU-IDS/semanticscience
> [Errno 21] Is a directory: '/home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/OnToology/wiki/serv.owl'

---
File: https://raw.githubusercontent.com/MaastrichtU-IDS/semanticscience/master/OnToology%2Fontology%2Fsio.owl parsed as xml

In repository: https://github.com/MaastrichtU-IDS/semanticscience
> [Errno 21] Is a directory: '/home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/OnToology/ontology/sio.owl'

---
File: https://raw.githubusercontent.com/MaastrichtU-IDS/semanticscience/master/OnToology%2Fontology%2Fsio%2Frelease%2Fsio-subset-math.owl parsed as xml

In repository: https://github.com/MaastrichtU-IDS/semanticscience
> [Errno 21] Is a directory: '/home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/OnToology/ontology/sio/release/sio-subset-math.owl'

---
File: https://raw.githubusercontent.com/MaastrichtU-IDS/semanticscience/master/OnToology%2Fontology%2Fsio%2Frelease%2Fsio-release.owl parsed as xml

In repository: https://github.com/MaastrichtU-IDS/semanticscience
> [Errno 21] Is a directory: '/home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/OnToology/ontology/sio/release/sio-release.owl'

---
File: https://raw.githubusercontent.com/MaastrichtU-IDS/semanticscience/master/OnToology%2Fontology%2Fsio%2Frelease%2Fsio-subset-core.owl parsed as xml

In repository: https://github.com/MaastrichtU-IDS/semanticscience
> [Errno 21] Is a directory: '/home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/OnToology/ontology/sio/release/sio-subset-core.owl'

---
File: https://raw.githubusercontent.com/MaastrichtU-IDS/semanticscience/master/OnToology%2Fontology%2Fsio%2Frelease%2Fsio-subset-capability.owl parsed as xml

In repository: https://github.com/MaastrichtU-IDS/semanticscience
> [Errno 21] Is a directory: '/home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/OnToology/ontology/sio/release/sio-subset-capability.owl'

---
File: https://raw.githubusercontent.com/MaastrichtU-IDS/semanticscience/master/OnToology%2Fontology%2Fsio%2Frelease%2Fsio-subset-ovopub.owl parsed as xml

In repository: https://github.com/MaastrichtU-IDS/semanticscience
> [Errno 21] Is a directory: '/home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/OnToology/ontology/sio/release/sio-subset-ovopub.owl'

---
File: https://raw.githubusercontent.com/MaastrichtU-IDS/semanticscience/master/OnToology%2Fontology%2Fsio%2Frelease%2Fsio-subset-labels.owl parsed as xml

In repository: https://github.com/MaastrichtU-IDS/semanticscience
> [Errno 21] Is a directory: '/home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/OnToology/ontology/sio/release/sio-subset-labels.owl'

---
File: https://raw.githubusercontent.com/MaastrichtU-IDS/semanticscience/master/OnToology%2Fontology%2Fsio%2Frelease%2Fsio-subset-process.owl parsed as xml

In repository: https://github.com/MaastrichtU-IDS/semanticscience
> [Errno 21] Is a directory: '/home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/OnToology/ontology/sio/release/sio-subset-process.owl'

---
File: https://raw.githubusercontent.com/MaastrichtU-IDS/semanticscience/master/OnToology%2Fontology%2Fsio%2Frelease%2Fsio-subset-ice.owl parsed as xml

In repository: https://github.com/MaastrichtU-IDS/semanticscience
> [Errno 21] Is a directory: '/home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/OnToology/ontology/sio/release/sio-subset-ice.owl'

---
File: https://raw.githubusercontent.com/MaastrichtU-IDS/semanticscience/master/OnToology%2Fontology%2Fsio%2Frelease%2Fsio-subset-sadi.owl parsed as xml

In repository: https://github.com/MaastrichtU-IDS/semanticscience
> [Errno 21] Is a directory: '/home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/OnToology/ontology/sio/release/sio-subset-sadi.owl'

---
File: https://raw.githubusercontent.com/MaastrichtU-IDS/semanticscience/master/OnToology%2Fontology%2Fsio%2Frelease%2Fsio-subset-nlp.owl parsed as xml

In repository: https://github.com/MaastrichtU-IDS/semanticscience
> [Errno 21] Is a directory: '/home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/OnToology/ontology/sio/release/sio-subset-nlp.owl'

---
File: https://raw.githubusercontent.com/MaastrichtU-IDS/semanticscience/master/OnToology%2Fontology%2Fsio%2Frelease%2Fsio-subset-geometry.owl parsed as xml

In repository: https://github.com/MaastrichtU-IDS/semanticscience
> [Errno 21] Is a directory: '/home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/OnToology/ontology/sio/release/sio-subset-geometry.owl'

---
File: https://raw.githubusercontent.com/MaastrichtU-IDS/semanticscience/master/OnToology%2Fontology%2Fsio%2Frelease%2Fsio-subset-relations.owl parsed as xml

In repository: https://github.com/MaastrichtU-IDS/semanticscience
> [Errno 21] Is a directory: '/home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/OnToology/ontology/sio/release/sio-subset-relations.owl'

---
File: https://raw.githubusercontent.com/MaastrichtU-IDS/semanticscience/master/OnToology%2Fontology%2Fsio%2Frelease%2Fsio-subset-equivs.owl parsed as xml

In repository: https://github.com/MaastrichtU-IDS/semanticscience
> [Errno 21] Is a directory: '/home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/OnToology/ontology/sio/release/sio-subset-equivs.owl'

---
File: https://raw.githubusercontent.com/MaastrichtU-IDS/semanticscience/master/OnToology%2Fontology%2Fsio%2Frelease%2Fsio-subset-behaviour.owl parsed as xml

In repository: https://github.com/MaastrichtU-IDS/semanticscience
> [Errno 21] Is a directory: '/home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/OnToology/ontology/sio/release/sio-subset-behaviour.owl'

---
File: https://raw.githubusercontent.com/MaastrichtU-IDS/semanticscience/master/OnToology%2Fontology%2Fsio%2Frelease%2Fsio-subset-chemical.owl parsed as xml

In repository: https://github.com/MaastrichtU-IDS/semanticscience
> [Errno 21] Is a directory: '/home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/OnToology/ontology/sio/release/sio-subset-chemical.owl'

---
File: https://raw.githubusercontent.com/MaastrichtU-IDS/semanticscience/master/OnToology%2Fontology%2Fsio%2Frelease%2Fsio-subset-emotion.owl parsed as xml

In repository: https://github.com/MaastrichtU-IDS/semanticscience
> [Errno 21] Is a directory: '/home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/OnToology/ontology/sio/release/sio-subset-emotion.owl'

---
File: https://raw.githubusercontent.com/MaastrichtU-IDS/semanticscience/master/OnToology%2Fontology%2Fdao.ttl parsed as ttl

In repository: https://github.com/MaastrichtU-IDS/semanticscience
> [Errno 21] Is a directory: '/home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/OnToology/ontology/dao.ttl'

---
File: https://raw.githubusercontent.com/MaastrichtU-IDS/semanticscience/master/OnToology%2Fontology%2Fsio.owl%2Fdocumentation%2Fprovenance%2Fprovenance-en.ttl parsed as ttl

In repository: https://github.com/MaastrichtU-IDS/semanticscience
> at line 6 of <>:
Bad syntax (']' expected) at ^ in:
"...b'wasAttributedTo [ a prov:Agent; foaf:name "Michel Dumontier"'^b'.];\n\t prov:wasAttributedTo <http://orcid.org/0000-0003-4727-'..."

---
File: https://raw.githubusercontent.com/MaastrichtU-IDS/semanticscience/master/OnToology%2Fontology%2Fsio%2Frelease%2Fsio-release.owl%2Fdocumentation%2Fprovenance%2Fprovenance-en.ttl parsed as ttl

In repository: https://github.com/MaastrichtU-IDS/semanticscience
> at line 6 of <>:
Bad syntax (']' expected) at ^ in:
"...b'wasAttributedTo [ a prov:Agent; foaf:name "Michel Dumontier"'^b'.];\n\t prov:wasAttributedTo <http://orcid.org/0000-0003-4727-'..."

---
File: https://raw.githubusercontent.com/geneontology/obographs/master/src%2Ftest%2Fresources%2Fabox.owl parsed as xml

In repository: https://github.com/geneontology/obographs
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/test/resources/abox.owl:1:0: syntax error

---
File: https://raw.githubusercontent.com/geneontology/obographs/master/src%2Ftest%2Fresources%2FequivNodeSetTest.obo

In repository: https://github.com/geneontology/obographs
> local variable 'header' referenced before assignment

---
File: https://raw.githubusercontent.com/callahantiff/PheKnowLator/master/tests%2Fdata%2Fontologies%2Fempty_hp_with_imports.owl parsed as xml

In repository: https://github.com/callahantiff/PheKnowLator
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/tests/data/ontologies/empty_hp_with_imports.owl:1:0: no element found

---
File: https://raw.githubusercontent.com/geneontology/protege-tutorial/master/basic-dl-query%2Fcc.owl parsed as xml

In repository: https://github.com/geneontology/protege-tutorial
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/basic-dl-query/cc.owl:1:0: syntax error

---
File: https://raw.githubusercontent.com/geneontology/protege-tutorial/master/template-examples%2Fro-slim.owl parsed as xml

In repository: https://github.com/geneontology/protege-tutorial
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/template-examples/ro-slim.owl:1:0: syntax error

---
File: https://raw.githubusercontent.com/geneontology/protege-tutorial/master/template-examples%2Fpato-slim.owl parsed as xml

In repository: https://github.com/geneontology/protege-tutorial
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/template-examples/pato-slim.owl:1:0: syntax error

---
File: https://raw.githubusercontent.com/geneontology/protege-tutorial/master/template-examples%2Fto-slim.owl parsed as xml

In repository: https://github.com/geneontology/protege-tutorial
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/template-examples/to-slim.owl:1:0: syntax error

---
File: https://raw.githubusercontent.com/geneontology/protege-tutorial/master/template-examples%2Ftest1.owl parsed as xml

In repository: https://github.com/geneontology/protege-tutorial
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/template-examples/test1.owl:1:0: syntax error

---
File: https://raw.githubusercontent.com/geneontology/protege-tutorial/master/template-examples%2Fpo-slim.owl parsed as xml

In repository: https://github.com/geneontology/protege-tutorial
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/template-examples/po-slim.owl:1:0: syntax error

---
File: https://raw.githubusercontent.com/geneontology/protege-tutorial/master/basic-subclass%2FHINTS.obo

In repository: https://github.com/geneontology/protege-tutorial
> local variable 'header' referenced before assignment

---
File: https://raw.githubusercontent.com/geneontology/protege-tutorial/master/basic-classification%2FHINTS.obo

In repository: https://github.com/geneontology/protege-tutorial
> local variable 'header' referenced before assignment

---
File: https://raw.githubusercontent.com/geneontology/protege-tutorial/master/basic-restriction%2FHINTS.obo

In repository: https://github.com/geneontology/protege-tutorial
> local variable 'header' referenced before assignment

---
File: https://raw.githubusercontent.com/inovexcorp/mobi/master/com.mobi.ontology.utils%2Fsrc%2Ftest%2Fresources%2FIRI_subject.trig parsed as n3

In repository: https://github.com/inovexcorp/mobi
> at line 3 of <>:
Bad syntax (EOF found after object) at ^ in:
"b'{<http://a.example/s> <http://a.example/p> <http://a.example/o> .}\n<http://example/graph> {<http://a.example/s> <http://a.example/p> <http://a.example/o> .}'^b''..."

---
File: https://raw.githubusercontent.com/inovexcorp/mobi/master/document-translation%2Fcom.mobi.document.translator.api%2Fsrc%2Fmain%2Fresources%2Fontologies%2Fsemantic-translation-ont.trig parsed as n3

In repository: https://github.com/inovexcorp/mobi
> at line 12 of <>:
Bad syntax (Prefix "foaf:" not bound) at ^ in:
"...b'xtension for generating ontologies ."@en ;\n    dct:creator ['^b'foaf:name "Ben Gould"] ;\n    foaf:maker [foaf:name "Mobi"; f'..."

---
File: https://raw.githubusercontent.com/inovexcorp/mobi/master/com.mobi.dataset.impl%2Fsrc%2Ftest%2Fresources%2FtestCatalogData.trig parsed as n3

In repository: https://github.com/inovexcorp/mobi
> at line 10 of <>:
Bad syntax (expected directive or statement) at ^ in:
"...b'owl: <http://www.w3.org/2002/07/owl#> .\n\n### DATASET STUFF\n\n'^b'GRAPH <http://mobi.com/test/records#dataset> {\n    <http://m'..."

---
File: https://raw.githubusercontent.com/inovexcorp/mobi/master/com.mobi.dataset.impl%2Fsrc%2Ftest%2Fresources%2Ftest-catalog_no-catalog-records.trig parsed as n3

In repository: https://github.com/inovexcorp/mobi
> at line 11 of <>:
Bad syntax (expected directive or statement) at ^ in:
"...b'efix owl: <http://www.w3.org/2002/07/owl#> .\n\n### DATASETS\n\n'^b'GRAPH <http://mobi.com/dataset/not-in-catalog> {\n    <http:/'..."

---
File: https://raw.githubusercontent.com/inovexcorp/mobi/master/com.mobi.dataset.impl%2Fsrc%2Ftest%2Fresources%2Ftest-catalog_no-records.trig parsed as n3

In repository: https://github.com/inovexcorp/mobi
> at line 16 of <>:
Bad syntax (expected directive or statement) at ^ in:
"...b'02/07/owl#> .\n\n### DATASETS\n\n\n### OTHER DATA\n\n\n### CATALOG\n\n'^b'GRAPH <http://mobi.com/test/catalog-local> {\n    <http://mob'..."

---
File: https://raw.githubusercontent.com/inovexcorp/mobi/master/com.mobi.dataset.impl%2Fsrc%2Ftest%2Fresources%2Ftest-catalog_test-repo-datasets.trig parsed as n3

In repository: https://github.com/inovexcorp/mobi
> at line 11 of <>:
Bad syntax (expected directive or statement) at ^ in:
"...b'efix owl: <http://www.w3.org/2002/07/owl#> .\n\n### DATASETS\n\n'^b'GRAPH <http://mobi.com/dataset/test5> {\n    <http://mobi.com'..."

---
File: https://raw.githubusercontent.com/inovexcorp/mobi/master/com.mobi.dataset.impl%2Fsrc%2Ftest%2Fresources%2Ftest-catalog_only-ds-records.trig parsed as n3

In repository: https://github.com/inovexcorp/mobi
> at line 11 of <>:
Bad syntax (expected directive or statement) at ^ in:
"...b'efix owl: <http://www.w3.org/2002/07/owl#> .\n\n### DATASETS\n\n'^b'GRAPH <http://mobi.com/record/dataset/test1> {\n    <http://m'..."

---
File: https://raw.githubusercontent.com/inovexcorp/mobi/master/com.mobi.ontology.impl.core%2Fsrc%2Ftest%2Fresources%2FtestData.trig parsed as n3

In repository: https://github.com/inovexcorp/mobi
> at line 14 of <>:
Bad syntax (expected directive or statement) at ^ in:
"...b'rBranch branches:branch .\n\nbranches:branch a mcat:Branch .\n\n'^b'GRAPH <http://mobi.com/test/additions#commit> {\n    <http://'..."

---
File: https://raw.githubusercontent.com/inovexcorp/mobi/master/com.mobi.etl.rdf%2Fsrc%2Ftest%2Fresources%2Fexporter%2FtestFile.trig parsed as n3

In repository: https://github.com/inovexcorp/mobi
> at line 19 of <>:
Bad syntax (objectList expected) at ^ in:
"...b'ex:Management ,\n                          ex:Programming . }'^b'\n\n\n'"

---
File: https://raw.githubusercontent.com/inovexcorp/mobi/master/com.mobi.etl.rdf%2Fsrc%2Ftest%2Fresources%2Fimporter%2FtestFile.trig parsed as n3

In repository: https://github.com/inovexcorp/mobi
> at line 19 of <>:
Bad syntax (objectList expected) at ^ in:
"...b'ex:Management ,\n                          ex:Programming . }'^b'\n\n\n'"

---
File: https://raw.githubusercontent.com/inovexcorp/mobi/master/com.mobi.explorable.dataset.rest%2Fsrc%2Ftest%2Fresources%2Ftest-dataset-data.trig parsed as n3

In repository: https://github.com/inovexcorp/mobi
> at line 213 of <>:
Bad syntax (EOF found in middle of path syntax) at ^ in:
"b'<http://mobi.com/dataset/a9a20370-e4d8-43c0-8a13-6e720b2ede10_system_dng> {\n\t<http://mobi.com/data/uhtc/material/c1855eb9-89dc-445e-8f02-22c1162c0844> a <http://mobi.com/ontologies/uhtc/Material> ;\n\t\t<http://www.w3.org/2000/01/rdf-schema#label> "ZrN" ;\n\t\t<http://mobi.com/ontologies/uhtc/density> 7.29E0 ;\n\t\t<http://www.w3.org/2000/01/rdf-schema#comment> "Comment" ;\n\t\t<http://mobi.com/ontologies/uhtc/crystalStructure> <http://mobi.com/data/uhtc/crystalstructure/FCC> .\n\n\t<http://mobi.com/data/uhtc/material/fb17ca2f-f9d0-4a4d-b780-2f4025983ae2> a <http://mobi.com/ontologies/uhtc/Material> ;\n\t\t<http://mobi.com/ontologies/uhtc/density> 1.276E1 ;\n\t\t<http://mobi.com/ontologies/uhtc/crystalStructure> <http://mobi.com/data/uhtc/crystalstructure/FCC> ;\n\t\t<http://www.w3.org/2000/01/rdf-schema#comment> "Comment" ;\n\t\t<http://www.w3.org/2000/01/rdf-schema#label> "HfC" .\n\n\t<http://mobi.com/data/uhtc/material/4e60785a-e091-4f26-834a-198aebeb3483> a <http://mobi.com/ontologies/uhtc/Material> ;\n\t\t<http://mobi.com/ontologies/uhtc/density> 1.119E1 ;\n\t\t<http://www.w3.org/2000/01/rdf-schema#comment> "Comment" ;\n\t\t<http://www.w3.org/2000/01/rdf-schema#label> "HfB2" ;\n\t\t<http://mobi.com/ontologies/uhtc/crystalStructure> <http://mobi.com/data/uhtc/crystalstructure/Hexagonal> .\n\n\t<http://mobi.com/data/uhtc/material/2e345d0d-20a6-4329-b8e7-e5cb2709edb6> a <http://mobi.com/ontologies/uhtc/Material> ;\n\t\t<http://mobi.com/ontologies/uhtc/density> 1.45E1 ;\n\t\t<http://www.w3.org/2000/01/rdf-schema#label> "TaC" ;\n\t\t<http://mobi.com/ontologies/uhtc/crystalStructure> <http://mobi.com/data/uhtc/crystalstructure/Cubic> ;\n\t\t<http://www.w3.org/2000/01/rdf-schema#comment> "Comment" .\n\n\t<http://mobi.com/data/uhtc/material/9d273e6a-2a97-47eb-9a14-529ce8d8343e> a <http://mobi.com/ontologies/uhtc/Material> ;\n\t\t<http://mobi.com/ontologies/uhtc/crystalStructure> <http://mobi.com/data/uhtc/crystalstructure/Polymorphic> ;\n\t\t<http://mobi.com/ontologies/uhtc/density> 3.21E0 ;\n\t\t<http://www.w3.org/2000/01/rdf-schema#label> "SiC" ;\n\t\t<http://www.w3.org/2000/01/rdf-schema#comment> "Comment" .\n\n\t<http://mobi.com/data/uhtc/material/b5989d3b-047d-4903-8533-1f520d8ce5b2> a <http://mobi.com/ontologies/uhtc/Material> ;\n\t\t<http://www.w3.org/2000/01/rdf-schema#comment> "Comment" ;\n\t\t<http://mobi.com/ontologies/uhtc/density> 1.254E1 ;\n\t\t<http://www.w3.org/2000/01/rdf-schema#label> "TaB2" ;\n\t\t<http://mobi.com/ontologies/uhtc/crystalStructure> <http://mobi.com/data/uhtc/crystalstructure/Hexagonal> .\n\n\t<http://mobi.com/data/uhtc/material/6e6e9300-bf78-4493-8705-223d10ef0093> a <http://mobi.com/ontologies/uhtc/Material> ;\n\t\t<http://www.w3.org/2000/01/rdf-schema#label> "TiN" ;\n\t\t<http://www.w3.org/2000/01/rdf-schema#comment> "Comment" ;\n\t\t<http://mobi.com/ontologies/uhtc/density> 5.39E0 ;\n\t\t<http://mobi.com/ontologies/uhtc/crystalStructure> <http://mobi.com/data/uhtc/crystalstructure/FCC> .\n\n\t<http://mobi.com/data/uhtc/material/12e0c002-1bec-4bdc-b475-19ca88cc04cc> a <http://mobi.com/ontologies/uhtc/Material> ;\n\t\t<http://www.w3.org/2000/01/rdf-schema#comment> "Comment" ;\n\t\t<http://www.w3.org/2000/01/rdf-schema#label> "ZrB2" ;\n\t\t<http://mobi.com/ontologies/uhtc/density> 6.1E0 ;\n\t\t<http://mobi.com/ontologies/uhtc/crystalStructure> <http://mobi.com/data/uhtc/crystalstructure/Hexagonal> .\n\n\t<http://mobi.com/data/uhtc/material/00698807-763b-40cc-a74a-4f78b706f1d5> a <http://mobi.com/ontologies/uhtc/Material> ;\n\t\t<http://mobi.com/ontologies/uhtc/density> 1.43E1 ;\n\t\t<http://www.w3.org/2000/01/rdf-schema#label> "TaN" ;\n\t\t<http://www.w3.org/2000/01/rdf-schema#comment> "Comment" ;\n\t\t<http://mobi.com/ontologies/uhtc/crystalStructure> <http://mobi.com/data/uhtc/crystalstructure/Cubic> .\n\n\t<http://mobi.com/data/uhtc/material/70402dcc-47ae-4b9f-a788-8f66b06b2d00> a <http://mobi.com/ontologies/uhtc/Material> ;\n\t\t<http://mobi.com/ontologies/uhtc/density> 4.94E0 ;\n\t\t<http://www.w3.org/2000/01/rdf-schema#label> "TiC" ;\n\t\t<http://www.w3.org/2000/01/rdf-schema#comment> "Comment" ;\n\t\t<http://mobi.com/ontologies/uhtc/crystalStructure> <http://mobi.com/data/uhtc/crystalstructure/Cubic> .\n\n\t<http://mobi.com/data/uhtc/material/57824c72-69ca-4d4d-875a-22c37d179549> a <http://mobi.com/ontologies/uhtc/Material> ;\n\t\t<http://mobi.com/ontologies/uhtc/density> 1.39E1 ;\n\t\t<http://www.w3.org/2000/01/rdf-schema#label> "HfN" ;\n\t\t<http://www.w3.org/2000/01/rdf-schema#comment> "Comment" ;\n\t\t<http://mobi.com/ontologies/uhtc/crystalStructure> <http://mobi.com/data/uhtc/crystalstructure/FCC> .\n\n\t<http://mobi.com/data/uhtc/material/810a4205-df93-4951-8945-5081680a4fcf> a <http://mobi.com/ontologies/uhtc/Material> ;\n\t\t<http://www.w3.org/2000/01/rdf-schema#comment> "Comment" ;\n\t\t<http://mobi.com/ontologies/uhtc/density> 4.52E0 ;\n\t\t<http://www.w3.org/2000/01/rdf-schema#label> "TiB2" ;\n\t\t<http://mobi.com/ontologies/uhtc/crystalStructure> <http://mobi.com/data/uhtc/crystalstructure/Hexagonal> .\n\n\t<http://mobi.com/data/uhtc/material/14fb99d6-32ec-445e-8192-12630fcb77a6> a <http://mobi.com/ontologies/uhtc/Material> ;\n\t\t<http://www.w3.org/2000/01/rdf-schema#comment> "Comment" ;\n\t\t<http://www.w3.org/2000/01/rdf-schema#label> "ZrC" ;\n\t\t<http://mobi.com/ontologies/uhtc/crystalStructure> <http://mobi.com/data/uhtc/crystalstructure/FCC> ;\n\t\t<http://mobi.com/ontologies/uhtc/density> 6.56E0 .\n\n\t<http://mobi.com/data/uhtc/crystalstructure/Cubic> a <http://mobi.com/ontologies/uhtc/CrystalStructure> ;\n\t    <http://www.w3.org/2000/01/rdf-schema#label> "French Label"@fr ;\n\t    <http://www.w3.org/2000/01/rdf-schema#label> "Label"@en ;\n\t    <http://www.w3.org/2000/01/rdf-schema#comment> "Comment" ;\n\t\t<http://purl.org/dc/terms/title> "Title" ;\n\t\t<http://purl.org/dc/terms/description> "Description" .\n\n\t<http://mobi.com/data/uhtc/crystalstructure/FCC> a <http://mobi.com/ontologies/uhtc/CrystalStructure> ;\n\t    <http://www.w3.org/2000/01/rdf-schema#comment> "French Comment"@fr ;\n\t    <http://www.w3.org/2000/01/rdf-schema#comment> "Comment"@en ;\n\t\t<http://purl.org/dc/terms/title> "Title" ;\n\t\t<http://purl.org/dc/terms/description> "Description" .\n\n\t<http://mobi.com/data/uhtc/crystalstructure/Hexagonal> a <http://mobi.com/ontologies/uhtc/CrystalStructure> ;\n\t    <http://www.w3.org/2000/01/rdf-schema#label> "Label" ;\n\t\t<http://purl.org/dc/terms/title> "Title" ;\n\t\t<http://purl.org/dc/terms/description> "French Description"@fr ;\n\t\t<http://purl.org/dc/terms/description> "Description"@en .\n\n\t<http://mobi.com/data/uhtc/crystalstructure/Polymorphic> a <http://mobi.com/ontologies/uhtc/CrystalStructure> ;\n\t    <http://purl.org/dc/terms/title> "French Title"@fr ;\n\t\t<http://purl.org/dc/terms/title> "Title"@en ;\n\t\t<http://purl.org/dc/terms/description> "Description" .\n\n\t_:x1 a <http://www.w3.org/1999/02/22-rdf-syntax-ns#Statement> ;\n\t    <http://www.w3.org/1999/02/22-rdf-syntax-ns#subject> <http://mobi.com/data/uhtc/crystalstructure/Polymorphic> ;\n\t    <http://www.w3.org/1999/02/22-rdf-syntax-ns#predicate> <http://purl.org/dc/terms/description> ;\n\t    <http://www.w3.org/1999/02/22-rdf-syntax-ns#object> "Description" ;\n\t    <http://purl.org/dc/terms/creator> <http://mobi.com/user/1> .\n\n\t<http://mobi.com/data/large> <http://purl.org/dc/terms/title> "0" ;\n\t    <http://purl.org/dc/terms/title> "1" ;\n\t    <http://purl.org/dc/terms/title> "2" ;\n\t    <http://purl.org/dc/terms/title> "3" ;\n\t    <http://purl.org/dc/terms/title> "4" ;\n\t    <http://purl.org/dc/terms/title> "5" ;\n\t    <http://purl.org/dc/terms/title> "6" ;\n\t    <http://purl.org/dc/terms/title> "7" ;\n\t    <http://purl.org/dc/terms/title> "8" ;\n\t    <http://purl.org/dc/terms/title> "9" ;\n\t    <http://purl.org/dc/terms/title> "10" ;\n\t    <http://purl.org/dc/terms/title> "11" ;\n\t    <http://purl.org/dc/terms/title> "12" ;\n\t    <http://purl.org/dc/terms/title> "13" ;\n\t    <http://purl.org/dc/terms/title> "14" ;\n\t    <http://purl.org/dc/terms/title> "15" ;\n\t    <http://purl.org/dc/terms/title> "16" ;\n\t    <http://purl.org/dc/terms/title> "17" ;\n\t    <http://purl.org/dc/terms/title> "18" ;\n\t    <http://purl.org/dc/terms/title> "19" ;\n\t    <http://purl.org/dc/terms/title> "20" ;\n\t    <http://purl.org/dc/terms/title> "21" ;\n\t    <http://purl.org/dc/terms/title> "22" ;\n\t    <http://purl.org/dc/terms/title> "23" ;\n\t    <http://purl.org/dc/terms/title> "24" ;\n\t    <http://purl.org/dc/terms/title> "25" ;\n\t    <http://purl.org/dc/terms/title> "26" ;\n\t    <http://purl.org/dc/terms/title> "27" ;\n\t    <http://purl.org/dc/terms/title> "28" ;\n\t    <http://purl.org/dc/terms/title> "29" ;\n\t    <http://purl.org/dc/terms/title> "30" ;\n\t    <http://purl.org/dc/terms/title> "31" ;\n\t    <http://purl.org/dc/terms/title> "32" ;\n\t    <http://purl.org/dc/terms/title> "33" ;\n\t    <http://purl.org/dc/terms/title> "34" ;\n\t    <http://purl.org/dc/terms/title> "35" ;\n\t    <http://purl.org/dc/terms/title> "36" ;\n\t    <http://purl.org/dc/terms/title> "37" ;\n\t    <http://purl.org/dc/terms/title> "38" ;\n\t    <http://purl.org/dc/terms/title> "39" ;\n\t    <http://purl.org/dc/terms/title> "40" ;\n\t    <http://purl.org/dc/terms/title> "41" ;\n\t    <http://purl.org/dc/terms/title> "42" ;\n\t    <http://purl.org/dc/terms/title> "43" ;\n\t    <http://purl.org/dc/terms/title> "44" ;\n\t    <http://purl.org/dc/terms/title> "45" ;\n\t    <http://purl.org/dc/terms/title> "46" ;\n\t    <http://purl.org/dc/terms/title> "47" ;\n\t    <http://purl.org/dc/terms/title> "48" ;\n\t    <http://purl.org/dc/terms/title> "49" ;\n\t    <http://purl.org/dc/terms/title> "50" ;\n\t    <http://purl.org/dc/terms/title> "51" ;\n\t    <http://purl.org/dc/terms/title> "52" ;\n\t    <http://purl.org/dc/terms/title> "53" ;\n\t    <http://purl.org/dc/terms/title> "54" ;\n\t    <http://purl.org/dc/terms/title> "55" ;\n\t    <http://purl.org/dc/terms/title> "56" ;\n\t    <http://purl.org/dc/terms/title> "57" ;\n\t    <http://purl.org/dc/terms/title> "58" ;\n\t    <http://purl.org/dc/terms/title> "59" ;\n\t    <http://purl.org/dc/terms/title> "60" ;\n\t    <http://purl.org/dc/terms/title> "61" ;\n\t    <http://purl.org/dc/terms/title> "62" ;\n\t    <http://purl.org/dc/terms/title> "63" ;\n\t    <http://purl.org/dc/terms/title> "64" ;\n\t    <http://purl.org/dc/terms/title> "65" ;\n\t    <http://purl.org/dc/terms/title> "66" ;\n\t    <http://purl.org/dc/terms/title> "67" ;\n\t    <http://purl.org/dc/terms/title> "68" ;\n\t    <http://purl.org/dc/terms/title> "69" ;\n\t    <http://purl.org/dc/terms/title> "70" ;\n\t    <http://purl.org/dc/terms/title> "71" ;\n\t    <http://purl.org/dc/terms/title> "72" ;\n\t    <http://purl.org/dc/terms/title> "73" ;\n\t    <http://purl.org/dc/terms/title> "74" ;\n\t    <http://purl.org/dc/terms/title> "75" ;\n\t    <http://purl.org/dc/terms/title> "76" ;\n\t    <http://purl.org/dc/terms/title> "77" ;\n\t    <http://purl.org/dc/terms/title> "78" ;\n\t    <http://purl.org/dc/terms/title> "79" ;\n\t    <http://purl.org/dc/terms/title> "80" ;\n\t    <http://purl.org/dc/terms/title> "81" ;\n\t    <http://purl.org/dc/terms/title> "82" ;\n\t    <http://purl.org/dc/terms/title> "83" ;\n\t    <http://purl.org/dc/terms/title> "84" ;\n\t    <http://purl.org/dc/terms/title> "85" ;\n\t    <http://purl.org/dc/terms/title> "86" ;\n\t    <http://purl.org/dc/terms/title> "87" ;\n\t    <http://purl.org/dc/terms/title> "88" ;\n\t    <http://purl.org/dc/terms/title> "89" ;\n\t    <http://purl.org/dc/terms/title> "90" ;\n\t    <http://purl.org/dc/terms/title> "91" ;\n\t    <http://purl.org/dc/terms/title> "92" ;\n\t    <http://purl.org/dc/terms/title> "93" ;\n\t    <http://purl.org/dc/terms/title> "94" ;\n\t    <http://purl.org/dc/terms/title> "95" ;\n\t    <http://purl.org/dc/terms/title> "96" ;\n\t    <http://purl.org/dc/terms/title> "97" ;\n\t    <http://purl.org/dc/terms/title> "98" ;\n\t    <http://purl.org/dc/terms/title> "99" ;\n\t    <http://purl.org/dc/terms/title> "100" ;\n\t    <http://purl.org/dc/terms/title> "101" .\n\n'^b''..."

---
File: https://raw.githubusercontent.com/inovexcorp/mobi/master/com.mobi.explorable.dataset.rest%2Fsrc%2Ftest%2Fresources%2Fpartial-compiled-resource.trig parsed as n3

In repository: https://github.com/inovexcorp/mobi
> at line 4 of <>:
Bad syntax (Prefix "xsd:" not bound) at ^ in:
"...b'l" ;\n    <http://www.w3.org/2002/07/owl#deprecated> "true"^^'^b'xsd:boolean .\n\n<http://mobi.com/ontologies/uhtc> a <http://w'..."

---
File: https://raw.githubusercontent.com/inovexcorp/mobi/master/com.mobi.catalog.impl%2Fsrc%2Ftest%2Fresources%2FtestCatalogData.trig parsed as n3

In repository: https://github.com/inovexcorp/mobi
> at line 20 of <>:
Bad syntax (expected directive or statement) at ^ in:
"...b' mergereqs: <http://mobi.com/ontologies/merge-requests#> .\n\n'^b'GRAPH <http://mobi.com/test#empty> { }\n\nGRAPH <http://mobi.c'..."

---
File: https://raw.githubusercontent.com/inovexcorp/mobi/master/com.mobi.catalog.impl%2Fsrc%2Ftest%2Fresources%2FtestCommitChainData.trig parsed as n3

In repository: https://github.com/inovexcorp/mobi
> at line 19 of <>:
Bad syntax (expected directive or statement) at ^ in:
"...b'raphs#> .\n\n# Duplicate Addition From Same Base Commit Test\n\n'^b'GRAPH records:duplicate-change-record {\n    records:duplicat'..."

---
File: https://raw.githubusercontent.com/inovexcorp/mobi/master/com.mobi.rest.util%2Fsrc%2Ftest%2Fresources%2Ftest.trig parsed as n3

In repository: https://github.com/inovexcorp/mobi
> at line 18 of <>:
Bad syntax (EOF found when expected verb in property list) at ^ in:
"...b'> "true";\n    <http://example.com/prop4> "true", "false" .\n}'^b'\n'"

---
File: https://raw.githubusercontent.com/inovexcorp/mobi/master/mobi-itests%2Fitests-orm%2Fsrc%2Ftest%2Fresources%2Fontologies%2Fagent.trig parsed as n3

In repository: https://github.com/inovexcorp/mobi
> at line 2 of <>:
Bad syntax (expected '.' or '}' or ']' at end of statement) at ^ in:
"b'@prefix foaf: <http://xmlns.com/foaf/0.1/>\n'^b'@prefix : <urn://mobi.com/orm/test/>\n\n\n:testAgent {\n\t:testAg'..."

---
File: https://raw.githubusercontent.com/inovexcorp/mobi/master/mobi-itests%2Fitests-etl%2Fsrc%2Ftest%2Fresources%2FtestData.trig parsed as n3

In repository: https://github.com/inovexcorp/mobi
> at line 8 of <>:
Bad syntax (expected directive or statement) at ^ in:
"...b'                   <http://mobi.com/data/uhtc/element/C> .\n\n'^b'GRAPH <http://mobi.com/data/uhtc/elements> {\n    <http://mob'..."

---
File: https://raw.githubusercontent.com/inovexcorp/mobi/master/com.mobi.etl.rdf%2Fsrc%2Ftest%2Fresources%2Fexporter%2FjsonldExport.jsonld parsed as json-ld

In repository: https://github.com/inovexcorp/mobi
> Expecting value: line 1 column 1 (char 0)

---
File: https://raw.githubusercontent.com/inovexcorp/mobi/master/com.mobi.etl.rdf parsed as xml

In repository: https://github.com/inovexcorp/mobi
> [Errno 21] Is a directory: '/home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/com.mobi.etl.rdf'

---
File: https://raw.githubusercontent.com/inovexcorp/mobi/master/com.mobi.etl.rdf%2Fsrc%2Ftest%2Fresources%2Fexporter%2FrdfExport.rdf parsed as xml

In repository: https://github.com/inovexcorp/mobi
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/com.mobi.etl.rdf/src/test/resources/exporter/rdfExport.rdf:1:0: no element found

---
File: https://raw.githubusercontent.com/inovexcorp/mobi/master/com.mobi.ontology.rest%2Fsrc%2Ftest%2Fresources%2Ftest-local-imports-1e.ttl parsed as ttl

In repository: https://github.com/inovexcorp/mobi
> at line 16 of <>:
Bad syntax (Prefix "rdubClassO:" not bound) at ^ in:
"...b'/mobi.com/ontology/test-local-imports-2#Class2> .\n\n:Cla\n    '^b'rdubClassO://mobi.com/ontology/test-local-imports-2#Class2> '..."

---
File: https://raw.githubusercontent.com/inovexcorp/mobi/master/com.mobi.etl.delimited%2Fsrc%2Ftest%2Fresources%2FmappingNoLocalName.ttl parsed as ttl

In repository: https://github.com/inovexcorp/mobi
> at line 25 of <>:
Bad syntax (Prefix "xsd:" not bound) at ^ in:
"...b'       uhtc:formula ;\n              delim:datatypeSpec      '^b'xsd:double ;\n              delim:languageSpec      "fr" .\n\n:'..."

---
File: https://raw.githubusercontent.com/inovexcorp/mobi/master/com.mobi.etl.delimited%2Fsrc%2Ftest%2Fresources%2FnewestMapping.ttl parsed as ttl

In repository: https://github.com/inovexcorp/mobi
> at line 26 of <>:
Bad syntax (Prefix "xsd:" not bound) at ^ in:
"...b'       uhtc:formula ;\n              delim:datatypeSpec      '^b'xsd:double ;\n              delim:languageSpec      "fr" .\n\n:'..."

---
File: https://raw.githubusercontent.com/inovexcorp/mobi/master/com.mobi.etl.delimited%2Fsrc%2Ftest%2Fresources%2FtestOutputWithDatatypesAndInvalidValues.ttl parsed as ttl

In repository: https://github.com/inovexcorp/mobi
> at line 3 of <>:
Bad syntax (Prefix "xsd:" not bound) at ^ in:
"...b'<http://mobi.com/ontologies/uhtc/latticeParameter> "3.142"^^'^b'xsd:float ;\n    <http://mobi.com/ontologies/uhtc/source> "ht'..."

---
File: https://raw.githubusercontent.com/inovexcorp/mobi/master/com.mobi.etl.delimited%2Fsrc%2Ftest%2Fresources%2FtestOutputWithDatatypes.ttl parsed as ttl

In repository: https://github.com/inovexcorp/mobi
> at line 3 of <>:
Bad syntax (Prefix "xsd:" not bound) at ^ in:
"...b'2" ;\n    <http://mobi.com/ontologies/uhtc/density> "11.19"^^'^b'xsd:double ;\n    <http://mobi.com/ontologies/uhtc/latticePar'..."

---
File: https://raw.githubusercontent.com/inovexcorp/mobi/master/com.mobi.catalog.api%2Fsrc%2Fmain%2Fresources%2FmergeRequests.ttl parsed as ttl

In repository: https://github.com/inovexcorp/mobi
> at line 16 of <>:
Bad syntax (Prefix "foaf:" not bound) at ^ in:
"...b'ionedRDFRecords in the Mobi catalog."@en ;\n    dct:creator ['^b'foaf:name "Megan Mercer"] ;\n    foaf:maker [foaf:name "Mobi"'..."

---
File: https://raw.githubusercontent.com/inovexcorp/mobi/master/mobi-itests%2Fitests-web%2Fsrc%2Ftest%2Fresources%2Fontologies%2Ftest-local-imports-1e.ttl parsed as ttl

In repository: https://github.com/inovexcorp/mobi
> at line 16 of <>:
Bad syntax (Prefix "rdubClassO:" not bound) at ^ in:
"...b'/mobi.com/ontology/test-local-imports-2#Class2> .\n\n:Cla\n    '^b'rdubClassO://mobi.com/ontology/test-local-imports-2#Class2> '..."

---
File: https://raw.githubusercontent.com/inovexcorp/mobi/master/com.mobi.prov.rest%2Fsrc%2Ftest%2Fresources%2Fprov-data.ttl parsed as ttl

In repository: https://github.com/inovexcorp/mobi
> at line 7 of <>:
Bad syntax (Prefix "xsd:" not bound) at ^ in:
"...b'rov:Activity ;\n    prov:endedAtTime "2016-10-12T16:44:42Z"^^'^b'xsd:dateTime ;\n    prov:invalidated entities:Entity2, entiti'..."

---
File: https://raw.githubusercontent.com/inovexcorp/mobi/master/com.mobi.rdf.orm.ontologies%2Fsrc%2Fmain%2Fresources%2Fmobi.ttl parsed as ttl

In repository: https://github.com/inovexcorp/mobi
> at line 14 of <>:
Bad syntax (Prefix "xsd:" not bound) at ^ in:
"...b'age <http://mobi.com>] ;\n    dcterms:modified "2017-10-06"^^'^b'xsd:date .\n\n:Identifier a rdfs:Class, owl:Class ;\n    rdfs:l'..."

---
File: https://raw.githubusercontent.com/inovexcorp/mobi/master/com.mobi.etl.api%2Fsrc%2Fmain%2Fresources%2Fdelimited.ttl parsed as ttl

In repository: https://github.com/inovexcorp/mobi
> at line 15 of <>:
Bad syntax (Prefix "foaf:" not bound) at ^ in:
"...b'd their records in the Mobi catalog."@en ;\n    dct:creator ['^b'foaf:name "Bryan Miller"], [foaf:name "Megan Mercer"];\n    f'..."

---
File: https://raw.githubusercontent.com/SANSA-Stack/Archived-SANSA-Inference/master/sansa-inference-spark%2Fsrc%2Ftest%2Fresources%2Fforward_chaining%2Faxioms%2Ftest_r3.owl parsed as xml

In repository: https://github.com/SANSA-Stack/Archived-SANSA-Inference
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/sansa-inference-spark/src/test/resources/forward_chaining/axioms/test_r3.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/SANSA-Stack/Archived-SANSA-Inference/master/sansa-inference-spark%2Fsrc%2Ftest%2Fresources%2Fforward_chaining%2Faxioms%2Ftest_o12ab_obj_props.owl parsed as xml

In repository: https://github.com/SANSA-Stack/Archived-SANSA-Inference
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/sansa-inference-spark/src/test/resources/forward_chaining/axioms/test_o12ab_obj_props.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/SANSA-Stack/Archived-SANSA-Inference/master/sansa-inference-spark%2Fsrc%2Ftest%2Fresources%2Fforward_chaining%2Faxioms%2Ftest_rdfs3.owl parsed as xml

In repository: https://github.com/SANSA-Stack/Archived-SANSA-Inference
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/sansa-inference-spark/src/test/resources/forward_chaining/axioms/test_rdfs3.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/SANSA-Stack/Archived-SANSA-Inference/master/sansa-inference-spark%2Fsrc%2Ftest%2Fresources%2Fforward_chaining%2Faxioms%2Ftest_rdfs7.owl parsed as xml

In repository: https://github.com/SANSA-Stack/Archived-SANSA-Inference
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/sansa-inference-spark/src/test/resources/forward_chaining/axioms/test_rdfs7.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/SANSA-Stack/Archived-SANSA-Inference/master/sansa-inference-spark%2Fsrc%2Ftest%2Fresources%2Fforward_chaining%2Faxioms%2Ftest_o10.owl parsed as xml

In repository: https://github.com/SANSA-Stack/Archived-SANSA-Inference
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/sansa-inference-spark/src/test/resources/forward_chaining/axioms/test_o10.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/SANSA-Stack/Archived-SANSA-Inference/master/sansa-inference-spark%2Fsrc%2Ftest%2Fresources%2Fforward_chaining%2Faxioms%2Ftest_o14.owl parsed as xml

In repository: https://github.com/SANSA-Stack/Archived-SANSA-Inference
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/sansa-inference-spark/src/test/resources/forward_chaining/axioms/test_o14.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/SANSA-Stack/Archived-SANSA-Inference/master/sansa-inference-spark%2Fsrc%2Ftest%2Fresources%2Fforward_chaining%2Faxioms%2Ftest_o11ab.owl parsed as xml

In repository: https://github.com/SANSA-Stack/Archived-SANSA-Inference
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/sansa-inference-spark/src/test/resources/forward_chaining/axioms/test_o11ab.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/SANSA-Stack/Archived-SANSA-Inference/master/sansa-inference-spark%2Fsrc%2Ftest%2Fresources%2Fforward_chaining%2Faxioms%2Ftest_o12ab_data_props.owl parsed as xml

In repository: https://github.com/SANSA-Stack/Archived-SANSA-Inference
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/sansa-inference-spark/src/test/resources/forward_chaining/axioms/test_o12ab_data_props.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/SANSA-Stack/Archived-SANSA-Inference/master/sansa-inference-spark%2Fsrc%2Ftest%2Fresources%2Fforward_chaining%2Faxioms%2Ftest_rdfs11.owl parsed as xml

In repository: https://github.com/SANSA-Stack/Archived-SANSA-Inference
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/sansa-inference-spark/src/test/resources/forward_chaining/axioms/test_rdfs11.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/SANSA-Stack/Archived-SANSA-Inference/master/sansa-inference-spark%2Fsrc%2Ftest%2Fresources%2Fforward_chaining%2Faxioms%2Ftest_r4.owl parsed as xml

In repository: https://github.com/SANSA-Stack/Archived-SANSA-Inference
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/sansa-inference-spark/src/test/resources/forward_chaining/axioms/test_r4.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/SANSA-Stack/Archived-SANSA-Inference/master/sansa-inference-spark%2Fsrc%2Ftest%2Fresources%2Fforward_chaining%2Faxioms%2Ftest_r1.owl parsed as xml

In repository: https://github.com/SANSA-Stack/Archived-SANSA-Inference
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/sansa-inference-spark/src/test/resources/forward_chaining/axioms/test_r1.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/SANSA-Stack/Archived-SANSA-Inference/master/sansa-inference-spark%2Fsrc%2Ftest%2Fresources%2Fforward_chaining%2Faxioms%2Ftest_o1.owl parsed as xml

In repository: https://github.com/SANSA-Stack/Archived-SANSA-Inference
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/sansa-inference-spark/src/test/resources/forward_chaining/axioms/test_o1.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/SANSA-Stack/Archived-SANSA-Inference/master/sansa-inference-spark%2Fsrc%2Ftest%2Fresources%2Fforward_chaining%2Faxioms%2Ftest_o15.owl parsed as xml

In repository: https://github.com/SANSA-Stack/Archived-SANSA-Inference
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/sansa-inference-spark/src/test/resources/forward_chaining/axioms/test_o15.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/SANSA-Stack/Archived-SANSA-Inference/master/sansa-inference-spark%2Fsrc%2Ftest%2Fresources%2Fforward_chaining%2Faxioms%2Ftest_r5.owl parsed as xml

In repository: https://github.com/SANSA-Stack/Archived-SANSA-Inference
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/sansa-inference-spark/src/test/resources/forward_chaining/axioms/test_r5.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/SANSA-Stack/Archived-SANSA-Inference/master/sansa-inference-spark%2Fsrc%2Ftest%2Fresources%2Fforward_chaining%2Faxioms%2Ftest_o11c.owl parsed as xml

In repository: https://github.com/SANSA-Stack/Archived-SANSA-Inference
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/sansa-inference-spark/src/test/resources/forward_chaining/axioms/test_o11c.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/SANSA-Stack/Archived-SANSA-Inference/master/sansa-inference-spark%2Fsrc%2Ftest%2Fresources%2Fforward_chaining%2Faxioms%2Ftest_o7b.owl parsed as xml

In repository: https://github.com/SANSA-Stack/Archived-SANSA-Inference
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/sansa-inference-spark/src/test/resources/forward_chaining/axioms/test_o7b.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/SANSA-Stack/Archived-SANSA-Inference/master/sansa-inference-spark%2Fsrc%2Ftest%2Fresources%2Fforward_chaining%2Faxioms%2Ftest_o12c.owl parsed as xml

In repository: https://github.com/SANSA-Stack/Archived-SANSA-Inference
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/sansa-inference-spark/src/test/resources/forward_chaining/axioms/test_o12c.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/SANSA-Stack/Archived-SANSA-Inference/master/sansa-inference-spark%2Fsrc%2Ftest%2Fresources%2Fforward_chaining%2Faxioms%2Ftest_o13.owl parsed as xml

In repository: https://github.com/SANSA-Stack/Archived-SANSA-Inference
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/sansa-inference-spark/src/test/resources/forward_chaining/axioms/test_o13.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/SANSA-Stack/Archived-SANSA-Inference/master/sansa-inference-spark%2Fsrc%2Ftest%2Fresources%2Fforward_chaining%2Faxioms%2Ftest_rdfs9.owl parsed as xml

In repository: https://github.com/SANSA-Stack/Archived-SANSA-Inference
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/sansa-inference-spark/src/test/resources/forward_chaining/axioms/test_rdfs9.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/SANSA-Stack/Archived-SANSA-Inference/master/sansa-inference-spark%2Fsrc%2Ftest%2Fresources%2Fforward_chaining%2Faxioms%2Ftest_o7a.owl parsed as xml

In repository: https://github.com/SANSA-Stack/Archived-SANSA-Inference
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/sansa-inference-spark/src/test/resources/forward_chaining/axioms/test_o7a.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/SANSA-Stack/Archived-SANSA-Inference/master/sansa-inference-spark%2Fsrc%2Ftest%2Fresources%2Fforward_chaining%2Faxioms%2Ftest_o4.owl parsed as xml

In repository: https://github.com/SANSA-Stack/Archived-SANSA-Inference
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/sansa-inference-spark/src/test/resources/forward_chaining/axioms/test_o4.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/SANSA-Stack/Archived-SANSA-Inference/master/sansa-inference-spark%2Fsrc%2Ftest%2Fresources%2Fforward_chaining%2Faxioms%2Ftest_o3.owl parsed as xml

In repository: https://github.com/SANSA-Stack/Archived-SANSA-Inference
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/sansa-inference-spark/src/test/resources/forward_chaining/axioms/test_o3.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/SANSA-Stack/Archived-SANSA-Inference/master/sansa-inference-spark%2Fsrc%2Ftest%2Fresources%2Fforward_chaining%2Faxioms%2Ftest_o2.owl parsed as xml

In repository: https://github.com/SANSA-Stack/Archived-SANSA-Inference
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/sansa-inference-spark/src/test/resources/forward_chaining/axioms/test_o2.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/SANSA-Stack/Archived-SANSA-Inference/master/sansa-inference-spark%2Fsrc%2Ftest%2Fresources%2Fforward_chaining%2Faxioms%2Ftest_r6.owl parsed as xml

In repository: https://github.com/SANSA-Stack/Archived-SANSA-Inference
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/sansa-inference-spark/src/test/resources/forward_chaining/axioms/test_r6.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/SANSA-Stack/Archived-SANSA-Inference/master/sansa-inference-spark%2Fsrc%2Ftest%2Fresources%2Fforward_chaining%2Faxioms%2Ftest_rdfs2.owl parsed as xml

In repository: https://github.com/SANSA-Stack/Archived-SANSA-Inference
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/sansa-inference-spark/src/test/resources/forward_chaining/axioms/test_rdfs2.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/SANSA-Stack/Archived-SANSA-Inference/master/sansa-inference-spark%2Fsrc%2Ftest%2Fresources%2Fforward_chaining%2Faxioms%2Ftest_rdfs5.owl parsed as xml

In repository: https://github.com/SANSA-Stack/Archived-SANSA-Inference
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/sansa-inference-spark/src/test/resources/forward_chaining/axioms/test_rdfs5.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/SANSA-Stack/Archived-SANSA-Inference/master/sansa-inference-spark%2Fsrc%2Ftest%2Fresources%2Fforward_chaining%2Faxioms%2Ftest_o16.owl parsed as xml

In repository: https://github.com/SANSA-Stack/Archived-SANSA-Inference
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/sansa-inference-spark/src/test/resources/forward_chaining/axioms/test_o16.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/SANSA-Stack/Archived-SANSA-Inference/master/sansa-inference-spark%2Fsrc%2Ftest%2Fresources%2Fforward_chaining%2Faxioms%2Ftest_r2.owl parsed as xml

In repository: https://github.com/SANSA-Stack/Archived-SANSA-Inference
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/sansa-inference-spark/src/test/resources/forward_chaining/axioms/test_r2.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/SANSA-Stack/Archived-SANSA-Inference/master/sansa-inference-spark%2Fsrc%2Fmain%2Fresources%2Font_functional.owl parsed as xml

In repository: https://github.com/SANSA-Stack/Archived-SANSA-Inference
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/sansa-inference-spark/src/main/resources/ont_functional.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/SANSA-Stack/Archived-SANSA-Inference/master/sansa-inference-tests%2Fsrc%2Ftest%2Fresources%2Fdata%2Fdbpedia_sample.nt parsed as nt

In repository: https://github.com/SANSA-Stack/Archived-SANSA-Inference
> Invalid line: '<http://dbpedia.org/resource/Abraham_Lincoln'

---
File: https://raw.githubusercontent.com/SANSA-Stack/Archived-SANSA-OWL/master/sansa-owl-flink%2Fsrc%2Ftest%2Fresources%2Font_manchester.owl parsed as xml

In repository: https://github.com/SANSA-Stack/Archived-SANSA-OWL
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/sansa-owl-flink/src/test/resources/ont_manchester.owl:1:0: syntax error

---
File: https://raw.githubusercontent.com/SANSA-Stack/Archived-SANSA-OWL/master/sansa-owl-flink%2Fsrc%2Ftest%2Fresources%2Font_functional.owl parsed as xml

In repository: https://github.com/SANSA-Stack/Archived-SANSA-OWL
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/sansa-owl-flink/src/test/resources/ont_functional.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/SANSA-Stack/Archived-SANSA-OWL/master/sansa-owl-spark%2Fsrc%2Ftest%2Fresources%2Font_OWLXML.owl parsed as xml

In repository: https://github.com/SANSA-Stack/Archived-SANSA-OWL
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/sansa-owl-spark/src/test/resources/ont_OWLXML.owl:263:32: Invalid property attribute URI: http://www.w3.org/1999/02/22-rdf-syntax-ns#about

---
File: https://raw.githubusercontent.com/SANSA-Stack/Archived-SANSA-OWL/master/sansa-owl-spark%2Fsrc%2Ftest%2Fresources%2Font_manchester.owl parsed as xml

In repository: https://github.com/SANSA-Stack/Archived-SANSA-OWL
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/sansa-owl-spark/src/test/resources/ont_manchester.owl:1:0: syntax error

---
File: https://raw.githubusercontent.com/SANSA-Stack/Archived-SANSA-OWL/master/sansa-owl-spark%2Fsrc%2Ftest%2Fresources%2Font_functional.owl parsed as xml

In repository: https://github.com/SANSA-Stack/Archived-SANSA-OWL
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/sansa-owl-spark/src/test/resources/ont_functional.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/SANSA-Stack/Archived-SANSA-OWL/master/sansa-owl-spark%2Fsrc%2Fmain%2Fresources%2FOWLXMLTest.owl parsed as xml

In repository: https://github.com/SANSA-Stack/Archived-SANSA-OWL
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/sansa-owl-spark/src/main/resources/OWLXMLTest.owl:298:32: Invalid property attribute URI: http://www.w3.org/1999/02/22-rdf-syntax-ns#about

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FOFFER_TEMPLATE.jsonld parsed as json-ld

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> Expecting value: line 1 column 1 (char 0)

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FAGREEMENT_TEMPLATE.jsonld parsed as json-ld

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> Expecting value: line 1 column 1 (char 0)

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FREQUEST_TEMPLATE.jsonld parsed as json-ld

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> Expecting value: line 1 column 1 (char 0)

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FDistributeEncryptedTemplates%2FDISTRIBUTE_ENCRYPTED_OFFER_TEMPLATE.jsonld parsed as json-ld

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> Expecting value: line 1 column 1 (char 0)

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FDistributeEncryptedTemplates%2FDISTRIBUTE_ENCRYPTED_REQUEST_TEMPLATE.jsonld parsed as json-ld

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> Expecting value: line 1 column 1 (char 0)

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FDistributeEncryptedTemplates%2FDISTRIBUTE_ENCRYPTED_AGREEMENT_TEMPLATE.jsonld parsed as json-ld

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> Expecting value: line 1 column 1 (char 0)

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FSpatialRestrictedTemplates%2FSPATIAL_OFFER_TEMPLATE.jsonld parsed as json-ld

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> Expecting value: line 1 column 1 (char 0)

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FSpatialRestrictedTemplates%2FSPATIAL_AGREEMENT_TEMPLATE.jsonld parsed as json-ld

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> Expecting value: line 1 column 1 (char 0)

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FSpatialRestrictedTemplates%2FSPATIAL_REQUEST_TEMPLATE.jsonld parsed as json-ld

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> Expecting value: line 1 column 1 (char 0)

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FTimeRestrictedUsageTemplates%2FUSAGE_DURING_INTERVAL_OFFER_TEMPLATE.jsonld parsed as json-ld

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> Expecting value: line 1 column 1 (char 0)

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FTimeRestrictedUsageTemplates%2FUSAGE_UNTIL_DELETION_OFFER_TEMPLATE.jsonld parsed as json-ld

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> Expecting value: line 1 column 1 (char 0)

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FTimeRestrictedUsageTemplates%2FUSAGE_UNTIL_DELETION_AGREEMENT_TEMPLATE.jsonld parsed as json-ld

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> Expecting value: line 1 column 1 (char 0)

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FTimeRestrictedUsageTemplates%2FUSAGE_UNTIL_DELETION_REQUEST_TEMPLATE.jsonld parsed as json-ld

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> Expecting value: line 1 column 1 (char 0)

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FTimeRestrictedUsageTemplates%2FDURATION_USAGE_REQUEST_TEMPLATE.jsonld parsed as json-ld

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> Expecting value: line 1 column 1 (char 0)

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FTimeRestrictedUsageTemplates%2FUSAGE_DURING_INTERVAL_AGREEMENT_TEMPLATE.jsonld parsed as json-ld

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> Expecting value: line 1 column 1 (char 0)

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FTimeRestrictedUsageTemplates%2FUSAGE_DURING_INTERVAL_REQUEST_TEMPLATE.jsonld parsed as json-ld

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> Expecting value: line 1 column 1 (char 0)

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FTimeRestrictedUsageTemplates%2FDURATION_USAGE_OFFER_TEMPLATE.jsonld parsed as json-ld

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> Expecting value: line 1 column 1 (char 0)

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FTimeRestrictedUsageTemplates%2FDURATION_USAGE_AGREEMENT_TEMPLATE.jsonld parsed as json-ld

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> Expecting value: line 1 column 1 (char 0)

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FTimeRestrictedUsageTemplates%2FDURATION_AGREEMENT_TEMPLATE.jsonld parsed as json-ld

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> Expecting value: line 1 column 1 (char 0)

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FTimeRestrictedUsageTemplates%2FDURATION_REQUEST_TEMPLATE.jsonld parsed as json-ld

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> Expecting value: line 1 column 1 (char 0)

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FTimeRestrictedUsageTemplates%2FDURATION_OFFER_TEMPLATE.jsonld parsed as json-ld

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> Expecting value: line 1 column 1 (char 0)

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FSalesTemplates%2FSALES_REQUEST_TEMPLATE.jsonld parsed as json-ld

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> Expecting value: line 1 column 1 (char 0)

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FSalesTemplates%2FSALES_AGREEMENT_TEMPLATE.jsonld parsed as json-ld

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> Expecting value: line 1 column 1 (char 0)

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FSalesTemplates%2FSALES_OFFER_TEMPLATE.jsonld parsed as json-ld

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> Expecting value: line 1 column 1 (char 0)

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FSecurityLevelTemplates%2FSECURITY_LEVEL_OFFER_TEMPLATE.jsonld parsed as json-ld

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> Expecting value: line 1 column 1 (char 0)

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FSecurityLevelTemplates%2FSECURITY_LEVEL_REQUEST_TEMPLATE.jsonld parsed as json-ld

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> Expecting value: line 1 column 1 (char 0)

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FSecurityLevelTemplates%2FSECURITY_LEVEL_AGREEMENT_TEMPLATE.jsonld parsed as json-ld

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> Expecting value: line 1 column 1 (char 0)

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FRentalTemplates%2FRENTAL_REQUEST_TEMPLATE.jsonld parsed as json-ld

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> Expecting value: line 1 column 1 (char 0)

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FRentalTemplates%2FRENTAL_AGREEMENT_TEMPLATE.jsonld parsed as json-ld

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> Expecting value: line 1 column 1 (char 0)

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FRentalTemplates%2FRENTAL_OFFER_TEMPLATE.jsonld parsed as json-ld

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> Expecting value: line 1 column 1 (char 0)

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FTargetTemplates%2FASSET_TEMPLATE.jsonld parsed as json-ld

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> Expecting value: line 1 column 1 (char 0)

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FEventRestrictedUsage%2FEVENT_OFFER_TEMPLATE.jsonld parsed as json-ld

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> Expecting value: line 1 column 1 (char 0)

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FEventRestrictedUsage%2FEVENT_AGREEMENT_TEMPLATE.jsonld parsed as json-ld

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> Expecting value: line 1 column 1 (char 0)

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FEventRestrictedUsage%2FEVENT_REQUEST_TEMPLATE.jsonld parsed as json-ld

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> Expecting value: line 1 column 1 (char 0)

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FUsageNotificationTemplates%2FUSAGE_NOTIFICATION_REQUEST_TEMPLATE.jsonld parsed as json-ld

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> Expecting value: line 1 column 1 (char 0)

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FUsageNotificationTemplates%2FUSAGE_NOTIFICATION_OFFER_TEMPLATE.jsonld parsed as json-ld

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> Expecting value: line 1 column 1 (char 0)

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FUsageNotificationTemplates%2FUSAGE_NOTIFICATION_AGREEMENT_TEMPLATE.jsonld parsed as json-ld

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> Expecting value: line 1 column 1 (char 0)

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FObligationTemplates%2FOBLIGATION_TEMPLATE.jsonld parsed as json-ld

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> Expecting value: line 1 column 1 (char 0)

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FUsageLoggingTemplates%2FUSAGE_LOGGING_REQUEST_TEMPLATE.jsonld parsed as json-ld

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> Expecting value: line 1 column 1 (char 0)

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FUsageLoggingTemplates%2FUSAGE_LOGGING_AGREEMENT_TEMPLATE.jsonld parsed as json-ld

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> Expecting value: line 1 column 1 (char 0)

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FUsageLoggingTemplates%2FUSAGE_LOGGING_OFFER_TEMPLATE.jsonld parsed as json-ld

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> Expecting value: line 1 column 1 (char 0)

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FConnectorbasedAgreementTemplates%2FCONNECTORBASED_OFFER_TEMPLATE.jsonld parsed as json-ld

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> Expecting value: line 1 column 1 (char 0)

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FConnectorbasedAgreementTemplates%2FCONNECTORBASED_REQUEST_TEMPLATE.jsonld parsed as json-ld

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> Expecting value: line 1 column 1 (char 0)

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FConnectorbasedAgreementTemplates%2FCONNECTORBASED_AGREEMENT_TEMPLATE.jsonld parsed as json-ld

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> Expecting value: line 1 column 1 (char 0)

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FRolebasedAgreementTemplates%2FROLEBASED_OFFER_TEMPLATE.jsonld parsed as json-ld

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> Expecting value: line 1 column 1 (char 0)

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FRolebasedAgreementTemplates%2FROLEBASED_REQUEST_TEMPLATE.jsonld parsed as json-ld

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> Expecting value: line 1 column 1 (char 0)

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FRolebasedAgreementTemplates%2FROLEBASED_AGREEMENT_TEMPLATE.jsonld parsed as json-ld

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> Expecting value: line 1 column 1 (char 0)

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FParticipantTemplates%2FPARTICIPANT_TEMPLATE.jsonld parsed as json-ld

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> Expecting value: line 1 column 1 (char 0)

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FPurposeRestrictedUsageTemplates%2FPURPOSE_RESTRICTED_USAGE_REQUEST_TEMPLATE.jsonld parsed as json-ld

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> Expecting value: line 1 column 1 (char 0)

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FPurposeRestrictedUsageTemplates%2FPURPOSE_RESTRICTED_USAGE_OFFER_TEMPLATE.jsonld parsed as json-ld

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> Expecting value: line 1 column 1 (char 0)

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FPurposeRestrictedUsageTemplates%2FPURPOSE_RESTRICTED_USAGE_AGREEMENT_TEMPLATE.jsonld parsed as json-ld

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> Expecting value: line 1 column 1 (char 0)

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FSwapTemplates%2FSWAP_AGREEMENT_TEMPLATE.jsonld parsed as json-ld

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> Expecting value: line 1 column 1 (char 0)

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FSwapTemplates%2FSWAP_REQUEST_TEMPLATE.jsonld parsed as json-ld

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> Expecting value: line 1 column 1 (char 0)

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FSwapTemplates%2FSWAP_OFFER_TEMPLATE.jsonld parsed as json-ld

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> Expecting value: line 1 column 1 (char 0)

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FConstraintTemplates%2FCONSTRAINT_TEMPLATE.jsonld parsed as json-ld

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> Expecting value: line 1 column 1 (char 0)

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FConstraintTemplates%2FTEMPORAL_CONSTRAINT_TEMPLATE.jsonld parsed as json-ld

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> Expecting value: line 1 column 1 (char 0)

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FNTimesUsageTemplates%2FN_TIMES_USAGE_AGREEMENT_TEMPLATE.jsonld parsed as json-ld

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> Expecting value: line 1 column 1 (char 0)

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FNTimesUsageTemplates%2FN_TIMES_USAGE_REQUEST_TEMPLATE.jsonld parsed as json-ld

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> Expecting value: line 1 column 1 (char 0)

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FNTimesUsageTemplates%2FN_TIMES_USAGE_OFFER_TEMPLATE.jsonld parsed as json-ld

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> Expecting value: line 1 column 1 (char 0)

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FActionTemplates%2FACTION_TEMPLATE.jsonld parsed as json-ld

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> Expecting value: line 1 column 1 (char 0)

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FPermissionTemplates%2FREQUEST_PERMISSION_TEMPLATE.jsonld parsed as json-ld

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> Expecting value: line 1 column 1 (char 0)

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FPermissionTemplates%2FOFFER_PERMISSION_TEMPLATE.jsonld parsed as json-ld

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> Expecting value: line 1 column 1 (char 0)

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FPermissionTemplates%2FAGREEMENT_PERMISSION_TEMPLATE.jsonld parsed as json-ld

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> Expecting value: line 1 column 1 (char 0)

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/codes%2FUsagePolicyClass.ttl parsed as ttl

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> at line 9 of <>:
Bad syntax (expected '.' or '}' or ']' at end of statement) at ^ in:
"...b'E\n\ta ids:UsagePolicyClass ;\n\trdfs:label: "Allow data usage" '^b'@en;\n\trdfs:comment: "This policy restricts the usage of the '..."

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/version_mapping%2F3.0.0-3.1.0%2FUpgradeShapes-3.0.0-to-3.1.0.ttl parsed as ttl

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> at line 43 of <>:
Bad syntax (bad escape) at ^ in:
"...b'edAt ?oldEndedAt .}\t\t\t\n\t\t\tBIND(if(regex(?oldEndedAt, ".*(Z|('^b'\\+|-)[0-9][0-9]:[0-9][0-9])"),\n\t\t\t\toldEndedAt,\n\t\t\t\tSTRDT(CON'..."

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/model%2Fcontent%2FDataApp.ttl parsed as ttl

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> at line 60 of <>:
Bad syntax (expected '.' or '}' or ']' at end of statement) at ^ in:
"...b'ds:UsagePolicyClass ;\n\trdfs:label "supported usage policies"'^b' @en;\n\trdfs:comment "IDS Usage Policies a DataApp supports"@'..."

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FAGREEMENT_TEMPLATE.ttl parsed as ttl

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> at line 21 of <>:
Bad syntax (expected item in list or ')') at ^ in:
"...b'E ;\n    ( ids:permission idsc:AGREEMENT_PERMISSION_TEMPLATE '^b'; )+\n.\n'"

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FOFFER_TEMPLATE.ttl parsed as ttl

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> at line 20 of <>:
Bad syntax (expected item in list or ')') at ^ in:
"...b'!"@en ;\n    (\n      (ids:provider idsc:PARTICIPANT_TEMPLATE '^b';)\n    | # or\n      (ids:consumer idsc:PARTICIPANT_TEMPLATE '..."

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FREQUEST_TEMPLATE.ttl parsed as ttl

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> at line 20 of <>:
Bad syntax (expected item in list or ')') at ^ in:
"...b'!"@en ;\n    (\n      (ids:provider idsc:PARTICIPANT_TEMPLATE '^b';)\n    | # or\n      (ids:consumer idsc:PARTICIPANT_TEMPLATE '..."

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FDistributeEncryptedTemplates%2FDISTRIBUTE_ENCRYPTED_REQUEST_TEMPLATE.ttl parsed as ttl

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> at line 22 of <>:
Bad syntax (expected item in list or ')') at ^ in:
"...b'!"@en ;\n    (\n      (ids:provider idsc:PARTICIPANT_TEMPLATE '^b';)\n    | # or\n      (ids:consumer idsc:PARTICIPANT_TEMPLATE '..."

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FDistributeEncryptedTemplates%2FDISTRIBUTE_ENCRYPTED_AGREEMENT_TEMPLATE.ttl parsed as ttl

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> at line 35 of <>:
Bad syntax (expected item in list or ')') at ^ in:
"...b'      ] ;\n        ( ids:constraint idsc:CONSTRAINT_TEMPLATE '^b'; )*      # zero or more Constraints\n        ( ids:preDuty i'..."

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FDistributeEncryptedTemplates%2FDISTRIBUTE_ENCRYPTED_OFFER_TEMPLATE.ttl parsed as ttl

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> at line 22 of <>:
Bad syntax (expected item in list or ')') at ^ in:
"...b'!"@en ;\n    (\n      (ids:provider idsc:PARTICIPANT_TEMPLATE '^b';)\n    | # or\n      (ids:consumer idsc:PARTICIPANT_TEMPLATE '..."

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FSpatialRestrictedTemplates%2FSPATIAL_OFFER_TEMPLATE.ttl parsed as ttl

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> at line 21 of <>:
Bad syntax (expected item in list or ')') at ^ in:
"...b'!"@en ;\n    (\n      (ids:provider idsc:PARTICIPANT_TEMPLATE '^b';)\n    | # or\n      (ids:consumer idsc:PARTICIPANT_TEMPLATE '..."

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FSpatialRestrictedTemplates%2FSPATIAL_AGREEMENT_TEMPLATE.ttl parsed as ttl

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> at line 33 of <>:
Bad syntax (expected item in list or ')') at ^ in:
"...b'c:INSIDE\n            ids:rightOperand (\n              ?area '^b';                                       # a URI of a named a'..."

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FSpatialRestrictedTemplates%2FSPATIAL_REQUEST_TEMPLATE.ttl parsed as ttl

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> at line 22 of <>:
Bad syntax (expected item in list or ')') at ^ in:
"...b'!"@en ;\n    (\n      (ids:provider idsc:PARTICIPANT_TEMPLATE '^b';)\n    | # or\n      (ids:consumer idsc:PARTICIPANT_TEMPLATE '..."

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FTimeRestrictedUsageTemplates%2FUSAGE_DURING_INTERVAL_REQUEST_TEMPLATE.ttl parsed as ttl

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> at line 22 of <>:
Bad syntax (expected item in list or ')') at ^ in:
"...b'!"@en ;\n    (\n      (ids:provider idsc:PARTICIPANT_TEMPLATE '^b';)\n    | # or\n      (ids:consumer idsc:PARTICIPANT_TEMPLATE '..."

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FTimeRestrictedUsageTemplates%2FDURATION_USAGE_OFFER_TEMPLATE.ttl parsed as ttl

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> at line 22 of <>:
Bad syntax (expected item in list or ')') at ^ in:
"...b'!"@en ;\n    (\n      (ids:provider idsc:PARTICIPANT_TEMPLATE '^b';)\n    | # or\n      (ids:consumer idsc:PARTICIPANT_TEMPLATE '..."

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FTimeRestrictedUsageTemplates%2FDURATION_AGREEMENT_TEMPLATE.ttl parsed as ttl

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> at line 34 of <>:
Bad syntax (expected item in list or ')') at ^ in:
"...b'      ] ;\n        ( ids:constraint idsc:CONSTRAINT_TEMPLATE '^b'; )*      # zero or more Constraints\n        ( ids:preDuty i'..."

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FTimeRestrictedUsageTemplates%2FUSAGE_DURING_INTERVAL_AGREEMENT_TEMPLATE.ttl parsed as ttl

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> at line 39 of <>:
Bad syntax (expected item in list or ')') at ^ in:
"...b';\n\t\t\t\t] ;\n        ( ids:constraint idsc:CONSTRAINT_TEMPLATE '^b'; )*      # zero or more Constraints\n        ( ids:preDuty i'..."

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FTimeRestrictedUsageTemplates%2FUSAGE_UNTIL_DELETION_REQUEST_TEMPLATE.ttl parsed as ttl

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> at line 22 of <>:
Bad syntax (expected item in list or ')') at ^ in:
"...b'!"@en ;\n    (\n      (ids:provider idsc:PARTICIPANT_TEMPLATE '^b';)\n    | # or\n      (ids:consumer idsc:PARTICIPANT_TEMPLATE '..."

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FTimeRestrictedUsageTemplates%2FUSAGE_DURING_INTERVAL_OFFER_TEMPLATE.ttl parsed as ttl

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> at line 22 of <>:
Bad syntax (expected item in list or ')') at ^ in:
"...b'!"@en ;\n    (\n      (ids:provider idsc:PARTICIPANT_TEMPLATE '^b';)\n    | # or\n      (ids:consumer idsc:PARTICIPANT_TEMPLATE '..."

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FTimeRestrictedUsageTemplates%2FDURATION_USAGE_REQUEST_TEMPLATE.ttl parsed as ttl

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> at line 22 of <>:
Bad syntax (expected item in list or ')') at ^ in:
"...b'!"@en ;\n    (\n      (ids:provider idsc:PARTICIPANT_TEMPLATE '^b';)\n    | # or\n      (ids:consumer idsc:PARTICIPANT_TEMPLATE '..."

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FTimeRestrictedUsageTemplates%2FUSAGE_UNTIL_DELETION_OFFER_TEMPLATE.ttl parsed as ttl

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> at line 22 of <>:
Bad syntax (expected item in list or ')') at ^ in:
"...b'!"@en ;\n    (\n      (ids:provider idsc:PARTICIPANT_TEMPLATE '^b';)\n    | # or\n      (ids:consumer idsc:PARTICIPANT_TEMPLATE '..."

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FTimeRestrictedUsageTemplates%2FDURATION_OFFER_TEMPLATE.ttl parsed as ttl

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> at line 22 of <>:
Bad syntax (expected item in list or ')') at ^ in:
"...b'!"@en ;\n    (\n      (ids:provider idsc:PARTICIPANT_TEMPLATE '^b';)\n    | # or\n      (ids:consumer idsc:PARTICIPANT_TEMPLATE '..."

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FTimeRestrictedUsageTemplates%2FUSAGE_UNTIL_DELETION_AGREEMENT_TEMPLATE.ttl parsed as ttl

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> at line 56 of <>:
Bad syntax (expected item in list or ')') at ^ in:
"...b'      ] ;\n        ( ids:constraint idsc:CONSTRAINT_TEMPLATE '^b'; )*      # zero or more Constraints\n        ( ids:preDuty i'..."

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FTimeRestrictedUsageTemplates%2FDURATION_USAGE_AGREEMENT_TEMPLATE.ttl parsed as ttl

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> at line 34 of <>:
Bad syntax (expected item in list or ')') at ^ in:
"...b'      ] ;\n        ( ids:constraint idsc:CONSTRAINT_TEMPLATE '^b'; )*      # zero or more Constraints\n        ( ids:preDuty i'..."

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FTimeRestrictedUsageTemplates%2FDURATION_REQUEST_TEMPLATE.ttl parsed as ttl

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> at line 22 of <>:
Bad syntax (expected item in list or ')') at ^ in:
"...b'!"@en ;\n    (\n      (ids:provider idsc:PARTICIPANT_TEMPLATE '^b';)\n    | # or\n      (ids:consumer idsc:PARTICIPANT_TEMPLATE '..."

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FSalesTemplates%2FSALES_OFFER_TEMPLATE.ttl parsed as ttl

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> at line 22 of <>:
Bad syntax (expected item in list or ')') at ^ in:
"...b'!"@en ;\n    (\n      (ids:provider idsc:PARTICIPANT_TEMPLATE '^b';)\n    | # or\n      (ids:consumer idsc:PARTICIPANT_TEMPLATE '..."

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FSalesTemplates%2FSALES_REQUEST_TEMPLATE.ttl parsed as ttl

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> at line 22 of <>:
Bad syntax (expected item in list or ')') at ^ in:
"...b'!"@en ;\n    (\n      (ids:provider idsc:PARTICIPANT_TEMPLATE '^b';)\n    | # or\n      (ids:consumer idsc:PARTICIPANT_TEMPLATE '..."

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FSalesTemplates%2FSALES_AGREEMENT_TEMPLATE.ttl parsed as ttl

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> at line 45 of <>:
Bad syntax (expected item in list or ')') at ^ in:
"...b'      ] ;\n        ( ids:constraint idsc:CONSTRAINT_TEMPLATE '^b'; )*      # zero or more Constraints\n        ( ids:preDuty i'..."

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FSecurityLevelTemplates%2FSECURITY_LEVEL_OFFER_TEMPLATE.ttl parsed as ttl

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> at line 21 of <>:
Bad syntax (expected item in list or ')') at ^ in:
"...b'!"@en ;\n    (\n      (ids:provider idsc:PARTICIPANT_TEMPLATE '^b';)\n    | # or\n      (ids:consumer idsc:PARTICIPANT_TEMPLATE '..."

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FSecurityLevelTemplates%2FSECURITY_LEVEL_REQUEST_TEMPLATE.ttl parsed as ttl

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> at line 21 of <>:
Bad syntax (expected item in list or ')') at ^ in:
"...b'!"@en ;\n    (\n      (ids:provider idsc:PARTICIPANT_TEMPLATE '^b';)\n    | # or\n      (ids:consumer idsc:PARTICIPANT_TEMPLATE '..."

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FSecurityLevelTemplates%2FSECURITY_LEVEL_AGREEMENT_TEMPLATE.ttl parsed as ttl

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> Attempted to create variable with empty string as name!

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FRentalTemplates%2FRENTAL_OFFER_TEMPLATE.ttl parsed as ttl

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> at line 22 of <>:
Bad syntax (expected item in list or ')') at ^ in:
"...b'!"@en ;\n    (\n      (ids:provider idsc:PARTICIPANT_TEMPLATE '^b';)\n    | # or\n      (ids:consumer idsc:PARTICIPANT_TEMPLATE '..."

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FRentalTemplates%2FRENTAL_REQUEST_TEMPLATE.ttl parsed as ttl

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> at line 22 of <>:
Bad syntax (expected item in list or ')') at ^ in:
"...b'!"@en ;\n    (\n      (ids:provider idsc:PARTICIPANT_TEMPLATE '^b';)\n    | # or\n      (ids:consumer idsc:PARTICIPANT_TEMPLATE '..."

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FRentalTemplates%2FRENTAL_AGREEMENT_TEMPLATE.ttl parsed as ttl

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> at line 34 of <>:
Bad syntax (expected item in list or ')') at ^ in:
"...b'the involved parties.\n            ( ids:pipEndpoint ?pipUri '^b'; )?                  # The location where to find this stat'..."

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FTargetTemplates%2FASSET_TEMPLATE.ttl parsed as ttl

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> at line 19 of <>:
Bad syntax (expected item in list or ')') at ^ in:
"...b'                  # directly insert the Asset URI, if known\n'^b'| # or\n    [\n        a ids:AssetCollection ;\n        ids:ass'..."

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FEventRestrictedUsage%2FEVENT_OFFER_TEMPLATE.ttl parsed as ttl

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> at line 21 of <>:
Bad syntax (expected item in list or ')') at ^ in:
"...b'!"@en ;\n    (\n      (ids:provider idsc:PARTICIPANT_TEMPLATE '^b';)\n    | # or\n      (ids:consumer idsc:PARTICIPANT_TEMPLATE '..."

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FEventRestrictedUsage%2FEVENT_REQUEST_TEMPLATE.ttl parsed as ttl

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> at line 21 of <>:
Bad syntax (expected item in list or ')') at ^ in:
"...b'!"@en ;\n    (\n      (ids:provider idsc:PARTICIPANT_TEMPLATE '^b';)\n    | # or\n      (ids:consumer idsc:PARTICIPANT_TEMPLATE '..."

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FUsageNotificationTemplates%2FUSAGE_NOTIFICATION_OFFER_TEMPLATE.ttl parsed as ttl

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> at line 22 of <>:
Bad syntax (expected item in list or ')') at ^ in:
"...b'!"@en ;\n    (\n      (ids:provider idsc:PARTICIPANT_TEMPLATE '^b';)\n    | # or\n      (ids:consumer idsc:PARTICIPANT_TEMPLATE '..."

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FUsageNotificationTemplates%2FUSAGE_NOTIFICATION_REQUEST_TEMPLATE.ttl parsed as ttl

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> at line 22 of <>:
Bad syntax (expected item in list or ')') at ^ in:
"...b'!"@en ;\n    (\n      (ids:provider idsc:PARTICIPANT_TEMPLATE '^b';)\n    | # or\n      (ids:consumer idsc:PARTICIPANT_TEMPLATE '..."

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FUsageNotificationTemplates%2FUSAGE_NOTIFICATION_AGREEMENT_TEMPLATE.ttl parsed as ttl

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> at line 42 of <>:
Bad syntax (objectList expected) at ^ in:
"...b'   ] ;\n        [ ids:constraint idsc:CONSTRAINT_TEMPLATE ; ]'^b'*      # zero or more Constraints\n    ]\n.\n'"

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FObligationTemplates%2FOBLIGATION_TEMPLATE.ttl parsed as ttl

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> at line 21 of <>:
Bad syntax (objectList expected) at ^ in:
"...b'TEMPLATE ;\n    [ ids:constraint idsc:CONSTRAINT_TEMPLATE ; ]'^b'*      # zero or more Constraints\n.\n'"

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FUsageLoggingTemplates%2FUSAGE_LOGGING_REQUEST_TEMPLATE.ttl parsed as ttl

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> at line 22 of <>:
Bad syntax (expected item in list or ')') at ^ in:
"...b'!"@en ;\n    (\n      (ids:provider idsc:PARTICIPANT_TEMPLATE '^b';)\n    | # or\n      (ids:consumer idsc:PARTICIPANT_TEMPLATE '..."

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FUsageLoggingTemplates%2FUSAGE_LOGGING_OFFER_TEMPLATE.ttl parsed as ttl

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> at line 22 of <>:
Bad syntax (expected item in list or ')') at ^ in:
"...b'!"@en ;\n    (\n      (ids:provider idsc:PARTICIPANT_TEMPLATE '^b';)\n    | # or\n      (ids:consumer idsc:PARTICIPANT_TEMPLATE '..."

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FUsageLoggingTemplates%2FUSAGE_LOGGING_AGREEMENT_TEMPLATE.ttl parsed as ttl

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> at line 35 of <>:
Bad syntax (expected item in list or ')') at ^ in:
"...b'      ] ;\n        ( ids:constraint idsc:CONSTRAINT_TEMPLATE '^b'; )*      # zero or more Constraints\n        ( ids:preDuty i'..."

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FConnectorbasedAgreementTemplates%2FCONNECTORBASED_OFFER_TEMPLATE.ttl parsed as ttl

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> at line 22 of <>:
Bad syntax (expected item in list or ')') at ^ in:
"...b'!"@en ;\n    (\n      (ids:provider idsc:PARTICIPANT_TEMPLATE '^b';)\n    | # or\n      (ids:consumer idsc:PARTICIPANT_TEMPLATE '..."

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FConnectorbasedAgreementTemplates%2FCONNECTORBASED_REQUEST_TEMPLATE.ttl parsed as ttl

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> at line 22 of <>:
Bad syntax (expected item in list or ')') at ^ in:
"...b'!"@en ;\n    (\n      (ids:provider idsc:PARTICIPANT_TEMPLATE '^b';)\n    | # or\n      (ids:consumer idsc:PARTICIPANT_TEMPLATE '..."

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FRolebasedAgreementTemplates%2FROLEBASED_REQUEST_TEMPLATE.ttl parsed as ttl

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> at line 22 of <>:
Bad syntax (expected item in list or ')') at ^ in:
"...b'!"@en ;\n    (\n      (ids:provider idsc:PARTICIPANT_TEMPLATE '^b';)\n    | # or\n      (ids:consumer idsc:PARTICIPANT_TEMPLATE '..."

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FRolebasedAgreementTemplates%2FROLEBASED_OFFER_TEMPLATE.ttl parsed as ttl

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> at line 22 of <>:
Bad syntax (expected item in list or ')') at ^ in:
"...b'!"@en ;\n    (\n      (ids:provider idsc:PARTICIPANT_TEMPLATE '^b';)\n    | # or\n      (ids:consumer idsc:PARTICIPANT_TEMPLATE '..."

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FParticipantTemplates%2FPARTICIPANT_TEMPLATE.ttl parsed as ttl

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> at line 19 of <>:
Bad syntax (expected item in list or ')') at ^ in:
"...b'            # directly insert the Participant URI, if known\n'^b'| # or\n    [\n        a ids:Participant ;\n        ids:memberP'..."

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FPurposeRestrictedUsageTemplates%2FPURPOSE_RESTRICTED_USAGE_OFFER_TEMPLATE.ttl parsed as ttl

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> at line 22 of <>:
Bad syntax (expected item in list or ')') at ^ in:
"...b'!"@en ;\n    (\n      (ids:provider idsc:PARTICIPANT_TEMPLATE '^b';)\n    | # or\n      (ids:consumer idsc:PARTICIPANT_TEMPLATE '..."

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FPurposeRestrictedUsageTemplates%2FPURPOSE_RESTRICTED_USAGE_REQUEST_TEMPLATE.ttl parsed as ttl

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> at line 22 of <>:
Bad syntax (expected item in list or ')') at ^ in:
"...b'!"@en ;\n    (\n      (ids:provider idsc:PARTICIPANT_TEMPLATE '^b';)\n    | # or\n      (ids:consumer idsc:PARTICIPANT_TEMPLATE '..."

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FSwapTemplates%2FSWAP_REQUEST_TEMPLATE.ttl parsed as ttl

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> at line 22 of <>:
Bad syntax (expected item in list or ')') at ^ in:
"...b'!"@en ;\n    (\n      (ids:provider idsc:PARTICIPANT_TEMPLATE '^b';)\n    | # or\n      (ids:consumer idsc:PARTICIPANT_TEMPLATE '..."

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FSwapTemplates%2FSWAP_AGREEMENT_TEMPLATE.ttl parsed as ttl

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> at line 29 of <>:
Bad syntax (expected item in list or ')') at ^ in:
"...b'EMPLATE ;\n        ( ids:constraint idsc:CONSTRAINT_TEMPLATE '^b'; )*      # zero or more Constraints\n        ( ids:preDuty i'..."

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FSwapTemplates%2FSWAP_OFFER_TEMPLATE.ttl parsed as ttl

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> at line 22 of <>:
Bad syntax (expected item in list or ')') at ^ in:
"...b'!"@en ;\n    (\n      (ids:provider idsc:PARTICIPANT_TEMPLATE '^b';)\n    | # or\n      (ids:consumer idsc:PARTICIPANT_TEMPLATE '..."

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FConstraintTemplates%2FTEMPORAL_CONSTRAINT_TEMPLATE.ttl parsed as ttl

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> at line 19 of <>:
Bad syntax (expected item in list or ')') at ^ in:
"...b'position in an IDS Usage Control Template.\n\n(\n    (\n        '^b'a ids:TemporalConstraint ;                                  '..."

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FConstraintTemplates%2FCONSTRAINT_TEMPLATE.ttl parsed as ttl

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> at line 23 of <>:
Bad syntax (expected item in list or ')') at ^ in:
"...b' ?Value := "5"\n        ( ids:pipEndpoint ?AttributeLocation '^b'; )?       # A URI or path expression to the target attribut'..."

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FNTimesUsageTemplates%2FN_TIMES_USAGE_OFFER_TEMPLATE.ttl parsed as ttl

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> at line 21 of <>:
Bad syntax (expected item in list or ')') at ^ in:
"...b'!"@en ;\n    (\n      (ids:provider idsc:PARTICIPANT_TEMPLATE '^b';)\n    | # or\n      (ids:consumer idsc:PARTICIPANT_TEMPLATE '..."

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FNTimesUsageTemplates%2FN_TIMES_USAGE_AGREEMENT_TEMPLATE.ttl parsed as ttl

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> at line 35 of <>:
Bad syntax (expected item in list or ')') at ^ in:
"...b'      ] ;\n        ( ids:constraint idsc:CONSTRAINT_TEMPLATE '^b'; )*      # zero or more Constraints\n        ( ids:preDuty i'..."

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FNTimesUsageTemplates%2FN_TIMES_USAGE_REQUEST_TEMPLATE.ttl parsed as ttl

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> at line 21 of <>:
Bad syntax (expected item in list or ')') at ^ in:
"...b'!"@en ;\n    (\n      (ids:provider idsc:PARTICIPANT_TEMPLATE '^b';)\n    | # or\n      (ids:consumer idsc:PARTICIPANT_TEMPLATE '..."

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FActionTemplates%2FACTION_TEMPLATE.ttl parsed as ttl

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> at line 19 of <>:
Bad syntax (expected item in list or ')') at ^ in:
"...b'          # directly insert the Action URI and nothing else\n'^b'| # or\n    [\n        a ids:Action ;\n        ids:includedIn ?'..."

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FPermissionTemplates%2FREQUEST_PERMISSION_TEMPLATE.ttl parsed as ttl

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> at line 17 of <>:
Bad syntax (expected item in list or ')') at ^ in:
"...b'ssion ;\n    (\n      (ids:assigner idsc:PARTICIPANT_TEMPLATE '^b';)\n    | # or\n      (ids:assignee idsc:PARTICIPANT_TEMPLATE '..."

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FPermissionTemplates%2FOFFER_PERMISSION_TEMPLATE.ttl parsed as ttl

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> at line 17 of <>:
Bad syntax (expected item in list or ')') at ^ in:
"...b'ssion ;\n    (\n      (ids:assigner idsc:PARTICIPANT_TEMPLATE '^b';)\n    | # or\n      (ids:assignee idsc:PARTICIPANT_TEMPLATE '..."

---
File: https://raw.githubusercontent.com/International-Data-Spaces-Association/InformationModel/develop/examples%2Fcontracts-and-usage-policy%2Ftemplates%2FPermissionTemplates%2FAGREEMENT_PERMISSION_TEMPLATE.ttl parsed as ttl

In repository: https://github.com/International-Data-Spaces-Association/InformationModel
> at line 20 of <>:
Bad syntax (objectList expected) at ^ in:
"...b'TEMPLATE ;\n    [ ids:constraint idsc:CONSTRAINT_TEMPLATE ; ]'^b'*      # zero or more Constraints\n    [ ids:preDuty idsc:OBL'..."

---
File: https://raw.githubusercontent.com/Kaljurand/owl-verbalizer/master/ontologies%2Fabbr_iri_test4.owl parsed as xml

In repository: https://github.com/Kaljurand/owl-verbalizer
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/ontologies/abbr_iri_test4.owl:19:38: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#Class

---
File: https://raw.githubusercontent.com/Kaljurand/owl-verbalizer/master/ontologies%2Fabbr_iri_test1.owl parsed as xml

In repository: https://github.com/Kaljurand/owl-verbalizer
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/ontologies/abbr_iri_test1.owl:12:22: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#AbbreviatedIRI

---
File: https://raw.githubusercontent.com/Kaljurand/owl-verbalizer/master/ontologies%2Ftests.owl parsed as xml

In repository: https://github.com/Kaljurand/owl-verbalizer
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/ontologies/tests.owl:13:42: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#IRI

---
File: https://raw.githubusercontent.com/Kaljurand/owl-verbalizer/master/ontologies%2Fabbr_iri_test3.owl parsed as xml

In repository: https://github.com/Kaljurand/owl-verbalizer
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/ontologies/abbr_iri_test3.owl:19:8: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#ObjectMinCardinality

---
File: https://raw.githubusercontent.com/Kaljurand/owl-verbalizer/master/ontologies%2Fabbr_iri_test2.owl parsed as xml

In repository: https://github.com/Kaljurand/owl-verbalizer
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/ontologies/abbr_iri_test2.owl:12:22: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#AbbreviatedIRI

---
File: https://raw.githubusercontent.com/Kaljurand/owl-verbalizer/master/ontologies%2Fgalen%2Ffull-galen.owl2xml.owl parsed as xml

In repository: https://github.com/Kaljurand/owl-verbalizer
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/ontologies/galen/full-galen.owl2xml.owl:72308:47: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#Class

---
File: https://raw.githubusercontent.com/Kaljurand/owl-verbalizer/master/examples%2Fpizza.owl parsed as xml

In repository: https://github.com/Kaljurand/owl-verbalizer
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/examples/pizza.owl:124:82: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#Literal

---
File: https://raw.githubusercontent.com/Kaljurand/owl-verbalizer/master/examples%2Fnouns.owl parsed as xml

In repository: https://github.com/Kaljurand/owl-verbalizer
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/examples/nouns.owl:8:45: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#IRI

---
File: https://raw.githubusercontent.com/Kaljurand/owl-verbalizer/master/examples%2Fmary.owl parsed as xml

In repository: https://github.com/Kaljurand/owl-verbalizer
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/examples/mary.owl:13:32: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#Class

---
File: https://raw.githubusercontent.com/Kaljurand/owl-verbalizer/master/examples%2Fprimer_20091027.owl parsed as xml

In repository: https://github.com/Kaljurand/owl-verbalizer
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/examples/primer_20091027.owl:44:16: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#IRI

---
File: https://raw.githubusercontent.com/Kaljurand/owl-verbalizer/master/examples%2Fpeople.owl parsed as xml

In repository: https://github.com/Kaljurand/owl-verbalizer
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/examples/people.owl:312:88: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#ObjectProperty

---
File: https://raw.githubusercontent.com/Kaljurand/owl-verbalizer/master/examples%2Fexample_old.owl parsed as xml

In repository: https://github.com/Kaljurand/owl-verbalizer
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/examples/example_old.owl:19:8: Repeat node-elements inside property elements: http://www.w3.org/2006/12/owl11-xml#Annotation

---
File: https://raw.githubusercontent.com/Kaljurand/owl-verbalizer/master/examples%2Fexample.owl parsed as xml

In repository: https://github.com/Kaljurand/owl-verbalizer
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/examples/example.owl:11:43: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#IRI

---
File: https://raw.githubusercontent.com/EcoStruxure/OLGA/master/OLGA%2FOLGA-Core%2Fsrc%2Ftest%2Fresources%2Fm3%2Fm3-lite.owl parsed as xml

In repository: https://github.com/EcoStruxure/OLGA
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/OLGA/OLGA-Core/src/test/resources/m3/m3-lite.owl:1469:298: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/avicomp/ont-api/master/src%2Ftest%2Fresources%2Fowlapi%2Fannotatedpropertychain.ttl.rdf parsed as xml

In repository: https://github.com/avicomp/ont-api
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/test/resources/owlapi/annotatedpropertychain.ttl.rdf:1:0: syntax error

---
File: https://raw.githubusercontent.com/avicomp/ont-api/master/src%2Ftest%2Fresources%2Fowlapi%2Fprimer.turtle.rdf parsed as xml

In repository: https://github.com/avicomp/ont-api
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/test/resources/owlapi/primer.turtle.rdf:1:0: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/avicomp/ont-api/master/src%2Ftest%2Fresources%2Fontapi%2Fload-test-a.owl parsed as xml

In repository: https://github.com/avicomp/ont-api
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/test/resources/ontapi/load-test-a.owl:1:0: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/avicomp/ont-api/master/src%2Ftest%2Fresources%2Fontapi%2Ftest2.owl parsed as xml

In repository: https://github.com/avicomp/ont-api
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/test/resources/ontapi/test2.owl:25:31: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#Class

---
File: https://raw.githubusercontent.com/avicomp/ont-api/master/src%2Ftest%2Fresources%2Fowlapi%2FextraBlankNodes.owl parsed as xml

In repository: https://github.com/avicomp/ont-api
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/test/resources/owlapi/extraBlankNodes.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/avicomp/ont-api/master/src%2Ftest%2Fresources%2Fowlapi%2Fobo%2FCopy+of+import_test_main.owl parsed as xml

In repository: https://github.com/avicomp/ont-api
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/test/resources/owlapi/obo/Copy%20of%20import_test_main.owl:1:0: syntax error

---
File: https://raw.githubusercontent.com/avicomp/ont-api/master/src%2Ftest%2Fresources%2Fowlapi%2Fobo%2Fsimple.owl parsed as xml

In repository: https://github.com/avicomp/ont-api
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/test/resources/owlapi/obo/simple.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/avicomp/ont-api/master/src%2Ftest%2Fresources%2Fowlapi%2Fobo%2Fimport_test_imported.owl parsed as xml

In repository: https://github.com/avicomp/ont-api
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/test/resources/owlapi/obo/import_test_imported.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/avicomp/ont-api/master/src%2Ftest%2Fresources%2Fowlapi%2Fobo%2FsubAnnotProp.owl parsed as xml

In repository: https://github.com/avicomp/ont-api
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/test/resources/owlapi/obo/subAnnotProp.owl:1:0: syntax error

---
File: https://raw.githubusercontent.com/avicomp/ont-api/master/src%2Ftest%2Fresources%2Fontapi%2Fload-test-b.ttl parsed as ttl

In repository: https://github.com/avicomp/ont-api
> at line 55 of <>:
Bad syntax (']' expected) at ^ in:
"...b'                       ) ;\n   rdfs:isDefinedBy :do-not-click'^b'/please\n ] .\n\n[ rdf:type owl:Axiom ;\n   owl:annotatedSource '..."

---
File: https://raw.githubusercontent.com/avicomp/ont-api/master/src%2Ftest%2Fresources%2Fontapi%2Fwrong-core.ttl parsed as ttl

In repository: https://github.com/avicomp/ont-api
> at line 3 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'# no prefixes.\n\n[ a '^b'owl:Ontology ;\n     owl:imports <http://www.w3.org/2013/12/F'..."

---
File: https://raw.githubusercontent.com/avicomp/ont-api/master/src%2Ftest%2Fresources%2Fowlapi%2Fobo%2Ftaxon_union_terms.obo

In repository: https://github.com/avicomp/ont-api
> local variable 'header' referenced before assignment

---
File: https://raw.githubusercontent.com/avicomp/ont-api/master/src%2Ftest%2Fresources%2Fowlapi%2Fobo%2Fchaintest.obo

In repository: https://github.com/avicomp/ont-api
> local variable 'header' referenced before assignment

---
File: https://raw.githubusercontent.com/avicomp/ont-api/master/src%2Ftest%2Fresources%2Fowlapi%2Fobo%2Fxptest.obo

In repository: https://github.com/avicomp/ont-api
> local variable 'header' referenced before assignment

---
File: https://raw.githubusercontent.com/avicomp/ont-api/master/src%2Ftest%2Fresources%2Fowlapi%2Fobo%2Fsimplego.obo

In repository: https://github.com/avicomp/ont-api
> Tag-value pair parsing failed for:
[Term]


---
File: https://raw.githubusercontent.com/avicomp/ont-api/master/src%2Ftest%2Fresources%2Fowlapi%2Fobo%2Fxref_escapecolon.obo

In repository: https://github.com/avicomp/ont-api
> Tag-value pair parsing failed for:
[Term]


---
File: https://raw.githubusercontent.com/avicomp/ont-api/master/src%2Ftest%2Fresources%2Fowlapi%2Fobo%2Fsubset_test.obo

In repository: https://github.com/avicomp/ont-api
> Tag-value pair parsing failed for:
[Term]


---
File: https://raw.githubusercontent.com/avicomp/ont-api/master/src%2Ftest%2Fresources%2Fowlapi%2Fobo%2Fcaro_modified.obo

In repository: https://github.com/avicomp/ont-api
> Tag-value pair parsing failed for:
[Typedef]


---
File: https://raw.githubusercontent.com/avicomp/ont-api/master/src%2Ftest%2Fresources%2Fowlapi%2Fobo%2Fempty_lines.obo

In repository: https://github.com/avicomp/ont-api
> local variable 'header' referenced before assignment

---
File: https://raw.githubusercontent.com/kbss-cvut/jopa/master/jopa-owl2java%2Fsrc%2Ftest%2Fresources%2Fmodel.rdf parsed as xml

In repository: https://github.com/kbss-cvut/jopa
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/jopa-owl2java/src/test/resources/model.rdf:1:0: no element found

---
File: https://raw.githubusercontent.com/kbss-cvut/jopa/master/jopa-owl2java%2Fsrc%2Ftest%2Fresources%2Fbad-import.owl parsed as xml

In repository: https://github.com/kbss-cvut/jopa
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/jopa-owl2java/src/test/resources/bad-import.owl:21:39: no element found

---
File: https://raw.githubusercontent.com/biolink/biolinkml/master/meta.jsonld parsed as json-ld

In repository: https://github.com/biolink/biolinkml
> [Errno 2] No such file or directory: '/Users/hsolbrig/git/biolink/biolinkml/tests/input/includes/types.context.jsonld'

---
File: https://raw.githubusercontent.com/biolink/biolinkml/master/includes%2Fextensions.jsonld parsed as json-ld

In repository: https://github.com/biolink/biolinkml
> [Errno 2] No such file or directory: '/Users/hsolbrig/git/biolink/biolinkml/tests/input/includes/types.context.jsonld'

---
File: https://raw.githubusercontent.com/biolink/biolinkml/master/includes%2Fannotations.jsonld parsed as json-ld

In repository: https://github.com/biolink/biolinkml
> [Errno 2] No such file or directory: '/Users/hsolbrig/git/biolink/biolinkml/tests/input/includes/types.context.jsonld'

---
File: https://raw.githubusercontent.com/biolink/biolinkml/master/includes%2Fmappings.jsonld parsed as json-ld

In repository: https://github.com/biolink/biolinkml
> [Errno 2] No such file or directory: '/Users/hsolbrig/git/biolink/biolinkml/tests/input/includes/types.context.jsonld'

---
File: https://raw.githubusercontent.com/biolink/biolinkml/master/tests%2Ftest_scripts%2Foutput%2Fgenjsonld%2Fmeta.jsonld parsed as json-ld

In repository: https://github.com/biolink/biolinkml
> [Errno 2] No such file or directory: '/home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/tests/test_scripts/output/genjsonld/output/gencontext/meta.jsonld'

---
File: https://raw.githubusercontent.com/biolink/biolinkml/master/tests%2Finput%2Fincludes%2Fannotations.jsonld parsed as json-ld

In repository: https://github.com/biolink/biolinkml
> [Errno 2] No such file or directory: '/Users/solbrig/git/biolink/biolinkml/tests/input/includes/extensions.context.jsonld'

---
File: https://raw.githubusercontent.com/biolink/biolinkml/master/meta.owl parsed as xml

In repository: https://github.com/biolink/biolinkml
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/meta.owl:1:0: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/biolink/biolinkml/master/tests%2Ftest_issues%2Foutput%2Fissue_290.owl parsed as xml

In repository: https://github.com/biolink/biolinkml
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/tests/test_issues/output/issue_290.owl:1:0: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/biolink/biolinkml/master/tests%2Ftest_issues%2Foutput%2Fissue_163.owl parsed as xml

In repository: https://github.com/biolink/biolinkml
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/tests/test_issues/output/issue_163.owl:1:0: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/biolink/biolinkml/master/tests%2Ftest_issues%2Foutput%2Fissue_163c.owl parsed as xml

In repository: https://github.com/biolink/biolinkml
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/tests/test_issues/output/issue_163c.owl:1:0: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/biolink/biolinkml/master/tests%2Ftest_issues%2Foutput%2Fissue_163b.owl parsed as xml

In repository: https://github.com/biolink/biolinkml
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/tests/test_issues/output/issue_163b.owl:1:0: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/biolink/biolinkml/master/tests%2Ftest_issues%2Foutput%2Fissue_tccm%2Fminimalmodel.owl parsed as xml

In repository: https://github.com/biolink/biolinkml
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/tests/test_issues/output/issue_tccm/minimalmodel.owl:1:0: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/biolink/biolinkml/master/tests%2Foutput%2Fmeta.owl parsed as xml

In repository: https://github.com/biolink/biolinkml
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/tests/output/meta.owl:1:0: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/biolink/biolinkml/master/tests%2Ftest_biolink_model%2Foutput%2Fbiolink-model.native.owl parsed as xml

In repository: https://github.com/biolink/biolinkml
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/tests/test_biolink_model/output/biolink-model.native.owl:1:0: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/biolink/biolinkml/master/tests%2Ftest_biolink_model%2Foutput%2Fbiolink-model.owl parsed as xml

In repository: https://github.com/biolink/biolinkml
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/tests/test_biolink_model/output/biolink-model.owl:1:0: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/biolink/biolinkml/master/tests%2Ftest_utils%2Foutput%2Fowl2.owl parsed as xml

In repository: https://github.com/biolink/biolinkml
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/tests/test_utils/output/owl2.owl:1:0: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/biolink/biolinkml/master/tests%2Ftest_utils%2Foutput%2Fowl1.owl parsed as xml

In repository: https://github.com/biolink/biolinkml
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/tests/test_utils/output/owl1.owl:1:0: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/biolink/biolinkml/master/tests%2Fdata%2Fhp_f.ttl parsed as ttl

In repository: https://github.com/biolink/biolinkml
> at line 70315 of <>:
Bad syntax (Prefix "xsd:" not bound) at ^ in:
"...b'os:seeAlso "http://www.human-phenotype-ontology.org#HP_30000'^b'79"^^xsd:anyURI ;\n\nccdh:SpecimenType a skos:Collection ;\n   '..."

---
File: https://raw.githubusercontent.com/ISA-tools/stato/dev/dev%2Fontology%2Fstato-experimental.owl parsed as xml

In repository: https://github.com/ISA-tools/stato
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/dev/ontology/stato-experimental.owl:43:16: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#ObjectSomeValuesFrom

---
File: https://raw.githubusercontent.com/ISA-tools/stato/dev/dev%2Fontology%2Fstato.owl parsed as xml

In repository: https://github.com/ISA-tools/stato
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/dev/ontology/stato.owl:18:70: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#Literal

---
File: https://raw.githubusercontent.com/ISA-tools/stato/dev/dev%2Fontology%2Freasoned%2Fowl%2Fstato-reasoned.owl parsed as xml

In repository: https://github.com/ISA-tools/stato
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/dev/ontology/reasoned/owl/stato-reasoned.owl:16:113: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#Literal

---
File: https://raw.githubusercontent.com/ISA-tools/stato/dev/releases%2F1.0%2Fstato.owl parsed as xml

In repository: https://github.com/ISA-tools/stato
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/releases/1.0/stato.owl:16:206: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#Literal

---
File: https://raw.githubusercontent.com/ISA-tools/stato/dev/releases%2F1.1%2Fstato.owl parsed as xml

In repository: https://github.com/ISA-tools/stato
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/releases/1.1/stato.owl:16:206: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#Literal

---
File: https://raw.githubusercontent.com/ISA-tools/stato/dev/releases%2F1.2%2Fstato.owl parsed as xml

In repository: https://github.com/ISA-tools/stato
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/releases/1.2/stato.owl:16:117: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#Literal

---
File: https://raw.githubusercontent.com/ISA-tools/stato/dev/releases%2F1.3%2Fstato.owl parsed as xml

In repository: https://github.com/ISA-tools/stato
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/releases/1.3/stato.owl:17:117: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#Literal

---
File: https://raw.githubusercontent.com/owlcs/ont-api/master/src%2Ftest%2Fresources%2Fowlapi%2Fannotatedpropertychain.ttl.rdf parsed as xml

In repository: https://github.com/owlcs/ont-api
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/test/resources/owlapi/annotatedpropertychain.ttl.rdf:1:0: syntax error

---
File: https://raw.githubusercontent.com/owlcs/ont-api/master/src%2Ftest%2Fresources%2Fowlapi%2Fprimer.turtle.rdf parsed as xml

In repository: https://github.com/owlcs/ont-api
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/test/resources/owlapi/primer.turtle.rdf:1:0: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/owlcs/ont-api/master/src%2Ftest%2Fresources%2Fontapi%2Fload-test-a.owl parsed as xml

In repository: https://github.com/owlcs/ont-api
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/test/resources/ontapi/load-test-a.owl:1:0: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/owlcs/ont-api/master/src%2Ftest%2Fresources%2Fontapi%2Ftest2.owl parsed as xml

In repository: https://github.com/owlcs/ont-api
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/test/resources/ontapi/test2.owl:25:31: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#Class

---
File: https://raw.githubusercontent.com/owlcs/ont-api/master/src%2Ftest%2Fresources%2Fowlapi%2FextraBlankNodes.owl parsed as xml

In repository: https://github.com/owlcs/ont-api
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/test/resources/owlapi/extraBlankNodes.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/owlcs/ont-api/master/src%2Ftest%2Fresources%2Fowlapi%2Fobo%2FCopy+of+import_test_main.owl parsed as xml

In repository: https://github.com/owlcs/ont-api
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/test/resources/owlapi/obo/Copy%20of%20import_test_main.owl:1:0: syntax error

---
File: https://raw.githubusercontent.com/owlcs/ont-api/master/src%2Ftest%2Fresources%2Fowlapi%2Fobo%2Fsimple.owl parsed as xml

In repository: https://github.com/owlcs/ont-api
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/test/resources/owlapi/obo/simple.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/owlcs/ont-api/master/src%2Ftest%2Fresources%2Fowlapi%2Fobo%2Fimport_test_imported.owl parsed as xml

In repository: https://github.com/owlcs/ont-api
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/test/resources/owlapi/obo/import_test_imported.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/owlcs/ont-api/master/src%2Ftest%2Fresources%2Fowlapi%2Fobo%2FsubAnnotProp.owl parsed as xml

In repository: https://github.com/owlcs/ont-api
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/test/resources/owlapi/obo/subAnnotProp.owl:1:0: syntax error

---
File: https://raw.githubusercontent.com/owlcs/ont-api/master/src%2Ftest%2Fresources%2Fontapi%2Fload-test-b.ttl parsed as ttl

In repository: https://github.com/owlcs/ont-api
> at line 55 of <>:
Bad syntax (']' expected) at ^ in:
"...b'                       ) ;\n   rdfs:isDefinedBy :do-not-click'^b'/please\n ] .\n\n[ rdf:type owl:Axiom ;\n   owl:annotatedSource '..."

---
File: https://raw.githubusercontent.com/owlcs/ont-api/master/src%2Ftest%2Fresources%2Fontapi%2Fwrong-core.ttl parsed as ttl

In repository: https://github.com/owlcs/ont-api
> at line 3 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"b'# no prefixes.\n\n[ a '^b'owl:Ontology ;\n     owl:imports <http://www.w3.org/2013/12/F'..."

---
File: https://raw.githubusercontent.com/owlcs/ont-api/master/src%2Ftest%2Fresources%2Fowlapi%2Fobo%2Ftaxon_union_terms.obo

In repository: https://github.com/owlcs/ont-api
> local variable 'header' referenced before assignment

---
File: https://raw.githubusercontent.com/owlcs/ont-api/master/src%2Ftest%2Fresources%2Fowlapi%2Fobo%2Fchaintest.obo

In repository: https://github.com/owlcs/ont-api
> local variable 'header' referenced before assignment

---
File: https://raw.githubusercontent.com/owlcs/ont-api/master/src%2Ftest%2Fresources%2Fowlapi%2Fobo%2Fxptest.obo

In repository: https://github.com/owlcs/ont-api
> local variable 'header' referenced before assignment

---
File: https://raw.githubusercontent.com/owlcs/ont-api/master/src%2Ftest%2Fresources%2Fowlapi%2Fobo%2Fsimplego.obo

In repository: https://github.com/owlcs/ont-api
> Tag-value pair parsing failed for:
[Term]


---
File: https://raw.githubusercontent.com/owlcs/ont-api/master/src%2Ftest%2Fresources%2Fowlapi%2Fobo%2Fxref_escapecolon.obo

In repository: https://github.com/owlcs/ont-api
> Tag-value pair parsing failed for:
[Term]


---
File: https://raw.githubusercontent.com/owlcs/ont-api/master/src%2Ftest%2Fresources%2Fowlapi%2Fobo%2Fsubset_test.obo

In repository: https://github.com/owlcs/ont-api
> Tag-value pair parsing failed for:
[Term]


---
File: https://raw.githubusercontent.com/owlcs/ont-api/master/src%2Ftest%2Fresources%2Fowlapi%2Fobo%2Fcaro_modified.obo

In repository: https://github.com/owlcs/ont-api
> Tag-value pair parsing failed for:
[Typedef]


---
File: https://raw.githubusercontent.com/owlcs/ont-api/master/src%2Ftest%2Fresources%2Fowlapi%2Fobo%2Fempty_lines.obo

In repository: https://github.com/owlcs/ont-api
> local variable 'header' referenced before assignment

---
File: https://raw.githubusercontent.com/ansell/rdf4j-schema-generator/master/core%2Fsrc%2Ftest%2Fresources%2Fldp.ttl parsed as ttl

In repository: https://github.com/ansell/rdf4j-schema-generator
> at line 13 of <>:
Bad syntax (newline found in string literal) at ^ in:
"...b'rovides an informal representation of the concepts and terms'^b'\n\tas defined in the LDP specification.  Consult the LDP spec'..."

---
File: https://raw.githubusercontent.com/sisinflab-swot/OWL-API-for-iOS/master/OWLAPITests%2FDataset%2Fbuilding.owl parsed as xml

In repository: https://github.com/sisinflab-swot/OWL-API-for-iOS
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/OWLAPITests/Dataset/building.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/sisinflab-swot/OWL-API-for-iOS/master/lib%2Fcowl%2Fdata%2Fexample_pizza.owl parsed as xml

In repository: https://github.com/sisinflab-swot/OWL-API-for-iOS
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/lib/cowl/data/example_pizza.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/sisinflab-swot/OWL-API-for-iOS/master/lib%2Fcowl%2Fdata%2Ftest_import.owl parsed as xml

In repository: https://github.com/sisinflab-swot/OWL-API-for-iOS
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/lib/cowl/data/test_import.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/sisinflab-swot/OWL-API-for-iOS/master/lib%2Fcowl%2Fdata%2Ftest_onto.owl parsed as xml

In repository: https://github.com/sisinflab-swot/OWL-API-for-iOS
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/lib/cowl/data/test_onto.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/robotenique/movies-ontology/master/ontologia_manchester.owl parsed as xml

In repository: https://github.com/robotenique/movies-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/ontologia_manchester.owl:1:0: syntax error

---
File: https://raw.githubusercontent.com/EnvironmentOntology/environmental-exposure-ontology/master/src%2Fresources%2Fwikidata%2Fexposure-symptom-assocs.rdf parsed as xml

In repository: https://github.com/EnvironmentOntology/environmental-exposure-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/resources/wikidata/exposure-symptom-assocs.rdf:1:0: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/EnvironmentOntology/environmental-exposure-ontology/master/patterns%2Fpattern.owl parsed as xml

In repository: https://github.com/EnvironmentOntology/environmental-exposure-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/patterns/pattern.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/EnvironmentOntology/environmental-exposure-ontology/master/patterns%2Fdefinitions.owl parsed as xml

In repository: https://github.com/EnvironmentOntology/environmental-exposure-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/patterns/definitions.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/EnvironmentOntology/environmental-exposure-ontology/master/src%2Fpatterns%2Fpattern.owl parsed as xml

In repository: https://github.com/EnvironmentOntology/environmental-exposure-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/patterns/pattern.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/EnvironmentOntology/environmental-exposure-ontology/master/src%2Fpatterns%2Fdefinitions.owl parsed as xml

In repository: https://github.com/EnvironmentOntology/environmental-exposure-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/patterns/definitions.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/EnvironmentOntology/environmental-exposure-ontology/master/src%2Fpatterns%2Fdata%2Fold_modules%2Fexposure_to_levels_in_medium.owl parsed as xml

In repository: https://github.com/EnvironmentOntology/environmental-exposure-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/patterns/data/old_modules/exposure_to_levels_in_medium.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/EnvironmentOntology/environmental-exposure-ontology/master/src%2Fpatterns%2Fdata%2Fold_modules%2Fexposure_to_environmental_process.owl parsed as xml

In repository: https://github.com/EnvironmentOntology/environmental-exposure-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/patterns/data/old_modules/exposure_to_environmental_process.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/EnvironmentOntology/environmental-exposure-ontology/master/src%2Fpatterns%2Fdata%2Fold_modules%2Fexposure_to_environmental_condition.owl parsed as xml

In repository: https://github.com/EnvironmentOntology/environmental-exposure-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/patterns/data/old_modules/exposure_to_environmental_condition.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/EnvironmentOntology/environmental-exposure-ontology/master/src%2Fpatterns%2Fdata%2Fold_modules%2Fexposure_to_radiation.owl parsed as xml

In repository: https://github.com/EnvironmentOntology/environmental-exposure-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/patterns/data/old_modules/exposure_to_radiation.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/EnvironmentOntology/environmental-exposure-ontology/master/src%2Fpatterns%2Fdata%2Fold_modules%2Fprenatal.owl parsed as xml

In repository: https://github.com/EnvironmentOntology/environmental-exposure-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/patterns/data/old_modules/prenatal.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/EnvironmentOntology/environmental-exposure-ontology/master/src%2Fpatterns%2Fdata%2Fold_modules%2Fexposure_to_chemical.owl parsed as xml

In repository: https://github.com/EnvironmentOntology/environmental-exposure-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/patterns/data/old_modules/exposure_to_chemical.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/EnvironmentOntology/environmental-exposure-ontology/master/src%2Fpatterns%2Fdata%2Fold_modules%2Fexposure_via_route.owl parsed as xml

In repository: https://github.com/EnvironmentOntology/environmental-exposure-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/patterns/data/old_modules/exposure_via_route.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/EnvironmentOntology/environmental-exposure-ontology/master/src%2Fpatterns%2Fdata%2Fold_modules%2Factivity.owl parsed as xml

In repository: https://github.com/EnvironmentOntology/environmental-exposure-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/patterns/data/old_modules/activity.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/EnvironmentOntology/environmental-exposure-ontology/master/src%2Fpatterns%2Fdata%2Fold_modules%2Fexposure_to_change_in_levels.owl parsed as xml

In repository: https://github.com/EnvironmentOntology/environmental-exposure-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/patterns/data/old_modules/exposure_to_change_in_levels.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/EnvironmentOntology/environmental-exposure-ontology/master/src%2Fpatterns%2Fdata%2Fold_modules%2Fexposure_to_chemical_with_role.owl parsed as xml

In repository: https://github.com/EnvironmentOntology/environmental-exposure-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/patterns/data/old_modules/exposure_to_chemical_with_role.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/EnvironmentOntology/environmental-exposure-ontology/master/src%2Fpatterns%2Fdata%2Fold_modules%2Fsurgical_procedure.owl parsed as xml

In repository: https://github.com/EnvironmentOntology/environmental-exposure-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/patterns/data/old_modules/surgical_procedure.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/EnvironmentOntology/environmental-exposure-ontology/master/src%2Fpatterns%2Fdata%2Fold_modules%2Fexposure_to_material.owl parsed as xml

In repository: https://github.com/EnvironmentOntology/environmental-exposure-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/patterns/data/old_modules/exposure_to_material.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/EnvironmentOntology/environmental-exposure-ontology/master/src%2Fontology%2Fecto-idranges.owl parsed as xml

In repository: https://github.com/EnvironmentOntology/environmental-exposure-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/ontology/ecto-idranges.owl:1:1: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/EnvironmentOntology/environmental-exposure-ontology/master/src%2Fontology%2Fecto-edit.owl parsed as xml

In repository: https://github.com/EnvironmentOntology/environmental-exposure-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/ontology/ecto-edit.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/EnvironmentOntology/environmental-exposure-ontology/master/imports%2Fsynonyms.obo

In repository: https://github.com/EnvironmentOntology/environmental-exposure-ontology
> local variable 'header' referenced before assignment

---
File: https://raw.githubusercontent.com/EnvironmentOntology/environmental-exposure-ontology/master/imports%2Fcurated_synonyms.obo

In repository: https://github.com/EnvironmentOntology/environmental-exposure-ontology
> local variable 'header' referenced before assignment

---
File: https://raw.githubusercontent.com/EnvironmentOntology/environmental-exposure-ontology/master/src%2Fontology%2Farchive%2Fcurated_synonyms.obo

In repository: https://github.com/EnvironmentOntology/environmental-exposure-ontology
> local variable 'header' referenced before assignment

---
File: https://raw.githubusercontent.com/DataFabricRus/ontology-fts/master/fibo-ru%2Fexamples%2Fle-itmo_university.ttl parsed as ttl

In repository: https://github.com/DataFabricRus/ontology-fts
> at line 46 of <>:
Bad syntax (newline found in string literal) at ^ in:
"...b'\x9b\xd0\xac\xd0\x9d\xd0\x9e\xd0\x95 \xd0\x93\xd0\x9e\xd0\xa1\xd0\xa3\xd0\x94\xd0\x90\xd0\xa0\xd0\xa1\xd0\xa2\xd0\x92\xd0\x95\xd0\x9d\xd0\x9d\xd0\x9e\xd0\x95 \xd0\x90\xd0\x92\xd0\xa2\xd0\x9e\xd0\x9d\xd0\x9e\xd0\x9c\xd0\x9d\xd0\x9e\xd0'^b'\x95 \xd0\x9e\xd0\x91\xd0\xa0\xd0\x90\xd0\x97\xd0\x9e\xd0\x92\xd0\x90\xd0\xa2\xd0\x95\xd0\x9b\xd0\xac\xd0\x9d\xd0\x9e\xd0\x95 \xd0\xa3\xd0\xa7\xd0\xa0\xd0\x95\xd0\x96\xd0\x94\xd0\x95\xd0\x9d\xd0\x98\xd0\x95 \xd0\x92\xd0\xab\xd0\xa1'..."

---
File: https://raw.githubusercontent.com/morteza/ontologies/master/AIRS%2Fairs.owl parsed as xml

In repository: https://github.com/morteza/ontologies
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/AIRS/airs.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/morteza/ontologies/master/IncidentReport%2FIncidentReportOntology.owl parsed as xml

In repository: https://github.com/morteza/ontologies
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/IncidentReport/IncidentReportOntology.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/morteza/ontologies/master/FaultTolerantRTOS%2FFaultTolerantRTOS.owl parsed as xml

In repository: https://github.com/morteza/ontologies
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/FaultTolerantRTOS/FaultTolerantRTOS.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/morteza/ontologies/master/Organization%2Forganization.owl parsed as xml

In repository: https://github.com/morteza/ontologies
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/Organization/organization.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/morteza/ontologies/master/WSN%2FWSN.owl parsed as xml

In repository: https://github.com/morteza/ontologies
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/WSN/WSN.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/morteza/ontologies/master/SystemSoftware%2FSystemSoftware.owl parsed as xml

In repository: https://github.com/morteza/ontologies
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/SystemSoftware/SystemSoftware.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/morteza/ontologies/master/UI%2Fui.owl parsed as xml

In repository: https://github.com/morteza/ontologies
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/UI/ui.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/morteza/ontologies/master/NervousSystem%2FNervousSystem.owl parsed as xml

In repository: https://github.com/morteza/ontologies
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/NervousSystem/NervousSystem.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/morteza/ontologies/master/PhilosophyOfMind%2Fphil_mind.owl parsed as xml

In repository: https://github.com/morteza/ontologies
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/PhilosophyOfMind/phil_mind.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/morteza/ontologies/master/AnytimeOS%2Fanytime_os.owl parsed as xml

In repository: https://github.com/morteza/ontologies
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/AnytimeOS/anytime_os.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/morteza/ontologies/master/Negotiate%2Fnegotiate.owl parsed as xml

In repository: https://github.com/morteza/ontologies
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/Negotiate/negotiate.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/italia/daf-semantics/master/semantic_standardization%2Fontologie-vocabolari-controllati%2FVocabolariControllati%2Ftheme-subtheme-mapping%2Ftheme-subtheme-mapping.jsonld parsed as json-ld

In repository: https://github.com/italia/daf-semantics
> Expecting property name enclosed in double quotes: line 1587 column 1 (char 39975)

---
File: https://raw.githubusercontent.com/italia/daf-semantics/master/semantic_standardization%2Fontologie-vocabolari-controllati%2FVocabolariControllati%2Fpoi-category-classification%2Fpoi-category-classification.jsonld parsed as json-ld

In repository: https://github.com/italia/daf-semantics
> Expecting property name enclosed in double quotes: line 22 column 1 (char 819)

---
File: https://raw.githubusercontent.com/italia/daf-semantics/master/semantic_standardization%2Fontologie-vocabolari-controllati%2FVocabolariControllati%2Fclassifications-for-people%2Fgender%2Fgender.jsonld parsed as json-ld

In repository: https://github.com/italia/daf-semantics
> Expecting property name enclosed in double quotes: line 140 column 1 (char 4607)

---
File: https://raw.githubusercontent.com/italia/daf-semantics/master/semantic_standardization%2Fontologie-vocabolari-controllati%2FVocabolariControllati%2Ftheme-subtheme-mapping%2Ftheme-subtheme-mapping.rdf parsed as xml

In repository: https://github.com/italia/daf-semantics
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/semantic_standardization/ontologie-vocabolari-controllati/VocabolariControllati/theme-subtheme-mapping/theme-subtheme-mapping.rdf:14:1: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/italia/daf-semantics/master/semantic_standardization%2Fontologie-vocabolari-controllati%2FVocabolariControllati%2Fpoi-category-classification%2Fpoi-category-classification.rdf parsed as xml

In repository: https://github.com/italia/daf-semantics
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/semantic_standardization/ontologie-vocabolari-controllati/VocabolariControllati/poi-category-classification/poi-category-classification.rdf:16:1: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/italia/daf-semantics/master/semantic_standardization%2Fontologie-vocabolari-controllati%2FVocabolariControllati%2Fclassifications-for-people%2Fgender%2Fgender.rdf parsed as xml

In repository: https://github.com/italia/daf-semantics
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/semantic_standardization/ontologie-vocabolari-controllati/VocabolariControllati/classifications-for-people/gender/gender.rdf:21:1: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/italia/daf-semantics/master/semantic_repository%2Fdist%2Fdata%2Fdati-ontologie-vocabolari-controllati%2FVocabolariControllati%2FEventiPubblici%2FEventiPubblici.rdf parsed as xml

In repository: https://github.com/italia/daf-semantics
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/semantic_repository/dist/data/dati-ontologie-vocabolari-controllati/VocabolariControllati/EventiPubblici/EventiPubblici.rdf:1:1: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/italia/daf-semantics/master/semantic_manager%2Fdist%2Fdata%2Fdati-ontologie-vocabolari-controllati%2FVocabolariControllati%2FEventiPubblici%2FEventiPubblici.rdf parsed as xml

In repository: https://github.com/italia/daf-semantics
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/semantic_manager/dist/data/dati-ontologie-vocabolari-controllati/VocabolariControllati/EventiPubblici/EventiPubblici.rdf:1:1: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/italia/daf-semantics/master/semantic_standardization%2Fontologie-vocabolari-controllati%2FOntologie%2FCOV%2Fv0.2%2FCOV-AP_IT.owl parsed as xml

In repository: https://github.com/italia/daf-semantics
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/semantic_standardization/ontologie-vocabolari-controllati/Ontologie/COV/v0.2/COV-AP_IT.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/italia/daf-semantics/master/semantic_standardization%2Fontologie-vocabolari-controllati%2FOntologie%2FCPV%2Fv0.1%2Fperson.owl parsed as xml

In repository: https://github.com/italia/daf-semantics
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/semantic_standardization/ontologie-vocabolari-controllati/Ontologie/CPV/v0.1/person.owl:144:28: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#Class

---
File: https://raw.githubusercontent.com/italia/daf-semantics/master/semantic_standardization%2Fontologie-vocabolari-controllati%2FOntologie%2FIoT%2Fv0.7%2Falignments%2FIoT-AP_IT-aligns.owl parsed as xml

In repository: https://github.com/italia/daf-semantics
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/semantic_standardization/ontologie-vocabolari-controllati/Ontologie/IoT/v0.7/alignments/IoT-AP_IT-aligns.owl:147:49: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#Class

---
File: https://raw.githubusercontent.com/italia/daf-semantics/master/semantic_standardization%2Fontologie-vocabolari-controllati%2FOntologie%2FIoT%2Fv0.5%2Fcore%2FIoT-AP_IT.owl parsed as xml

In repository: https://github.com/italia/daf-semantics
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/semantic_standardization/ontologie-vocabolari-controllati/Ontologie/IoT/v0.5/core/IoT-AP_IT.owl:36:73: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#Literal

---
File: https://raw.githubusercontent.com/italia/daf-semantics/master/semantic_standardization%2Fontologie-vocabolari-controllati%2FOntologie%2FIoT%2Fv0.5%2Falignments%2FIoT-AP_IT-aligns.owl parsed as xml

In repository: https://github.com/italia/daf-semantics
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/semantic_standardization/ontologie-vocabolari-controllati/Ontologie/IoT/v0.5/alignments/IoT-AP_IT-aligns.owl:147:49: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#Class

---
File: https://raw.githubusercontent.com/italia/daf-semantics/master/semantic_standardization%2Fontologie-vocabolari-controllati%2FOntologie%2FIoT%2Fv0.6%2FIoT-AP_IT.owl parsed as xml

In repository: https://github.com/italia/daf-semantics
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/semantic_standardization/ontologie-vocabolari-controllati/Ontologie/IoT/v0.6/IoT-AP_IT.owl:36:89: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#Literal

---
File: https://raw.githubusercontent.com/italia/daf-semantics/master/semantic_standardization%2Fontologie-vocabolari-controllati%2FOntologie%2FIoT%2Fv0.4%2FIoT-AP_IT-test.owl parsed as xml

In repository: https://github.com/italia/daf-semantics
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/semantic_standardization/ontologie-vocabolari-controllati/Ontologie/IoT/v0.4/IoT-AP_IT-test.owl:36:73: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#Literal

---
File: https://raw.githubusercontent.com/italia/daf-semantics/master/semantic_standardization%2Fontologie-vocabolari-controllati%2FOntologie%2FIoT%2Fv0.4%2FIoT-AP_IT.owl parsed as xml

In repository: https://github.com/italia/daf-semantics
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/semantic_standardization/ontologie-vocabolari-controllati/Ontologie/IoT/v0.4/IoT-AP_IT.owl:36:73: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#Literal

---
File: https://raw.githubusercontent.com/italia/daf-semantics/master/semantic_repository%2Fdist%2Fdata%2Fdati-ontologie-vocabolari-controllati%2FOntologie%2FIoT-AP_IT%2Fv0.5%2Fcore%2FIoT-AP_IT.owl parsed as xml

In repository: https://github.com/italia/daf-semantics
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/semantic_repository/dist/data/dati-ontologie-vocabolari-controllati/Ontologie/IoT-AP_IT/v0.5/core/IoT-AP_IT.owl:36:73: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#Literal

---
File: https://raw.githubusercontent.com/italia/daf-semantics/master/semantic_repository%2Fdist%2Fdata%2Fdati-ontologie-vocabolari-controllati%2FOntologie%2FIoT-AP_IT%2Fv0.5%2Falignments%2FIoT-AP_IT-aligns.owl parsed as xml

In repository: https://github.com/italia/daf-semantics
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/semantic_repository/dist/data/dati-ontologie-vocabolari-controllati/Ontologie/IoT-AP_IT/v0.5/alignments/IoT-AP_IT-aligns.owl:147:49: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#Class

---
File: https://raw.githubusercontent.com/italia/daf-semantics/master/semantic_repository%2Fdist%2Fdata%2Fdati-ontologie-vocabolari-controllati%2FOntologie%2FIoT-AP_IT%2Fv0.6%2FIoT-AP_IT.owl parsed as xml

In repository: https://github.com/italia/daf-semantics
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/semantic_repository/dist/data/dati-ontologie-vocabolari-controllati/Ontologie/IoT-AP_IT/v0.6/IoT-AP_IT.owl:36:89: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#Literal

---
File: https://raw.githubusercontent.com/italia/daf-semantics/master/semantic_repository%2Fdist%2Fdata%2Fdati-ontologie-vocabolari-controllati%2FOntologie%2FIoT-AP_IT%2Fv0.4%2FIoT-AP_IT-test.owl parsed as xml

In repository: https://github.com/italia/daf-semantics
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/semantic_repository/dist/data/dati-ontologie-vocabolari-controllati/Ontologie/IoT-AP_IT/v0.4/IoT-AP_IT-test.owl:36:73: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#Literal

---
File: https://raw.githubusercontent.com/italia/daf-semantics/master/semantic_repository%2Fdist%2Fdata%2Fdati-ontologie-vocabolari-controllati%2FOntologie%2FIoT-AP_IT%2Fv0.4%2FIoT-AP_IT.owl parsed as xml

In repository: https://github.com/italia/daf-semantics
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/semantic_repository/dist/data/dati-ontologie-vocabolari-controllati/Ontologie/IoT-AP_IT/v0.4/IoT-AP_IT.owl:36:73: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#Literal

---
File: https://raw.githubusercontent.com/italia/daf-semantics/master/semantic_manager%2Fdist%2Fdata%2Fdati-ontologie-vocabolari-controllati%2FOntologie%2FIoT-AP_IT%2Fv0.5%2Fcore%2FIoT-AP_IT.owl parsed as xml

In repository: https://github.com/italia/daf-semantics
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/semantic_manager/dist/data/dati-ontologie-vocabolari-controllati/Ontologie/IoT-AP_IT/v0.5/core/IoT-AP_IT.owl:36:73: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#Literal

---
File: https://raw.githubusercontent.com/italia/daf-semantics/master/semantic_manager%2Fdist%2Fdata%2Fdati-ontologie-vocabolari-controllati%2FOntologie%2FIoT-AP_IT%2Fv0.5%2Falignments%2FIoT-AP_IT-aligns.owl parsed as xml

In repository: https://github.com/italia/daf-semantics
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/semantic_manager/dist/data/dati-ontologie-vocabolari-controllati/Ontologie/IoT-AP_IT/v0.5/alignments/IoT-AP_IT-aligns.owl:147:49: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#Class

---
File: https://raw.githubusercontent.com/italia/daf-semantics/master/semantic_manager%2Fdist%2Fdata%2Fdati-ontologie-vocabolari-controllati%2FOntologie%2FIoT-AP_IT%2Fv0.6%2FIoT-AP_IT.owl parsed as xml

In repository: https://github.com/italia/daf-semantics
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/semantic_manager/dist/data/dati-ontologie-vocabolari-controllati/Ontologie/IoT-AP_IT/v0.6/IoT-AP_IT.owl:36:89: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#Literal

---
File: https://raw.githubusercontent.com/italia/daf-semantics/master/semantic_manager%2Fdist%2Fdata%2Fdati-ontologie-vocabolari-controllati%2FOntologie%2FIoT-AP_IT%2Fv0.4%2FIoT-AP_IT-test.owl parsed as xml

In repository: https://github.com/italia/daf-semantics
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/semantic_manager/dist/data/dati-ontologie-vocabolari-controllati/Ontologie/IoT-AP_IT/v0.4/IoT-AP_IT-test.owl:36:73: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#Literal

---
File: https://raw.githubusercontent.com/italia/daf-semantics/master/semantic_manager%2Fdist%2Fdata%2Fdati-ontologie-vocabolari-controllati%2FOntologie%2FIoT-AP_IT%2Fv0.4%2FIoT-AP_IT.owl parsed as xml

In repository: https://github.com/italia/daf-semantics
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/semantic_manager/dist/data/dati-ontologie-vocabolari-controllati/Ontologie/IoT-AP_IT/v0.4/IoT-AP_IT.owl:36:73: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#Literal

---
File: https://raw.githubusercontent.com/italia/daf-semantics/master/semantic_standardization%2Fontologie-vocabolari-controllati%2FOntologie%2FPOI%2Fv0.2%2Fpoiapit-aligns.ttl parsed as ttl

In repository: https://github.com/italia/daf-semantics
> at line 22 of <>:
Bad syntax (expected '.' or '}' or ']' at end of statement) at ^ in:
"...b'l Transformation Team"@en ;\n    dct:issued "2017-10-20"\n    '^b'dc:modified "2017-10-20" ;\n    dc:title "These are the align'..."

---
File: https://raw.githubusercontent.com/italia/daf-semantics/master/semantic_standardization%2Fontologie-vocabolari-controllati%2FOntologie%2FPOI%2Fv0.1%2Fpoiapit-aligns.ttl parsed as ttl

In repository: https://github.com/italia/daf-semantics
> at line 22 of <>:
Bad syntax (expected '.' or '}' or ']' at end of statement) at ^ in:
"...b'l Transformation Team"@en ;\n    dct:issued "2017-10-20"\n    '^b'dc:modified "2017-10-20" ;\n    dc:title "These are the align'..."

---
File: https://raw.githubusercontent.com/italia/daf-semantics/master/semantic_standardization%2Fontologie-vocabolari-controllati%2FOntologie%2FACCO%2Fv0.2%2Faligns%2Faccoapit-aligns.ttl parsed as ttl

In repository: https://github.com/italia/daf-semantics
> at line 44 of <>:
Bad syntax (objectList expected) at ^ in:
"...b':LodgingBusiness , acco:Accommodation ;\n\naccoapit:OSDFeature'^b' a owl:Class ;\n  rdfs:isDefinedBy accoapit: ;\n  rdfs:subClas'..."

---
File: https://raw.githubusercontent.com/italia/daf-semantics/master/semantic_repository%2Fdist%2Fdata%2Fontologies%2Fexamples%2Fexample-data-artists.ttl parsed as ttl

In repository: https://github.com/italia/daf-semantics
> at line 14 of <>:
Bad syntax (Prefix "rdfs:" not bound) at ^ in:
"...b':country "Spain" .\n\nex:guernica a ex:Painting ;\n            '^b'rdfs:label "Guernica";\n            ex:technique "oil on canv'..."

---
File: https://raw.githubusercontent.com/italia/daf-semantics/master/semantic_manager%2Fdist%2Fdata%2Fontologies%2Fexamples%2Fexample-data-artists.ttl parsed as ttl

In repository: https://github.com/italia/daf-semantics
> at line 14 of <>:
Bad syntax (Prefix "rdfs:" not bound) at ^ in:
"...b':country "Spain" .\n\nex:guernica a ex:Painting ;\n            '^b'rdfs:label "Guernica";\n            ex:technique "oil on canv'..."

---
File: https://raw.githubusercontent.com/Kaljurand/aceview/master/site%2Fexamples%2Fannotations.owl parsed as xml

In repository: https://github.com/Kaljurand/aceview
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/site/examples/annotations.owl:52:8: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#ObjectSomeValuesFrom

---
File: https://raw.githubusercontent.com/Kaljurand/aceview/master/site%2Fexamples%2Frendering_ambiguity.owl parsed as xml

In repository: https://github.com/Kaljurand/aceview
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/site/examples/rendering_ambiguity.owl:33:53: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#Literal

---
File: https://raw.githubusercontent.com/Kaljurand/aceview/master/site%2Fexamples%2Fjobs_base.owl parsed as xml

In repository: https://github.com/Kaljurand/aceview
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/site/examples/jobs_base.owl:31:25: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#IRI

---
File: https://raw.githubusercontent.com/Kaljurand/aceview/master/site%2Fexamples%2Fcountries_base.owl parsed as xml

In repository: https://github.com/Kaljurand/aceview
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/site/examples/countries_base.owl:53:24: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#IRI

---
File: https://raw.githubusercontent.com/sisinflab-swot/cowl/master/data%2Fexample_pizza.owl parsed as xml

In repository: https://github.com/sisinflab-swot/cowl
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/data/example_pizza.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/sisinflab-swot/cowl/master/data%2Ftest_import.owl parsed as xml

In repository: https://github.com/sisinflab-swot/cowl
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/data/test_import.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/sisinflab-swot/cowl/master/data%2Ftest_onto.owl parsed as xml

In repository: https://github.com/sisinflab-swot/cowl
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/data/test_onto.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/avicomp/ont-d2rq/master/api%2Fsrc%2Ftest%2Fresources%2Fparser%2Fsimple.ttl parsed as ttl

In repository: https://github.com/avicomp/ont-d2rq
> at line 17 of <>:
Bad syntax (expected '.' or '}' or ']' at end of statement) at ^ in:
"...b'n "http://example.org/p@@People.ID@@";\n  :class ex:Person\n  '^b':properties [ :property ex:name; :column "People.name"; ];\n '..."

---
File: https://raw.githubusercontent.com/shful/gofp/master/example%2Fpizza%2Fpizza-functional.owl parsed as xml

In repository: https://github.com/shful/gofp
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/example/pizza/pizza-functional.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/eureadit/reading-experience-ontology/master/OnToology%2Ftests%2Fexample1.owl%2Fcontext%2Fcontext.jsonld parsed as json-ld

In repository: https://github.com/eureadit/reading-experience-ontology
> Expecting value: line 1 column 1 (char 0)

---
File: https://raw.githubusercontent.com/eureadit/reading-experience-ontology/master/OnToology%2Ftests%2Fexample2.owl%2Fcontext%2Fcontext.jsonld parsed as json-ld

In repository: https://github.com/eureadit/reading-experience-ontology
> Expecting value: line 1 column 1 (char 0)

---
File: https://raw.githubusercontent.com/eureadit/reading-experience-ontology/master/data-model-v1.8.owl parsed as xml

In repository: https://github.com/eureadit/reading-experience-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/data-model-v1.8.owl:278:30: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#Class

---
File: https://raw.githubusercontent.com/eureadit/reading-experience-ontology/master/data-model-v2.owl parsed as xml

In repository: https://github.com/eureadit/reading-experience-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/data-model-v2.owl:356:30: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#Class

---
File: https://raw.githubusercontent.com/eureadit/reading-experience-ontology/master/OnToology%2Fdata-model-v1.6.owl parsed as xml

In repository: https://github.com/eureadit/reading-experience-ontology
> [Errno 21] Is a directory: '/home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/OnToology/data-model-v1.6.owl'

---
File: https://raw.githubusercontent.com/eureadit/reading-experience-ontology/master/OnToology%2Fdata-model-v1.5.owl parsed as xml

In repository: https://github.com/eureadit/reading-experience-ontology
> [Errno 21] Is a directory: '/home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/OnToology/data-model-v1.5.owl'

---
File: https://raw.githubusercontent.com/eureadit/reading-experience-ontology/master/OnToology%2Ftests%2Fexample1.owl parsed as xml

In repository: https://github.com/eureadit/reading-experience-ontology
> [Errno 21] Is a directory: '/home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/OnToology/tests/example1.owl'

---
File: https://raw.githubusercontent.com/eureadit/reading-experience-ontology/master/OnToology%2Ftests%2Fexample2.owl parsed as xml

In repository: https://github.com/eureadit/reading-experience-ontology
> [Errno 21] Is a directory: '/home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/OnToology/tests/example2.owl'

---
File: https://raw.githubusercontent.com/eureadit/reading-experience-ontology/master/old%2Fv1.5%2Fdata-model-v1.5.owl parsed as xml

In repository: https://github.com/eureadit/reading-experience-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/old/v1.5/data-model-v1.5.owl:233:56: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#Class

---
File: https://raw.githubusercontent.com/eureadit/reading-experience-ontology/master/old%2Fv1.5%2Fexamples%2Fexample1.owl parsed as xml

In repository: https://github.com/eureadit/reading-experience-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/old/v1.5/examples/example1.owl:1:0: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/eureadit/reading-experience-ontology/master/old%2Fv1.5%2Fexamples%2Fexample2.owl parsed as xml

In repository: https://github.com/eureadit/reading-experience-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/old/v1.5/examples/example2.owl:1:0: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/eureadit/reading-experience-ontology/master/old%2Fv1.6%2Fdata-model-v1.6.owl parsed as xml

In repository: https://github.com/eureadit/reading-experience-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/old/v1.6/data-model-v1.6.owl:263:56: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#Class

---
File: https://raw.githubusercontent.com/sparna-git/xls2rdf/master/xls2rdf-lib%2Fsrc%2Ftest%2Fresources%2Fsuite%2F_32_qbPostProcessingTest%2Fexpected.ttl parsed as ttl

In repository: https://github.com/sparna-git/xls2rdf
> at line 14 of <>:
Bad syntax (Prefix "dcat:" not bound) at ^ in:
"...b'atoiredeslangues.culture.gouv.fr/dataset/enquete-INED>\n  \ta '^b'dcat:Dataset;\n    a qb:DataSet;\n    dct:title "statistique d'..."

---
File: https://raw.githubusercontent.com/sparna-git/xls2rdf/master/xls2rdf-lib%2Fsrc%2Ftest%2Fresources%2Fsuite%2F_35_specialCharacters%2Fexpected.ttl parsed as ttl

In repository: https://github.com/sparna-git/xls2rdf
> at line 19 of <>:
Bad syntax (Prefix "dcterms:" not bound) at ^ in:
"...b'inebleau.fr/vocabulaires/personnes> a skos:ConceptScheme ;\n\t'^b'dcterms:title "Personnes"@fr;\n\tskos:hasTopConcept <http://ww'..."

---
File: https://raw.githubusercontent.com/DSupertramp/SchoolRank/master/SchoolRank%2FCodici+Py%2Fontologia.owl parsed as xml

In repository: https://github.com/DSupertramp/SchoolRank
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/SchoolRank/Codici%20Py/ontologia.owl:1:0: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/DSupertramp/SchoolRank/master/SchoolRank%2FNotebook%2FOntologia%2Fontologia.owl parsed as xml

In repository: https://github.com/DSupertramp/SchoolRank
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/SchoolRank/Notebook/Ontologia/ontologia.owl:1:0: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/Alliander/schema-composer/master/src%2Fmain%2Fresources%2Fpublic%2Fontologies%2Fcim.owl parsed as xml

In repository: https://github.com/Alliander/schema-composer
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/main/resources/public/ontologies/cim.owl:1:0: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/cmungall/chemistry-ontology/master/src%2Fschema%2Fchemont.owl parsed as xml

In repository: https://github.com/cmungall/chemistry-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/schema/chemont.owl:1:0: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/plazi/TreatmentOntologies/master/test%2FSzero.rdf parsed as xml

In repository: https://github.com/plazi/TreatmentOntologies
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/test/Szero.rdf:1:0: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/plazi/TreatmentOntologies/master/ontologies%2FdwcFP.owl parsed as xml

In repository: https://github.com/plazi/TreatmentOntologies
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/ontologies/dwcFP.owl:1:1: XML or text declaration not at start of entity

---
File: https://raw.githubusercontent.com/plazi/TreatmentOntologies/master/ontologies%2Ftaxonomic_nomenclatural_status_terms.owl parsed as xml

In repository: https://github.com/plazi/TreatmentOntologies
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/ontologies/taxonomic_nomenclatural_status_terms.owl:1:0: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/plazi/TreatmentOntologies/master/drafts%2Fschema.ttl parsed as ttl

In repository: https://github.com/plazi/TreatmentOntologies
> at line 1 of <>:
Bad syntax (Prefix ":" not bound) at ^ in:
"b''^b':Treatment a rdfs:Class.\n:TaxonConcept a rdfs:Class.\n:Scient'..."

---
File: https://raw.githubusercontent.com/INCATools/dosdp-tools/master/src%2Ftest%2Fresources%2Ftutorial%2Fexposure_with_input_with_role.owl parsed as xml

In repository: https://github.com/INCATools/dosdp-tools
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/test/resources/tutorial/exposure_with_input_with_role.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/INCATools/dosdp-tools/master/src%2Ftest%2Fresources%2Ftutorial%2Fexposure_with_input.owl parsed as xml

In repository: https://github.com/INCATools/dosdp-tools
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/test/resources/tutorial/exposure_with_input.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/EdDuarte/semantic-graph/master/data%2Fdata.nt parsed as nt

In repository: https://github.com/EdDuarte/semantic-graph
> Invalid line: 'rdf:type <http://www.semanticweb.prv/taxonomy#Kingdom>.'

---
File: https://raw.githubusercontent.com/argu-co/popolo-ori/master/popolo-ori.owl parsed as xml

In repository: https://github.com/argu-co/popolo-ori
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/popolo-ori.owl:1:0: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/vocol/MTConnect/master/test_data%2FAgie.ttl parsed as ttl

In repository: https://github.com/vocol/MTConnect
> at line 243 of <>:
Bad syntax (bad escape) at ^ in:
"...b'39";\r\n\t\t\t\tmto:hasCategory "EVENT";\r\n\t\t\t\tmto:hasProgram "TNC:'^b'\\BRIAN\\WARMUP.H".\r\nmto:Line3 rdf:type mto:Line;\r\n\t\t\t\tsaref:h'..."

---
File: https://raw.githubusercontent.com/Konstantin-Bogdanoski/WBS/master/Homeworks%2Fsrc%2Fmain%2Fjava%2FH-03_OWL%2FPizzaOntology.owl parsed as xml

In repository: https://github.com/Konstantin-Bogdanoski/WBS
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/Homeworks/src/main/java/H-03_OWL/PizzaOntology.owl:1:0: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/Konstantin-Bogdanoski/WBS/master/Homeworks%2Fsrc%2Fmain%2Fjava%2FH-05_CreatingLinkedData%2Fkonstantin-bogdanoski.ttl parsed as ttl

In repository: https://github.com/Konstantin-Bogdanoski/WBS
> at line 4 of <>:
Bad syntax (expected '.' or '}' or ']' at end of statement) at ^ in:
"...b'fileDocument rdf:about="">\n  <foaf:maker rdf:resource="#me"/'^b'>\n  <foaf:primaryTopic rdf:resource="#me"/>\n  <admin:generat'..."

---
File: https://raw.githubusercontent.com/Konstantin-Bogdanoski/WBS/master/Homeworks%2Fsrc%2Fmain%2Fresources%2Ffoaf.ttl parsed as ttl

In repository: https://github.com/Konstantin-Bogdanoski/WBS
> at line 3 of <>:
Bad syntax (expected '.' or '}' or ']' at end of statement) at ^ in:
"...b'ment rdf:about=""> <foaf:maker rdf:resource="#me"/>\n        '^b'<foaf:primaryTopic rdf:resource="#me"/>\n  <admin:generatorAg'..."

---
File: https://raw.githubusercontent.com/alvarosaurus/UML-ODM-to-OWL-XML/master/test%2Ftestdata%2Finheritance.owl parsed as xml

In repository: https://github.com/alvarosaurus/UML-ODM-to-OWL-XML
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/test/testdata/inheritance.owl:33:31: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#Class

---
File: https://raw.githubusercontent.com/alvarosaurus/UML-ODM-to-OWL-XML/master/test%2Ftestdata%2Fclasses_and_properties.owl parsed as xml

In repository: https://github.com/alvarosaurus/UML-ODM-to-OWL-XML
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/test/testdata/classes_and_properties.owl:34:35: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#Class

---
File: https://raw.githubusercontent.com/arhs/owl2json-schema/master/src%2Ftest%2Fresources%2Fontology%2FAppolo18_00000D1066.rdf parsed as xml

In repository: https://github.com/arhs/owl2json-schema
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/test/resources/ontology/Appolo18_00000D1066.rdf:5:1: undefined entity

---
File: https://raw.githubusercontent.com/picorana/owla.py/master/monet%2Ftest_output.rdf parsed as xml

In repository: https://github.com/picorana/owla.py
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/monet/test_output.rdf:13:6: Invalid property attribute URI: http://www.w3.org/1999/02/22-rdf-syntax-ns#resource

---
File: https://raw.githubusercontent.com/spice-h2020/SON/main/Narrative-Labyrinth%2Fontology.owl parsed as xml

In repository: https://github.com/spice-h2020/SON
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/Narrative-Labyrinth/ontology.owl:19:50: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#Literal

---
File: https://raw.githubusercontent.com/spice-h2020/SON/main/issues%2F31%2Fexample.ttl parsed as ttl

In repository: https://github.com/spice-h2020/SON
> at line 226 of <>:
Bad syntax (Prefix "rdfs:" not bound) at ^ in:
"...b'atingOf ex:BarKochvaRebellion ;\n\tarco-cd:hasDatingEvent [\n\t\t'^b'rdfs:label "Time period 132 CE" ;\n\t] .\n\n\nex:Corridor bot:con'..."

---
File: https://raw.githubusercontent.com/spice-h2020/SON/main/emotionInCulturalContext%2Fscenario2.ttl parsed as ttl

In repository: https://github.com/spice-h2020/SON
> at line 66 of <>:
Bad syntax (objectList expected) at ^ in:
"...b'era1ER e:stimulus e:ChairLegs;\n    e:experiencer e:B ;\n    a'^b' BSampleOperaER .\n\n\n\n\n\n'"

---
File: https://raw.githubusercontent.com/nabito/hls/master/hls-latest.owl parsed as xml

In repository: https://github.com/nabito/hls
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/hls-latest.owl:35:97: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#Literal

---
File: https://raw.githubusercontent.com/nabito/hls/master/hls_2015-12-6.owl parsed as xml

In repository: https://github.com/nabito/hls
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/hls_2015-12-6.owl:35:97: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#Literal

---
File: https://raw.githubusercontent.com/nabito/hls/master/hls-eval.owl parsed as xml

In repository: https://github.com/nabito/hls
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/hls-eval.owl:35:97: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#Literal

---
File: https://raw.githubusercontent.com/MaastrichtU-IDS/cbcm-ontology/master/working_copy%2Feu-cm-ontology_owlxml.owl parsed as xml

In repository: https://github.com/MaastrichtU-IDS/cbcm-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/working_copy/eu-cm-ontology_owlxml.owl:20:137: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#Literal

---
File: https://raw.githubusercontent.com/hsu-aut/Mapping-MTP-to-OWL/develop/src%2Fmain%2Fresources%2Fmapping.ttl parsed as ttl

In repository: https://github.com/hsu-aut/Mapping-MTP-to-OWL
> at line 548 of <>:
Bad syntax (Prefix "xsd:" not bound) at ^ in:
"...b'te "{./Attribute[@Name=\'ProcedureID\']/Value}";\n\trr:datatype '^b'xsd:strg\n\t]];\n\t\n  \trr:predicateObjectMap [\n    rr:predicate '..."

---
File: https://raw.githubusercontent.com/sisinflab-swot/semantic-coap/master/semantic-coap-android%2Fapp%2Fsrc%2Fmain%2Fres%2Fraw%2Fsensor_ontology.owl parsed as xml

In repository: https://github.com/sisinflab-swot/semantic-coap
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/semantic-coap-android/app/src/main/res/raw/sensor_ontology.owl:1:0: syntax error

---
File: https://raw.githubusercontent.com/LUMC-BioSemantics/dcat-extension/master/stardog-rules%2Fstandard-rule.ttl parsed as ttl

In repository: https://github.com/LUMC-BioSemantics/dcat-extension
> at line 10 of <>:
Bad syntax (expected directive or statement) at ^ in:
"...b'org/ns/dcat#>\nprefix dcterms: <http://purl.org/dc/terms/>\n\n\n'^b'IF {\n   ?res a dcat:Resource.\n   ?res dcterms:type dcterms:S'..."

---
File: https://raw.githubusercontent.com/ddaedalus/knowledge-systems-ntua/master/ontology%2Fmyontology-turtle.owl parsed as xml

In repository: https://github.com/ddaedalus/knowledge-systems-ntua
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/ontology/myontology-turtle.owl:1:0: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/blankdots/PersonasOntology/master/ontology%2Fpersonasonto.owl parsed as xml

In repository: https://github.com/blankdots/PersonasOntology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/ontology/personasonto.owl:21:113: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#Literal

---
File: https://raw.githubusercontent.com/mawittbe/NVT_Data-Model/master/NVTO%2Fnvto_protege.owl parsed as xml

In repository: https://github.com/mawittbe/NVT_Data-Model
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/NVTO/nvto_protege.owl:23:128: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#Literal

---
File: https://raw.githubusercontent.com/mawittbe/NVT_Data-Model/master/Examples%2FExamples.ttl parsed as ttl

In repository: https://github.com/mawittbe/NVT_Data-Model
> at line 131 of <>:
Bad syntax (Prefix "nvto:" not bound) at ^ in:
"...b's" .\n\n#Gruppen\nex:Group1 rdf:type paam:Agent ;\n            r'^b'df:type nvto:PerformingArtsGroup ;\n            paam:hasName '..."

---
File: https://raw.githubusercontent.com/mawittbe/NVT_Data-Model/master/Extensions%2Fmtt_a.ttl parsed as ttl

In repository: https://github.com/mawittbe/NVT_Data-Model
> at line 4 of <>:
Bad syntax (Prefix "rdf:" not bound) at ^ in:
"...b'schema/mtt_a/> .\n\n<http://lod.iti-germany.de/schema/mtt_a/> '^b'rdf:type owl:Ontology ;\n                                    '..."

---
File: https://raw.githubusercontent.com/cmungall/dasher/master/src%2Fschema%2Fsemqc.owl parsed as xml

In repository: https://github.com/cmungall/dasher
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/schema/semqc.owl:1:0: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/luiseraso/expert-systems-examples/master/ims-examples-jena%2Fsrc%2Fmain%2Fresources%2Fedu%2Ffup%2Fims%2Fontologies%2FSecurityAndPrivacyOntology.owl parsed as xml

In repository: https://github.com/luiseraso/expert-systems-examples
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/ims-examples-jena/src/main/resources/edu/fup/ims/ontologies/SecurityAndPrivacyOntology.owl:26:82: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#Literal

---
File: https://raw.githubusercontent.com/luiseraso/expert-systems-examples/master/ims-examples-jena%2Fsrc%2Fmain%2Fresources%2Fedu%2Ffup%2Fims%2Fontologies%2Fsoa.owl parsed as xml

In repository: https://github.com/luiseraso/expert-systems-examples
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/ims-examples-jena/src/main/resources/edu/fup/ims/ontologies/soa.owl:33:6: two elements cannot use the same ID: 'http://www.semanticweb.org/ontologies/2010/01/core-soa.owl#ServiceContract'

---
File: https://raw.githubusercontent.com/luiseraso/expert-systems-examples/master/ims-examples-owl%2Fsrc%2Fmain%2Fresources%2Fedu%2Ffup%2Fims%2Fontologies%2FSecurityAndPrivacyOntology.owl parsed as xml

In repository: https://github.com/luiseraso/expert-systems-examples
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/ims-examples-owl/src/main/resources/edu/fup/ims/ontologies/SecurityAndPrivacyOntology.owl:26:82: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#Literal

---
File: https://raw.githubusercontent.com/cod3rs-ns/4-xml-govrs-service/master/src%2Fmain%2Fresources%2Fschemas%2Frdf%2Fskupstina.owl parsed as xml

In repository: https://github.com/cod3rs-ns/4-xml-govrs-service
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/main/resources/schemas/rdf/skupstina.owl:79:32: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#Class

---
File: https://raw.githubusercontent.com/yokochi47/pdbx-validation/master/schema%2Fpdbx-validation-v3.owl parsed as xml

In repository: https://github.com/yokochi47/pdbx-validation
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/schema/pdbx-validation-v3.owl:40037:6: unclosed token

---
File: https://raw.githubusercontent.com/yokochi47/pdbx-validation/master/schema%2Fpdbx-validation-v3.338.owl parsed as xml

In repository: https://github.com/yokochi47/pdbx-validation
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/schema/pdbx-validation-v3.338.owl:40037:6: unclosed token

---
File: https://raw.githubusercontent.com/sasjonge/epartition/master/res%2Fpartitioner_test.owl parsed as xml

In repository: https://github.com/sasjonge/epartition
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/res/partitioner_test.owl:40:8: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#ObjectIntersectionOf

---
File: https://raw.githubusercontent.com/sasjonge/epartition/master/res%2Fkoala.owl parsed as xml

In repository: https://github.com/sasjonge/epartition
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/res/koala.owl:113:8: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#ObjectHasValue

---
File: https://raw.githubusercontent.com/sasjonge/epartition/master/res%2Fkoala_small.owl parsed as xml

In repository: https://github.com/sasjonge/epartition
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/res/koala_small.owl:89:36: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#Class

---
File: https://raw.githubusercontent.com/sichkar-valentyn/Knowledge_Base_Represented_by_Semantic_Web_Language/master/KB_in_owl_Manchester.owl parsed as xml

In repository: https://github.com/sichkar-valentyn/Knowledge_Base_Represented_by_Semantic_Web_Language
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/KB_in_owl_Manchester.owl:1:0: syntax error

---
File: https://raw.githubusercontent.com/sichkar-valentyn/Knowledge_Base_Represented_by_Semantic_Web_Language/master/KB_in_owl_functional.owl parsed as xml

In repository: https://github.com/sichkar-valentyn/Knowledge_Base_Represented_by_Semantic_Web_Language
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/KB_in_owl_functional.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/sichkar-valentyn/Knowledge_Base_Represented_by_Semantic_Web_Language/master/KB_in_turtle.owl parsed as xml

In repository: https://github.com/sichkar-valentyn/Knowledge_Base_Represented_by_Semantic_Web_Language
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/KB_in_turtle.owl:1:0: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/sichkar-valentyn/Knowledge_Base_Represented_by_Semantic_Web_Language/master/KB_in_owl.owl parsed as xml

In repository: https://github.com/sichkar-valentyn/Knowledge_Base_Represented_by_Semantic_Web_Language
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/KB_in_owl.owl:115:73: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#NamedIndividual

---
File: https://raw.githubusercontent.com/sichkar-valentyn/Knowledge_Base_Represented_by_Semantic_Web_Language/master/KB_in_latex.owl parsed as xml

In repository: https://github.com/sichkar-valentyn/Knowledge_Base_Represented_by_Semantic_Web_Language
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/KB_in_latex.owl:1:0: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/sichkar-valentyn/Knowledge_Base_Represented_by_Semantic_Web_Language/master/KB_in_json.owl parsed as xml

In repository: https://github.com/sichkar-valentyn/Knowledge_Base_Represented_by_Semantic_Web_Language
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/KB_in_json.owl:1:0: syntax error

---
File: https://raw.githubusercontent.com/sichkar-valentyn/Knowledge_Base_Represented_by_Semantic_Web_Language/master/original_owl_code.owl parsed as xml

In repository: https://github.com/sichkar-valentyn/Knowledge_Base_Represented_by_Semantic_Web_Language
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/original_owl_code.owl:1:0: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/nets4geeks/SPCatalogMaker/master/catalogs%2Facctp%2Fcatalog%2FACCTPCatalog.owl parsed as xml

In repository: https://github.com/nets4geeks/SPCatalogMaker
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/catalogs/acctp/catalog/ACCTPCatalog.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/nets4geeks/SPCatalogMaker/master/catalogs%2Facctp%2Fcatalog%2Fcommon.owl parsed as xml

In repository: https://github.com/nets4geeks/SPCatalogMaker
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/catalogs/acctp/catalog/common.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/nets4geeks/SPCatalogMaker/master/catalogs%2Fcloudclassicdynamic%2Fcatalog%2Fcommon.owl parsed as xml

In repository: https://github.com/nets4geeks/SPCatalogMaker
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/catalogs/cloudclassicdynamic/catalog/common.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/nets4geeks/SPCatalogMaker/master/catalogs%2Fcloudclassicdynamic%2Fcatalog%2FCloudSecurityPatternCatalog.owl parsed as xml

In repository: https://github.com/nets4geeks/SPCatalogMaker
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/catalogs/cloudclassicdynamic/catalog/CloudSecurityPatternCatalog.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/nets4geeks/SPCatalogMaker/master/old%2Fv1%2FSecurityPatternCatalogNaiveSchema.owl parsed as xml

In repository: https://github.com/nets4geeks/SPCatalogMaker
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/old/v1/SecurityPatternCatalogNaiveSchema.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/nets4geeks/SPCatalogMaker/master/old%2Fv1%2Ftest%2Fcatalog%2Fpattern1.owl parsed as xml

In repository: https://github.com/nets4geeks/SPCatalogMaker
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/old/v1/test/catalog/pattern1.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/nets4geeks/SPCatalogMaker/master/old%2Fv1%2Ftest%2Fcatalog%2Fpattern_SecureDistributedPublishSubscribeIoT.owl parsed as xml

In repository: https://github.com/nets4geeks/SPCatalogMaker
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/old/v1/test/catalog/pattern_SecureDistributedPublishSubscribeIoT.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/nets4geeks/SPCatalogMaker/master/old%2Fv1%2Ftest%2Fcatalog%2Fpattern2.owl parsed as xml

In repository: https://github.com/nets4geeks/SPCatalogMaker
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/old/v1/test/catalog/pattern2.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/nets4geeks/SPCatalogMaker/master/old%2Fv1%2Ftest%2Fout%2FSecurityPatternCatalog.owl parsed as xml

In repository: https://github.com/nets4geeks/SPCatalogMaker
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/old/v1/test/out/SecurityPatternCatalog.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/nets4geeks/SPCatalogMaker/master/schema%2FSecurityPatternCatalogNaiveSchema.owl parsed as xml

In repository: https://github.com/nets4geeks/SPCatalogMaker
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/schema/SecurityPatternCatalogNaiveSchema.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/fairgenomes/fairgenomes-semantic-model/main/transformation-output%2Fowl-xml%2Ffair-genomes.owl parsed as xml

In repository: https://github.com/fairgenomes/fairgenomes-semantic-model
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/transformation-output/owl-xml/fair-genomes.owl:24:29: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#Class

---
File: https://raw.githubusercontent.com/fairgenomes/fairgenomes-semantic-model/main/transformation-output%2Frdf-ttl%2Ffair-genomes.ttl parsed as ttl

In repository: https://github.com/fairgenomes/fairgenomes-semantic-model
> at line 8 of <>:
Bad syntax (Prefix "https:" not bound) at ^ in:
"...b'owl#> .\n@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .\n\n'^b'https://fair-genomes.org/ a owl:Ontology ; \n\tdc:title "FAIR '..."

---
File: https://raw.githubusercontent.com/cknoll/yamlpyowl/main/experiments%2Feinsteins_riddle_manchester.owl parsed as xml

In repository: https://github.com/cknoll/yamlpyowl
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/experiments/einsteins_riddle_manchester.owl:1:0: syntax error

---
File: https://raw.githubusercontent.com/mikel-egana-aranguren/ALDAPA/master/core%2Fsrc%2Fmain%2Fresources%2Fmodel%2Fdefault-model.trig parsed as n3

In repository: https://github.com/mikel-egana-aranguren/ALDAPA
> at line 17 of <>:
Bad syntax (expected directive or statement) at ^ in:
"...b'#######\n\n############################\n# \n# Common prefixes\n\n'^b'PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPR'..."

---
File: https://raw.githubusercontent.com/mikel-egana-aranguren/ALDAPA/master/core%2Fdata%2Fnamed-graph-deleted.trig parsed as n3

In repository: https://github.com/mikel-egana-aranguren/ALDAPA
> at line 19 of <>:
Bad syntax (EOF found when expected verb in property list) at ^ in:
"...b'onosti-movilidad2> a <http://xmlns.com/foaf/0.1/Project> .\n}'^b'\n'"

---
File: https://raw.githubusercontent.com/mikel-egana-aranguren/ALDAPA/master/core%2Fdata%2Fdataset-before-deleted.trig parsed as n3

In repository: https://github.com/mikel-egana-aranguren/ALDAPA
> at line 29 of <>:
Bad syntax (expected '.' or '}' or ']' at end of statement) at ^ in:
"...b'02/07/owl#sameAs> <http://dbpedia.org/resource/Bilbao> .\n}\n\n'^b'<http://euskadi.eus/graph/donosti-parkings-febr-0012> {\n\t<ht'..."

---
File: https://raw.githubusercontent.com/mikel-egana-aranguren/ALDAPA/master/core%2Fdata%2Fproject-before-deleted.trig parsed as n3

In repository: https://github.com/mikel-egana-aranguren/ALDAPA
> at line 29 of <>:
Bad syntax (expected '.' or '}' or ']' at end of statement) at ^ in:
"...b'02/07/owl#sameAs> <http://dbpedia.org/resource/Bilbao> .\n}\n\n'^b'<http://euskadi.eus/graph/donosti-parkings-febr-0012> {\n\t<ht'..."

---
File: https://raw.githubusercontent.com/mikel-egana-aranguren/ALDAPA/master/core%2Fdata%2Fdataset-deleted.trig parsed as n3

In repository: https://github.com/mikel-egana-aranguren/ALDAPA
> at line 14 of <>:
Bad syntax (EOF found when expected verb in property list) at ^ in:
"...b'onosti-movilidad2> a <http://xmlns.com/foaf/0.1/Project> .\n}'^b'\n'"

---
File: https://raw.githubusercontent.com/mikel-egana-aranguren/ALDAPA/master/core%2Fdata%2FtestReset-namedgraph-data-created.trig parsed as n3

In repository: https://github.com/mikel-egana-aranguren/ALDAPA
> at line 65 of <>:
Bad syntax (objectList expected) at ^ in:
"...b'41559961978044"^^<http://www.w3.org/2001/XMLSchema#double> .'^b'\n}\n'"

---
File: https://raw.githubusercontent.com/mikel-egana-aranguren/ALDAPA/master/core%2Fdata%2Fproject-deleted.trig parsed as n3

In repository: https://github.com/mikel-egana-aranguren/ALDAPA
> at line 20 of <>:
Bad syntax (EOF found after object) at ^ in:
"b'\n{\n\t<http://lod.eurohelp.es/aldapa/catalog/donosti-parkings-2> <http://schema.org/isPartOf> <http://lod.eurohelp.es/aldapa/project/donosti-movilidad2> ;\n\t\ta <http://www.w3.org/ns/dcat#Catalog> ;\n\t\t<http://www.w3.org/ns/dcat#dataset> <http://lod.eurohelp.es/aldapa/dataset/donosti-parkings-febr2> .\n\t\n\t<http://lod.eurohelp.es/aldapa/dataset/donosti-parkings-febr2> a <http://rdfs.org/ns/void#Dataset> , <http://schema.org/Distribution> , <http://www.w3.org/ns/dcat#Distribution> ;\n\t\t<http://www.w3.org/ns/sparql-service-description#namedGraph> <http://euskadi.eus/graph/donosti-parkings-febr-0012> .\n\t\n\t<http://lod.eurohelp.es/aldapa/project/donosti-movilidad2> a <http://xmlns.com/foaf/0.1/Project> .\n}\n\n<http://euskadi.eus/graph/donosti-parkings-febr-0012> {\n\t<http://opendata.eurohelp.es/resource/resource_004> <http://opendata.eurohelp.es/property/property_005> <http://opendata.eurohelp.es/resource/resource_006> .\n\t\n\t<http://opendata.eurohelp.es/resource/resource_006> <http://www.w3.org/2002/07/owl#sameAs> <http://dbpedia.org/resource/Bilbao> .\n\t\n\t<http://opendata.eurohelp.es/resource/resource_007> <http://www.w3.org/2000/01/rdf-schema#label> "Resource 007"@en .\n}'^b''..."

---
File: https://raw.githubusercontent.com/mikel-egana-aranguren/ALDAPA/master/core%2Fdata%2Fcatalog-deleted.trig parsed as n3

In repository: https://github.com/mikel-egana-aranguren/ALDAPA
> at line 9 of <>:
Bad syntax (EOF found when expected verb in property list) at ^ in:
"...b'onosti-movilidad2> a <http://xmlns.com/foaf/0.1/Project> .\n}'^b'\n'"

---
File: https://raw.githubusercontent.com/mikel-egana-aranguren/ALDAPA/master/core%2Fdata%2Fdata-named-graph-before-deleted.trig parsed as n3

In repository: https://github.com/mikel-egana-aranguren/ALDAPA
> at line 29 of <>:
Bad syntax (expected '.' or '}' or ']' at end of statement) at ^ in:
"...b'02/07/owl#sameAs> <http://dbpedia.org/resource/Bilbao> .\n}\n\n'^b'<http://euskadi.eus/graph/donosti-parkings-febr-0012> {\n\t<ht'..."

---
File: https://raw.githubusercontent.com/mikel-egana-aranguren/ALDAPA/master/core%2Fdata%2Fnamed-graph-before-deleted.trig parsed as n3

In repository: https://github.com/mikel-egana-aranguren/ALDAPA
> at line 29 of <>:
Bad syntax (expected '.' or '}' or ']' at end of statement) at ^ in:
"...b'02/07/owl#sameAs> <http://dbpedia.org/resource/Bilbao> .\n}\n\n'^b'<http://euskadi.eus/graph/donosti-parkings-febr-0012> {\n\t<ht'..."

---
File: https://raw.githubusercontent.com/mikel-egana-aranguren/ALDAPA/master/core%2Fdata%2Fcatalog-before-deleted.trig parsed as n3

In repository: https://github.com/mikel-egana-aranguren/ALDAPA
> at line 29 of <>:
Bad syntax (expected '.' or '}' or ']' at end of statement) at ^ in:
"...b'02/07/owl#sameAs> <http://dbpedia.org/resource/Bilbao> .\n}\n\n'^b'<http://euskadi.eus/graph/donosti-parkings-febr-0012> {\n\t<ht'..."

---
File: https://raw.githubusercontent.com/mikel-egana-aranguren/ALDAPA/master/core%2Fdata%2FtestAddDataToNamedGraph-data-added.trig parsed as n3

In repository: https://github.com/mikel-egana-aranguren/ALDAPA
> at line 65 of <>:
Bad syntax (objectList expected) at ^ in:
"...b'41559961978044"^^<http://www.w3.org/2001/XMLSchema#double> .'^b'\n}\n'"

---
File: https://raw.githubusercontent.com/mikel-egana-aranguren/ALDAPA/master/core%2Fdata%2Fdata-named-graph-deleted.trig parsed as n3

In repository: https://github.com/mikel-egana-aranguren/ALDAPA
> at line 29 of <>:
Bad syntax (EOF found after object) at ^ in:
"b'\n{\n\t<http://lod.eurohelp.es/aldapa/catalog/donosti-parkings> <http://schema.org/isPartOf> <http://lod.eurohelp.es/aldapa/project/donosti-movilidad> ;\n\t\ta <http://www.w3.org/ns/dcat#Catalog> ;\n\t\t<http://www.w3.org/ns/dcat#dataset> <http://lod.eurohelp.es/aldapa/dataset/donosti-parkings-febr> .\n\t\n\t<http://lod.eurohelp.es/aldapa/catalog/donosti-parkings-2> <http://schema.org/isPartOf> <http://lod.eurohelp.es/aldapa/project/donosti-movilidad2> ;\n\t\ta <http://www.w3.org/ns/dcat#Catalog> ;\n\t\t<http://www.w3.org/ns/dcat#dataset> <http://lod.eurohelp.es/aldapa/dataset/donosti-parkings-febr2> .\n\t\n\t<http://lod.eurohelp.es/aldapa/dataset/donosti-parkings-febr> a <http://rdfs.org/ns/void#Dataset> , <http://schema.org/Distribution> , <http://www.w3.org/ns/dcat#Distribution> ;\n\t\t<http://www.w3.org/ns/sparql-service-description#namedGraph> <http://euskadi.eus/graph/donosti-parkings-febr-001> .\n\t\n\t<http://lod.eurohelp.es/aldapa/dataset/donosti-parkings-febr2> a <http://rdfs.org/ns/void#Dataset> , <http://schema.org/Distribution> , <http://www.w3.org/ns/dcat#Distribution> ;\n\t\t<http://www.w3.org/ns/sparql-service-description#namedGraph> <http://euskadi.eus/graph/donosti-parkings-febr-0012> .\n\t\n\t<http://lod.eurohelp.es/aldapa/project/donosti-movilidad> a <http://xmlns.com/foaf/0.1/Project> .\n\t\n\t<http://lod.eurohelp.es/aldapa/project/donosti-movilidad2> a <http://xmlns.com/foaf/0.1/Project> .\n}\n\n<http://euskadi.eus/graph/donosti-parkings-febr-0012> {\n\t<http://opendata.eurohelp.es/resource/resource_004> <http://opendata.eurohelp.es/property/property_005> <http://opendata.eurohelp.es/resource/resource_006> .\n\t\n\t<http://opendata.eurohelp.es/resource/resource_006> <http://www.w3.org/2002/07/owl#sameAs> <http://dbpedia.org/resource/Bilbao> .\n\t\n\t<http://opendata.eurohelp.es/resource/resource_007> <http://www.w3.org/2000/01/rdf-schema#label> "Resource 007"@en .\n}'^b''..."

---
File: https://raw.githubusercontent.com/mikel-egana-aranguren/ALDAPA/master/core-plugins-tests%2Fsrc%2Ftest%2Fresources%2Fdata%2Ffake_data2.trig parsed as n3

In repository: https://github.com/mikel-egana-aranguren/ALDAPA
> at line 1 of <>:
Bad syntax (expected directive or statement) at ^ in:
"b''^b'PREFIX owl: <http://www.w3.org/2002/07/owl#>\nPREFIX rdfs: <h'..."

---
File: https://raw.githubusercontent.com/mikel-egana-aranguren/ALDAPA/master/core-plugins-tests%2Fsrc%2Ftest%2Fresources%2Fdata%2Ffake_data.trig parsed as n3

In repository: https://github.com/mikel-egana-aranguren/ALDAPA
> at line 1 of <>:
Bad syntax (expected directive or statement) at ^ in:
"b''^b'PREFIX owl: <http://www.w3.org/2002/07/owl#>\nPREFIX rdfs: <h'..."

---
File: https://raw.githubusercontent.com/mikel-egana-aranguren/ALDAPA/master/core-plugins-tests%2Fdata%2Fnamed-graph-deleted.trig parsed as n3

In repository: https://github.com/mikel-egana-aranguren/ALDAPA
> at line 19 of <>:
Bad syntax (EOF found when expected verb in property list) at ^ in:
"...b'nosti-movilidad2> a <http://xmlns.com/foaf/0.1/Project> .\r\n}'^b'\r\n'"

---
File: https://raw.githubusercontent.com/mikel-egana-aranguren/ALDAPA/master/core-plugins-tests%2Fdata%2Fdataset-before-deleted.trig parsed as n3

In repository: https://github.com/mikel-egana-aranguren/ALDAPA
> at line 29 of <>:
Bad syntax (expected '.' or '}' or ']' at end of statement) at ^ in:
"...b'07/owl#sameAs> <http://dbpedia.org/resource/Bilbao> .\r\n}\r\n\r\n'^b'<http://euskadi.eus/graph/donosti-parkings-febr-0012> {\r\n\t<h'..."

---
File: https://raw.githubusercontent.com/mikel-egana-aranguren/ALDAPA/master/core-plugins-tests%2Fdata%2Fproject-before-deleted.trig parsed as n3

In repository: https://github.com/mikel-egana-aranguren/ALDAPA
> at line 29 of <>:
Bad syntax (expected '.' or '}' or ']' at end of statement) at ^ in:
"...b'07/owl#sameAs> <http://dbpedia.org/resource/Bilbao> .\r\n}\r\n\r\n'^b'<http://euskadi.eus/graph/donosti-parkings-febr-0012> {\r\n\t<h'..."

---
File: https://raw.githubusercontent.com/mikel-egana-aranguren/ALDAPA/master/core-plugins-tests%2Fdata%2Fdataset-deleted.trig parsed as n3

In repository: https://github.com/mikel-egana-aranguren/ALDAPA
> at line 14 of <>:
Bad syntax (EOF found when expected verb in property list) at ^ in:
"...b'nosti-movilidad2> a <http://xmlns.com/foaf/0.1/Project> .\r\n}'^b'\r\n'"

---
File: https://raw.githubusercontent.com/mikel-egana-aranguren/ALDAPA/master/core-plugins-tests%2Fdata%2FtestReset-namedgraph-data-created.trig parsed as n3

In repository: https://github.com/mikel-egana-aranguren/ALDAPA
> at line 75 of <>:
Bad syntax (objectList expected) at ^ in:
"...b'41559961978044"^^<http://www.w3.org/2001/XMLSchema#double> .'^b'\n}\n'"

---
File: https://raw.githubusercontent.com/mikel-egana-aranguren/ALDAPA/master/core-plugins-tests%2Fdata%2Fproject-deleted.trig parsed as n3

In repository: https://github.com/mikel-egana-aranguren/ALDAPA
> at line 20 of <>:
Bad syntax (EOF found after object) at ^ in:
"b'\r\n{\r\n\t<http://lod.eurohelp.es/aldapa/catalog/donosti-parkings-2> <http://schema.org/isPartOf> <http://lod.eurohelp.es/aldapa/project/donosti-movilidad2> ;\r\n\t\ta <http://www.w3.org/ns/dcat#Catalog> ;\r\n\t\t<http://www.w3.org/ns/dcat#dataset> <http://lod.eurohelp.es/aldapa/dataset/donosti-parkings-febr2> .\r\n\t\r\n\t<http://lod.eurohelp.es/aldapa/dataset/donosti-parkings-febr2> a <http://rdfs.org/ns/void#Dataset> , <http://schema.org/Distribution> , <http://www.w3.org/ns/dcat#Distribution> ;\r\n\t\t<http://www.w3.org/ns/sparql-service-description#namedGraph> <http://euskadi.eus/graph/donosti-parkings-febr-0012> .\r\n\t\r\n\t<http://lod.eurohelp.es/aldapa/project/donosti-movilidad2> a <http://xmlns.com/foaf/0.1/Project> .\r\n}\r\n\r\n<http://euskadi.eus/graph/donosti-parkings-febr-0012> {\r\n\t<http://opendata.eurohelp.es/resource/resource_004> <http://opendata.eurohelp.es/property/property_005> <http://opendata.eurohelp.es/resource/resource_006> .\r\n\t\r\n\t<http://opendata.eurohelp.es/resource/resource_006> <http://www.w3.org/2002/07/owl#sameAs> <http://dbpedia.org/resource/Bilbao> .\r\n\t\r\n\t<http://opendata.eurohelp.es/resource/resource_007> <http://www.w3.org/2000/01/rdf-schema#label> "Resource 007"@en .\r\n}\r'^b''..."

---
File: https://raw.githubusercontent.com/mikel-egana-aranguren/ALDAPA/master/core-plugins-tests%2Fdata%2Fcatalog-deleted.trig parsed as n3

In repository: https://github.com/mikel-egana-aranguren/ALDAPA
> at line 9 of <>:
Bad syntax (EOF found when expected verb in property list) at ^ in:
"...b'nosti-movilidad2> a <http://xmlns.com/foaf/0.1/Project> .\r\n}'^b'\r\n'"

---
File: https://raw.githubusercontent.com/mikel-egana-aranguren/ALDAPA/master/core-plugins-tests%2Fdata%2Ftest-ejie-calidad-aire-namedgraph-created-2.trig parsed as n3

In repository: https://github.com/mikel-egana-aranguren/ALDAPA
> at line 65 of <>:
Bad syntax (objectList expected) at ^ in:
"...b'41559961978044"^^<http://www.w3.org/2001/XMLSchema#double> .'^b'\n}\n'"

---
File: https://raw.githubusercontent.com/mikel-egana-aranguren/ALDAPA/master/core-plugins-tests%2Fdata%2Ftest-ejie-calidad-aire-namedgraph-created.trig parsed as n3

In repository: https://github.com/mikel-egana-aranguren/ALDAPA
> at line 75 of <>:
Bad syntax (objectList expected) at ^ in:
"...b'41559961978044"^^<http://www.w3.org/2001/XMLSchema#double> .'^b'\n}\n'"

---
File: https://raw.githubusercontent.com/mikel-egana-aranguren/ALDAPA/master/core-plugins-tests%2Fdata%2Fdata-named-graph-before-deleted.trig parsed as n3

In repository: https://github.com/mikel-egana-aranguren/ALDAPA
> at line 29 of <>:
Bad syntax (expected '.' or '}' or ']' at end of statement) at ^ in:
"...b'07/owl#sameAs> <http://dbpedia.org/resource/Bilbao> .\r\n}\r\n\r\n'^b'<http://euskadi.eus/graph/donosti-parkings-febr-0012> {\r\n\t<h'..."

---
File: https://raw.githubusercontent.com/mikel-egana-aranguren/ALDAPA/master/core-plugins-tests%2Fdata%2Fnamed-graph-before-deleted.trig parsed as n3

In repository: https://github.com/mikel-egana-aranguren/ALDAPA
> at line 29 of <>:
Bad syntax (expected '.' or '}' or ']' at end of statement) at ^ in:
"...b'07/owl#sameAs> <http://dbpedia.org/resource/Bilbao> .\r\n}\r\n\r\n'^b'<http://euskadi.eus/graph/donosti-parkings-febr-0012> {\r\n\t<h'..."

---
File: https://raw.githubusercontent.com/mikel-egana-aranguren/ALDAPA/master/core-plugins-tests%2Fdata%2Fcatalog-before-deleted.trig parsed as n3

In repository: https://github.com/mikel-egana-aranguren/ALDAPA
> at line 29 of <>:
Bad syntax (expected '.' or '}' or ']' at end of statement) at ^ in:
"...b'07/owl#sameAs> <http://dbpedia.org/resource/Bilbao> .\r\n}\r\n\r\n'^b'<http://euskadi.eus/graph/donosti-parkings-febr-0012> {\r\n\t<h'..."

---
File: https://raw.githubusercontent.com/mikel-egana-aranguren/ALDAPA/master/core-plugins-tests%2Fdata%2FtestAddDataToNamedGraph-data-added.trig parsed as n3

In repository: https://github.com/mikel-egana-aranguren/ALDAPA
> at line 75 of <>:
Bad syntax (objectList expected) at ^ in:
"...b'41559961978044"^^<http://www.w3.org/2001/XMLSchema#double> .'^b'\n}\n'"

---
File: https://raw.githubusercontent.com/mikel-egana-aranguren/ALDAPA/master/core-plugins-tests%2Fdata%2Fdata-named-graph-deleted.trig parsed as n3

In repository: https://github.com/mikel-egana-aranguren/ALDAPA
> at line 29 of <>:
Bad syntax (EOF found after object) at ^ in:
"b'\r\n{\r\n\t<http://lod.eurohelp.es/aldapa/catalog/donosti-parkings> <http://schema.org/isPartOf> <http://lod.eurohelp.es/aldapa/project/donosti-movilidad> ;\r\n\t\ta <http://www.w3.org/ns/dcat#Catalog> ;\r\n\t\t<http://www.w3.org/ns/dcat#dataset> <http://lod.eurohelp.es/aldapa/dataset/donosti-parkings-febr> .\r\n\t\r\n\t<http://lod.eurohelp.es/aldapa/catalog/donosti-parkings-2> <http://schema.org/isPartOf> <http://lod.eurohelp.es/aldapa/project/donosti-movilidad2> ;\r\n\t\ta <http://www.w3.org/ns/dcat#Catalog> ;\r\n\t\t<http://www.w3.org/ns/dcat#dataset> <http://lod.eurohelp.es/aldapa/dataset/donosti-parkings-febr2> .\r\n\t\r\n\t<http://lod.eurohelp.es/aldapa/dataset/donosti-parkings-febr> a <http://rdfs.org/ns/void#Dataset> , <http://schema.org/Distribution> , <http://www.w3.org/ns/dcat#Distribution> ;\r\n\t\t<http://www.w3.org/ns/sparql-service-description#namedGraph> <http://euskadi.eus/graph/donosti-parkings-febr-001> .\r\n\t\r\n\t<http://lod.eurohelp.es/aldapa/dataset/donosti-parkings-febr2> a <http://rdfs.org/ns/void#Dataset> , <http://schema.org/Distribution> , <http://www.w3.org/ns/dcat#Distribution> ;\r\n\t\t<http://www.w3.org/ns/sparql-service-description#namedGraph> <http://euskadi.eus/graph/donosti-parkings-febr-0012> .\r\n\t\r\n\t<http://lod.eurohelp.es/aldapa/project/donosti-movilidad> a <http://xmlns.com/foaf/0.1/Project> .\r\n\t\r\n\t<http://lod.eurohelp.es/aldapa/project/donosti-movilidad2> a <http://xmlns.com/foaf/0.1/Project> .\r\n}\r\n\r\n<http://euskadi.eus/graph/donosti-parkings-febr-0012> {\r\n\t<http://opendata.eurohelp.es/resource/resource_004> <http://opendata.eurohelp.es/property/property_005> <http://opendata.eurohelp.es/resource/resource_006> .\r\n\t\r\n\t<http://opendata.eurohelp.es/resource/resource_006> <http://www.w3.org/2002/07/owl#sameAs> <http://dbpedia.org/resource/Bilbao> .\r\n\t\r\n\t<http://opendata.eurohelp.es/resource/resource_007> <http://www.w3.org/2000/01/rdf-schema#label> "Resource 007"@en .\r\n}\r'^b''..."

---
File: https://raw.githubusercontent.com/mikel-egana-aranguren/ALDAPA/master/plugins%2Fsrc%2Ftest%2Fresources%2Fdata%2Fdefault-model.trig parsed as n3

In repository: https://github.com/mikel-egana-aranguren/ALDAPA
> at line 17 of <>:
Bad syntax (expected directive or statement) at ^ in:
"...b'#######\n\n############################\n# \n# Common prefixes\n\n'^b'PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPR'..."

---
File: https://raw.githubusercontent.com/mikel-egana-aranguren/ALDAPA/master/plugins%2Fdata%2FBlazegraphRESTStoreTest-flushNamedGraph.trig parsed as n3

In repository: https://github.com/mikel-egana-aranguren/ALDAPA
> at line 8 of <>:
Bad syntax (objectList expected) at ^ in:
"...b'.1/firstName> "Mikel Egana Aranguren flush flush flush" .\r\n}'^b'\r\n'"

---
File: https://raw.githubusercontent.com/mikel-egana-aranguren/ALDAPA/master/plugins%2Fdata%2Fdefault-model-outputData.trig parsed as n3

In repository: https://github.com/mikel-egana-aranguren/ALDAPA
> at line 9 of <>:
Bad syntax (objectList expected) at ^ in:
"...b'002/07/owl#sameAs> <http://dbpedia.org/resource/Bilbao> .\r\n}'^b'\r\n'"

---
File: https://raw.githubusercontent.com/mikel-egana-aranguren/ALDAPA/master/plugins%2Fdata%2Fdefault-model-outputMetaData.trig parsed as n3

In repository: https://github.com/mikel-egana-aranguren/ALDAPA
> at line 38 of <>:
Bad syntax (objectList expected) at ^ in:
"...b'://www.w3.org/ns/prov#wasGeneratedBy> _:node1cdn6vdfgx20 .\n}'^b'\n'"

---
File: https://raw.githubusercontent.com/mikel-egana-aranguren/ALDAPA/master/plugins%2Fdata%2Fdefault-model-outputMetaDataProjectRemoved.trig parsed as n3

In repository: https://github.com/mikel-egana-aranguren/ALDAPA
> at line 36 of <>:
Bad syntax (objectList expected) at ^ in:
"...b's://www.w3.org/ns/prov#wasGeneratedBy> _:node1cdn6vdfgx6 .\n}'^b'\n'"

---
File: https://raw.githubusercontent.com/mikel-egana-aranguren/ALDAPA/master/plugins%2Fsrc%2Ftest%2Fresources%2Fdata%2Fdata.n3 parsed as n3

In repository: https://github.com/mikel-egana-aranguren/ALDAPA
> at line 1 of <>:
Bad syntax (expected directive or statement) at ^ in:
"b''^b'PREFIX : <http://blazegraph.com/>\nPREFIX schema: <http://sch'..."

---
File: https://raw.githubusercontent.com/mikel-egana-aranguren/ALDAPA/master/core%2Fsrc%2Fmain%2Fresources%2Fmodel%2FaddNamedGraph.ttl parsed as ttl

In repository: https://github.com/mikel-egana-aranguren/ALDAPA
> at line 3 of <>:
Bad syntax (expected directive or statement) at ^ in:
"...b'FIX sd: <http://www.w3.org/ns/sparql-service-description#>\n\n'^b'DATASET_URI sd:namedGraph GRAPH_URI . # Actual data goes int'..."

---
File: https://raw.githubusercontent.com/mikel-egana-aranguren/ALDAPA/master/core%2Fsrc%2Fmain%2Fresources%2Fmodel%2FaddMetaDataToNamedGraph.ttl parsed as ttl

In repository: https://github.com/mikel-egana-aranguren/ALDAPA
> at line 4 of <>:
Bad syntax (expected directive or statement) at ^ in:
"...b'w3.org/ns/prov#>\nPREFIX csvw: <http://www.w3.org/ns/csvw#>\n\n'^b'GRAPH_URI prov:wasGeneratedBy [\n    \ta prov:Activity ;\n    \t'..."

---
File: https://raw.githubusercontent.com/mikel-egana-aranguren/ALDAPA/master/core%2Fsrc%2Fmain%2Fresources%2Fmodel%2FaddProject.ttl parsed as ttl

In repository: https://github.com/mikel-egana-aranguren/ALDAPA
> at line 4 of <>:
Bad syntax (expected directive or statement) at ^ in:
"...b'2-rdf-syntax-ns#>\nPREFIX foaf:<http://xmlns.com/foaf/0.1/>\n\n'^b'PROJECT_URI rdf:type foaf:Project .'"

---
File: https://raw.githubusercontent.com/mikel-egana-aranguren/ALDAPA/master/core%2Fsrc%2Fmain%2Fresources%2Fmodel%2FaddCatalog.ttl parsed as ttl

In repository: https://github.com/mikel-egana-aranguren/ALDAPA
> at line 5 of <>:
Bad syntax (expected directive or statement) at ^ in:
"...b'//www.w3.org/ns/dcat#>\nPREFIX schema: <http://schema.org/>\n\n'^b'CATALOG_URI rdf:type dcat:Catalog ;\n\t\tschema:isPartOf PROJEC'..."

---
File: https://raw.githubusercontent.com/mikel-egana-aranguren/ALDAPA/master/core%2Fsrc%2Fmain%2Fresources%2Fmodel%2FaddDataset.ttl parsed as ttl

In repository: https://github.com/mikel-egana-aranguren/ALDAPA
> at line 6 of <>:
Bad syntax (expected directive or statement) at ^ in:
"...b'ttp://schema.org/>\nPREFIX void: <http://rdfs.org/ns/void#>\n\n'^b'CATALOG_URI dcat:dataset DATASET_URI .\nDATASET_URI rdf:type '..."

---
File: https://raw.githubusercontent.com/LeonDsouza/B.E./master/LearningSPARQLExamples%2Fex319.ttl parsed as ttl

In repository: https://github.com/LeonDsouza/B.E.
> at line 7 of <>:
Bad syntax (Prefix "owl:" not bound) at ^ in:
"...b'09-21" .\n\n<http://rdf.freebase.com/ns/en.tommy_potter>\t\n    '^b'owl:sameAs\t\n    <http://dbpedia.org/resource/Tommy_Potter> .'..."

---
File: https://raw.githubusercontent.com/LeonDsouza/B.E./master/LearningSPARQLExamples%2Fex442.ttl parsed as ttl

In repository: https://github.com/LeonDsouza/B.E.
> at line 3 of <>:
Bad syntax (Prefix "void:" not bound) at ^ in:
"b'# filename: ex442.ttl (excerpt from void.ttl)\n\n'^b'void:Linkset a rdfs:Class, owl:Class;\n    rdfs:label "linkse'..."

---
File: https://raw.githubusercontent.com/LeonDsouza/B.E./master/LearningSPARQLExamples%2Fex420.ttl parsed as ttl

In repository: https://github.com/LeonDsouza/B.E.
> at line 11 of <>:
Bad syntax (expected '.' or '}' or ']' at end of statement) at ^ in:
"...b'irstName     "Richard" ;\n        ab:lastName       "Mutt" ;\n'^b'NOT DONE\n\nab:playsInstrument\n      rdf:type rdf:Property ;\n '..."

---
File: https://raw.githubusercontent.com/sap218/ocimido/master/ontology%2Focimido.owl parsed as xml

In repository: https://github.com/sap218/ocimido
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/ontology/ocimido.owl:18:69: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#Literal

---
File: https://raw.githubusercontent.com/houzw/knowledge-base-data/master/ConstaintsDemo%2Fshacl_test.ttl parsed as ttl

In repository: https://github.com/houzw/knowledge-base-data
> at line 14 of <>:
Bad syntax (expected item in list or ')') at ^ in:
"...b'  sh:property [\n    sh:path props:hasTextValue;\n    sh:in (1'^b',2,3);\n    sh:message "must be in";\n  ] ;\n\n'"

---
File: https://raw.githubusercontent.com/sichkar-valentyn/System_programming_for_SPARQL_querying_with_interface_development_by_html_files/master/Practice_13_Sichkar_Valentyn%2FPractice_13_Sichkar_Valentyn%2Fbin%2FDebug%2Fn3%2Fontology.n3 parsed as n3

In repository: https://github.com/sichkar-valentyn/System_programming_for_SPARQL_querying_with_interface_development_by_html_files
> at line 4 of <>:
Bad syntax (Prefix "    my:" not bound) at ^ in:
"...b'KB/recipes/n3_notation#>.\r\n\r\nmy:Peter a my:person, my:boy;\r\n'^b'\xc2\xa0\xc2\xa0\xc2\xa0\xc2\xa0my:suffers my:acrophobia, my:insomnia, my:xenophobia'..."

---
File: https://raw.githubusercontent.com/paya54/Reason-OWL/master/cutting_tool.owl parsed as xml

In repository: https://github.com/paya54/Reason-OWL
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/cutting_tool.owl:188:8: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#ObjectHasValue

---
File: https://raw.githubusercontent.com/falpema/PlanesCuenca/master/PlanesCuenca%2Fsrc%2Fresourcesfp%2Frestaurantes.rdf parsed as xml

In repository: https://github.com/falpema/PlanesCuenca
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/PlanesCuenca/src/resourcesfp/restaurantes.rdf:1:0: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/falpema/PlanesCuenca/master/PlanesCuenca%2Fsrc%2Frecursos%2Fontologia_ruta.owl parsed as xml

In repository: https://github.com/falpema/PlanesCuenca
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/PlanesCuenca/src/recursos/ontologia_ruta.owl:85:28: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#Class

---
File: https://raw.githubusercontent.com/falpema/PlanesCuenca/master/PlanesCuenca%2Fsrc%2Fresourcesfp%2Ftemp.nt parsed as nt

In repository: https://github.com/falpema/PlanesCuenca
> Invalid line: '<rdf:RDF'

---
File: https://raw.githubusercontent.com/AVeillas/IA301-urban-transport-ontology/master/UrbanTransportOntology.owl parsed as xml

In repository: https://github.com/AVeillas/IA301-urban-transport-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/UrbanTransportOntology.owl:19:50: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#Literal

---
File: https://raw.githubusercontent.com/Inria-Chile/mining-inspection-ontology/master/MineInspectionOntology.owl parsed as xml

In repository: https://github.com/Inria-Chile/mining-inspection-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/MineInspectionOntology.owl:1:0: syntax error

---
File: https://raw.githubusercontent.com/Svpwm/ChronicDiseaseManagement/master/rules.ttl parsed as ttl

In repository: https://github.com/Svpwm/ChronicDiseaseManagement
> at line 8 of <>:
Bad syntax (Prefix "rule1:" not bound) at ^ in:
"...b'refix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .\r\n\r\n\r\n['^b'rule1: (?p :hasCookingMethod ?n), (?n rdf:type :NotFryMethod'..."

---
File: https://raw.githubusercontent.com/hartig/eiffel-rdf-vocabularies/master/OnToology%2Feiffel.ttl parsed as ttl

In repository: https://github.com/hartig/eiffel-rdf-vocabularies
> [Errno 21] Is a directory: '/home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/OnToology/eiffel.ttl'

---
File: https://raw.githubusercontent.com/hartig/eiffel-rdf-vocabularies/master/OnToology%2Flink.ttl parsed as ttl

In repository: https://github.com/hartig/eiffel-rdf-vocabularies
> [Errno 21] Is a directory: '/home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/OnToology/link.ttl'

---
File: https://raw.githubusercontent.com/isuruamantha/OWL-to-AIML/master/src%2Fmain%2Fresources%2Fcoronavirus.owl parsed as xml

In repository: https://github.com/isuruamantha/OWL-to-AIML
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/main/resources/coronavirus.owl:126:41: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#NamedIndividual

---
File: https://raw.githubusercontent.com/amhiggin/CrimeGeolocationOntology/master/Geohive%2Fcensus2011-electoral-divisions.ttl parsed as ttl

In repository: https://github.com/amhiggin/CrimeGeolocationOntology
> Quote expected in string at ^ in T>
                "^POLYGON ((-6.3220487

---
File: https://raw.githubusercontent.com/CSIRO-enviro-informatics/eudm-profile/master/alignments%2Fagrif%2Fagrif-alignment.ttl parsed as ttl

In repository: https://github.com/CSIRO-enviro-informatics/eudm-profile
> at line 26 of <>:
Bad syntax (Prefix "agrif:" not bound) at ^ in:
"...b'ef/agrif> ;\n.\n\n#\n# Classes\n#\ndcat:Dataset\n  rdfs:subClassOf '^b'agrif:Record ;\n  dct:description "A Dataset is easily seen a'..."

---
File: https://raw.githubusercontent.com/decrn/virtual-university/main/data%2Fvu-mapping.ttl parsed as ttl

In repository: https://github.com/decrn/virtual-university
> at line 14 of <>:
Bad syntax (expected '.' or '}' or ']' at end of statement) at ^ in:
"...b'ce/> .\r\n@prefix dbo:      <http://dbpedia.org/ontology/>\r\n\r\n'^b'<#Courses>  a \trr:TriplesMap;\r\n            rr:logicalTable ['..."

---
File: https://raw.githubusercontent.com/AdhamGamal/QASAL/master/owlfiles%2Fplaces-in-quran.owl parsed as xml

In repository: https://github.com/AdhamGamal/QASAL
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/owlfiles/places-in-quran.owl:366:48: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#Class

---
File: https://raw.githubusercontent.com/Dorsa-Arezooji/AutoDoc/master/medical.owl parsed as xml

In repository: https://github.com/Dorsa-Arezooji/AutoDoc
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/medical.owl:294:39: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#Class

---
File: https://raw.githubusercontent.com/nicorsm/cgg-ontology/master/owl%2Fcounciliar-works.owl parsed as xml

In repository: https://github.com/nicorsm/cgg-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/owl/counciliar-works.owl:20:118: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#Literal

---
File: https://raw.githubusercontent.com/nicorsm/cgg-ontology/master/owl%2Fcgg.owl parsed as xml

In repository: https://github.com/nicorsm/cgg-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/owl/cgg.owl:21:126: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#Literal

---
File: https://raw.githubusercontent.com/nicorsm/cgg-ontology/master/owl%2Ftextual-products.owl parsed as xml

In repository: https://github.com/nicorsm/cgg-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/owl/textual-products.owl:20:117: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#Literal

---
File: https://raw.githubusercontent.com/nicorsm/cgg-ontology/master/owl%2Fregency.owl parsed as xml

In repository: https://github.com/nicorsm/cgg-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/owl/regency.owl:20:108: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#Literal

---
File: https://raw.githubusercontent.com/nicorsm/cgg-ontology/master/owl%2Fcommissions.owl parsed as xml

In repository: https://github.com/nicorsm/cgg-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/owl/commissions.owl:23:184: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#Literal

---
File: https://raw.githubusercontent.com/nicorsm/cgg-ontology/master/owl%2Fcongress.owl parsed as xml

In repository: https://github.com/nicorsm/cgg-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/owl/congress.owl:22:180: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#Literal

---
File: https://raw.githubusercontent.com/nicorsm/cgg-ontology/master/owl%2Finternational-delegations.owl parsed as xml

In repository: https://github.com/nicorsm/cgg-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/owl/international-delegations.owl:20:214: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#Literal

---
File: https://raw.githubusercontent.com/nicorsm/cgg-ontology/master/owl%2Fbase.owl parsed as xml

In repository: https://github.com/nicorsm/cgg-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/owl/base.owl:21:114: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#Literal

---
File: https://raw.githubusercontent.com/nicorsm/cgg-ontology/master/owl%2Fcouncil-of-12.owl parsed as xml

In repository: https://github.com/nicorsm/cgg-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/owl/council-of-12.owl:21:191: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#Literal

---
File: https://raw.githubusercontent.com/davysouza/CineOnto/master/cinema_database.owl parsed as xml

In repository: https://github.com/davysouza/CineOnto
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/cinema_database.owl:1:11: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/davysouza/CineOnto/master/cinema.owl parsed as xml

In repository: https://github.com/davysouza/CineOnto
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/cinema.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/davysouza/CineOnto/master/cinema_full.owl parsed as xml

In repository: https://github.com/davysouza/CineOnto
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/cinema_full.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/ROHITHKUMARN/CS5560_KDM_Project/master/Source%2FProject_Phase3%2FOntologyConstruction%2Fdata%2Ffootball.owl parsed as xml

In repository: https://github.com/ROHITHKUMARN/CS5560_KDM_Project
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/Source/Project_Phase3/OntologyConstruction/data/football.owl:166:41: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#NamedIndividual

---
File: https://raw.githubusercontent.com/ROHITHKUMARN/CS5560_KDM_Project/master/Source%2FProject_Phase3%2FQ2Query%2Fdata%2Fmedical.owl parsed as xml

In repository: https://github.com/ROHITHKUMARN/CS5560_KDM_Project
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/Source/Project_Phase3/Q2Query/data/medical.owl:148:56: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#NamedIndividual

---
File: https://raw.githubusercontent.com/ROHITHKUMARN/CS5560_KDM_Project/master/Source%2FPhase3%2FOntContructor%2Fdata%2Fmedical.owl parsed as xml

In repository: https://github.com/ROHITHKUMARN/CS5560_KDM_Project
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/Source/Phase3/OntContructor/data/medical.owl:148:56: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#NamedIndividual

---
File: https://raw.githubusercontent.com/comfyneet/BachelorThesis/master/Source%2FJava%2Fsrc%2Fmain%2Fresources%2Frice.owl parsed as xml

In repository: https://github.com/comfyneet/BachelorThesis
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/Source/Java/src/main/resources/rice.owl:906:40: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#Class

---
File: https://raw.githubusercontent.com/GovDataOfficial/DCAT-AP.de-SHACL-Validation/master/validator%2Fresources%2Fv1.0.2%2Fshapes%2Fdcat-ap-de-shapes-specification.ttl parsed as ttl

In repository: https://github.com/GovDataOfficial/DCAT-AP.de-SHACL-Validation
> at line 16 of <>:
Bad syntax (expected '.' or '}' or ']' at end of statement) at ^ in:
"...b'-advanced.ttl\n\n@prefix : <http://dcat-ap.de/def/dcatde/1.0.2'^b'/#>\n@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns'..."

---
File: https://raw.githubusercontent.com/AKSW/shacl-shapes/master/shape-groups%2Fadult-person%2Fadult-person.ttl parsed as ttl

In repository: https://github.com/AKSW/shacl-shapes
> at line 12 of <>:
Bad syntax (Prefix "srekl:" not bound) at ^ in:
"...b'which is considered an adult.\n\n:AdultShapeInfo\n    rdf:type '^b'srekl:ShapeInfo ;\n    dc11:title "Defines an adult person (f'..."

---
File: https://raw.githubusercontent.com/ThiagoCComelli/JS2SHACL-JSON-Schema-to-SHACL-conversor/master/outputSchemas%2Fpayloadtoolarge.ttl parsed as ttl

In repository: https://github.com/ThiagoCComelli/JS2SHACL-JSON-Schema-to-SHACL-conversor
> at line 17 of <>:
Bad syntax (bad escape) at ^ in:
"...b'h ex:version;\n    sh:datatype xsd:string;\n    sh:pattern "^('^b'\\d\\.)(\\d)$";\n    sh:minCount 1;\n  ];\n  sh:property [\n    sh:'..."

---
File: https://raw.githubusercontent.com/ThiagoCComelli/JS2SHACL-JSON-Schema-to-SHACL-conversor/master/outputSchemas%2F802-JS4Geo-FeatureCollection-JSONSchema.ttl parsed as ttl

In repository: https://github.com/ThiagoCComelli/JS2SHACL-JSON-Schema-to-SHACL-conversor
> at line 20 of <>:
Bad syntax (EOF found after object) at ^ in:
"b'@prefix sh: <http://www.w3.org/ns/shacl#> .\n@prefix ex: <http://example.org/#> .\n@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .\n@prefix owl: <http://www.w3.org/2002/07/owl#> .\n@prefix dash: <http://datashapes.org/dash#> .\n@prefix sf: <http://www.opengis.net/ont/sf#> .\n\n<http://www.example.org>\n  rdf:type owl:Ontology ;\n  owl:imports <http://localhost/SHACL/JS4Geo-ShapesGraph.ttl> .\n\nex:JS_id_Shape a sh:NodeShape;\n  sh:targetClass ex:JS_id;\n  sh:or (\n    ex:featureCollectionShape\n  ).\n\nex:propertiesShape a sh:NodeShape;\n  sh:targetClass ex:properties'^b''..."

---
File: https://raw.githubusercontent.com/ThiagoCComelli/JS2SHACL-JSON-Schema-to-SHACL-conversor/master/outputSchemas%2F702-JS4Geo-Feature-JSONSchema.ttl parsed as ttl

In repository: https://github.com/ThiagoCComelli/JS2SHACL-JSON-Schema-to-SHACL-conversor
> at line 20 of <>:
Bad syntax (EOF found after object) at ^ in:
"b'@prefix sh: <http://www.w3.org/ns/shacl#> .\n@prefix ex: <http://example.org/#> .\n@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .\n@prefix owl: <http://www.w3.org/2002/07/owl#> .\n@prefix dash: <http://datashapes.org/dash#> .\n@prefix sf: <http://www.opengis.net/ont/sf#> .\n\n<http://www.example.org>\n  rdf:type owl:Ontology ;\n  owl:imports <http://localhost/SHACL/JS4Geo-ShapesGraph.ttl> .\n\nex:JS_id_Shape a sh:NodeShape;\n  sh:targetClass ex:JS_id;\n  sh:or (\n    ex:featureShape\n  ).\n\nex:propertiesShape a sh:NodeShape;\n  sh:targetClass ex:properties'^b''..."

---
File: https://raw.githubusercontent.com/ThiagoCComelli/JS2SHACL-JSON-Schema-to-SHACL-conversor/master/outputSchemas%2Ftest1.ttl parsed as ttl

In repository: https://github.com/ThiagoCComelli/JS2SHACL-JSON-Schema-to-SHACL-conversor
> at line 10 of <>:
Bad syntax (']' expected) at ^ in:
"...b';\n  sh:targetClass ex:JS_id;\n  sh:property [\n    sh:path ex:'^b'@context;\n    sh:datatype xsd:string;\n    sh:pattern "http:/'..."

---
File: https://raw.githubusercontent.com/ThiagoCComelli/JS2SHACL-JSON-Schema-to-SHACL-conversor/master/outputSchemas%2Ftest.ttl parsed as ttl

In repository: https://github.com/ThiagoCComelli/JS2SHACL-JSON-Schema-to-SHACL-conversor
> at line 8 of <>:
Bad syntax (']' expected) at ^ in:
"...b';\n  sh:targetClass ex:JS_id;\n  sh:property [\n    sh:path ex:'^b'@context;\n    sh:datatype xsd:string;\n    sh:pattern "http:/'..."

---
File: https://raw.githubusercontent.com/landportal/data/master/landlibrary%2Fimporters%2Fconstituteproject.org%2Ffao-geopolitical-update.ttl parsed as ttl

In repository: https://github.com/landportal/data
> at line 3 of <>:
Bad syntax (expected '.' or '}' or ']' at end of statement) at ^ in:
"...b'efix ontology: <http://www.constituteproject.org/ontology/>\n'^b'<http://www.constituteproject.org/ontology/Taiwan> ontology:'..."

---
File: https://raw.githubusercontent.com/weso/shaclex/master/examples%2Frdf%2Fperson.jsonld parsed as json-ld

In repository: https://github.com/weso/shaclex
> 'utf-8' codec can't decode byte 0x8b in position 1: invalid start byte

---
File: https://raw.githubusercontent.com/weso/shaclex/master/examples%2Frdf%2Fthing.jsonld parsed as json-ld

In repository: https://github.com/weso/shaclex
> HTTP Error 404: Not Found

---
File: https://raw.githubusercontent.com/weso/shaclex/master/examples%2Fshex%2Fgood1.ttl parsed as ttl

In repository: https://github.com/weso/shaclex
> at line 4 of <>:
Bad syntax (expected '.' or '}' or ']' at end of statement) at ^ in:
"...b'example.org/>\r\n@prefix sh: <http://www.w3.org/ns/shacl#>\r\n\r\n'^b':x :p :y .\r\n\r\n:S sh:targetNode :x .\r\n'"

---
File: https://raw.githubusercontent.com/weso/shaclex/master/examples%2Fshex%2Ftest%2Firi.ttl parsed as ttl

In repository: https://github.com/weso/shaclex
> at line 1 of <>:
Bad syntax (EOF found in middle of path syntax) at ^ in:
"b'<http://x.com> a <T'^b'>'"

---
File: https://raw.githubusercontent.com/weso/shaclex/master/examples%2Fshacl%2Fgood2.ttl parsed as ttl

In repository: https://github.com/weso/shaclex
> at line 2 of <>:
Bad syntax (expected '.' or '}' or ']' at end of statement) at ^ in:
"b'@prefix : <http://example.org/>\r\n'^b'@prefix sh: <http://www.w3.org/ns/shacl#>\r\n\r\n:S a sh:NodeSha'..."

---
File: https://raw.githubusercontent.com/weso/shaclex/master/examples%2Fshacl%2Fgood13.ttl parsed as ttl

In repository: https://github.com/weso/shaclex
> at line 2 of <>:
Bad syntax (expected '.' or '}' or ']' at end of statement) at ^ in:
"b'@prefix : <http://example.org/>\r\n'^b'@prefix sh: <http://www.w3.org/ns/shacl#>\r\n@prefix xsd: <htt'..."

---
File: https://raw.githubusercontent.com/weso/shaclex/master/examples%2Fshacl%2Fgood5.ttl parsed as ttl

In repository: https://github.com/weso/shaclex
> at line 2 of <>:
Bad syntax (expected '.' or '}' or ']' at end of statement) at ^ in:
"b'@prefix : <http://example.org/>\r\n'^b'@prefix sh: <http://www.w3.org/ns/shacl#>\r\n@prefix xsd: <htt'..."

---
File: https://raw.githubusercontent.com/weso/shaclex/master/examples%2Fshacl%2Floop1.ttl parsed as ttl

In repository: https://github.com/weso/shaclex
> at line 4 of <>:
Bad syntax (expected '.' or '}' or ']' at end of statement) at ^ in:
"...b'ttp://www.example.org/> .\r\n@prefix : <http://example.org/>\r\n'^b'@prefix sh: <http://www.w3.org/ns/shacl#>\r\n\r\n:S a sh:NodeSha'..."

---
File: https://raw.githubusercontent.com/weso/shaclex/master/examples%2Fshacl%2Fgood9.ttl parsed as ttl

In repository: https://github.com/weso/shaclex
> at line 2 of <>:
Bad syntax (expected '.' or '}' or ']' at end of statement) at ^ in:
"b'@prefix : <http://example.org/>\r\n'^b'@prefix sh: <http://www.w3.org/ns/shacl#>\r\n@prefix xsd: <htt'..."

---
File: https://raw.githubusercontent.com/weso/shaclex/master/examples%2Fshacl%2Fbad1.ttl parsed as ttl

In repository: https://github.com/weso/shaclex
> at line 2 of <>:
Bad syntax (expected '.' or '}' or ']' at end of statement) at ^ in:
"b'@prefix : <http://example.org/>\r\n'^b'@prefix sh: <http://www.w3.org/ns/shacl#>\r\n\r\n:S a sh:NodeSha'..."

---
File: https://raw.githubusercontent.com/weso/shaclex/master/examples%2Fshacl%2Fgood18.ttl parsed as ttl

In repository: https://github.com/weso/shaclex
> at line 2 of <>:
Bad syntax (expected '.' or '}' or ']' at end of statement) at ^ in:
"b'@prefix : <http://example.org/>\r\n'^b'@prefix sh: <http://www.w3.org/ns/shacl#>\r\n@prefix xsd: <htt'..."

---
File: https://raw.githubusercontent.com/weso/shaclex/master/examples%2Fshacl%2Fgood17.ttl parsed as ttl

In repository: https://github.com/weso/shaclex
> at line 2 of <>:
Bad syntax (expected '.' or '}' or ']' at end of statement) at ^ in:
"b'@prefix : <http://example.org/>\r\n'^b'@prefix sh: <http://www.w3.org/ns/shacl#>\r\n@prefix xsd: <htt'..."

---
File: https://raw.githubusercontent.com/weso/shaclex/master/examples%2Fshacl%2Fgood1.ttl parsed as ttl

In repository: https://github.com/weso/shaclex
> at line 2 of <>:
Bad syntax (expected '.' or '}' or ']' at end of statement) at ^ in:
"b'@prefix : <http://example.org/>\r\n'^b'@prefix sh: <http://www.w3.org/ns/shacl#>\r\n@prefix xsd: <htt'..."

---
File: https://raw.githubusercontent.com/weso/shaclex/master/examples%2Fshacl%2Fgood14.ttl parsed as ttl

In repository: https://github.com/weso/shaclex
> at line 2 of <>:
Bad syntax (expected '.' or '}' or ']' at end of statement) at ^ in:
"b'@prefix : <http://example.org/>\r\n'^b'@prefix sh: <http://www.w3.org/ns/shacl#>\r\n@prefix xsd: <htt'..."

---
File: https://raw.githubusercontent.com/weso/shaclex/master/examples%2Fshacl%2Fgood3.ttl parsed as ttl

In repository: https://github.com/weso/shaclex
> at line 2 of <>:
Bad syntax (expected '.' or '}' or ']' at end of statement) at ^ in:
"b'@prefix : <http://example.org/>\r\n'^b'@prefix sh: <http://www.w3.org/ns/shacl#>\r\n\r\n:S a sh:NodeSha'..."

---
File: https://raw.githubusercontent.com/weso/shaclex/master/examples%2Fshacl%2Fgood11.ttl parsed as ttl

In repository: https://github.com/weso/shaclex
> at line 2 of <>:
Bad syntax (expected '.' or '}' or ']' at end of statement) at ^ in:
"b'@prefix : <http://example.org/>\r\n'^b'@prefix sh: <http://www.w3.org/ns/shacl#>\r\n@prefix xsd: <htt'..."

---
File: https://raw.githubusercontent.com/weso/shaclex/master/examples%2Fshacl%2Fgood16.ttl parsed as ttl

In repository: https://github.com/weso/shaclex
> at line 2 of <>:
Bad syntax (expected '.' or '}' or ']' at end of statement) at ^ in:
"b'@prefix : <http://example.org/>\r\n'^b'@prefix sh: <http://www.w3.org/ns/shacl#>\r\n@prefix xsd: <htt'..."

---
File: https://raw.githubusercontent.com/weso/shaclex/master/examples%2Fshacl%2Fgood19.ttl parsed as ttl

In repository: https://github.com/weso/shaclex
> at line 2 of <>:
Bad syntax (expected '.' or '}' or ']' at end of statement) at ^ in:
"b'@prefix : <http://example.org/>\r\n'^b'@prefix sh: <http://www.w3.org/ns/shacl#>\r\n@prefix xsd: <htt'..."

---
File: https://raw.githubusercontent.com/weso/shaclex/master/examples%2Fshacl%2Fgood8.ttl parsed as ttl

In repository: https://github.com/weso/shaclex
> at line 2 of <>:
Bad syntax (expected '.' or '}' or ']' at end of statement) at ^ in:
"b'@prefix : <http://example.org/>\r\n'^b'@prefix sh: <http://www.w3.org/ns/shacl#>\r\n@prefix xsd: <htt'..."

---
File: https://raw.githubusercontent.com/weso/shaclex/master/examples%2Fshacl%2Fgood4.ttl parsed as ttl

In repository: https://github.com/weso/shaclex
> at line 2 of <>:
Bad syntax (expected '.' or '}' or ']' at end of statement) at ^ in:
"b'@prefix : <http://example.org/>\r\n'^b'@prefix sh: <http://www.w3.org/ns/shacl#>\r\n@prefix xsd: <htt'..."

---
File: https://raw.githubusercontent.com/weso/shaclex/master/examples%2Fshacl%2Fpath1.ttl parsed as ttl

In repository: https://github.com/weso/shaclex
> at line 2 of <>:
Bad syntax (expected '.' or '}' or ']' at end of statement) at ^ in:
"b'@prefix : <http://example.org/>\r\n'^b'@prefix sh: <http://www.w3.org/ns/shacl#>\r\n@prefix xsd: <htt'..."

---
File: https://raw.githubusercontent.com/weso/shaclex/master/examples%2Fshacl%2Fgood7.ttl parsed as ttl

In repository: https://github.com/weso/shaclex
> at line 2 of <>:
Bad syntax (expected '.' or '}' or ']' at end of statement) at ^ in:
"b'@prefix : <http://example.org/>\r\n'^b'@prefix sh: <http://www.w3.org/ns/shacl#>\r\n@prefix xsd: <htt'..."

---
File: https://raw.githubusercontent.com/weso/shaclex/master/examples%2Fshacl%2Fgood12.ttl parsed as ttl

In repository: https://github.com/weso/shaclex
> at line 2 of <>:
Bad syntax (expected '.' or '}' or ']' at end of statement) at ^ in:
"b'@prefix : <http://example.org/>\r\n'^b'@prefix sh: <http://www.w3.org/ns/shacl#>\r\n@prefix xsd: <htt'..."

---
File: https://raw.githubusercontent.com/weso/shaclex/master/examples%2Fshacl%2Fgood10.ttl parsed as ttl

In repository: https://github.com/weso/shaclex
> at line 2 of <>:
Bad syntax (expected '.' or '}' or ']' at end of statement) at ^ in:
"b'@prefix : <http://example.org/>\r\n'^b'@prefix sh: <http://www.w3.org/ns/shacl#>\r\n@prefix xsd: <htt'..."

---
File: https://raw.githubusercontent.com/weso/shaclex/master/examples%2Fshacl%2Fgood6.ttl parsed as ttl

In repository: https://github.com/weso/shaclex
> at line 2 of <>:
Bad syntax (expected '.' or '}' or ']' at end of statement) at ^ in:
"b'@prefix : <http://example.org/>\r\n'^b'@prefix sh: <http://www.w3.org/ns/shacl#>\r\n@prefix xsd: <htt'..."

---
File: https://raw.githubusercontent.com/weso/shaclex/master/src%2Ftest%2Fresources%2FshexTest%2Fvalidation%2Fsimple-group.shacl parsed as ttl

In repository: https://github.com/weso/shaclex
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix :'^b'      &lt;http://a.example/&gt; .\r\n@prefix sh:    &lt;http:/'..."

---
File: https://raw.githubusercontent.com/weso/shaclex/master/src%2Ftest%2Fresources%2FshexTest%2Fvalidation%2Frepeated-group.shacl parsed as ttl

In repository: https://github.com/weso/shaclex
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix :'^b'      &lt;http://a.example/&gt; .\r\n@prefix sh:    &lt;http:/'..."

---
File: https://raw.githubusercontent.com/weso/shaclex/master/src%2Ftest%2Fresources%2FshexTest%2Fvalidation%2FnPlus1.shacl parsed as ttl

In repository: https://github.com/weso/shaclex
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix :'^b'      &lt;http://a.example/&gt; .\r\n@prefix sh:    &lt;http:/'..."

---
File: https://raw.githubusercontent.com/weso/shaclex/master/src%2Ftest%2Fresources%2FshexTest%2Fvalidation%2Fskipped.shacl parsed as ttl

In repository: https://github.com/weso/shaclex
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix :'^b'      &lt;http://a.example/&gt; .\r\n@prefix sh:    &lt;http:/'..."

---
File: https://raw.githubusercontent.com/weso/shaclex/master/src%2Ftest%2Fresources%2FshexTest%2Fvalidation%2Fnested-repeated-group.shacl parsed as ttl

In repository: https://github.com/weso/shaclex
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix :'^b'      &lt;http://a.example/&gt; .\r\n@prefix sh:    &lt;http:/'..."

---
File: https://raw.githubusercontent.com/weso/shaclex/master/src%2Ftest%2Fresources%2FshexTest%2Fvalidation%2Ffalse-lead-excluding-value-shape.shacl parsed as ttl

In repository: https://github.com/weso/shaclex
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix :'^b'      &lt;http://a.example/&gt; .\r\n@prefix sh:    &lt;http:/'..."

---
File: https://raw.githubusercontent.com/weso/shaclex/master/src%2Ftest%2Fresources%2FshexTest%2Fschemas%2FfutureWork%2F1dotVirtual.shacl parsed as ttl

In repository: https://github.com/weso/shaclex
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix sh:'^b'    &lt;http://www.w3.org/ns/shacl/core#&gt; .\r\n@prefix xsd:'..."

---
File: https://raw.githubusercontent.com/weso/shaclex/master/src%2Ftest%2Fresources%2FshexTest%2Fschemas%2FfutureWork%2F1dotVirtualShapeCode1.shacl parsed as ttl

In repository: https://github.com/weso/shaclex
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix sh:'^b'    &lt;http://www.w3.org/ns/shacl/core#&gt; .\r\n@prefix xsd:'..."

---
File: https://raw.githubusercontent.com/weso/rdfshape/master/src%2Ftest%2Fresources%2FshexTest%2Fvalidation%2Fsimple-group.shacl parsed as ttl

In repository: https://github.com/weso/rdfshape
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix :'^b'      &lt;http://a.example/&gt; .\n@prefix sh:    &lt;http://'..."

---
File: https://raw.githubusercontent.com/weso/rdfshape/master/src%2Ftest%2Fresources%2FshexTest%2Fvalidation%2Frepeated-group.shacl parsed as ttl

In repository: https://github.com/weso/rdfshape
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix :'^b'      &lt;http://a.example/&gt; .\n@prefix sh:    &lt;http://'..."

---
File: https://raw.githubusercontent.com/weso/rdfshape/master/src%2Ftest%2Fresources%2FshexTest%2Fvalidation%2FnPlus1.shacl parsed as ttl

In repository: https://github.com/weso/rdfshape
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix :'^b'      &lt;http://a.example/&gt; .\n@prefix sh:    &lt;http://'..."

---
File: https://raw.githubusercontent.com/weso/rdfshape/master/src%2Ftest%2Fresources%2FshexTest%2Fvalidation%2Fskipped.shacl parsed as ttl

In repository: https://github.com/weso/rdfshape
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix :'^b'      &lt;http://a.example/&gt; .\n@prefix sh:    &lt;http://'..."

---
File: https://raw.githubusercontent.com/weso/rdfshape/master/src%2Ftest%2Fresources%2FshexTest%2Fvalidation%2Fnested-repeated-group.shacl parsed as ttl

In repository: https://github.com/weso/rdfshape
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix :'^b'      &lt;http://a.example/&gt; .\n@prefix sh:    &lt;http://'..."

---
File: https://raw.githubusercontent.com/weso/rdfshape/master/src%2Ftest%2Fresources%2FshexTest%2Fvalidation%2Ffalse-lead-excluding-value-shape.shacl parsed as ttl

In repository: https://github.com/weso/rdfshape
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix :'^b'      &lt;http://a.example/&gt; .\n@prefix sh:    &lt;http://'..."

---
File: https://raw.githubusercontent.com/weso/rdfshape/master/src%2Ftest%2Fresources%2FshexTest%2Fschemas%2FfutureWork%2F1dotVirtual.shacl parsed as ttl

In repository: https://github.com/weso/rdfshape
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix sh:'^b'    &lt;http://www.w3.org/ns/shacl/core#&gt; .\n@prefix xsd: '..."

---
File: https://raw.githubusercontent.com/weso/rdfshape/master/src%2Ftest%2Fresources%2FshexTest%2Fschemas%2FfutureWork%2F1dotVirtualShapeCode1.shacl parsed as ttl

In repository: https://github.com/weso/rdfshape
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix sh:'^b'    &lt;http://www.w3.org/ns/shacl/core#&gt; .\n@prefix xsd: '..."

---
File: https://raw.githubusercontent.com/biolink/biolinkml/master/meta.jsonld parsed as json-ld

In repository: https://github.com/biolink/biolinkml
> [Errno 2] No such file or directory: '/Users/hsolbrig/git/biolink/biolinkml/tests/input/includes/types.context.jsonld'

---
File: https://raw.githubusercontent.com/biolink/biolinkml/master/includes%2Fextensions.jsonld parsed as json-ld

In repository: https://github.com/biolink/biolinkml
> [Errno 2] No such file or directory: '/Users/hsolbrig/git/biolink/biolinkml/tests/input/includes/types.context.jsonld'

---
File: https://raw.githubusercontent.com/biolink/biolinkml/master/includes%2Fannotations.jsonld parsed as json-ld

In repository: https://github.com/biolink/biolinkml
> [Errno 2] No such file or directory: '/Users/hsolbrig/git/biolink/biolinkml/tests/input/includes/types.context.jsonld'

---
File: https://raw.githubusercontent.com/biolink/biolinkml/master/includes%2Fmappings.jsonld parsed as json-ld

In repository: https://github.com/biolink/biolinkml
> [Errno 2] No such file or directory: '/Users/hsolbrig/git/biolink/biolinkml/tests/input/includes/types.context.jsonld'

---
File: https://raw.githubusercontent.com/biolink/biolinkml/master/tests%2Ftest_scripts%2Foutput%2Fgenjsonld%2Fmeta.jsonld parsed as json-ld

In repository: https://github.com/biolink/biolinkml
> [Errno 2] No such file or directory: '/home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/tests/test_scripts/output/genjsonld/output/gencontext/meta.jsonld'

---
File: https://raw.githubusercontent.com/biolink/biolinkml/master/tests%2Finput%2Fincludes%2Fannotations.jsonld parsed as json-ld

In repository: https://github.com/biolink/biolinkml
> [Errno 2] No such file or directory: '/Users/solbrig/git/biolink/biolinkml/tests/input/includes/extensions.context.jsonld'

---
File: https://raw.githubusercontent.com/biolink/biolinkml/master/meta.owl parsed as xml

In repository: https://github.com/biolink/biolinkml
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/meta.owl:1:0: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/biolink/biolinkml/master/tests%2Ftest_issues%2Foutput%2Fissue_290.owl parsed as xml

In repository: https://github.com/biolink/biolinkml
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/tests/test_issues/output/issue_290.owl:1:0: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/biolink/biolinkml/master/tests%2Ftest_issues%2Foutput%2Fissue_163.owl parsed as xml

In repository: https://github.com/biolink/biolinkml
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/tests/test_issues/output/issue_163.owl:1:0: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/biolink/biolinkml/master/tests%2Ftest_issues%2Foutput%2Fissue_163c.owl parsed as xml

In repository: https://github.com/biolink/biolinkml
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/tests/test_issues/output/issue_163c.owl:1:0: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/biolink/biolinkml/master/tests%2Ftest_issues%2Foutput%2Fissue_163b.owl parsed as xml

In repository: https://github.com/biolink/biolinkml
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/tests/test_issues/output/issue_163b.owl:1:0: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/biolink/biolinkml/master/tests%2Ftest_issues%2Foutput%2Fissue_tccm%2Fminimalmodel.owl parsed as xml

In repository: https://github.com/biolink/biolinkml
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/tests/test_issues/output/issue_tccm/minimalmodel.owl:1:0: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/biolink/biolinkml/master/tests%2Foutput%2Fmeta.owl parsed as xml

In repository: https://github.com/biolink/biolinkml
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/tests/output/meta.owl:1:0: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/biolink/biolinkml/master/tests%2Ftest_biolink_model%2Foutput%2Fbiolink-model.native.owl parsed as xml

In repository: https://github.com/biolink/biolinkml
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/tests/test_biolink_model/output/biolink-model.native.owl:1:0: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/biolink/biolinkml/master/tests%2Ftest_biolink_model%2Foutput%2Fbiolink-model.owl parsed as xml

In repository: https://github.com/biolink/biolinkml
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/tests/test_biolink_model/output/biolink-model.owl:1:0: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/biolink/biolinkml/master/tests%2Ftest_utils%2Foutput%2Fowl2.owl parsed as xml

In repository: https://github.com/biolink/biolinkml
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/tests/test_utils/output/owl2.owl:1:0: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/biolink/biolinkml/master/tests%2Ftest_utils%2Foutput%2Fowl1.owl parsed as xml

In repository: https://github.com/biolink/biolinkml
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/tests/test_utils/output/owl1.owl:1:0: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/biolink/biolinkml/master/tests%2Fdata%2Fhp_f.ttl parsed as ttl

In repository: https://github.com/biolink/biolinkml
> at line 70315 of <>:
Bad syntax (Prefix "xsd:" not bound) at ^ in:
"...b'os:seeAlso "http://www.human-phenotype-ontology.org#HP_30000'^b'79"^^xsd:anyURI ;\n\nccdh:SpecimenType a skos:Collection ;\n   '..."

---
File: https://raw.githubusercontent.com/rdf-elixir/shex-ex/master/test%2Fdata%2FshexTest%2Fvalidation%2FnPlus1.shacl parsed as ttl

In repository: https://github.com/rdf-elixir/shex-ex
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix :'^b'      &lt;http://a.example/&gt; .\n@prefix sh:    &lt;http://'..."

---
File: https://raw.githubusercontent.com/rdf-elixir/shex-ex/master/test%2Fdata%2FshexTest%2Fvalidation%2Fskipped.shacl parsed as ttl

In repository: https://github.com/rdf-elixir/shex-ex
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix :'^b'      &lt;http://a.example/&gt; .\n@prefix sh:    &lt;http://'..."

---
File: https://raw.githubusercontent.com/rdf-elixir/shex-ex/master/test%2Fdata%2FshexTest%2Fvalidation%2Ffalse-lead-excluding-value-shape.shacl parsed as ttl

In repository: https://github.com/rdf-elixir/shex-ex
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix :'^b'      &lt;http://a.example/&gt; .\n@prefix sh:    &lt;http://'..."

---
File: https://raw.githubusercontent.com/rdf-elixir/shex-ex/master/test%2Fdata%2FshexTest%2Fschemas%2FfutureWork%2F1dotVirtual.shacl parsed as ttl

In repository: https://github.com/rdf-elixir/shex-ex
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix sh:'^b'    &lt;http://www.w3.org/ns/shacl/core#&gt; .\n@prefix xsd: '..."

---
File: https://raw.githubusercontent.com/rdf-elixir/shex-ex/master/test%2Fdata%2FshexTest%2Fschemas%2FfutureWork%2F1dotVirtualShapeCode1.shacl parsed as ttl

In repository: https://github.com/rdf-elixir/shex-ex
> at line 1 of <>:
Bad syntax (expected <uriref> after @prefix _qname_) at ^ in:
"b'@prefix sh:'^b'    &lt;http://www.w3.org/ns/shacl/core#&gt; .\n@prefix xsd: '..."

---
File: https://raw.githubusercontent.com/MBoegers/ShexSHACLAndFriends/master/listings%2FValueValidation.shacl parsed as ttl

In repository: https://github.com/MBoegers/ShexSHACLAndFriends
> at line 1 of <>:
Bad syntax (Prefix "sh:" not bound) at ^ in:
"b''^b'sh:NamedObjectShape a sh:NodeShape;\n  sh:targetClass ex:Name'..."

---
File: https://raw.githubusercontent.com/MBoegers/ShexSHACLAndFriends/master/listings%2FStructureValidation.shacl parsed as ttl

In repository: https://github.com/MBoegers/ShexSHACLAndFriends
> at line 1 of <>:
Bad syntax (Prefix "ex:" not bound) at ^ in:
"b''^b'ex:NamedObjectStruct a sh:NodeShape ;\n\tsh:targetClass NamedO'..."

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
File: https://raw.githubusercontent.com/MaastrichtU-IDS/translator-openpredict/master/openpredict%2Fdata%2Fontology%2Fplex_tbox_0.1.1.owl parsed as xml

In repository: https://github.com/MaastrichtU-IDS/translator-openpredict
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/openpredict/data/ontology/plex_tbox_0.1.1.owl:41:68: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#IRI

---
File: https://raw.githubusercontent.com/MaastrichtU-IDS/translator-openpredict/master/openpredict%2Fdata%2Fontology%2Fplex_tbox_0.1.2.owl parsed as xml

In repository: https://github.com/MaastrichtU-IDS/translator-openpredict
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/openpredict/data/ontology/plex_tbox_0.1.2.owl:41:68: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#IRI

---
File: https://raw.githubusercontent.com/MaastrichtU-IDS/translator-openpredict/master/data%2Finitial-openpredict-metadata.ttl parsed as ttl

In repository: https://github.com/MaastrichtU-IDS/translator-openpredict
> at line 25 of <>:
Bad syntax (expected directive or statement) at ^ in:
"...b'tifier "HPO-SIM";\n  openpredict:embedding_type "Diseases" .\n'^b'aaa\n<https://w3id.org/openpredict/feature/PHENO-SIM> a mls:F'..."

---
SPARQL endpoint failed: http://localhost:8890/sparql

<urlopen error [Errno 111] Connection refused>

---
SPARQL endpoint failed: http://localhost:8890/sparql

<urlopen error [Errno 111] Connection refused>

---
SPARQL endpoint failed: http://localhost:8890/sparql

<urlopen error [Errno 111] Connection refused>

---
SPARQL endpoint failed: http://localhost:8890/sparql

<urlopen error [Errno 111] Connection refused>

---
SPARQL endpoint failed: http://localhost:8890/sparql

<urlopen error [Errno 111] Connection refused>

---
SPARQL endpoint failed: https://sparql.diginfra.net/sparql

HTTP Error 504: Gateway Time-out

---
SPARQL endpoint failed: https://sparql.diginfra.net/sparql

HTTP Error 504: Gateway Time-out

---
SPARQL endpoint failed: https://sparql.diginfra.net/sparql

HTTP Error 504: Gateway Time-out

---
SPARQL endpoint failed: https://sparql.diginfra.net/sparql

HTTP Error 504: Gateway Time-out

---
File: https://raw.githubusercontent.com/NatLibFi/Skosify/master/examples%2Fdctype.out.rdf parsed as xml

In repository: https://github.com/NatLibFi/Skosify
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/examples/dctype.out.rdf:1:0: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/sparna-git/xls2rdf/master/xls2rdf-lib%2Fsrc%2Ftest%2Fresources%2Fsuite%2F_32_qbPostProcessingTest%2Fexpected.ttl parsed as ttl

In repository: https://github.com/sparna-git/xls2rdf
> at line 14 of <>:
Bad syntax (Prefix "dcat:" not bound) at ^ in:
"...b'atoiredeslangues.culture.gouv.fr/dataset/enquete-INED>\n  \ta '^b'dcat:Dataset;\n    a qb:DataSet;\n    dct:title "statistique d'..."

---
File: https://raw.githubusercontent.com/sparna-git/xls2rdf/master/xls2rdf-lib%2Fsrc%2Ftest%2Fresources%2Fsuite%2F_35_specialCharacters%2Fexpected.ttl parsed as ttl

In repository: https://github.com/sparna-git/xls2rdf
> at line 19 of <>:
Bad syntax (Prefix "dcterms:" not bound) at ^ in:
"...b'inebleau.fr/vocabulaires/personnes> a skos:ConceptScheme ;\n\t'^b'dcterms:title "Personnes"@fr;\n\tskos:hasTopConcept <http://ww'..."

---
File: https://raw.githubusercontent.com/Coleridge-Initiative/adrf-onto/master/rcc.ttl parsed as ttl

In repository: https://github.com/Coleridge-Initiative/adrf-onto
> at line 12 of <>:
Bad syntax (Prefix ":" not bound) at ^ in:
"...b'ns#> .\n@prefix xsd:\t<http://www.w3.org/2001/XMLSchema#> .\n\n\n'^b':dataset481\n  rdf:type :Dataset ;\n  dct:title "National Heal'..."

---
File: https://raw.githubusercontent.com/Coleridge-Initiative/adrf-onto/master/adrf.ttl parsed as ttl

In repository: https://github.com/Coleridge-Initiative/adrf-onto
> at line 24 of <>:
Bad syntax (Prefix ":" not bound) at ^ in:
"...b'ce> .\n@prefix xsd:\t\t<http://www.w3.org/2001/XMLSchema#> .\n\n\n'^b':ADRF_Ontology rdf:type skos:ConceptScheme ;\n  skos:definiti'..."

---
File: https://raw.githubusercontent.com/NisrineBennor/Project_Master2_SemanticWeb/main/Ontologie_Orthodef_Orthophonie.owl parsed as xml

In repository: https://github.com/NisrineBennor/Project_Master2_SemanticWeb
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/Ontologie_Orthodef_Orthophonie.owl:26:0: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#Literal

---
File: https://raw.githubusercontent.com/alcinnz/skos-cloud/master/rdf-parser-tests%2Ftimescale-isc2014.ttl parsed as ttl

In repository: https://github.com/alcinnz/skos-cloud
> at line 11286 of <>:
Bad syntax (expected '.' or '}' or ']' at end of statement) at ^ in:
"...b'ologicEra ;\n  rdf:type skos:Concept ;\n  gts:rank <http://res'^b'ource.geosciml.org/ontology/timescale/rank/Eon> ;\n  thors:be'..."

---
File: https://raw.githubusercontent.com/alcinnz/skos-cloud/master/rdf-parser-tests%2Ftests%2Ffinal.ttl parsed as ttl

In repository: https://github.com/alcinnz/skos-cloud
> at line 11286 of <>:
Bad syntax (expected '.' or '}' or ']' at end of statement) at ^ in:
"...b'ologicEra ;\n  rdf:type skos:Concept ;\n  gts:rank <http://res'^b'ource.geosciml.org/ontology/timescale/rank/Eon> ;\n  thors:be'..."

---
File: https://raw.githubusercontent.com/kbss-cvut/termit/master/src%2Ftest%2Fresources%2Fvocabularies%2Fipr-glossaries.ttl parsed as ttl

In repository: https://github.com/kbss-cvut/termit
> at line 1 of <>:
Bad syntax (expected '.' or '}' or ']' at end of statement) at ^ in:
"b'<http://data.iprpraha.cz/zdroj/slovnik/mpp-3> '^b'{\n    <http://data.iprpraha.cz/zdroj/slovnik/mpp-3/plocha-te'..."

---
File: https://raw.githubusercontent.com/kbss-cvut/termit/master/rulesets%2Frules-termit-spin.ttl parsed as ttl

In repository: https://github.com/kbss-cvut/termit
> at line 16 of <>:
Bad syntax (Prefix "skos:" not bound) at ^ in:
"...b'          WHERE { ?vocabulary pdp:popisuje-dokument ?this . '^b'}"""\n] .\n\nskos:Concept a rdfs:Class ;\n# InverseOf between je'..."

---
File: https://raw.githubusercontent.com/opendata-mvcr/ciselniky/master/dny-v-t%C3%BDdnu.trig parsed as n3

In repository: https://github.com/opendata-mvcr/ciselniky
> at line 39 of <>:
Bad syntax (objectList expected) at ^ in:
"...b'/ned\xc4\x9ble> a skos:Concept;\n    skos:inScheme <https://data.mv'^b'cr.gov.cz/zdroj/\xc4\x8d\xc3\xadseln\xc3\xadky/dny-v-t\xc3\xbddnu>;\n    skos:prefLab'..."

---
File: https://raw.githubusercontent.com/opendata-mvcr/ciselniky/master/typy-t%C5%99%C3%ADd%C4%9Bn%C3%BDch-odpad%C5%AF.trig parsed as n3

In repository: https://github.com/opendata-mvcr/ciselniky
> at line 230 of <>:
Bad syntax (objectList expected) at ^ in:
"...b'-odpad\xc5\xaf/polo\xc5\xbeky/kabely> a\n      skos:Concept;\n    skos:inS'^b'cheme <https://data.mvcr.gov.cz/zdroj/\xc4\x8d\xc3\xadseln\xc3\xadky/typy-t\xc5\x99\xc3'..."

---
File: https://raw.githubusercontent.com/opendata-mvcr/ciselniky/master/jin%C3%A1-%C4%8Dasov%C3%A1-specifikace.trig parsed as n3

In repository: https://github.com/opendata-mvcr/ciselniky
> at line 23 of <>:
Bad syntax (objectList expected) at ^ in:
"...b'cr.gov.cz/zdroj/\xc4\x8d\xc3\xadseln\xc3\xadky/jin\xc3\xa1-\xc4\x8dasov\xc3\xa1-specifikace>;\n  '^b'  skos:prefLabel "Bad weather"@en, "\xc5\xa0patn\xc3\xa9 po\xc4\x8das\xc3\xad"@cs .\n'..."

---
File: https://raw.githubusercontent.com/opendata-mvcr/ciselniky/master/pohlav%C3%AD.trig parsed as n3

In repository: https://github.com/opendata-mvcr/ciselniky
> at line 19 of <>:
Bad syntax (objectList expected) at ^ in:
"...b'://data.mvcr.gov.cz/zdroj/\xc4\x8d\xc3\xadseln\xc3\xadky/pohlav\xc3\xad>;\n    skos:p'^b'refLabel "Female"@en, "\xc5\xbdensk\xc3\xa9"@cs .\n}\n'"

---
File: https://raw.githubusercontent.com/opendata-mvcr/ciselniky/master/stupn%C4%9B-p%C5%99%C3%ADstupnosti.trig parsed as n3

In repository: https://github.com/opendata-mvcr/ciselniky
> at line 26 of <>:
Bad syntax (objectList expected) at ^ in:
"...b'.cz/zdroj/\xc4\x8d\xc3\xadseln\xc3\xadky/stupn\xc4\x9b-p\xc5\x99\xc3\xadstupnosti>;\n    skos:pre'^b'fLabel "Difficult to access or inaccessible"@en, "Obt\xc3\xad\xc5\xben\xc4\x9b'..."

---
File: https://raw.githubusercontent.com/opendata-mvcr/ciselniky/master/typy-d%C5%99evin.trig parsed as n3

In repository: https://github.com/opendata-mvcr/ciselniky
> at line 60 of <>:
Bad syntax (objectList expected) at ^ in:
"...b'cs .\n  \n  <https://data.mvcr.gov.cz/zdroj/\xc4\x8d\xc3\xadseln\xc3\xadky/typy-'^b'd\xc5\x99evin/polo\xc5\xbeky/strom> a skos:Concept;\n    skos:inScheme <h'..."

---
File: https://raw.githubusercontent.com/opendata-mvcr/ciselniky/master/sporty.trig parsed as n3

In repository: https://github.com/opendata-mvcr/ciselniky
> at line 412 of <>:
Bad syntax (objectList expected) at ^ in:
"...b'porty>;\n    skos:prefLabel "Workout"@cs, "Workout"@en .\n  \n '^b' <https://data.mvcr.gov.cz/zdroj/\xc4\x8d\xc3\xadseln\xc3\xadky/sporty/polo\xc5\xbek'..."

---
File: https://raw.githubusercontent.com/opendata-mvcr/ciselniky/master/typy-sportovi%C5%A1%C5%A5.trig parsed as n3

In repository: https://github.com/opendata-mvcr/ciselniky
> at line 120 of <>:
Bad syntax (objectList expected) at ^ in:
"...b'sportovi\xc5\xa1\xc5\xa5/polo\xc5\xbeky/velodrome> a skos:Concept;\n    skos:in'^b'Scheme <https://data.mvcr.gov.cz/zdroj/\xc4\x8d\xc3\xadseln\xc3\xadky/typy-spo'..."

---
File: https://raw.githubusercontent.com/opendata-mvcr/ciselniky/master/t%C3%A9mata-ud%C3%A1lost%C3%AD.trig parsed as n3

In repository: https://github.com/opendata-mvcr/ciselniky
> at line 111 of <>:
Bad syntax (objectList expected) at ^ in:
"...b'roj/\xc4\x8d\xc3\xadseln\xc3\xadky/t\xc3\xa9mata-ud\xc3\xa1lost\xc3\xad/polo\xc5\xbeky/n\xc3\xa1bo\xc5\xbeenstv\xc3\xad>'^b' a skos:Concept;\n    skos:inScheme <https://data.mvcr.gov.cz'..."

---
File: https://raw.githubusercontent.com/opendata-mvcr/ciselniky/master/typy-turistick%C3%BDch-c%C3%ADl%C5%AF.trig parsed as n3

In repository: https://github.com/opendata-mvcr/ciselniky
> at line 21 of <>:
Bad syntax (objectList expected) at ^ in:
"...b'data.mvcr.gov.cz/zdroj/\xc4\x8d\xc3\xadseln\xc3\xadky/typy-turistick\xc3\xbdch-c\xc3\xadl\xc5'^b'\xaf>;\n    skos:prefLabel "Kulturn\xc3\xad"@cs, "Manmade"@en .\n}\n'"

---
File: https://raw.githubusercontent.com/opendata-mvcr/ciselniky/master/m%C3%ADra-specifikace-t%C3%A9matu-pr%C3%A1ce.trig parsed as n3

In repository: https://github.com/opendata-mvcr/ciselniky
> at line 36 of <>:
Bad syntax (objectList expected) at ^ in:
"...b'  skos:note "Area from which topics can be selected"@en, "Ok'^b'ruh, ze kter\xc3\xa9ho mohou b\xc3\xbdt vyb\xc3\xadr\xc3\xa1na t\xc3\xa9mata"@cs;\n    skos'..."

---
File: https://raw.githubusercontent.com/opendata-mvcr/ciselniky/master/typy-pracovn%C3%ADch-vztah%C5%AF.trig parsed as n3

In repository: https://github.com/opendata-mvcr/ciselniky
> at line 34 of <>:
Bad syntax (objectList expected) at ^ in:
"...b'>\n    a skos:Concept;\n    skos:inScheme <https://data.mvcr.g'^b'ov.cz/zdroj/\xc4\x8d\xc3\xadseln\xc3\xadky/typy-pracovn\xc3\xadch-vztah\xc5\xaf>;\n    skos'..."

---
File: https://raw.githubusercontent.com/opendata-mvcr/ciselniky/master/kategorie-%C3%BAzemn%C3%AD-ochrany.trig parsed as n3

In repository: https://github.com/opendata-mvcr/ciselniky
> at line 49 of <>:
Bad syntax (objectList expected) at ^ in:
"...b'y/kategorie-\xc3\xbazemn\xc3\xad-ochrany/polo\xc5\xbeky/p\xc5\x99\xc3\xadrodn\xc3\xad-rezervace>'^b'\n    a skos:Concept;\n    skos:inScheme <https://data.mvcr.go'..."

---
File: https://raw.githubusercontent.com/opendata-mvcr/ciselniky/master/typy-ud%C3%A1lost%C3%AD.trig parsed as n3

In repository: https://github.com/opendata-mvcr/ciselniky
> at line 62 of <>:
Bad syntax (objectList expected) at ^ in:
"...b'roj/\xc4\x8d\xc3\xadseln\xc3\xadky/typy-ud\xc3\xa1lost\xc3\xad/polo\xc5\xbeky/um\xc4\x9bleck\xc3\xa1-produkc'^b'e>\n    a skos:Concept;\n    skos:inScheme <https://data.mvcr.'..."

---
File: https://raw.githubusercontent.com/opendata-mvcr/ciselniky/master/typy-d%C5%99evin.jsonld parsed as json-ld

In repository: https://github.com/opendata-mvcr/ciselniky
> 'ascii' codec can't encode characters in position 5-6: ordinal not in range(128)

---
File: https://raw.githubusercontent.com/opendata-mvcr/ciselniky/master/typy-sportovi%C5%A1%C5%A5.jsonld parsed as json-ld

In repository: https://github.com/opendata-mvcr/ciselniky
> 'ascii' codec can't encode characters in position 5-6: ordinal not in range(128)

---
File: https://raw.githubusercontent.com/opendata-mvcr/ciselniky/master/m%C3%ADra-specifikace-t%C3%A9matu-pr%C3%A1ce.jsonld parsed as json-ld

In repository: https://github.com/opendata-mvcr/ciselniky
> 'ascii' codec can't encode characters in position 5-6: ordinal not in range(128)

---
File: https://raw.githubusercontent.com/opendata-mvcr/ciselniky/master/pohlav%C3%AD.jsonld parsed as json-ld

In repository: https://github.com/opendata-mvcr/ciselniky
> 'ascii' codec can't encode characters in position 5-6: ordinal not in range(128)

---
File: https://raw.githubusercontent.com/opendata-mvcr/ciselniky/master/typy-turistick%C3%BDch-c%C3%ADl%C5%AF.jsonld parsed as json-ld

In repository: https://github.com/opendata-mvcr/ciselniky
> 'ascii' codec can't encode characters in position 5-6: ordinal not in range(128)

---
File: https://raw.githubusercontent.com/opendata-mvcr/ciselniky/master/stupn%C4%9B-p%C5%99%C3%ADstupnosti.jsonld parsed as json-ld

In repository: https://github.com/opendata-mvcr/ciselniky
> 'ascii' codec can't encode characters in position 5-6: ordinal not in range(128)

---
File: https://raw.githubusercontent.com/opendata-mvcr/ciselniky/master/typy-pracovn%C3%ADch-vztah%C5%AF.jsonld parsed as json-ld

In repository: https://github.com/opendata-mvcr/ciselniky
> 'ascii' codec can't encode characters in position 5-6: ordinal not in range(128)

---
File: https://raw.githubusercontent.com/opendata-mvcr/ciselniky/master/t%C3%A9mata-ud%C3%A1lost%C3%AD.jsonld parsed as json-ld

In repository: https://github.com/opendata-mvcr/ciselniky
> 'ascii' codec can't encode characters in position 5-6: ordinal not in range(128)

---
File: https://raw.githubusercontent.com/opendata-mvcr/ciselniky/master/dny-v-t%C3%BDdnu.jsonld parsed as json-ld

In repository: https://github.com/opendata-mvcr/ciselniky
> 'ascii' codec can't encode characters in position 5-6: ordinal not in range(128)

---
File: https://raw.githubusercontent.com/opendata-mvcr/ciselniky/master/sporty.jsonld parsed as json-ld

In repository: https://github.com/opendata-mvcr/ciselniky
> 'ascii' codec can't encode characters in position 5-6: ordinal not in range(128)

---
File: https://raw.githubusercontent.com/opendata-mvcr/ciselniky/master/typy-ud%C3%A1lost%C3%AD.jsonld parsed as json-ld

In repository: https://github.com/opendata-mvcr/ciselniky
> 'ascii' codec can't encode characters in position 5-6: ordinal not in range(128)

---
File: https://raw.githubusercontent.com/opendata-mvcr/ciselniky/master/kategorie-%C3%BAzemn%C3%AD-ochrany.jsonld parsed as json-ld

In repository: https://github.com/opendata-mvcr/ciselniky
> 'ascii' codec can't encode characters in position 5-6: ordinal not in range(128)

---
File: https://raw.githubusercontent.com/opendata-mvcr/ciselniky/master/jin%C3%A1-%C4%8Dasov%C3%A1-specifikace.jsonld parsed as json-ld

In repository: https://github.com/opendata-mvcr/ciselniky
> 'ascii' codec can't encode characters in position 5-6: ordinal not in range(128)

---
File: https://raw.githubusercontent.com/opendata-mvcr/ciselniky/master/typy-t%C5%99%C3%ADd%C4%9Bn%C3%BDch-odpad%C5%AF.jsonld parsed as json-ld

In repository: https://github.com/opendata-mvcr/ciselniky
> 'ascii' codec can't encode characters in position 5-6: ordinal not in range(128)

---
File: https://raw.githubusercontent.com/opencitydata/listas-codigos-skos/master/transporte%2Ftrafico%2Ftipo-incidencia.ttl parsed as ttl

In repository: https://github.com/opencitydata/listas-codigos-skos
> at line 31 of <>:
Bad syntax (objectList expected) at ^ in:
"...b'ddata.es/datosabiertos/kos/transporte/trafico/tipo-incidenci'^b'a> .\n\n<http://vocab.linkeddata.es/datosabiertos/kos/transpor'..."

---
File: https://raw.githubusercontent.com/opencitydata/listas-codigos-skos/master/demografia%2Fpadron-municipal%2Ftipo-local-residencia%2Ftipo-local-residencia.ttl parsed as ttl

In repository: https://github.com/opencitydata/listas-codigos-skos
> at line 11 of <>:
Bad syntax (Prefix "dc:" not bound) at ^ in:
"...b'/demografia/padron-municipal/tipo-local-residencia/2> ;\n    '^b'dc:creator "Paola Espinoza Arias (Universidad Polit\xc3\xa9cnica d'..."

---
File: https://raw.githubusercontent.com/opencitydata/listas-codigos-skos/master/sector-publico%2Fterritorio%2Ftipo-estado.ttl parsed as ttl

In repository: https://github.com/opencitydata/listas-codigos-skos
> at line 13 of <>:
Bad syntax (Prefix "dc:" not bound) at ^ in:
"...b'os/sector-publico/territorio/tipo-estado/provisional> ;\n    '^b'dc:creator "Oscar Corcho (Universidad Polit\xc3\xa9cnica de Madrid'..."

---
File: https://raw.githubusercontent.com/obophenotype/human-phenotype-ontology/master/patterns%2Fpattern.owl parsed as xml

In repository: https://github.com/obophenotype/human-phenotype-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/patterns/pattern.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/obophenotype/human-phenotype-ontology/master/patterns%2Fdefinitions.owl parsed as xml

In repository: https://github.com/obophenotype/human-phenotype-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/patterns/definitions.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/obophenotype/human-phenotype-ontology/master/src%2Fpatterns%2Fpattern.owl parsed as xml

In repository: https://github.com/obophenotype/human-phenotype-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/patterns/pattern.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/obophenotype/human-phenotype-ontology/master/src%2Fpatterns%2Fdefinitions.owl parsed as xml

In repository: https://github.com/obophenotype/human-phenotype-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/patterns/definitions.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/obophenotype/human-phenotype-ontology/master/src%2Fontology%2Fhp_ncit_eq.owl parsed as xml

In repository: https://github.com/obophenotype/human-phenotype-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/ontology/hp_ncit_eq.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/obophenotype/human-phenotype-ontology/master/src%2Fontology%2Fhp-edit.owl parsed as xml

In repository: https://github.com/obophenotype/human-phenotype-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/ontology/hp-edit.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/obophenotype/human-phenotype-ontology/master/src%2Fontology%2Fhp-qc.owl parsed as xml

In repository: https://github.com/obophenotype/human-phenotype-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/ontology/hp-qc.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/obophenotype/human-phenotype-ontology/master/src%2Fontology%2Fhp-idranges.owl parsed as xml

In repository: https://github.com/obophenotype/human-phenotype-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/ontology/hp-idranges.owl:2:0: syntax error

---
File: https://raw.githubusercontent.com/obophenotype/human-phenotype-ontology/master/src%2Fontology%2Farchive%2Fhp_go-redundant.owl parsed as xml

In repository: https://github.com/obophenotype/human-phenotype-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/ontology/archive/hp_go-redundant.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/geneontology/go-ontology/master/src%2Fontology%2Fgo-idranges.owl parsed as xml

In repository: https://github.com/geneontology/go-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/ontology/go-idranges.owl:1:0: syntax error

---
File: https://raw.githubusercontent.com/geneontology/go-ontology/master/src%2Fontology%2Fimports%2Fgo-taxon-groupings-edit.owl parsed as xml

In repository: https://github.com/geneontology/go-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/ontology/imports/go-taxon-groupings-edit.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/geneontology/go-ontology/master/src%2Fontology%2Fextensions%2Flegorel.owl parsed as xml

In repository: https://github.com/geneontology/go-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/ontology/extensions/legorel.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/geneontology/go-ontology/master/src%2Fontology%2Fextensions%2Fgo-gci.owl parsed as xml

In repository: https://github.com/geneontology/go-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/ontology/extensions/go-gci.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/geneontology/go-ontology/master/src%2Fontology%2Fextensions%2Fgorel-edit.owl parsed as xml

In repository: https://github.com/geneontology/go-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/ontology/extensions/gorel-edit.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/geneontology/go-ontology/master/src%2Fontology%2Fextensions%2Fgo-bridge.owl parsed as xml

In repository: https://github.com/geneontology/go-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/ontology/extensions/go-bridge.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/geneontology/go-ontology/master/src%2Fontology%2Fextensions%2Fgo-modules-annotations.owl parsed as xml

In repository: https://github.com/geneontology/go-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/ontology/extensions/go-modules-annotations.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/geneontology/go-ontology/master/src%2Fontology%2Fextensions%2Fgo-upper.obo

In repository: https://github.com/geneontology/go-ontology
> local variable 'header' referenced before assignment

---
File: https://raw.githubusercontent.com/biolink/ontobio/master/tests%2Fresources%2Fskos_example.rdf parsed as xml

In repository: https://github.com/biolink/ontobio
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/tests/resources/skos_example.rdf:1:0: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/biolink/ontobio/master/tests%2Fresources%2Fgocam-example.rdf parsed as xml

In repository: https://github.com/biolink/ontobio
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/tests/resources/gocam-example.rdf:1:0: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/monarch-initiative/mondo/master/src%2Fpatterns%2Fdosdp-pattern.owl parsed as xml

In repository: https://github.com/monarch-initiative/mondo
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/patterns/dosdp-pattern.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/monarch-initiative/mondo/master/src%2Fpatterns%2Fcomponents%2Fpattern-ontology-remove-axioms.owl parsed as xml

In repository: https://github.com/monarch-initiative/mondo
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/patterns/components/pattern-ontology-remove-axioms.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/monarch-initiative/mondo/master/src%2Fontology%2Fmondo-idranges.owl parsed as xml

In repository: https://github.com/monarch-initiative/mondo
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/ontology/mondo-idranges.owl:1:0: syntax error

---
File: https://raw.githubusercontent.com/monarch-initiative/mondo/master/src%2Fontology%2Fmodules%2Fequivs.owl parsed as xml

In repository: https://github.com/monarch-initiative/mondo
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/ontology/modules/equivs.owl:1:0: syntax error

---
File: https://raw.githubusercontent.com/monarch-initiative/mondo/master/src%2Fontology%2Fmodules%2Fdisease_by_location.owl parsed as xml

In repository: https://github.com/monarch-initiative/mondo
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/ontology/modules/disease_by_location.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/monarch-initiative/mondo/master/scratch%2Fvicc.obo

In repository: https://github.com/monarch-initiative/mondo
> local variable 'header' referenced before assignment

---
File: https://raw.githubusercontent.com/monarch-initiative/mondo/master/src%2Fsparql%2Fbad.obo

In repository: https://github.com/monarch-initiative/mondo
> local variable 'header' referenced before assignment

---
File: https://raw.githubusercontent.com/monarch-initiative/mondo/master/src%2Fontology%2Fomim-exclusion-set.obo

In repository: https://github.com/monarch-initiative/mondo
> local variable 'header' referenced before assignment

---
File: https://raw.githubusercontent.com/monarch-initiative/mondo/master/src%2Fontology%2Freports%2Freasoner-diff.obo

In repository: https://github.com/monarch-initiative/mondo
> local variable 'header' referenced before assignment

---
File: https://raw.githubusercontent.com/obophenotype/uberon/master/ext-mappings%2Fmappings-ZFA-MA-201009.rdf parsed as xml

In repository: https://github.com/obophenotype/uberon
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/ext-mappings/mappings-ZFA-MA-201009.rdf:72:24: rdf:ID value is not a valid NCName: 1

---
File: https://raw.githubusercontent.com/obophenotype/uberon/master/ext-mappings%2Fmappings-FMA-FBbt.rdf parsed as xml

In repository: https://github.com/obophenotype/uberon
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/ext-mappings/mappings-FMA-FBbt.rdf:72:24: rdf:ID value is not a valid NCName: 1

---
File: https://raw.githubusercontent.com/obophenotype/uberon/master/ext-mappings%2Fmappings-FMA-FBbt-201009.rdf parsed as xml

In repository: https://github.com/obophenotype/uberon
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/ext-mappings/mappings-FMA-FBbt-201009.rdf:72:24: rdf:ID value is not a valid NCName: 1

---
File: https://raw.githubusercontent.com/obophenotype/uberon/master/ext-mappings%2Fmappings-ZFA-MA.rdf parsed as xml

In repository: https://github.com/obophenotype/uberon
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/ext-mappings/mappings-ZFA-MA.rdf:72:24: rdf:ID value is not a valid NCName: 1

---
File: https://raw.githubusercontent.com/obophenotype/uberon/master/ext-mappings%2Fmappings-FMA-MA-201009.rdf parsed as xml

In repository: https://github.com/obophenotype/uberon
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/ext-mappings/mappings-FMA-MA-201009.rdf:72:24: rdf:ID value is not a valid NCName: 1

---
File: https://raw.githubusercontent.com/obophenotype/uberon/master/ext-mappings%2Fmappings-FMA-MA.rdf parsed as xml

In repository: https://github.com/obophenotype/uberon
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/ext-mappings/mappings-FMA-MA.rdf:72:24: rdf:ID value is not a valid NCName: 1

---
File: https://raw.githubusercontent.com/obophenotype/uberon/master/ext-mappings%2Fmappings-GAZ-FMA.rdf parsed as xml

In repository: https://github.com/obophenotype/uberon
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/ext-mappings/mappings-GAZ-FMA.rdf:72:24: rdf:ID value is not a valid NCName: 1

---
File: https://raw.githubusercontent.com/obophenotype/uberon/master/homology-relations.owl parsed as xml

In repository: https://github.com/obophenotype/uberon
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/homology-relations.owl:1:0: syntax error

---
File: https://raw.githubusercontent.com/obophenotype/uberon/master/reflexivity_axioms.owl parsed as xml

In repository: https://github.com/obophenotype/uberon
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/reflexivity_axioms.owl:1:8: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/obophenotype/uberon/master/uberon-idranges.owl parsed as xml

In repository: https://github.com/obophenotype/uberon
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/uberon-idranges.owl:1:0: syntax error

---
File: https://raw.githubusercontent.com/obophenotype/uberon/master/reasoner_axioms.owl parsed as xml

In repository: https://github.com/obophenotype/uberon
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/reasoner_axioms.owl:1:8: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/obophenotype/uberon/master/reference%2Fuberonref-idranges.owl parsed as xml

In repository: https://github.com/obophenotype/uberon
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/reference/uberonref-idranges.owl:1:0: syntax error

---
File: https://raw.githubusercontent.com/obophenotype/uberon/master/subsets%2Ftaxon-constraints.owl parsed as xml

In repository: https://github.com/obophenotype/uberon
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/subsets/taxon-constraints.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/obophenotype/uberon/master/issues%2Fcontributor.owl parsed as xml

In repository: https://github.com/obophenotype/uberon
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/issues/contributor.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/obophenotype/uberon/master/contexts%2Fcontext-mouse.owl parsed as xml

In repository: https://github.com/obophenotype/uberon
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/contexts/context-mouse.owl:1:8: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/obophenotype/uberon/master/contexts%2Fcontext-human.owl parsed as xml

In repository: https://github.com/obophenotype/uberon
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/contexts/context-human.owl:1:8: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/obophenotype/uberon/master/contexts%2Fcontext-gnathostome.owl parsed as xml

In repository: https://github.com/obophenotype/uberon
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/contexts/context-gnathostome.owl:1:8: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/obophenotype/uberon/master/contexts%2Fcontext-zebrafish.owl parsed as xml

In repository: https://github.com/obophenotype/uberon
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/contexts/context-zebrafish.owl:1:8: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/obophenotype/uberon/master/contexts%2Fcontext-drosophila.owl parsed as xml

In repository: https://github.com/obophenotype/uberon
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/contexts/context-drosophila.owl:1:8: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/obophenotype/uberon/master/contexts%2Fcontext-nematode.owl parsed as xml

In repository: https://github.com/obophenotype/uberon
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/contexts/context-nematode.owl:1:8: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/obophenotype/uberon/master/contexts%2Fcontext-xenopus.owl parsed as xml

In repository: https://github.com/obophenotype/uberon
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/contexts/context-xenopus.owl:1:8: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/obophenotype/uberon/master/modules%2Fluminal_space_of-gci.owl parsed as xml

In repository: https://github.com/obophenotype/uberon
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/modules/luminal_space_of-gci.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/obophenotype/uberon/master/pending-disjoints-core.obo

In repository: https://github.com/obophenotype/uberon
> Tag-value pair parsing failed for:
[Term]


---
File: https://raw.githubusercontent.com/obophenotype/uberon/master/deleted_axioms.obo

In repository: https://github.com/obophenotype/uberon
> local variable 'header' referenced before assignment

---
File: https://raw.githubusercontent.com/obophenotype/uberon/master/pending-disjoints.obo

In repository: https://github.com/obophenotype/uberon
> Tag-value pair parsing failed for:
[Term]


---
File: https://raw.githubusercontent.com/obophenotype/uberon/master/uberon-simple-rel.obo

In repository: https://github.com/obophenotype/uberon
> local variable 'header' referenced before assignment

---
File: https://raw.githubusercontent.com/obophenotype/uberon/master/experimental%2Fuberon_xp.obo

In repository: https://github.com/obophenotype/uberon
> Tag-value pair parsing failed for:
	Redefined static procedure anatomical_continuant5/3


---
File: https://raw.githubusercontent.com/obophenotype/uberon/master/experimental%2Fdictyostelium_anatomy_xp.obo

In repository: https://github.com/obophenotype/uberon
> Tag-value pair parsing failed for:
[Term]


---
File: https://raw.githubusercontent.com/obophenotype/uberon/master/experimental%2Ffma_xp_uberon.obo

In repository: https://github.com/obophenotype/uberon
> local variable 'header' referenced before assignment

---
File: https://raw.githubusercontent.com/obophenotype/uberon/master/experimental%2Fzebrafish_anatomy_xp.obo

In repository: https://github.com/obophenotype/uberon
> Tag-value pair parsing failed for:
[Term]


---
File: https://raw.githubusercontent.com/obophenotype/uberon/master/experimental%2Fmouse_anatomy_xp_uberon.obo

In repository: https://github.com/obophenotype/uberon
> local variable 'header' referenced before assignment

---
File: https://raw.githubusercontent.com/obophenotype/uberon/master/experimental%2Fcell_xp.obo

In repository: https://github.com/obophenotype/uberon
> Tag-value pair parsing failed for:
[Term]


---
File: https://raw.githubusercontent.com/obophenotype/uberon/master/experimental%2Fzebrafish_anatomy_xp_uberon.obo

In repository: https://github.com/obophenotype/uberon
> Tag-value pair parsing failed for:
[Term]


---
File: https://raw.githubusercontent.com/obophenotype/uberon/master/experimental%2Fnif_anatomy_xp.obo

In repository: https://github.com/obophenotype/uberon
> Tag-value pair parsing failed for:
[Term]


---
File: https://raw.githubusercontent.com/obophenotype/uberon/master/experimental%2Ftick_anatomy_xp.obo

In repository: https://github.com/obophenotype/uberon
> Tag-value pair parsing failed for:
[Term]


---
File: https://raw.githubusercontent.com/obophenotype/uberon/master/experimental%2Fpo_anatomy_xp.obo

In repository: https://github.com/obophenotype/uberon
> local variable 'header' referenced before assignment

---
File: https://raw.githubusercontent.com/obophenotype/uberon/master/experimental%2Fworm_anatomy_xp.obo

In repository: https://github.com/obophenotype/uberon
> Tag-value pair parsing failed for:
[Term]


---
File: https://raw.githubusercontent.com/obophenotype/uberon/master/experimental%2Fmouse_anatomy_xp.obo

In repository: https://github.com/obophenotype/uberon
> local variable 'header' referenced before assignment

---
File: https://raw.githubusercontent.com/obophenotype/uberon/master/experimental%2Ffma_xp_cell.obo

In repository: https://github.com/obophenotype/uberon
> local variable 'header' referenced before assignment

---
File: https://raw.githubusercontent.com/obophenotype/uberon/master/experimental%2Fhog_xp_uberon.obo

In repository: https://github.com/obophenotype/uberon
> Tag-value pair parsing failed for:
[Term]


---
File: https://raw.githubusercontent.com/obophenotype/uberon/master/experimental%2Fhog_xp.obo

In repository: https://github.com/obophenotype/uberon
> local variable 'header' referenced before assignment

---
File: https://raw.githubusercontent.com/obophenotype/uberon/master/experimental%2Fnif_subcellular_xp.obo

In repository: https://github.com/obophenotype/uberon
> Tag-value pair parsing failed for:
[Term]


---
File: https://raw.githubusercontent.com/obophenotype/uberon/master/issues%2Fcontributor.obo

In repository: https://github.com/obophenotype/uberon
> local variable 'header' referenced before assignment

---
File: https://raw.githubusercontent.com/obophenotype/uberon/master/source-ontologies%2FNeuroNames.obo

In repository: https://github.com/obophenotype/uberon
> 'utf-8' codec can't decode byte 0xe9 in position 1248: invalid continuation byte

---
File: https://raw.githubusercontent.com/obophenotype/uberon/master/source-ontologies%2Fcommon-mammalian-nomencl-structural.obo

In repository: https://github.com/obophenotype/uberon
> 'utf-8' codec can't decode byte 0xc9 in position 14503: invalid continuation byte

---
File: https://raw.githubusercontent.com/obophenotype/uberon/master/source-ontologies%2Femapaa.obo

In repository: https://github.com/obophenotype/uberon
> 'utf-8' codec can't decode byte 0xbc in position 208773: invalid start byte

---
File: https://raw.githubusercontent.com/obophenotype/uberon/master/resources%2Finsect_glossary.obo

In repository: https://github.com/obophenotype/uberon
> local variable 'header' referenced before assignment

---
File: https://raw.githubusercontent.com/obophenotype/uberon/master/resources%2Fbams.obo

In repository: https://github.com/obophenotype/uberon
> too many values to unpack (expected 2)

---
File: https://raw.githubusercontent.com/obophenotype/uberon/master/attic%2Fuberon_disjoint_from_strict.obo

In repository: https://github.com/obophenotype/uberon
> local variable 'header' referenced before assignment

---
File: https://raw.githubusercontent.com/obophenotype/cell-ontology/master/imports%2Fnif_import.owl parsed as xml

In repository: https://github.com/obophenotype/cell-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/imports/nif_import.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/obophenotype/cell-ontology/master/patterns%2Fpattern.owl parsed as xml

In repository: https://github.com/obophenotype/cell-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/patterns/pattern.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/obophenotype/cell-ontology/master/patterns%2Fdefinitions.owl parsed as xml

In repository: https://github.com/obophenotype/cell-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/patterns/definitions.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/obophenotype/cell-ontology/master/src%2Fpatterns%2Fpattern.owl parsed as xml

In repository: https://github.com/obophenotype/cell-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/patterns/pattern.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/obophenotype/cell-ontology/master/src%2Fpatterns%2Fdefinitions.owl parsed as xml

In repository: https://github.com/obophenotype/cell-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/patterns/definitions.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/obophenotype/cell-ontology/master/src%2Fontology%2Fcl-edit.owl parsed as xml

In repository: https://github.com/obophenotype/cell-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/ontology/cl-edit.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/obophenotype/cell-ontology/master/src%2Fontology%2Fcl-removedaxioms.owl parsed as xml

In repository: https://github.com/obophenotype/cell-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/ontology/cl-removedaxioms.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/obophenotype/cell-ontology/master/src%2Fontology%2Fcl-refactored.owl parsed as xml

In repository: https://github.com/obophenotype/cell-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/ontology/cl-refactored.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/obophenotype/cell-ontology/master/src%2Fontology%2Fcl-idranges.owl parsed as xml

In repository: https://github.com/obophenotype/cell-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/ontology/cl-idranges.owl:1:1: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/obophenotype/cell-ontology/master/src%2Fontology%2Fimports%2Fnif_import.owl parsed as xml

In repository: https://github.com/obophenotype/cell-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/ontology/imports/nif_import.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/obophenotype/cell-ontology/master/src%2Fontology%2Fimports%2Fro_seed.owl parsed as xml

In repository: https://github.com/obophenotype/cell-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/ontology/imports/ro_seed.owl:1:0: syntax error

---
File: https://raw.githubusercontent.com/geneontology/obographs/master/src%2Ftest%2Fresources%2Fabox.owl parsed as xml

In repository: https://github.com/geneontology/obographs
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/test/resources/abox.owl:1:0: syntax error

---
File: https://raw.githubusercontent.com/geneontology/obographs/master/src%2Ftest%2Fresources%2FequivNodeSetTest.obo

In repository: https://github.com/geneontology/obographs
> local variable 'header' referenced before assignment

---
File: https://raw.githubusercontent.com/obophenotype/upheno/master/upheno_root_alignments.owl parsed as xml

In repository: https://github.com/obophenotype/upheno
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/upheno_root_alignments.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/obophenotype/upheno/master/imports%2Fimports_requests.owl parsed as xml

In repository: https://github.com/obophenotype/upheno
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/imports/imports_requests.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/obophenotype/upheno/master/archive%2Fwbphenotype%2Fwbphenotype-equivalence-axioms-edit.owl parsed as xml

In repository: https://github.com/obophenotype/upheno
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/archive/wbphenotype/wbphenotype-equivalence-axioms-edit.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/obophenotype/upheno/master/src%2Fpatterns%2Freview_pattern.owl parsed as xml

In repository: https://github.com/obophenotype/upheno
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/patterns/review_pattern.owl:1:0: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/obophenotype/upheno/master/src%2Fontology%2Fcomponents%2Fpattern-ontology-remove-axioms.owl parsed as xml

In repository: https://github.com/obophenotype/upheno
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/ontology/components/pattern-ontology-remove-axioms.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/obophenotype/upheno/master/hp-mp%2Fmp_hp-align-equiv.obo

In repository: https://github.com/obophenotype/upheno
> local variable 'header' referenced before assignment

---
File: https://raw.githubusercontent.com/obophenotype/upheno/master/hp-mp%2Fmp_hp-align-equiv-labeled.obo

In repository: https://github.com/obophenotype/upheno
> local variable 'header' referenced before assignment

---
File: https://raw.githubusercontent.com/obophenotype/upheno/master/hp-mp%2Fmp_hp-disjoint_from.obo

In repository: https://github.com/obophenotype/upheno
> Tag-value pair parsing failed for:
[Term]


---
File: https://raw.githubusercontent.com/callahantiff/OMOP2OBO/master/tests%2Fdata%2Fontologies%2Fempty_hp_without_imports.owl parsed as xml

In repository: https://github.com/callahantiff/OMOP2OBO
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/tests/data/ontologies/empty_hp_without_imports.owl:1:0: no element found

---
File: https://raw.githubusercontent.com/monarch-initiative/GENO-ontology/develop/src%2Fpatterns%2Fpattern.owl parsed as xml

In repository: https://github.com/monarch-initiative/GENO-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/patterns/pattern.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/monarch-initiative/GENO-ontology/develop/src%2Fpatterns%2Fdefinitions.owl parsed as xml

In repository: https://github.com/monarch-initiative/GENO-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/patterns/definitions.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/monarch-initiative/GENO-ontology/develop/src%2Fontology%2Fgeno-idranges.owl parsed as xml

In repository: https://github.com/monarch-initiative/GENO-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/ontology/geno-idranges.owl:1:1: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/monarch-initiative/GENO-ontology/develop/src%2Fontology%2Fgeno-edit.owl parsed as xml

In repository: https://github.com/monarch-initiative/GENO-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/ontology/geno-edit.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/FlyBase/drosophila-anatomy-developmental-ontology/master/patterns%2Fpattern.owl parsed as xml

In repository: https://github.com/FlyBase/drosophila-anatomy-developmental-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/patterns/pattern.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/FlyBase/drosophila-anatomy-developmental-ontology/master/patterns%2Fdefinitions.owl parsed as xml

In repository: https://github.com/FlyBase/drosophila-anatomy-developmental-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/patterns/definitions.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/FlyBase/drosophila-anatomy-developmental-ontology/master/src%2Fpatterns%2Fpattern.owl parsed as xml

In repository: https://github.com/FlyBase/drosophila-anatomy-developmental-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/patterns/pattern.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/FlyBase/drosophila-anatomy-developmental-ontology/master/src%2Fpatterns%2Fdefinitions.owl parsed as xml

In repository: https://github.com/FlyBase/drosophila-anatomy-developmental-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/patterns/definitions.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/FlyBase/drosophila-anatomy-developmental-ontology/master/src%2Fontology%2Ffbbt-idranges.owl parsed as xml

In repository: https://github.com/FlyBase/drosophila-anatomy-developmental-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/ontology/fbbt-idranges.owl:1:1: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/FlyBase/drosophila-anatomy-developmental-ontology/master/src%2Fontology%2Ffbbt-edit-release.owl parsed as xml

In repository: https://github.com/FlyBase/drosophila-anatomy-developmental-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/ontology/fbbt-edit-release.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/FlyBase/drosophila-anatomy-developmental-ontology/master/src%2Fontology%2Fcomponents%2Ffbbt_ext.owl parsed as xml

In repository: https://github.com/FlyBase/drosophila-anatomy-developmental-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/ontology/components/fbbt_ext.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/FlyBase/drosophila-anatomy-developmental-ontology/master/src%2Fontology%2Fcomponents%2Fqc_assertions.owl parsed as xml

In repository: https://github.com/FlyBase/drosophila-anatomy-developmental-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/ontology/components/qc_assertions.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/FlyBase/drosophila-anatomy-developmental-ontology/master/src%2Fontology%2Fcomponents%2Fqc_assertions_unmerge.owl parsed as xml

In repository: https://github.com/FlyBase/drosophila-anatomy-developmental-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/ontology/components/qc_assertions_unmerge.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/FlyBase/drosophila-anatomy-developmental-ontology/master/fbbt%2Fsrc%2Ftags%2F2014-05-26%2Fontologies%2Ffbbt-ext.owl parsed as xml

In repository: https://github.com/FlyBase/drosophila-anatomy-developmental-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/fbbt/src/tags/2014-05-26/ontologies/fbbt-ext.owl:71:8: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#ObjectSomeValuesFrom

---
File: https://raw.githubusercontent.com/FlyBase/drosophila-anatomy-developmental-ontology/master/fbbt%2Fsrc%2Ftags%2F2013-07-26%2Fontologies%2Ffbbt-ext.owl parsed as xml

In repository: https://github.com/FlyBase/drosophila-anatomy-developmental-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/fbbt/src/tags/2013-07-26/ontologies/fbbt-ext.owl:71:8: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#ObjectSomeValuesFrom

---
File: https://raw.githubusercontent.com/FlyBase/drosophila-anatomy-developmental-ontology/master/fbbt%2Fsrc%2Ftags%2F2015-07-16%2Fontologies%2Ffbbt-ext.owl parsed as xml

In repository: https://github.com/FlyBase/drosophila-anatomy-developmental-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/fbbt/src/tags/2015-07-16/ontologies/fbbt-ext.owl:71:8: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#ObjectSomeValuesFrom

---
File: https://raw.githubusercontent.com/FlyBase/drosophila-anatomy-developmental-ontology/master/fbbt%2Fsrc%2Ftags%2F2015-05-12%2Fontologies%2Ffbbt-ext.owl parsed as xml

In repository: https://github.com/FlyBase/drosophila-anatomy-developmental-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/fbbt/src/tags/2015-05-12/ontologies/fbbt-ext.owl:71:8: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#ObjectSomeValuesFrom

---
File: https://raw.githubusercontent.com/FlyBase/drosophila-anatomy-developmental-ontology/master/fbbt%2Fsrc%2Ftags%2F2016-06-02%2Ftrunk%2Fontologies%2Ffbbt-ext.owl parsed as xml

In repository: https://github.com/FlyBase/drosophila-anatomy-developmental-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/fbbt/src/tags/2016-06-02/trunk/ontologies/fbbt-ext.owl:71:8: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#ObjectSomeValuesFrom

---
File: https://raw.githubusercontent.com/FlyBase/drosophila-anatomy-developmental-ontology/master/fbbt%2Fsrc%2Ftags%2F2016-06-02%2Fontologies%2Ffbbt-ext.owl parsed as xml

In repository: https://github.com/FlyBase/drosophila-anatomy-developmental-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/fbbt/src/tags/2016-06-02/ontologies/fbbt-ext.owl:71:8: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#ObjectSomeValuesFrom

---
File: https://raw.githubusercontent.com/FlyBase/drosophila-anatomy-developmental-ontology/master/fbbt%2Fsrc%2Ftags%2F2013-07-10%2Fontologies%2Ffbbt-ext.owl parsed as xml

In repository: https://github.com/FlyBase/drosophila-anatomy-developmental-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/fbbt/src/tags/2013-07-10/ontologies/fbbt-ext.owl:71:8: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#ObjectSomeValuesFrom

---
File: https://raw.githubusercontent.com/FlyBase/drosophila-anatomy-developmental-ontology/master/fbbt%2Fsrc%2Ftags%2F2015-09-16%2Fontologies%2Ffbbt-ext.owl parsed as xml

In repository: https://github.com/FlyBase/drosophila-anatomy-developmental-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/fbbt/src/tags/2015-09-16/ontologies/fbbt-ext.owl:71:8: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#ObjectSomeValuesFrom

---
File: https://raw.githubusercontent.com/FlyBase/drosophila-anatomy-developmental-ontology/master/fbbt%2Fsrc%2Ftags%2F2016-08-17%2Fontologies%2Ffbbt-ext.owl parsed as xml

In repository: https://github.com/FlyBase/drosophila-anatomy-developmental-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/fbbt/src/tags/2016-08-17/ontologies/fbbt-ext.owl:71:8: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#ObjectSomeValuesFrom

---
File: https://raw.githubusercontent.com/FlyBase/drosophila-anatomy-developmental-ontology/master/fbbt%2Fsrc%2Ftags%2F2018-02-21%2Fontologies%2Ffbbt-ext.owl parsed as xml

In repository: https://github.com/FlyBase/drosophila-anatomy-developmental-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/fbbt/src/tags/2018-02-21/ontologies/fbbt-ext.owl:71:8: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#ObjectSomeValuesFrom

---
File: https://raw.githubusercontent.com/FlyBase/drosophila-anatomy-developmental-ontology/master/fbbt%2Fsrc%2Ftags%2F2017-05-03%2Fontologies%2Ffbbt-ext.owl parsed as xml

In repository: https://github.com/FlyBase/drosophila-anatomy-developmental-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/fbbt/src/tags/2017-05-03/ontologies/fbbt-ext.owl:71:8: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#ObjectSomeValuesFrom

---
File: https://raw.githubusercontent.com/FlyBase/drosophila-anatomy-developmental-ontology/master/fbbt%2Fsrc%2Ftags%2F2017-09-06%2Fontologies%2Ffbbt-ext.owl parsed as xml

In repository: https://github.com/FlyBase/drosophila-anatomy-developmental-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/fbbt/src/tags/2017-09-06/ontologies/fbbt-ext.owl:71:8: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#ObjectSomeValuesFrom

---
File: https://raw.githubusercontent.com/FlyBase/drosophila-anatomy-developmental-ontology/master/fbbt%2Fsrc%2Ftags%2F2014-01-29%2Fontologies%2Ffbbt-ext.owl parsed as xml

In repository: https://github.com/FlyBase/drosophila-anatomy-developmental-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/fbbt/src/tags/2014-01-29/ontologies/fbbt-ext.owl:71:8: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#ObjectSomeValuesFrom

---
File: https://raw.githubusercontent.com/FlyBase/drosophila-anatomy-developmental-ontology/master/fbbt%2Fsrc%2Ftags%2F2017-02-15%2Fontologies%2Ffbbt-ext.owl parsed as xml

In repository: https://github.com/FlyBase/drosophila-anatomy-developmental-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/fbbt/src/tags/2017-02-15/ontologies/fbbt-ext.owl:71:8: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#ObjectSomeValuesFrom

---
File: https://raw.githubusercontent.com/FlyBase/drosophila-anatomy-developmental-ontology/master/fbbt%2Fsrc%2Ftags%2F2016-12-08%2Fontologies%2Ffbbt-ext.owl parsed as xml

In repository: https://github.com/FlyBase/drosophila-anatomy-developmental-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/fbbt/src/tags/2016-12-08/ontologies/fbbt-ext.owl:71:8: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#ObjectSomeValuesFrom

---
File: https://raw.githubusercontent.com/FlyBase/drosophila-anatomy-developmental-ontology/master/fbbt%2Fsrc%2Ftags%2F2014-11-07%2Fontologies%2Ffbbt-ext.owl parsed as xml

In repository: https://github.com/FlyBase/drosophila-anatomy-developmental-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/fbbt/src/tags/2014-11-07/ontologies/fbbt-ext.owl:71:8: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#ObjectSomeValuesFrom

---
File: https://raw.githubusercontent.com/FlyBase/drosophila-anatomy-developmental-ontology/master/fbbt%2Fsrc%2Ftags%2F2015-03-11%2Fontologies%2Ffbbt-ext.owl parsed as xml

In repository: https://github.com/FlyBase/drosophila-anatomy-developmental-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/fbbt/src/tags/2015-03-11/ontologies/fbbt-ext.owl:71:8: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#ObjectSomeValuesFrom

---
File: https://raw.githubusercontent.com/FlyBase/drosophila-anatomy-developmental-ontology/master/fbbt%2Fsrc%2Ftags%2F2016-04-05%2Fontologies%2Ffbbt-ext.owl parsed as xml

In repository: https://github.com/FlyBase/drosophila-anatomy-developmental-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/fbbt/src/tags/2016-04-05/ontologies/fbbt-ext.owl:71:8: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#ObjectSomeValuesFrom

---
File: https://raw.githubusercontent.com/FlyBase/drosophila-anatomy-developmental-ontology/master/fbbt%2Fsrc%2Ftags%2F2016-01-21%2Fontologies%2Ffbbt-ext.owl parsed as xml

In repository: https://github.com/FlyBase/drosophila-anatomy-developmental-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/fbbt/src/tags/2016-01-21/ontologies/fbbt-ext.owl:71:8: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#ObjectSomeValuesFrom

---
File: https://raw.githubusercontent.com/FlyBase/drosophila-anatomy-developmental-ontology/master/fbbt%2Fsrc%2Fontology%2Ffbbt-ext.owl parsed as xml

In repository: https://github.com/FlyBase/drosophila-anatomy-developmental-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/fbbt/src/ontology/fbbt-ext.owl:110:75: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#Class

---
File: https://raw.githubusercontent.com/FlyBase/drosophila-anatomy-developmental-ontology/master/fbbt%2Fsrc%2Fontology%2Ffbbt-idranges.owl parsed as xml

In repository: https://github.com/FlyBase/drosophila-anatomy-developmental-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/fbbt/src/ontology/fbbt-idranges.owl:1:0: syntax error

---
File: https://raw.githubusercontent.com/FlyBase/drosophila-anatomy-developmental-ontology/master/fbbt%2Fsrc%2Fontology%2Fimports%2Fflybase_imports.owl parsed as xml

In repository: https://github.com/FlyBase/drosophila-anatomy-developmental-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/fbbt/src/ontology/imports/flybase_imports.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/fastobo/fastobo/master/tests%2Fdata%2Froundtrip%2Fmsterm.obo

In repository: https://github.com/fastobo/fastobo
> local variable 'header' referenced before assignment

---
File: https://raw.githubusercontent.com/FlyBase/flybase-controlled-vocabulary/master/src%2Fpatterns%2Fpattern.owl parsed as xml

In repository: https://github.com/FlyBase/flybase-controlled-vocabulary
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/patterns/pattern.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/FlyBase/flybase-controlled-vocabulary/master/src%2Fpatterns%2Fdefinitions.owl parsed as xml

In repository: https://github.com/FlyBase/flybase-controlled-vocabulary
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/patterns/definitions.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/FlyBase/flybase-controlled-vocabulary/master/src%2Fontology%2Ffbcv-idranges.owl parsed as xml

In repository: https://github.com/FlyBase/flybase-controlled-vocabulary
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/ontology/fbcv-idranges.owl:1:1: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/FlyBase/flybase-controlled-vocabulary/master/src%2Fontology%2Fcomponents%2Fqc_assertions.owl parsed as xml

In repository: https://github.com/FlyBase/flybase-controlled-vocabulary
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/ontology/components/qc_assertions.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/pombase/fypo/master/src%2Fpatterns%2Fpattern.owl parsed as xml

In repository: https://github.com/pombase/fypo
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/patterns/pattern.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/pombase/fypo/master/src%2Fpatterns%2Fdefinitions.owl parsed as xml

In repository: https://github.com/pombase/fypo
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/patterns/definitions.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/pombase/fypo/master/src%2Fontology%2Ffypo-idranges.owl parsed as xml

In repository: https://github.com/pombase/fypo
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/ontology/fypo-idranges.owl:1:1: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/pombase/fypo/master/src%2Fontology%2Fcomponents%2Flost-inferred-subsumptions-pre-odk.owl parsed as xml

In repository: https://github.com/pombase/fypo
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/ontology/components/lost-inferred-subsumptions-pre-odk.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/pombase/fypo/master/src%2Fontology%2Fcomponents%2Ffypo-eqs.owl parsed as xml

In repository: https://github.com/pombase/fypo
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/ontology/components/fypo-eqs.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/pombase/fypo/master/supplemental_files%2Fsaved_cell-pop_xp.obo

In repository: https://github.com/pombase/fypo
> Tag-value pair parsing failed for:
[Term]


---
File: https://raw.githubusercontent.com/pombase/fypo/master/supplemental_files%2Fseparate_xp_file.obo

In repository: https://github.com/pombase/fypo
> Tag-value pair parsing failed for:
[Term]


---
File: https://raw.githubusercontent.com/obophenotype/porifera-ontology/master/poro.owl parsed as xml

In repository: https://github.com/obophenotype/porifera-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/poro.owl:14569:8: rdf:nodeID value is not a valid NCName: _:genid887

---
File: https://raw.githubusercontent.com/obophenotype/porifera-ontology/master/src%2Fontology%2Fporo-idranges.owl parsed as xml

In repository: https://github.com/obophenotype/porifera-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/ontology/poro-idranges.owl:1:0: syntax error

---
File: https://raw.githubusercontent.com/obophenotype/porifera-ontology/master/src%2Fontology%2Fporo-edit.owl parsed as xml

In repository: https://github.com/obophenotype/porifera-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/ontology/poro-edit.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/obophenotype/bio-attribute-ontology/master/imports%2Freasoner_axioms.owl parsed as xml

In repository: https://github.com/obophenotype/bio-attribute-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/imports/reasoner_axioms.owl:1:8: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/obophenotype/bio-attribute-ontology/master/imports%2Fpato_seed.owl parsed as xml

In repository: https://github.com/obophenotype/bio-attribute-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/imports/pato_seed.owl:1:0: syntax error

---
File: https://raw.githubusercontent.com/obophenotype/bio-attribute-ontology/master/imports%2Fpo_seed.owl parsed as xml

In repository: https://github.com/obophenotype/bio-attribute-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/imports/po_seed.owl:1:0: syntax error

---
File: https://raw.githubusercontent.com/obophenotype/bio-attribute-ontology/master/imports%2Fuberon_seed.owl parsed as xml

In repository: https://github.com/obophenotype/bio-attribute-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/imports/uberon_seed.owl:1:0: syntax error

---
File: https://raw.githubusercontent.com/obophenotype/bio-attribute-ontology/master/imports%2Fcl_seed.owl parsed as xml

In repository: https://github.com/obophenotype/bio-attribute-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/imports/cl_seed.owl:1:0: syntax error

---
File: https://raw.githubusercontent.com/obophenotype/bio-attribute-ontology/master/imports%2Fgo_seed.owl parsed as xml

In repository: https://github.com/obophenotype/bio-attribute-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/imports/go_seed.owl:1:0: syntax error

---
File: https://raw.githubusercontent.com/obophenotype/bio-attribute-ontology/master/src%2Fontology%2Fimports%2Freasoner_axioms.owl parsed as xml

In repository: https://github.com/obophenotype/bio-attribute-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/ontology/imports/reasoner_axioms.owl:1:8: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/obophenotype/bio-attribute-ontology/master/src%2Fontology%2Fmodules%2Fentity_attribute_location.owl parsed as xml

In repository: https://github.com/obophenotype/bio-attribute-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/ontology/modules/entity_attribute_location.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/obophenotype/bio-attribute-ontology/master/src%2Fontology%2Fmodules%2Fattribute_location.owl parsed as xml

In repository: https://github.com/obophenotype/bio-attribute-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/ontology/modules/attribute_location.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/obophenotype/bio-attribute-ontology/master/src%2Fontology%2Fmodules%2Fentity_attribute.owl parsed as xml

In repository: https://github.com/obophenotype/bio-attribute-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/ontology/modules/entity_attribute.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/obophenotype/c-elegans-phenotype-ontology/master/wbphenotype-equivalent-axioms-subq.owl parsed as xml

In repository: https://github.com/obophenotype/c-elegans-phenotype-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/wbphenotype-equivalent-axioms-subq.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/obophenotype/c-elegans-phenotype-ontology/master/patterns%2Fpattern.owl parsed as xml

In repository: https://github.com/obophenotype/c-elegans-phenotype-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/patterns/pattern.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/obophenotype/c-elegans-phenotype-ontology/master/patterns%2Fdefinitions.owl parsed as xml

In repository: https://github.com/obophenotype/c-elegans-phenotype-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/patterns/definitions.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/obophenotype/c-elegans-phenotype-ontology/master/src%2Fpatterns%2Fpattern.owl parsed as xml

In repository: https://github.com/obophenotype/c-elegans-phenotype-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/patterns/pattern.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/obophenotype/c-elegans-phenotype-ontology/master/src%2Fpatterns%2Fdefinitions.owl parsed as xml

In repository: https://github.com/obophenotype/c-elegans-phenotype-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/patterns/definitions.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/obophenotype/c-elegans-phenotype-ontology/master/src%2Fontology%2Fwbphenotype-idranges.owl parsed as xml

In repository: https://github.com/obophenotype/c-elegans-phenotype-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/ontology/wbphenotype-idranges.owl:1:0: syntax error

---
File: https://raw.githubusercontent.com/obophenotype/c-elegans-phenotype-ontology/master/src%2Fontology%2Fwb_reset%2Fwbphenotype_eq_stripped.owl parsed as xml

In repository: https://github.com/obophenotype/c-elegans-phenotype-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/ontology/wb_reset/wbphenotype_eq_stripped.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/obophenotype/c-elegans-phenotype-ontology/master/src%2Fontology%2Fwb_reset%2Fwbphenotype-edit.owl parsed as xml

In repository: https://github.com/obophenotype/c-elegans-phenotype-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/ontology/wb_reset/wbphenotype-edit.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/obophenotype/c-elegans-phenotype-ontology/master/src%2Fontology%2Fwb_reset%2Fwbphenotype_eq.owl parsed as xml

In repository: https://github.com/obophenotype/c-elegans-phenotype-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/ontology/wb_reset/wbphenotype_eq.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/obophenotype/c-elegans-phenotype-ontology/master/src%2Fontology%2Fcomponents%2Fwbphenotype-equivalent-axioms-subq.owl parsed as xml

In repository: https://github.com/obophenotype/c-elegans-phenotype-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/ontology/components/wbphenotype-equivalent-axioms-subq.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/obophenotype/c-elegans-gross-anatomy-ontology/master/src%2Fpatterns%2Fpattern.owl parsed as xml

In repository: https://github.com/obophenotype/c-elegans-gross-anatomy-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/patterns/pattern.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/obophenotype/c-elegans-gross-anatomy-ontology/master/src%2Fpatterns%2Fdefinitions.owl parsed as xml

In repository: https://github.com/obophenotype/c-elegans-gross-anatomy-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/patterns/definitions.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/obophenotype/c-elegans-gross-anatomy-ontology/master/src%2Fontology%2Fwbbt-edit.owl parsed as xml

In repository: https://github.com/obophenotype/c-elegans-gross-anatomy-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/ontology/wbbt-edit.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/obophenotype/c-elegans-gross-anatomy-ontology/master/src%2Fontology%2Fwbbt-edit-test.owl parsed as xml

In repository: https://github.com/obophenotype/c-elegans-gross-anatomy-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/ontology/wbbt-edit-test.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/obophenotype/c-elegans-gross-anatomy-ontology/master/src%2Fontology%2Fwbbt-idranges.owl parsed as xml

In repository: https://github.com/obophenotype/c-elegans-gross-anatomy-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/ontology/wbbt-idranges.owl:1:1: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/FlyBase/drosophila-phenotype-ontology/master/patterns%2Fpattern.owl parsed as xml

In repository: https://github.com/FlyBase/drosophila-phenotype-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/patterns/pattern.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/FlyBase/drosophila-phenotype-ontology/master/patterns%2Fdefinitions.owl parsed as xml

In repository: https://github.com/FlyBase/drosophila-phenotype-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/patterns/definitions.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/FlyBase/drosophila-phenotype-ontology/master/src%2Fpatterns%2Fpattern.owl parsed as xml

In repository: https://github.com/FlyBase/drosophila-phenotype-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/patterns/pattern.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/FlyBase/drosophila-phenotype-ontology/master/src%2Fpatterns%2Fdefinitions.owl parsed as xml

In repository: https://github.com/FlyBase/drosophila-phenotype-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/patterns/definitions.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/FlyBase/drosophila-phenotype-ontology/master/src%2Fpatterns%2Fdata%2Farchive%2Fdefinitions_original.owl parsed as xml

In repository: https://github.com/FlyBase/drosophila-phenotype-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/patterns/data/archive/definitions_original.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/FlyBase/drosophila-phenotype-ontology/master/src%2Fontology%2Fdpo-edit.owl parsed as xml

In repository: https://github.com/FlyBase/drosophila-phenotype-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/ontology/dpo-edit.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/FlyBase/drosophila-phenotype-ontology/master/src%2Fontology%2Fdpo-idranges.owl parsed as xml

In repository: https://github.com/FlyBase/drosophila-phenotype-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/ontology/dpo-idranges.owl:1:1: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/FlyBase/drosophila-phenotype-ontology/master/src%2Fontology%2Fcomponents%2Fqc_assertions.owl parsed as xml

In repository: https://github.com/FlyBase/drosophila-phenotype-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/ontology/components/qc_assertions.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/FlyBase/drosophila-phenotype-ontology/master/src%2Fontology%2Fcomponents%2Ffbdv_extension.owl parsed as xml

In repository: https://github.com/FlyBase/drosophila-phenotype-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/ontology/components/fbdv_extension.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/obophenotype/c-elegans-development-ontology/master/src%2Fpatterns%2Fpattern.owl parsed as xml

In repository: https://github.com/obophenotype/c-elegans-development-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/patterns/pattern.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/obophenotype/c-elegans-development-ontology/master/src%2Fpatterns%2Fdefinitions.owl parsed as xml

In repository: https://github.com/obophenotype/c-elegans-development-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/patterns/definitions.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/obophenotype/c-elegans-development-ontology/master/src%2Fontology%2Fwbls-edit.owl parsed as xml

In repository: https://github.com/obophenotype/c-elegans-development-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/ontology/wbls-edit.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/obophenotype/c-elegans-development-ontology/master/src%2Fontology%2Fwbls-edit-test.owl parsed as xml

In repository: https://github.com/obophenotype/c-elegans-development-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/ontology/wbls-edit-test.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/obophenotype/c-elegans-development-ontology/master/src%2Fontology%2Fwbls-idranges.owl parsed as xml

In repository: https://github.com/obophenotype/c-elegans-development-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/ontology/wbls-idranges.owl:1:1: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/FlyBase/drosophila-developmental-ontology/master/patterns%2Fpattern.owl parsed as xml

In repository: https://github.com/FlyBase/drosophila-developmental-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/patterns/pattern.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/FlyBase/drosophila-developmental-ontology/master/patterns%2Fdefinitions.owl parsed as xml

In repository: https://github.com/FlyBase/drosophila-developmental-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/patterns/definitions.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/FlyBase/drosophila-developmental-ontology/master/src%2Fpatterns%2Fpattern.owl parsed as xml

In repository: https://github.com/FlyBase/drosophila-developmental-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/patterns/pattern.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/FlyBase/drosophila-developmental-ontology/master/src%2Fpatterns%2Fdefinitions.owl parsed as xml

In repository: https://github.com/FlyBase/drosophila-developmental-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/patterns/definitions.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/FlyBase/drosophila-developmental-ontology/master/src%2Fontology%2Ffbdv-idranges.owl parsed as xml

In repository: https://github.com/FlyBase/drosophila-developmental-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/ontology/fbdv-idranges.owl:1:1: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/obophenotype/caro/master/src%2Fontology%2Fcaro-with-annotations.owl parsed as xml

In repository: https://github.com/obophenotype/caro
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/ontology/caro-with-annotations.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/obophenotype/caro/master/src%2Fontology%2Fcaro-idranges.owl parsed as xml

In repository: https://github.com/obophenotype/caro
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/ontology/caro-idranges.owl:1:0: syntax error

---
File: https://raw.githubusercontent.com/obophenotype/caro/master/src%2Fontology%2Fcaro_bridge.owl parsed as xml

In repository: https://github.com/obophenotype/caro
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/ontology/caro_bridge.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/obophenotype/caro/master/src%2Fontology%2Fcaro.owl parsed as xml

In repository: https://github.com/obophenotype/caro
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/ontology/caro.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/obophenotype/caro/master/src%2Fontology%2Fimports%2Fro_import.owl parsed as xml

In repository: https://github.com/obophenotype/caro
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/ontology/imports/ro_import.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/obophenotype/caro/master/src%2Fontology%2Fimports%2Fchebi_import.owl parsed as xml

In repository: https://github.com/obophenotype/caro
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/ontology/imports/chebi_import.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/obophenotype/caro/master/src%2Fontology%2Fimports%2Fpato_seed.owl parsed as xml

In repository: https://github.com/obophenotype/caro
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/ontology/imports/pato_seed.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/obophenotype/caro/master/src%2Fontology%2Fimports%2Fncbitaxon_import.owl parsed as xml

In repository: https://github.com/obophenotype/caro
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/ontology/imports/ncbitaxon_import.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/obophenotype/caro/master/src%2Fontology%2Fimports%2Fpato_import.owl parsed as xml

In repository: https://github.com/obophenotype/caro
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/ontology/imports/pato_import.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/obophenotype/caro/master/src%2Fontology%2Fimports%2Fcl_import.owl parsed as xml

In repository: https://github.com/obophenotype/caro
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/ontology/imports/cl_import.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/obophenotype/caro/master/src%2Fontology%2Fimports%2Fpco_import.owl parsed as xml

In repository: https://github.com/obophenotype/caro
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/ontology/imports/pco_import.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/obophenotype/caro/master/src%2Fontology%2Fimports%2Fgo_import.owl parsed as xml

In repository: https://github.com/obophenotype/caro
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/ontology/imports/go_import.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/obophenotype/caro/master/src%2Fontology%2Fbridges%2Ffbbt_bridge.owl parsed as xml

In repository: https://github.com/obophenotype/caro
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/ontology/bridges/fbbt_bridge.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/obophenotype/caro/master/src%2Fontology%2Fbridges%2Fpo_bridge.owl parsed as xml

In repository: https://github.com/obophenotype/caro
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/ontology/bridges/po_bridge.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/obophenotype/caro/master/src%2Fontology%2Fbridges%2Fzfa_bridge.owl parsed as xml

In repository: https://github.com/obophenotype/caro
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/ontology/bridges/zfa_bridge.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/obophenotype/caro/master/src%2Fontology%2Fbridges%2Fxao_bridge.owl parsed as xml

In repository: https://github.com/obophenotype/caro
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/ontology/bridges/xao_bridge.owl:1:6: not well-formed (invalid token)

---
File: https://raw.githubusercontent.com/obophenotype/biological-spatial-ontology/master/src%2Fontology%2Fbspo-idranges.owl parsed as xml

In repository: https://github.com/obophenotype/biological-spatial-ontology
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/ontology/bspo-idranges.owl:1:0: syntax error

---
