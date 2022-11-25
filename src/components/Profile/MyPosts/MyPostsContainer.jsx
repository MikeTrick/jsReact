import React from "react";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";


export const MyPostsContainer = (props) => {
    // TODO: @Tricky_Mike - отрефачить по аналогии с диалогами
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
