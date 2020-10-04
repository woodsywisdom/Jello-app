import React, { useContext, useEffect, useState } from 'react';
import '../styles/List.css'
import  {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Grid, Paper, Container, IconButton, Icon, Link, Button } from '@material-ui/core';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import DashboardIcon from '@material-ui/icons/Dashboard';
import DeveloperBoardIcon from '@material-ui/icons/DeveloperBoard';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import AddIcon from '@material-ui/icons/Add';
import InputBase from '@material-ui/core/InputBase';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import BoardContext from '../pages/BoardContext';
import Card from '../components/Card'
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import SubjectIcon from '@material-ui/icons/Subject';
import LibraryAddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import AddCardForm from '../components/AddCardForm'
import CloseIcon from '@material-ui/icons/Close';
import { createNewCard, setUserCards, addCard } from '../store/cards';
import Cookies, { set } from 'js-cookie'
import ListContext from '../pages/ListContext'
import {updateBoard} from '../store/boards'
import {updateListOnCard} from '../store/cards'
import { updateCardsOnList,createNewList} from '../store/lists'
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles(( theme ) => ({

    root: {
        backgroundColor: "rgb(0, 121, 191)",
        height: '100vh',
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      paper: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        outline:"none"
      },

}));

const cardStyle = {
    userSelect: "none", 
    margin:"0 0 8px 0",
    padding:"4px", 
    minHeight: "35px", 
    borderRadius: "4px",
    backgroundColor: "white",
    color: "black",
    alignItems: "center",
    alignContent: "center",
  }
  
  const addCardStyle = {
    userSelect: "none", 
    margin:"0 0 8px 0",
    padding:"4px", 
    minHeight: "20px", 
    borderRadius: "4px",
    backgroundColor: "white",
    color: "black",
    alignItems: "center"
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

const List = ({list,id,cards}) => {
    console.log(`cards for list ${id}: `, cards)
    console.log("list prop ", list)
    console.log("list.cards: ",list.cards)
    const context = useContext(ListContext)
    const cardsInStore = useSelector(state=> state.entities.lists.userLists[id].cards)
    const dispatch = useDispatch()
    const [lists,setLists] = useState({})
    // const [hoveredCardId,setHoveredCardId] = useState(true)
    const [loadingNewCard, setLoadingNewCard] = useState(false)
    const [cardToCreate,setCardToCreate] = useState({})
    const [addCardList,setAddCardList] = useState()
    const [listCards,setListCards] = useState(list.cards)
    const [newCardTitle,setNewCardTitle] = useState("")
    const [newCard, setNewCard] = useState(true)
    const classes = useStyles();
    const [titleOpen, setTitleOpen] = useState(false);
    const [editCard,setEditCard] = useState({})

    const handleTitleModalOpen = () => {
        setTitleOpen(true);
    };

    const handleTitleModalClose = () => {
        setTitleOpen(false);
    };

    useEffect(()=>{
        const createNewCard = async (newCard,boardId) => {
            console.log("useEffect boardID: ",boardId)
            if (!newCard.title) return;
            const jsonCard = JSON.stringify({...newCard,boardId})
            console.log("WOWOWOWOWOWOWO")
            const csrfToken = Cookies.get("XSRF-TOKEN");
            const response = await fetch(`/api/lists/add-card`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-CSRF-TOKEN": csrfToken,
                },
            body: jsonCard
            })
            const data = await response.json();
            console.log("this is the new card!!: ",data)
            dispatch(updateBoard(data['board']))
            dispatch(updateCardsOnList(data['listId'],data['cardObject']))
            dispatch(addCard(data['card']))
            list.cards.push(data['card'])
            console.log("list.cards after pushing new card to list.cards: ", list.cards)
            setLoadingNewCard(false)
        }
        console.log("card To Create!",cardToCreate)
        if (cardToCreate) createNewCard(cardToCreate,context.boardId)
    },[newCard])

    const editCardTitle=(index,cardId)=>{
        setEditCard(list.cards[index])
        handleTitleModalOpen()
    }

    const handleNewCardTitleInput=(e,id)=>{
        if (context.addCardList === -1){
            context.setAddCardList(id)
        }
        context.setNewCardTitle(e.target.value)
        console.log("title: ",context.newCardTitle,"list: ",context.addCardList)
    }

    const Card = ({card,index}) => {
        console.log("card from callback: ",card)
        return (<Draggable key={card.id} draggableId={`${card.id}`} index={index}>
                              {(provided, snapshot) =>{
                                return (
                                  <div
                                  onClick={(e)=>{editCardTitle(index,card.id)}}
                                  ref={provided.innerRef}
                                  {...provided.dragHandleProps}
                                  {...provided.draggableProps}
                                  style={{
                                    cursor:"pointer",
                                    boxShadow: snapshot.isDragging ? "0px 4px 7px 0px #A4A8A7": "0 1px 0 rgba(9,30,66,.25)",
                                    ...cardStyle,
                                    ...provided.draggableProps.style
                                }}>
                                    <div
                                    // onMouseEnter={(e)=>addHover(e,card.id)} 
                                    // onMouseLeave={(e)=>removeHover(e)} cardid={card.id} 
                                    style={{display:"flex", 
                                    justifyContent:"space-between", flexDirection:"row", alignItems:"center", alignContent:"center"}}>
                                      <div style={{alignSelf:"center", fontSize:"15px"}}>{list.cards[index].title}</div>
                                      <div>
                                          <IconButton size="small">
                                            <EditIcon/>
                                          </IconButton>
                                      </div>
                                    </div>
                                  </div>
                                )
                              }}
                            </Draggable> )
    }
    
    // useEffect(()=>{
    //     console.log("from use effect!")
    //     setCards(cards)
    // },[listCards])

    // const addHover=(e,cardId)=>{
    //     setHoveredCardId(cardId)
    //   }
    //   const removeHover=(e)=>{
    //     setHoveredCardId(null)
    //   }

      const addACard = (e)=>{
        setLoadingNewCard(true)
        e.preventDefault()
        setCardToCreate({title:context.newCardTitle,board_id:context.boardId,description:"",list_id:context.addCardList})
        setNewCard(!newCard)
        context.makeNewCard()
      }
    
      const selectAddCardList=(e,id)=>{
          context.setAddCardList(id)
          console.log(context.addCardList)
      }
    
      const createCard=()=>{
        console.log(addCardList)
        console.log(newCardTitle)
        context.setAddCardList(addCardList)
        context.setNewCardTitle(newCardTitle)
      }
    return (
        <>
        <Droppable droppableId={`${id}`} key={id}>
                  {(provided, snapshot)=>{
                    return(
                      <div style={{display:"flex",flexDirection:"column"}}>
                      <div style={{
                        marginLeft:"8px", 
                        marginRight: "8px",
                        marginBottom:0,
                        marginTop:"10px",
                        fontSize:"16px", 
                        borderTopLeftRadius: "5px",
                        borderTopRightRadius: "5px",
                        maxWidth:272,
                        padding: "4px",
                        background: '#ebecf0',
                        paddingLeft:"18px",
                        fontWeight:"500"
                        }}>{list.title}</div>
                      <div
                      {...provided.draggableProps}
                      ref={provided.innerRef}
                      style={{
                        marginLeft:"8px", 
                        marginRight: "8px",
                        marginTop: 0,
                        alignItems:"center",
                        marginBottom:0,
                        background: snapshot.isDraggingOver ? '#ebecf0' : '#ebecf0',
                        padding: "8px",
                        width: 272,
                        maxHeight: 490,
                        overflow: "scroll"
                      }}>
                        {Object.values(list.cards).map((card,index)=>{
                          return (
                            <Card card={card} key={card.id} index={index}/>
                          )
                        })}
                        {provided.placeholder}
                        <div>
                            {loadingNewCard ? <div style={{...cardStyle}}></div> : ""}
                        </div>
                      </div>
                      <div style={{
                        marginLeft:"8px", 
                        marginRight: "8px",
                        marginBottom:0,
                        marginTop:0,
                        fontSize:"16px", 
                        borderBottomLeftRadius: "5px",
                        borderBottomRightRadius: "5px",
                        width:272,
                        padding: "9px",
                        paddingTop: "4px",
                        background: '#ebecf0',
                        fontWeight:"500"
                        }}> 
                        <form action="/api/lists/add-card" method="POST">
                            <div style={{display: context.addCardList === id ?  "flex" : "none", flexDirection:"column"}}>
                              <div>
                                <div style={{...addCardStyle}}>
                                  <InputBase className={classes.input}
                                    placeholder="Search Google Maps"
                                    inputProps={{ 'aria-label': '' }}style={{outline: "none", textDecoration: "none", width:"100%"}} placeholder="Enter a title for this card..." type="text" value={context.newCardTitle} onChange={(e)=>handleNewCardTitleInput(e,id)}/>
                                </div>
                                <div style={{display:"flex",justifyContent:"space-between",flexDirection:"row",alignItems:"center"}}>
                                  <div>
                                    {
                                      context.newCardTitle ? <ColorButton onClick={addACard} type="submit">Add Card</ColorButton> :
                                      <ColorButton disabled>Add Card</ColorButton>
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
                            <Button onClick={(e)=>selectAddCardList(e,id)}
                            style={{display: addCardList === id ? "none" : "flex"}} 
                            startIcon={<LibraryAddIcon />} 
                            fullWidth >add card</Button>
                          </div>
                      </div>
                    )
                  }}
                </Droppable>
                <div>
                <Modal
                  aria-labelledby="transition-modal-title"
                  aria-describedby="transition-modal-description"
                  className={classes.modal}
                  open={titleOpen}
                  onClose={handleTitleModalClose}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 400,
                  }}
                >
                  <Fade in={titleOpen}>
                    <div className={classes.paper}>
                        <div>{editCard.title}</div>
                    </div>
                  </Fade>
                </Modal>
              </div>
            </>
    )
}

export default List;