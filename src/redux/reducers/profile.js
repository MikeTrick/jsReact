import {reducerCreator} from "../../common/redux/reducerCreator";
import {Actions} from "../actions.enum";
import {PROFILE_PAGE_INITIAL_STATE} from "../store/initial/profile";


const addPost = (state, { payload }) => ({
    ...state,
    posts: [...state.posts, {
        id: state.posts.length + 1,
        message: payload,
        likesCount: 0,
    }]
})

const reducersMap = {
    [Actions.ADD_POST]: addPost,
}

export const profileReducer = reducerCreator(reducersMap, PROFILE_PAGE_INITIAL_STATE);
