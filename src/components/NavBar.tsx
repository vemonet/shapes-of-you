import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";

import { AppBar, Toolbar, Button } from '@material-ui/core';
import Tooltip from '@material-ui/core/Tooltip';

import GitHubIcon from '@material-ui/icons/GitHub';
import InfoIcon from '@material-ui/icons/Info';
import DashboardIcon from '@material-ui/icons/Dashboard';
import CreateNewFolderIcon from '@material-ui/icons/CreateNewFolder';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import WarningIcon from '@material-ui/icons/Warning';
import AssignmentIcon from '@material-ui/icons/Assignment';

import { AuthButton, Value } from '@solid/react';

import iconImage from '../../assets/icon.png';

const useStyles = makeStyles(theme => ({
  menuButton: {
    color: theme.palette.common.white
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
    textDecoration: 'none'
  },
  linkLogo: {
    // Seems to fit the 48px navbar height...
    // height: '48px',
    alignItems: 'center',
    display: 'flex',
  },
}))
  
export default function NavBar() {
  const classes = useStyles();

  return (
    <AppBar title="" position='static'>
      <Toolbar variant='dense'>
        <Link to="/" className={classes.linkLogo}>
          <Tooltip title='IDS Projects dashboard'>
            <img src={iconImage} style={{height: '2em', width: '2em', marginRight: '10px'}} alt="Logo" />
          </Tooltip>
        </Link>
        {/* <Link to="/create-doap" className={classes.linkButton}>
          <Tooltip title='Create a DOAP description for your project'>
            <Button className={classes.menuButton}>
              <CreateNewFolderIcon />
            </Button>
          </Tooltip>
        </Link> */}
        <div className="flexGrow"></div>
        <a href="https://github.com/MaastrichtU-IDS/shapes-of-you/blob/report/FAILED_IMPORT_REPORT.md" 
            target="_blank" rel="noopener noreferrer" className={classes.linkButton}>
          <Tooltip title='List of shapes we failed to process'>
            <Button className={classes.menuButton}>
              {/* <WarningIcon /> */}
              <AssignmentIcon />
              &nbsp;Import report
            </Button>
          </Tooltip>
        </a>
        {/* <Link to="/about" className={classes.linkButton}>
          <Tooltip title='About the Institute of Data Science'>
            <Button className={classes.menuButton}>
              <InfoIcon />
            </Button>
          </Tooltip>
        </Link>
        <Tooltip title='Go to IDS Best Practices documentation'>
          <Button className={classes.menuButton} target="_blank"
          href="https://maastrichtu-ids.github.io/best-practices">
            <MenuBookIcon />
          </Button>
        </Tooltip> */}
        <Tooltip  title='Go to https://github.com/MaastrichtU-IDS/shapes-of-you'>
          <Button className={classes.menuButton} target="_blank"
          href="https://github.com/MaastrichtU-IDS/shapes-of-you" rel="noopener noreferrer">
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