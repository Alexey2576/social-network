import React from "react";
import {Field, Form, FormRenderProps} from "react-final-form";
import {UserLoginType} from "../../../../redux/auth-redux/authReducer";

type MyFormType = {
   onSubmit(loginData: UserLoginType): void
}

export const MyForm: React.FC<MyFormType> = (
   {
      onSubmit
   }
) => (
   <Form
      onSubmit={onSubmit}
      render={
         ({handleSubmit}) => (
            <form onSubmit={handleSubmit}>
               <h2>Simple Default Input</h2>
               <div>
                  <Field name="email" component="input" placeholder="Email"/>
               </div>
               <div>
                  <Field name="password" component="input" placeholder="Password"/>
               </div>
               <div>
                  <label>Remember Me</label>
                  <Field name="rememberMe" component="input" type="checkbox"/>
               </div>
               <button type="submit">Submit</button>
            </form>
         )
      }
   />
)