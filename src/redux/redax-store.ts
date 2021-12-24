import {configureStore} from '@reduxjs/toolkit'
import profileReducer, {addPostAC, changeValuePostAC} from "./ProfileReducer";
import messagesReducer, {addMessageAC, changeValueMessageAC} from "./MessagesReducer";

export const store = configureStore({
   reducer: {
      profilePage: profileReducer,
      messagesPages: messagesReducer
   }
})
store.getState()

export type DispatchType =
   ReturnType<typeof addPostAC> |
   ReturnType<typeof addMessageAC> |
   ReturnType<typeof changeValueMessageAC> |
   ReturnType<typeof changeValuePostAC>
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch