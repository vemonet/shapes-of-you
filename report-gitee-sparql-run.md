## Fails loading files to `rdflib`

**Indexing topics**: `sparql`

*Please check if your RDF file is properly formatted. We recommend to **use https://www.easyrdf.org/converter to get better insights on the error**, and store the shapes in `.ttl` files*


File: https://gitee.com/opensci/gStore/raw/master/data%2Fupdate_test.nt parsed as nt

In repository: https://gitee.com/opensci/gStore
> Invalid line: '<s0> <p0> <o0>.'

---
File: https://gitee.com/opensci/gStore/raw/master/data%2Flubm%2Flubm.nt parsed as nt

In repository: https://gitee.com/opensci/gStore
> Invalid line: '<University0>.'

---
File: https://gitee.com/opensci/gStore/raw/master/data%2Fsystem%2Fsystem.nt parsed as nt

In repository: https://gitee.com/opensci/gStore
> Invalid line: '<root> <has_password> "123456" .'

---
File: https://gitee.com/opensci/gStore/raw/master/data%2Fsystem%2Fversion.nt parsed as nt

In repository: https://gitee.com/opensci/gStore
> Invalid line: '<CoreVersion> <value> "v0.8.4" .'

---
File: https://gitee.com/opensci/gStore/raw/master/data%2Fsmall%2Fsmall_add.nt parsed as nt

In repository: https://gitee.com/opensci/gStore
> Invalid line: '<node1> <link> <node2> .'

---
File: https://gitee.com/opensci/gStore/raw/master/data%2Fsmall%2Fsmall.nt parsed as nt

In repository: https://gitee.com/opensci/gStore
> Invalid line: '<root>\t<name>\t"Bookug Lobert"\t.'

---
File: https://gitee.com/kehaofei/ontop/raw/master/test%2Fsparql-compliance%2Fsrc%2Fmain%2Fresources%2Ftestdata-update%2Fdataset-update-example9.trig parsed as n3

In repository: https://gitee.com/kehaofei/ontop
> at line 15 of <>:
Bad syntax (expected '.' or '}' or ']' at end of statement) at ^ in:
"...b'itle "SPARQL 1.1 Tutorial" .\n}\n\n<http://example/bookStore2> '^b'{\n  <http://example/book4> dc:title "SPARQL 1.0 Tutorial" .\n'..."

---
File: https://gitee.com/kehaofei/ontop/raw/master/test%2Fsparql-compliance%2Fsrc%2Fmain%2Fresources%2Ftestdata-update%2Fdataset-update.trig parsed as n3

In repository: https://gitee.com/kehaofei/ontop
> at line 25 of <>:
Bad syntax (expected '.' or '}' or ']' at end of statement) at ^ in:
"...b' foaf:knows ex:alice .\n\n    ex:alice foaf:knows ex:bob .\n}\n\n'^b'ex:graph2 {\n    ex:alice foaf:name "Alice" ;\n\tfoaf:mbox "ali'..."

---
File: https://gitee.com/kehaofei/ontop/raw/master/test%2Fsparql-compliance%2Fsrc%2Fmain%2Fresources%2Ftestdata-query%2Fdataset-query.trig parsed as n3

In repository: https://gitee.com/kehaofei/ontop
> at line 38 of <>:
Bad syntax (expected '.' or '}' or ']' at end of statement) at ^ in:
"...b'oaf:knows ex:william .\n\n    ex:alice foaf:knows ex:bob .\n}\n\n'^b'ex:graph2 {\n    ex:alice foaf:name "Alice" ;\n\tfoaf:mbox "ali'..."

---
File: https://gitee.com/kehaofei/ontop/raw/master/test%2Fsparql-compliance%2Fsrc%2Fmain%2Fresources%2Ftestcases-dawg%2Ftest-manifest.n3 parsed as n3

