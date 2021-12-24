import React, {ChangeEvent} from "react";
import s from './messages.module.scss'
import UserMessages from "./UserMessages/UserMessages";
import User from "./User/User";
import {MessagesPageType} from "../../../redux/MessagesReducer";

type MessagesType = {
   messagesPage: MessagesPageType
   addPMessageCallback: () => void
   changeValueCallback: (value: string) => void
}

const Messages: React.FC<MessagesType> = (
   {
      messagesPage,
      addPMessageCallback,
      changeValueCallback
   }
) => {
   const addPMessage = () => addPMessageCallback()
   const changeValue = (e: ChangeEvent<HTMLInputElement>) => changeValueCallback(e.currentTarget.value)

   return (
      <div className={s.messages}>

         {/* ======================= Users ========================= */}
         <div className={s.users}>
            { messagesPage.users.map(u => <User id={u.id} name={u.name} ava={u.ava} key={u.id}/>) }
         </div>

         <div>
            {/* ======================= Users Messages ========================= */}
            <div className={s.usersMessages}>
               { messagesPage.usersMessages.map(um => <UserMessages id={um.id} message={um.message} key={um.id}/>) }
            </div>

            {/* ========================= Input and button ========================= */}
            <div className={s.messages__addPost}>
               <input className={s.messages__addPost_input}
                      type="text"
                      value={messagesPage.changeTextAreaMessage}
                      onChange={ changeValue } />
               <button className={s.messages__addPost_btn} onClick={ addPMessage }>Add</button>
            </div>
         </div>
      </div>
   )
}

export default Messages;