import React, { useContext, useEffect, useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Grid, Paper, Container, IconButton, Icon, Link, Button } from '@material-ui/core';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import DashboardIcon from '@material-ui/icons/Dashboard';
import DeveloperBoardIcon from '@material-ui/icons/DeveloperBoard';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import AddIcon from '@material-ui/icons/Add';
import InputBase from '@material-ui/core/InputBase';
import {moveCard} from '../store/lists'
import { useDispatch, useSelector } from 'react-redux';
import  {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';
import { useLocation, useParams } from 'react-router-dom';
import BoardContext from './BoardContext';
import Card from '../components/Card'
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import SubjectIcon from '@material-ui/icons/Subject';
import LibraryAddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import AddCardForm from '../components/AddCardForm'
import CloseIcon from '@material-ui/icons/Close';
import { createNewCard, setUserCards, addCard } from '../store/cards';
import Cookies from 'js-cookie'
import List from '../components/List';
import ListContext from './ListContext'

const useStyles = makeStyles(( theme ) => ({

    root: {
        backgroundColor: "rgb(0, 121, 191)",
        height: '100vh',
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },

}));

const onDragEnd = (result, lists, setLists,updateLists,boardId) => {
  if (!result.destination) return;
  const {source, destination} = result;
  if (source.droppableId !== destination.droppableId) {
    const sourceList = lists[source.droppableId];
    const destList = lists[destination.droppableId];
    const sourceCards = [...sourceList.cards]
    const destCards = [...destList.cards];
    const [removed] = sourceCards.splice(source.index,1)
    destCards.splice(destination.index, 0, removed)
    setLists({
      ...lists,
      [source.droppableId]: {
        ...sourceList,
        cards: sourceCards
      },
      [destination.droppableId]: {
        ...destList,
        cards: destCards
      }
    })
    console.log("SOURCE: ",source.droppableId)
    updateLists(boardId,Number(destination.droppableId),removed.id,Number(source.droppableId))
  }else{
  const list = lists[Number(source.droppableId)]
  const copiedItems = [...list.cards]
  const [removed] = copiedItems.splice(source.index, 1)
  copiedItems.splice(destination.index, 0, removed);
  setLists({
    ...lists,
    [source.droppableId]: {
      ...list,
      cards: copiedItems
    }
  })}
}

const cardStyle = {
  userSelect: "none", 
  margin:"0 0 8px 0",
  padding:"4px", 
  minHeight: "35px", 
  borderRadius: "4px",
  backgroundColor: "white",
  color: "black",
  alignItems: "center",
  alignContent: "center"
  ,
};

const addCardStyle = {
  userSelect: "none", 
  margin:"0 0 8px 0",
  padding:"4px", 
  minHeight: "20px", 
  borderRadius: "4px",
  backgroundColor: "white",
  color: "black",
  alignItems: "center"
  ,
};

const ColorButton = withStyles((theme) => ({
  root: {
      color: "white",
      paddingRight: "10px",
      paddingLeft: "10px",
      backgroundColor:"grey",
      '&:hover': {
          backgroundColor: "#2196f3 !important",
      },
  },
}))(Button);

const Board = (props) => {
  const context = useContext(BoardContext)
  const updateLists = (boardId,addTo,cardId,removeFromId)=>{
    dispatch(moveCard(boardId,addTo,cardId,removeFromId))
  }
  const boardId = context.boardId
  const dispatch = useDispatch()
  const boardLists = useSelector(state=>{
    const boardList = {}
    Object.values(state.entities.lists.userLists).forEach((list)=>{
      if (list.board_id === boardId){
        boardList[list.id] = list
      }
    })
    return boardList
  })
  const [lists,setLists] = useState({})
  const [addCardList,setAddCardList] = useState(-1)
  const [newCardTitle,setNewCardTitle] = useState("")
  const [newCard, setNewCard] = useState(true)

  const classes = useStyles();


  useEffect(()=>{
    if(boardLists) {
      setLists(boardLists)
      console.log("woops!")
      console.log(boardLists)
    }
  },[dispatch])

  const makeNewCard=()=>{
    dispatch(createNewCard({title:newCardTitle,board_id:boardId,description:"",list_id:addCardList},boardId))
    setAddCardList(-1)
    setNewCardTitle("")
  }
  return (
    <>
      <ListContext.Provider value={{newCardTitle,setNewCardTitle,makeNewCard,setLists,addCardList,setAddCardList}}>
        <div style={{display:"flex", justifyContent: "right",}}>
          <DragDropContext onDragEnd={result => onDragEnd(result,lists,setLists,updateLists,boardId)}>
            {Object.entries(lists).map(([id,list])=>{
              return (
                <List key={id} list={list} id={id}/>
              )
            })}
          </DragDropContext>
          <div style={{
                        margin:"10px",
                        fontSize:"16px", 
                        borderTopLeftRadius: "5px",
                        borderTopRightRadius: "5px",
                        borderBottomLeftRadius: "5px",
                        borderBottomRightRadius: "5px",
                        width:272,
                        maxHeight:46,
                        padding: "4px",
                        background: '#ebecf0',
                        fontWeight:"500"
                        }}>
                          <Button startIcon={<LibraryAddIcon />} fullWidth >add list</Button>
                          </div>
        </div>
      </ListContext.Provider>
    </>
  )
}

export default Board;
