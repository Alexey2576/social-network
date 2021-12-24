import React from "react";
import s from './content.module.scss'
import {Route, Routes} from "react-router-dom";
import {AppDispatch, RootState} from "../../redux/redax-store";
import {ContainerProfile} from "./Profile/ContainerProfile";
import {ContainerMessages} from "./Messages/ContainerMessages";

export type ContentType = {
   state: RootState
   dispatch: AppDispatch
}
const Content: React.FC<ContentType> = () => {
   return (
      <div className={s.content}>
         <Routes>
            <Route path="/profile"
                   element={
                      <ContainerProfile />
                   }/>
            <Route path="/messages"
                   element={
                      <ContainerMessages />
                   }/>
         </Routes>

      </div>
   )
}
export default Content;