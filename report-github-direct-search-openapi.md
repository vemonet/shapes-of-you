## Fails loading files to `rdflib`

**Indexing topics**: `ncats+translator`, `biothings`, `smartapi`, `knowledge+provider`

*Please check if your RDF file is properly formatted. We recommend to **use https://www.easyrdf.org/converter to get better insights on the error**, and store the shapes in `.ttl` files*


File: https://raw.githubusercontent.com/MaastrichtU-IDS/d2s-transform-biolink/master/datasets%2Fgeonames%2Fmapping%2Fsplit_neighbours_mapping.rml.ttl parsed as ttl

In repository: https://github.com/MaastrichtU-IDS/d2s-transform-biolink
> at line 11 of <>:
Bad syntax (expected directive or statement) at ^ in:
"...b'grel: <http://users.ugent.be/~bjdmeest/function/grel.ttl#>.\n'^b'@pref gn: <http://www.geonames.org/ontology#>.\n\n:map_neighbo'..."

---
File: https://raw.githubusercontent.com/MaastrichtU-IDS/biothingsprovenancemodel/master/rdfexample.ttl parsed as ttl

In repository: https://github.com/MaastrichtU-IDS/biothingsprovenancemodel
> at line 19 of <>:
Bad syntax (objectList expected) at ^ in:
"...b'  \t\t   \t"2004-11-23"^^xsd:date ; \r\n\tbio-prov:wasInferredFrom'^b'\t\t\t assertion2 ; \r\n\tbio-prov:publishedIn        \t\t   \t"Prost'..."

---
