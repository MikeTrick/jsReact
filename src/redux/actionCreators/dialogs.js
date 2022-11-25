import {Actions} from '../actions.enum.js';

const addMessage = (payload) => ({
    type: Actions.ADD_MESSAGE,
    payload
})

export const dialogsActionCreators = {
    addMessage,
}
