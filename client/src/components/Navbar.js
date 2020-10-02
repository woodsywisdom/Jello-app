import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { AppBar, Toolbar, Box, IconButton, InputBase, InputAdornment, Avatar, Typography } from '@material-ui/core';
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
    backgroundColor: "#0079bf"
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
}));


const Navbar = () => {

  const classes = useStyles();
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.auth.user);
  let firstInitial = currentUser.username ?
    currentUser.username[0].toUpperCase() : null;

  const appsClick = (e) => {
    return
  }

  const homeClick = (e) => {
    return <Redirect to="/"/>
  }

  const boardsClick = (e) => {
    return <Redirect to="/"/>
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

  const menuLogout = e => {
    const loggedOut = dispatch(logout());
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
          <Link to="/">
            <Box className={classes.logoBox} display="flex" alignItems="center" >
              <TableChartOutlinedIcon className={classes.icon} />
              <Typography className={classes.logo}>Jello</Typography>
            </Box>
          </Link>
          <Box>
            <IconButton className={classes.button} onClick={addClick}><AddIcon /></IconButton>
            <IconButton className={classes.button} onClick={infoClick}><InfoIcon /></IconButton>
            <IconButton className={classes.button} onClick={notificationsClick}><NotificationsIcon /></IconButton>
            <IconButton className={classes.avatarButton} onClick={menuLogout}>
              <Avatar className={classes.avatar}>{firstInitial}</Avatar>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar;
