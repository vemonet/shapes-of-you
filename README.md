# Registry for SPARQL, SHACL & ShEx Shapes

[![Get shapes from GitHub GraphQL API](https://github.com/MaastrichtU-IDS/shapes-of-you/workflows/Get%20shapes%20from%20GitHub/badge.svg)](https://github.com/MaastrichtU-IDS/shapes-of-you/actions?query=workflow%3A%22Get+shapes+from+GitHub%22) [![Deploy to GitHub Pages](https://github.com/MaastrichtU-IDS/shapes-of-you/workflows/Deploy%20website%20to%20GitHub%20Pages/badge.svg)](https://github.com/MaastrichtU-IDS/shapes-of-you/actions?query=workflow%3A%22Deploy+website+to+GitHub+Pages%22) [![CodeQL analysis](https://github.com/MaastrichtU-IDS/shapes-of-you/workflows/CodeQL%20analysis/badge.svg)](https://github.com/MaastrichtU-IDS/shapes-of-you/actions?query=workflow%3A%22CodeQL+analysis%22) 


🖥 Access the Shapes of You web app at https://maastrichtu-ids.github.io/shapes-of-you

📬 Access the OpenAPI at http://grlc.io/api-git/MaastrichtU-IDS/shapes-of-you (powered by [grlc.io](http://grlc.io))

🕸 Query the [SPARQL endpoint on YASGUI](http://yasgui.triply.cc/#query=PREFIX%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX%20dc%3A%20%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%3E%0APREFIX%20dcterms%3A%20%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0Aselect%20distinct%20*%20where%20%7B%20%0A%20%20%20%20%3FshapeFileUri%20a%20%3Chttps%3A%2F%2Fschema.org%2FDataDownload%3E%20%3B%0A%20%20%20%20%20%20%20%20rdfs%3Alabel%20%3Flabel%20%3B%0A%20%20%20%20%20%20%20%20dc%3Asource%20%3Frepository%20%3B%0A%20%20%20%20%20%20%20%20dcterms%3AhasPart%20%3Fshapes%20.%0A%7D&endpoint=https%3A%2F%2Fgraphdb.dumontierlab.com%2Frepositories%2Fshapes-registry&requestMethod=GET&tabTitle=Query&headers=%7B%7D&contentTypeConstruct=application%2Fn-triples%2C*%2F*%3Bq%3D0.9&contentTypeSelect=application%2Fsparql-results%2Bjson%2C*%2F*%3Bq%3D0.9&outputFormat=table).

Shapes of You is a registry for SHACL & ShEx shapes, and SPARQL query files, published to public GitHub repositories.

Add one of these  topics to your GitHub repository, we automatically index files from public repositories everyday at 1:00 and 13:00 🕐

* **SHACL shapes**: add the topic `shacl-shapes`, we index RDF files such as `.ttl`, `.rdf`, `.jsonld`, etc), with all `sh:NodeShape` they contain
* **ShEx expressions**: add the topic `shex`, we index `.shex` files, and ShEx shapes defined in RDF files
* **SPARQL queries**: add the topic `grlc`, we index `.rq` and `.sparql` files, and parse [grlc.io](http://grlc.io) APIs metadata
* Additional repositories can be included in the file [`EXTERNAL_REPOSITORIES.txt`](https://github.com/MaastrichtU-IDS/shapes-of-you/blob/main/EXTERNAL_REPOSITORIES.txt)

You can check the RDF files which are not successfully parsed by [`rdflib`](https://rdflib.readthedocs.io/en/stable/) in the [`FAILED_IMPORT_REPORT.md`](https://github.com/MaastrichtU-IDS/shapes-of-you/blob/report/FAILED_IMPORT_REPORT.md) file.


## Planned improvements ➕

- [x] Improve filtering and faceted search for shapes (feedbacks welcome!)
- [ ] Index more types of files (OWL ontologies, OpenAPI YAML)
- [ ] Parse ShEx files to retrieve the defined shapes
- [ ] Star shapes with your SOLID accounts
- [ ] Store the data as [Nanopublications](http://nanopub.org/wordpress/), instead of requiring the deployment of a triplestore

> Feel free to comment on this plan, or propose new improvements by creating an issue in this GitHub repository.

## Overview 🧭

This web service is composed of those 4 main parts:

* A python script to retrieve SPARQL queries, SHACL & ShEx Shapes files with some metadata from GitHub repositories. The retrieved data is defined using [RDF](https://www.w3.org/RDF/).
  * A [GitHub Actions worklows](https://github.com/MaastrichtU-IDS/shapes-of-you/actions?query=workflow%3A%22Deploy+to+GitHub+Pages%22) runs everyday at 1:00 and 13:00 to execute the python script, and publish the RDF output to the triplestore
* A React webapp written in TypeScript, which displays the files and metadata from the SPARQL endpoint with filters, and search
  * The website is automatically deployed by [GitHub Actions worklows](https://github.com/MaastrichtU-IDS/shapes-of-you/actions?query=workflow%3A%22Deploy+to+GitHub+Pages%22) to [GitHub Pages](https://maastrichtu-ids.github.io/shapes-of-you) at each push to the `main` branch.

* A triplestore with a publicly available SPARQL endpoint at https://graphdb.dumontierlab.com/repositories/shapes-registry

* A grlc.io powered OpenAPI to query the SPARQL endpoint at http://grlc.io/api-git/MaastrichtU-IDS/shapes-of-you


## Run in development 🚧

Requirements:  [npm](https://www.npmjs.com/get-npm) and [yarn](https://classic.yarnpkg.com/en/docs/install/#debian-stable) installed.

Clone the repository:

```bash
git clone https://github.com/MaastrichtU-IDS/shapes-of-you
cd shapes-of-you
```

Install dependencies :inbox_tray:

```bash
yarn
```

Run the web app on http://localhost:19006, it should reload automatically at each changes to the code :arrows_clockwise:

```bash
yarn web
```

Upgrade the packages versions in `yarn.lock`

```bash
yarn upgrade
```

## Run in production 🛩️

> This website is automatically deployed by a [GitHub Actions worklow](https://github.com/MaastrichtU-IDS/shapes-of-you/actions?query=workflow%3A%22Deploy+to+GitHub+Pages%22) to GitHub Pages at https://maastrichtu-ids.github.io/shapes-of-you

You can build locally in `/web-build` folder and serve on http://localhost:5000

```bash
yarn build
yarn serve
```

Or run directly using [Docker :whale:](https://docs.docker.com/get-docker/) (requires [docker installed](https://docs.docker.com/get-docker/))

```bash
docker-compose up
```

> Checkout the [docker-compose.yml](/docker-compose.yml) file to see how we run the Docker image.

## Get data from GitHub GraphQL API

Checkout the GitHub workflow file to see how to run the Python script to retrieve the shapes from the GitHub GraphQL API and publish them to the .

You can find the scripts and requirements in the [`get_github_data`](https://github.com/MaastrichtU-IDS/shapes-of-you/tree/main/get_github_data) folder.

Use this command to locally define the `GITHUB_APIKEY` and `SPARQL_PASSWORD` environment variable required to run the script:

```bash
export GITHUB_APIKEY=MYKEY000
export SPARQL_PASSWORD=password
```

> You can create a new GitHub API key (aka. personal access token) at https://github.com/settings/tokens

Install requirements:

```bash
pip3 install -r get_github_data/requirements.txt
```

Run script:

```bash
python3 get_github_data/get_shapes_from_github.py
```

> Try out the GitHub GraphQL API [here](https://developer.github.com/v4/explorer/).

## Use SOLID pod

> Work in progress 🏗️

Go to your SOLID pod `/public/activities` folder and update permissions (the lock icon)

## Contribute

Contributions are welcome! See the [guidelines to contribute 👨‍💻](/CONTRIBUTING.md).
