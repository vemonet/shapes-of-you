# Registry for SHACL Shapes

This app run regularly a python script to retrieve all shapes from GitHub repositories with the label `shacl-shapes`. We check for the existence of a `sh:NodeShape` in each file.

The python script to get shapes and the website are automatically deployed by [GitHub Actions worklows](https://github.com/MaastrichtU-IDS/shapes-of-you/actions?query=workflow%3A%22Deploy+to+GitHub+Pages%22) to GitHub Pages at https://maastrichtu-ids.github.io/shapes-of-you

> You can check the shapes files which failed to be parsed in the [`FAILED_IMPORT_REPORT.md`](/FAILED_IMPORT_REPORT.md) file

### Run in development :construction:

Requirements:  [npm](https://www.npmjs.com/get-npm) and [yarn](https://classic.yarnpkg.com/en/docs/install/#debian-stable) installed.

Clone the repository:

```bash
git clone https://github.com/MaastrichtU-IDS/shapes-of-you
cd projects
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
python3 get_github_data/get_shapes_repos.py
```

> Try out the GitHub GraphQL API [here](https://developer.github.com/v4/explorer/).

## Contribute

Contributions are welcome! See the [guidelines to contribute 👨‍💻](/CONTRIBUTING.md).
