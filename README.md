# Registry for SHACL Shapes

[![Get shapes from GitHub GraphQL API](https://github.com/MaastrichtU-IDS/shapes-of-you/workflows/Get%20shapes%20from%20GitHub%20GraphQL%20API/badge.svg)](https://github.com/MaastrichtU-IDS/shapes-of-you/actions?query=workflow%3A%22Get+shapes+from+GitHub+GraphQL+API%22) [![Deploy to GitHub Pages](https://github.com/MaastrichtU-IDS/shapes-of-you/workflows/Deploy%20to%20GitHub%20Pages/badge.svg)](https://github.com/MaastrichtU-IDS/shapes-of-you/actions?query=workflow%3A%22Deploy+to+GitHub+Pages%22) [![CodeQL analysis](https://github.com/MaastrichtU-IDS/shapes-of-you/workflows/CodeQL%20analysis/badge.svg)](https://github.com/MaastrichtU-IDS/shapes-of-you/actions?query=workflow%3A%22CodeQL+analysis%22) 

This app regularly runs a python script to retrieve SHACL Shapes from GitHub repositories. 

1. We retrieve shapes from all `.ttl` and `.rdf` files in GitHub repositories tagged with the topic `shacl-shapes`. 
2. We check for the existence of a `sh:NodeShape` in each file, and register all shapes described in each files.
3. We publish the shapes files URL and the shapes they contain in a public SPARQL endpoint: https://graphdb.dumontierlab.com/repositories/shapes-registry
4. You can now explore the existing shapes and easily retrieve their file in the web application: https://maastrichtu-ids.github.io/shapes-of-you
5. You can check the SHACL Shapes files which are not successfully be parsed by [`rdflib`](https://rdflib.readthedocs.io/en/stable/) in the [`FAILED_IMPORT_REPORT.md`](/FAILED_IMPORT_REPORT.md) file.

> The python script to get shapes and the website are automatically deployed by [GitHub Actions worklows](https://github.com/MaastrichtU-IDS/shapes-of-you/actions?query=workflow%3A%22Deploy+to+GitHub+Pages%22) to [GitHub Pages](https://maastrichtu-ids.github.io/shapes-of-you) everyday at 1:00 and 13:00. 

### Run in development :construction:

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

Web app will run on http://localhost:19006

```bash
yarn web
```

> The website should reload automatically at each changes to the code :arrows_clockwise:

Upgrade the packages versions in `yarn.lock`

```bash
yarn upgrade
```

### Run in production :rocket:

> This website is automatically deployed by a [GitHub Actions worklow](https://github.com/MaastrichtU-IDS/shapes-of-you/actions?query=workflow%3A%22Deploy+to+GitHub+Pages%22) to GitHub Pages at https://maastrichtu-ids.github.io/shapes-of-you

You can build locally in `/web-build` folder and serve on [http://localhost:5000 :package:](http://localhost:5000)

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

A workflow runs everyday via GitHub Actions at 03:00am and 13:00pm to:

* Update the file [`assets/ids_github_data.json`](https://github.com/MaastrichtU-IDS/shapes-of-you/blob/main/assets/ids_github_data.json) on the `main` branch using a Python script. This JSON file is then used to display informations on the IDS projects website, such as the latest releases of the MaastrichtU-IDS organization on GitHub.
* Retrieve DOAP files (`doap-project.ttl` in RDF turtle) from MaastrichtU-IDS GitHub repositories using a Python script, then load their RDF data to the SPARQL endpoint https://graphdb.dumontierlab.com/repositories/ids-projects/statements in the graph https://w3id.org/umids/graph/shapes-registry

> Checkout the [`get-github-data.yml` workflow file](https://github.com/MaastrichtU-IDS/shapes-of-you/blob/main/.github/workflows/get-github-data.yml) to see how to run the Python script to retrieve data from the GitHub GraphQL API.

You can find the scripts and requirements in the [`get_github_data`](https://github.com/MaastrichtU-IDS/shapes-of-you/tree/main/get_github_data) folder.

Use this command to locally define the `GITHUB_APIKEY` environment variable:

```bash
export GITHUB_APIKEY=MYKEY000
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

## Contribute

Contributions are welcome! See the [guidelines to contribute 👨‍💻](/CONTRIBUTING.md).
