import React from "react";
import s from './header.module.scss'
import logo from '../../assets/logo.png'
import ava from '../../assets/ava.jpg'
import {NavLink} from "react-router-dom";

export const Header: React.FC<HeaderType> = React.memo(({ login, isAuth, logOutCallback, }) => {

   const onClickLogOutHandler = () => logOutCallback()

   return (
      <div className={s.header}>
         <div className={s.header__logo}>
            <img className={s.header__logo_img} src={logo} alt="logo"/>
            <h1 className={s.header__logo_title}>Spacepark</h1>
         </div>
         <div className={s.header__profile}>
            <input className={s.header__profile_search} type="text"/>
            {isAuth
               ?
               <>
                  <h4 className={s.header__profile_login}>{login}</h4>
                  <img className={s.header__profile_img} src={ava} alt="photos"/>
                  <NavLink to={'/'}>
                     <button className={s.header__profile_btn} onClick={onClickLogOutHandler}>Exit</button>
                  </NavLink>
               </>
               : <button className={s.header__profile_btn}>Create</button>
            }
         </div>
      </div>
   )
})

export type HeaderType = {
   login: string | null
   isAuth: boolean
   logOutCallback(): void
}