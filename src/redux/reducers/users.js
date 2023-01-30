import {USERS_PAGE_INITIAL_STATE} from "../store/initial/users";
import {reducerCreator} from "../../common/redux/reducerCreator";
import {Actions} from "../actions.enum";

const follow = (state, {payload}) => (
    {
        ...state,
        usersData: state.usersData.map((user) => {
            if (user.id === payload) {

                return {...user, followed: true}
            }
            return user
        })
    })

const unfollow = (state, {payload}) => (
    {
        ...state,
        usersData: state.usersData.map((user) => {
            if (user.id === payload) {
                return {...user, followed: false}
            }
            return user
        })
    })

const setUsers = (state, {payload}) => {
    return {
        ...state,
        usersData: payload,
    }

}

const setCurrentPage = (state, {payload}) => {
    return {
        ...state,
        currentPage: payload,
    }
}

const setTotalUsersCount = (state, {payload}) => {
    return {
        ...state,
        totalCount: payload,
    }
}

const reducersMap = {
    [Actions.FOLLOW]: follow,
    [Actions.UNFOLLOW]: unfollow,
    [Actions.SET_USERS]: setUsers,
    [Actions.SET_CURRENT_PAGE]: setCurrentPage,
    [Actions.SET_TOTAL_USERS_COUNT]: setTotalUsersCount,
};

export const usersReducer = reducerCreator(reducersMap, USERS_PAGE_INITIAL_STATE);
