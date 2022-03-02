import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Container, Typography, List, ListItem, ListItemAvatar, Avatar, ListItemText  } from "@mui/material";


export default function About() {
  const theme = useTheme();

  return(
    <Container className='mainContainer'>
      <Typography variant="h4" style={{marginBottom: theme.spacing(2)}}>
        About
      </Typography>

      <Typography variant="body1" style={{ marginBottom: theme.spacing(1)}}>
        A registry of datasets of relevance to the life sciences. The registry contains dataset metadata, and assigns namespaces, identifier patterns, and URL templates for link outs. The web application provides GraphQL, REST API, and Elasticsearch DSL API. 
      </Typography>

      <Typography variant="body1" style={{ marginBottom: theme.spacing(1)}}>
        Developed and hosted by the <a href="https://www.maastrichtuniversity.nl/research/institute-data-science" target="_blank" rel="noopener noreferrer">Institute of Data Science</a> at Maastricht University.
      </Typography>


    </Container>
  )
}