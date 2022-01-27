import React, {ChangeEvent} from "react";
import s from './profile.module.scss'
import Post, {PostsType} from "./Post/Post";
import {ProfileUserInfoType} from "../../../redux/profile-redux/profileReducer";
import {Status} from "./Status/Status";

type ProfileType = {
   profileUserInfo: ProfileUserInfoType | null
   myId: number | null
   posts: PostsType[]
   changeTextAreaPost: string
   status: string | null
   addPostCallback(): void
   changeValuePostCallback(newChangeText: string): void
   updateStatusCallback(status: string): void
}

export const Profile: React.FC<ProfileType> = (
   {
      profileUserInfo,
      myId,
      posts,
      changeTextAreaPost,
      status,
      addPostCallback,
      changeValuePostCallback,
      updateStatusCallback,
   }
) => {

   const onClickAddPostHandler = () => addPostCallback()
   const onChangeValueHandler = (e: ChangeEvent<HTMLInputElement>) => changeValuePostCallback(e.currentTarget.value)

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
              {/*<h4>{profileUserInfo.contacts.instagram}</h4>*/}
              {/*<h4>{profileUserInfo.contacts.website}</h4>*/}
              {/*<h5>{profileUserInfo.lookingForAJobDescription}</h5>*/}
           </div>
         </div>}

         {/* ========================= Posts ========================= */}
         <h3 className={s.profile__postTitle}>My posts</h3>
         <div className={s.profile__posts}>
            {posts.map(p => <Post id={p.id} message={p.message} like={p.like} key={p.id}/>)}
         </div>

         {/* ========================= Input and button ========================= */}
         <div className={s.profile__addPost}>
            <input className={s.profile__addPost_input}
                   type="text"
                   value={changeTextAreaPost}
                   onChange={onChangeValueHandler}
            />
            <button className={s.profile__addPost_btn}
                    onClick={onClickAddPostHandler}>Add
            </button>
         </div>
      </div>
   )
}