In repository: https://gitee.com/kehaofei/ontop
> at line 88 of <>:
Bad syntax (newline found in string literal) at ^ in:
"...b'ment "A type of test specifically for syntax testing. Syntax'^b'\n      tests are not required to have an associated result, '..."

---
File: https://gitee.com/kehaofei/ontop/raw/master/test%2Fsparql-compliance%2Fsrc%2Fmain%2Fresources%2Ftestcases-dawg-quest%2Ftest-manifest.n3 parsed as n3

In repository: https://gitee.com/kehaofei/ontop
> at line 88 of <>:
Bad syntax (newline found in string literal) at ^ in:
"...b'ment "A type of test specifically for syntax testing. Syntax'^b'\n      tests are not required to have an associated result, '..."

---
File: https://gitee.com/kehaofei/ontop/raw/master/test%2Fdocker-tests%2Fsrc%2Ftest%2Fresources%2Foracle%2Fregex%2Foracle-regexp.owl parsed as xml

In repository: https://gitee.com/kehaofei/ontop
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/test/docker-tests/src/test/resources/oracle/regex/oracle-regexp.owl:35:31: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#Class

---
File: https://gitee.com/kehaofei/ontop/raw/master/test%2Fdocker-tests%2Fsrc%2Ftest%2Fresources%2Foracle%2FontologyType%2FdataPropertiesOntologyType.owl parsed as xml

In repository: https://gitee.com/kehaofei/ontop
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/test/docker-tests/src/test/resources/oracle/ontologyType/dataPropertiesOntologyType.owl:57:60: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#DataProperty

---
File: https://gitee.com/kehaofei/ontop/raw/master/test%2Fdocker-tests%2Fsrc%2Ftest%2Fresources%2Fpgsql%2FEPNet.owl parsed as xml

In repository: https://gitee.com/kehaofei/ontop
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/test/docker-tests/src/test/resources/pgsql/EPNet.owl:33:89: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#Literal

---
File: https://gitee.com/kehaofei/ontop/raw/master/test%2Fdocker-tests%2Fsrc%2Ftest%2Fresources%2Fpgsql%2Fimdb%2FontologyIMDB.owl parsed as xml

In repository: https://gitee.com/kehaofei/ontop
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/test/docker-tests/src/test/resources/pgsql/imdb/ontologyIMDB.owl:212:27: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#Class

---
File: https://gitee.com/kehaofei/ontop/raw/master/test%2Fdocker-tests%2Fsrc%2Ftest%2Fresources%2Flocal%2Fadp%2Fnpd-ql.owl parsed as xml

In repository: https://gitee.com/kehaofei/ontop
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/test/docker-tests/src/test/resources/local/adp/npd-ql.owl:1:0: not well-formed (invalid token)

---
File: https://gitee.com/kehaofei/ontop/raw/master/test%2Fdocker-tests%2Fsrc%2Ftest%2Fresources%2Ftestcases-docker%2Fboolean%2Fdatatypes.owl parsed as xml

In repository: https://gitee.com/kehaofei/ontop
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/test/docker-tests/src/test/resources/testcases-docker/boolean/datatypes.owl:194:45: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#DataProperty

---
File: https://gitee.com/kehaofei/ontop/raw/master/test%2Fdocker-tests%2Fsrc%2Ftest%2Fresources%2Ftestcases-docker%2Fcharacter%2Fdatatypes.owl parsed as xml

In repository: https://gitee.com/kehaofei/ontop
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/test/docker-tests/src/test/resources/testcases-docker/character/datatypes.owl:194:45: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#DataProperty

---
File: https://gitee.com/kehaofei/ontop/raw/master/test%2Fdocker-tests%2Fsrc%2Ftest%2Fresources%2Ftestcases-docker%2Fgeneral%2Fdatatypes.owl parsed as xml

In repository: https://gitee.com/kehaofei/ontop
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/test/docker-tests/src/test/resources/testcases-docker/general/datatypes.owl:194:45: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#DataProperty

