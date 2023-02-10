import React, {useEffect} from "react";
import Classes from './Profile.module.css';
// import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPosts} from "./MyPosts/MyPosts";
import axios from "axios";
import {useActions} from "../../common/hooks/useActions";
import {profileActions, usersActions} from "../../redux/actions";

export const Profile = () => {
    return (
        <div className={Classes.content}>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    )
}
