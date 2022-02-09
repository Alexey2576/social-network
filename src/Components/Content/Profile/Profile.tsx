import React from "react";
import s from './profile.module.scss'
import Post, {PostsType} from "./Posts/Post/Post";
import {ProfileUserInfoType} from "../../../redux/profile-redux/profileReducer";
import {Status} from "./ProfileInfo/Status/Status";
import {FieldForm} from "../../Commons/FieldForm/FieldForm";
import {Form} from "react-final-form";
import {ProfileUserInfo} from "./ProfileInfo/ProfileUserInfo";
import {ProfileForm} from "./ProfileForm/ProfileForm";
import {Posts} from "./Posts/Posts";


export const Profile: React.FC<ProfileType> = React.memo((props) => {
   const { addPostCallback, posts, profileUserInfo, ...restProps } = props
   return (
      <div className={s.profile}>
         {profileUserInfo && <ProfileUserInfo userID={profileUserInfo.userId} {...profileUserInfo} {...restProps}/>}
         <Posts posts={posts}/>
         <ProfileForm addPostCallback={addPostCallback}/>
      </div>
   )
})

type ProfileType = {
   profileUserInfo: ProfileUserInfoType | null
   myId: number | null
   posts: PostsType[]
   status: string | null
   addPostCallback(post: string): void
   updateStatusCallback(status: string): void
}
