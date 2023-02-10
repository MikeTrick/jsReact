import {Actions} from '../actions.enum.js';

const addPost = (payload) => ({
    type: Actions.ADD_POST,
    payload
})

const addLike = (payload) => ({
    type: Actions.ADD_LIKE,
    payload
})

const setUserProfile =(payload) => ({
    type: Actions.SET_USER_PROFILE,
    payload
})

export const profileActionCreators = {
    addPost,
    addLike,
    setUserProfile
}
