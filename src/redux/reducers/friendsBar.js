import {reducerCreator} from "../../common/redux/reducerCreator";
import {FRIENDS_BAR_INITIAL_STATE} from "../store/initial";

const reducersMap = {};

export const friendsBarReducer = reducerCreator(reducersMap, FRIENDS_BAR_INITIAL_STATE);
