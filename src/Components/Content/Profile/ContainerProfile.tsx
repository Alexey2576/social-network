import {AppDispatch, RootState} from "../../../redux/redax-store";
import {Profile} from "./Profile";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import {addPost, changeValuePost, setProfileUserInfo} from "../../../redux/profile-redux/profileActions";
import {ProfilePageType} from "../../../redux/profile-redux/profileReducer";
import { selectAllPropsProfile } from "../../../redux/profile-redux/profileSelectors";
import {profileAPI} from "../../../api/api";

export const ContainerProfile: React.FC = () => {
   const {
      profileUserInfo,
      changeTextAreaPost,
      posts,
   } = useSelector<RootState, ProfilePageType>(selectAllPropsProfile)
   const dispatch = useDispatch<AppDispatch>()

   const changeValuePostCallback = (newChangeText: string) => dispatch(changeValuePost(newChangeText))
   const addPostCallback = () => dispatch(addPost())

   let {userID} = useParams<string>()
   useEffect(() => {
      if (userID) {
         profileAPI.getUserProfile(userID).then(data => {
            dispatch(setProfileUserInfo(data))
         })
      }
   }, [userID])

   return <Profile profileUserInfo={profileUserInfo}
                   changeTextAreaPost={changeTextAreaPost}
                   posts={posts}
                   addPostCallback={addPostCallback}
                   changeValuePostCallback={changeValuePostCallback}
   />
}