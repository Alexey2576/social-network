import React, {DetailedHTMLProps, InputHTMLAttributes} from 'react';
import {Field} from "react-final-form";
import {FieldValidator} from "final-form";
import {composeValidators} from "../Utils/Validators/validators";

export const FieldForm: React.FC<FieldFormType> = React.memo((
   { name, validators, type, placeholder, label, submitError}
) => {
   return (
      <Field name={name} validate={validators && composeValidators(validators)}>
         {
            ({input, meta}) => (
               <div>
                  <label>{label}</label>
                  <input {...input} type={type} placeholder={placeholder}/>
                  {meta.error && meta.touched && <span>{meta.error}</span>}
               </div>
            )
         }
      </Field>
   )
})

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type FieldFormType = DefaultInputPropsType & {
   name: string
   validators?: FieldValidator<any>
   type: string
   spanClassName?: string
   label?: string
   submitError?: any
}