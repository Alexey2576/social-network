import React, {DetailedHTMLProps, InputHTMLAttributes} from 'react';
import {composeValidators} from "../Validators/validators";
import {Field} from "react-final-form";
import {FieldValidator} from "final-form";

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type FieldFormType = DefaultInputPropsType & {
   name: string
   validators?: FieldValidator<any>
   type: string
   spanClassName?: string
   label?: string
}

export const FieldForm: React.FC<FieldFormType> = (
   {
      name,
      validators,
      type,
      placeholder,
      label,
   }
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
   );
};