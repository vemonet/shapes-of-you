import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Button } from "@material-ui/core";
import SendIcon from '@material-ui/icons/Send';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
  link: {
    textDecoration: 'none',
    color: theme.palette.primary.main,
    '&:hover': {
      color: theme.palette.secondary.main,
      textDecoration: 'none',
    },
  },
}));

export default function QueryYasguiButton(props: any) {
  const classes = useStyles();
  const theme = useTheme();

  let params_array: any = []
  if (props.endpoint) params_array.push('endpoint=' + props.endpoint)
  if (props.query) params_array.push('query=' + encodeURIComponent(props.query))
  const yasgui_query_url ='https://yasgui.triply.cc/#Method=GET&tabTitle=Shapes%20of%20you%20query&headers=%7B%7D&contentTypeConstruct=application%2Fn-triples%2C*%2F*%3Bq%3D0.9&contentTypeSelect=application%2Fsparql-results%2Bjson%2C*%2F*%3Bq%3D0.9&outputFormat=table&' + params_array.join('&');

  return (
    <a href={yasgui_query_url} className={classes.link} 
      target='_blank' rel="noopener noreferrer">
      { !props.endpoint && !props.query &&
        <>
        </>
      }
      { props.endpoint &&
        <Button variant="contained" color="primary" style={{margin: theme.spacing(0, 2)}} >
          <SendIcon />
          &nbsp;Query on YASGUI
        </Button>
      }
      { !props.endpoint && props.query &&
        <Button variant="contained" color="primary" style={{margin: theme.spacing(0, 2)}} >
          <SearchIcon />
          &nbsp;See on YASGUI
        </Button>
      }
    </a>
  )
}