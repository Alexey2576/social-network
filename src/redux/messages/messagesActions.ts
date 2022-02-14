export enum MESSAGES_ACTIONS_TYPES {
   ADD_MESSAGE = 'messagesReducer/ADD_MESSAGE',
   CHANGE_VALUE_MESSAGE = 'messagesReducer/CHANGE_VALUE_MESSAGE',
}

export type MessagesActionCreatorsType = ReturnType<typeof addMessageAC> | ReturnType<typeof changeValueMessageAC>

export const addMessageAC = (message: string) => ({ type: MESSAGES_ACTIONS_TYPES.ADD_MESSAGE, message } as const)
export const changeValueMessageAC = (newChangeText: string) => ({type: MESSAGES_ACTIONS_TYPES.CHANGE_VALUE_MESSAGE, newChangeText} as const)