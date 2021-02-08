# Index for semantic resources

[![Index shapes](https://github.com/vemonet/shapes-of-you/workflows/Index%20shapes/badge.svg)](https://github.com/vemonet/shapes-of-you/actions?query=workflow%3A%22Index+shapes%22) [![Deploy to GitHub Pages](https://github.com/vemonet/shapes-of-you/workflows/Deploy%20website/badge.svg)](https://github.com/vemonet/shapes-of-you/actions?query=workflow%3A%22Deploy+website%22) [![CodeQL analysis](https://github.com/vemonet/shapes-of-you/workflows/CodeQL%20analysis/badge.svg)](https://github.com/vemonet/shapes-of-you/actions?query=workflow%3A%22CodeQL+analysis%22) 


🖥 Access the index web app at https://index.semanticscience.org

📬 Access the OpenAPI at http://grlc.io/api-git/vemonet/shapes-of-you (powered by [grlc.io](http://grlc.io))

🕸 Directly query the [SPARQL endpoint on YASGUI](http://yasgui.triply.cc/#query=PREFIX%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX%20dc%3A%20%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%3E%0APREFIX%20dcterms%3A%20%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0APREFIX%20schema%3A%20%3Chttps%3A%2F%2Fschema.org%2F%3E%0APREFIX%20sh%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fshacl%23%3E%0APREFIX%20shex%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fshex%23%3E%0APREFIX%20void%3A%20%3Chttp%3A%2F%2Frdfs.org%2Fns%2Fvoid%23%3E%0ASELECT%20DISTINCT%20*%20WHERE%20%7B%20%0A%20%20%20%20%3FshapeFileUri%20a%20schema%3ASoftwareSourceCode%20%3B%0A%20%20%20%20%20%20%20%20a%20%3Fshape_type%20%3B%0A%20%20%20%20%20%20%20%20rdfs%3Alabel%20%3Flabel%20%3B%0A%20%20%20%20%20%20%20%20dc%3Asource%20%3Frepository%20%3B%0A%20%20%20%20%20%20%20%20dcterms%3AhasPart%20%3Fshapes%20.%0A%20%20%20%20FILTER(%3Fshape_type%20!%3D%20schema%3ASoftwareSourceCode)%0A%20%20%20%20OPTIONAL%20%7B%20%3Frepository%20rdfs%3Acomment%20%3Frepo_description%20%7D%0A%20%20%20%20OPTIONAL%20%7B%20%3FshapeFileUri%20schema%3Aquery%20%3Fquery%20%7D%0A%20%20%20%20OPTIONAL%20%7B%20%3FshapeFileUri%20void%3AsparqlEndpoint%20%3FsparqlEndpoint%20%7D%0A%20%20%20%20OPTIONAL%20%7B%20%3FshapeFileUri%20dc%3Adescription%20%3Fshape_file_description%20%7D%0A%7D&endpoint=https%3A%2F%2Fgraphdb.dumontierlab.com%2Frepositories%2Fshapes-registry&requestMethod=GET&tabTitle=Query&headers=%7B%7D&contentTypeConstruct=application%2Fn-triples%2C*%2F*%3Bq%3D0.9&contentTypeSelect=application%2Fsparql-results%2Bjson%2C*%2F*%3Bq%3D0.9&outputFormat=table).

**Shapes of you** is a global index for semantically descriptive files published to public Git repositories ([GitHub](https://github.com), [GitLab](https://gitlab.com), and [Gitee](https://gitee.com/)).

Add one of these topics to your GitHub repository, we automatically index files from public repositories everyday at 1:00 and 13:00 🕐

* **SHACL shapes**: add the topic `shacl-shapes`, we index RDF files such as `.ttl`, `.rdf`, `.jsonld`, etc), with all `sh:NodeShape` they contain
* **ShEx expressions**: add the topic `shex`, we index `.shex` files, and ShEx shapes defined in RDF files
* **SPARQL queries**: add the topic `grlc`, we index `.rq` and `.sparql` files, and parse [grlc.io](http://grlc.io) APIs metadata
* **OWL ontologies**: add the topic `owl`, we index all RDF files with all `owl:Class`  they contain
* **SKOS vocabularies**: add the topic `skos`, we index all RDF files with all `skos:Concept` they contain
* **OBO ontologies**: add the topic `obo`, we index all `.obo` files with all terms they contain

We also index the same topics in GitLab and Gitee, there is no topic on those websites, so just mention it in your project name or description.

Additional GitHub repositories can be included in the file [`EXTRAS_GITHUB_REPOSITORIES.txt`](https://github.com/vemonet/shapes-of-you/blob/main/EXTRAS_GITHUB_REPOSITORIES.txt) (if not tagged with the right topic)

You can check RDF files which failed to be parsed by [`rdflib`](https://rdflib.readthedocs.io/en/stable/) in the [`REPORT.md`](https://github.com/vemonet/shapes-of-you/blob/report/REPORT.md), feel free to fix them if you are the owner!

## Overview 🧭

This web service is composed of those 4 main parts:

* A python script to retrieve SPARQL queries, SHACL & ShEx Shapes files with some metadata from GitHub repositories. The retrieved data is defined using [RDF](https://www.w3.org/RDF/).
  * A [GitHub Actions worklows](https://github.com/vemonet/shapes-of-you/actions?query=workflow%3A%22Deploy+to+GitHub+Pages%22) runs everyday at 1:00 and 13:00 to execute the python script, and publish the RDF output to the triplestore
* A React webapp written in TypeScript, which displays the files and metadata from the SPARQL endpoint with filters, and search
  * The website is automatically deployed by [GitHub Actions worklows](https://github.com/vemonet/shapes-of-you/actions?query=workflow%3A%22Deploy+to+GitHub+Pages%22) to [GitHub Pages](https://index.semanticscience.org) at each push to the `main` branch.

* A triplestore with a publicly available SPARQL endpoint at https://graphdb.dumontierlab.com/repositories/shapes-registry

* A grlc.io powered OpenAPI to query the SPARQL endpoint at http://grlc.io/api-git/vemonet/shapes-of-you

## Data model 📋

### Prefixes

- rdfs: <http://www.w3.org/2000/01/rdf-schema#>
- dc: <http://purl.org/dc/elements/1.1/>
- dcterms: <http://purl.org/dc/terms/>
- owl: http://www.w3.org/2002/07/owl#
- skos: http://www.w3.org/2004/02/skos/core#
- sio: <http://semanticscience.org/resource/SIO_>
- schema: <https://schema.org/>
- sh: <http://www.w3.org/ns/shacl#>
- shex: <http://www.w3.org/ns/shex#>
- void: <http://rdfs.org/ns/void#>

### Classes

* `schema:SoftwareSourceCode`
  * Properties:
    * `dcterms:hasPart`
    * `dc:description`
    * `dc:source` > `schema:CodeRepository`
  * Subclasses:
    * `sh:Shape`
    * `shex:Schema`
    * `sh:SPARQLFunction` - additional properties: `void:sparqlEndpoint`, `schema:query`
    * `owl:Ontology`
    * `skos:ConceptScheme`
    * `sio:000623` (OBO ontology)
* `schema:CodeRepository`
  * Properties:
    * `rdfs:comment`

## Run web app in development 🏗

Requirements:  [npm](https://www.npmjs.com/get-npm) and [yarn](https://classic.yarnpkg.com/en/docs/install/#debian-stable) installed.

Clone the repository:

```bash
git clone https://github.com/vemonet/shapes-of-you
cd shapes-of-you
```

Install dependencies :inbox_tray:

```bash
yarn
```

Run the web app on http://localhost:19006, it should reload automatically at each changes to the code :arrows_clockwise:

```bash
yarn dev
```

Upgrade the packages versions in `yarn.lock`:

```bash
yarn upgrade
```

## Run web app in production 🛩️

This website is automatically deployed by a [GitHub Actions worklow](https://github.com/vemonet/shapes-of-you/actions?query=workflow%3A%22Deploy+to+GitHub+Pages%22) to GitHub Pages at https://index.semanticscience.org

You can also build locally in `/web-build` folder and serve on http://localhost:5000

```bash
yarn build
yarn serve
```

Or run directly using [Docker :whale:](https://docs.docker.com/get-docker/) (requires [docker installed](https://docs.docker.com/get-docker/))

```bash
docker-compose up
```

> Checkout the [docker-compose.yml](/docker-compose.yml) file to see how we run the Docker image.

## Index shapes files ⛏️

This script is run every day by the `.github/workflows/index-shapes.yml` workflow 

Run the Python script to retrieve the shapes from various popular Git registries API:

* GitHub GraphQL API 
* GitLab API 
* Gitee API

The script generates RDF data, which is automatically published to the publicly available triplestore by the GitHub workflow.

You can find the scripts and requirements in the [`etl`](https://github.com/vemonet/shapes-of-you/tree/main/etl) folder.

Use this command to locally define the `GITHUB_TOKEN` and `GITLAB_TOKEN` environment variable required to run the script:

```bash
export API_GITHUB_TOKEN=MYGITHUBTOKEN000
export GITLAB_TOKEN=MYGITLABTOKEN000
export GITEE_TOKEN=MYGITEETOKEN000
```

> For GitHub you can create a new GitHub API key (aka. personal access token) at https://github.com/settings/tokens

Install requirements:

```bash
pip3 install -r etl/requirements.txt
```

Retrieve shapes files for topics (provided separated by comma without spaces) from the [GitHub GraphQL API](https://developer.github.com/v4/explorer):

```bash
python3 etl/index_shapes.py github owl,shacl-shapes,shex,grlc,skos,obofoundry
```

Retrieve shapes files from [GitLab API](https://docs.gitlab.com/ee/api/) using the [`python-gitlab` package](https://pypi.org/project/python-gitlab/):

```bash
python3 etl/index_shapes.py gitlab ontology,owl,shacl,shex,sparql,skos,obofoundry
```

Retrieve shapes files from [Gitee API](https://gitee.com/api/v5/swagger#/getV5SearchRepositories):

```bash
python3 etl/index_shapes.py gitee ontology,sparql
```

## Contribute 👩‍💻

Contributions are welcome! See the [guidelines to contribute](/CONTRIBUTING.md).
