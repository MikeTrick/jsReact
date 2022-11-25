const getMessagesSelector = ({ messagesPage }) => messagesPage.messagesData;
const getDialogsSelector = ({ messagesPage }) => messagesPage.dialogsData;

const getFriendsDataSelector = ({ friendsBar }) => friendsBar.friendsData;

export const getDialogsState = {
    getMessagesSelector,
    getDialogsSelector,
}

export const getNavState = {
    getFriendsDataSelector,
};
