import Cookies from 'js-cookie'
import {updateBoard} from './boards'
import {updateListOnCard} from './cards'


const SET_USER_LISTS = "/entities/lists/SET_USER_LISTS"
const CREATE_LIST = "/entities/lists/CREATE_LIST"
const UPDATE_CARDS_ON_LIST = "/entities/lists/UPDATE_CARDS_ON_LIST"

export const setUserLists = (lists) => {
    return {
        type: SET_USER_LISTS,
        lists
    }
}

// export const createNewList = (newList) => async dispatch => {
//     const jsonList = JSON.stringify(newList)
//     const csrfToken = Cookies.get("XSRF-TOKEN");
//     const response = await fetch(`/api/lists/create`, {
//     method: "post",
//     headers: {
//         "Content-Type": "application/json",
//         "X-CSRF-TOKEN": csrfToken,
//         },
//     body: jsonList
//     })
//     const list = await response.json();
//     dispatch(addList(list))
// }

export const moveCard = (boardId,addToId,cardId,removeFromId) => async dispatch => {
    console.log("removed from",removeFromId)
    const jsonInstructions = JSON.stringify(
        {"add-to":addToId,
        "card-id":cardId,
        "board":boardId,
        "remove-from":removeFromId
    })
    console.log(jsonInstructions)
    const csrfToken = Cookies.get("XSRF-TOKEN");
    const response = await fetch(`/api/lists/move-card`, {
    method: "PATCH",
    headers: {
        "Content-Type": "application/json",
        "X-CSRF-TOKEN": csrfToken,
        },
    body: jsonInstructions
    })
    const data = await response.json();
    console.log("look foo: ",data)
    dispatch(updateCardsOnList(data["addToListId"],data["addToCardObject"],data["removeFromListId",data["removeFromCardObject"]]))
    dispatch(updateListOnCard(data["card"]))
}

export const updateCardsOnList = (listId,cardObject,removeListId,removeListCardObject)=>{
    return {
        type: UPDATE_CARDS_ON_LIST,
        listId,
        cardObject,
        removeListId,
        removeListCardObject
    }
}


export const addList = (list) => {
    return {
        type: CREATE_LIST,
        list
    }
}

export default function lists(state={},action){
    const newState = Object.assign({},state)
    const userLists = Object.assign({},state.userLists)
    switch (action.type){
        case SET_USER_LISTS:
            newState.userLists = userLists
            Object.values(action.lists).forEach(list=>{
                newState.userLists[list.id] = list
            })
            return newState;
        case CREATE_LIST:
            newState.userLists = userLists;
            newState.userLists[action.list.id] = action.list
            return newState
        case UPDATE_CARDS_ON_LIST:
            newState.userLists = userLists;
            const listWithNewCards = Object.assign({},state.userLists[action.listId])
            const listRemoveCards = Object.assign({},state.userLists[action.removeListId])
            listWithNewCards.cards = action.cardObject
            listRemoveCards.cards = action.removeListCardObject
            newState.userLists[action.listId] = listWithNewCards
            newState.userLists[action.removeListId] = listRemoveCards
            return newState
        default: 
            return state;
    }
}