import React from "react";
import s from './post.module.scss'

export type PostsType = {
   id: number
   message: string
   like: number
}
const Post: React.FC<PostsType> = (props) => {
   return (
      <div className={s.post}>
         <p className={s.post_message}>{props.message}</p>
         <button className={s.post_like}>{props.like}</button>
      </div>
   )
}

export default Post;