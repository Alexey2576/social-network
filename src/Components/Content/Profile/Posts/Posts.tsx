import React from 'react';
import s from "../profile.module.scss";
import Post, {PostsType} from "./Post/Post";

export const Posts: React.FC<PostsTypeBlock> = ({ posts }) => {
   return (
      <>
         <h3 className={s.profile__postTitle}>My posts</h3>
         <div className={s.profile__posts}>
            {posts.map(p => <Post id={p.id} message={p.message} like={p.like} key={p.id}/>)}
         </div>
      </>
   );
};

type PostsTypeBlock = {
   posts: PostsType[]
}