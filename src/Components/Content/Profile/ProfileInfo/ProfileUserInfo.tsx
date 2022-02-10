import React, {ChangeEvent} from 'react';
import s from "../profile.module.scss";
import {Status} from "./Status/Status";
import {ErrorBoundary} from "../../../Commons/ErrorBoundary/ErrorBoundary";
import ava from '../../../../assets/ava.png'
import {ProfileUserInfoType} from "../../../../redux/profile-redux/profileReducer";

export const ProfileUserInfo: React.FC<ProfileUserInfoBlock> = React.memo((props) => {
   const { profileUserInfo, updatePhotoCallback, authId, ...statusProps} = props
   const { fullName, userId, photos, contacts, } = profileUserInfo

   const onDownloadFile = (e: ChangeEvent<HTMLInputElement>) => e.target.files && updatePhotoCallback(e.target.files[0])

   return (
      <ErrorBoundary>
         <div className={s.profile__info}>
            <div className={s.profile__info_img}>
               <img src={photos.large !== null ? photos.large : ava} alt="Profile photo"/>
               {
                  authId === Number(userId) &&
                  <div>
                    <input type="file" onChange={onDownloadFile}/>
                  </div>
               }
            </div>

            <div className={s.profile__info_text}>
               <h3>{fullName}</h3>
               <Status {...statusProps} authId={authId}/>
               <h4>{contacts.github}</h4>
            </div>
         </div>
      </ErrorBoundary>
   )
})

type ProfileUserInfoBlock = {
   profileUserInfo: ProfileUserInfoType
   status: string
   authId: number | null
   userIdFromURL?: string | null
   updateStatusCallback(status: string): void
   updatePhotoCallback(file: File): void
}
