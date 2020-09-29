import { AppBar, Box, IconButton, Toolbar } from '@material-ui/core';
import React from 'react';
import { AppBar, Toolbar, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { AppsIcon, HomeIcon, TableChartOutlinedIcon } from '@material-ui/icons';

const useStyles = makeStyles({
  toolbar: {
    display: "flex",
    justify-content: "space-between",
  }
})


const Navbar = () => {

  return (
    <>
      <AppBar>
        <Toolbar>
          <Box>
            <IconButton><AppsIcon/></IconButton>
            <IconButton><HomeIcon/></IconButton>
            <IconButton><TableChartOutlinedIcon/>Boards</IconButton>
          </Box>

          <Box>

          </Box>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar;
