import {reducerCreator} from "../../common/redux/reducerCreator";
import {USERS_PAGE_INITIAL_STATE} from "../store/initial/users";

export const usersReducer = reducerCreator({}, USERS_PAGE_INITIAL_STATE);
