import * as types from '../actions/ActionTypes';

const initialState = {
    wishList :['product001']
}

function wishList(state=initialState, action){
    let wishList = state.wishList;
    let newWish;
    switch(action.type){
        case types.ADD_WISHLIST:
            wishList.push(action.item)
            return {
                ...state,
            }
        break;
        case types.REMOVE_WISHLIST:
            newWish = wishList.splice(wishList.indexOf(action.item), 1)
            return {
                ...state,
            }
        break;
        default: 
            return state;
        break;
    }
}

export default wishList;