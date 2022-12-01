import {USERS_PAGE_INITIAL_STATE} from "../store/initial/users";
import {reducerCreator} from "../../common/redux/reducerCreator";
import {Actions} from "../actions.enum";

const follow = (state, action, {payload}) => (
    {
        ...state,
        users: state.users.map(u => {
            if (u.id === action.userId) {
                return {...u, followed: true}
            }
            return u
        })
    })

const unfollow = (state, action, {payload}) => (
    {
        ...state,
        users: state.users.map(u => {
            if (u.id === !action.userId) {
                return {...u, followed: false}
            }
            return u
        })
    })

const setUsers = (state, action) => {
    return {
        ...state,
        users: [...state.users, ...action.users]
    }

}


const reducersMap = {
    [Actions.FOLLOW]: follow,
    [Actions.UNFOLLOW]: unfollow,
    [Actions.SET_USERS]: setUsers,
};

export const usersReducer = reducerCreator(reducersMap, USERS_PAGE_INITIAL_STATE);
