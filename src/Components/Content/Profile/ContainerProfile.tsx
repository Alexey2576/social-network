import {AppDispatch} from "../../../redux/redax-store";
import {Profile} from "./Profile";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import {addPost, changeValuePost, setProfileUserInfo} from "../../../redux/ProfileBLL/ProfileActions";
import {selectAllProps} from "../../../redux/ProfileBLL/ProfileSelectors";

export const ContainerProfile: React.FC = () => {
   const {
      profileUserInfo,
      changeTextAreaPost,
      posts,
   } = useSelector(selectAllProps)
   const dispatch = useDispatch<AppDispatch>()

   const changeValuePostCallback = (newChangeText: string) => dispatch(changeValuePost(newChangeText))
   const addPostCallback = () => dispatch(addPost())

   let {userID} = useParams<string>()
   useEffect(() => {
      axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userID}`)
         .then(response => {
            dispatch(setProfileUserInfo(response.data))
         })
   }, [userID])


   return <Profile profileUserInfo={profileUserInfo}
                   changeTextAreaPost={changeTextAreaPost}
                   posts={posts}
                   addPostCallback={addPostCallback}
                   changeValuePostCallback={changeValuePostCallback}
   />
}