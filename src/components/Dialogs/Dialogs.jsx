import React from "react";

import Classes from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/state";

export const Dialogs = (props) => {

    let messagesElements = props.state.messagesData
        .map(messages => <Message message={messages.message}></Message>)

    let dialogsElements = props.state.dialogsData
        .map(dialog => <DialogItem id={dialog.id} name={dialog.name}/>)

    let newMessage = React.createRef()

    let addMessage = () => {
        props.dispatch({type: 'ADD-MESSAGE'})
        // props.dispatch(addMessageActionCreator())

    }

    let onMessageChange = () => {
        let message = newMessage.current.value;
        props.dispatch(updateNewMessageTextActionCreator(message))
    }

    return (
        <div>
            <div className={Classes.dialogsWrapper}>
                <h2>DIALOGS</h2>
                <div className={Classes.dialogs}>
                    <div className={Classes.dialogsNames}>
                        {dialogsElements}
                    </div>
                    <div className={Classes.messages}>
                        {messagesElements}
                    </div>
                </div>
            </div>
            <div className={Classes.text_adder}>
                <textarea ref={newMessage} onChange={onMessageChange} value={props.state.newMessageText}></textarea>
                <button onClick={addMessage}>add</button>
            </div>
        </div>
    )
}