---
File: https://gitee.com/kehaofei/ontop/raw/master/test%2Fdocker-tests%2Fsrc%2Ftest%2Fresources%2Ftestcases-docker%2Fnumeric%2Fdatatypes.owl parsed as xml

In repository: https://gitee.com/kehaofei/ontop
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/test/docker-tests/src/test/resources/testcases-docker/numeric/datatypes.owl:194:45: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#DataProperty

---
File: https://gitee.com/kehaofei/ontop/raw/master/test%2Fdocker-tests%2Fsrc%2Ftest%2Fresources%2Ftestcases-docker%2Fdatetime%2Fdatatypes.owl parsed as xml

In repository: https://gitee.com/kehaofei/ontop
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/test/docker-tests/src/test/resources/testcases-docker/datetime/datatypes.owl:194:45: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#DataProperty

---
File: https://gitee.com/kehaofei/ontop/raw/master/test%2Fdocker-tests%2Fsrc%2Ftest%2Fresources%2Fmysql%2Fmaterializer%2FMaterializeTest.owl parsed as xml

In repository: https://gitee.com/kehaofei/ontop
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/test/docker-tests/src/test/resources/mysql/materializer/MaterializeTest.owl:41:25: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#Class

---
File: https://gitee.com/kehaofei/ontop/raw/master/test%2Fdocker-tests%2Fsrc%2Ftest%2Fresources%2Fmysql%2Fnestedconcat%2Ftest.owl parsed as xml

In repository: https://gitee.com/kehaofei/ontop
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/test/docker-tests/src/test/resources/mysql/nestedconcat/test.owl:35:60: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#DataProperty

---
File: https://gitee.com/kehaofei/ontop/raw/master/test%2Fdocker-tests%2Fsrc%2Ftest%2Fresources%2Fmysql%2Fperson%2Fperson.owl parsed as xml

In repository: https://gitee.com/kehaofei/ontop
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/test/docker-tests/src/test/resources/mysql/person/person.owl:52:60: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#DataProperty

---
File: https://gitee.com/kehaofei/ontop/raw/master/test%2Fsemantic-index%2Fsrc%2Ftest%2Fresources%2FdescribeConstruct.owl parsed as xml

In repository: https://gitee.com/kehaofei/ontop
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/test/semantic-index/src/test/resources/describeConstruct.owl:35:53: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#NamedIndividual

---
File: https://gitee.com/kehaofei/ontop/raw/master/test%2Fsemantic-index%2Fsrc%2Ftest%2Fresources%2Ftest%2FnewDag%2FinverseEquivalents6b.owl parsed as xml

In repository: https://gitee.com/kehaofei/ontop
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/test/semantic-index/src/test/resources/test/newDag/inverseEquivalents6b.owl:42:24: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#Class

---
File: https://gitee.com/kehaofei/ontop/raw/master/test%2Fsemantic-index%2Fsrc%2Ftest%2Fresources%2Ftest%2Fdag%2Ffinal_project_original.owl parsed as xml

In repository: https://gitee.com/kehaofei/ontop
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/test/semantic-index/src/test/resources/test/dag/final_project_original.owl:161:8: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#ObjectSomeValuesFrom

---
File: https://gitee.com/kehaofei/ontop/raw/master/client%2Fprotege%2Fsrc%2Ftest%2Fresources%2Fit%2Funibz%2Finf%2Fontop%2Fapi%2Fio%2FSchool.owl parsed as xml

In repository: https://gitee.com/kehaofei/ontop
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/client/protege/src/test/resources/it/unibz/inf/ontop/api/io/School.owl:55:31: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#Class

---
File: https://gitee.com/kehaofei/ontop/raw/master/engine%2Fsystem%2Fsql%2Fowlapi%2Fsrc%2Ftest%2Fresources%2Fmaterializer%2FMaterializeTest.owl parsed as xml

In repository: https://gitee.com/kehaofei/ontop
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/engine/system/sql/owlapi/src/test/resources/materializer/MaterializeTest.owl:41:25: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#Class

