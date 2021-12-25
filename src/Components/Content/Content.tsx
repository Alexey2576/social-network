import React from "react";
import s from './content.module.scss'
import {Route, Routes} from "react-router-dom";
import {ContainerProfile} from "./Profile/ContainerProfile";
import {ContainerMessages} from "./Messages/ContainerMessages";
import {ContainerPeoples} from "./Peoples/ContainerPeoples";

const Content = () => {
   return (
      <div className={s.content}>
         <Routes>
            <Route path="/profile"
                   element={ <ContainerProfile /> }/>
            <Route path="/messages"
                   element={ <ContainerMessages /> }/>
            <Route path="/peoples"
                   element={ <ContainerPeoples /> }/>
         </Routes>

      </div>
   )
}
export default Content;