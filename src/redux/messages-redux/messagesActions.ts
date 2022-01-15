export enum MESSAGES_ACTIONS_TYPES {
   ADD_MESSAGE = 'messagesReducer/ADD_MESSAGE',
   CHANGE_VALUE_MESSAGE = 'messagesReducer/CHANGE_VALUE_MESSAGE',
}

export const addMessage = () => ({ type: MESSAGES_ACTIONS_TYPES.ADD_MESSAGE } as const)
export const changeValueMessage = (newChangeText: string) => ({type: MESSAGES_ACTIONS_TYPES.CHANGE_VALUE_MESSAGE, newChangeText} as const)