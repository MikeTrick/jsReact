import React, {useMemo} from "react";
import {useSelector} from "react-redux";
import {getProfileState} from "../../../redux/store/selectors";

import Classes from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostAdder} from "./PostAdder";

export const MyPosts = () => {

    const posts = useSelector(getProfileState.getPostsSelector);

    const renderPosts = useMemo(() => posts.map(({id, message, likesAmount}) => (
        <Post
            key={id}
            id={id}
            message={message}
            likesAmount={likesAmount}

        />
    )), [posts]);
    return (
        <div>
            <div className={Classes.postArea}>
                <div>
                    My posts
                </div>
                <div className={Classes.postAdder}>
                    <PostAdder/>
                </div>
            </div>
            <div className={Classes.posts}>
                {renderPosts}
            </div>
        </div>
    )

}