import React from 'react';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import Container from '@mui/material/Container';

function Copyright() {
  const theme = useTheme();
  const useStyles = makeStyles(() => ({
    darkLink: {
      textDecoration: 'none',
      color: 'inherit',
      '&:hover': {
        color: theme.palette.primary.light,
        textDecoration: 'none',
      },
    },
  }));
  const classes = useStyles();
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <a className={classes.darkLink} target="_blank" rel="noopener noreferrer"
      href="https://maastrichtuniversity.nl/ids">
        Vincent Emonet
      </a>{' '}
      {'2021'}
    </Typography>
  );
}

export default function Footer() {
  const theme = useTheme();
  const useStyles = makeStyles(() => ({
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
  const classes = useStyles();

  return (
      <footer className={classes.footer}>
        <Container maxWidth="md" style={{textAlign: 'center'}}>
          <Typography variant="body2" style={{ marginBottom: theme.spacing(1)}}>
            Built for you, to explore the semantic space ✨ website under the&nbsp;
            <a className={classes.whiteLink} target="_blank" rel="noopener noreferrer"
            href="https://github.com/vemonet/shapes-of-you/blob/main/LICENSE.txt">
              MIT license
            </a>
            {/* <img src={require('../assets/images/mit_license.png')} /> */}
          </Typography>
          <Copyright />
        </Container>
      </footer>
  );
}

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