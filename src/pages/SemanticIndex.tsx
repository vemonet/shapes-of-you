import React from 'react';
import { makeStyles,  useTheme } from '@material-ui/core/styles';
import { Typography, Container, Box, Button, Chip, Tooltip, Grid, Paper, CircularProgress, Card, CardContent, CardHeader } from "@material-ui/core";
import { IconButton, InputBase } from "@material-ui/core";
import { List, ListItem, ListItemAvatar, ListItemText, Avatar } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CodeIcon from '@material-ui/icons/Code';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';
import SendIcon from '@material-ui/icons/Send';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import DeviceHubIcon from '@material-ui/icons/DeviceHub';
import GavelIcon from '@material-ui/icons/Gavel';
import OpenAPIIcon from '@material-ui/icons/Adjust';
import CloseIcon from '@material-ui/icons/Close';

import Alert from '@material-ui/lab/Alert';

import axios from 'axios';
import { Doughnut, Pie, Bar, HorizontalBar } from 'react-chartjs-2';
import 'chartjs-plugin-labels';

import { FormGroup, FormControlLabel, Checkbox, TextField } from "@material-ui/core";
import Autocomplete from '@material-ui/lab/Autocomplete';
import Pagination from '@material-ui/lab/Pagination';

import { LoggedIn, LoggedOut, Value, useWebId, useLDflexValue, useLDflexList } from '@solid/react';
import { Like } from '@solid/react';
import data from "@solid/query-ldflex";
// import { data } from "@solid/query-ldflex";
// import SolidStar from "./SolidStar";

// import {newEngine} from '@comunica/actor-init-sparql';
// import {ActorInitSparql} from '@comunica/actor-init-sparql/lib/ActorInitSparql-browser';
// import {IQueryOptions, newEngineDynamicArged} from "@comunica/actor-init-sparql/lib/QueryDynamic";

const useStyles = makeStyles(theme => ({
  paperSearch: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '35ch',
    marginRight: theme.spacing(3)
  },
  searchInput: {
    marginLeft: theme.spacing(1),
    fontSize: '16px',
    flex: 1,
  },
  link: {
    textDecoration: 'none',
    color: theme.palette.primary.main,
    '&:hover': {
      color: theme.palette.secondary.main,
      textDecoration: 'none',
    },
  },
}))

