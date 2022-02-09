import React, {lazy, Suspense} from "react";
import s from './content.module.scss'
import {Route, Routes} from "react-router-dom";

const ContainerProfile = lazy(() => import("./Profile/ContainerProfile"));
const ContainerMessages = lazy(() => import("./Messages/ContainerMessages"));
const ContainerPeoples = lazy(() => import("./Peoples/ContainerPeoples"));

export const Content = () => {
   return (
      <div className={s.content}>
         <Suspense fallback={<div>Загрузка...</div>}>
            <Routes>
               <Route path="/profile/:userID"
                      element={<ContainerProfile/>}/>
               <Route path="/messages"
                      element={<ContainerMessages/>}/>
               <Route path="/peoples"
                      element={<ContainerPeoples/>}/>
            </Routes>
         </Suspense>
      </div>
   )
}





