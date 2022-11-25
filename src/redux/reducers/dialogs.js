import {reducerCreator} from "../../common/redux/reducerCreator";
import {Actions} from "../actions.enum";
import {DIALOGS_INITIAL_STATE} from "../store/initial";

const addMessage = (state, { payload }) => ({
    ...state,
    messagesData: [...state.messagesData, {
        id: state.messagesData.length + 1,
        message: payload,
    }]
})

const reducersMap = {
    [Actions.ADD_MESSAGE]: addMessage
}

export const dialogsReducer = reducerCreator(reducersMap, DIALOGS_INITIAL_STATE);
