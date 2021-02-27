import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Typography, Container, Box, Button, Chip, Tooltip, Grid, Paper, CircularProgress, Card, CardContent, CardHeader, Collapse, CardActions, List, ListItem, ListItemAvatar, Avatar, ListItemText } from "@material-ui/core";
import { IconButton, InputBase } from "@material-ui/core";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CodeIcon from '@material-ui/icons/Code';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';
import SendIcon from '@material-ui/icons/Send';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import DeviceHubIcon from '@material-ui/icons/DeviceHub';
import GavelIcon from '@material-ui/icons/Gavel';
import OpenAPIIcon from '@material-ui/icons/Adjust';
import RmlIcon from '@material-ui/icons/AllInclusive';
import R2rmlIcon from '@material-ui/icons/Storage';
import NanopubIcon from '@material-ui/icons/Chat';
import DatasetIcon from '@material-ui/icons/Archive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

// @ts-ignore
import iconImage from '../../assets/icon.png';

// import { FormControl, TextField, Input, InputLabel, FormHelperText, Select } from '@material-ui/core';
// import GetAppIcon from '@material-ui/icons/GetApp';
// import Autocomplete from '@material-ui/lab/Autocomplete';
// import MenuItem from '@material-ui/core/MenuItem';
// import Snackbar from '@material-ui/core/Snackbar';
// import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
// import { Graph } from "perfect-graph";

const useStyles = makeStyles(theme => ({
  link: {
    textDecoration: 'none',
    color: theme.palette.primary.main,
    '&:hover': {
      color: theme.palette.secondary.main,
      textDecoration: 'none',
    },
  },
}))


