import React from "react";
// import { useLocation } from "react-router-dom";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Container, Typography, Paper, CircularProgress } from "@material-ui/core";
import axios from 'axios';

// Import jquery datatables.net
import 'datatables.net-dt/css/jquery.dataTables.min.css'
const $ = require('jquery');
$.DataTable = require('datatables.net');

import Yasgui from "@triply/yasgui";
import "@triply/yasgui/build/yasgui.min.css";

import Config from "../components/Config";

const useStyles = makeStyles(theme => ({
  margin: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    // textAlign: 'center',
  },
  link: {
    textDecoration: 'none',
    color: theme.palette.primary.main,
    '&:hover': {
      color: theme.palette.secondary.main,
      textDecoration: 'none',
    },
  },
  paperPadding: {
    padding: theme.spacing(2, 2),
    // margin: theme.spacing(2, 2),
  },
}));

export default function YasguiPage(props: any) {
  const classes = useStyles();
  const theme = useTheme();
  // useLocation hook to get URL params
  // let location = useLocation();

  const [state, setState] = React.useState({
    entities_relations_overview_results: []
  });
  const stateRef = React.useRef(state);
  // Avoid conflict when async calls
  const updateState = React.useCallback((update) => {
    stateRef.current = {...stateRef.current, ...update};
    setState(stateRef.current);
  }, [setState]);

  React.useEffect(() => {
    // Get params from URL
    // const params = new URLSearchParams(location.search + location.hash);
    // let sparql_endpoint: any = params.get('endpoint');

    if (props.endpoint) {
      axios.get(Config.sparql_endpoint + `?query=` + encodeURIComponent(entities_relations_query.replace('?_metadataGraph', props.endpoint)))
      .then((res: any) => {
        if (res.data.results){
          console.log('In endpoint');
          console.log(res.data.results.bindings);
          updateState( { entities_relations_overview_results: res.data.results.bindings } );
          // updateState({ graphsLoading: false });
          // $(this.refs.graphsOverview).DataTable();
          $('#datatableEntitiesRelationOverview').DataTable({
            "autoWidth": false
          });
        }
      })
    }

    
    if (props.endpoint && props.query) {
      // If endpoint and query provided we add 1 tab for this query to query this endpoint
      const sparql_endpoint = props.endpoint
      Yasgui.defaults.requestConfig.endpoint = sparql_endpoint;
      // @ts-ignore If endpoint and query provided
      let yasgui: any = new Yasgui(document.getElementById('yasguiDiv'), {
        requestConfig: { endpoint: sparql_endpoint },
        endpoint: sparql_endpoint,
        copyEndpointOnNewTab: true,
      });
      yasgui.addTab(
        true, // set as active tab
        { ...Yasgui.Tab.getDefaults(), yasqe: { value: props.query }}
      );
      window.scrollTo(0, 0)

    } else if (props.endpoint) {
      // If only the endpoint is provided, we import all queries for this endpoint
      let sparql_endpoint: any = props.endpoint
      const get_sparql_endpoints_query = `PREFIX schema: <https://schema.org/>
        PREFIX void: <http://rdfs.org/ns/void#>
        PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
        SELECT DISTINCT * WHERE { 
          ?sparql_endpoint a schema:EntryPoint .
          ?query_file void:sparqlEndpoint ?sparql_endpoint ;
            rdfs:label ?file_label ;
            schema:query ?query .
          FILTER (?sparql_endpoint = <` + sparql_endpoint + `>)
          OPTIONAL { ?query_file rdfs:comment ?file_description }
        }`
      const endpointToQuery = Config.sparql_endpoint;
      axios.get(endpointToQuery + `?query=` + encodeURIComponent(get_sparql_endpoints_query))
        .then((res: any) => {
          Yasgui.defaults.requestConfig.endpoint = sparql_endpoint;
          // @ts-ignore Set YASGUI to serve all queries of the selected endpoint
          let yasgui: any = new Yasgui(document.getElementById('yasguiDiv'), {
            requestConfig: { endpoint: sparql_endpoint },
            endpoint: sparql_endpoint,
            copyEndpointOnNewTab: true,
          });

          const results_array = res.data.results.bindings;
          let queries_obj: any = {}
          results_array.map((result: any): any =>  {
            // let endpoint_obj = {'endpoint': result.sparql_endpoint.value}
            queries_obj[result.file_label.value] = result.query.value
          })
          // let tab: any = yasgui.getTab();
          // tab.close();
          // Add tab to yasgui for each file
          Object.keys(queries_obj).map((file_label: any) => {
            // if (!yasgui.getTab(file_label)) {
            yasgui.addTab(
              true, // set as active tab
              { ...Yasgui.Tab.getDefaults(), name: file_label.substring(0,30),
                yasqe: { value: queries_obj[file_label] }}
            );
          })
          window.scrollTo(0, 0)
        })
        .catch(error => {
          console.log(error)
        })

    } else if (props.query) {
      // @ts-ignore Add tab if only query provided
      let yasgui: any = new Yasgui(document.getElementById('yasguiDiv'), {});
      yasgui.addTab(
        true, // set as active tab
        { ...Yasgui.Tab.getDefaults(), yasqe: { value: props.query }}
      );
      window.scrollTo(0, 0)
    }
  }, [setState])

  return (
    <Container>
      {Object.keys(state.entities_relations_overview_results).length > 0 && (<>
        {/* <Typography variant="body1" className={classes.margin} style={{ marginTop: theme.spacing(6) }}>
          <a href='https://datatables.net' className={classes.link} target='_blank' rel="noopener noreferrer">
            Datatable
          </a>
        </Typography> */}
        <Paper elevation={4} className={classes.paperPadding}>
          <table id='datatableEntitiesRelationOverview' style={{ wordBreak: 'break-all' }}>
            <thead>
              <tr>
                <th>Graph</th>
                <th># of instance of subject</th>
                <th>Subject class</th>
                <th>Have relation</th>
                <th>With Object class</th>
                <th># of instance of object</th>
              </tr>
            </thead>
            <tbody>
              {/* Iterate Describe query results array */}
              {state.entities_relations_overview_results.map((row: any, key: number) => {
                return <tr key={key}>
                    <td><a href={row.graph.value}/>{row.graph.value}</td>
                    <td><Typography>{row.subjectCount.value}</Typography></td>
                    <td><a href={row.subject.value} />{row.subject.value}</td>
                    <td><a href={row.predicate.value} />{row.predicate.value}</td>
                    {row.object && (
                      <td><a href={row.object.value} />{row.object.value}</td>
                    )}
                    {!row.object && (
                      <td><Typography variant="body2">Not found</Typography></td>
                    )}
                    <td><Typography variant="body2">{row.objectCount.value}</Typography></td>
                  </tr>
              })}
            </tbody>
          </table>
        </Paper>
      </>)}
      
      <div id="yasguiDiv"></div>
    </Container>
  )
}

const entities_relations_query = `PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX dct: <http://purl.org/dc/terms/>
PREFIX bl: <http://w3id.org/biolink/vocab/>
PREFIX dctypes: <http://purl.org/dc/dcmitype/>
PREFIX idot: <http://identifiers.org/idot/>
PREFIX dcat: <http://www.w3.org/ns/dcat#>
PREFIX void: <http://rdfs.org/ns/void#>
PREFIX dc: <http://purl.org/dc/elements/1.1/>
PREFIX foaf: <http://xmlns.com/foaf/0.1/>
PREFIX void-ext: <http://ldf.fi/void-ext#>
SELECT DISTINCT ?graph ?subjectCount ?subject ?predicate ?objectCount ?object
WHERE {
  GRAPH <?_metadataGraph> {
    # ?graph a void:Dataset .
    ?graph void:propertyPartition [
      void:property ?predicate ;
      void:classPartition [
        void:class ?subject ;
        void:distinctSubjects ?subjectCount ;
      ];
      void-ext:objectClassPartition [
      void:class ?object ;
      void:distinctObjects ?objectCount ;
      ]
    ] .
  }
} ORDER BY DESC(?subjectCount)`