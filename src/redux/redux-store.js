import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import friendsBarReducer from "./friends-bar-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    friendsBar: friendsBarReducer
})

let store = createStore(reducers)

window.store = store;

export default store;
