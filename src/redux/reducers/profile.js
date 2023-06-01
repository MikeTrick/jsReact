import {reducerCreator} from "../../common/redux/reducerCreator";
import {Actions} from "../actions.enum";
import {PROFILE_PAGE_INITIAL_STATE} from "../store/initial/profile";


const addPost = (state, {payload}) => ({
    ...state,
    posts: [...state.posts, {
        id: state.posts.length + 1,
        message: payload,
        likesAmount: 0,
    }]
})

const addLike = (state,) => {
    return ({
        ...state,
        // likesAmount: payload + 4,
        // likesAmount: state.posts.map((post) =>( {...post, likesAmount: state.post.likesAmount +1}))

    })
}

const setUserProfile = (state) => {
    return ({
        ...state,
        data: [...state.data],
    })


}


const reducersMap = {
    [Actions.ADD_POST]: addPost,
    [Actions.ADD_LIKE]: addLike,
    [Actions.SET_USER_PROFILE]:setUserProfile,
}

export const profileReducer = reducerCreator(reducersMap, PROFILE_PAGE_INITIAL_STATE);
