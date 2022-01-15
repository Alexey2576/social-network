import {AppDispatch, RootState} from "../../../redux/redax-store";
import Messages from "./Messages";
import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {MessagesPageType} from "../../../redux/messages-redux/MessagesReducer";
import {selectAllPropsMessages} from "../../../redux/messages-redux/messagesSelectors";
import {addMessage, changeValueMessage} from "../../../redux/messages-redux/messagesActions";

export const ContainerMessages: React.FC = () => {
   const {
      usersMessages,
      changeTextAreaMessage,
      users
   } = useSelector<RootState, MessagesPageType>(selectAllPropsMessages)
   const dispatch = useDispatch<AppDispatch>()

   const addMessageCallback = () => dispatch(addMessage())
   const changeValueMessageCallback = (newChangeText: string) =>dispatch(changeValueMessage(newChangeText))
   return <Messages users={users}
                    usersMessages={usersMessages}
                    changeTextAreaMessage={changeTextAreaMessage}
                    addMessageCallback={addMessageCallback}
                    changeValueMessageCallback={changeValueMessageCallback}
   />
}
