import {combineReducers} from '@reduxjs/toolkit'
import {profileReducer} from "./profile/profileReducer";
import {ProfileActionCreatorsType} from "./profile/profileActions";
import {peoplesReducer} from "./peoples/peoplesReducer";
import {PeoplesActionCreatorsType,} from "./peoples/peoplesActions";
import {MessagesActionCreatorsType} from "./messages/messagesActions";
import {authReducer} from "./auth/authReducer";
import {AuthActionCreatorsType} from "./auth/authActions";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import {messagesReducer} from "./messages/MessagesReducer";
import {appReducer} from "./app/appReducer";
import {AppActionCreatorsType} from "./app/appActions";

const rootReducer = combineReducers({
   profilePage: profileReducer,
   messagesPage: messagesReducer,
   peoplesPage: peoplesReducer,
   authState: authReducer,
   appState: appReducer,
})

export const store = createStore(
   rootReducer,
   composeWithDevTools( applyMiddleware(thunk) )
)

export type ActionCreatorsType =
   | AuthActionCreatorsType
   | MessagesActionCreatorsType
   | PeoplesActionCreatorsType
   | ProfileActionCreatorsType
   | AppActionCreatorsType

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type ThunkType<T = void> = ThunkAction<Promise<T>, RootState, unknown, ActionCreatorsType>
export type ThunkDispatchType = ThunkDispatch<RootState, unknown, ActionCreatorsType>;

