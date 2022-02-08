import React from "react";
import s from './profile.module.scss'
import Post, {PostsType} from "./Post/Post";
import {ProfileUserInfoType} from "../../../redux/profile-redux/profileReducer";
import {Status} from "./Status/Status";
import {FieldForm} from "../../Commons/FieldForm/FieldForm";
import {Form} from "react-final-form";


export const Profile: React.FC<ProfileType> = React.memo((
   {
      profileUserInfo,
      myId,
      posts,
      status,
      addPostCallback,
      updateStatusCallback,
   }
) => {
   const onSubmitHandler = ({post}: PostSubmitType) => addPostCallback(post)
   return (
      <div className={s.profile}>
         {/* ========================= Profile Info ========================= */}
         {profileUserInfo &&
         <div className={s.profile__info}>
           <div className={s.profile__info_img}>
             <img src={profileUserInfo.photos.large} alt=""/>
           </div>
           <div className={s.profile__info_text}>
             <h3>{profileUserInfo.fullName}</h3>
             <Status status={status}
                     myId={myId}
                     userID={profileUserInfo.userId}
                     updateStatusCallback={updateStatusCallback}
             />
             <h4>{profileUserInfo.contacts.github}</h4>
           </div>
         </div>}

         {/* ========================= Posts ========================= */}
         <h3 className={s.profile__postTitle}>My posts</h3>
         <div className={s.profile__posts}>
            {posts.map(p => <Post id={p.id} message={p.message} like={p.like} key={p.id}/>)}
         </div>

         {/* ========================= Input and button ========================= */}
         <div className={s.profile__addPost}>
            <Form
               onSubmit={onSubmitHandler}
               render={
                  ({handleSubmit,}) => (
                     <form onSubmit={handleSubmit}>
                        <div>
                           <FieldForm type={"text"} placeholder={"Add new message"} name={"post"} className={"messages__addPost_btn"}/>
                        </div>
                        <button type="submit" className={s.messages__addPost_btn}>Add</button>
                     </form>
                  )
               }
            />
         </div>
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

type PostSubmitType = {
   post: string
}