---
File: https://gitee.com/kehaofei/ontop/raw/master/mapping%2Fsql%2Fall%2Fsrc%2Ftest%2Fresources%2Fit%2Funibz%2Finf%2Fontop%2Fio%2FSchool.owl parsed as xml

In repository: https://gitee.com/kehaofei/ontop
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/mapping/sql/all/src/test/resources/it/unibz/inf/ontop/io/School.owl:55:31: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#Class

---
File: https://gitee.com/kehaofei/ontop/raw/master/binding%2Fowlapi%2Fsrc%2Ftest%2Fresources%2Fdatatype%2Fdatatypes.owl parsed as xml

In repository: https://gitee.com/kehaofei/ontop
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/binding/owlapi/src/test/resources/datatype/datatypes.owl:194:45: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#DataProperty

---
File: https://gitee.com/kehaofei/ontop/raw/master/binding%2Fowlapi%2Fsrc%2Ftest%2Fresources%2Ftest%2Fswrl%2FpropertyExample.owl parsed as xml

In repository: https://gitee.com/kehaofei/ontop
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/binding/owlapi/src/test/resources/test/swrl/propertyExample.owl:1:6: not well-formed (invalid token)

---
File: https://gitee.com/kehaofei/ontop/raw/master/binding%2Fowlapi%2Fsrc%2Ftest%2Fresources%2Ftest%2Fswrl%2Fcomplex_example.owl parsed as xml

In repository: https://gitee.com/kehaofei/ontop
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/binding/owlapi/src/test/resources/test/swrl/complex_example.owl:1:6: not well-formed (invalid token)

---
File: https://gitee.com/kehaofei/ontop/raw/master/binding%2Fowlapi%2Fsrc%2Ftest%2Fresources%2Ftest%2Fswrl%2FexampleSWRL.owl parsed as xml

In repository: https://gitee.com/kehaofei/ontop
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/binding/owlapi/src/test/resources/test/swrl/exampleSWRL.owl:68:30: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#Class

---
File: https://gitee.com/kehaofei/ontop/raw/master/binding%2Fowlapi%2Fsrc%2Ftest%2Fresources%2Ftest%2Fwkt%2Fwkt_test.owl parsed as xml

In repository: https://gitee.com/kehaofei/ontop
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/binding/owlapi/src/test/resources/test/wkt/wkt_test.owl:1:0: not well-formed (invalid token)

---
File: https://gitee.com/kehaofei/ontop/raw/master/binding%2Fowlapi%2Fsrc%2Ftest%2Fresources%2Ftest%2FlangTag%2FlangTag.owl parsed as xml

In repository: https://gitee.com/kehaofei/ontop
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/binding/owlapi/src/test/resources/test/langTag/langTag.owl:18:35: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#IRI

---
File: https://gitee.com/kehaofei/ontop/raw/master/binding%2Fowlapi%2Fsrc%2Ftest%2Fresources%2Fnpd-v2%2Fbfo-1.1.owl parsed as xml

In repository: https://gitee.com/kehaofei/ontop
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/binding/owlapi/src/test/resources/npd-v2/bfo-1.1.owl:1:0: no element found

---
File: https://gitee.com/kehaofei/ontop/raw/master/binding%2Fowlapi%2Fsrc%2Ftest%2Fresources%2Fproperty-characteristics%2Fsymmetric.owl parsed as xml

In repository: https://gitee.com/kehaofei/ontop
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/binding/owlapi/src/test/resources/property-characteristics/symmetric.owl:32:38: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#ObjectProperty

---
File: https://gitee.com/kehaofei/ontop/raw/master/binding%2Fowlapi%2Fsrc%2Ftest%2Fresources%2Fproperty-characteristics%2Fnoproperty.owl parsed as xml

In repository: https://gitee.com/kehaofei/ontop
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/binding/owlapi/src/test/resources/property-characteristics/noproperty.owl:32:38: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#ObjectProperty

