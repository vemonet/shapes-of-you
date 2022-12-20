import React from "react";
import { useTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { Button, Card, CardContent, CardHeader, ClickAwayListener, IconButton, Popper } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';

import Yasgui from "../pages/Yasgui";
import Config from "../components/Config";

export default function QueryYasguiButton(props: any) {
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
    paperPadding: {
      padding: theme.spacing(2, 2),
      // margin: theme.spacing(2, 2),
    },
  }));
  const classes = useStyles();

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