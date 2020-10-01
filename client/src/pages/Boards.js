import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Container, IconButton, Icon, Link, Button } from '@material-ui/core';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import DashboardIcon from '@material-ui/icons/Dashboard';
import DeveloperBoardIcon from '@material-ui/icons/DeveloperBoard';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import AddIcon from '@material-ui/icons/Add';
import { loadUserBoards, createBoard } from '../store/boards'
import { useDispatch, useSelector } from 'react-redux';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';

function getModalStyle() {
  const top = 10
  const left = 50

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({

  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: "rgb(0, 121, 191)",
    padding: theme.spacing(2, 4, 3),
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

  ul: {
    listStyle: 'none',
    marginRight: "20px",
  },

  buttons: {
    fontSize: ".9em",
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

  board: {
    display: "flex",
    marginRight: "4px",
    height: "80px",
    borderRadius: "3px",
    backgroundColor: "rgb(0, 121, 191)",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Noto Sans,Ubuntu,Droid Sans,Helvetica Neue,sans-serif",
    color: 'white',
    fontWeight: '700',
  },

}));

const Boards = () => {
  const classes = useStyles();
  const dispatch = useDispatch()
  const user = useSelector(state => state.auth.user);
  const [title, setTitle] = useState("");
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const userId = user.id;

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(title, userId)
    debugger
    dispatch(createBoard(title, userId))
  };

  const handleBoard = (e) => {
    setTitle(e.target.value)
  }

  // const body = (

  //     <div style={modalStyle} className={classes.paper}>
  //       <form>
  //         <TextField placeholder="Add Board Title" name="title" value={title} onChange={handleBoard}/>
  //         <button onClick={handleSubmit} type='submit'>Create Board</button>
  //       </form>
  //     </div>

  // );

  useEffect(() => {
    dispatch(loadUserBoards(user.id))
  }, [dispatch])

  const boards = useSelector(state => state.entities.boards.userBoards);

  if (boards === undefined) {
    return null;
  }

  return (
    <Grid container className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={2} />
        <Grid container item xs={2} className={classes.sidebar}>
          <ul className={classes.ul}>
            <li className={classes.li}>
              <Button href='#' className={classes.buttons} startIcon={<DashboardIcon />}>Boards</Button>
              <Button href='#' className={classes.buttons} startIcon={<DeveloperBoardIcon />}>Templates</Button>
              <Button href='#' className={classes.buttons} startIcon={<ShowChartIcon />}>Home</Button>
              <p>TEAMS</p>
              <Button href='#' className={classes.buttons} startIcon={<AddIcon />}>Create a team</Button>
            </li>
          </ul>
        </Grid>
        <Grid container item xs={6}>
          <Grid container item xs={12} className={classes.title}>
            <PersonOutlineIcon />
            <h3 className={classes.h3}>Personal Boards</h3>
          </Grid>
          <Grid container item xs={12}>
            {Object.values(boards).map(object => {
              return (
                <Grid key={object.id} className={classes.board} item xs={3}>
                  <p className={classes.p}>{object.title}</p>
                </Grid>
              )
            })}
            <Grid item className={classes.Createboard} xs={3}>
              <p onClick={handleOpen}>
                Create Board
                </p>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
              >
                <div style={modalStyle} className={classes.paper}>
                  <form>
                    <TextField placeholder="Add Board Title" name="title" value={title} onChange={handleBoard} />
                    <button onClick={handleSubmit}>Create Board</button>
                  </form>
                </div>
              </Modal>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2} />
      </Grid>
    </Grid>
  )
}

export default Boards;
