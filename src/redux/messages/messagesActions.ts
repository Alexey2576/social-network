import {MessageType} from "./MessagesReducer";

export enum MESSAGES_ACTIONS_TYPES {
   ADD_MESSAGE = 'messagesReducer/ADD_MESSAGE',
   SEND_MESSAGE = 'messagesReducer/SEND_MESSAGE',
}

export type MessagesActionCreatorsType =
   | ReturnType<typeof addUserMessageAC>
   | ReturnType<typeof sendUserMessageAC>

export const addUserMessageAC = (id: string, name: string, photo: string) =>
   ({ type: MESSAGES_ACTIONS_TYPES.ADD_MESSAGE, payload: {id, name, photo} } as const)
export const sendUserMessageAC = (message: MessageType & { userId: string }, id: string) =>
   ({ type: MESSAGES_ACTIONS_TYPES.SEND_MESSAGE, payload: {message, id} } as const)