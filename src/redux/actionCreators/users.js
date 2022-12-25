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


export const usersActionCreators = {
    follow,
    unfollow,
    setUsers,
}
