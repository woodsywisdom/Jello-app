import Cookies from 'js-cookie'
import {setUserLists} from './lists'
import {setUserCards} from './cards'

const SET_USER_BOARDS = '/entities/boards/SET_USER_BOARDS'
const CREATE_BOARD = '/entities/boards/CREATE_BOARD'
// const DELETE_USER_BOARD = 'entities/boards/DELETE_BOARD'

export const addBoard = (board) => {
    return {
        type: CREATE_BOARD,
        board
    }
}

export const setUserBoards = (boards) => {
    return {
        type: SET_USER_BOARDS,
        boards
    }
}


export const createBoard = (title, userId) => async dispatch => {
    if (!title || !userId) return;
    console.log(title, userId);
    debugger
    const test = JSON.stringify({title, userId})
    console.log(test)
    const csrfToken = Cookies.get("XSRF-TOKEN")
    const res = await fetch(`/api/boards/`,{
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "X-CSRF-TOKEN": csrfToken,
        },
        body: test
    })
    console.log(res);
    debugger
    res.data = await res.json()
    if (res.data['board']) {
        dispatch(addBoard(res.data['board']))
        return res
    }
}


export const loadUserBoards = (userId) => async dispatch => {
    const response = await fetch(`/api/boards/${userId}`);
    const boards = await response.json();
    if (response.ok) {
        dispatch(setUserBoards(boards.boards))
        dispatch(setUserLists(boards.lists))
        dispatch(setUserCards(boards.cards))
    }
}

export default function boards(state={},action){
    const newState = Object.assign({},state)
    const userBoards = Object.assign({},state.userBoards)
    switch (action.type){
        case SET_USER_BOARDS:
            newState.userBoards = userBoards
            Object.values(action.boards).forEach(board=>{
                newState.userBoards[board.id] = board
            })
            return newState;
        case CREATE_BOARD:
            newState.userBoards = userBoards;
            newState.userBoards[action.board.id] = action.board
            return newState
        // case DELETE_USER_BOARD:
        //     newState.userBoards = userBoards
        //     delete newState.userBoards[action.boardId]
        //     return newState
        default:
            return state;
    }
}