---
File: https://gitee.com/kehaofei/ontop/raw/master/binding%2Fowlapi%2Fsrc%2Ftest%2Fresources%2Ffilter%2Fdatatypes.owl parsed as xml

In repository: https://gitee.com/kehaofei/ontop
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/binding/owlapi/src/test/resources/filter/datatypes.owl:194:45: Repeat node-elements inside property elements: http://www.w3.org/2002/07/owl#DataProperty

---
File: https://gitee.com/kehaofei/ontop/raw/master/binding%2Fowlapi%2Fsrc%2Ftest%2Fresources%2Fljoptional%2Frais-ontology.owl parsed as xml

In repository: https://gitee.com/kehaofei/ontop
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/binding/owlapi/src/test/resources/ljoptional/rais-ontology.owl:1:0: not well-formed (invalid token)

---
File: https://gitee.com/kehaofei/ontop/raw/master/binding%2Fowlapi%2Fsrc%2Fmain%2Fresources%2Fsamples%2Fstock-exchange-classic.owl parsed as xml

In repository: https://gitee.com/kehaofei/ontop
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/binding/owlapi/src/main/resources/samples/stock-exchange-classic.owl:25:54: Repeat node-elements inside property elements: http://www.w3.org/2006/12/owl2-xml#Class

---
File: https://gitee.com/kehaofei/ontop/raw/master/test%2Fdocker-tests%2Fsrc%2Ftest%2Fresources%2Ftestcases-docker%2Fvirtual-mode%2Fbsbm%2Fquery-result-12.ttl parsed as ttl

In repository: https://gitee.com/kehaofei/ontop
> at line 6 of <>:
Bad syntax (expected '.' or '}' or ']' at end of statement) at ^ in:
"...b'p://www.w3.org/2001/XMLSchema#> .\n\nbsbm-inst:dataFromVendor2'^b'/Offer3470 \n\tbsbm:export/product \t\tbsbm-inst:dataFromProduce'..."

---
File: https://gitee.com/kehaofei/ontop/raw/master/test%2Fdocker-tests%2Fsrc%2Ftest%2Fresources%2Ftestcases-docker%2Fvirtual-mode%2Fstockexchange%2Ffilters%2Fboolean-nested-1.ttl parsed as ttl

In repository: https://gitee.com/kehaofei/ontop
> at line 1 of <>:
Bad syntax (expected directive or statement) at ^ in:
"...b'refix rsi:      <http://ontop.inf.unibz.it/tests/rs-info#> .'^b'\r@prefix rdf:     <http://www.w3.org/1999/02/22-rdf-syntax-n'..."

---
File: https://gitee.com/kehaofei/ontop/raw/master/test%2Fdocker-tests%2Fsrc%2Ftest%2Fresources%2Ftestcases-docker%2Fvirtual-mode%2Fstockexchange%2Ffilters%2Fboolean-nested-3.ttl parsed as ttl

In repository: https://gitee.com/kehaofei/ontop
> at line 1 of <>:
Bad syntax (expected directive or statement) at ^ in:
"...b'refix rsi:      <http://ontop.inf.unibz.it/tests/rs-info#> .'^b'\r@prefix rdf:     <http://www.w3.org/1999/02/22-rdf-syntax-n'..."

---
File: https://gitee.com/kehaofei/ontop/raw/master/test%2Fdocker-tests%2Fsrc%2Ftest%2Fresources%2Ftestcases-docker%2Fvirtual-mode%2Fstockexchange%2Ffilters%2Fboolean-nested-2.ttl parsed as ttl

In repository: https://gitee.com/kehaofei/ontop
> at line 1 of <>:
Bad syntax (expected directive or statement) at ^ in:
"...b'refix rsi:      <http://ontop.inf.unibz.it/tests/rs-info#> .'^b'\r@prefix rdf:     <http://www.w3.org/1999/02/22-rdf-syntax-n'..."

