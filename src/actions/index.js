import * as types from './ActionTypes';

export const addWishList = item=>({
    type: types.ADD_WISHLIST,
    item
})

export const removeWishList = item=>({
    type: types.REMOVE_WISHLIST,
    item
})