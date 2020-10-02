import React, { useEffect, useState, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BoardContext from './BoardContext'
import Board from './Board'
import { useParams } from 'react-router-dom';
import {moveCard} from '../store/lists'

const CardsFromDB = [
    {id: 1, title:"hey bu",description: "hello"},
    {id: 2, title:"hey bu",description: "yall"}
  ]

const BoardPage=()=>{
    const dispatch = useDispatch()
    const params = useParams()
    const boardId = Number(params.boardid)
    const [lists,setLists] = useState([])
    const [cards,setCards] = useState([])
    const [board,setBoard] = useState({})
    const [loading,setLoading] = useState(true)

    let userBoard = useSelector(state => state.entities.boards.userBoards[boardId])
    let userCards = useSelector(state => state.entities.cards.userCards)
    let userLists = useSelector(state => state.entities.lists.userLists)
    useEffect(()=>{
      if (userBoard && userCards && userLists) {
        setLists(Object.values(userBoard.lists))
        setBoard(userBoard)
        setCards(Object.values(userCards))
        setLoading(false)
      }
    }, [userBoard, userCards, userLists])

    const updateLists = (boardId,addTo,cardId)=>{
        console.log(boardId,addTo,"removed",cardId)
        dispatch(moveCard(boardId,addTo,cardId))
    }

    const Lists = {}
    lists.forEach(list=>{
        Lists[list.id] = {title: list.title, cards: list.cards}
        console.log("DBLISTS",Lists)
    })

    // const ListsFromDB = {
    //     1:{
    //       title: "hello",
    //       cards: CardsFromDB
    //     },
    //     2:{
    //       title: "hello",
    //       cards: []
    //     },
    //     3:{
    //       title: "hello",
    //       cards: []
    //     },
    //     4:{
    //       title: "hello",
    //       cards: []
    //     }
    // }
    if (loading) return "loading"

    return(
        <BoardContext.Provider value={{Lists, updateLists,boardId}}>
            <Board/>
        </BoardContext.Provider>
    )
}

export default BoardPage