import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Link, Box, Typography } from "@mui/material";

import Markdown from 'markdown-to-jsx';


export default function MyMarkdown({ children }: any) {
  const theme = useTheme();

  return(
    <Markdown style={{marginTop: theme.spacing(1)}}
      // https://github.com/mui/material-ui/blob/master/docs/data/material/getting-started/templates/blog/Markdown.js
      options={{
        wrapper: 'aside',
        forceWrapper: true,
        forceBlock: true,
        overrides: {
          h1: {
            component: Typography,
            props: {
              gutterBottom: true,
              variant: 'h4',
              component: 'h1',
            },
          },
          h2: {
            component: Typography,
            props: { gutterBottom: true, variant: 'h6', component: 'h2' },
          },
          h3: {
            component: Typography,
            props: { gutterBottom: true, variant: 'subtitle1' },
          },
          h4: {
            component: Typography,
            props: {
              gutterBottom: true,
              variant: 'caption',
              paragraph: true,
            },
          },
          p: {
            component: Typography,
            props: { paragraph: true },
          },
          span: {
            component: Typography,
            props: { paragraph: true },
          },
          a: { component: Link },
          li: {
            component: (props: any) => (<Box component="li" sx={{ mt: 1, typography: 'body1' }} {...props} />),
          },
        },
      }}
    >
      {children}
    </Markdown>
  )
}

