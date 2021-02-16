import React from "react";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Button, Card, CardContent, CardHeader, ClickAwayListener, IconButton, Paper, Popper } from "@material-ui/core";
import SendIcon from '@material-ui/icons/Send';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';

import Yasgui from "../pages/Yasgui";

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

export default function QueryYasguiButton(props: any) {
  const classes = useStyles();
  const theme = useTheme();

  // Settings for Popper
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

  // const yasgui_query_url ='/yasgui?endpoint=' + props.endpoint;

  return (
    <>
    {/*  <a href={yasgui_query_url} className={classes.link} 
       target='_blank' rel="noopener noreferrer"> */}
      { !props.endpoint && !props.query &&
        <>
        </>
      }
      { props.endpoint &&
        <Button variant="contained" color="primary" style={{margin: theme.spacing(0, 2)}} onClick={handleClick}>
          <SendIcon />
          &nbsp;Query on YASGUI
        </Button>
      }
      { !props.endpoint && props.query &&
        <Button variant="contained" color="primary" style={{margin: theme.spacing(0, 2)}} onClick={handleClick}>
          <SearchIcon />
          &nbsp;See on YASGUI
        </Button>
      }
      <Popper open={open} anchorEl={anchorEl} style={{width: '99%'}}>
        <ClickAwayListener onClickAway={handleClickAway}>
          <Card >
              <CardHeader
                action={
                  <IconButton aria-label="settings" onClick={handleClickAway}>
                    <CloseIcon />
                  </IconButton>
                }
                title="Query SPARQL endpoints with YASGUI ✨️"
                subheader='We automatically import all SPARQL queries for the selected endpoint. To reduce the number of tabs, right click on a tab, and select "Close other tabs"'
              />
            <CardContent>
              <Yasgui endpoint={props.endpoint} query={props.query} />
            </CardContent>
          </Card>
        </ClickAwayListener>
      </Popper>
    </>
  )
}