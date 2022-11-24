import {Profile} from "../../components/Profile/Profile";
import {Dialogs} from "../../components/Dialogs/Dialogs";
import {Music} from "../../components/Music/Music";
import {News} from "../../components/News/News";
import {Users} from "../../components/Users/Users";
import {Settings} from "../../components/Settings/Settings";
import {Photos} from "../../components/Photos/Photos";
import {Videos} from "../../components/Videos/Videos";

export const ROUTES = {
    PROFILE: 'profile/*',
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
    [ROUTES.DIALOGS]: Dialogs,
    [ROUTES.MUSIC]: Music,
    [ROUTES.NEWS]: News,
    [ROUTES.USERS]: Users,
    [ROUTES.SETTINGS]: Settings,
    [ROUTES.PHOTOS]: Photos,
    [ROUTES.VIDEOS]: Videos,
    ['/*']: Profile,
}
