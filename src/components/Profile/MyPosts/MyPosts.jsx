import React from "react";
import Classes from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = (props) => {

    let postElements = props.posts
        .map(p => <Post message={p.message} likesAmount={p.likesAmount}/>)

    let newPostElement = React.createRef()


    let addPost = () => {
        props.addPost();
    }


    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)
    }

    return (
        <div>
            <div className={Classes.postArea}>
                <div>
                    My posts
                </div>
                <div className={Classes.postAdder}>
                    <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}/>
                    <button onClick={addPost}>Add post
                    </button>
                </div>
            </div>
            <div className={Classes.posts}>
                {postElements}
            </div>
        </div>
    )
}