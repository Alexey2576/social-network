import {addMessageAC, changeValueMessageAC} from "./messagesActions";
import {AppDispatch} from "../redax-store";

export const addMessage = () => (dispatch: AppDispatch) => dispatch(addMessageAC())
export const changeValueMessage = (newChangeText: string) => (dispatch: AppDispatch) => dispatch(changeValueMessageAC(newChangeText))
