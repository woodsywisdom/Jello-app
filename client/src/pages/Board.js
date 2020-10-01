import React, { useContext, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Container, IconButton, Icon, Link, Button } from '@material-ui/core';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import DashboardIcon from '@material-ui/icons/Dashboard';
import DeveloperBoardIcon from '@material-ui/icons/DeveloperBoard';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import AddIcon from '@material-ui/icons/Add';
import { useDispatch, useSelector } from 'react-redux';
import  {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';
import { useLocation, useParams } from 'react-router-dom';
import BoardContext from './BoardContext';
import Card from '../components/Card'

const useStyles = makeStyles(( theme ) => ({

    root: {
        backgroundColor: "rgb(0, 121, 191)",
        height: '100vh',
    }

}));


const CardsFromDB = [
  {id: 1, title:"hey bu",description: "hello"},
  {id: 2, title:"hey bu",description: "yall"}
]

const ListsFromDB = {
  1:{
    title: "hello",
    cards: CardsFromDB
  },
  2:{
    title: "hello",
    cards: []
  },
  3:{
    title: "hello",
    cards: []
  },
  4:{
    title: "hello",
    cards: []
  }
}

const onDragEnd = (result, lists, setLists,updateLists) => {
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
    updateLists(source.droppableId,destination.droppableId,removed)
  }else{
  const list = lists[Number(source.droppableId)]
  console.log("SOURCE DROP",source.droppableId,Number(source.droppableId) )
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



const Board = (props) => {
  const context = useContext(BoardContext)
  const updateLists = context.updateLists

  const [lists,setLists] = useState({})
  useEffect(()=>{
    setLists(context.Lists)
  },[context.ListsFromDB])

  const classes = useStyles();
  console.log("these are current lists: ",context.Lists)

  return (
    <>
        <div style={{display:"flex", justifyContent: "center", height:"100%"}}>
          <DragDropContext onDragEnd={result => onDragEnd(result,lists,setLists,updateLists)}>
            {Object.entries(lists).map(([id,list])=>{
              return (
                <Droppable droppableId={`${id}`} key={id}>
                  {(provided, snapshot)=>{
                    return(
                      <div
                      {...provided.draggableProps}
                      ref={provided.innerRef}
                      style={{
                        background: snapshot.isDraggingOver ? 'lightblue' : 'lightgrey',
                        padding: 4,
                        width: 250,
                        minHeight: 500
                      }}>
                        {list.cards.map((card,index)=>{
                          console.log("card: ", card)
                          return (
                            <Draggable key={card.id} draggableId={`${card.id}`} index={index}>
                              {(provided, snapshot) =>{
                                return (
                                  <div
                                  ref={provided.innerRef}
                                  {...provided.dragHandleProps}
                                  {...provided.draggableProps}
                                  style={{userSelect: "none", 
                                  margin:"0 0 8px 0", 
                                  minHeight: "50px", 
                                  borderRadius: "4px",
                                  backgroundColor: snapshot.isDragging ? 'light-blue' : "white",
                                  color: "black",
                                  ...provided.draggableProps.style
                                }}>
                                  <Card title={card.title} description={card.description}></Card>
                                </div>
                                )
                              }}
                            </Draggable> 
                          )
                        })}
                        {provided.placeholder}
                      </div>
                    )
                  }}
                </Droppable>
              )
            })}
          </DragDropContext>
        </div>
    </>
  )
}

export default Board;
