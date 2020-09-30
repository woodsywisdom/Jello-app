import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Container, IconButton, Icon, Link, Button } from '@material-ui/core';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import DashboardIcon from '@material-ui/icons/Dashboard';
import DeveloperBoardIcon from '@material-ui/icons/DeveloperBoard';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(( theme ) => ({

  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },

  root: {
    display: "flex",
    padding: theme.spacing(4),
  },

  h3: {
    color: "#172b4d",
    margin: "0",
  },

  p: {
    textAlign: 'center',
  },

  // sidebar: {
  //   height: "100vh",
  //   position: "sticky",
  //   backgroundColor: "red",
  //   zIindex: "3",
  //   display: "flex",
  //   direction: "column",
  // }
  ul: {
    listStyle: 'none',
  },

  Createboard: {
    display: "flex",
    height: "80px",
    borderRadius: "3px",
    backgroundColor: "rgba(9,30,66,.04)",
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    display: "flex",
    height: "0",
  },

}));

const Boards = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={2}/>
        <Grid container item xs={2} className={classes.sidebar}>
          <ul className={classes.ul}>
            <li>
              <Button href='#' color='black' startIcon={<DashboardIcon />}>Boards</Button>
              <Button href='#' color='black' startIcon={<DeveloperBoardIcon />}>Templates</Button>
              <Button href='#' color='black' startIcon={<ShowChartIcon />}>Home</Button>
              <Button href='#' color='black' startIcon={<AddIcon />}>Create a team</Button>
            </li>
          </ul>
        </Grid>
        <Grid container item xs={6}>
          <Grid container item xs={12} className={classes.title}>
            <PersonOutlineIcon />
            <h3 className={classes.h3}>Personal Boards</h3>
          </Grid>
          <Grid container item xs={12}>
            <Grid className={classes.Createboard} item xs={3}>
              <p className={classes.p}>Create a Board</p>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2}/>
      </Grid>
    </Grid>
  )
}

export default Boards;
