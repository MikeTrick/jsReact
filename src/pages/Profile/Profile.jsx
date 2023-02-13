import React, {useEffect} from "react";
import Classes from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return (
        <div className={Classes.content}>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    )
}
