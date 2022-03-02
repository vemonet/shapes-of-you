import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Container, Typography, Button, Tooltip } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';


export default function Footer() {
  const theme = useTheme()

  // Light grey: #eeeeee
  return (
      <footer style={{padding: theme.spacing(2),
        backgroundColor: '#eeeeee',
        // backgroundColor: '#cfd8dc',
        marginTop: 'auto',
        // position: "absolute", bottom: 0, width: '100%'
      }}>
        <Container maxWidth="md" style={{textAlign: 'center'}}>
          <Tooltip title='Source code'>
            <Button style={{color: '#343741'}} target="_blank"
                href="https://github.com/bio2kg/bio2kg-registry">
              <GitHubIcon />
            </Button>
          </Tooltip>
          <Typography variant="body2" >
            This website is licensed under the&nbsp;
            <a target="_blank"
            href="https://github.com/MaastrichtU-IDS/fair-enough/blob/main/LICENSE">
              MIT license
            </a>
            {/* <img src={require('../assets/images/mit_license.png')} /> */}
          </Typography>
          {/* Copyright */}
          <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <a target="_blank"
            href="https://maastrichtuniversity.nl/ids">
              Institute of Data Science at Maastricht University
            </a>{' '}
            {'2021.'}
          </Typography>
        </Container>
      </footer>
  );
}