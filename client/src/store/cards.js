import Cookies from 'js-cookie'

const SET_USER_CARDS = "/entities/cards/SET_USER_CARDS"
const CREATE_CARD = "/entities/cards/CREATE_CARD"

export const setUserCards = (cards) => {
    return {
        type: SET_USER_CARDS,
        cards
    }
}

export const createNewCard = (newCard) => async dispatch => {
    const jsonCard = JSON.stringify(newCard)
    const csrfToken = Cookies.get("XSRF-TOKEN");
    const response = await fetch(`/api/cards/create`, {
    method: "post",
    headers: {
        "Content-Type": "application/json",
        "X-CSRF-TOKEN": csrfToken,
        },
    body: jsonCard
    })
    const card = await response.json();
    console.log("this is the new card: ",card)
    dispatch(addCard(card))
}


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
        default: 
            return state;
    }
}