import React from 'react';
import { styled } from '@mui/material/styles';
import { Typography } from "@mui/material";


// Styled components
export const Paragraph = styled(Typography)(({ theme }) => ({
  ...theme.typography.body1,
  marginBottom: theme.spacing(1),
  textAlign: 'justify',
}))as typeof Typography;


export const Title = styled(Typography)(({ theme }) => ({
  ...theme.typography.h5,
  marginTop: theme.spacing(5),
  marginBottom: theme.spacing(2),
  textAlign: 'center',
  fontWeight: '300',
})) as typeof Typography;
