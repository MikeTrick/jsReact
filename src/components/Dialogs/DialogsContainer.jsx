import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        messagesData: state.messagesPage.messagesData,
        messagesPage: state.messagesPage,
        newMessageText: state.messagesPage.newMessageText,
        dialogsData: state.messagesPage.dialogsData,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onMessageChange: (message) => {
            dispatch(updateNewMessageTextActionCreator(message))
        },
        addMessage: (payload) => {
            dispatch(addMessageActionCreator())
        },
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
