import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import {useNavigate} from 'react-router-dom'
import ColorBadge from '../utils/ColorBadge'
import { useSelector } from 'react-redux';
import CompareBadge from '../utils/CompareBadge/CompareBadge'

export default function NavBar() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const navigate = useNavigate()
  const totalMovieResults = useSelector((state) => state.reducer.movies?.totalResults)

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box  >
      <AppBar position="static" sx={{backgroundColor: 'black'}} >
        <Toolbar style={{display:'flex', justifyContent:"flex-end", width:'100%'}}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <IconButton
           size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => {navigate('/')}}
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
            sx={{ mr: 2 }}
            onClick={() => {navigate('/favorites')}}
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
            sx={{ mr: 2 }}
            onClick={() => {navigate('/compares')}}
            >
          <Typography variant="h6" component="div">
            Comparar
          </Typography>
          </IconButton>

          <Toolbar style={{display:'flex', justifyContent:"flex-end", width:'100%'}}>
          <ColorBadge />
          <CompareBadge />
          {auth && (
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
          )}
          </Toolbar>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
