const getMessagesSelector = ({messagesPage}) => messagesPage.messagesData;
const getDialogsSelector = ({messagesPage}) => messagesPage.dialogsData;

const getUsersSelector = ({usersPage}) => usersPage.usersData;

const getPostsSelector = ({profilePage}) => profilePage.posts;

const getFriendsDataSelector = ({friendsBar}) => friendsBar.friendsData;

export const getUsersState = {
    getUsersSelector,
}

export const getDialogsState = {
    getMessagesSelector,
    getDialogsSelector,
}

export const getPostsState = {
    getPostsSelector,
}

export const getNavState = {
    getFriendsDataSelector,
};
