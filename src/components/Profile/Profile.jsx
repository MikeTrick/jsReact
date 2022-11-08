import React from "react";
import Classes from './Profile.module.css';
// import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

export const Profile = (props) => {

    return (
        <div className={Classes.content}>
            <ProfileInfo/>
            <MyPostsContainer
                dispatch={props.dispatch}
                state={props.state}/>
        </div>
    )
}