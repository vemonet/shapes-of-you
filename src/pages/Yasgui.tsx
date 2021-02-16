import React from "react";
import { useLocation } from "react-router-dom";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Container, Paper } from "@material-ui/core";
import axios from 'axios';

import Yasgui from "@triply/yasgui";
import "@triply/yasgui/build/yasgui.min.css";

const useStyles = makeStyles(theme => ({
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
  let location = useLocation();

  React.useEffect(() => {
    // Get URL params 
    // const params = new URLSearchParams(location.search + location.hash);
    // let sparql_endpoint: any = params.get('endpoint');
    
    // When used as component:
    if (props.endpoint && props.query) {
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
      // If only endpoint provided we import all queries for this endpoint
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
      const endpointToQuery = 'https://graphdb.dumontierlab.com/repositories/shapes-registry';
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
      // @ts-ignore If only query provided
      let yasgui: any = new Yasgui(document.getElementById('yasguiDiv'), {});

      yasgui.addTab(
        true, // set as active tab
        { ...Yasgui.Tab.getDefaults(), yasqe: { value: props.query }}
      );
      window.scrollTo(0, 0)
    }
  })

  // let params_array: any = []
  // if (props.endpoint) params_array.push('endpoint=' + props.endpoint)
  // if (props.query) params_array.push('query=' + encodeURIComponent(props.query))
  // const yasgui_query_url ='https://yasgui.triply.cc/#Method=GET&tabTitle=Shapes%20of%20you%20query&headers=%7B%7D&contentTypeConstruct=application%2Fn-triples%2C*%2F*%3Bq%3D0.9&contentTypeSelect=application%2Fsparql-results%2Bjson%2C*%2F*%3Bq%3D0.9&outputFormat=table&' + params_array.join('&');

  return (
    <Container className='mainContainer'>
      <div id="yasguiDiv"></div>
    </Container>
  )
}
