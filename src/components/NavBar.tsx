import React from "react";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Link } from "react-router-dom";

import { AppBar, Toolbar, Button, Popper, ClickAwayListener, Paper } from '@material-ui/core';
import Tooltip from '@material-ui/core/Tooltip';

import GitHubIcon from '@material-ui/icons/GitHub';
import AssignmentIcon from '@material-ui/icons/Assignment';
import GrlcApiIcon from '@material-ui/icons/Send';
import SparqlIcon from '@material-ui/icons/Share';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
// import InfoIcon from '@material-ui/icons/Info';
// import DashboardIcon from '@material-ui/icons/Dashboard';
// import CreateNewFolderIcon from '@material-ui/icons/CreateNewFolder';
// import MenuBookIcon from '@material-ui/icons/MenuBook';
// import WarningIcon from '@material-ui/icons/Warning';

import { AuthButton, Value } from '@solid/react';

// @ts-ignore
import iconImage from '../../assets/icon.png';
import SparqlEndpointsDisplay from "./SparqlEndpointsDisplay";

const useStyles = makeStyles(theme => ({
  menuButton: {
    color: theme.palette.common.white,
    margin: theme.spacing(0, 1)
  },
  solidButton: {
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
    borderRadius: '6px',
    // boxShadow: '0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)',
    padding: '7px 14px',
    '&:hover': {  
      backgroundColor: theme.palette.primary.dark,
      cursor: 'pointer'
    }
  },
  linkButton: {
    textTransform: 'none',
    textDecoration: 'none',
    margin: theme.spacing(0, 1)
  },
  linkLogo: {
    // Seems to fit the 48px navbar height...
    // height: '48px',
    alignItems: 'center',
    display: 'flex',
    margin: theme.spacing(0, 2)
  },
  paperPadding: {
    padding: theme.spacing(2, 2),
    // margin: theme.spacing(2, 2),
  },
}))
  
