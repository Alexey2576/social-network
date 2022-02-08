import {NavLink} from "react-router-dom";
import s from "../../App.module.scss";
import React from "react";

export class Home extends React.PureComponent {
   render() {
      return (
         <div>
            Home
            <NavLink to={'/login'}>
               <button className={s.header__profile_btn}>Log in</button>
            </NavLink>
         </div>
      )
   }
}