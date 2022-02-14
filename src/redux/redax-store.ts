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

const rootReducer = combineReducers({
   profilePage: profileReducer,
   messagesPage: messagesReducer,
   peoplesPage: peoplesReducer,
   authState: authReducer,
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

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type ThunkType = ThunkAction<Promise<void>, RootState, unknown, ActionCreatorsType>
export type ThunkDispatchType = ThunkDispatch<RootState, unknown, ActionCreatorsType>;

