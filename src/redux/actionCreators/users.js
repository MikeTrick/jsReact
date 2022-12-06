import {Actions} from '../actions.enum.js';

const follow = (userId) => ({
    type: Actions.FOLLOW,
    payload: userId,
    // payload
})
const unfollow = (userId) => ({
    type: Actions.UNFOLLOW,
    userId,
    // payload,
})

const setUsers = (users) => ({
    type: Actions.SET_USERS,
    users
})


export const usersActionCreators = {
    follow,
    unfollow,
    setUsers,
}
