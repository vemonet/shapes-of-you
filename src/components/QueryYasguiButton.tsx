import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Button } from "@material-ui/core";
import SendIcon from '@material-ui/icons/Send';
import SearchIcon from '@material-ui/icons/Search';

// var Config = require('Config')

const useStyles = makeStyles(theme => ({
  uriLink: {
    textDecoration: 'none',
    color: 'rgba(0, 0, 0, 0.87)',
    '& :hover': {
      color: theme.palette.primary.main,
    },
    overflowWrap: 'break-word'
  },
  link: {
    textDecoration: 'none',
    color: theme.palette.primary.main,
    '&:hover': {
      color: theme.palette.secondary.main,
      textDecoration: 'none',
    },
  },
}));


// Format a link to be displayedby shortening URI
export default function QueryYasguiButton(props: any) {
  const classes = useStyles();
  const theme = useTheme();

  // TODO: improve, use centralized service? (prefixcommons/prefix.cc)
  // const prefixRegistry: any = {
  //   "rdf":         "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
  //   "rdfs":        "http://www.w3.org/2000/01/rdf-schema#",
  //   "owl":         "http://www.w3.org/2002/07/owl#",
  //   "skos":        "http://www.w3.org/2004/02/skos/core#",
  //   "dc":          "http://purl.org/dc/elements/1.1/",
  //   "dct":         "http://purl.org/dc/terms/",
  //   "dctypes":     "http://purl.org/dc/dcmitype/",
  //   "bl":          "https://w3id.org/biolink/vocab/",
  //   "biolink":     "http://w3id.org/biolink/vocab/",
  //   "d2s":         "https://w3id.org/d2s/",
  //   "omop":        "http://api.ohdsi.org/WebAPI/vocabulary/concept/",
  //   "cohd":        "https://w3id.org/trek/cohd/",
  //   "bio2rdf":     "http://bio2rdf.org/",
  //   "dbo":         "http://dbpedia.org/ontology/",
  //   "dbp":         "http://dbpedia.org/property/",
  //   "wd":          "http://www.wikidata.org/entity/",
  //   "wdt":         "http://www.wikidata.org/prop/direct/",
  //   "foaf":        "http://xmlns.com/foaf/0.1/",
  //   "idot":        "http://identifiers.org/idot/",
  //   "dcat":        "http://www.w3.org/ns/dcat#",
  //   "void":        "http://rdfs.org/ns/void#",
  //   "void-ext":    "http://ldf.fi/void-ext#",
  //   "obo":         "http://purl.obolibrary.org/obo/",
  //   "ncit":        "http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#",
  //   "xsd":         "http://www.w3.org/2001/XMLSchema#",
  //   "schema":      "http://schema.org/",
  //   "cito":        "http://purl.org/spar/cito/",
  //   "prov":        "http://www.w3.org/ns/prov#",
  //   "pav":         "http://purl.org/pav/",
  //   "pplan":       "http://purl.org/net/p-plan#",
  //   "np":          "http://www.nanopub.org/nschema#",
  //   "npx":         "http://purl.org/nanopub/x/",
  // };

  // function shortenUri(uriToShorten: string) {
  //   for (const prefix in prefixRegistry) {
  //     if (uriToShorten.startsWith(prefixRegistry[prefix])) {
  //       return uriToShorten.replace(prefixRegistry[prefix], prefix + ':');
  //     }
  //   }
  //   return uriToShorten;
  // }

  // if(/^(?:node[0-9]+)|((https?|ftp):.*)$/.test(props.uri)) {
  //   // Process URIs
  //   return (
  //     <Link to={{
  //       pathname: '/describe',
  //       search: '?uri=' + props.uri,
  //     }} className={classes.uriLink}>
  //       <Typography variant={props.variant} className={props.passClass}
  //       style={{overflowWrap: 'break-word'}}>
  //         {shortenUri(props.uri)}
  //       </Typography>
  //     </Link>
  //     // <a href={'/describe?uri=' + props.uri} className={classes.uriLink}>
  //     //   <Typography variant={props.variant} className={props.passClass}
  //     //   style={{overflowWrap: 'break-word'}}>
  //     //     {shortenUri(props.uri)}
  //     //   </Typography>
  //     // </a>
  //   )
  // }
  let params_array: any = []
  if (props.endpoint) params_array.push('endpoint=' + props.endpoint)
  if (props.query) params_array.push('query=' + encodeURIComponent(props.query))
  const yasgui_query_url ='https://yasgui.triply.cc/#' + params_array.join('&');

  return (
    <a href={yasgui_query_url} className={classes.link} 
      target='_blank' rel="noopener noreferrer">
      { !props.endpoint && !props.query &&
        <>
        </>
      }
      { props.endpoint &&
        <Button variant="contained" color="primary" style={{margin: theme.spacing(0, 2)}} >
          <SendIcon />
          &nbsp;Query on YASGUI
        </Button>
      }
      { !props.endpoint &&
        <Button variant="contained" color="primary" style={{margin: theme.spacing(0, 2)}} >
          <SearchIcon />
          &nbsp;See on YASGUI
        </Button>
      }
    </a>
    // <Typography variant={props.variant} className={props.passClass} 
    // style={{textAlign: 'left', overflowWrap: 'break-word'}}>
    //   {props.uri}
    // </Typography>
    // {project.query && project.sparqlEndpoint &&
    //   // Add YASGUI link if relevant
    //   // https://yasgui.triply.cc/#query=  &endpoint=
    //   <a href={'https://yasgui.triply.cc/#query=' + encodeURIComponent(project.query) + '&endpoint=' + project.sparqlEndpoint}
    //     className={classes.link} target='_blank'>
    //     <Button variant="contained" color="primary" style={{margin: theme.spacing(0, 2)}}>
    //       <SendIcon />
    //       &nbsp;Query on YASGUI
    //     </Button>
    //   </a>
    // }
    // {project.query && !project.sparqlEndpoint &&
    //   <a href={'https://yasgui.triply.cc/#query=' + encodeURIComponent(project.query)} 
    //     className={classes.link} target='_blank'>
    //     <Button variant="contained" color="primary" style={{margin: theme.spacing(0, 2)}}>
    //       <SearchIcon />
    //       &nbsp;See on YASGUI
    //     </Button>
    //   </a>
    // }
  )
}