export default function About() {
  const classes = useStyles();
  const theme = useTheme();
  
  const [state, setState] = React.useState({
    show_info_card: false,
  });
  const stateRef = React.useRef(state);

  // Avoid conflict when async calls
  // Can be done with another lib (cf. Turgay)
  const updateState = React.useCallback((update) => {
    stateRef.current = {...stateRef.current, ...update};
    setState(stateRef.current);
  }, [setState]);

  return(
    <Card >
        <CardHeader
          action={
            <IconButton style={{fontSize: '16px'}}
              onClick={() => { updateState({ show_info_card: !state.show_info_card}) }}
              name='show_info_card'
              aria-expanded={state.show_info_card}
              aria-label="show about"
            >
              About&nbsp;
              {!state.show_info_card &&
                <ExpandMoreIcon />
              }
              {state.show_info_card &&
                <ExpandLessIcon />
              }
            </IconButton>
          }
          title="💠 Shapes of You"
          subheader={"Access the world publicly available standard knowledge descriptions stored in code repositories, and explore the currently active Linked Open Data SPARQL endpoints with ease, to find relevant data for your projects, or discover how people are defining knowledge around the blob."}
        />


        <Collapse in={state.show_info_card} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography style={{marginBottom: theme.spacing(2)}}>
              Shapes of you is the best place to search and explore existing semantic shapes, ontologies, vocabularies and queries. Searching an ontology for datasets? Needing to validate RDF using SHACL or ShEx? Finding SPARQL queries about drugs? There might be a shape out there waiting for you! You can also explore shapes to find inspirations. You might even find a grlc API serving data relevant to your projects, who knows? Linked Open Data are full of surprises.
            </Typography>

            <Typography style={{marginBottom: theme.spacing(2)}}>
              To insure their validity, all indexed files has been parsed using the corresponding python package (rdflib, obonet, prance). You can check the list of files which failed to load in our <a href="https://github.com/vemonet/shapes-of-you/tree/report" className={classes.link}>reports</a>. Feel free to fix them if you are the owner!
            </Typography>

            {/* <a href="https://github.com/vemonet/shapes-of-you/actions?query=workflow%3A%22Index+shapes%22" target="_blank" rel="noopener noreferrer">
              <img src="https://github.com/vemonet/shapes-of-you/workflows/Index%20shapes/badge.svg" 
              style={{marginBottom: theme.spacing(2)}} />
            </a> */}

            {/* <Typography>
              Add the tag <code>shacl-shapes</code> or <code>shex</code> or <code>grlc</code> to your GitHub repository, we automatically index all SPARQL queries (<code>.rq</code>, <code>.sparql</code>), ShEx (<code>.shex</code>), SHACL files (<code>.ttl</code>, <code>.rdf</code>, <code>.jsonld</code>, <code>.trig</code>, <code>.nq</code>, etc) containing at least one <code>sh:NodeShape</code> from all repositories everyday at 1:00 and 13:00 🕐
            </Typography> */}
            <Typography>
              To be found by our indexer, make sure your repository description, or topics, on <a href="https://github.com" className={classes.link} target="_blank" rel="noopener noreferrer">GitHub</a> repository, or mention it in your project description on <a href="https://gitlab.com" className={classes.link} target="_blank" rel="noopener noreferrer">GitLab</a> and <a href="https://gitee.com" className={classes.link} target="_blank" rel="noopener noreferrer">Gitee</a>,&nbsp;
              we automatically index files from public repositories everyday at 1:00 GMT+1 🕐
            </Typography>
            <List>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <DeviceHubIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText>
                  <b><a href="https://www.w3.org/OWL/" className={classes.link} target="_blank" rel="noopener noreferrer">OWL</a> ontologies</b>: we index RDF files, with all <code>owl:Class</code> they contain
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <MenuBookIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText>
                  <b><a href="https://www.w3.org/TR/swbp-skos-core-spec/" className={classes.link} target="_blank" rel="noopener noreferrer">SKOS</a> vocabularies</b>: we index RDF files, with all <code>skos:Concept</code> they contain
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
                  <b><a href="https://www.w3.org/TR/shacl/" className={classes.link} target="_blank" rel="noopener noreferrer">SHACL</a> shapes</b>: we index RDF files, with all <code>sh:NodeShape</code> they contain
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <BubbleChartIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText>
                  <b><a href="https://shex.io/" className={classes.link} target="_blank" rel="noopener noreferrer">ShEx</a> expressions</b>: we index <code>.shex</code> files, and ShEx shapes defined in RDF files (but no metadata described in ShEx)
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <CodeIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText>
                  <b><a href="https://www.w3.org/TR/sparql11-query/" className={classes.link} target="_blank" rel="noopener noreferrer">SPARQL</a> queries</b>: we index <code>.rq</code> and <code>.sparql</code> files, and parse <a href="http://grlc.io" className={classes.link} target="_blank" rel="noopener noreferrer">grlc.io</a> APIs metadata, complying with the <a href="https://github.com/the-open-university/basil/wiki/Introduction" className={classes.link} target="_blank" rel="noopener noreferrer">BASIL convention</a>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <RmlIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText>
                  <b><a href="https://rml.io/" className={classes.link} target="_blank" rel="noopener noreferrer">RML</a> mappings</b>: we index RDF files, with all <code>r2rml:SubjectMap</code> and <code>rml:LogicalSource</code> they contain
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <R2rmlIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText>
                  <b><a href="https://www.w3.org/TR/r2rml/" className={classes.link} target="_blank" rel="noopener noreferrer">R2RML</a> mappings</b>: we index RDF files, with all <code>r2rml:SubjectMap</code> they contain
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <NanopubIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText>
                  <b><a href="http://nanopub.org/wordpress/" className={classes.link} target="_blank" rel="noopener noreferrer">Nanopublication</a> templates</b>: we index RDF files, with all <code>nt:AssertionTemplates</code> and inputs they contain
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <GavelIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText>
                  <b><a href="http://www.obofoundry.org/" className={classes.link} target="_blank" rel="noopener noreferrer">OBO</a> ontologies</b>: we index <code>.obo</code> files, and parse all terms they contain
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <OpenAPIIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText>
                  <b><a href="https://www.openapis.org/" className={classes.link} target="_blank" rel="noopener noreferrer">OpenAPI</a> specifications</b>: we index <code>.yml</code>, <code>.yaml</code> and <code>.json</code> files, and parse the spec to retrieve API metadata
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <DatasetIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText>
                <b><a href="https://www.w3.org/TR/vocab-dcat-3/" className={classes.link} target="_blank" rel="noopener noreferrer">DCAT</a> datasets</b>: we index RDF files, with all <code>dcat:Dataset</code> they contain
                </ListItemText>
              </ListItem>
            </List>
          </CardContent>
        </Collapse>
      </Card>
  )
}