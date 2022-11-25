import {combineReducers} from 'redux';

import {dialogsReducer} from './dialogs';
import {friendsBarReducer} from "./friendsBar";
import {profileReducer} from "./profile";
export const reducers = combineReducers({
    messagesPage: dialogsReducer,
    friendsBar: friendsBarReducer,
    profilePage: profileReducer,
})
