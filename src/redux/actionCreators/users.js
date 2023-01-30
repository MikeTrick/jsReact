import {Actions} from '../actions.enum.js';

const follow = (userId) => ({
    type: Actions.FOLLOW,
    payload: userId,
})
const unfollow = (userId) => ({
    type: Actions.UNFOLLOW,
    payload: userId,
})

const setUsers = (payload) => ({
    type: Actions.SET_USERS,
    payload,
})

const setCurrentPage = (payload) => ({
    type: Actions.SET_CURRENT_PAGE,
    payload,
})

const setTotalUsersCount = (payload) => ({
    type: Actions.SET_TOTAL_USERS_COUNT,
    payload,
})

export const usersActionCreators = {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
}
