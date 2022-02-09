import React from 'react';
import s from "../profile.module.scss";
import {Form} from "react-final-form";
import {FieldForm} from "../../../Commons/FieldForm/FieldForm";
import {ErrorBoundary} from "../../../Commons/ErrorBoundary/ErrorBoundary";

export const ProfileForm: React.FC<ProfileFormType> = React.memo(({addPostCallback}) => {
   const onSubmitHandler = ({post}: PostSubmitType) => addPostCallback(post)
   return (
      <ErrorBoundary>
         <div className={s.profile__addPost}>
            <Form
               onSubmit={onSubmitHandler}
               render={
                  ({handleSubmit,}) => (
                     <form onSubmit={handleSubmit}>
                        <div>
                           <FieldForm type={"text"} placeholder={"Add new message"} name={"post"}
                                      className={"messages__addPost_btn"}/>
                        </div>
                        <button type="submit" className={s.messages__addPost_btn}>Add</button>
                     </form>
                  )
               }
            />
         </div>
      </ErrorBoundary>
   );
})

type ProfileFormType = {
   addPostCallback(post: string): void
}
type PostSubmitType = {
   post: string
}