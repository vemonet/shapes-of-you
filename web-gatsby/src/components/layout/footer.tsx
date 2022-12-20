import React from 'react';
import { Container, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { FC } from '../../utils/types';


const Footer: FC = () => {
    const theme = useTheme();
    return (
        <footer style={{ marginTop: 'auto', width: '100%',
            padding: theme.spacing(3, 2),
            backgroundColor: theme.palette.background.paper
        }}>
            <Container maxWidth="md">
                <Typography variant="body1" color="textDisabled" style={{textAlign: 'center'}}>
                    © {new Date().getFullYear()} Vincent Emonet
                </Typography>
                {/* <Typography variant="body2" >
                    This website is licensed under the&nbsp;
                    <a target="_blank" style={{textDecoration: 'none', color: 'inherit'}}
                    href="https://github.com/vemonet/vemonet.github.io/blob/main/LICENSE">
                    MIT license</a>
                </Typography> */}
            </Container>
        </footer>
    );
};
export default Footer;