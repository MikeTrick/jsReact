import {Actions} from '../actions.enum.js';

const addPost = (payload) => ({
    type: Actions.ADD_POST,
    payload
})

export const profileActionCreators = {
    addPost,
}
