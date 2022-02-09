import React from 'react';
import s from "../messages.module.scss";
import {Form} from "react-final-form";
import {FieldForm} from "../../../Commons/FieldForm/FieldForm";

export const MessagesForm: React.FC<MessagesFormType> = React.memo(({addMessageCallback}) => {
   const onSubmitHandler = ({message}: MessageSubmitType) => addMessageCallback(message)
   return (
      <div className={s.messages__addPost}>
         <Form
            onSubmit={onSubmitHandler}
            render={
               ({handleSubmit,}) => (
                  <form onSubmit={handleSubmit}>
                     <div>
                        <FieldForm type={"text"} placeholder={"Add new message"} name={"message"}
                                   className={"messages__addPost_btn"}/>
                     </div>
                     <button type="submit" className={s.messages__addPost_btn}>Add</button>
                  </form>
               )
            }
         />
      </div>
   );
});

type MessagesFormType = {
   addMessageCallback(message: string): void
}
type MessageSubmitType = {
   message: string
}