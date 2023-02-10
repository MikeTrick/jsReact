const getMessagesSelector = ({messagesPage}) => messagesPage.messagesData;
const getDialogsSelector = ({messagesPage}) => messagesPage.dialogsData;

const getUsersSelector = ({users}) => users.usersData;
const isFetching = ({users}) => users.isFetching;
const setIsFetching = ({users}) => users.isFetching;

const getPostsSelector = ({profilePage}) => profilePage.posts;
const setUserProfile = ({profilePage}) => profilePage.data

const getFriendsDataSelector = ({friendsBar}) => friendsBar.friendsData;

const getPagesCountSelector = ({users}) => users.pageSize;
const getTotalUsersCountSelector = ({users}) => users.totalCount;
const setCurrentPage = ({users}) => users.currentPage;
const setTotalUsersCountSelector = ({users}) => users.totalCount



export const getUsersState = {
    getUsersSelector,
    isFetching,
    setIsFetching,
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

export const getProfileState = {
    getPostsSelector,
    setUserProfile,
}

export const getNavState = {
    getFriendsDataSelector,
};
