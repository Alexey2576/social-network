import {addMessageAC, changeValueMessageAC, MESSAGES_ACTIONS_TYPES} from "./messagesActions";
import {AppDispatch} from "../redax-store";

export const addMessage = () => (dispatch: AppDispatch) => dispatch(addMessageAC())
export const changeValueMessage = (newChangeText: string) => (dispatch: AppDispatch) => dispatch(changeValueMessageAC(newChangeText))
