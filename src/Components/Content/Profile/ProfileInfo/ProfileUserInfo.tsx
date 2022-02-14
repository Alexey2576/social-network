import React, {ChangeEvent, useState} from 'react';
import s from "../profile.module.scss";
import {Status} from "./Status/Status";
import {ErrorBoundary} from "../../../Commons/ErrorBoundary/ErrorBoundary";
import ava from '../../../../assets/ava.png'
import {ProfileUserInfoType} from "../../../../redux/profile-redux/profileReducer";
import {FieldForm} from "../../../Commons/FieldForm/FieldForm";
import {Form} from "react-final-form";
import {FORM_ERROR} from "final-form";

export const ProfileUserInfo: React.FC<ProfileUserInfoBlock> = React.memo((props) => {
   const {profileUserInfo, updatePhotoCallback, authId, updateProfileDataCallback,...statusProps} = props
   const {fullName, userId, photos, contacts,} = profileUserInfo
   const keys: string[] = Object.keys(profileUserInfo.contacts)
   const [editMode, setEditMode] = useState(false)
   const onDownloadFile = (e: ChangeEvent<HTMLInputElement>) => e.target.files && updatePhotoCallback(e.target.files[0])
   const onSubmitHandler = async (profileData: ProfileUserInfoType) => {
      let data = await updateProfileDataCallback(profileData)
      if (data.resultCode === 1) {
         return {[FORM_ERROR]: data.messages[0]}
      } else {
         setEditMode(false)
      }
   }
   return (
      <ErrorBoundary>
         <div>
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
            {
               !editMode
                  ? <ProfileData profileUserInfo={profileUserInfo} setEditMode={setEditMode} contactsKeys={keys}/>
                  : <ProfileDataForm onSubmit={onSubmitHandler} contactsKeys={keys} initialValues={profileUserInfo}/>

            }
         </div>
      </ErrorBoundary>
   )
})

//===============================================
type ProfileDataType = {
   profileUserInfo: ProfileUserInfoType
   setEditMode(editMode: boolean): void
   contactsKeys: string[]
}
const ProfileData: React.FC<ProfileDataType> = ({profileUserInfo, setEditMode, contactsKeys}) => {
   const onClickEditHandler = () => setEditMode(true)

   return (
      <div>
         <div>
            <h4>aboutMe</h4><span>{profileUserInfo.aboutMe}</span>
         </div>
         <div>
            <h4>lookingForAJob</h4><span>{profileUserInfo.lookingForAJob ? "Yes" : "No"}</span>
         </div>
         {profileUserInfo.lookingForAJob &&
         <div>
           <h4>lookingForAJobDescription</h4><span>{profileUserInfo.lookingForAJobDescription}</span>
         </div>
         }
         {
            // @ts-ignore
            contactsKeys.map(key => <Contact key={key} contactKey={key} value={profileUserInfo.contacts[key]}/>)
         }
         <button onClick={onClickEditHandler}>Edit</button>
      </div>
   )
}

//===============================================
type ContactType = {
   contactKey: string
   value: string | null
}
const Contact: React.FC<ContactType> = ({contactKey, value}) => {
   return (
      <div>
         <h4>{contactKey}</h4><span>{value !== null ? value : "no"}</span>
      </div>
   )
}

//===============================================
type ProfileDataFormType = {
   onSubmit(profileData: ProfileUserInfoType): void
   initialValues: ProfileUserInfoType
   contactsKeys: string[]
}
const ProfileDataForm: React.FC<ProfileDataFormType> = ({onSubmit, contactsKeys, initialValues}) => {
   return (
      <Form
         onSubmit={onSubmit} initialValues={initialValues}
         render={
            ({handleSubmit, submitError,}) => (
               <form onSubmit={handleSubmit}>
                  <h2>Profile Info</h2>
                  <div>
                     <FieldForm type={"text"} placeholder={"fullName"} name={"fullName"} />
                  </div>
                  <div>
                     <FieldForm type={"text"} placeholder={"aboutMe"} name={"aboutMe"}/>
                  </div>
                  <div>
                     <label>lookingForAJob</label>
                     <FieldForm type={"checkbox"} name={"lookingForAJob"}/>
                  </div>
                  <div>
                     <FieldForm type={"text"} placeholder={"lookingForAJobDescription"} name={"lookingForAJobDescription"}/>
                  </div>
                  <h2>Contacts</h2>
                  {
                     contactsKeys.map(key => <FieldForm type={"text"} placeholder={key} name={`contacts.${key}`} submitError={submitError}/>)
                  }
                  <button type="submit">Submit</button>
                  {submitError && <span style={{color: "red"}}>{submitError}</span>}
               </form>
            )
         }
      />
   )
}

//===============================================
type ProfileUserInfoBlock = {
   profileUserInfo: ProfileUserInfoType
   status: string
   authId: number | null
   userIdFromURL?: string | null
   updateStatusCallback(status: string): void
   updatePhotoCallback(file: File): void
   updateProfileDataCallback(profileData: ProfileUserInfoType): Promise<any>
}