---
File: https://gitee.com/kehaofei/ontop/raw/master/test%2Fdocker-tests%2Fsrc%2Ftest%2Fresources%2Ftestcases-docker%2Fvirtual-mode%2Fstockexchange%2Fsimplecq%2Fbrokers-workfor-legal.ttl parsed as ttl

In repository: https://gitee.com/kehaofei/ontop
> at line 1 of <>:
Bad syntax (expected directive or statement) at ^ in:
"...b'refix rsi:      <http://ontop.inf.unibz.it/tests/rs-info#> .'^b'\r@prefix rdf:     <http://www.w3.org/1999/02/22-rdf-syntax-n'..."

---
File: https://gitee.com/kehaofei/ontop/raw/master/test%2Fdocker-tests%2Fsrc%2Ftest%2Fresources%2Ftestcases-docker%2Fvirtual-mode%2Fstockexchange%2Fsimplecq%2Ftransaction-offer-stock.ttl parsed as ttl

In repository: https://gitee.com/kehaofei/ontop
> at line 1 of <>:
Bad syntax (expected directive or statement) at ^ in:
"...b'refix rsi:      <http://ontop.inf.unibz.it/tests/rs-info#> .'^b'\r@prefix rdf:     <http://www.w3.org/1999/02/22-rdf-syntax-n'..."

---
File: https://gitee.com/kehaofei/ontop/raw/master/test%2Fdocker-tests%2Fsrc%2Ftest%2Fresources%2Ftestcases-docker%2Fvirtual-mode%2Fstockexchange%2Fsimplecq%2Ftransaction-stock-type.ttl parsed as ttl

In repository: https://gitee.com/kehaofei/ontop
> at line 1 of <>:
Bad syntax (expected directive or statement) at ^ in:
"...b'refix rsi:      <http://ontop.inf.unibz.it/tests/rs-info#> .'^b'\r@prefix rdf:     <http://www.w3.org/1999/02/22-rdf-syntax-n'..."

---
File: https://gitee.com/kehaofei/ontop/raw/master/test%2Fdocker-tests%2Fsrc%2Ftest%2Fresources%2Fmysql%2Fnorthwind%2Fmapping-northwind-platform.ttl parsed as ttl

In repository: https://gitee.com/kehaofei/ontop
> at line 6 of <>:
Bad syntax (newline found in string literal) at ^ in:
"...b'D5(CONCAT(COALESCE(Address, RAND()), COALESCE(City, RAND()),'^b'\n                                           COALESCE(Region,'..."

---
File: https://gitee.com/kehaofei/ontop/raw/master/binding%2Fowlapi%2Fsrc%2Ftest%2Fresources%2Ftest%2FrepeatedCN%2FrepeatedCN_test.ttl parsed as ttl

In repository: https://gitee.com/kehaofei/ontop
> at line 9 of <>:
Bad syntax (Prefix "rr:" not bound) at ^ in:
"...b': <http://www.w3.org/2000/01/rdf-schema#> .\n\n<#Professor> a '^b'rr:TriplesMap;\n        rr:logicalTable [ rr:tableName "profe'..."

---
File: https://gitee.com/mirrors_korczis/libsparql/raw/master/etc%2Fdoap.rdf parsed as xml

In repository: https://gitee.com/mirrors_korczis/libsparql
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/etc/doap.rdf:1:0: no element found

---
File: https://gitee.com/mirrors_w3c/sparql-exists/raw/gh-pages/tests%2Fexists-graph.trig parsed as n3

In repository: https://gitee.com/mirrors_w3c/sparql-exists
> at line 12 of <>:
Bad syntax (objectList expected) at ^ in:
"...b'.\n\n:s1 :q 1 .\n:s2 :q 2 .\n\n:graph {\n  :r :p 2 .\n  :r :p 3 .\n}'^b'\n'"

---
File: https://gitee.com/mirrors_w3c/sparql-exists/raw/gh-pages/tests%2Finteresting-examples%2Fdata.trig parsed as n3

