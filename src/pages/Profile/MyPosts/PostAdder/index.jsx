import React, {memo, useCallback, useMemo, useState} from 'react';

import Classes from '../MyPosts.module.css'
import {profileActions} from "../../../../redux/actions";
import {useActions} from "../../../../common/hooks/useActions";

export const PostAdder = memo(() => {
    const [postText, setPostText] = useState('');

    const {addPost} = useActions(profileActions);

    const isDisabled = useMemo(() => !postText, [!!postText])

    const changePostTextHandler = useCallback((inputEvent) => {
        setPostText(inputEvent.target.value);
    }, []);

    const buttonClickHandler = useCallback(() => {
        if (postText) {
            addPost(postText);
            setPostText('');
        }
    }, [postText]);

    return (
        <div className={Classes.postAdder}>
            <textarea onChange={changePostTextHandler} value={postText} placeholder='type here ...'/>
            <button onClick={buttonClickHandler} disabled={isDisabled}>ADD</button>
        </div>
    )
})
