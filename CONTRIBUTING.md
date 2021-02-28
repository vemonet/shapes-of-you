# Contributing 👩‍💻

When contributing to this repository, please check the [issues](https://github.com/vemonet/shapes-of-you/issues) first, and post a new one if relevant.

## Find what you search 🔎

Searching for something? Here are the folder where you will find it

* I want to add repositories or endpoints missed by your indexer! 
  * Checkout the `assets` folder
* I want to improve the website! 
  * Checkout the `src` folder. The main page is defined by `SemanticIndex.tsx`
* I want to improve the indexing of the files (RDF files, SPARQL queries, etc)
  * Checkout the `etl/index-shapes.py` script
* I want to improve the metadata generation for SPARQL endpoints!
  * Checkout the [d2s `generate_metadata.py` file](https://github.com/MaastrichtU-IDS/d2s-cli/blob/master/d2s/generate_metadata.py#L144)
* I want to add or improve queries used for the Shapes of Your grlc API
  * Checkout the `api` folder

## Contribute 📝

To contribute:

1. [Fork this repository](https://github.com/vemonet/shapes-of-you/fork) 🍴

2. Clone the repository 📥

```bash
git clone https://github.com/vemonet/shapes-of-you.git
cd shapes-of-you
```

3. Create a new branch from the `main` branch, and go to this branch 🕊️

```bash
git checkout -b my-branch
```

4. Run the API in development on http://localhost:19006 🛩

```bash
yarn install
yarn dev
```

5. Add your changes in this branch 🦜
6. Send a pull request to the `main` branch when your changes are done 📤

## Pull request process ✔️

1. Before sending a pull request, make sure the project still work as expected with the new changes properly integrated 🛫
2. [Send a pull request](https://github.com/vemonet/shapes-of-you/compare) to the `main` branch 📤
3. Project contributors will review your change, and answer the pull request as soon as they can ✔️

## Maintenance notices 🔧

Potential future maintenance issues, and how to fix them:

* GitHub/GitLab/Gitee APIs could change, or get deprecated in the future. Updating to a new API will not be hard though, as we just rely on it to list the interesting repos for a topic, and get some basic metadata. The rest is done by `git clone`. Checkout the `fetch_from_` functions in the `etl/index-shapes.py` file to change the different services API queries and logic.
* GitHub/GitLab/Gitee raw file URL model could change. We just need to change the `generate_github_file_url` function in `etl/index-shapes.py` to adapt it to the new URL.

## Security notices 🛡

Some things to take into consideration if you are running this system:

* Use API tokens with minimal permissions granted for git services (to avoid publicly indexing your own private repositories)
* Do not use one of your regular password for the triplestore stored as secret.
* Prefer using GitHub runners, over sensible self-hosted runners, to run the GitHub Actions workflows.