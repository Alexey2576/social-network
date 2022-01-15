import {configureStore} from '@reduxjs/toolkit'
import {addMessage, changeValueMessage, messagesReducer} from "./MessagesReducer";
import {
   follow,
   peoplesReducer,
   setCurrentPage,
   setIsFetching,
   setPeoples,
   setTotalCount,
   unfollow
} from "./PeoplesReducer";
import {profileReducer} from "./ProfileBLL/ProfileReducer";
import {addPost, changeValuePost, setProfileUserInfo} from "./ProfileBLL/ProfileActions";

export const store = configureStore({
   reducer: {
      profilePage: profileReducer,
      messagesPage: messagesReducer,
      peoplesPage: peoplesReducer
   }
})

export type ActionCreatorsType =
   ReturnType<typeof addPost> |
   ReturnType<typeof addMessage> |
   ReturnType<typeof changeValueMessage> |
   ReturnType<typeof changeValuePost> |
   ReturnType<typeof follow> |
   ReturnType<typeof unfollow> |
   ReturnType<typeof setPeoples> |
   ReturnType<typeof setTotalCount> |
   ReturnType<typeof setCurrentPage> |
   ReturnType<typeof setIsFetching> |
   ReturnType<typeof setProfileUserInfo>

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch