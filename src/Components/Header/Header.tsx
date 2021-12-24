import React from "react";
import s from './header.module.scss'
import logo from '../../assets/logo.png'
import ava from '../../assets/ava.jpg'

const Header = () => {
   return (
      <div className={s.header}>
         <div className={s.header__logo}>
            <img className={s.header__logo_img} src={logo} alt="logo"/>
            <h1 className={s.header__logo_title}>Spacepark</h1>
         </div>
         <div className={s.header__profile}>
            <input className={s.header__profile_search} type="text"/>
            <button className={s.header__profile_btn}>Create</button>
            <img className={s.header__profile_img} src={ava} alt="photo"/>
         </div>
      </div>
   )
}
export default Header;