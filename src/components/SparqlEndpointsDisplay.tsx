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

export default function SparqlEndpointsDisplay() {
  const classes = useStyles();
  const theme = useTheme();
  const webId = useWebId();
  // const solid_name = useLDflexValue('user.name') || 'unknown';
  
  const [state, setState] = React.useState({
    webid: '',
    sparql_endpoints_array: [],
    search: '',
    // repositories_hash: [],
    // repositories_autocomplete: [],
    // repos_overview_chart: {},
    // files_overview_chart: {},
    // checkbox_shacl: true,
    // checkbox_shex: true,
    // checkbox_sparql: true,
    // checkbox_owl: true,
    // checkbox_skos: true,
    // checkbox_obo: true,
    // checkbox_openapi: true,
    // show_pwa_alert: true,
    // page: 1,
    // shapes_per_page: 100,
    // show_info_card: true,
  });
  const stateRef = React.useRef(state);

  // Avoid conflict when async calls
  // Can be done with another lib (cf. Turgay)
  const updateState = React.useCallback((update) => {
    stateRef.current = {...stateRef.current, ...update};
    setState(stateRef.current);
  }, [setState]);


  // componentDidMount: Query SPARQL endpoint to get the SPARQL endpoints infos
  React.useEffect(() => {
    const endpointToQuery = 'https://graphdb.dumontierlab.com/repositories/shapes-registry';

    axios.get(endpointToQuery + `?query=` + encodeURIComponent(get_sparql_endpoints_query))
      .then(res => {
        const results_array = res.data.results.bindings;
        let sparql_endpoints_array = []
        results_array.map((result: any): any =>  {
          // @ts-ignore
          sparql_endpoints_array.push(result.sparql_endpoint.value);
        })
        updateState({ sparql_endpoints_array: sparql_endpoints_array })
      })
      .catch(error => {
        console.log(error)
      })

  }, [])
  // This useless array needs to be added for React to understand he needs to use the state inside...

  const searchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateState({ search: event.target.value })
  }
  
  // Could not find good dynamic faceted search, best is https://github.com/ebi-gene-expression-group/scxa-faceted-search-results
  // Each faceted search filter can be added here (on the shapes files array)
  // const filtered_files = state.shapes_files_list.filter( (shapes_file: any) =>{
  //   if (shapes_file) {
  //     if (shapes_file.label) {
  //       // Filter by repo: show shapes if no repo selected, or if its repo is in list of selected repos
  //       if (state.repositories_autocomplete.length == 0 || state.repositories_autocomplete.find((repo: string) => repo.includes(shapes_file.repository))) {
  //         // Filter depending on shape type checkboxes:
  //         if ((state.checkbox_shex === true && shapes_file.shape_type == 'http://www.w3.org/ns/shex#Schema')
  //         || (state.checkbox_sparql === true && shapes_file.shape_type == 'http://www.w3.org/ns/shacl#SPARQLFunction')
  //         || (state.checkbox_shacl === true && shapes_file.shape_type == 'http://www.w3.org/ns/shacl#Shape')
  //         || (state.checkbox_owl === true && shapes_file.shape_type == 'http://www.w3.org/2002/07/owl#Ontology')
  //         || (state.checkbox_obo === true && shapes_file.shape_type == 'http://semanticscience.org/resource/SIO_000623')
  //         || (state.checkbox_skos === true && shapes_file.shape_type == 'http://www.w3.org/2004/02/skos/core#ConceptScheme')
  //         || (state.checkbox_openapi === true && shapes_file.shape_type == 'https://schema.org/WebAPI')
  //         ) {
  //           // Filter using the search text, on all properties and metadata of the file:
  //           let file_description = '';
  //           if (shapes_file.repo_description) file_description = file_description + ' ' + shapes_file.repo_description;
  //           if (shapes_file.shape_file_description) file_description = file_description + ' ' + shapes_file.shape_file_description;
  //           if (shapes_file.sparqlEndpoint) file_description = file_description + ' ' + shapes_file.sparqlEndpoint;
  //           if (shapes_file.query) file_description = file_description + ' ' + shapes_file.query;
  //           return (shapes_file.label.toLowerCase().indexOf( state.search.toLowerCase() ) !== -1 
  //             || shapes_file.shapeFileUri.toLowerCase().indexOf( state.search.toLowerCase() ) !== -1
  //             || shapes_file.shapes && shapes_file.shapes.join(' ').toLowerCase().indexOf( state.search.toLowerCase() ) !== -1
  //             || shapes_file.repository.toLowerCase().indexOf( state.search.toLowerCase() ) !== -1
  //             || file_description.toLowerCase().indexOf( state.search.toLowerCase() ) !== -1
  //           )
  //         }
  //       }
  //     }
  //   }
  // })


  // Define rendering of the page:
  return(
    <Container className='mainContainer'>
      <Typography>
        List of active SPARQL endpoints defined in SPARQL queries metadata
      </Typography>
      <List>
        {state.sparql_endpoints_array.map(function(sparql_endpoint: any, key: number){
          return <ListItem>
            <ListItemAvatar>
              <Avatar>
                <CheckCircleIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText>
              <b><a href={sparql_endpoint} className={classes.link} target="_blank" rel="noopener noreferrer">{sparql_endpoint}</a></b>
            </ListItemText>
          </ListItem>
        })}
      </List>
    </Container>
  )
}

// SPARQL select query which returns the count of repositories and shapes files per semantic resources types
const get_sparql_endpoints_query = `PREFIX schema: <https://schema.org/>
SELECT DISTINCT * WHERE { 
  ?sparql_endpoint a schema:EntryPoint .
} 
`
