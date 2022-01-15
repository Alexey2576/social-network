import React from "react";
import './navbar.module.scss'
import s from './navbar.module.scss'
import messages from '../../assets/messages.png'
import people from '../../assets/people.png'
import photos from '../../assets/photos.png'
import news from '../../assets/news.png'
import profile from '../../assets/profile.png'
import settings from '../../assets/setting.png'
import ava from '../../assets/ava.jpg'
import {NavLink} from "react-router-dom";


export const Navbar = () => {
   return (
      <div className={s.navbar}>
         <div className={s.navbar__profile}>
            <div className={s.navbar__profile_ava}>
               <img src={ava} alt="ava"/>
            </div>
            <div className={s.navbar__profile_info}>
               <h4 className={s.navbar__profile_info_name}>Alexey Nikitin</h4>
               <span className={s.navbar__profile_info_username}>@username</span>
            </div>
         </div>

         <div className={s.navbar__link}>
            <NavLink className={s.navbar__link_item} to="/messages">
               <img className={s.navbar__link_item_icon} src={messages} alt="icon"/>
               <h3 className={s.navbar__link_item_title}>Messages</h3>
            </NavLink>
            <NavLink className={s.navbar__link_item} to="/peoples">
               <img className={s.navbar__link_item_icon} src={people} alt="icon"/>
               <h3 className={s.navbar__link_item_title}>Peoples</h3>
            </NavLink>
            <NavLink className={s.navbar__link_item} to="/photos">
               <img className={s.navbar__link_item_icon} src={photos} alt="icon"/>
               <h3 className={s.navbar__link_item_title}>Photos</h3>
            </NavLink>
            <NavLink className={s.navbar__link_item} to="/news">
               <img className={s.navbar__link_item_icon} src={news} alt="icon"/>
               <h3 className={s.navbar__link_item_title}>News</h3>
            </NavLink>
            <NavLink className={s.navbar__link_item} to="/profile/2">
               <img className={s.navbar__link_item_icon} src={profile} alt="icon"/>
               <h3 className={s.navbar__link_item_title}>Profile</h3>
            </NavLink>
            <NavLink className={s.navbar__link_item} to="/settings">
               <img className={s.navbar__link_item_icon} src={settings} alt="icon"/>
               <h3 className={s.navbar__link_item_title}>Settings</h3>
            </NavLink>
         </div>
      </div>
   )
}