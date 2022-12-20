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
    margin: theme.spacing(2, 0),
  },
}));

export default function YasguiPage(props: any) {
  const classes = useStyles();
  const theme = useTheme();
  // useLocation hook to get URL params
  // let location = useLocation();

  const [state, setState] = React.useState({
    entities_relations_overview_results: [],
    loadingMetadata: false
  });
  const stateRef = React.useRef(state);
  // Avoid conflict when async calls
  const updateState = React.useCallback((update) => {
    stateRef.current = {...stateRef.current, ...update};
    setState(stateRef.current);
  }, [setState]);

  function shortenUri(uriToShorten: string) {
    for (const prefix in Config.prefix_registry) {
      if (uriToShorten.startsWith(Config.prefix_registry[prefix])) {
        return uriToShorten.replace(Config.prefix_registry[prefix], prefix + ':');
      }
    }
    return uriToShorten;
  }

  React.useEffect(() => {
    // Get params from URL
    // const params = new URLSearchParams(location.search + location.hash);
    // let sparql_endpoint: any = params.get('endpoint');

    if (props.endpoint) {
      updateState({ loadingMetadata: true });
      axios.get(Config.sparql_endpoint + `?query=` + encodeURIComponent(entities_relations_query.replace('?_metadataGraph', props.endpoint)))
      .then((res: any) => {
        if (res.data.results && res.data.results.bindings.length > 0){
          // Found metadata for classes relations
          updateState( { entities_relations_overview_results: res.data.results.bindings } );
          updateState({ loadingMetadata: false });
          $('#datatableEntitiesRelationOverview').DataTable({
            "autoWidth": false
          });
        } else {
          // Get only subject class counts
          axios.get(Config.sparql_endpoint + `?query=` + encodeURIComponent(entities_query.replace('?_metadataGraph', props.endpoint)))
            .then((res: any) => {
              updateState({ loadingMetadata: false });
              if (res.data.results){
                updateState( { entities_relations_overview_results: res.data.results.bindings } );
                $('#datatableEntitiesRelationOverview').DataTable({
                  "autoWidth": false
                });
              }
            })
            .catch(error => {
              updateState({ loadingMetadata: false });
              console.log(error)
            })
        }
      })
      .catch(error => {
        console.log(error)
      })
    }

    if (props.endpoint && props.query) {
      // If endpoint and query provided we add 1 tab for this query to query this endpoint
      const sparql_endpoint = props.endpoint
      Yasgui.defaults.requestConfig.endpoint = sparql_endpoint;
      // @ts-ignore If endpoint and query provided
      let yasgui: any = new Yasgui(document.getElementById('yasguiDiv'), {
        requestConfig: { endpoint: sparql_endpoint },
        // endpoint: sparql_endpoint,
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
          FILTER (strlen(str(?query)) > 1)
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
            // endpoint: sparql_endpoint,
            copyEndpointOnNewTab: true,
          });

          const results_array = res.data.results.bindings;
          let queries_obj: any = {}
          results_array.map((result: any): any =>  {
            // let endpoint_obj = {'endpoint': result.sparql_endpoint.value}
            queries_obj[result.file_label.value] = result.query.value
          })
          if (Object.keys(yasgui._tabs).length > 1) {
            Object.keys(yasgui._tabs).map((tab_id: any): any =>  {
              // console.log(tab_id);
              let tab: any = yasgui.getTab(tab_id);
              tab.close();
            })
          }
          // let tab: any = yasgui.getTab();

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
    } else if (props.file_url) {

      const get_sparql_queries_query = `PREFIX schema: <https://schema.org/>
        PREFIX void: <http://rdfs.org/ns/void#>
        PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
        SELECT DISTINCT * WHERE {
          ?query_file rdfs:label ?file_label ;
            schema:query ?query .
          FILTER (strlen(str(?query)) > 1)
          FILTER (?query_file = <` + props.file_url + `>)
          OPTIONAL { ?query_file rdfs:comment ?file_description }
        }`
      const endpointToQuery = Config.sparql_endpoint;
      axios.get(endpointToQuery + `?query=` + encodeURIComponent(get_sparql_queries_query))
        .then((res: any) => {
          // Yasgui.defaults.requestConfig.endpoint = sparql_endpoint;
          // @ts-ignore Set YASGUI to serve all queries of the selected endpoint
          let yasgui: any = new Yasgui(document.getElementById('yasguiDiv'), {
            // requestConfig: { endpoint: sparql_endpoint },
            // endpoint: sparql_endpoint,
            copyEndpointOnNewTab: true,
          });

          const results_array = res.data.results.bindings;
          let queries_obj: any = {}
          results_array.map((result: any): any =>  {
            // let endpoint_obj = {'endpoint': result.sparql_endpoint.value}
            queries_obj[result.file_label.value] = result.query.value
          })
          if (Object.keys(yasgui._tabs).length > 1) {
            Object.keys(yasgui._tabs).map((tab_id: any): any =>  {
              // console.log(tab_id);
              let tab: any = yasgui.getTab(tab_id);
              tab.close();
            })
          }
          // let tab: any = yasgui.getTab();

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


    }
  }, [setState])

  return (
    <Container>
      {state.loadingMetadata &&
        <CircularProgress />
      }
      {Object.keys(state.entities_relations_overview_results).length > 0 && (<>
        <Typography variant="h5" style={{marginBottom: theme.spacing(3), marginTop: theme.spacing(0)}}>
          Endpoint metadata
        </Typography>
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
                    <td><a href={row.graph.value}/>{shortenUri(row.graph.value)}</td>
                    <td><Typography>{row.subjectCount.value}</Typography></td>
                    <td><a href={row.subject.value} />{shortenUri(row.subject.value)}</td>
                    <td><a href={row.predicate.value} />{shortenUri(row.predicate.value)}</td>
                    {row.object && (
                      <>
                        <td><a href={row.object.value} />{shortenUri(row.object.value)}</td>
                        <td><Typography variant="body2">{row.objectCount.value}</Typography></td>
                      </>
                    )}
                    {!row.object && (
                      <>
                        <td><Typography variant="body2">No metadata</Typography></td>
                        <td><Typography variant="body2">No metadata</Typography></td>
                      </>
                    )}
                  </tr>
              })}
            </tbody>
          </table>
        </Paper>
      </>)}

      {/* <Typography variant="h5" style={{marginBottom: theme.spacing(3), marginTop: theme.spacing(4)}}>
        Query with YASGUI
      </Typography> */}

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
    ?graph void:propertyPartition ?propertyPartition .
    ?propertyPartition void:property ?predicate ;
      void:classPartition [
        void:class ?subject ;
        void:distinctSubjects ?subjectCount ;
      ] ;
      void-ext:objectClassPartition [
        void:class ?object ;
        void:distinctObjects ?objectCount ;
      ] .
  }
} ORDER BY DESC(?subjectCount)`


const entities_query = `PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
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
    ?graph void:propertyPartition ?propertyPartition .
    ?propertyPartition void:property ?predicate ;
      void:classPartition [
        void:class ?subject ;
        void:distinctSubjects ?subjectCount ;
      ] .
  }
} ORDER BY DESC(?subjectCount)`
