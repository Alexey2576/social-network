import {addMessageAC, changeValueMessageAC} from "./messagesActions";
import {ThunkDispatchType, ThunkType} from "../redax-store";

export const addMessage = (message: string): ThunkType => async (dispatch: ThunkDispatchType) => {
   dispatch(addMessageAC(message))
}

export const changeValueMessage = (newChangeText: string): ThunkType => async (dispatch: ThunkDispatchType) => {
   dispatch(changeValueMessageAC(newChangeText))
}
