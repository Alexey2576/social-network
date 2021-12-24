import React, {ChangeEvent} from "react";
import s from './profile.module.scss'
import Post from "./Post/Post";
import {ContainerProfileType} from "./ContainerProfile";

const Profile: React.FC<ContainerProfileType> = (
   {
      changeTextAreaPost,
      posts,
      addPostCallback,
      changeValueCallback
   }
) => {
   const addPost = () => addPostCallback()
   const changeValue = (e: ChangeEvent<HTMLInputElement>) => changeValueCallback(e.currentTarget.value)

   return (
      <div className={s.profile}>

         {/* ========================= Profile Info ========================= */}
         <div className={s.profile__info}>
            <div className={s.profile__info_img}>
               <img src="https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg"
                    alt=""/>
            </div>
            <div className={s.profile__info_text}>
               <h3>Ivan Ivanov</h3>
            </div>
         </div>

         {/* ========================= Posts ========================= */}
         <h3 className={s.profile__postTitle}>My posts</h3>
         <div className={s.profile__posts}>
            { posts.map(p => <Post id={p.id} message={p.message} like={p.like} key={p.id}/>)}
         </div>

         {/* ========================= Input and button ========================= */}
         <div className={s.profile__addPost}>
            <input className={s.profile__addPost_input}
                   type="text"
                   value={changeTextAreaPost}
                   onChange={changeValue}
            />
            <button className={s.profile__addPost_btn}
                    onClick={addPost}>Add
            </button>
         </div>
      </div>
   )
}
export default Profile;