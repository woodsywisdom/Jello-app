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
import Cookies from 'js-cookie'
import ListContext from '../pages/ListContext'

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

const List = ({list,id}) => {
    const context = useContext(ListContext)
    const cards = useSelector(state=> state.entities.lists.userLists[id].cards)
    const dispatch = useDispatch()
    const [lists,setLists] = useState({})
    const [hoveredCardId,setHoveredCardId] = useState(null)
    const [addCardList,setAddCardList] = useState()
    const [listCards,setListCards] = useState(list.cards)
    const [newCardTitle,setNewCardTitle] = useState("")
    const [newCard, setNewCard] = useState(true)
    const classes = useStyles();

    const handleNewCardTitleInput=(e,id)=>{
        if (context.addCardList === -1){
            context.setAddCardList(id)
        }
        context.setNewCardTitle(e.target.value)
        console.log("title: ",context.newCardTitle,"list: ",context.addCardList)
    }

    const Card = ({card,index}) => {
        return (<Draggable key={card.id} draggableId={`${card.id}`} index={index}>
                              {(provided, snapshot) =>{
                                return (
                                  <div
                                  ref={provided.innerRef}
                                  {...provided.dragHandleProps}
                                  {...provided.draggableProps}
                                  style={{
                                    boxShadow: snapshot.isDragging ? "0px 4px 7px 0px #A4A8A7": "0 1px 0 rgba(9,30,66,.25)",
                                    ...cardStyle,
                                    ...provided.draggableProps.style
                                }}>
                                    <div 
                                    onMouseEnter={(e)=>addHover(e,card.id)} 
                                    onMouseLeave={(e)=>removeHover(e)} cardid={card.id} 
                                    style={{display:"flex", 
                                    justifyContent:"space-between", flexDirection:"row", alignItems:"center", alignContent:"center"}}>
                                      <div style={{alignSelf:"center", fontSize:"15px"}}>{card.title}</div>
                                      <div>
                                          <IconButton size="small"
                                          style={{
                                            display: hoveredCardId === card.id ? "flex" : "none"
                                          }}
                                          >
                                            <EditIcon/>
                                          </IconButton>
                                      </div>
                                    </div>
                                  </div>
                                )
                              }}
                            </Draggable> )
    }
    
    useEffect(()=>{
        const cardIds = Object.values(cards).map(card=>card.id)
        const listIds = list.cards.map(card=>card.id)
        const newId = cardIds.filter(id=> !listIds.includes(id))
        console.log("newId wut wut wuuut",newId)
        const newCard = cards[newId]
        console.log("newCardwutwut",newCard)
    },[cards])

    const addHover=(e,cardId)=>{
        setHoveredCardId(cardId)
      }
      const removeHover=(e)=>{
        setHoveredCardId(null)
      }

      const addACard = (e)=>{
        e.preventDefault()
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
                        width:272,
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
                        minHeight: 200
                      }}>
                        {Object.values(list.cards).map((card,index)=>{
                          return (
                            <Card card={card} key={card.id} index={index}/>
                          )
                        })}
                        {provided.placeholder}
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
    )
}

export default List;