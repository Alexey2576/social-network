import {configureStore} from '@reduxjs/toolkit'
import {messagesReducer} from "./messages-redux/MessagesReducer";
import {profileReducer} from "./profile-redux/profileReducer";
import {addPost, changeValuePost, setProfileUserInfo} from "./profile-redux/profileActions";
import {peoplesReducer} from "./peoples-redux/peoplesReducer";
import {
   follow,
   setCurrentPage,
   setIsFetching,
   setPeoples,
   setTotalCount,
   unfollow
} from "./peoples-redux/peoplesActions";
import {addMessage, changeValueMessage} from "./messages-redux/messagesActions";
import {authReducer} from "./auth-redux/authReducer";
import {setAuthData} from "./auth-redux/authActions";

export const store = configureStore({
   reducer: {
      profilePage: profileReducer,
      messagesPage: messagesReducer,
      peoplesPage: peoplesReducer,
      authState: authReducer,
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
   ReturnType<typeof setProfileUserInfo> |
   ReturnType<typeof setAuthData>

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch