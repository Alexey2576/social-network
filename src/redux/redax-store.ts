import {configureStore} from '@reduxjs/toolkit'
import {messagesReducer} from "./messages-redux/MessagesReducer";
import {profileReducer} from "./profile-redux/profileReducer";
import {addPost, changeValuePost, setProfileUserInfo} from "./profile-redux/profileActions";
import {peoplesReducer} from "./peoples-redux/peoplesReducer";
import {
   followSuccess,
   setCurrentPage,
   setIsFetching,
   setIsFollowing,
   setPeoples,
   setTotalCount,
   unfollowSuccess,
} from "./peoples-redux/peoplesActions";
import {addMessage, changeValueMessage} from "./messages-redux/messagesActions";
import {authReducer} from "./auth-redux/authReducer";
import {setAuthData} from "./auth-redux/authActions";
import thunk from "redux-thunk";

export const store = configureStore({
   reducer: {
      profilePage: profileReducer,
      messagesPage: messagesReducer,
      peoplesPage: peoplesReducer,
      authState: authReducer,
   },
   middleware: [thunk]
})

export type ActionCreatorsType =
   ReturnType<typeof addPost> |
   ReturnType<typeof addMessage> |
   ReturnType<typeof changeValueMessage> |
   ReturnType<typeof changeValuePost> |
   ReturnType<typeof followSuccess> |
   ReturnType<typeof unfollowSuccess> |
   ReturnType<typeof setPeoples> |
   ReturnType<typeof setTotalCount> |
   ReturnType<typeof setCurrentPage> |
   ReturnType<typeof setIsFetching> |
   ReturnType<typeof setProfileUserInfo> |
   ReturnType<typeof setAuthData> |
   ReturnType<typeof setIsFollowing>

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch