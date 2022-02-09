import React from 'react';
import s from "../profile.module.scss";
import {Status, StatusType} from "./Status/Status";
import {ProfileUserInfoType} from "../../../../redux/profile-redux/profileReducer";
import {ErrorBoundary} from "../../../Commons/ErrorBoundary/ErrorBoundary";

export const ProfileUserInfo = React.memo((props: ProfileUserInfoType & StatusType) => {
   const {photos, fullName, contacts, userID, ...statusProps} = props
   return (
      <ErrorBoundary>
         <div className={s.profile__info}>
            <div className={s.profile__info_img}>
               <img src={photos.large} alt=""/>
            </div>
            <div className={s.profile__info_text}>
               <h3>{fullName}</h3>
               <Status {...statusProps} userID={userID}/>
               <h4>{contacts.github}</h4>
            </div>
         </div>
      </ErrorBoundary>
   )
})