export default function SemanticIndex() {
  const classes = useStyles();
  const theme = useTheme();
  const webId = useWebId();
  // const solid_name = useLDflexValue('user.name') || 'unknown';
  
  const [state, setState] = React.useState({
    webid: '',
    shapes_files_list: [],
    search: '',
    repositories_hash: [],
    repositories_autocomplete: [],
    repos_overview_chart: {},
    files_overview_chart: {},
    checkbox_shacl: true,
    checkbox_shex: true,
    checkbox_sparql: true,
    checkbox_owl: true,
    checkbox_skos: true,
    checkbox_obo: true,
    checkbox_openapi: true,
    show_pwa_alert: true,
    page: 1,
    shapes_per_page: 100,
    show_info_card: true,
  });
  const stateRef = React.useRef(state);

  // Avoid conflict when async calls
  // Can be done with another lib (cf. Turgay)
  const updateState = React.useCallback((update) => {
    stateRef.current = {...stateRef.current, ...update};
    setState(stateRef.current);
  }, [setState]);


  // componentDidMount: Query SPARQL endpoint to get the shapes files infos
  React.useEffect(() => {
    const endpointToQuery = 'https://graphdb.dumontierlab.com/repositories/shapes-registry';

    // Check if PWA, and propose to install it if not!
    if (window.matchMedia('(display-mode: standalone)').matches) {  
      updateState({ show_pwa_alert: false })
    }  

    // Check SOLID pod for a shapes preference file
    // https://github.com/solid/react-components/blob/master/demo/app.jsx
    // https://solid.github.io/react-components/

    const shape_types_mappings = {
      'http://www.w3.org/ns/shacl#Shape': 'SHACL',
      'http://www.w3.org/2002/07/owl#Ontology': 'OWL',
      'http://www.w3.org/ns/shex#Schema': 'ShEx',
      'http://www.w3.org/ns/shacl#SPARQLFunction': 'SPARQL',
      'http://www.w3.org/2004/02/skos/core#ConceptScheme': 'SKOS',
      'http://semanticscience.org/resource/SIO_000623': 'OBO',
      'https://schema.org/WebAPI': 'OpenAPI',
    }

    let repos_overview_chart = {
      labels: [],
      datasets: [{
        label: 'Number of repositories per resource type',
        data: [ ],
        backgroundColor: ['#4caf50','#9575cd', '#ffeb3b', '#64b5f6', '#ff7043', '#1565c0']
        // hoverBackgroundColor: ['#4caf50','#FF6384','#36A2EB','#FFCE56', '#0277bd', '#ef6c00']
    }]}
    let files_overview_chart = {
      labels: [],
      datasets: [{
        label: 'Number of files per resource type',
        data: [ ],
        backgroundColor: ['#4caf50','#9575cd', '#ffeb3b', '#64b5f6', '#ff7043', '#1565c0']
        // hoverBackgroundColor: ['#4caf50','#FF6384','#36A2EB','#FFCE56', '#0277bd', '#ef6c00']
    }]}

    // sparql_resources_overview
    axios.get(endpointToQuery + `?query=` + encodeURIComponent(sparql_resources_overview))
      .then(res => {
        const results_array = res.data.results.bindings;
        results_array.map((result: any): any =>  {
          // @ts-ignore
          repos_overview_chart.labels.push(shape_types_mappings[result.shape_type.value]);
          // @ts-ignore
          repos_overview_chart.datasets[0].data.push(result.repos_count.value);
          // @ts-ignore
          files_overview_chart.labels.push(shape_types_mappings[result.shape_type.value]);
          // @ts-ignore
          files_overview_chart.datasets[0].data.push(result.files_count.value);
        })
        console.log(repos_overview_chart)
        updateState({
          repos_overview_chart: repos_overview_chart,
          files_overview_chart: files_overview_chart
        })
      })

    // Query directly using Axios
    axios.get(endpointToQuery + `?query=` + encodeURIComponent(getFilesQuery))
      .then(res => {
        const sparqlResultArray = res.data.results.bindings;
        // Convert array to object: {0:"a", 1:"b", 2:"c"}
        // const projects_converted_hash = { ...sparqlResultArray }
        // let projects_hash: any = {}
        // // Iterate over projects
        // Object.keys(projects_converted_hash).forEach(function(project) {
        //   const projectName = projects_converted_hash[project]['shapeFileUri']['value']
        //   // Use the project URI as key in the hash
        //   if (!projects_hash[projectName]){
        //     projects_hash[projectName] = {shapes: []}
        //   }
        //   // Iterate over project properties
        //   Object.keys(projects_converted_hash[project]).forEach(function(property: any) {
        //     const propertyHash = projects_converted_hash[project][property]
        //     if (propertyHash) {
        //       if (property == 'shapes') {
        //         // Exception for shapes which is a list
        //         let shape_label = propertyHash.value;
        //         if (shape_label.length > 100) {
        //           const n = shape_label.lastIndexOf('#');
        //           shape_label = shape_label.substring(n + 1);
        //         }
        //         if (shape_label.length > 150) {
        //           shape_label = shape_label.substring(0, 150)
        //         }
        //         projects_hash[projectName][property].push(shape_label);
        //       } else {
        //         projects_hash[projectName][property] = propertyHash.value 
        //       }
        //     }
        //   })
        // })
        // Convert back to array for filtering
        // const project_final_array: any = Object.keys(projects_hash).map((key) => projects_hash[key]);
        const project_final_array: any = sparqlResultArray.map((row: any) => {
          // console.log(row);
          Object.keys(row).map((key) => row[key] = row[key]['value']);
          return row
          // Object.keys(row).map((key) => key['value']);
        }); 
        console.log('project_final_array');
        console.log(project_final_array);
        // sparqlResultArray
        updateState({shapes_files_list: project_final_array})
      })
      .catch(error => {
        console.log(error)
      })

    // Get all shapes in files (3m2)
    // axios.get(endpointToQuery + `?query=` + encodeURIComponent(getShapesQuery))
    //   .then(res => {
    //     const sparqlResultArray = res.data.results.bindings;

    //     // Convert array to object: {0:"a", 1:"b", 2:"c"}
    //     const projects_converted_hash = { ...sparqlResultArray }
    //     let projects_hash: any = {}
    //     // Iterate over projects
    //     Object.keys(projects_converted_hash).forEach(function(project) {
    //       const projectName = projects_converted_hash[project]['shapeFileUri']['value']
    //       // Use the project URI as key in the hash
    //       if (!projects_hash[projectName]){
    //         projects_hash[projectName] = {shapes: []}
    //       }
    //       // Iterate over project properties
    //       Object.keys(projects_converted_hash[project]).forEach(function(property: any) {
    //         const propertyHash = projects_converted_hash[project][property]
    //         if (propertyHash) {
    //           if (property == 'shapes') {
    //             // Exception for shapes which is a list
    //             let shape_label = propertyHash.value;
    //             if (shape_label.length > 100) {
    //               const n = shape_label.lastIndexOf('#');
    //               shape_label = shape_label.substring(n + 1);
    //             }
    //             if (shape_label.length > 150) {
    //               shape_label = shape_label.substring(0, 150)
    //             }
    //             projects_hash[projectName][property].push(shape_label);
    //           } else {
    //             projects_hash[projectName][property] = propertyHash.value 
    //           }
    //         }
    //       })
    //     })
    //     // Convert back to array for filtering
    //     const project_final_array: any = Object.keys(projects_hash).map((key) => projects_hash[key]);
    //     updateState({shapes_files_list: project_final_array})
    //   })
    //   .catch(error => {
    //     console.log(error)
    //   })

    // Get repositories and their files counts
    let repositories_hash: any = []
    axios.get(endpointToQuery + `?query=` + encodeURIComponent(countRepositoriesQuery))
      .then(res => {
        const sparqlResultArray = res.data.results.bindings;

        sparqlResultArray.map((result: any) =>  {
          // repositories_hash[result.repository.value] = {
          let repo_description = '';
          if (result.repo_description) {
            repo_description = result.repo_description.value;
          }
          repositories_hash.push({
            label: result.repository.value,
            count: result.shapeFileCount.value,
            description: repo_description,
          })
        });

        updateState({repositories_hash: repositories_hash})
      })
      .catch(error => {
        console.log(error)
      })

    // Query with the Comunica engine
    // Not working on SPARQL endpoint, only on the examples they provide
    // https://comunica.dev/docs/query/getting_started/query_app/
    // const comunicaEngine = newEngine();
    // comunicaEngine.query(`
    //   SELECT ?s ?o WHERE {
    //    ?s a ?o .
    //   } LIMIT 100`, {
    //   sources: ['https://dbpedia.org/sparql'],
    // }).then((res: any) => {
    //   console.log(res);
    //   res.bindingsStream.on('data', (binding: any) => {
    //     // console.log(binding.get('?s').value);
    //     // console.log(binding.get('?s').termType);
    //     // console.log(binding.get('?o').value);
    //   });
    // });

    if (webId) {
      createSolidFile(webId);
    }

  }, [webId])
  // This useless array needs to be added for React to understand he needs to use the state inside...

  function createSolidFile(webId: string) {
    // console.log(webId);
    // const location = webId + "/public/shapes-of-you/preferences.ttl";
    const location = webId.replace("profile/card#me", "public/shapes-of-you/preferences.ttl");
    // console.log('Try to create file ' + location);
    return data[location].put();
  }

  const pluralize = (count: any, noun: string, suffix = 's') =>
  `${count} ${noun}${parseInt(count) !== 1 ? suffix : ''}`;

  const searchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateState({ search: event.target.value })
  }

  const handleCheckboxes = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateState({ [event.target.name]: event.target.checked });
  }

  function handleAutocompleteRepositories(event: any, value: string[]) {
    updateState({ repositories_autocomplete: value})
  }
  
  // Could not find good dynamic faceted search, best is https://github.com/ebi-gene-expression-group/scxa-faceted-search-results
  // Each faceted search filter can be added here (on the shapes files array)
  const filtered_files = state.shapes_files_list.filter( (shapes_file: any) =>{
    if (shapes_file) {
      if (shapes_file.label) {
        // Filter by repo: show shapes if no repo selected, or if its repo is in list of selected repos
        if (state.repositories_autocomplete.length == 0 || state.repositories_autocomplete.find((repo: string) => repo.includes(shapes_file.repository))) {
          // Filter depending on shape type checkboxes:
          if ((state.checkbox_shex === true && shapes_file.shape_type == 'http://www.w3.org/ns/shex#Schema')
          || (state.checkbox_sparql === true && shapes_file.shape_type == 'http://www.w3.org/ns/shacl#SPARQLFunction')
          || (state.checkbox_shacl === true && shapes_file.shape_type == 'http://www.w3.org/ns/shacl#Shape')
          || (state.checkbox_owl === true && shapes_file.shape_type == 'http://www.w3.org/2002/07/owl#Ontology')
          || (state.checkbox_obo === true && shapes_file.shape_type == 'http://semanticscience.org/resource/SIO_000623')
          || (state.checkbox_skos === true && shapes_file.shape_type == 'http://www.w3.org/2004/02/skos/core#ConceptScheme')
          || (state.checkbox_openapi === true && shapes_file.shape_type == 'https://schema.org/WebAPI')
          ) {
            // Filter using the search text, on all properties and metadata of the file:
            let file_description = '';
            if (shapes_file.repo_description) file_description = file_description + ' ' + shapes_file.repo_description;
            if (shapes_file.shape_file_description) file_description = file_description + ' ' + shapes_file.shape_file_description;
            if (shapes_file.sparqlEndpoint) file_description = file_description + ' ' + shapes_file.sparqlEndpoint;
            if (shapes_file.query) file_description = file_description + ' ' + shapes_file.query;
            return (shapes_file.label.toLowerCase().indexOf( state.search.toLowerCase() ) !== -1 
              || shapes_file.shapeFileUri.toLowerCase().indexOf( state.search.toLowerCase() ) !== -1
              || shapes_file.shapes && shapes_file.shapes.join(' ').toLowerCase().indexOf( state.search.toLowerCase() ) !== -1
              || shapes_file.repository.toLowerCase().indexOf( state.search.toLowerCase() ) !== -1
              || file_description.toLowerCase().indexOf( state.search.toLowerCase() ) !== -1
            )
          }
        }
      }
    }
  })

  // If no repo filter, then we use the filtered list to have the repo filtered
  // If a repo is selected we show full list, 
  // since filtering on filtered_files would show only the selected repo
  // Return unique list of filtered repos
  let filtered_repos: any = []
  if (state.repositories_autocomplete.length == 0) {
    filtered_repos = filtered_files.map( (shapes_file: any) =>{
      return shapes_file.repository
    }).filter((item, i, ar) => ar.indexOf(item) === i)
  } else {
    filtered_repos = state.shapes_files_list.map( (shapes_file: any) =>{
      return shapes_file.repository
    }).filter((item, i, ar) => ar.indexOf(item) === i)
  }

  // Define rendering of the page:
  return(
    <Container className='mainContainer'>
      {/* <Typography variant="h4" style={{textAlign: 'center'}}>
        💠 Shapes of You
      </Typography> */}

      {state.show_pwa_alert &&
        <Alert onClose={() => {updateState({ show_pwa_alert: false}) }} style={{marginBottom: theme.spacing(2)}}> 
          This web page is a Progressive Web App (PWA), it can be installed as a regular smartphone app, or desktop app on a laptop in a simple click! 
          <br/>Installing the app makes loading faster, and provides a better global experience.
          <br/>On Chrome click the + button to the right in the URL bar. Checkout <a href="https://medium.com/progressivewebapps/how-to-install-a-pwa-to-your-device-68a8d37fadc1" className={classes.link} target="_blank" rel="noopener noreferrer">this article for more details</a> about installing on various platforms.
        </Alert>
      }

      <LoggedIn>
        <Typography style={{textAlign: 'center', margin: theme.spacing(2, 0)}}>
          Welcome to your semantic resources index <Value src="user.name"/>!
        </Typography>
        {/* <Typography style={{textAlign: 'center', marginBottom: theme.spacing(2)}}>
          {webId}
        </Typography> */}
        <Typography style={{textAlign: 'center', marginBottom: theme.spacing(3)}}>
          Hopefully, soon you will be able to bookmark your favourites resources using your SOLID account! 🔖
        </Typography>
      </LoggedIn>
      {/* <LoggedOut>
        <Typography style={{textAlign: 'center', marginBottom: theme.spacing(3)}}>
          An index of publicly available semantic resources
        </Typography>
      </LoggedOut> */}

      <LoggedOut>
        {state.show_info_card &&
          <Card >
            <CardHeader
              // avatar={
              //   <Avatar aria-label="recipe" className={classes.avatar}>
              //     R
              //   </Avatar>
              // }
              action={
                <IconButton aria-label="settings" onClick={() => { updateState({ show_info_card: false}) }}>
                  <CloseIcon />
                </IconButton>
              }
              title="💠 Shapes of You"
              subheader="An index of publicly available semantic resources"
            />
            <CardContent>
              <Typography style={{marginBottom: theme.spacing(2)}}>
                Shapes of you is the best place to search and explore existing semantic shapes, ontologies, vocabularies and queries. Searching an ontology for datasets? Needing to validate RDF using SHACL or ShEx? Finding SPARQL queries about drugs? There might be a shape out there waiting for you! You can also explore shapes to find inspirations. You might even find a grlc API serving data relevant to your projects, who knows? Linked Open Data are full of surprises.
              </Typography>

              <Typography style={{marginBottom: theme.spacing(2)}}>
                To insure their validity, all indexed files has been parsed using the corresponding python package (rdflib, obonet). You can check the list of files which failed to load in our <a href="https://github.com/vemonet/shapes-of-you/tree/report" className={classes.link}>reports</a>. Feel free to fix them if you are the owner!
              </Typography>

              {/* <a href="https://github.com/vemonet/shapes-of-you/actions?query=workflow%3A%22Index+shapes%22" target="_blank" rel="noopener noreferrer">
                <img src="https://github.com/vemonet/shapes-of-you/workflows/Index%20shapes/badge.svg" 
                style={{marginBottom: theme.spacing(2)}} />
              </a> */}

              {/* <Typography>
                Add the tag <code>shacl-shapes</code> or <code>shex</code> or <code>grlc</code> to your GitHub repository, we automatically index all SPARQL queries (<code>.rq</code>, <code>.sparql</code>), ShEx (<code>.shex</code>), SHACL files (<code>.ttl</code>, <code>.rdf</code>, <code>.jsonld</code>, <code>.trig</code>, <code>.nq</code>, etc) containing at least one <code>sh:NodeShape</code> from all repositories everyday at 1:00 and 13:00 🕐
              </Typography> */}
              <Typography>
                Add one of those topics to your <a href="https://github.com" className={classes.link} target="_blank" rel="noopener noreferrer">GitHub</a> repository, or mention it in your project description on <a href="https://gitlab.com" className={classes.link} target="_blank" rel="noopener noreferrer">GitLab</a> and <a href="https://gitee.com" className={classes.link} target="_blank" rel="noopener noreferrer">Gitee</a>,&nbsp;
                we automatically index files from public repositories everyday 🕐
              </Typography>
              <List>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <DeviceHubIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText>
                    <b><a href="https://www.w3.org/OWL/" className={classes.link} target="_blank" rel="noopener noreferrer">OWL</a> ontologies</b>: add the topic <code>owl</code>, we index RDF files, with all <code>owl:Class</code> they contain
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <MenuBookIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText>
                    <b><a href="https://www.w3.org/TR/swbp-skos-core-spec/" className={classes.link} target="_blank" rel="noopener noreferrer">SKOS</a> vocabularies</b>: add the topic <code>skos</code>, we index RDF files, with all <code>skos:Concept</code> they contain
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <CheckCircleIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                  > 
                    <b><a href="https://www.w3.org/TR/shacl/" className={classes.link} target="_blank" rel="noopener noreferrer">SHACL</a> shapes</b>: add the topic <code>shacl-shapes</code>, we index RDF files, with all <code>sh:NodeShape</code> they contain
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <BubbleChartIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText>
                    <b><a href="https://shex.io/" className={classes.link} target="_blank" rel="noopener noreferrer">ShEx</a> expressions</b>: add the topic <code>shex</code>, we index <code>.shex</code> files, and ShEx shapes defined in RDF files (but no metadata described in ShEx)
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <CodeIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText>
                    <b><a href="https://www.w3.org/TR/sparql11-query/" className={classes.link} target="_blank" rel="noopener noreferrer">SPARQL</a> queries</b>: add the topic <code>grlc</code>, we index <code>.rq</code> and <code>.sparql</code> files, and parse <a href="http://grlc.io" className={classes.link} target="_blank" rel="noopener noreferrer">grlc.io</a> APIs metadata, complying with the <a href="https://github.com/the-open-university/basil/wiki/Introduction" className={classes.link} target="_blank" rel="noopener noreferrer">BASIL convention</a>
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <GavelIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText>
                    <b><a href="http://www.obofoundry.org/" className={classes.link} target="_blank" rel="noopener noreferrer">OBO</a> ontologies</b>: add the topic <code>obo</code>, we index <code>.obo</code> files, with parse all terms they contain
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <OpenAPIIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText>
                    <b><a href="https://www.openapis.org/" className={classes.link} target="_blank" rel="noopener noreferrer">OpenAPI</a> specifications</b>: add the topic <code>openapi</code>, we index <code>.yml</code>, <code>.yaml</code> and <code>.json</code> files, and parse the spec to retrieve API metadata
                  </ListItemText>
                </ListItem>
              </List>
            </CardContent>
          </Card>
        }
      </LoggedOut>

      { state.repos_overview_chart['datasets'] && state.files_overview_chart['datasets'] &&
        <Grid container spacing={3} style={{textAlign: 'center', marginTop: theme.spacing(2)}}>
          <Grid item xs={12} md={6}>
            <Paper style={{padding: theme.spacing(2, 2)}}>
              <Typography variant="h6" style={{marginBottom: theme.spacing(1)}}>Number of repositories per shape type</Typography>
              <Bar data={state.repos_overview_chart} options={chart_options(state.repos_overview_chart['datasets'][0]['data'])}/>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper style={{padding: theme.spacing(2, 2)}}>
              <Typography variant="h6" style={{marginBottom: theme.spacing(1)}}>Number of files per shape type</Typography>
              <Bar data={state.files_overview_chart} options={chart_options(state.files_overview_chart['datasets'][0]['data'])}/>
            </Paper>
          </Grid>
        </Grid>
      }

      {/* <Box display="flex" style={{margin: theme.spacing(2, 0)}}></Box> */}
      <Paper elevation={6} style={{padding: theme.spacing(3, 2), margin: theme.spacing(3, 0)}}>
        <Typography variant="h5">
          {filtered_files.length} files in&nbsp;
          {filtered_repos.length} repositories 
          {/* {(state.repositories_autocomplete.length > 0 && state.repositories_autocomplete.length) || Object.keys(state.repositories_hash).length} Shapes repositories  */}
        </Typography>

        {/* Filtering options */}
        <Box display="flex" style={{margin: theme.spacing(2, 0)}}>
          {/* Search box */}
          <Paper component="form" className={classes.paperSearch}>
            <InputBase
              className={classes.searchInput} inputProps={{ 'aria-label': 'search' }}
              placeholder={"🔎 Search shapes"}
              onChange={searchChange}
            />
            <IconButton aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>

          <TextField
            id="shapes-per-page"
            value={state.shapes_per_page}
            onChange={(e: any) => {updateState({shapes_per_page: e.target.value})}}
            label="Files per page"
            type="number"
            variant="outlined"
            // style={{ backgroundColor: '#ffffff' }}
          />
        </Box>

        {/* Autocomplete to filter by repositories */}
        <Autocomplete
          multiple
          value={state.repositories_autocomplete}
          onChange={handleAutocompleteRepositories}
          id="autocomplete-repositories"
          options={state.repositories_hash.filter( (repo: any) =>{ return (filtered_repos.indexOf(repo.label) > -1) })
            .map((option: any) => option.label+ "," + option.count + "," + option.description)}
          getOptionLabel={(option) => option.split(",")[0].replace('https://github.com/', '')}
          renderOption={(option: any) => (
            <React.Fragment>
              {option.split(",")[0].replace('https://github.com/', '')} ({option.split(",")[1]} files) 
              {option.split(",")[2] && 
                <React.Fragment>
                  &nbsp;- {option.split(",")[2]}
                </React.Fragment>
              }
            </React.Fragment>
          )}
          renderInput={params => <TextField {...params} 
            label="📁 Filter by repositories" 
            variant="outlined" 
            // style={{ backgroundColor: '#ffffff' }}
            // onInputChange={handleAutocompleteRepositories}
            // size='small'
            // InputProps={{
            //   className: classes.whiteColor
            // }}
            // ListboxProps={{
            //   className: classes.whiteColor,
            // }}
            // getOptionLabel={option => option.title}
            // style={{ width: '60ch' }}
          />}
        />

        <FormGroup style={{marginTop: theme.spacing(2)}} row>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checkbox_shacl}
                onChange={handleCheckboxes}
                name="checkbox_shacl"
                color="primary"
              /> }
            label="SHACL"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checkbox_shex}
                onChange={handleCheckboxes}
                name="checkbox_shex"
                color="primary"
              /> }
            label="ShEx"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checkbox_sparql}
                onChange={handleCheckboxes}
                name="checkbox_sparql"
                color="primary"
              /> }
            label="SPARQL"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checkbox_owl}
                onChange={handleCheckboxes}
                name="checkbox_owl"
                color="primary"
              /> }
            label="OWL"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checkbox_skos}
                onChange={handleCheckboxes}
                name="checkbox_skos"
                color="primary"
              /> }
            label="SKOS"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checkbox_obo}
                onChange={handleCheckboxes}
                name="checkbox_obo"
                color="primary"
              /> }
            label="OBO"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checkbox_openapi}
                onChange={handleCheckboxes}
                name="checkbox_openapi"
                color="primary"
              /> }
            label="OpenAPI"
          />
        </FormGroup>

      </Paper>

      {state.shapes_files_list.length < 1 && (
        <div style={{textAlign: 'center'}}>
          <CircularProgress style={{padding: theme.spacing(10, 10)}} />
        </div>
      )}

      {/* Display Shapes files */}
      {filtered_files.slice(((state.page - 1)*(state.shapes_per_page)), ((state.page)*(state.shapes_per_page) - 1)).map(function(project: any, key: number){
        return <Paper key={key.toString()} elevation={2} style={{padding: theme.spacing(2, 2), margin: theme.spacing(2, 0)}}>
          <Typography variant="h6">
            File:&nbsp;
            <b><a href={project.shapeFileUri} className={classes.link}>{project.label}</a></b>
            {project.query && project.sparqlEndpoint &&
              // Add YASGUI link if relevant
              // https://yasgui.triply.cc/#query=  &endpoint=
              <a href={'https://yasgui.triply.cc/#query=' + encodeURIComponent(project.query) + '&endpoint=' + project.sparqlEndpoint}
                className={classes.link} target='_blank'>
                <Button variant="contained" color="primary" style={{margin: theme.spacing(0, 2)}}>
                  <SendIcon />
                  &nbsp;Query on YASGUI
                </Button>
              </a>
            }
            {project.query && !project.sparqlEndpoint &&
              <a href={'https://yasgui.triply.cc/#query=' + encodeURIComponent(project.query)} 
                className={classes.link} target='_blank'>
                <Button variant="contained" color="primary" style={{margin: theme.spacing(0, 2)}}>
                  <SearchIcon />
                  &nbsp;See on YASGUI
                </Button>
              </a>
            }
            <LoggedIn>
              <Like object={project.shapeFileUri}>the Shape</Like>
            </LoggedIn>
          </Typography>
          {/* shape_file_description */}
          {project.shape_file_description &&
            <Typography style={{fontStyle: 'italic', margin: theme.spacing(1, 0)}}>
              {project.shape_file_description}
            </Typography>
          }
          <Typography style={{margin: theme.spacing(1, 0)}}>
            {/* In repository:&nbsp; */}
            <a href={project.repository} className={classes.link}>
              📁&nbsp;{project.repository.replace('https://github.com/', '')}
            </a>
            {project.repo_description &&
              <>
                &nbsp;-&nbsp;{project.repo_description}
              </>
            }
          </Typography>
          {project.shapes &&
            <>
              <Typography style={{marginTop: theme.spacing(1)}}>
                Contains {pluralize(project.shapes.length, 'Shape')}:
              </Typography>
              {project.shapes.map((shapeLabel: string, key: number) => {
                // Limit shape label size to 150 chars
                return <Chip label={shapeLabel} color='primary' key={key.toString()}
                    style={{margin: theme.spacing(1, 1)}}/>
                // <Tooltip title={shapeLabel} key={key.toString()}>
                // </Tooltip>
              })}
            </>
          }
        </Paper>
      })}
      <Pagination count={Math.floor(filtered_files.length / state.shapes_per_page) + 1} 
        color="primary" onChange={(event,val)=> updateState({page: val})} 
        style={{ display:'flex', justifyContent: 'center' }}
      />
    </Container>
  )
}

