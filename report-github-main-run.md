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
Running for 0:02:32.908091 - stopping the workflow to avoid hitting GitHub Actions runner 6h job limits

The following repositories did not have the time to be processed:


[{'repo': {'url': 'https://github.com/haishanh/night-owl.vim', 'shortDescriptionHTML': 'A 24bit dark Vim colorscheme based on sdras/night-owl-vscode-theme', 'name': 'night-owl.vim', 'description': 'A 24bit dark Vim colorscheme based on sdras/night-owl-vscode-theme', 'defaultBranchRef': {'name': 'master'}}}, {'repo': {'url': 'https://github.com/b2ihealthcare/snow-owl', 'shortDescriptionHTML': '<g-emoji class="g-emoji" alias="owl" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f989.png">🦉</g-emoji> Snow Owl - production ready, scalable terminology server (SNOMED CT, ICD-10, LOINC, dm+d, ATC and others)', 'name': 'snow-owl', 'description': ':owl: Snow Owl - production ready, scalable terminology server (SNOMED CT, ICD-10, LOINC, dm+d, ATC and others)', 'defaultBranchRef': {'name': '7.x'}}}, {'repo': {'url': 'https://github.com/dengwb1991/owl-ui', 'shortDescriptionHTML': '<g-emoji class="g-emoji" alias="owl" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f989.png">🦉</g-emoji> 基于 Vue 开发移动端UI组件库 <g-emoji class="g-emoji" alias="tada" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f389.png">🎉</g-emoji>附UI组件库开发教程', 'name': 'owl-ui', 'description': '🦉 基于 Vue 开发移动端UI组件库 🎉附UI组件库开发教程', 'defaultBranchRef': {'name': 'master'}}}, {'repo': {'url': 'https://github.com/Cognonto/kbpedia', 'shortDescriptionHTML': 'KBPedia Knowledge Graph &amp; Knowledge Ontology (KKO)', 'name': 'kbpedia', 'description': 'KBPedia Knowledge Graph & Knowledge Ontology (KKO)', 'defaultBranchRef': {'name': 'master'}}}, {'repo': {'url': 'https://github.com/obophenotype/human-phenotype-ontology', 'shortDescriptionHTML': 'Ontology for the description of human clinical features', 'name': 'human-phenotype-ontology', 'description': 'Ontology for the description of human clinical features', 'defaultBranchRef': {'name': 'master'}}}, {'repo': {'url': 'https://github.com/althonos/pronto', 'shortDescriptionHTML': 'A Python frontend to Ontologies.', 'name': 'pronto', 'description': 'A Python frontend to Ontologies.', 'defaultBranchRef': {'name': 'master'}}}, {'repo': {'url': 'https://github.com/RDFLib/pySHACL', 'shortDescriptionHTML': 'A Python validator for SHACL', 'name': 'pySHACL', 'description': 'A Python validator for SHACL', 'defaultBranchRef': {'name': 'master'}}}, {'repo': {'url': 'https://github.com/Call-for-Code/ClusterDuck-Protocol', 'shortDescriptionHTML': 'Firmware for an ad-hoc mesh network of Internet-of-Things devices based on LoRa (Long Range radio) that can be deployed quickly and cheaply.', 'name': 'ClusterDuck-Protocol', 'description': 'Firmware for an ad-hoc mesh network of Internet-of-Things devices based on LoRa (Long Range radio) that can be deployed quickly and cheaply.', 'defaultBranchRef': {'name': 'master'}}}, {'repo': {'url': 'https://github.com/taurenshaman/semantic-web', 'shortDescriptionHTML': 'Storing ontologies/vocabularies from the web. Wish anybody can translate some of them.', 'name': 'semantic-web', 'description': 'Storing ontologies/vocabularies from the web. Wish anybody can translate some of them.', 'defaultBranchRef': {'name': 'master'}}}, {'repo': {'url': 'https://github.com/RDFLib/OWL-RL', 'shortDescriptionHTML': 'A simple implementation of the OWL2 RL Profile on top of RDFLib: it expands the graph with all possible triples that OWL RL defines. It can be used together with RDFLib to expand an RDFLib Graph ob…', 'name': 'OWL-RL', 'description': 'A simple implementation of the OWL2 RL Profile on top of RDFLib: it expands the graph with all possible triples that OWL RL defines. It can be used together with RDFLib to expand an RDFLib Graph object, or as a stand alone service with its own serialization.', 'defaultBranchRef': {'name': 'master'}}}, {'repo': {'url': 'https://github.com/geneontology/go-ontology', 'shortDescriptionHTML': 'Source ontology files for the Gene Ontology', 'name': 'go-ontology', 'description': 'Source ontology files for the Gene Ontology', 'defaultBranchRef': {'name': 'master'}}}, {'repo': {'url': 'https://github.com/simongray/clojure-graph-resources', 'shortDescriptionHTML': 'A curated list of Clojure resources for dealing with graph-like data.', 'name': 'clojure-graph-resources', 'description': 'A curated list of Clojure resources for dealing with graph-like data.', 'defaultBranchRef': {'name': 'master'}}}, {'repo': {'url': 'https://github.com/edmcouncil/fibo', 'shortDescriptionHTML': 'The Financial Industry Business Ontology (FIBO) defines the sets of things that are of interest in financial business applications and the ways that those things can relate to one another. In this …', 'name': 'fibo', 'description': 'The Financial Industry Business Ontology (FIBO) defines the sets of things that are of interest in financial business applications and the ways that those things can relate to one another. In this way, FIBO can give meaning to any data (e.g., spreadsheets, relational databases, XML documents) that describe the business of finance.', 'defaultBranchRef': {'name': 'master'}}}, {'repo': {'url': 'https://github.com/ESIPFed/sweet', 'shortDescriptionHTML': 'Official repository for Semantic Web for Earth and Environmental Terminology (SWEET) Ontologies', 'name': 'sweet', 'description': 'Official repository for Semantic Web for Earth and Environmental Terminology (SWEET) Ontologies', 'defaultBranchRef': {'name': 'master'}}}, {'repo': {'url': 'https://github.com/jmvanel/semantic_forms', 'shortDescriptionHTML': 'Form generators leveraging semantic web standards (RDF(S), OWL, SPARQL , ...', 'name': 'semantic_forms', 'description': 'Form generators leveraging semantic web standards (RDF(S), OWL, SPARQL , ...', 'defaultBranchRef': {'name': 'master'}}}, {'repo': {'url': 'https://github.com/Galigator/openllet', 'shortDescriptionHTML': 'Openllet is an OWL 2 reasoner in Java, build on top of Pellet.', 'name': 'openllet', 'description': 'Openllet is an OWL 2 reasoner in Java, build on top of Pellet.', 'defaultBranchRef': {'name': 'integration'}}}, {'repo': {'url': 'https://github.com/monarch-initiative/mondo', 'shortDescriptionHTML': 'Mondo Disease Ontology', 'name': 'mondo', 'description': 'Mondo Disease Ontology', 'defaultBranchRef': {'name': 'master'}}}, {'repo': {'url': 'https://github.com/INCATools/ontology-development-kit', 'shortDescriptionHTML': 'Bootstrap an OBO Library ontology', 'name': 'ontology-development-kit', 'description': 'Bootstrap an OBO Library ontology', 'defaultBranchRef': {'name': 'master'}}}, {'repo': {'url': 'https://github.com/RDFLib/pyLODE', 'shortDescriptionHTML': 'An OWL ontology documentation tool using Python and templating, based on LODE', 'name': 'pyLODE', 'description': 'An OWL ontology documentation tool using Python and templating, based on LODE', 'defaultBranchRef': {'name': 'master'}}}, {'repo': {'url': 'https://github.com/AtomGraph/LinkedDataHub', 'shortDescriptionHTML': 'Data-driven Knowledge Graph management system. Apache license.', 'name': 'LinkedDataHub', 'description': 'Data-driven Knowledge Graph management system. Apache license.', 'defaultBranchRef': {'name': 'master'}}}, {'repo': {'url': 'https://github.com/biolink/biolink-model', 'shortDescriptionHTML': 'Schema and generated objects for biolink data model and upper ontology', 'name': 'biolink-model', 'description': 'Schema and generated objects for biolink data model and upper ontology', 'defaultBranchRef': {'name': 'master'}}}, {'repo': {'url': 'https://github.com/DerwenAI/kglab', 'shortDescriptionHTML': 'Graph-Based Data Science: an abstraction layer in Python for building knowledge graphs, integrated with popular graph libraries – atop Pandas, RDFlib, pySHACL, NetworkX, iGraph, PyVis, pslpython, p…', 'name': 'kglab', 'description': 'Graph-Based Data Science: an abstraction layer in Python for building knowledge graphs, integrated with popular graph libraries – atop Pandas, RDFlib, pySHACL, NetworkX, iGraph, PyVis, pslpython, pyarrow, etc.', 'defaultBranchRef': {'name': 'main'}}}, {'repo': {'url': 'https://github.com/SANSA-Stack/Archived-SANSA-ML', 'shortDescriptionHTML': 'SANSA Machine Learning Layer', 'name': 'Archived-SANSA-ML', 'description': 'SANSA Machine Learning Layer', 'defaultBranchRef': {'name': 'master'}}}, {'repo': {'url': 'https://github.com/Ebiquity/Unified-Cybersecurity-Ontology', 'shortDescriptionHTML': 'Unified Cybersecurity Ontology', 'name': 'Unified-Cybersecurity-Ontology', 'description': 'Unified Cybersecurity Ontology', 'defaultBranchRef': {'name': 'master'}}}, {'repo': {'url': 'https://github.com/obophenotype/cell-ontology', 'shortDescriptionHTML': 'An ontology of cell types', 'name': 'cell-ontology', 'description': 'An ontology of cell types', 'defaultBranchRef': {'name': 'master'}}}, {'repo': {'url': 'https://github.com/flekschas/owl2neo4j', 'shortDescriptionHTML': 'Convert OWL to labeled property graph and import into Neo4J', 'name': 'owl2neo4j', 'description': 'Convert OWL to labeled property graph and import into Neo4J', 'defaultBranchRef': {'name': 'master'}}}, {'repo': {'url': 'https://github.com/SmartDataAnalytics/SemWeb2NL', 'shortDescriptionHTML': 'Semantic Web related concepts converted to Natural language', 'name': 'SemWeb2NL', 'description': 'Semantic Web related concepts converted to Natural language', 'defaultBranchRef': {'name': 'master'}}}, {'repo': {'url': 'https://github.com/MaastrichtU-IDS/semanticscience', 'shortDescriptionHTML': 'The Semanticscience Integrated Ontology (SIO) provides a simple, integrated ontology of types and relations for rich description of objects, processes and their attributes.', 'name': 'semanticscience', 'description': 'The Semanticscience Integrated Ontology (SIO) provides a simple, integrated ontology of types and relations for rich description of objects, processes and their attributes.', 'defaultBranchRef': {'name': 'master'}}}, {'repo': {'url': 'https://github.com/acupoftee/Overwatch-League-API-Documentation', 'shortDescriptionHTML': 'A community driven analysis of the Overwatch League API.', 'name': 'Overwatch-League-API-Documentation', 'description': 'A community driven analysis of the Overwatch League API.', 'defaultBranchRef': {'name': 'master'}}}, {'repo': {'url': 'https://github.com/geneontology/obographs', 'shortDescriptionHTML': 'Basic and Advanced OBO Graphs: specification and reference implementation', 'name': 'obographs', 'description': 'Basic and Advanced OBO Graphs: specification and reference implementation', 'defaultBranchRef': {'name': 'master'}}}, {'repo': {'url': 'https://github.com/SciCrunch/NIF-Ontology', 'shortDescriptionHTML': 'NIF Standard Ontologies (NIFSTD)', 'name': 'NIF-Ontology', 'description': 'NIF Standard Ontologies (NIFSTD)', 'defaultBranchRef': {'name': 'master'}}}, {'repo': {'url': 'https://github.com/bio-ontology-research-group/walking-rdf-and-owl', 'shortDescriptionHTML': 'Feature learning over RDF data and OWL ontologies', 'name': 'walking-rdf-and-owl', 'description': 'Feature learning over RDF data and OWL ontologies', 'defaultBranchRef': {'name': 'master'}}}, {'repo': {'url': 'https://github.com/callahantiff/PheKnowLator', 'shortDescriptionHTML': 'PheKnowLator: Automated Construction of Heterogeneous Biomedical Knowledge Graphs Under Alternative Semantic Models', 'name': 'PheKnowLator', 'description': 'PheKnowLator: Automated Construction of Heterogeneous Biomedical Knowledge Graphs Under Alternative Semantic Models', 'defaultBranchRef': {'name': 'master'}}}, {'repo': {'url': 'https://github.com/geneontology/protege-tutorial', 'shortDescriptionHTML': 'Material for GO OWL/Protege Tutorial', 'name': 'protege-tutorial', 'description': 'Material for GO OWL/Protege Tutorial', 'defaultBranchRef': {'name': 'master'}}}, {'repo': {'url': 'https://github.com/inovexcorp/mobi', 'shortDescriptionHTML': 'Mobi is a decentralized, federated, and distributed graph data platform for teams and communities to publish and discover data, data models, and analytics that are instantly consumable.', 'name': 'mobi', 'description': 'Mobi is a decentralized, federated, and distributed graph data platform for teams and communities to publish and discover data, data models, and analytics that are instantly consumable.', 'defaultBranchRef': {'name': 'master'}}}, {'repo': {'url': 'https://github.com/owlbarn/book', 'shortDescriptionHTML': 'Owl Tutorial Book V1', 'name': 'book', 'description': 'Owl Tutorial Book V1', 'defaultBranchRef': {'name': 'master'}}}, {'repo': {'url': 'https://github.com/SANSA-Stack/Archived-SANSA-Inference', 'shortDescriptionHTML': 'A general Inference API based on two of the most popular Big Data processing engines: Apache Spark and Apache Flink', 'name': 'Archived-SANSA-Inference', 'description': 'A general Inference API based on two of the most popular Big Data processing engines: Apache Spark and Apache Flink', 'defaultBranchRef': {'name': 'master'}}}, {'repo': {'url': 'https://github.com/i40-Tools/I40KG', 'shortDescriptionHTML': 'Contains the development for the Industry 4.0 standards knowledge graph (I40KG). Its current collaborative development is driven by VoCol - http://vocol.iais.fraunhofer.de/sto/', 'name': 'I40KG', 'description': 'Contains the development for the Industry 4.0 standards knowledge graph (I40KG). Its current collaborative development is driven by VoCol - http://vocol.iais.fraunhofer.de/sto/', 'defaultBranchRef': {'name': 'master'}}}, {'repo': {'url': 'https://github.com/SANSA-Stack/SANSA-Notebooks', 'shortDescriptionHTML': 'Interactive Spark Notebooks for running SANSA examples.', 'name': 'SANSA-Notebooks', 'description': 'Interactive Spark Notebooks for running SANSA examples.', 'defaultBranchRef': {'name': 'stack-merge'}}}, {'repo': {'url': 'https://github.com/SANSA-Stack/Archived-SANSA-OWL', 'shortDescriptionHTML': 'SANSA Stack OWL (Web Ontology Language) API', 'name': 'Archived-SANSA-OWL', 'description': 'SANSA Stack OWL (Web Ontology Language) API', 'defaultBranchRef': {'name': 'master'}}}, {'repo': {'url': 'https://github.com/owlbarn/eigen', 'shortDescriptionHTML': "Owl's OCaml Interface to Eigen3 C++ Library ", 'name': 'eigen', 'description': "Owl's OCaml Interface to Eigen3 C++ Library ", 'defaultBranchRef': {'name': 'master'}}}, {'repo': {'url': 'https://github.com/International-Data-Spaces-Association/InformationModel', 'shortDescriptionHTML': 'The Information Model of the International Data Spaces implements the IDS reference architecture as an extensible, machine readable and technology independent data model.', 'name': 'InformationModel', 'description': 'The Information Model of the International Data Spaces implements the IDS reference architecture as an extensible, machine readable and technology independent data model.', 'defaultBranchRef': {'name': 'develop'}}}, {'repo': {'url': 'https://github.com/Kaljurand/owl-verbalizer', 'shortDescriptionHTML': 'OWL verbalizer: making machine-readable knowledge also human-readable', 'name': 'owl-verbalizer', 'description': 'OWL verbalizer: making machine-readable knowledge also human-readable', 'defaultBranchRef': {'name': 'master'}}}, {'repo': {'url': 'https://github.com/EcoStruxure/OLGA', 'shortDescriptionHTML': 'an Ontology SDK', 'name': 'OLGA', 'description': 'an Ontology SDK', 'defaultBranchRef': {'name': 'master'}}}, {'repo': {'url': 'https://github.com/avicomp/ont-api', 'shortDescriptionHTML': 'ONT-API (OWL-API over Apache Jena)', 'name': 'ont-api', 'description': 'ONT-API (OWL-API over Apache Jena)', 'defaultBranchRef': {'name': 'master'}}}, {'repo': {'url': 'https://github.com/kbss-cvut/jopa', 'shortDescriptionHTML': 'Java OWL Persistence API', 'name': 'jopa', 'description': 'Java OWL Persistence API', 'defaultBranchRef': {'name': 'master'}}}, {'repo': {'url': 'https://github.com/schimatos/schimatos.org', 'shortDescriptionHTML': 'A SHACL-based Web-Form Generator for Knowledge Graph Editing', 'name': 'schimatos.org', 'description': 'A SHACL-based Web-Form Generator for Knowledge Graph Editing', 'defaultBranchRef': {'name': 'master'}}}, {'repo': {'url': 'https://github.com/alanruttenberg/lsw2', 'shortDescriptionHTML': 'OWL and Semantic Web toolkit for Common Lisp, used for construction and reasoning over ontologies and ontology-structured data', 'name': 'lsw2', 'description': 'OWL and Semantic Web toolkit for Common Lisp, used for construction and reasoning over ontologies and ontology-structured data', 'defaultBranchRef': {'name': 'owlapiv4'}}}, {'repo': {'url': 'https://github.com/opensourceBIM/python-mvdxml', 'shortDescriptionHTML': 'A mvdXML checker and w3c SPARQL converter, as an IfcOpenShell submodule or stand-alone.', 'name': 'python-mvdxml', 'description': 'A mvdXML checker and w3c SPARQL converter, as an IfcOpenShell submodule or stand-alone.', 'defaultBranchRef': {'name': 'master'}}}, {'repo': {'url': 'https://github.com/dc-mak/NumLin', 'shortDescriptionHTML': 'NumLin: Linear Types for Linear Algebra', 'name': 'NumLin', 'description': 'NumLin: Linear Types for Linear Algebra', 'defaultBranchRef': {'name': 'master'}}}, {'repo': {'url': 'https://github.com/biolink/biolinkml', 'shortDescriptionHTML': 'Biolink modeling language', 'name': 'biolinkml', 'description': 'Biolink modeling language', 'defaultBranchRef': {'name': 'master'}}}, {'repo': {'url': 'https://github.com/ghxiao/owl-toolkit', 'shortDescriptionHTML': 'a set of command line tools for OWL files powered by owl-api ', 'name': 'owl-toolkit', 'description': 'a set of command line tools for OWL files powered by owl-api ', 'defaultBranchRef': {'name': 'master'}}}, {'repo': {'url': 'https://github.com/cepave-f2e/vue-owl-ui', 'shortDescriptionHTML': 'Cepave OWL UI Components built with VueJS 2.0', 'name': 'vue-owl-ui', 'description': 'Cepave OWL UI Components built with VueJS 2.0', 'defaultBranchRef': {'name': 'dev'}}}, {'repo': {'url': 'https://github.com/pingdynasty/OpenWare', 'shortDescriptionHTML': 'Firmware for OWL devices', 'name': 'OpenWare', 'description': 'Firmware for OWL devices', 'defaultBranchRef': {'name': 'master'}}}, {'repo': {'url': 'https://github.com/ISA-tools/stato', 'shortDescriptionHTML': 'This is the development repository for the STATistics Ontology (STATO). For more information and demonstration on the ontology content, please visit its website:', 'name': 'stato', 'description': 'This is the development repository for the STATistics Ontology (STATO). For more information and demonstration on the ontology content, please visit its website:', 'defaultBranchRef': {'name': 'dev'}}}, {'repo': {'url': 'https://github.com/owlcs/ont-api', 'shortDescriptionHTML': 'ONT-API (OWL-API over Apache Jena)', 'name': 'ont-api', 'description': 'ONT-API (OWL-API over Apache Jena)', 'defaultBranchRef': {'name': 'master'}}}, {'repo': {'url': 'https://github.com/yubinCloud/pyfuseki', 'shortDescriptionHTML': 'A library that uses Python to connect and manipulate Jena Fuseki, which provides sync and async methods.', 'name': 'pyfuseki', 'description': 'A library that uses Python to connect and manipulate Jena Fuseki, which provides sync and async methods.', 'defaultBranchRef': {'name': 'main'}}}, {'repo': {'url': 'https://github.com/benj-moreau/odmtp-tpf', 'shortDescriptionHTML': 'Triple pattern matching over non-RDF datasources with inference ', 'name': 'odmtp-tpf', 'description': 'Triple pattern matching over non-RDF datasources with inference ', 'defaultBranchRef': {'name': 'master'}}}, {'repo': {'url': 'https://github.com/ansell/rdf4j-schema-generator', 'shortDescriptionHTML': 'Generates RDF4J Vocabulary classes from RDFS or OWL Schemas', 'name': 'rdf4j-schema-generator', 'description': 'Generates RDF4J Vocabulary classes from RDFS or OWL Schemas', 'defaultBranchRef': {'name': 'master'}}}, {'repo': {'url': 'https://github.com/OBOFoundry/COB', 'shortDescriptionHTML': 'An experimental ontology containing key terms from Open Biological and Biomedical Ontologies (OBO)', 'name': 'COB', 'description': 'An experimental ontology containing key terms from Open Biological and Biomedical Ontologies (OBO)', 'defaultBranchRef': {'name': 'master'}}}, {'repo': {'url': 'https://github.com/mapping-commons/SSSOM', 'shortDescriptionHTML': 'Simple Standard for Sharing Ontology Mappings', 'name': 'SSSOM', 'description': 'Simple Standard for Sharing Ontology Mappings', 'defaultBranchRef': {'name': 'master'}}}, {'repo': {'url': 'https://github.com/beAWARE-project/ontology', 'shortDescriptionHTML': 'This repository contains the crisis management ontology for the beAWARE H2020 project along with the relevant documentation.', 'name': 'ontology', 'description': 'This repository contains the crisis management ontology for the beAWARE H2020 project along with the relevant documentation.', 'defaultBranchRef': {'name': 'master'}}}, {'repo': {'url': 'https://github.com/Ponjimon/owl-graphql', 'shortDescriptionHTML': 'A GraphQL wrapper for the Overwatch League API made with the Serverless framework.', 'name': 'owl-graphql', 'description': 'A GraphQL wrapper for the Overwatch League API made with the Serverless framework.', 'defaultBranchRef': {'name': 'master'}}}, {'repo': {'url': 'https://github.com/JPL-IMCE/gov.nasa.jpl.imce.ontologies.public', 'shortDescriptionHTML': "JPL's IMCE ontologies for Model-Based Systems Engineering", 'name': 'gov.nasa.jpl.imce.ontologies.public', 'description': "JPL's IMCE ontologies for Model-Based Systems Engineering", 'defaultBranchRef': {'name': 'master'}}}, {'repo': {'url': 'https://github.com/Athena-Software/Owl', 'shortDescriptionHTML': '<g-emoji class="g-emoji" alias="owl" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f989.png">🦉</g-emoji> <g-emoji class="g-emoji" alias="lock" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f512.png">🔒</g-emoji> KeePass 2.x-compatible browser extension for filling passwords.', 'name': 'Owl', 'description': ':owl: 🔒 KeePass 2.x-compatible browser extension for filling passwords.', 'defaultBranchRef': {'name': 'master'}}}, {'repo': {'url': 'https://github.com/flowup/owl', 'shortDescriptionHTML': 'Automatically build/test/deploy your code', 'name': 'owl', 'description': 'Automatically build/test/deploy your code', 'defaultBranchRef': {'name': 'master'}}}, {'repo': {'url': 'https://github.com/sisinflab-swot/OWL-API-for-iOS', 'shortDescriptionHTML': 'A native iOS library for working with Web Ontology Language (OWL) ontologies', 'name': 'OWL-API-for-iOS', 'description': 'A native iOS library for working with Web Ontology Language (OWL) ontologies', 'defaultBranchRef': {'name': 'master'}}}, {'repo': {'url': 'https://github.com/luigidr/owlapi-example', 'shortDescriptionHTML': 'Example of OWL API with HermiT, realized for the Semantic Web course at Politecnico di Torino (Italy)', 'name': 'owlapi-example', 'description': 'Example of OWL API with HermiT, realized for the Semantic Web course at Politecnico di Torino (Italy)', 'defaultBranchRef': {'name': 'master'}}}, {'repo': {'url': 'https://github.com/robotenique/movies-ontology', 'shortDescriptionHTML': '<g-emoji class="g-emoji" alias="movie_camera" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f3a5.png">🎥</g-emoji> Ontology, parser and system modeling in description logic (DL) for movies', 'name': 'movies-ontology', 'description': ':movie_camera: Ontology, parser and system modeling in description logic (DL) for movies', 'defaultBranchRef': {'name': 'master'}}}, {'repo': {'url': 'https://github.com/fcaldera/night-owl-light-iterm2', 'shortDescriptionHTML': 'Night Owl Light theme for iTerm2', 'name': 'night-owl-light-iterm2', 'description': 'Night Owl Light theme for iTerm2', 'defaultBranchRef': {'name': 'master'}}}, {'repo': {'url': 'https://github.com/cmungall/owlstar', 'shortDescriptionHTML': 'Ontological Interpretations for Web Property Graphs', 'name': 'owlstar', 'description': 'Ontological Interpretations for Web Property Graphs', 'defaultBranchRef': {'name': 'master'}}}, {'repo': {'url': 'https://github.com/EnvironmentOntology/environmental-exposure-ontology', 'shortDescriptionHTML': 'Modular environmental exposures ontology', 'name': 'environmental-exposure-ontology', 'description': 'Modular environmental exposures ontology', 'defaultBranchRef': {'name': 'master'}}}, {'repo': {'url': 'https://github.com/konclude/Konclude', 'shortDescriptionHTML': 'Konclude: A parallel, tableau-based, high-performance reasoner for the Description Logic SROIQV(D)/the Web Ontology Language (OWL) 2 DL', 'name': 'Konclude', 'description': 'Konclude: A parallel, tableau-based, high-performance reasoner for the Description Logic SROIQV(D)/the Web Ontology Language (OWL) 2 DL', 'defaultBranchRef': {'name': 'master'}}}, {'repo': {'url': 'https://github.com/picorana/sparqling', 'shortDescriptionHTML': 'Visual tool for SPARQL queries on graphol graphs', 'name': 'sparqling', 'description': 'Visual tool for SPARQL queries on graphol graphs', 'defaultBranchRef': {'name': 'master'}}}, {'repo': {'url': 'https://github.com/DataFabricRus/ontology-fts', 'shortDescriptionHTML': 'Unofficial ontologies for Official Registers of Russian Federal Tax Service', 'name': 'ontology-fts', 'description': 'Unofficial ontologies for Official Registers of Russian Federal Tax Service', 'defaultBranchRef': {'name': 'master'}}}, {'repo': {'url': 'https://github.com/morteza/ontologies', 'shortDescriptionHTML': 'Ontology Repository for http://onto.ir', 'name': 'ontologies', 'description': 'Ontology Repository for http://onto.ir', 'defaultBranchRef': {'name': 'master'}}}, {'repo': {'url': 'https://github.com/italia/daf-semantics', 'shortDescriptionHTML': 'Daf Semantics repository', 'name': 'daf-semantics', 'description': 'Daf Semantics repository', 'defaultBranchRef': {'name': 'master'}}}, {'repo': {'url': 'https://github.com/Kaljurand/aceview', 'shortDescriptionHTML': 'ACE View is a natural language based ontology and rule editor. ACE View uses Attempto Controlled English (ACE) in the front-end, and Web Ontology Language (OWL) and Semantic Web Rule Language (SWRL…', 'name': 'aceview', 'description': 'ACE View is a natural language based ontology and rule editor. ACE View uses Attempto Controlled English (ACE) in the front-end, and Web Ontology Language (OWL) and Semantic Web Rule Language (SWRL) in the back-end. ACE View has been implemented as a plug-in for Protégé 4', 'defaultBranchRef': {'name': 'master'}}}, {'repo': {'url': 'https://github.com/Freakwill/gimbiseo', 'shortDescriptionHTML': '<g-emoji class="g-emoji" alias="robot" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f916.png">🤖</g-emoji>Man-machine conversation system base on owlready2, inspirited by an Korean TV play (基于 owlready2 的问答系统。灵感来自韩剧《金秘书你为何这样》)', 'name': 'gimbiseo', 'description': '🤖Man-machine conversation system base on owlready2, inspirited by an Korean TV play (基于 owlready2 的问答系统。灵感来自韩剧《金秘书你为何这样》)', 'defaultBranchRef': {'name': 'master'}}}, {'repo': {'url': 'https://github.com/termMed/rf2-to-owl', 'shortDescriptionHTML': 'This project uses the OWLApi to create an OWL ontology, in RDF/XML format, based on the content of standard SNOMED CT RF2 files.', 'name': 'rf2-to-owl', 'description': 'This project uses the OWLApi to create an OWL ontology, in RDF/XML format, based on the content of standard SNOMED CT RF2 files.', 'defaultBranchRef': {'name': 'master'}}}, {'repo': {'url': 'https://github.com/sisinflab-swot/cowl', 'shortDescriptionHTML': 'A lightweight C library for working with Web Ontology Language (OWL) ontologies', 'name': 'cowl', 'description': 'A lightweight C library for working with Web Ontology Language (OWL) ontologies', 'defaultBranchRef': {'name': 'master'}}}, {'repo': {'url': 'https://github.com/ozekik/lightrdf', 'shortDescriptionHTML': "A fast and lightweight Python RDF parser which wraps bindings to Rust's Rio using PyO3", 'name': 'lightrdf', 'description': "A fast and lightweight Python RDF parser which wraps bindings to Rust's Rio using PyO3", 'defaultBranchRef': {'name': 'master'}}}, {'repo': {'url': 'https://github.com/balhoff/arachne', 'shortDescriptionHTML': 'RDF rule engine', 'name': 'arachne', 'description': 'RDF rule engine', 'defaultBranchRef': {'name': 'master'}}}, {'repo': {'url': 'https://github.com/wikibus/Rdf.Vocabularies', 'shortDescriptionHTML': 'RDF vocabularies transformed into static C# classes', 'name': 'Rdf.Vocabularies', 'description': 'RDF vocabularies transformed into static C# classes', 'defaultBranchRef': {'name': 'master'}}}, {'repo': {'url': 'https://github.com/dmytri/terminusdb-todoapp', 'shortDescriptionHTML': '', 'name': 'terminusdb-todoapp', 'description': None, 'defaultBranchRef': {'name': 'master'}}}, {'repo': {'url': 'https://github.com/RoxaneSegers/CEO-Ontology', 'shortDescriptionHTML': 'This repository contains the CEO ontology, the evaluation corpus and the CEO vocabulary.', 'name': 'CEO-Ontology', 'description': 'This repository contains the CEO ontology, the evaluation corpus and the CEO vocabulary.', 'defaultBranchRef': {'name': 'master'}}}, {'repo': {'url': 'https://github.com/jgoerner/meetif.ai', 'shortDescriptionHTML': '<g-emoji class="g-emoji" alias="cold_face" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f976.png">🥶</g-emoji><g-emoji class="g-emoji" alias="couple" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f46b.png">👫</g-emoji><g-emoji class="g-emoji" alias="spider_web" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f578.png">🕸</g-emoji>Social Knowledge Graph based on data from meetup.com to generate conversation opening iceabreakers (based on RDF(S), RML, Neo4j &amp; other Technologies)', 'name': 'meetif.ai', 'description': '🥶👫🕸Social Knowledge Graph based on data from meetup.com to generate conversation opening iceabreakers (based on RDF(S), RML, Neo4j & other Technologies)', 'defaultBranchRef': {'name': 'master'}}}, {'repo': {'url': 'https://github.com/TheEngineRoom-UniGe/OWLOOP', 'shortDescriptionHTML': 'An Object Oriented Programming (OOP) interface for Ontology Web language (OWL) ontologies.', 'name': 'OWLOOP', 'description': 'An Object Oriented Programming (OOP) interface for Ontology Web language (OWL) ontologies.', 'defaultBranchRef': {'name': 'master'}}}, {'repo': {'url': 'https://github.com/opendata-mvcr/ssp', 'shortDescriptionHTML': 'Sémantický slovník pojmů', 'name': 'ssp', 'description': 'Sémantický slovník pojmů', 'defaultBranchRef': {'name': 'master'}}}, {'repo': {'url': 'https://github.com/costezki/awesome-semantic-tools', 'shortDescriptionHTML': 'List of projects related to Ontology engineering and Semantic Web technologies that make a geek smile for they exist.', 'name': 'awesome-semantic-tools', 'description': 'List of projects related to Ontology engineering and Semantic Web technologies that make a geek smile for they exist.', 'defaultBranchRef': {'name': 'master'}}}, {'repo': {'url': 'https://github.com/IMISE/snik-ontology', 'shortDescriptionHTML': 'Public SNIK Ontology. An ontology of information management in hospitals.', 'name': 'snik-ontology', 'description': 'Public SNIK Ontology. An ontology of information management in hospitals.', 'defaultBranchRef': {'name': 'master'}}}, {'repo': {'url': 'https://github.com/zhw2590582/owl', 'shortDescriptionHTML': 'Wordpress 博客主题 Owl 源码', 'name': 'owl', 'description': 'Wordpress 博客主题 Owl 源码', 'defaultBranchRef': {'name': 'master'}}}, {'repo': {'url': 'https://github.com/avicomp/ont-d2rq', 'shortDescriptionHTML': 'A Database to OWL Mapper', 'name': 'ont-d2rq', 'description': 'A Database to OWL Mapper', 'defaultBranchRef': {'name': 'master'}}}, {'repo': {'url': 'https://github.com/shful/gofp', 'shortDescriptionHTML': 'Gofp is an ontology parser for the OWL-Functional syntax.', 'name': 'gofp', 'description': 'Gofp is an ontology parser for the OWL-Functional syntax.', 'defaultBranchRef': {'name': 'master'}}}, {'repo': {'url': 'https://github.com/RoxaneSegers/ESO-Ontology', 'shortDescriptionHTML': 'This repository contains the Event and implied Situation Ontology (ESO.owl), the documentation, all additional manual mappings to various (lexical) resources and the manually annotated evaluation c…', 'name': 'ESO-Ontology', 'description': 'This repository contains the Event and implied Situation Ontology (ESO.owl), the documentation, all additional manual mappings to various (lexical) resources and the manually annotated evaluation corpus', 'defaultBranchRef': {'name': 'master'}}}]


Skipping result pages for topic owl


Skipping topic: owl in ['owl', 'shacl-shapes', 'shex', 'grlc', 'skos', 'obofoundry']