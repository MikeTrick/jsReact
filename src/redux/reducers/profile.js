import {reducerCreator} from "../../common/redux/reducerCreator";
import {Actions} from "../actions.enum";
import {PROFILR_PAGE_INITIAL_STATE} from "../store/initial";

const addPost = (state, { payload }) => ({
    ...state,
    posts: [...state.posts, {
        id: state.posts.length + 1,
        message: payload.message,
        likesCount: 0,
    }]
})

const reducersMap = {
    [Actions.APP_POST]: addPost,
}

export const profileReducer = reducerCreator(reducersMap, PROFILR_PAGE_INITIAL_STATE);
