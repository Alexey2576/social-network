import React from 'react';
import s from "../messages.module.scss";
import {User, UsersType} from "./User/User";

export const Users: React.FC<UsersTypeBlock> = React.memo(({users}) => {
   return (
      <div className={s.users}>
         {users.map(u => <User id={u.id} name={u.name} ava={u.ava} key={u.id}/>)}
      </div>
   );
});

type UsersTypeBlock = {
   users: UsersType[]
}