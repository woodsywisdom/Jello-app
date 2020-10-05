import React, { useContext, useEffect, useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Grid, Paper, Container, IconButton, Icon, Link, Button } from '@material-ui/core';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import DashboardIcon from '@material-ui/icons/Dashboard';
import DeveloperBoardIcon from '@material-ui/icons/DeveloperBoard';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import AddIcon from '@material-ui/icons/Add';
import InputBase from '@material-ui/core/InputBase';
import {moveCard, updateCardsOnList, createNewList} from '../store/lists'
import { useDispatch, useSelector } from 'react-redux';
import  {DragDropContext } from 'react-beautiful-dnd';
import BoardContext from './BoardContext';
import LibraryAddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import AddCardForm from '../components/AddCardForm'
import CloseIcon from '@material-ui/icons/Close';
import { setUserCards, addCard } from '../store/cards';
import Cookies from 'js-cookie'
import List from '../components/List';
import ListContext from './ListContext'
import {addList} from '../store/lists'

const useStyles = makeStyles(( theme ) => ({

    root: {
        backgroundColor: "rgb(0, 121, 191)",
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    

}));

const onDragEnd = (result, lists, setLists,updateLists,boardId) => {
  if (!result.destination) return;
  console.log("result: ",result)
  const {source, destination} = result;
  console.log("result: ",result)
  if (source.droppableId !== destination.droppableId) {
    const sourceList = lists[source.droppableId];
    const destList = lists[destination.droppableId];
    const sourceCards = [...sourceList.cards]
    console.log("sourceList: ",sourceList)
    console.log("destList: ",destList)
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

const Board = ({boardLists}) => {
  const context = useContext(BoardContext)
  const updateLists = (boardId,addTo,cardId,removeFromId)=>{
    dispatch(moveCard(boardId,addTo,cardId,removeFromId))
  }
  const boardId = context.boardId
  const dispatch = useDispatch()
  const [lists,setLists] = useState(boardLists)
  const [addCardList,setAddCardList] = useState(-1)
  const [newCardTitle,setNewCardTitle] = useState("")
  const [newCard, setNewCard] = useState(true)
  const [creatingList,setCreatingList] = useState(false)
  const [listToCreate,setListToCreate] = useState({})
  const [openNewList,setOpenNewList] = useState(false)
  const [newListTitle,setNewListTitle] =useState("")

  const classes = useStyles();

  useEffect(()=>{
    const createNewList = async (newList) => {
      if( !newList.title) return;
      console.log(newList)
      const jsonList = JSON.stringify(newList)
      const csrfToken = Cookies.get("XSRF-TOKEN");
      const response = await fetch(`/api/lists/create`, {
      method: "post",
      headers: {
          "Content-Type": "application/json",
          "X-CSRF-TOKEN": csrfToken,
          },
      body: jsonList
      })
      const data = await response.json();
      console.log(data["list"])
      dispatch(addList(data["list"]))
      setNewListTitle("")
      console.log("newList: ",data["list"])
      setLists({[data["list"].id]:data["list"],...lists})
      console.log("boardLists: ",boardLists)
      setCreatingList(false)
    }
    if (creatingList) createNewList(listToCreate)
  },[creatingList]
  )

  const handleNewListTitleInput=(e)=>{
    setNewListTitle(e.target.value)
  }

  const addAList=(e)=>{
    e.preventDefault();
    setOpenNewList(false)
    setListToCreate({title:newListTitle,description:"",board_id:boardId})
    setCreatingList(true)
  }

  // useEffect(()=>{
  //   if(boardLists) {
  //     console.log("BOARD RERENDER!")
  //     setLists(boardLists)
  //     console.log("lists after setting lists from boardLists in board.js: ",lists)
  //     console.log("woops!")
  //     console.log("boardLists used to set lists passed to list.js: ",boardLists)
  //   }
  // },[boardLists])

  const makeNewCard=()=>{
    // dispatch(createNewCard({title:newCardTitle,board_id:boardId,description:"",list_id:addCardList},boardId))
    setAddCardList(-1)
    setNewCardTitle("")
  }
  console.log("LISTS: ",lists)
  return (
    <>
      <ListContext.Provider value={{newCardTitle,setNewCardTitle,boardId,makeNewCard,setLists,addCardList,setAddCardList}}>
        <div style={{display:"flex", justifyContent: "right",}}>
          <DragDropContext onDragEnd={result => onDragEnd(result,lists,setLists,updateLists,boardId)}>
            {Object.entries(lists).map(([id,list])=>{
              return (
                <List key={id} list={list} id={id} cards={list.cards}/>
              )
            })}
          </DragDropContext>
          <div style={{
                        marginLeft:"8px", 
                        marginRight: "8px",
                        fontSize:"16px",
                        display:"block",
                        boxSizing: "inherit",
                        borderTopLeftRadius: "5px",
                        borderTopRightRadius: "5px",
                        fontSize:"16px", 
                        borderBottomLeftRadius: "5px",
                        borderBottomRightRadius: "5px",
                        width:272,
                        marginBottom:"670px",
                        background: 'transparent',
                        fontWeight:"500"
                        }}> 
                        <form action="/api/lists/add-card" method="POST">
                            <div style={{display: openNewList ?  "flex" : "none", padding: "9px",width:272, flexDirection:"column", background:"#ebecf0",borderTopLeftRadius: "5px", borderTopRightRadius: "5px", borderBottomLeftRadius: "5px", borderBottomRightRadius: "5px",}}>
                              <div>
                                <div style={{...addCardStyle}}>
                                  <InputBase className={classes.input}
                                    placeholder="Search Google Maps"
                                    inputProps={{ 'aria-label': '' }}style={{outline: "none", textDecoration: "none", width:"100%"}} placeholder="Enter a title for this list..." type="text" value={newListTitle} onChange={handleNewListTitleInput}/>
                                </div>
                                <div style={{display:"flex",justifyContent:"space-between",flexDirection:"row",alignItems:"center"}}>
                                  <div>
                                    {
                                      newListTitle ? <ColorButton onClick={addAList} type="submit">Add List</ColorButton> :
                                      <ColorButton disabled>Add List</ColorButton>
                                      }
                                  </div>
                                  <div>
                                    <IconButton>
                                      <CloseIcon></CloseIcon>
                                    </IconButton>
                                  </div>
                                </div>
                              </div>
                            </div>
                            </form>
                            <Button onClick={(e)=>setOpenNewList(true)}
                            style={{display: openNewList ? "none" : "flex",background:"#ebecf0"}} 
                            startIcon={<LibraryAddIcon />} 
                            fullWidth >add list</Button>
                          </div>
                      </div>
      </ListContext.Provider>
    </>
  )
}

export default Board;
