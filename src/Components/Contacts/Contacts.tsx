import React from "react";
import s from './contacts.module.scss'
import ava from '../../assets/contacts/ava.png'

export const Contacts = () => {
   return (
      <div className={s.contacts}>
         <div className={s.contacts__profile}>
            <div className={s.contacts__profile_ava}>
               <img src={ava} alt="ava"/>
            </div>
            <div className={s.contacts__profile_info}>
               <h4 className={s.contacts__profile_info_name}>Amanda Miles</h4>
            </div>
         </div>
         <div className={s.contacts__profile}>
            <div className={s.contacts__profile_ava}>
               <img src={ava} alt="ava"/>
            </div>
            <div className={s.contacts__profile_info}>
               <h4 className={s.contacts__profile_info_name}>Amanda Miles</h4>
            </div>
         </div>
         <div className={s.contacts__profile}>
            <div className={s.contacts__profile_ava}>
               <img src={ava} alt="ava"/>
            </div>
            <div className={s.contacts__profile_info}>
               <h4 className={s.contacts__profile_info_name}>Amanda Miles</h4>
            </div>
         </div>
         <div className={s.contacts__profile}>
            <div className={s.contacts__profile_ava}>
               <img src={ava} alt="ava"/>
            </div>
            <div className={s.contacts__profile_info}>
               <h4 className={s.contacts__profile_info_name}>Amanda Miles</h4>
            </div>
         </div>
         <div className={s.contacts__profile}>
            <div className={s.contacts__profile_ava}>
               <img src={ava} alt="ava"/>
            </div>
            <div className={s.contacts__profile_info}>
               <h4 className={s.contacts__profile_info_name}>Amanda Miles</h4>
            </div>
         </div>
         <div className={s.contacts__profile}>
            <div className={s.contacts__profile_ava}>
               <img src={ava} alt="ava"/>
            </div>
            <div className={s.contacts__profile_info}>
               <h4 className={s.contacts__profile_info_name}>Amanda Miles</h4>
            </div>
         </div>
         <div className={s.contacts__profile}>
            <div className={s.contacts__profile_ava}>
               <img src={ava} alt="ava"/>
            </div>
            <div className={s.contacts__profile_info}>
               <h4 className={s.contacts__profile_info_name}>Amanda Miles</h4>
            </div>
         </div>
      </div>
   )
}