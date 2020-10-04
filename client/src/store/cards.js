import Cookies from 'js-cookie'
import { updateBoard } from './boards'
import { updateCardsOnList} from './lists'

const SET_USER_CARDS = "/entities/cards/SET_USER_CARDS"
const CREATE_CARD = "/entities/cards/CREATE_CARD"
const UPDATE_LIST_ON_CARD = "/entities/cards/UPDATE_LIST_ON_CARD"


export const setUserCards = (cards) => {
    return {
        type: SET_USER_CARDS,
        cards
    }
}

export const updateListOnCard = (card) => {
    return {
        type: UPDATE_LIST_ON_CARD,
        card
    }
}

// export const createNewCard = (newCard,boardId) => async dispatch => {
//     const jsonCard = JSON.stringify({...newCard,boardId})
//     console.log("WOWOWOWOWOWOWO")
//     const csrfToken = Cookies.get("XSRF-TOKEN");
//     const response = await fetch(`/api/lists/add-card`, {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "X-CSRF-TOKEN": csrfToken,
//         },
//     body: jsonCard
//     })
//     const data = await response.json();
//     console.log("this is the new card!!: ",data)
//     //TODO: TECHNICALLY WE DONT NEED THIS CALL TO UPDATE BOARD
//     dispatch(updateBoard(data['board']))
//     dispatch(updateCardsOnList(data['listId'],data['cardObject']))
//     dispatch(addCard(data['card']))
// }


export const addCard = (card) => {
    return {
        type: CREATE_CARD,
        card
    }
}

export default function cards(state={},action){
    const newState = Object.assign({},state)
    const userCards = Object.assign({},state.userCards)
    switch (action.type){
        case SET_USER_CARDS:
            newState.userCards = userCards
            Object.values(action.cards).forEach(card=>{
                newState.userCards[card.id] = card
            })
            return newState;
        case CREATE_CARD:
            newState.userCards = userCards;
            newState.userCards[action.card.id] = action.card
            return newState
        case UPDATE_LIST_ON_CARD:
            newState.userCards = userCards;
            newState.userCards[action.card.id] = action.card
            return newState
        default: 
            return state;
    }
}