import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";


export const MyPostsContainer = (props) => {


    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = (text) => {
        props.dispatch(updateNewPostTextActionCreator(text))
    }

    return <MyPosts updateNewPostText={onPostChange} addPost={addPost}
                    posts={props.state.profilePage.posts}
                    newPostText={props.state.profilePage.newPostText}/>
}