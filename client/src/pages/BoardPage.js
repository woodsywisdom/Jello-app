import React, { useEffect, useState, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BoardContext from './BoardContext'
import Board from './Board'
import {createNewCard} from '../store/cards'
import { useParams } from 'react-router-dom';
import {moveCard} from '../store/lists'
import { updateBoard } from '../store/boards';
// import { updateBoard, updateList } from '../store/boards'

const BoardPage=()=>{
    const dispatch = useDispatch()
    const params = useParams()
    const boardId = Number(params.boardid)
    const [loading,setLoading] = useState(true)
    const [listsOnBoard,setListsOnBoard] =useState({})

    let userBoard = useSelector(state => state.entities.boards.userBoards[boardId])
    let userLists = useSelector(state=> state.entities.lists.userLists)
    useEffect(()=>{
      if(userBoard && userLists){
        const boardLists = {}
        Object.values(userLists).forEach((list)=>{
        if (list.board_id === boardId){
          boardLists[list.id] = list
        }
      })
        setListsOnBoard(boardLists)
        setLoading(false)
        console.log(boardLists)
      }
    },[dispatch,userBoard,userLists])

    if (loading) return "loading"
    return(
      <>
      <div style={{display:"flex", marginBottom: 0,flexDirection:"column", height:"100%", background: "rgb(0, 121, 191)"}}>
        <div style={{display:"flex", flexDirection:"row", padding:"12px", fontWeight:"700", fontSize:"24px",color:"white"}}>
          {userBoard.title}
        </div>
        <div style={{display:"flex", flexDirection:"row", overflow:"scroll"}}>
        <BoardContext.Provider value={{boardId}}>
            <Board boardLists={listsOnBoard}/>
        </BoardContext.Provider>
        </div>
      </div>
      
      </>
    )
}

export default BoardPage