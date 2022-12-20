import React from 'react';
import { Typography, Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import Seo from '../components/layout/seo';
import LinkOut from '../components/LinkOut';
import { FC } from '../utils/types';

const NotFoundPage: FC = () => {
    const theme = useTheme();

    return (
        <Container maxWidth="md" className='mainContainer'>
            <Seo title="404: Not found" />

            <Typography variant="body1" style={{padding: theme.spacing(8)}}>
                Nothing here, try to go back to the <LinkOut href='/' target='_self'>homepage</LinkOut>.
            </Typography>

        </Container>
    );
};

export default NotFoundPage;
