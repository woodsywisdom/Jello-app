import React from 'react';
import { AppBar, Toolbar, Box, IconButton, InputBase, InputAdornment } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AppsIcon from '@material-ui/icons/Apps';
import HomeIcon from '@material-ui/icons/Home';
import TableChartOutlinedIcon from '@material-ui/icons/TableChartOutlined';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  left: {
    display: 'flex',
  }
})


const Navbar = () => {

  const classes = useStyles()

  const appsClick = (e) => {
    return
  }

  const homeClick = (e) => {
    return
  }

  const boardsClick = (e) => {
    return
  }

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Box className={classes.left}>
            <IconButton onClick={appsClick}><AppsIcon/></IconButton>
            <IconButton onClick={homeClick}><HomeIcon/></IconButton>
            <IconButton onClick={boardsClick}><TableChartOutlinedIcon/>Boards</IconButton>
              <InputBase className={classes.searchInput} >
                <InputAdornment position="end" ><SearchIcon /></InputAdornment>
              </InputBase>
          </Box>

          <Box>

          </Box>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar;
