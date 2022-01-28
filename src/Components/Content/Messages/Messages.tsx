import React from "react";
import s from './messages.module.scss'
import UserMessages, {UsersMessagesType} from "./UserMessages/UserMessages";
import User, {UsersType} from "./User/User";
import {FieldForm} from "../../Commons/FieldForm/FieldForm";
import {Form} from "react-final-form";

export type MessagesType = {
   usersMessages: UsersMessagesType[]
   users: UsersType[]
   addMessageCallback(message: string): void
}
type MessageSubmitType = {
   message: string
}
const Messages: React.FC<MessagesType> = (
   {
      usersMessages,
      users,
      addMessageCallback,
   }
) => {
   const onSubmitHandler = ({message}: MessageSubmitType) => addMessageCallback(message)

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
               <Form
                  onSubmit={onSubmitHandler}
                  render={
                     ({handleSubmit,}) => (
                        <form onSubmit={handleSubmit}>
                           <div>
                              <FieldForm type={"text"} placeholder={"Add new message"} name={"message"} className={"messages__addPost_btn"}/>
                           </div>
                           <button type="submit" className={s.messages__addPost_btn}>Add</button>
                        </form>
                     )
                  }
               />
            </div>
         </div>
      </div>
   )
}

export default Messages;