import {configureStore} from '@reduxjs/toolkit'
import {addPostAC, changeValuePostAC, profileReducer} from "./ProfileReducer";
import {addMessageAC, changeValueMessageAC, messagesReducer} from "./MessagesReducer";
import {followAC, peoplesReducer, setPeoplesAC, unfollowAC} from "./PeoplesReducer";

export const store = configureStore({
   reducer: {
      profilePage: profileReducer,
      messagesPage: messagesReducer,
      peoplesPage: peoplesReducer
   }
})
store.getState()

export type DispatchType =
   ReturnType<typeof addPostAC> |
   ReturnType<typeof addMessageAC> |
   ReturnType<typeof changeValueMessageAC> |
   ReturnType<typeof changeValuePostAC> |
   ReturnType<typeof followAC> |
   ReturnType<typeof unfollowAC> |
   ReturnType<typeof setPeoplesAC>
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch