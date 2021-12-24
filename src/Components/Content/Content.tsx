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
const Content: React.FC<ContentType> = (
   {
      state,
      dispatch
   }
) => {
   return (
      <div className={s.content}>
         <Routes>
            <Route path="/profile"
                   element={
                      <ContainerProfile profilePage={state.profilePage}
                                        dispatch={dispatch}/>
                   }/>
            <Route path="/messages"
                   element={
                      <ContainerMessages messagesPage={state.messagesPages}
                                         dispatch={dispatch}
                      />
                   }/>
         </Routes>

      </div>
   )
}
export default Content;