// SPARQL select query to get all shapes files without the list of their shapes (much faster)
const getFilesQuery = `PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX dc: <http://purl.org/dc/elements/1.1/>
PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX schema: <https://schema.org/>
PREFIX sh: <http://www.w3.org/ns/shacl#>
PREFIX shex: <http://www.w3.org/ns/shex#>
PREFIX void: <http://rdfs.org/ns/void#>
SELECT DISTINCT * WHERE { 
    ?shapeFileUri a schema:SoftwareSourceCode ;
        a ?shape_type ;
        rdfs:label ?label ;
        dc:source ?repository .
    FILTER(?shape_type != schema:SoftwareSourceCode)
    OPTIONAL { ?repository rdfs:comment ?repo_description }
    OPTIONAL { ?shapeFileUri schema:query ?query }
    OPTIONAL { ?shapeFileUri void:sparqlEndpoint ?sparqlEndpoint }
    OPTIONAL { ?shapeFileUri dc:description ?shape_file_description }
}`

// SPARQL select query to get all shapes files and the list of their shapes
const getShapesQuery = `PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX dc: <http://purl.org/dc/elements/1.1/>
PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX schema: <https://schema.org/>
PREFIX sh: <http://www.w3.org/ns/shacl#>
PREFIX shex: <http://www.w3.org/ns/shex#>
PREFIX void: <http://rdfs.org/ns/void#>
SELECT DISTINCT * WHERE { 
    ?shapeFileUri a schema:SoftwareSourceCode ;
        a ?shape_type ;
        rdfs:label ?label ;
        dc:source ?repository ;
        dcterms:hasPart ?shapes .
    FILTER(?shape_type != schema:SoftwareSourceCode)
    OPTIONAL { ?repository rdfs:comment ?repo_description }
    OPTIONAL { ?shapeFileUri schema:query ?query }
    OPTIONAL { ?shapeFileUri void:sparqlEndpoint ?sparqlEndpoint }
    OPTIONAL { ?shapeFileUri dc:description ?shape_file_description }
}`
// } LIMIT 1000`

