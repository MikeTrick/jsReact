import React, {memo, useCallback, useMemo, useState} from 'react';

import {useActions} from "../../../common/hooks/useActions";
import {dialogsActions} from "../../../redux/actions";
import Classes from '../Dialogs.module.css'

export const MessageAdder = memo(() => {
    const [messageText, setMessageText] = useState('');

    const { addMessage } = useActions(dialogsActions);

    const isDisabled = useMemo(() => !messageText, [!!messageText])

    const changeMessageHandler = useCallback((inputEvent) => {
        setMessageText(inputEvent.target.value);
    }, []);

    const buttonClickHandler = useCallback(() => {
        if (messageText) {
            addMessage(messageText);
            setMessageText('');
        }
    }, [messageText]);

    return (
        <div className={Classes.text_adder}>
            <textarea onChange={changeMessageHandler} value={messageText} placeholder='type here ...'/>
            <button onClick={buttonClickHandler} disabled={isDisabled}>ADD</button>
        </div>
    )
})
