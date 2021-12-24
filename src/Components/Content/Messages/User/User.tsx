import React from "react";
import s from './user.module.scss'

export type UsersType = {
   id: number
   name: string
   ava: string
}

const User: React.FC<UsersType> = (props) => {
   return (
      <div className={s.user}>
         <img className={s.user__ava} src={props.ava} alt=""/>
         <h4 className={s.user__name}>{props.name}</h4>
      </div>
   )
}

export default User;