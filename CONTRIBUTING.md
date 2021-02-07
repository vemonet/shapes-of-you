# Contributing 👩‍💻

When contributing to this repository, please first discuss the change you wish to make via an [issue](https://github.com/vemonet/shapes-of-you/issues) if applicable.



To contribute:

1. [Fork this repository](https://github.com/vemonet/shapes-of-you/fork).

2. Clone the repository 📥 (example given with the main repository URL)

```bash
git clone https://github.com/vemonet/shapes-of-you.git
cd shapes-of-you
```

3. Create a new branch from the `main` branch and add your changes to this branch 🕊️

```bash
git checkout -b my-branch
```

4. Run the API in development on http://localhost:19006 🛩

```bash
yarn install
yarn dev
```

5. Add your change in this branch 📝
6. Send a pull request to the `main` branch when your changes are done 📤

## Pull Request process ✔️

1. Before sending a pull request make sure the project still work as expected with the new changes properly integrated 📝
2. [Send a pull request](https://github.com/vemonet/shapes-of-you/compare) to the `main` branch 📤
3. Project contributors will review your change as soon as they can ✔️

## Planned improvements ➕

- [x] Improve filtering and faceted search for shapes (feedbacks welcome!)
- [ ] Regex search filter
- [ ] Add page for each file: download the file, parse it with JavaScript, and display relevant infos: metadata, classes, properties, instances, subClassOf hierarchy...
- [ ] Allow to easily add a new GitLab self-hosted server (API key required as secret) 
- [ ] Filtering files/repositories based on categories, could be GitHub topics to start (e.g. only show most popular topics, and filter)
- [ ] Index more types of files (OWL ontologies, OpenAPI YAML)
- [ ] Parse ShEx files to retrieve the defined shapes (if possible)
- [ ] Star shapes files with your SOLID account
- [ ] Store the data as [Nanopublications](http://nanopub.org/wordpress/), instead of requiring the deployment of a triplestore

> Feel free to comment on this plan, or propose new improvements by creating an issue in this GitHub repository.

### Implement as a Progressive Web App ⚡️

Development did not started yet. [PWA](https://web.dev/progressive-web-apps) would allow to store the web app bundle and the SPARQL data (to avoid querying everytime, we can update quietly in the background). Here are some interesting pointers:

* Store data using a PWA: https://www.monterail.com/blog/pwa-offline-dynamic-data

* MaterialUI PWA example: https://github.com/Atyantik/example-pawjs-material-ui

### Use SOLID pod 👤

> 🚧 Work in progress

Currently adding data to a pod fails due to permissions issue. But the user name is properly retrieved, and displayed!

To give permissions to Shapes of you to add data to your pod: 

* Go to your SOLID pod `/public/activities` folder 
* Click on the lock icon 🔒 
* Update permissions by adding the web app URL: https://index.semanticscience.org
  * You can also add the localhost URL for development: http://localhost:19006

### Improving the faceted search 🔎

We have a use-case with multiple types of inputs for the different facets (checkboxes for file types, MaterialUI autocomplete for repositories, text box for full text search), and we want the options (e.g. filter displayed repositories based on the search input)

We could not find a good dynamic faceted search, the most relevant options for React are:

* [ebi-gene-expression-group/scxa-faceted-search-results](https://github.com/ebi-gene-expression-group/scxa-faceted-search-results): multiple inputs faceted search, but does not seems to support dynamic filtering of displayed options
* [eduardobcastro/in-memory-faceted-search](https://github.com/eduardobcastro/in-memory-faceted-search)

Currently we prefer to implement it ourself (search for "faceted" in the **SemanticIndex** page). But it could be tricky when we will start to have more categories to filter on.