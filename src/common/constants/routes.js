import {Profile} from "../../pages/Profile/Profile";
import {Dialogs} from "../../pages/Dialogs/Dialogs";
import {Music} from "../../pages/Music/Music";
import {News} from "../../pages/News/News";
import {Users} from "../../pages/Users/Users";
import {Settings} from "../../pages/Settings/Settings";
import {Photos} from "../../pages/Photos/Photos";
import {Videos} from "../../pages/Videos/Videos";

export const ROUTES = {
    PROFILE: 'profile/*',
    FRIEND_PROFILE: 'profile/:id',
    DIALOGS: 'dialogs/*',
    MUSIC: 'music/*',
    NEWS: 'news/*',
    USERS: 'users/*',
    SETTINGS: 'settings/*',
    PHOTOS: 'photos/*',
    VIDEOS: 'videos/*',
}

export const ROUTES_MAP = {
    [ROUTES.PROFILE]: Profile,
    [ROUTES.FRIEND_PROFILE]: Profile,
    [ROUTES.DIALOGS]: Dialogs,
    [ROUTES.MUSIC]: Music,
    [ROUTES.NEWS]: News,
    [ROUTES.USERS]: Users,
    [ROUTES.SETTINGS]: Settings,
    [ROUTES.PHOTOS]: Photos,
    [ROUTES.VIDEOS]: Videos,
    ['/*']: Profile,
}