// SPARQL select query to get all GitHub repos, their description and the count of shapes file in it
const countRepositoriesQuery = `PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX dc: <http://purl.org/dc/elements/1.1/>
PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX schema: <https://schema.org/>
PREFIX sh: <http://www.w3.org/ns/shacl#>
PREFIX shex: <http://www.w3.org/ns/shex#>
SELECT ?repository (count(?shapeFileUri) AS ?shapeFileCount) ?repo_description WHERE { 
  ?shapeFileUri a <https://schema.org/SoftwareSourceCode> ;
    rdfs:label ?label ;
    dc:source ?repository .
  OPTIONAL { ?repository rdfs:comment ?repo_description }
} GROUP BY ?repository ?repo_description
`

// SPARQL select query which returns the count of repositories and shapes files per semantic resources types
const sparql_resources_overview = `PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX dc: <http://purl.org/dc/elements/1.1/>
PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX schema: <https://schema.org/>
PREFIX sh: <http://www.w3.org/ns/shacl#>
PREFIX shex: <http://www.w3.org/ns/shex#>
PREFIX void: <http://rdfs.org/ns/void#>
SELECT DISTINCT ?shape_type (count(distinct ?repository) AS ?repos_count) (count(distinct ?shape_file) AS ?files_count)
WHERE { 
    ?shape_file a schema:SoftwareSourceCode ;
        a ?shape_type ;
        dc:source ?repository .
    FILTER(?shape_type != schema:SoftwareSourceCode)
} GROUP BY ?shape_type
`

function chart_options(data_array: any) {
  return {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          suggestedMax: Math.max(...data_array) + 50
        }
      }],
      xAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    },
    legend: {
      display: false
    },
    // maintainAspectRatio: false,
    plugins: {
      labels: {
        // render 'label', 'value', 'percentage', 'image' or custom function, default is 'percentage'
        render: 'value',
        // fontSize: 12,

        // font color, can be color array for each data or function for dynamic color, default is defaultFontColor
        // fontColor: '#fff',
        // // draw text shadows under labels, default is false
        // textShadow: true,
        // text shadow intensity, default is 6
        // shadowBlur: 10,
        // // text shadow X offset, default is 3
        // shadowOffsetX: -5,
        // // text shadow Y offset, default is 3
        // shadowOffsetY: 5,
        // // text shadow color, default is 'rgba(0,0,0,0.3)'
        // shadowColor: 'rgba(255,0,0,0.75)',
        // position to draw label, available value is 'default', 'border' and 'outside'
        // bar chart ignores this
        // default is 'default'
        position: 'outside',

        // set images when `render` is 'image'
        // images: [
        //   {
        //     src: 'image.png',
        //     width: 16,
        //     height: 16
        //   }
        // ]
      }
    }
  }
}
