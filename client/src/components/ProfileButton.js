import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Avatar, IconButton, Menu, MenuItem } from '@material-ui/core';

import { logout } from '../store/auth';

const ProfileButton = () => {
  const dispatch = useDispatch;
  const [anchorEl, setAnchorEl] = useState(null);
  const currentUser = useSelector(state => state.auth.user);
  let firstInitial = currentUser.username ?
    currentUser.username[0].toUpperCase() : null;

  const menuClose = e => setAnchorEl(null);
  const avatarClick = e => setAnchorEl(e.taget);

  const menuLogout = e => {
    menuClose();
    dispatch(logout());
  }

  return (
    <>
      <IconButton onClick={avatarClick}>
        <Avatar>{firstInitial}</Avatar>
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        getContentAnchorEl={null}
        keepMounted
        open={!!anchorEl}
        onClose={menuClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
      >
        <MenuItem onClick={menuLogout}>Log Out</MenuItem>
      </Menu>
    </>
  );
}

export default ProfileButton;
