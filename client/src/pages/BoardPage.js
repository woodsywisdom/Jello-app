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

    let userBoard = useSelector(state => state.entities.boards.userBoards[boardId])
    useEffect(()=>{
      if(userBoard){
        setLoading(false)
      }
    },[dispatch,userBoard])
    if (loading) return "loading"
    return(
        <BoardContext.Provider value={{boardId}}>
            <Board/>
        </BoardContext.Provider>
    )
}

export default BoardPage