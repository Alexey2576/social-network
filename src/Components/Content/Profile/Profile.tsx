import React from "react";
import s from './profile.module.scss'
import {PostsType} from "./Posts/Post/Post";
import {ProfileUserInfoType} from "../../../redux/profile-redux/profileReducer";
import {ProfileUserInfo} from "./ProfileInfo/ProfileUserInfo";
import {ProfileForm} from "./ProfileForm/ProfileForm";
import {Posts} from "./Posts/Posts";

export const Profile: React.FC<ProfileType> = React.memo((props) => {
   const { posts, addPostCallback, ...profileUserInfoProps } = props

   return (
      <div className={s.profile}>
         <ProfileUserInfo {...profileUserInfoProps}/>
         <Posts posts={posts}/>
         <ProfileForm addPostCallback={addPostCallback}/>
      </div>
   )
})

type ProfileType = {
   profileUserInfo: ProfileUserInfoType
   posts: PostsType[]
   status: string
   authId: number | null
   userIdFromURL?: string | null
   addPostCallback(post: string): void
   updateStatusCallback(status: string): void
   updatePhotoCallback(file: File): void
   updateProfileDataCallback(profileData: ProfileUserInfoType): Promise<any>
}
