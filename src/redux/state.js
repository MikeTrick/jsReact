let ADD_POST = 'ADD-POST';
let UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
let ADD_MESSAGE = 'ADD-MESSAGE'
let UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

let store = {

    _state: {

        profilePage: {
            posts: [
                {id: 1, message: 'Hi! How u doin\'?', likesAmount: 15},
                {id: 1, message: 'It\'s my first post!', likesAmount: 25},
                {id: 1, message: 'It\'s my second post!', likesAmount: 35},
                {id: 1, message: 'It\'s my third post! I am on fire!', likesAmount: 25},
            ],
            newPostText: 'it-kamasutra',
        },
        messagesPage: {
            messagesData: [
                {id: 1, message: 'Yo'},
                {id: 2, message: 'Man'},
                {id: 3, message: 'How are you?'},
                {id: 4, message: 'Yo'},
            ],

            dialogsData: [
                {id: 1, name: 'Mike'},
                {id: 2, name: 'Andrew'},
                {id: 3, name: 'John'},
                {id: 4, name: 'Meatball'},
                {id: 5, name: 'Chan'}
            ],
            newMessageText: 'write something'
        },

        friendsBar: {
            friendsData: [
                {
                    id: 1,
                    name: 'Ksyusha',
                    familyName: 'Ashtantum',
                    photo: 'https://sun3-10.userapi.com/impg/Bj2eGJCalzlKqEod6cPdU7HDma4umi7ohCrvIg/AoyYCRWPW-U.jpg?size=825x1080&quality=95&sign=7e5c3c3b52333b0db3309a1bd13ee0e2&type=album'
                },
                {
                    id: 2,
                    name: 'Tatiana',
                    familyName: 'Kazakevich',
                    photo: 'https://sun9-86.userapi.com/impf/c848620/v848620116/4b6/B9RDTgs5nqA.jpg?size=1280x853&quality=96&sign=6fdcab7b8374f358ee59abab5ef64256&type=album'
                },
                {
                    id: 3,
                    name: 'Woldemar',
                    familyName: 'Geidt',
                    photo: 'https://sun9-23.userapi.com/impg/WdqPbiBj27fe1jkwxOPNNIaeV9SqcT6knCRaYQ/c-bsdRgBB_E.jpg?size=864x1080&quality=95&sign=fff24ecb4828dfd12ae7bf3fd581502c&type=album'
                },
                {
                    id: 4,
                    name: 'Andrew',
                    familyName: 'Lapuzin',
                    photo: 'https://sun9-52.userapi.com/impg/c857636/v857636993/216ea8/nD9pHb4qoH8.jpg?size=1280x853&quality=96&sign=5ea556478a65bb57fbd39c2c6ac60b2a&type=album'
                },
                {
                    id: 5,
                    name: 'Anna',
                    familyName: 'Semenova',
                    photo: 'https://sun9-16.userapi.com/impg/TKQdX_6Nmd_UU7lPhKdT1LEf5v8bcDEeZPMBBA/MN64PfmBZgc.jpg?size=720x1080&quality=96&sign=905bed0cefaf3d445be2ffdd0c7f4e69&c_uniq_tag=E8slreuu3GWKNB-375x9Owv2gGrnFd51-DoXDLBRczM&type=album'
                }
            ]
        }

    },
    _callSubscriber() {
        console.log('State changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch: function (action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: this._state.profilePage.posts.length + 1,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = ('');
            this._callSubscriber(this._state);
        } else if (action.type === 'ADD-MESSAGE') {
            let newMessage = {
                id: this._state.messagesPage.messagesData.length + 1,
                message: this._state.messagesPage.newMessageText
            }
            this._state.messagesPage.messagesData.push(newMessage)
            this._state.messagesPage.newMessageText = ('');
            this._callSubscriber(this._state)
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newPostText;
            this._callSubscriber();
        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.messagesPage.newMessageText = action.newMessageText;
            this._callSubscriber();
        }
    }


}

export const addPostActionCreator = () => {
    return {ADD_POST}
}
export const updateNewPostTextActionCreator = (text) => {
    return {UPDATE_NEW_POST_TEXT, newPostText: text}
}
export const addMessageActionCreator = () => {
    return {ADD_MESSAGE}
}
export const updateNewMessageTextActionCreator = (message) => {
    return {UPDATE_NEW_MESSAGE_TEXT, newMessageText: message}
}


window.store = store;
export default store;