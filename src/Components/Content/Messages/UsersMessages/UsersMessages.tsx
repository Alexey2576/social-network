import React from 'react';
import s from "../messages.module.scss";
import {UserMessages, UsersMessagesType} from "./UserMessages/UserMessages";

export const UsersMessages: React.FC<UsersMessagesBlock> = React.memo(({usersMessages}) => {
   return (
      <div className={s.usersMessages}>
         {usersMessages.map(um => <UserMessages id={um.id} message={um.message} key={um.id}/>)}
      </div>
   );
});

type UsersMessagesBlock = {
   usersMessages: UsersMessagesType[]
}