import React from "react";
import s from './user.module.scss'

export const User: React.FC<UsersType> = React.memo(({name, ava}) => {
   return (
      <div className={s.user}>
         <img className={s.user__ava} src={ava} alt=""/>
         <h4 className={s.user__name}>{name}</h4>
      </div>
   )
})

export type UsersType = {
   id: string
   name: string
   ava: string
}