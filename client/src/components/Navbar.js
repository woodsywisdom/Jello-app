import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppBar, Toolbar, Box, IconButton, InputBase, InputAdornment, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AppsIcon from '@material-ui/icons/Apps';
import HomeIcon from '@material-ui/icons/Home';
import TableChartOutlinedIcon from '@material-ui/icons/TableChartOutlined';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import InfoIcon from '@material-ui/icons/Info';
import NotificationsIcon from '@material-ui/icons/Notifications';
// import ProfileButton from './ProfileButton';
import { logout } from '../store/auth';

const useStyles = makeStyles({
  appbar: {
    backgroundColor: "#0079bf"
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  left: {
    display: 'flex',
  }
})


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
    return
  }

  const boardsClick = (e) => {
    return
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
        <Toolbar className={classes.toolbar}>
          <Box className={classes.left}>
            <IconButton onClick={appsClick}><AppsIcon /></IconButton>
            <IconButton onClick={homeClick}><HomeIcon /></IconButton>
            <IconButton onClick={boardsClick}><TableChartOutlinedIcon />Boards</IconButton>
            <InputBase className={classes.searchInput} >
              <InputAdornment position="end" ><SearchIcon /></InputAdornment>
            </InputBase>
          </Box>

          <Box>
            <IconButton onClick={addClick}><AddIcon /></IconButton>
            <IconButton onClick={infoClick}><InfoIcon /></IconButton>
            <IconButton onClick={notificationsClick}><NotificationsIcon /></IconButton>
            <IconButton onClick={menuLogout}>
              <Avatar>{firstInitial}</Avatar>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar;
