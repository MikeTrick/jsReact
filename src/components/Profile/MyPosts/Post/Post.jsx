import React from "react";
import Classes from './Post.module.css'
import {useActions} from "../../../../common/hooks/useActions";
import {profileActions} from "../../../../redux/actions";

export const Post = (props) => {

    const {addLike} = useActions(profileActions);


    return (
        <div className={Classes.container}>
            <div className={Classes.item}>
                <img src='https://animeslayers.ru/wp-content/uploads/kartinki/vk/naavatarkuvk1.jpg' alt=''/>
                {props.message}
                <div>
                <span className={Classes.likes}>
                    {props.likesAmount} likes
                    <button onClick={addLike}>
                      <img src='https://image.pngaaa.com/106/10106-middle.png' alt=''/>
                    </button>
                </span>
                </div>
            </div>
        </div>

    )
}