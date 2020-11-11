import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';
import { AppBar, Toolbar, Box, IconButton, Avatar, Typography, List, ListItem, ListItemText, Menu } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AppsIcon from '@material-ui/icons/Apps';
import HomeIcon from '@material-ui/icons/Home';
import TableChartOutlinedIcon from '@material-ui/icons/TableChartOutlined';
import AddIcon from '@material-ui/icons/Add';
import InfoIcon from '@material-ui/icons/Info';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { logout } from '../store/auth';

const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor: "#026aa7"
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0px 5px",
  },
  left: {
    display: 'flex',
  },
  logo: {
    color: "white",
    opacity: '.5',
    textDecoration: "none",
    fontFamily: "Brush Script MT",
    fontSize: "28px",
    padding: "0",
    margin: "0",
  },
  icon: {
    fontSize: "28px",
    color: "rgba(255,255,255,.5)",
    opacity: "white",
  },
  button: {
    color: "white",
    backgroundColor: "hsla(0,0%,100%,.3)",
    borderRadius: "5px",
    padding: "5px",
    margin: "2px",
  },
  avatar: {
    width: '30px',
    height: '30px',
  },
  avatarButton: {
    padding: "2px",
  },
  boardsText: {
    fontSize: "14px",
    fontWeight: "700",
    color: "white",
    padding: "0px 8px",
  },
  centerLink: {
    textDecoration: "none",
  },
}));


const Navbar = () => {

  const classes = useStyles();
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.auth.user);
  let firstInitial = currentUser.username ?
    currentUser.username[0].toUpperCase() : null;
  const [anchorEl, setAnchorEl] = useState(null);

  const appsClick = (e) => {
    return
  }

  const homeClick = (e) => {
    window.location.href = "/";
  }

  const boardsClick = (e) => {
    window.location.href = "/";
  }

  const addClick = (e) => {
    return
  }

  const infoClick = (e) => {
    return
  }

  const notificationsClick = (e) => {
    return
  }

  const profileClick = (e) => {
    e.preventDefault();
    setAnchorEl(e.target);
  }

  const handleClose = (e) => {
    e.preventDefault();
    setAnchorEl(null);
  }

  const menuLogout = () => {
    dispatch(logout());
  }

  return (
    <>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar variant='dense' className={classes.toolbar}>
          <Box className={classes.left}>
            <IconButton className={classes.button} onClick={appsClick}><AppsIcon /></IconButton>
            <IconButton className={classes.button} onClick={homeClick}><HomeIcon /></IconButton>
            <IconButton className={classes.button} onClick={boardsClick}>
              <TableChartOutlinedIcon />
              <Typography className={classes.boardsText}>Boards</Typography>
            </IconButton>
          </Box>
          <NavLink to="/" className={classes.centerLink}>
            <Box className={classes.logoBox} display="flex" alignItems="center" >
              <TableChartOutlinedIcon className={classes.icon} />
              <Typography className={classes.logo}>Jello</Typography>
            </Box>
          </NavLink>
          <Box>
            <IconButton className={classes.button} onClick={addClick}><AddIcon /></IconButton>
            <IconButton className={classes.button} onClick={infoClick}><InfoIcon /></IconButton>
            <IconButton className={classes.button} onClick={notificationsClick}><NotificationsIcon /></IconButton>
            <IconButton className={classes.avatarButton} onClick={profileClick}>
              <Avatar className={classes.avatar}>{firstInitial}</Avatar>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={!!anchorEl}
        onClose={handleClose}
        className={classes.profileMenu}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        getContentAnchorEl={null}
        style={{ cursor: "pointer" }}
      >
        <List>
          <ListItem onClick={menuLogout}>
            <ListItemText primary="Log Out" />
          </ListItem>
        </List>
      </Menu>
    </>
  )
}

export default Navbar;
