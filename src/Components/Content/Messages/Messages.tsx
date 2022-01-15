import React, {ChangeEvent} from "react";
import s from './messages.module.scss'
import UserMessages, {UsersMessagesType} from "./UserMessages/UserMessages";
import User, {UsersType} from "./User/User";

export type MessagesType = {
   changeTextAreaMessage: string
   usersMessages: UsersMessagesType[]
   users: UsersType[]
   addMessageCallback(): void
   changeValueMessageCallback(newChangeText: string): void
}

const Messages: React.FC<MessagesType> = (
   {
      changeTextAreaMessage,
      usersMessages,
      users,
      addMessageCallback,
      changeValueMessageCallback,
   }
) => {
   const onClickAddMessageHandler = () => addMessageCallback()
   const onChangeValueHandler = (e: ChangeEvent<HTMLInputElement>) => changeValueMessageCallback(e.currentTarget.value)

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
                      onChange={ onChangeValueHandler } />
               <button className={s.messages__addPost_btn} onClick={ onClickAddMessageHandler }>Add</button>
            </div>
         </div>
      </div>
   )
}

export default Messages;