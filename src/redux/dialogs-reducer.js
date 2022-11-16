import ReactDOM from "react-dom/client";
import React from "react";
import {Provider} from "react-redux";
import store from "./redux-store";
import App from "../App";

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    messagesData: [
        {id: 1, message: 'Yo'},
        {id: 2, message: 'Man'},
        {id: 3, message: 'How are you?'},
        {id: 4, message: 'Yo'},
    ],

    dialogsData: [
        {id: 1, name: 'Mike'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'John'},
        {id: 4, name: 'Meatball'},
        {id: 5, name: 'Chan'}
    ],
    newMessageText: 'write something'
}

const dialogsReducer = (state = initialState, action) => {
    // let stateCopy = {
    //     ...state,
    //
    //     // messagesData: [...state.messagesData]
    // }

    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: state.messagesData.length + 1,
                message: state.newMessageText,
            };
            let stateCopy = {...state}
            stateCopy.messagesData = [...state.messagesData]
            stateCopy.messagesData.push(newMessage)
            stateCopy.newMessageText = ('');
            return stateCopy;
        }

        case UPDATE_NEW_MESSAGE_TEXT: {
            let stateCopy = {...state}
            stateCopy.newMessageText = action.newMessageText
            debugger;
            return stateCopy;

        }

        default:
            return state;
    }
}


export const addMessageActionCreator = () => {
    return {type: ADD_MESSAGE}
}
export const updateNewMessageTextActionCreator = (message) => {
    return {type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: message}

}

export default dialogsReducer;