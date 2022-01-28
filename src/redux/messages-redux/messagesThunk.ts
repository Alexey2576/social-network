import {addMessageAC, changeValueMessageAC} from "./messagesActions";
import {AppDispatch} from "../redax-store";

export const addMessage = (message: string) => (dispatch: AppDispatch) => dispatch(addMessageAC(message))
export const changeValueMessage = (newChangeText: string) => (dispatch: AppDispatch) => dispatch(changeValueMessageAC(newChangeText))
