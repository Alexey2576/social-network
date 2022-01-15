import React from 'react';
import './App.module.scss';
import {Navbar} from "./Components/Navbar/Navbar";
import {Content} from "./Components/Content/Content";
import s from './App.module.scss'
import {Contacts} from "./Components/Contacts/Contacts";
import {ContainerHeader} from "./Components/Header/ContainerHeader";


export const App = () => {
   return (
      <div className={s.App}>
         <ContainerHeader/>
         <div className={s.contentAndNavbar}>
            <Navbar/>
            <Content/>
            <Contacts/>
         </div>
      </div>
   );
}
