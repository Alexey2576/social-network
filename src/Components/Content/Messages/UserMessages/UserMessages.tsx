import React from "react";
import s from './userMessages.module.scss'

export type UsersMessagesType = {
   id: number
   message: string
}

const User: React.FC<UsersMessagesType> = (props) => {
   return (
      <div className={s.userMessages}>
         <p className={s.userMessages__message}>{props.message}</p>
      </div>
   )
}

export default User;