In repository: https://gitee.com/mirrors_w3c/sparql-exists
> at line 5 of <>:
Bad syntax (expected directive or statement) at ^ in:
"b'@prefix : <http://example/> .\n\n:s :p :v .\n\n'^b'GRAPH :g {\n  :s :p :v .\n  :t :r :w .\n}\n'"

---
File: https://gitee.com/vhandy/neo4j-sparql-extension/raw/master/src%2Ftest%2Fresources%2Finference%2Fkiel%2Fresult-op-02.rdf parsed as xml

In repository: https://gitee.com/vhandy/neo4j-sparql-extension
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/test/resources/inference/kiel/result-op-02.rdf:9:56: Repeat node-elements inside property elements: http://www.w3.org/2005/sparql-results#uri

---
File: https://gitee.com/vhandy/neo4j-sparql-extension/raw/master/src%2Ftest%2Fresources%2Finference%2Fkiel%2Fresult-op-04.rdf parsed as xml

In repository: https://gitee.com/vhandy/neo4j-sparql-extension
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/test/resources/inference/kiel/result-op-04.rdf:9:52: Repeat node-elements inside property elements: http://www.w3.org/2005/sparql-results#uri

---
File: https://gitee.com/vhandy/neo4j-sparql-extension/raw/master/src%2Ftest%2Fresources%2Finference%2Fkiel%2Fresult-op-05.rdf parsed as xml

In repository: https://gitee.com/vhandy/neo4j-sparql-extension
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/test/resources/inference/kiel/result-op-05.rdf:9:62: Repeat node-elements inside property elements: http://www.w3.org/2005/sparql-results#uri

---
File: https://gitee.com/vhandy/neo4j-sparql-extension/raw/master/src%2Ftest%2Fresources%2Finference%2Fkiel%2Fresult-op-01.rdf parsed as xml

In repository: https://gitee.com/vhandy/neo4j-sparql-extension
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/test/resources/inference/kiel/result-op-01.rdf:9:55: Repeat node-elements inside property elements: http://www.w3.org/2005/sparql-results#uri

---
File: https://gitee.com/vhandy/neo4j-sparql-extension/raw/master/src%2Ftest%2Fresources%2Finference%2Fkiel%2Fresult-op-03.rdf parsed as xml

In repository: https://gitee.com/vhandy/neo4j-sparql-extension
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/test/resources/inference/kiel/result-op-03.rdf:9:55: Repeat node-elements inside property elements: http://www.w3.org/2005/sparql-results#uri

---
File: https://gitee.com/vhandy/neo4j-sparql-extension/raw/master/src%2Ftest%2Fresources%2Finference%2Fkiel%2Fresult-class-01.rdf parsed as xml

In repository: https://gitee.com/vhandy/neo4j-sparql-extension
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/test/resources/inference/kiel/result-class-01.rdf:9:55: Repeat node-elements inside property elements: http://www.w3.org/2005/sparql-results#uri

---
File: https://gitee.com/vhandy/neo4j-sparql-extension/raw/master/src%2Ftest%2Fresources%2Finference%2Fkiel%2Fresult-inv-02.rdf parsed as xml

In repository: https://gitee.com/vhandy/neo4j-sparql-extension
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/test/resources/inference/kiel/result-inv-02.rdf:9:54: Repeat node-elements inside property elements: http://www.w3.org/2005/sparql-results#uri

---
File: https://gitee.com/vhandy/neo4j-sparql-extension/raw/master/src%2Ftest%2Fresources%2Finference%2Fkiel%2Fresult-inv-01.rdf parsed as xml

In repository: https://gitee.com/vhandy/neo4j-sparql-extension
> file:///home/runner/work/shapes-of-you/shapes-of-you/cloned_repo/src/test/resources/inference/kiel/result-inv-01.rdf:9:54: Repeat node-elements inside property elements: http://www.w3.org/2005/sparql-results#uri

---
