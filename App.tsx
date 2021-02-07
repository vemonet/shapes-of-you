import React from "react";
import Helmet from "react-helmet";
import { View } from "react-native";
import { Router, Route } from "./src/components/react-router";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import './App.css';
import NavBar from "./src/components/NavBar";
import Footer from "./src/components/Footer";
import SemanticIndex from "./src/pages/SemanticIndex";
import About from "./src/pages/About";
// import blue from '@material-ui/core/colors/blue';

// Change theme color and typography here
const theme = createMuiTheme({
  palette: {
    // Blue
    primary: { light: '#63a4ff', main: '#1976d2', dark: '#004ba0' },
    // Green
    secondary: { light: '#4caf50', main: '#7e57c2', dark: '#00600f' },
    // main: blue[700]
    // primary: { light: blue[50], main: blue[600], dark: blue[900] },
    // red: { light: '#f05545', main: '#b71c1c', dark: '#7f0000' },
    // default: { light: '#fafafa', main: '#eceff1', dark: grey[600] }
  },
  typography: {
    "fontFamily": "\"Open Sans\", \"Roboto\", \"Arial\"",
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500
    // "fontSize": 13
  },
});

const website_name = "Shapes of you"
const website_description = "Index for publicly available semantic resources (OWL & OBO ontologies, SKOS RDF vocabularies, SHACL & ShEx shapes, SPARQL queries) stored in Git repositories (GitHub, GitLab, Gitee)";

const App = () => (
  <MuiThemeProvider theme={theme}>
    <Helmet>
      <title>Shapes of you</title>
      <meta name="description" content={website_description}/>

      {/* Google / Search Engine Tags */}
      <meta itemProp="name" content={website_name}/>
      <meta itemProp="description" content={website_description}/>
      <meta itemProp="image" content=""/>

      {/* Facebook Meta Tags */}
      <meta property="og:url" content="https://index.semanticscience.org"/>
      <meta property="og:type" content="website"/>
      <meta property="og:title" content={website_name}/>
      <meta property="og:description" content={website_description}/>
      <meta property="og:image" content=""/>

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:title" content={website_name}/>
      <meta name="twitter:description" content={website_description}/>
      <meta name="twitter:image" content=""/>
    </Helmet>
    {/* <Router basename="/shapes-of-you/"> */}
    <Router basename="/">
      <View style={{height: '100%', backgroundColor: '#eceff1'}}>
        <NavBar />

        <Route exact path="/" component={SemanticIndex} />
        <Route path="/about" component={About} />
        <Footer />
      </View>
    </Router>
  </MuiThemeProvider>
);
export default App;
