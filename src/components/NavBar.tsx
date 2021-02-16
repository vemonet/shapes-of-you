import React from "react";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Link } from "react-router-dom";

import { AppBar, Toolbar, Button, Popper, ClickAwayListener, Card, CardContent, CardHeader, IconButton } from '@material-ui/core';
import Tooltip from '@material-ui/core/Tooltip';
import CloseIcon from '@material-ui/icons/Close';
import GitHubIcon from '@material-ui/icons/GitHub';
import GrlcApiIcon from '@material-ui/icons/Send';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
// import SparqlIcon from '@material-ui/icons/Share';
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

  // Settings for Popper
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl]: any = React.useState(null);
  const handleClick = (event: any) => {
    // setAnchorEl(anchorEl ? null : event.currentTarget);
    setAnchorEl(anchorEl ? null : document.body);
    setOpen((prev) => !prev);
  };
  const handleClickAway = () => {
    setOpen(false);
    setAnchorEl(anchorEl ? null : anchorEl);
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
          href="http://grlc.io/api-git/vemonet/shapes-of-you/subdir/api">
            <GrlcApiIcon style={{ marginRight: theme.spacing(1)}} />
            API docs
          </Button>
        </Tooltip>
        {/* <Tooltip title='Query the SPARQL endpoint with YASGUI'>
          <Button className={classes.menuButton} target="_blank" rel="noopener noreferrer"
          href="/yasgui?endpoint=https://graphdb.dumontierlab.com/repositories/shapes-registry">
            <SparqlIcon style={{ marginRight: theme.spacing(1)}} />
            Query with SPARQL
          </Button>
        </Tooltip> */}
        <Tooltip  title='List of active SPARQL endpoints, and their associated queries'>
          <Button className={classes.menuButton} onClick={handleClick}>
            <CheckCircleIcon style={{ marginRight: theme.spacing(1)}} />
            Active endpoints
          </Button>
        </Tooltip>
        <Popper open={open} anchorEl={anchorEl} 
          style={{width: '99%', position: 'absolute', top: '0'}}
          popperOptions={{'positionFixed': true}}>
          <ClickAwayListener onClickAway={handleClickAway}>
            <Card >
                <CardHeader
                  action={
                    <IconButton aria-label="settings" onClick={handleClickAway}>
                      <CloseIcon />
                    </IconButton>
                  }
                  title="⚡️ List of active SPARQL endpoints defined in queries metadata"
                  subheader='We automatically import all SPARQL queries in YASGUI for the endpoint you select'
                  style={{paddingBottom: '0px'}}
                />
              <CardContent>
                <SparqlEndpointsDisplay />
              </CardContent>
            </Card>
            {/* <Paper elevation={4} className={classes.paperPadding}>
              <SparqlEndpointsDisplay />
            </Paper> */}
          </ClickAwayListener>
        </Popper>

        <div className="flexGrow"></div>

        <a href="https://github.com/vemonet/shapes-of-you/actions?query=workflow%3A%22Index+shapes%22"
          className={classes.linkButton} target="_blank" rel="noopener noreferrer">
          <Tooltip title='Checkout the indexing workflow runs status'>
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