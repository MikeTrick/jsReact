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
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: state.messagesData.length + 1,
                message: state.newMessageText,
            };
            //
            // return {
            //
            //     ...state,
            //     messagesData: [...state.messagesData, action.payload],
            //     newMessageText: '',
            // }
            let stateCopy = {...state}
            stateCopy.messagesData = [...state.messagesData]
            stateCopy.messagesData.push(newMessage)
            stateCopy.newMessageText = ('');
            return stateCopy;
        }

        case UPDATE_NEW_MESSAGE_TEXT: {
            // let stateCopy = {...state}
            // state.newMessageText = action.newMessageText
            // return state;
            return { ...state, newMessageText: action.payload }

        }

        default:
            return state;
    }
}


export const addMessageActionCreator = (payload) => {
    return {type: ADD_MESSAGE, payload}
}
export const updateNewMessageTextActionCreator = (message) => {
    return {type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: message}

}

export default dialogsReducer;