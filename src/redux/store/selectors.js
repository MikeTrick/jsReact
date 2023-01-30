const getMessagesSelector = ({messagesPage}) => messagesPage.messagesData;
const getDialogsSelector = ({messagesPage}) => messagesPage.dialogsData;

const getUsersSelector = ({users}) => users.usersData;

const getPostsSelector = ({profilePage}) => profilePage.posts;

const getFriendsDataSelector = ({friendsBar}) => friendsBar.friendsData;

const getPagesCountSelector = ({users}) => users.pageSize;
const getTotalUsersCountSelector = ({users}) => users.totalCount;
const setCurrentPage = ({users}) => users.currentPage;
const setTotalUsersCountSelector = ({users}) => users.totalCount



export const getUsersState = {
    getUsersSelector,
}

export const getUsersPages = {
    getPagesCountSelector,
    getTotalUsersCountSelector,
    setCurrentPage,
    setTotalUsersCountSelector
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
