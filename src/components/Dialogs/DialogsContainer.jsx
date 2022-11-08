import React from "react";

import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";


export const DialogsContainer = (props) => {

    let addMessage = () => {
        props.dispatch(addMessageActionCreator())
    }
    let onMessageChange = (message) => {
        props.dispatch(updateNewMessageTextActionCreator(message))
    }

    return <Dialogs addMesage={addMessage}
                    onMessageChange={onMessageChange}
                    state={props.state}/>
}
