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
    debugger;
    return ({
        ...state,
        // likesAmount: payload + 4,
        // likesAmount: state.posts.map((post) =>( {...post, likesAmount: state.post.likesAmount +1}))

    })
}


const reducersMap = {
    [Actions.ADD_POST]: addPost,
    [Actions.ADD_LIKE]: addLike,
}

export const profileReducer = reducerCreator(reducersMap, PROFILE_PAGE_INITIAL_STATE);
