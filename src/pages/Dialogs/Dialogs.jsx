import React, {useMemo} from 'react';
import {useSelector} from "react-redux";

import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {getDialogsState} from "../../redux/store/selectors";
import {MessageAdder} from "./MessageAdder"
import Classes from './Dialogs.module.css';

export const Dialogs = () => {

    const dialogs = useSelector(getDialogsState.getDialogsSelector);
    const messages = useSelector(getDialogsState.getMessagesSelector);

    const renderDialogs = useMemo(() => dialogs.map(({id, name}) => (
        <DialogItem
            key={id}
            id={id}
            name={name}
        />
    )), [dialogs]);

    const renderMessages = useMemo(() => messages.map(({id, message}) => (
        <Message
            key={id}
            id={id}
            message={message}
        />
    )), [messages]);

    return (
        <div className={Classes.dialogsWrapper}>
            <h2>DIALOGS</h2>
            <div className={Classes.dialogs}>
                <div className={Classes.dialogsNames}>
                    {renderDialogs}
                </div>
                <div className={Classes.messages}>
                    {renderMessages}
                </div>
            </div>
            <MessageAdder />
        </div>
    )
}
