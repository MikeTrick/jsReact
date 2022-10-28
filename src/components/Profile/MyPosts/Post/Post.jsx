import React from "react";
import Classes from './Post.module.css'

export const Post = (props) => {
    return (
        <div className={Classes.container}>
            <div className={Classes.item}>
                <img src='https://animeslayers.ru/wp-content/uploads/kartinki/vk/naavatarkuvk1.jpg' alt=''/>
                {props.message}
                <div>
                <span className={Classes.likes}>
                    {props.likesAmount} likes
                      <img src='https://image.pngaaa.com/106/10106-middle.png'/>
                </span>
                </div>
            </div>
        </div>

    )
}