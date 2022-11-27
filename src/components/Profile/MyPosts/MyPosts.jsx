import React, {useMemo} from "react";
import {useSelector} from "react-redux";
import {getPostsState} from "../../../redux/store/selectors";

import Classes from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostAdder} from "./PostAdder";

export const MyPosts = () => {

    const posts = useSelector(getPostsState.getPostsSelector);

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

//     let addPost = () => {
//         props.dispatch(addPostActionCreator());
//     }
//
//     let onPostChange = (text) => {
//         props.dispatch(updateNewPostTextActionCreator(text))
//     }
//
//     return <MyPosts updateNewPostText={onPostChange} addPost={addPost}
//                     posts={props.state.profilePage.posts}
//                     newPostText={props.state.profilePage.newPostText}/>
// }
//
// let mapStateToProps = (state) => {
//     return {
//         posts: state.profilePage.posts,
//         newPostText: state.profilePage.newPostText
//     }
// }
// let mapDispatchToProps = (dispatch) => {
//     return {
//         updateNewPostText: (text) => {
//             dispatch(updateNewPostTextActionCreator(text))
//         },
//         addPost: () => {
//             dispatch(addPostActionCreator())
//         }
//     }
// }

// export const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

// import React from "react";
// import Classes from './MyPosts.module.css'
// import {Post} from "./Post/Post";
//
// export const MyPosts = (props) => {
//
//     let postElements = props.posts
//         .map(p => <Post message={p.message} likesAmount={p.likesAmount}/>)
//
//     let newPostElement = React.createRef()
//
//
//     let addPost = () => {
//         props.addPost();
//     }
//
//
//     let onPostChange = () => {
//         let text = newPostElement.current.value;
//         props.updateNewPostText(text)
//     }
//
//     return (
//         <div>
//             <div className={Classes.postArea}>
//                 <div>
//                     My posts
//                 </div>
//                 <div className={Classes.postAdder}>
//                     <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}/>
//                     <button onClick={addPost}>Add post
//                     </button>
//                 </div>
//             </div>
//             <div className={Classes.posts}>
//                 {postElements}
//             </div>
//         </div>
//     )
// }