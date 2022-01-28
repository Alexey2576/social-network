import React from "react";
import s from './header.module.scss'
import logo from '../../assets/logo.png'
import ava from '../../assets/ava.jpg'
import {UserLoggedType} from "../../redux/auth-redux/authReducer";

export type HeaderType = UserLoggedType

export const Header: React.FC<HeaderType> = (
   {
      login,
      id,
      email,
      isAuth
   }
) => {
   return (
      <div className={s.header}>
         <div className={s.header__logo}>
            <img className={s.header__logo_img} src={logo} alt="logo"/>
            <h1 className={s.header__logo_title}>Spacepark</h1>
         </div>
         <div className={s.header__profile}>
            <input className={s.header__profile_search} type="text"/>

            {isAuth
               ?  <>
                     <h4 className={s.header__profile_login}>{login}</h4>
                     <img className={s.header__profile_img} src={ava} alt="photos"/>
                  </>
               : <button className={s.header__profile_btn}>Create</button>
            }
         </div>
      </div>
   )
}