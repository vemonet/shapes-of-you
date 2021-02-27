  import React from 'react';
import { makeStyles,  useTheme } from '@material-ui/core/styles';
import { Container, CircularProgress, Typography } from "@material-ui/core";
import { List, ListItem, ListItemAvatar, ListItemText } from "@material-ui/core";
import axios from 'axios';

import Config from "../components/Config";
import QueryYasguiButton from "../components/QueryYasguiButton";

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

export default function SparqlEndpointsList() {
  const classes = useStyles();
  const theme = useTheme();
  // const solid_name = useLDflexValue('user.name') || 'unknown';
  
  const [state, setState] = React.useState({
    sparql_endpoints_obj: {},
    search: '',
  });
  const stateRef = React.useRef(state);
  // Avoid conflict when async calls
  const updateState = React.useCallback((update) => {
    stateRef.current = {...stateRef.current, ...update};
    setState(stateRef.current);
  }, [setState]);


  // At start: query SPARQL endpoint to get the SPARQL endpoints infos
  React.useEffect(() => {
    const endpointToQuery = Config.sparql_endpoint;
    axios.get(endpointToQuery + `?query=` + encodeURIComponent(get_sparql_endpoints_query))
      .then(res => {
        const results_array = res.data.results.bindings;
        let sparql_endpoints_obj: any = {}
        results_array.map((result: any): any =>  {
          // @ts-ignore
          // sparql_endpoints_array.push([{
          //   'endpoint': result.sparql_endpoint.value
          // }]);
          const endpoint_url = result.sparql_endpoint.value
          if (!sparql_endpoints_obj[endpoint_url]) {
            sparql_endpoints_obj[endpoint_url] = {
              'url': endpoint_url,
              'queries_count': result.queries_count.value,
              'datasets_graph_count': result.datasets_graph_count.value
            }
          }
          // let query_obj = {'url': result.query_file.value}
          // if (result.file_description) query_obj['description'] = result.file_description.value
          // if (result.query) query_obj['query'] = result.query.value
          // sparql_endpoints_obj[endpoint_url]['queries'].push(query_obj)
        })
        console.log(sparql_endpoints_obj)
        updateState({ sparql_endpoints_obj: sparql_endpoints_obj })
      })
      .catch(error => {
        console.log(error)
      })
  }, [])
  // This useless array needs to be added for React to understand he needs to use the state inside...
  
  // Define rendering of the page:
  return(
    <Container>
      {Object.keys(state.sparql_endpoints_obj).length < 1 && (
        <div style={{textAlign: 'center'}}>
          <CircularProgress style={{padding: theme.spacing(10, 10)}} />
        </div>
      )}

      {Object.keys(state.sparql_endpoints_obj).length >= 1 && (
        <>
          <Typography variant='body1'>
            {Object.keys(state.sparql_endpoints_obj).length} active SPARQL endpoints
          </Typography>

          <List>
            {Object.keys(state.sparql_endpoints_obj)
              .sort((a: any, b: any): number => {
                console.log('ab');
                console.log(a);
                console.log(b);
                // state.sparql_endpoints_obj[a].datasets_graph_count - state.sparql_endpoints_obj[b].datasets_graph_count;
                return a.datasets_graph_count - b.datasets_graph_count;
              })
              .map(function(sparql_endpoint: any, key: number){
              return <ListItem key={key}>
                <ListItemAvatar>
                  <QueryYasguiButton endpoint={sparql_endpoint} />
                </ListItemAvatar>
                <ListItemText>
                  <b><a href={sparql_endpoint} className={classes.link} target="_blank" rel="noopener noreferrer">{sparql_endpoint}</a></b>
                  {state.sparql_endpoints_obj[sparql_endpoint].queries_count > 0 &&
                    <>
                      &nbsp;- {state.sparql_endpoints_obj[sparql_endpoint].queries_count} SPARQL queries
                    </>
                  }
                  {state.sparql_endpoints_obj[sparql_endpoint].datasets_graph_count > 1 &&
                    <>
                      &nbsp;- Metadata computed for <b>{state.sparql_endpoints_obj[sparql_endpoint].datasets_graph_count}</b> graphs
                    </>
                  }
                </ListItemText>
              </ListItem>
              })
            }
          </List>
        </>
      )}
    </Container>
  )
}

// SPARQL select query which returns the count of repositories and shapes files per semantic resources types
const get_sparql_endpoints_query = `PREFIX schema: <https://schema.org/>
PREFIX void: <http://rdfs.org/ns/void#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
SELECT DISTINCT ?sparql_endpoint (count(distinct ?query_file) AS ?queries_count) (count(distinct ?datasets_graph) AS ?datasets_graph_count)
WHERE { 
  ?sparql_endpoint a schema:EntryPoint .
  OPTIONAL {
    ?query_file void:sparqlEndpoint ?sparql_endpoint ;
      schema:query ?query
  }
  OPTIONAL {
    GRAPH ?sparql_endpoint {
      ?datasets_graph a void:Dataset .
      FILTER EXISTS { ?datasets_graph void:propertyPartition ?propertyPartition . }
    } 
  }
} GROUP BY ?sparql_endpoint
`
