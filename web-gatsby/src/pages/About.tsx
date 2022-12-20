import React from 'react';
import { useTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { Typography, Card, CardContent, CardHeader, Collapse, CardActions, List, ListItem, ListItemAvatar, Avatar, ListItemText } from "@mui/material";
import { IconButton, InputBase } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CodeIcon from '@mui/icons-material/Code';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import SendIcon from '@mui/icons-material/Send';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import DeviceHubIcon from '@mui/icons-material/DeviceHub';
import GavelIcon from '@mui/icons-material/Gavel';
import OpenAPIIcon from '@mui/icons-material/Adjust';
import RmlIcon from '@mui/icons-material/AllInclusive';
import R2rmlIcon from '@mui/icons-material/Storage';
import NanopubIcon from '@mui/icons-material/Chat';
import DatasetIcon from '@mui/icons-material/Archive';
import CsvwIcon from '@mui/icons-material/List';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExploreIcon from '@mui/icons-material/Explore';
import BookIcon from '@mui/icons-material/Book';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
// @ts-ignore
import iconImage from '../../assets/icon.png';

// import { FormControl, TextField, Input, InputLabel, FormHelperText, Select } from '@mui/material';
// import GetAppIcon from '@mui/icons-material/GetApp';
// import Autocomplete from '@material-ui/lab/Autocomplete';
// import MenuItem from '@mui/material/MenuItem';
// import Snackbar from '@mui/material/Snackbar';
// import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
// import { Graph } from "perfect-graph";


export default function About() {
  const theme = useTheme();
  const useStyles = makeStyles(() => ({
    link: {
      textDecoration: 'none',
      color: theme.palette.primary.main,
      '&:hover': {
        color: theme.palette.secondary.main,
        textDecoration: 'none',
      },
    },
  }))
  const classes = useStyles();

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
          title="💠 Shapes of You index"
          // subheader={"Access the world publicly available standard knowledge descriptions stored in code repositories, and explore the currently active SPARQL endpoints with ease, to find relevant data for your projects, or discover how people are defining knowledge around the blob."}
          subheader={"Files of relevance to the Semantic Web indexed from public git repositories (GitHub, GitLab and Gitee), such as SPARQL queries, OWL/SKOS vocabularies, SHACL/ShEx shapes. There is also a list of active SPARQL endpoints, with the queries that are associated to them."}
        />


        <Collapse in={state.show_info_card} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography>
              The Shapes of You index is a continuously evolving and sustainable knowledge graph, with a user-friendly interface to search for standard knowledge description files, and access linked open data efficiently and effectively. This system has 3 main scopes:
            </Typography>

            <List>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <MenuBookIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText>
                  <b>Index standard knowledge</b>: index files described following well-known standards in code repositories, such as OWL ontologies
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <DeviceHubIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText>
                  <b>Index linked open data</b>: index and generate graph summaries for active SPARQL endpoints
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <ExploreIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText>
                  <b>Provide a user-friendly access point</b> for the indexed knowledge and data (this website)
                </ListItemText>
              </ListItem>
            </List>

            <Typography style={{marginBottom: theme.spacing(2)}}>
              To insure their validity, all indexed files are parsed using the corresponding python package (rdflib, obonet, prance). We also query each SPARQL endpoint to make sure they are active.
            </Typography>

            <Typography>
              To be found by our indexer, make sure your repository description, or topics, on <a href="https://github.com" className={classes.link} target="_blank" rel="noopener noreferrer">GitHub</a>, <a href="https://gitlab.com" className={classes.link} target="_blank" rel="noopener noreferrer">GitLab</a>, or <a href="https://gitee.com" className={classes.link} target="_blank" rel="noopener noreferrer">Gitee</a> code repositories includes one of the resources mentionned below,&nbsp;
              we automatically index files from public repositories every week on Saturday at 1:00 GMT+1 🕐
            </Typography>
            <List>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <AccountTreeIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText>
                  <b><a href="https://www.w3.org/OWL/" className={classes.link} target="_blank" rel="noopener noreferrer">OWL</a> ontologies</b>: we index RDF files, with all <code>owl:Class</code> they contain
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <BookIcon />
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
                <ListItemText>
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
                    <CsvwIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText>
                  <b><a href="https://www.w3.org/TR/tabular-data-primer/" className={classes.link} target="_blank" rel="noopener noreferrer">CSVW</a> metadata</b>: we index RDF files, with all <code>csvw:Column</code> they contain
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