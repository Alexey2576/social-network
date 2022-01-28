import {configureStore} from '@reduxjs/toolkit'
import {messagesReducer} from "./messages-redux/MessagesReducer";
import {profileReducer} from "./profile-redux/profileReducer";
import {ProfileActionCreatorsType} from "./profile-redux/profileActions";
import {peoplesReducer} from "./peoples-redux/peoplesReducer";
import {PeoplesActionCreatorsType,} from "./peoples-redux/peoplesActions";
import {MessagesActionCreatorsType} from "./messages-redux/messagesActions";
import {authReducer} from "./auth-redux/authReducer";
import {AuthActionCreatorsType} from "./auth-redux/authActions";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";

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
   AuthActionCreatorsType
   | MessagesActionCreatorsType
   | PeoplesActionCreatorsType
   | ProfileActionCreatorsType

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type ThunkType = ThunkAction<Promise<void>, RootState, unknown, ActionCreatorsType>
export type ThunkDispatchType = ThunkDispatch<RootState, unknown, ActionCreatorsType>;

// @ts-ignore
window.store = store

