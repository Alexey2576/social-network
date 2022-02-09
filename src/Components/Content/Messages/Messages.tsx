import React from "react";
import s from './messages.module.scss'
import {UsersMessagesType} from "./UsersMessages/UserMessages/UserMessages";
import {UsersType} from "./Users/User/User";
import {Users} from "./Users/Users";
import {UsersMessages} from "./UsersMessages/UsersMessages";
import {MessagesForm} from "./MessagesForm/MessagesForm";

export const Messages: React.FC<MessagesType> = React.memo((props) => {
   const { usersMessages, users, addMessageCallback, } = props
   return (
      <div className={s.messages}>
         <Users users={users}/>
         <div>
            <UsersMessages usersMessages={usersMessages}/>
            <MessagesForm addMessageCallback={addMessageCallback}/>
         </div>
      </div>
   )
})

export type MessagesType = {
   usersMessages: UsersMessagesType[]
   users: UsersType[]
   addMessageCallback(message: string): void
}
