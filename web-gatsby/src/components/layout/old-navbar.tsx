import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { AppBar, Toolbar, Typography, Link, Button, Tooltip } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

import { ColorModeContext } from './layout';
import { FC } from '../../utils/types';

const navLinks = [
  { label: 'Projects', url: 'projects' },
  { label: 'About me', url: 'about' },
  { label: 'Skills', url: 'skills' },
  { label: 'Contact', url: 'contact' }
];

export interface NavBarProps {
  siteTitle?: string;
}

// https://mui.com/material-ui/react-app-bar/#app-bar-with-responsive-menu
const NavBar: FC<NavBarProps> = (props) => {
  const colorMode = React.useContext(ColorModeContext);
  const theme = useTheme();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters variant="dense" style={{ height: '48px', minHeight: '32px' }}>

          {/* Title on the left */}
          <Typography variant="h6" style={{ flexGrow: '1' }}>
            <Link to="/" component={GatsbyLink} color="inherit" style={{ textDecoration: 'none' }}>
              {props.siteTitle || ''}
            </Link>
          </Typography>

          {/* Links on the right if large screen */}
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {navLinks.map((link, key) => (
              <Button
                key={key}
                onClick={handleCloseNavMenu}
                href={'#' + link.url}
                sx={{ my: 2, color: 'white', textTransform: 'none' }}
              >
                {link.label}
              </Button>
            ))}
          </Box>

          {/* Hamburger menu on the right if small screen */}
          <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="navbar"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left'
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {navLinks.map((link, key) => (
                <MenuItem key={key} href={'#' + link.url} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link
                      href={'#' + link.url}
                      color="text.primary"
                      style={{ textDecoration: 'none', textTransform: 'none' }}
                    >
                      {link.label}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Switch theme */}
          <Tooltip title="Switch theme (light/dark)">
            <Button color="inherit" onClick={colorMode.toggleColorMode}>
              {theme.palette.mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
            </Button>
          </Tooltip>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
