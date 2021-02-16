import React from 'react';
import { makeStyles,  useTheme } from '@material-ui/core/styles';
import { Typography, Container, Box, Button, Chip, Tooltip, Grid, Paper, CircularProgress, Card, CardContent, CardHeader, Collapse, CardActions } from "@material-ui/core";
import { IconButton, InputBase } from "@material-ui/core";
import { FormGroup, FormControlLabel, Checkbox, TextField } from "@material-ui/core";
import Pagination from '@material-ui/lab/Pagination';
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
// import Autocomplete from '@material-ui/lab/Autocomplete';
// import Alert from '@material-ui/lab/Alert';

import ReactMarkdown from 'react-markdown'
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';


import QueryYasguiButton from "../components/QueryYasguiButton";
import About from "./About";

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
    global_shapes_array: [],
    expanded_files: {},
    webid: '',
    shapes_files_list: [],
    search: '',
    repositories_hash: [],
    repositories_autocomplete: [],
    repos_overview_chart: {},
    files_overview_chart: {},
    type_checkboxes: {
      SHACL: true,
      ShEx: true,
      SPARQL: true,
      OWL: true,
      SKOS: true,
      OBO: true,
      OpenAPI: true,
      RML: true,
      R2RML: true,
      Nanopub: true,
      Dataset: true,
    },
    show_pwa_alert: false,
    page: 1,
    shapes_per_page: 20,
    show_info_card: false,
  });
  const stateRef = React.useRef(state);
  // Avoid conflict when async calls
  const updateState = React.useCallback((update) => {
    stateRef.current = {...stateRef.current, ...update};
    setState(stateRef.current);
  }, [setState]);

  const shape_types_mappings = {
    'http://www.w3.org/ns/shacl#Shape': 'SHACL',
    'http://www.w3.org/2002/07/owl#Ontology': 'OWL',
    'http://www.w3.org/ns/shex#Schema': 'ShEx',
    'http://www.w3.org/ns/shacl#SPARQLFunction': 'SPARQL',
    'http://www.w3.org/2004/02/skos/core#ConceptScheme': 'SKOS',
    'http://semanticscience.org/resource/SIO_000623': 'OBO',
    'https://schema.org/APIReference': 'OpenAPI',
    'http://www.w3.org/ns/r2rml#TriplesMap': 'R2RML',
    'http://semweb.mmlab.be/ns/rml#LogicalSource': 'RML',
    'https://w3id.org/np/o/ntemplate/AssertionTemplate': 'Nanopub',
    'http://www.w3.org/ns/dcat#Dataset': 'Dataset'
  }

  function getFileLabel(file_type: string) {
    let icon = '📄';
    if (shape_types_mappings[file_type] == 'OWL' || file_type == 'OWL') icon = '🦉'
    if (shape_types_mappings[file_type] == 'ShEx' || file_type == 'ShEx') icon = '✴️'
    if (shape_types_mappings[file_type] == 'SHACL' || file_type == 'SHACL') icon = '💠'
    if (shape_types_mappings[file_type] == 'RML' || file_type == 'RML') icon = '🦜'
    if (shape_types_mappings[file_type] == 'R2RML' || file_type == 'R2RML') icon = '🗄'
    if (shape_types_mappings[file_type] == 'OBO' || file_type == 'OBO') icon = '🧪'
    if (shape_types_mappings[file_type] == 'OpenAPI' || file_type == 'OpenAPI') icon = '📬'
    if (shape_types_mappings[file_type] == 'SPARQL' || file_type == 'SPARQL') icon = '✨️'
    if (shape_types_mappings[file_type] == 'SKOS' || file_type == 'SKOS') icon = '📕'
    if (shape_types_mappings[file_type] == 'Nanopub' || file_type == 'Nanopub') icon = '🗞'
    if (shape_types_mappings[file_type] == 'Dataset' || file_type == 'Dataset') icon = '💽'
    return icon;
  }

  const chart_colors = ['#4caf50','#9575cd', '#bcaaa4', '#ef6c00', '#26c6da',
    '#1565c0', '#aed581', '#4caf50', '#ffeb3b', '#ffb74d', '#ce93d8', '#4db6ac']

  // At start: query SPARQL endpoint to get the shapes files infos (componentDidMount)
  React.useEffect(() => {
    const endpointToQuery = 'https://graphdb.dumontierlab.com/repositories/shapes-registry';

    // Check if PWA, and hide message if already installed
    // if (window.matchMedia('(display-mode: standalone)').matches) {  
    //   updateState({ show_pwa_alert: false })
    // }

    // Check SOLID pod for a shapes preference file
    // https://github.com/solid/react-components/blob/master/demo/app.jsx
    // https://solid.github.io/react-components/

    let repos_overview_chart = {
      labels: [],
      datasets: [{
        label: 'Number of repositories per resource type',
        data: [ ],
        backgroundColor: chart_colors
        // hoverBackgroundColor: ['#4caf50']
    }]}
    let files_overview_chart = {
      labels: [],
      datasets: [{
        label: 'Number of files per resource type',
        data: [ ],
        backgroundColor: chart_colors
    }]}

    // Get stats about shapes types
    axios.get(endpointToQuery + `?query=` + encodeURIComponent(sparql_resources_overview))
      .then(res => {
        const results_array: any = res.data.results.bindings;
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
        console.log(repos_overview_chart.labels)
        updateState({
          repos_overview_chart: repos_overview_chart,
          files_overview_chart: files_overview_chart
        })
      })

    // Get all files
    axios.get(endpointToQuery + `?query=` + encodeURIComponent(getFilesQuery))
      .then(res => {
        const sparqlResultArray = res.data.results.bindings;
        let global_shapes_array: any = []
        // Iterates over shapes files
        sparqlResultArray.map((result: any): any =>  {
          // Create shape file entry
          const file_url = result.shapeFileUri.value;
          let file_obj: any = {
            'url': file_url,
            'type': result.shape_type.value,
            'label': result.label.value,
          }
          let search_description = file_url + ' ' + result.label.value
          if (result.shape_file_description) {
            file_obj.description = result.shape_file_description.value;
            search_description = search_description + ' ' + result.shape_file_description.value
          }
          if (result.sparqlEndpoint) {
            file_obj.sparqlEndpoint = result.sparqlEndpoint.value;
            search_description = search_description + ' ' + result.sparqlEndpoint.value
          }
          if (result.query) {
            file_obj.query = result.query.value;
            search_description = search_description + ' ' + result.query.value
          }

          // Get repo in array if exist
          const repo_url = result.repository.value;
          // let repo_entry  = global_shapes_array.find((item: any) => item.url === repo_url);
          let repo_index = global_shapes_array.findIndex(((obj: any) => obj.url == repo_url));
          if (repo_index == -1) {
            // Add repository to global repos array if not present
            let repo_description = ''
            if (result.repo_description) repo_description = result.repo_description.value;
            repo_index = global_shapes_array.push({
              'url': repo_url,
              'description': repo_description,
              'files': [],
              'search_description': ''
            }) - 1
          }
          // Add shapes file to repo entry
          global_shapes_array[repo_index]['files'].push(file_obj)
          global_shapes_array[repo_index]['search_description'] = global_shapes_array[repo_index]['search_description'] + search_description

        })
        console.log(global_shapes_array)
        updateState({global_shapes_array: global_shapes_array})

      })
      .catch(error => {
        console.log(error)
      })

    // TODO: Get all shapes in files. Disabled, too big: 3m2. 
    // Considering doing a separated "deep search" for shapes parts
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

    // Query with the Comunica engine. Not working on SPARQL endpoint, only on the examples they provide
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
    // }); });

    if (webId) {
      createSolidFile(webId);
    }

  }, [webId])
  // This useless array needs to be added for React to understand he needs to use the state inside

  function createSolidFile(webId: string) {
    // console.log(webId);
    // const location = webId + "/public/shapes-of-you/preferences.ttl";
    const location = webId.replace("profile/card#me", "public/shapes-of-you/preferences.ttl");
    // console.log('Try to create file ' + location);
    return data[location].put();
  }

  const searchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateState({ search: event.target.value })
  }

  const handleCheckboxes = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateState({type_checkboxes: {...state.type_checkboxes, [event.target.name]: event.target.checked} });
  }

  const handleExpandClick = (e: any) => {
    updateState({expanded_files: {...state.expanded_files, [e.currentTarget.name]: !state.expanded_files[e.currentTarget.name]} });
  };

  // function handleAutocompleteRepositories(event: any, value: string[]) {
  //   updateState({ repositories_autocomplete: value})
  // }
  // const pluralize = (count: any, noun: string, suffix = 's') =>
  // `${count} ${noun}${parseInt(count) !== 1 ? suffix : ''}`;
  
  // Filtering for faceted search
  // https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d
  const filtered_files = state.global_shapes_array
    .filter((repo: any) => {
      let search_description = repo.url + ' ';
      // if (file.label) search_description = search_description + ' ' + file.label;
      // if (file.description) search_description = search_description + ' ' + file.description;
      if (repo.description) search_description = search_description + ' ' + repo.description;
      if (repo.search_description) search_description = search_description + ' ' + repo.search_description;
      return search_description.toLowerCase().indexOf( state.search.toLowerCase() ) !== -1
    })
    .reduce((filtered: any, repo: any) => {
      // Filter files in the repo
      let filtered_repo: any = {}
      // Filter files for search input
      filtered_repo.files = repo.files.filter((file: any) => {
        let search_description = repo.url + ' ';
        if (file.label) search_description = search_description + ' ' + file.label;
        if (file.description) search_description = search_description + ' ' + file.description;
        if (repo.description) search_description = search_description + ' ' + repo.description;
        // Filter depending on shape type checkboxes:
        if ((state.type_checkboxes['ShEx'] === true && file.type == 'http://www.w3.org/ns/shex#Schema')
        || (state.type_checkboxes['SPARQL'] === true && file.type == 'http://www.w3.org/ns/shacl#SPARQLFunction')
        || (state.type_checkboxes['SHACL'] === true && file.type == 'http://www.w3.org/ns/shacl#Shape')
        || (state.type_checkboxes['OWL'] === true && file.type == 'http://www.w3.org/2002/07/owl#Ontology')
        || (state.type_checkboxes['OBO'] === true && file.type == 'http://semanticscience.org/resource/SIO_000623')
        || (state.type_checkboxes['SKOS'] === true && file.type == 'http://www.w3.org/2004/02/skos/core#ConceptScheme')
        || (state.type_checkboxes['R2RML'] === true && file.type == 'http://www.w3.org/ns/r2rml#TriplesMap')
        || (state.type_checkboxes['RML'] === true && file.type == 'http://semweb.mmlab.be/ns/rml#LogicalSource')
        || (state.type_checkboxes['OpenAPI'] === true && file.type == 'https://schema.org/APIReference')
        || (state.type_checkboxes['Dataset'] === true && file.type == 'http://www.w3.org/ns/dcat#Dataset')
        || (state.type_checkboxes['Nanopub'] === true && file.type == 'https://w3id.org/np/o/ntemplate/AssertionTemplate')
        ) {
          if (state.search) {
            return search_description.toLowerCase().indexOf( state.search.toLowerCase() ) !== -1
          } else {
            // Only filter by type if no search provided
            return true
          }
        }
      });
      filtered_repo.url = repo.url;
      if (repo.description) filtered_repo.description = repo.description;
      filtered.push(filtered_repo)
      return filtered;
    }, [])
    .filter((repo: any) => {
      // Remove repo with no files
      if (repo.files.length > 0) return true
    });

  // Define rendering of the page:
  return(
    <Container style={{marginTop: theme.spacing(4), marginBottom: theme.spacing(3)}}>
      {/* {state.show_pwa_alert &&
        <Alert onClose={() => {updateState({ show_pwa_alert: false}) }} style={{marginBottom: theme.spacing(2)}}> 
          This web page is a Progressive Web App (PWA), it can be installed as a regular smartphone app, or desktop app on a laptop in a simple click! 
          <br/>On Google Chrome click the + button to the right in the URL bar. Checkout <a href="https://medium.com/progressivewebapps/how-to-install-a-pwa-to-your-device-68a8d37fadc1" className={classes.link} target="_blank" rel="noopener noreferrer">this article for more details</a> about installing on various platforms.
        </Alert>
      } */}

      <LoggedIn>
        <Typography style={{textAlign: 'center', margin: theme.spacing(2, 2)}}>
          Welcome to your semantic resources index <Value src="user.name"/>!
        </Typography>
        {/* <Typography style={{textAlign: 'center', marginBottom: theme.spacing(2)}}>
          {webId}
        </Typography> */}
        <Typography style={{textAlign: 'center', marginBottom: theme.spacing(3)}}>
          Hopefully, soon you will be able to bookmark your favourites resources using your SOLID account! 🔖
        </Typography>
      </LoggedIn>

      <About />

      { state.repos_overview_chart['datasets'] && state.files_overview_chart['datasets'] &&
        <Grid container spacing={3} style={{textAlign: 'center', marginTop: theme.spacing(2)}}>
          <Grid item xs={12} md={6}>
            <Paper style={{padding: theme.spacing(2, 2)}}>
              <Typography variant="h6" style={{marginBottom: theme.spacing(1)}}>Number of repositories per resource type</Typography>
              <Bar data={state.repos_overview_chart} 
                options={chart_options(state.repos_overview_chart['datasets'][0]['data'])}
                plugins={[ChartDataLabels]}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper style={{padding: theme.spacing(2, 2)}}>
              <Typography variant="h6" style={{marginBottom: theme.spacing(1)}}>Number of files per resource type</Typography>
              <Bar data={state.files_overview_chart} options={chart_options(state.files_overview_chart['datasets'][0]['data'])}/>
            </Paper>
          </Grid>
        </Grid>
      }

      <Paper elevation={6} style={{padding: theme.spacing(3, 2), margin: theme.spacing(3, 0)}}>
        <Typography variant="h5">
          {filtered_files.reduce((filtered: any, repo: any) => filtered + repo.files.length, 0)} files in&nbsp;
          {Object.keys(filtered_files).length} repositories 
        </Typography>

        {/* Filtering options */}
        <Box display="flex" style={{margin: theme.spacing(2, 0)}}>
          {/* Search box */}
          <Paper component="form" className={classes.paperSearch}>
            <InputBase
              className={classes.searchInput} inputProps={{ 'aria-label': 'search input' }}
              placeholder={"🔎 Quick search"}
              onChange={searchChange}
            />
            <IconButton aria-label="search button">
              <SearchIcon />
            </IconButton>
          </Paper>

          <TextField
            id="shapes-per-page"
            value={state.shapes_per_page}
            onChange={(e: any) => {updateState({shapes_per_page: e.target.value})}}
            label="Repos per page"
            type="number"
            variant="outlined"
            // style={{ backgroundColor: '#ffffff' }}
          />
        </Box>

        {/* Autocomplete to filter by repositories or resource type */}
        {/* <Autocomplete
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
        /> */}

        {/* Display checkboxes to filter on shape type */}
        <FormGroup style={{marginTop: theme.spacing(2)}} row>
          {Object.keys(state.type_checkboxes).map((checkbox: any, key: number) => {
            return <FormControlLabel key={key}
              control={
                <Checkbox
                  checked={state.type_checkboxes[checkbox]}
                  onChange={handleCheckboxes}
                  name={checkbox}
                  color="primary"
                /> }
              label={checkbox + " " + getFileLabel(checkbox)}
            />
          })}
          {/* Button to check and uncheck all checkboxes */}
          <Button size="small" variant="contained" color="primary" style={{margin: theme.spacing(0, 2)}}
            onClick={() => {
              let checkboxes: any = {}
              Object.keys(state.type_checkboxes).map((type: any) => {
                checkboxes[type] = false;
              })
              updateState({ type_checkboxes: checkboxes });
            }}>
            {/* <SendIcon />&nbsp; */}
            Uncheck all
          </Button>
          <Button size="small" variant="contained" color="primary" style={{margin: theme.spacing(0, 2)}}
            onClick={() => {
              let checkboxes: any = {}
              Object.keys(state.type_checkboxes).map((type: any) => {
                checkboxes[type] = true;
              })
              updateState({ type_checkboxes: checkboxes });
            }}>
            Check all
          </Button>
        </FormGroup>

      </Paper>

      {Object.keys(state.global_shapes_array).length < 1 && (
        <div style={{textAlign: 'center'}}>
          <CircularProgress style={{padding: theme.spacing(10, 10)}} />
        </div>
      )}

      {/* Display Shapes files */}
      {filtered_files
          .slice(((state.page - 1)*(state.shapes_per_page)), ((state.page)*(state.shapes_per_page) - 1))
          .map(function(repo_obj: any, key: number){
        // return <Card key={key.toString()} elevation={2} style={{padding: theme.spacing(2, 2), margin: theme.spacing(2, 0)}}>
        return <Card key={key.toString()} elevation={2} style={{padding: theme.spacing(1, 1), margin: theme.spacing(2, 0)}}>
          <CardContent style={{paddingBottom: theme.spacing(0), margin: theme.spacing(0, 0)}}>
            <Typography >
              <a href={repo_obj.url} className={classes.link}>
                📁&nbsp;{repo_obj.url.replace('https://github.com/', '')}
              </a>
              {repo_obj.description &&
                <>
                  &nbsp;-&nbsp;{repo_obj.description}
                </>
              }
            </Typography>
            {/* <Typography style={{margin: theme.spacing(1, 0)}}>
              {repo_obj.files.length} files
            </Typography> */}

          </CardContent>

          <CardActions disableSpacing style={{padding: theme.spacing(0, 1), margin: theme.spacing(0, 0)}}>
            <IconButton style={{fontSize: '16px'}}
              onClick={handleExpandClick}
              name={repo_obj.url}
              aria-expanded={state.expanded_files[repo_obj.url]}
              aria-label="show about"
            >
              {repo_obj.files.length} files
              {!state.expanded_files[repo_obj.url] &&
                <ExpandMoreIcon />
              }
              {state.expanded_files[repo_obj.url] &&
                <ExpandLessIcon />
              }
            </IconButton>
          </CardActions>

          <Collapse in={state.expanded_files[repo_obj.url]} timeout="auto" unmountOnExit>
            <CardContent>
              {/* TODO: also filter files? */}
              {repo_obj.files.map(function(file_obj: any, key: number){
                return <Card key={key.toString()} style={{padding: theme.spacing(1, 1), margin: theme.spacing(1, 0)}}>
                  <Typography style={{margin: theme.spacing(1, 0)}}>
                    <a href={file_obj.url} className={classes.link}>
                      {getFileLabel(file_obj.type)} {file_obj.label}
                    </a>
                    <QueryYasguiButton endpoint={file_obj.sparqlEndpoint} query={file_obj.query} />
                    {file_obj.description &&
                      // Limit description to 1500 chars
                      <div style={{margin: theme.spacing(1, 0)}}>
                        <ReactMarkdown 
                          source={file_obj.description.substring(0, 1500)}
                          renderers={{ paragraph: Typography }}
                        />
                      </div>

                    }
                  </Typography>
                </Card>
              })}
            </CardContent>
          </Collapse>

          {/* Older coder block to get shapes for each files */}
          {/* <Typography variant="h6">
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
          {project.shape_file_description &&
            <Typography style={{fontStyle: 'italic', margin: theme.spacing(1, 0)}}>
              {project.shape_file_description}
            </Typography>
          }
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
          } */}
        </Card>
      })}
      <Pagination count={Math.floor(Object.keys(filtered_files).length / state.shapes_per_page) + 1} 
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
        schema:codeRepository ?repository .
    FILTER(?shape_type != schema:SoftwareSourceCode)
    OPTIONAL { ?repository rdfs:comment ?repo_description }
    OPTIONAL { ?shapeFileUri schema:query ?query }
    OPTIONAL { ?shapeFileUri void:sparqlEndpoint ?sparqlEndpoint }
    OPTIONAL { ?shapeFileUri rdfs:comment ?shape_file_description }
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
        schema:codeRepository ?repository ;
        dcterms:hasPart ?shapes .
    FILTER(?shape_type != schema:SoftwareSourceCode)
    OPTIONAL { ?repository rdfs:comment ?repo_description }
    OPTIONAL { ?shapeFileUri schema:query ?query }
    OPTIONAL { ?shapeFileUri void:sparqlEndpoint ?sparqlEndpoint }
    OPTIONAL { ?shapeFileUri rdfs:comment ?shape_file_description }
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
    schema:codeRepository ?repository .
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
        schema:codeRepository ?repository .
    FILTER(?shape_type != schema:SoftwareSourceCode)
} GROUP BY ?shape_type
`

function chart_options(data_array: any) {
  return {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          // suggestedMax: Math.max(...data_array) + 50
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
      datalabels: {
        display: true,
        color: 'black'
      },
      // labels: {
      //   // render 'label', 'value', 'percentage', 'image' or custom function, default is 'percentage'
      //   render: 'value',
      //   overlap: true,
      //   // fontSize: 12,

      //   // font color, can be color array for each data or function for dynamic color, default is defaultFontColor
      //   // fontColor: '#fff',
      //   // // draw text shadows under labels, default is false
      //   // textShadow: true,
      //   // text shadow intensity, default is 6
      //   // shadowBlur: 10,
      //   // // text shadow X offset, default is 3
      //   // shadowOffsetX: -5,
      //   // // text shadow Y offset, default is 3
      //   // shadowOffsetY: 5,
      //   // // text shadow color, default is 'rgba(0,0,0,0.3)'
      //   // shadowColor: 'rgba(255,0,0,0.75)',
      //   // position to draw label, available value is 'default', 'border' and 'outside'
      //   // bar chart ignores this
      //   // default is 'default'
      //   position: 'border',

      //   // set images when `render` is 'image'
      //   // images: [
      //   //   {
      //   //     src: 'image.png',
      //   //     width: 16,
      //   //     height: 16
      //   //   }
      //   // ]
      // }
    }
  }
}
