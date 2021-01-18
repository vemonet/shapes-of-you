import React from 'react';
import { makeStyles,  useTheme } from '@material-ui/core/styles';
import { Typography, Container, Box, Button, Chip, Tooltip, Grid, Paper } from "@material-ui/core";
import { IconButton, InputBase } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import axios from 'axios';

import { FormGroup, FormControlLabel, Checkbox, TextField } from "@material-ui/core";
import Autocomplete from '@material-ui/lab/Autocomplete';

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
    width: '30%',
    marginRight: theme.spacing(3)
  },
  searchInput: {
    marginLeft: theme.spacing(1),
    width: '50%',
    fontSize: '14px',
    flex: 1,
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
    '&:hover': {
      color: theme.palette.primary.main,
      textDecoration: 'none',
    },
  },
}))

export default function ShapeRegistry() {
  const classes = useStyles();
  const theme = useTheme();
  const webId = useWebId();
  // const solid_name = useLDflexValue('user.name') || 'unknown';
  
  const [state, setState] = React.useState({
    webid: '',
    shapes_files_list: [],
    search: '',
    repositories_hash: {},
    repositories_autocomplete: [],
    // repo_files_hash: {},
    category_pie: {},
    checkbox_shacl: true,
    checkbox_shex: true,
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
    console.log(endpointToQuery);

    // Check SOLID pod for a shapes preference file
    // https://github.com/solid/react-components/blob/master/demo/app.jsx
    // https://solid.github.io/react-components/

    // Query directly using Axios
    axios.get(endpointToQuery + `?query=` + encodeURIComponent(getShapesQuery))
      .then(res => {
        const sparqlResultArray = res.data.results.bindings;

        // Convert array to object: {0:"a", 1:"b", 2:"c"}
        const projects_converted_hash = { ...sparqlResultArray }
        let projects_hash: any = {}
        // Iterate over projects
        Object.keys(projects_converted_hash).forEach(function(project) {
          const projectName = projects_converted_hash[project]['shapeFileUri']['value']
          // Use the project URI as key in the hash
          if (!projects_hash[projectName]){
            projects_hash[projectName] = {shapes: []}
          }
          // Iterate over project properties
          Object.keys(projects_converted_hash[project]).forEach(function(property: any) {
            const propertyHash = projects_converted_hash[project][property]
            if (propertyHash) {
              if (property == 'shapes') {
                // Exception for programming language which is a list
                projects_hash[projectName][property].push(propertyHash.value);
              } else {
                projects_hash[projectName][property] = propertyHash.value 
              }
            }
          })
        })
        // Convert back to array for filtering
        const project_final_array: any = Object.keys(projects_hash).map((key) => projects_hash[key]);
        updateState({shapes_files_list: project_final_array})
      })
      .catch(error => {
        console.log(error)
      })

    // Get repositories and their files counts
    let repositories_hash: any = {}
    axios.get(endpointToQuery + `?query=` + encodeURIComponent(countRepositoriesQuery))
      .then(res => {
        const sparqlResultArray = res.data.results.bindings;

        sparqlResultArray.map((result: any) =>  {
          repositories_hash[result.repository.value] = result.shapeFileCount.value;
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
    console.log('In createSolidFile');
    console.log(webId);
    // const location = webId + "/public/shapes-of-you/preferences.ttl";
    const location = webId.replace("profile/card#me", "public/shapes-of-you/preferences.ttl");
    console.log('Try to create file ' + location);
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
  
  // Each faceted search filter can be added here (on the shapes files array)
  const filtered_files = state.shapes_files_list.filter( (shapes_file: any) =>{
    if (shapes_file.label) {
      // Filter by repo if 1 selected
      // @ts-ignore Useless warning on indexOf(shapes_file.repository)
      if (state.repositories_autocomplete.length == 0 || state.repositories_autocomplete.indexOf(shapes_file.repository) > -1) {
        // Filter depending on shacl/shex checkboxes:
        if ((state.checkbox_shex === true && shapes_file.label.endsWith('.shex'))
        || state.checkbox_shacl === true && !shapes_file.label.endsWith('.shex')) {
          // Filter on search:
          return (shapes_file.label.toLowerCase().indexOf( state.search.toLowerCase() ) !== -1 
            || shapes_file.shapeFileUri.toLowerCase().indexOf( state.search.toLowerCase() ) !== -1
            || shapes_file.shapes.join(' ').toLowerCase().indexOf( state.search.toLowerCase() ) !== -1
            || shapes_file.repository.toLowerCase().indexOf( state.search.toLowerCase() ) !== -1
          )
        }
      }
    }
  })

  // Define rendering of the page:
  return(
    <Container className='mainContainer'>
      <Typography variant="h4" style={{textAlign: 'center'}}>
        💠 Shapes of You
      </Typography>
      <LoggedIn>
        <Typography style={{textAlign: 'center', marginBottom: '20px'}}>
          Welcome to your SHACL & ShEx Shapes registry <Value src="user.name"/>!
        </Typography>
        {/* <Typography style={{textAlign: 'center', marginBottom: '20px'}}>
          {webId}
        </Typography> */}
        <Typography style={{textAlign: 'center', marginBottom: '20px'}}>
          Soon you will be able to bookmark your favourites Shapes using your SOLID account! 🔖
        </Typography>
      </LoggedIn>
      <LoggedOut>
        <Typography style={{textAlign: 'center', marginBottom: '20px'}}>
          Your SHACL & ShEx Shapes registry
        </Typography>
      </LoggedOut>

      <Typography>
        Add the tag <code>shacl-shapes</code> or <code>shex</code> to your GitHub repository, we automatically index all ShEx (<code>.shex</code>) and SHACL files (<code>.ttl</code>, <code>.rdf</code>, <code>.jsonld</code>, <code>.trig</code>, <code>.nq</code>, etc) containing at least one <code>sh:NodeShape</code> from your repository everyday at 1:00 and 13:00 🕐
      </Typography>

      <a href="https://github.com/MaastrichtU-IDS/shapes-of-you/actions?query=workflow%3A%22Get+shapes+from+GitHub%22">
        <img src="https://github.com/MaastrichtU-IDS/shapes-of-you/workflows/Get%20shapes%20from%20GitHub/badge.svg" 
        style={{marginTop: theme.spacing(2)}} />
      </a>
    
      <Typography variant="h5" style={{marginTop: theme.spacing(2)}}>
        {filtered_files.length} Shapes files in&nbsp;
        {(state.repositories_autocomplete.length > 0 && state.repositories_autocomplete.length) || Object.keys(state.repositories_hash).length} Shapes repositories 
      </Typography>

      {/* Filtering options */}
      <Box display="flex" style={{margin: theme.spacing(2, 0)}}>
        {/* Search box */}
        <Paper component="form" className={classes.paperSearch}>
          <InputBase  // https://material-ui.com/api/input-base/
            className={classes.searchInput} inputProps={{ 'aria-label': 'search' }}
            placeholder={"Search shapes"}
            onChange={searchChange}
          />
          <IconButton aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>

        {/* shacl/shex checkboxes */}
        <FormGroup row>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checkbox_shacl}
                onChange={handleCheckboxes}
                name="checkbox_shacl"
                color="primary"
              />
            }
            label="SHACL"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checkbox_shex}
                onChange={handleCheckboxes}
                name="checkbox_shex"
                color="primary"
              />
            }
            label="ShEx"
          />
        </FormGroup>
      </Box>

      {/* Autocomplete to filter by repositories */}
      <Autocomplete
        multiple
        value={state.repositories_autocomplete}
        onChange={handleAutocompleteRepositories}
        id="autocomplete-repositories"
        options={Object.keys(state.repositories_hash)}
        renderInput={params => <TextField {...params} 
        label="Filter by repositories" 
        variant="outlined" 
        style={{ backgroundColor: '#ffffff' }}
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

      {/* Iterate over shapes files */}
      {filtered_files.map(function(project: any, key: number){
        return <Paper key={key.toString()} elevation={4} style={{padding: '15px', marginTop: '25px', marginBottom: '25px'}}>
          <Typography variant="h6">
            Shapes file:&nbsp;
            <b><a href={project.shapeFileUri} className={classes.link}>{project.label}</a></b>&nbsp;&nbsp;
            <LoggedIn>
              <Like object={project.shapeFileUri}>the Shape</Like>
            </LoggedIn>
          </Typography>
          <Typography style={{marginBottom: '5px', marginTop: '5px'}}>
            In repository:&nbsp;
            <a href={project.repository} className={classes.link}>
              {project.repository}
            </a>
          </Typography>
          <Typography style={{marginTop: '5px'}}>
            Contains {pluralize(project.shapes.length, 'Shape')}:
          </Typography>
          {project.shapes.map((shapeLabel: string, key: number) => {
            // Limit shape label size to 150 chars
            return <Chip label={shapeLabel.substring(0, 150)} color='primary' style={{margin: '5px', wordBreak: 'break-word'}} key={key.toString()}/>
          })}
        </Paper>
      })}
    </Container>
  )
}

const getShapesQuery = `PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX dc: <http://purl.org/dc/elements/1.1/>
PREFIX dcterms: <http://purl.org/dc/terms/>
select distinct * where { 
    ?shapeFileUri a <https://schema.org/DataDownload> ;
        rdfs:label ?label ;
        dc:source ?repository ;
        dcterms:hasPart ?shapes .
    OPTIONAL { ?repository rdfs:comment ?repo_description }
}`
// } LIMIT 1000`

const countRepositoriesQuery = `PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX dc: <http://purl.org/dc/elements/1.1/>
PREFIX dcterms: <http://purl.org/dc/terms/>
select ?repository (count(?shapeFileUri) as ?shapeFileCount) where { 
  ?shapeFileUri a <https://schema.org/DataDownload> ;
    rdfs:label ?label ;
    dc:source ?repository .
} GROUP BY ?repository
`
