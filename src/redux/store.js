import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import friendsBarReducer from "./friends-bar-reducer";

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
        },

        usersPage: {
            usersData: [
                {
                    name: 'Mike',
                    familyName: 'Lapuzin',
                    photo: 'https://www.befunky.com/images/prismic/5ddfea42-7377-4bef-9ac4-f3bd407d52ab_landing-photo-to-cartoon-img5.jpeg?auto=avif,webp&format=jpg&width=863',
                    interests: 'snowboard',
                    id: 1
                },
                {
                    name: 'Mike',
                    familyName: 'Lapuzin',
                    photo: 'https://www.befunky.com/images/prismic/5ddfea42-7377-4bef-9ac4-f3bd407d52ab_landing-photo-to-cartoon-img5.jpeg?auto=avif,webp&format=jpg&width=863',
                    interests: 'snowboard',
                    id: 2
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

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
        this._state.friendsBar = friendsBarReducer(this._state.friendsBar, action);
        this._state.usersPage = usersReducer(this._state.usersPage,action)

        this._callSubscriber();
    }

}


window.store = store;
export default store;