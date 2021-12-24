import React, {ChangeEvent} from "react";
import s from './messages.module.scss'
import UserMessages, {UsersMessagesType} from "./UserMessages/UserMessages";
import User, {UsersType} from "./User/User";
import {MessagesPageType} from "../../../redux/MessagesReducer";

type MessagesType = {
   users: UsersType[]
   usersMessages: UsersMessagesType[]
   changeTextAreaMessage: string
   addMessageCallback: () => void
   changeValueCallback: (value: string) => void
}

const Messages: React.FC<MessagesType> = (
   {
      changeTextAreaMessage,
      usersMessages,
      users,
      addMessageCallback,
      changeValueCallback
   }
) => {
   const addMessage = () => addMessageCallback()
   const changeValue = (e: ChangeEvent<HTMLInputElement>) => changeValueCallback(e.currentTarget.value)

   return (
      <div className={s.messages}>

         {/* ======================= Users ========================= */}
         <div className={s.users}>
            { users.map(u => <User id={u.id} name={u.name} ava={u.ava} key={u.id}/>) }
         </div>

         <div>
            {/* ======================= Users Messages ========================= */}
            <div className={s.usersMessages}>
               { usersMessages.map(um => <UserMessages id={um.id} message={um.message} key={um.id}/>) }
            </div>

            {/* ========================= Input and button ========================= */}
            <div className={s.messages__addPost}>
               <input className={s.messages__addPost_input}
                      type="text"
                      value={changeTextAreaMessage}
                      onChange={ changeValue } />
               <button className={s.messages__addPost_btn} onClick={ addMessage }>Add</button>
            </div>
         </div>
      </div>
   )
}

export default Messages;