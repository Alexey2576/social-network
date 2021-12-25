import React from 'react';
import './App.module.scss';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Content from "./Components/Content/Content";
import s from './App.module.scss'
import Contacts from "./Components/Contacts/Contacts";


const App = () => {
   return (
      <div className={s.App}>
         <Header/>
         <div className={s.contentAndNavbar}>
            <Navbar/>
            <Content/>
            <Contacts/>
         </div>
      </div>
   );
}

export default App;
