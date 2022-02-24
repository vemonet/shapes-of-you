import React from "react";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Button, Card, CardContent, CardHeader, ClickAwayListener, IconButton, Popper } from "@material-ui/core";
import SendIcon from '@material-ui/icons/Send';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import axios from 'axios';

import Yasgui from "../pages/Yasgui";
import Config from "../components/Config";

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

  // const yasgui_query_url ='/yasgui?endpoint=' + props.endpoint;

  return (
    <>
      { props.buttonText &&
        <Button style={{color: theme.palette.common.white, margin: theme.spacing(0, 1)}} onClick={handleClick}>
          {/* <SendIcon /> */}
          &nbsp;{props.buttonText}
        </Button>
      }
      { props.endpoint && !props.buttonText &&
        <Button variant="contained" color="primary" style={{margin: theme.spacing(0, 2)}} onClick={handleClick}>
          <SendIcon />
          &nbsp;Query with YASGUI
        </Button>
      }
      { !props.endpoint &&
        <Button variant="contained" color="primary" style={{margin: theme.spacing(0, 2)}} onClick={handleClick}>
          <SearchIcon />
          &nbsp;See with YASGUI
        </Button>
      }
      <Popper open={open} anchorEl={anchorEl}
        onKeyDown={(e) => {
            if (e.key === "Escape") handleClickAway()
        }}
        style={{width: '99%', position: 'absolute', top: '0'}}
        popperOptions={{'positionFixed': true}}
        >
        {/* <ClickAwayListener onClickAway={handleClickAway}> */}
        <Card >
            <CardHeader
              action={
                <IconButton aria-label="settings" onClick={handleClickAway}>
                  <CloseIcon />
                </IconButton>
              }
              title={"SPARQL endpoint: " + props.endpoint}
              // subheader='To reduce the number of YASGUI tabs, right click on a tab, and select "Close other tabs"'
              style={{paddingBottom: '0px'}}
            />
          <CardContent>
            <Yasgui endpoint={props.endpoint} query={props.query} file_url={props.file_url} />
          </CardContent>
        </Card>
        {/* </ClickAwayListener> */}
      </Popper>
    </>
  )
}