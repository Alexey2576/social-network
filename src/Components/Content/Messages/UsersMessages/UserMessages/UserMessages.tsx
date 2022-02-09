import React from "react";
import s from './userMessages.module.scss'

export const UserMessages: React.FC<UsersMessagesType> = React.memo(({message}) => {
   return (
      <div className={s.userMessages}>
         <p className={s.userMessages__message}>{message}</p>
      </div>
   )
})

export type UsersMessagesType = {
   id: string
   message: string
}