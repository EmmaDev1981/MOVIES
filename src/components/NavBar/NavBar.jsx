import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import ColorBadge from '../utils/ColorBadge'
import Container from "@mui/material/Container";
import CompareBadge from '../utils/CompareBadge/CompareBadge'
import { useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom'

export default function NavBar() {

  const navigate = useNavigate()
  const totalMovieResults = useSelector((state) => state.reducer.movies?.totalResults)

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box  >
      <AppBar position="static" sx={{ backgroundColor: 'black' }} >
        <Container maxWidth="xl">
          <Toolbar style={{ display: 'flex', justifyContent: "flex-end", width: '100%' }} disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
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
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <MenuItem onClick={() => navigate('/')}>
                  <Typography textAlign="center">Buscar</Typography>
                </MenuItem>
                <MenuItem onClick={() => navigate('/favorites')}>
                  <Typography textAlign="center">Favoritas</Typography>
                </MenuItem>
                <MenuItem onClick={() => navigate('/compares')}>
                  <Typography textAlign="center">Comparar</Typography>
                </MenuItem>
              </Menu>
            </Box>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ display: { xs: "none", md: "flex" } }}
            >
            </IconButton>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ display: { xs: "none", md: "flex" } }}
              onClick={() => { navigate('/') }}
            >
              <Typography variant="h6" component="div">
                Buscar({totalMovieResults})
              </Typography>
            </IconButton>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ display: { xs: "none", md: "flex" } }}
              onClick={() => { navigate('/favorites') }}
            >
              <Typography variant="h6" component="div">
                Favoritas
              </Typography>
            </IconButton>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ display: { xs: "none", md: "flex" } }}
              onClick={() => { navigate('/compares') }}
            >
              <Typography variant="h6" component="div">
                Comparar
              </Typography>
            </IconButton>

            <Toolbar style={{ display: 'flex', justifyContent: "flex-end", width: '100%' }}>
              <ColorBadge />
              <CompareBadge />
              {/* {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )} */}
            </Toolbar>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
