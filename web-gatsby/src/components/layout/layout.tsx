import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { FCR } from '../../utils/types';
import { getTheme } from '../../utils/theme';
import useSiteMetadata from '../../hooks/useSiteMetadata';
import NavBar from './navbar';
import Footer from './footer';
import '../../utils/global.css';

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {}
});

const Layout: FCR = (props) => {
  // const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const { title } = useSiteMetadata();

  const [mode, setMode] = React.useState<'light' | 'dark'>(
    'light'
    // prefersDarkMode ? 'dark' : 'light',
  );

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => {
          const newMode = prevMode === 'light' ? 'dark' : 'light';
          localStorage.setItem('mode', newMode);
          return newMode;
        });
      }
    }),
    []
  );

  const theme = React.useMemo(() => createTheme(getTheme(mode)), [mode]);

  React.useEffect(() => {
    if (localStorage.getItem('mode')) {
      // @ts-ignore
      setMode(localStorage.getItem('mode'));
    }
  }, []);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar siteTitle={title} />
        <main style={{ backgroundColor: theme.palette.background.default }}>
            {props.children}
        </main>
        <Footer />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
export default Layout;
