# Contributing

When contributing to this repository, please first discuss the change you wish to make via an [issue](https://github.com/MaastrichtU-IDS/shapes-of-you/issues) if applicable.

If you are part of the [MaastrichtU-IDS organization on GitHub](https://github.com/MaastrichtU-IDS) you can directly create a branch in this repository. Otherwise you will need to first [fork this repository](https://github.com/MaastrichtU-IDS/shapes-of-you/fork).

To contribute:

1. Clone the repository 📥

```bash
git clone https://github.com/MaastrichtU-IDS/shapes-of-you.git
cd shapes-of-you
```

2. Create a new branch from the `main` branch and add your changes to this branch 🕊️

```bash
git checkout -b my-branch
```

3. See how to run the API in development at https://github.com/MaastrichtU-IDS/shapes-of-you 💠

```bash
yarn install
yarn web
```

4. Add your change in this branch 📝
5. Send a pull request to the `main` branch when your changes are done 📤

## Note about current development

### Use SOLID pod 👤

> 🚧 Work in progress

Currently adding data to a pod fails due to permissions issue. But the user name is properly retrieved, and displayed!

To give permissions to Shapes of you to add data to your pod: 

* Go to your SOLID pod `/public/activities` folder 
* Click on the lock icon 🔒 
* Update permissions by adding the web app URL: https://maastrichtu-ids.github.io/shapes-of-you
  * You can also add the localhost URL for development: http://localhost:19006

### Improving the faceted search

We have a use-case with multiple types of inputs for the different facets (checkboxes for file types, MaterialUI autocomplete for repositories, text box for full text search), and we want the options (e.g. filter displayed repositories based on the search input)

We could not find a good dynamic faceted search, the most relevant options for React are:

* [ebi-gene-expression-group/scxa-faceted-search-results](https://github.com/ebi-gene-expression-group/scxa-faceted-search-results): multiple inputs faceted search, but does not seems to support dynamic filtering of displayed options
* [eduardobcastro/in-memory-faceted-search](https://github.com/eduardobcastro/in-memory-faceted-search)

Currently we prefer to implement it ourself (search for "faceted" in the **ShapeRegistry** page). But it could be tricky when we will start to have more categories to filter on.

## Pull Request process

1. Before sending a pull request make sure the project still work as expected with the new changes properly integrated 📝
2. [Send a pull request](https://github.com/MaastrichtU-IDS/shapes-of-you/compare) to the `main` branch 📤
3. Project contributors will review your change as soon as they can ✔️

