import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  darkLink: {
    textDecoration: 'none',
    color: 'inherit',
    '&:hover': {
      color: theme.palette.primary.light,
      textDecoration: 'none',
    },
  },
  whiteLink: {
    textDecoration: 'none',
    color: 'inherit',
    '&:hover': {
      color: theme.palette.primary.dark,
      textDecoration: 'none',
    },
  },
  footer: {
    padding: theme.spacing(2),
    marginTop: 'auto',
    color: 'white',
    backgroundColor: theme.palette.primary.main,
  },
}));

function Copyright() {
  const classes = useStyles();
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <a className={classes.darkLink} target="_blank" rel="noopener noreferrer"
      href="https://maastrichtuniversity.nl/ids">
        Institute of Data Science at Maastricht University
      </a>{' '}
      {'2020.'}
    </Typography>
  );
}

export default function Footer() {
  const classes = useStyles();
  // Set state in functional style:
  // const [state, setState] = React.useState({search: '', name: 'Vincent'});
  // console.log(state.search);
  // // Set search without chaging name
  // setState({...state, search: 'yo'})
  // const onNameChange = React.useCallback((filterName) => {
  //   console.log('callback', state.name);
  // },
  // [state.name]);
  // // Tells callback to reload when change to state.name

  // React.useEffect(() => {
  //   console.log('componentDID mount');
  //   return () => {
  //     console.log('willMount');
  //   }
  // }, []) 
  // Empty dep list: will only run when componentDidMount

  return (
      <footer className={classes.footer}>
        <Container maxWidth="md" style={{textAlign: 'center'}}>
          <Typography variant="body2" >
            This website is licensed under the&nbsp;
            <a className={classes.whiteLink} target="_blank" rel="noopener noreferrer"
            href="https://github.com/MaastrichtU-IDS/shapes-of-you/blob/main/LICENSE">
              MIT license
            </a>
            {/* <img src={require('../assets/images/mit_license.png')} /> */}
          </Typography>
          <Copyright />
        </Container>
      </footer>
  );
}