export default function NavBar() {
  const classes = useStyles();
  const theme = useTheme();

  // Popper for settings
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event: any) => {
    console.log('Click button!');
    setAnchorEl(anchorEl ? null : event.currentTarget);
    setOpen((prev) => !prev);
  };
  const handleClickAway = () => {
    setOpen(false);
    setAnchorEl(anchorEl ? null : anchorEl);
    console.log('Click away!');
  };
  const id = open ? 'simple-popper' : undefined;

  return (
    <AppBar title="" position='static'>
      <Toolbar variant='dense'>
        <Link to="/" className={classes.linkLogo}>
          <Tooltip title='Shapes of you homepage'>
            <img src={iconImage} style={{height: '2em', width: '2em', marginRight: '10px'}} alt="Logo" />
          </Tooltip>
        </Link>
        <Tooltip title='Access the grlc OpenAPI (which query the SPARQL endpoint)'>
          <Button className={classes.menuButton} target="_blank" rel="noopener noreferrer"
          href="http://grlc.io/api-git/vemonet/shapes-of-you">
            <GrlcApiIcon style={{ marginRight: theme.spacing(1)}} />
            API docs
          </Button>
        </Tooltip>
        <Tooltip title='Query the SPARQL endpoint with YASGUI'>
          <Button className={classes.menuButton} target="_blank" rel="noopener noreferrer"
          href="http://yasgui.triply.cc/#query=PREFIX%20rdfs%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0APREFIX%20dc%3A%20%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%3E%0APREFIX%20dcterms%3A%20%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0APREFIX%20schema%3A%20%3Chttps%3A%2F%2Fschema.org%2F%3E%0APREFIX%20sh%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fshacl%23%3E%0APREFIX%20shex%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fshex%23%3E%0APREFIX%20void%3A%20%3Chttp%3A%2F%2Frdfs.org%2Fns%2Fvoid%23%3E%0ASELECT%20DISTINCT%20%3Fshape_type%20(count(distinct%20%3Frepository)%20AS%20%3Frepos_count)%20(count(distinct%20%3Fshape_file)%20AS%20%3Ffile_count)%0AWHERE%20%7B%20%0A%20%20%20%20%3Fshape_file%20a%20schema%3ASoftwareSourceCode%20%3B%0A%20%20%20%20%20%20%20%20a%20%3Fshape_type%20%3B%0A%20%20%20%20%20%20%20%20dc%3Asource%20%3Frepository%20.%0A%20%20%20%20FILTER(%3Fshape_type%20!%3D%20schema%3ASoftwareSourceCode)%0A%7D%20GROUP%20BY%20%3Fshape_type&endpoint=https%3A%2F%2Fgraphdb.dumontierlab.com%2Frepositories%2Fshapes-registry&requestMethod=GET&tabTitle=Query&headers=%7B%7D&contentTypeConstruct=application%2Fn-triples%2C*%2F*%3Bq%3D0.9&contentTypeSelect=application%2Fsparql-results%2Bjson%2C*%2F*%3Bq%3D0.9&outputFormat=table">
            <SparqlIcon style={{ marginRight: theme.spacing(1)}} />
            Query with SPARQL
          </Button>
        </Tooltip>
        <Tooltip  title='Application settings'>
          <Button className={classes.menuButton} onClick={handleClick}>
            <CheckCircleIcon style={{ marginRight: theme.spacing(1)}} />
            Active endpoints
          </Button>
        </Tooltip>
        <Popper open={open} anchorEl={anchorEl}>
          <ClickAwayListener onClickAway={handleClickAway}>
            <Paper elevation={4} className={classes.paperPadding}>
              <SparqlEndpointsDisplay />
            </Paper>
          </ClickAwayListener>
        </Popper>

        <div className="flexGrow"></div>

        <a href="https://github.com/vemonet/shapes-of-you/actions?query=workflow%3A%22Index+shapes%22"
          className={classes.linkButton} target="_blank" rel="noopener noreferrer">
          <Tooltip title='Checkout the last workflow runs to index shapes.'>
            <img src="https://github.com/vemonet/shapes-of-you/workflows/Index%20shapes/badge.svg" />
          </Tooltip>
        </a>
        <a href="https://github.com/vemonet/shapes-of-you/tree/report"
          className={classes.linkButton} target="_blank" rel="noopener noreferrer">
          <Tooltip title='Reports for the files which failed to process, and that need to be fixed by their owners. Also known as the semantic web of shame'>
            <img src="https://img.shields.io/badge/📎%20Index%20shapes-reports-ffa000" />
          </Tooltip>
        </a>
        {/* <a href="https://github.com/vemonet/shapes-of-you/tree/report" 
            target="_blank" rel="noopener noreferrer" className={classes.linkButton}>
          <Tooltip title='Reports for the files which failed to process, and that need to be fixed by their owners. Also known as the semantic web of shame'>
            <Button className={classes.menuButton}>
              <AssignmentIcon />
              &nbsp;Index reports
            </Button>
          </Tooltip>
        </a> */}
        {/* <Link to="/about" className={classes.linkButton}>
          <Tooltip title='About the Institute of Data Science'>
            <Button className={classes.menuButton}>
              <InfoIcon />
            </Button>
          </Tooltip>
        </Link> */}
        <Tooltip  title='Go to https://github.com/vemonet/shapes-of-you'>
          <Button className={classes.menuButton} target="_blank"
          href="https://github.com/vemonet/shapes-of-you" rel="noopener noreferrer">
            <GitHubIcon />
          </Button>
        </Tooltip>
        {/* <Tooltip title='Login with SOLID'> */}
        <AuthButton title='Login with SOLID' className={classes.solidButton} popup="https://inrupt.net/common/popup.html"/>
        {/* </Tooltip> */}
        {/* <AuthButton popup="https://solidcommunity.net/common/popup.html"/> */}
      </Toolbar>
    </AppBar>
  );
}