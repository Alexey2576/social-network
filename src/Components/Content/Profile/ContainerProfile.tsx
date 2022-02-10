import {RootState} from "../../../redux/redax-store";
import {Profile} from "./Profile";
import React, {ComponentType} from "react";
import {connect} from "react-redux";
import {ProfileUserInfoType} from "../../../redux/profile-redux/profileReducer";
import {PostsType} from "./Posts/Post/Post";
import {
   addPost,
   getProfileStatus,
   getProfileUserInfo,
   updateProfileStatus,
   uploadProfilePhoto
} from "../../../redux/profile-redux/profileThunk";
import {withRouter} from "../../../hoc/withRouter";
import {compose} from "@reduxjs/toolkit";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {getAuthId, getPosts, getStatus, getUserInfo} from "../../../redux/profile-redux/profileSelectors";

class ContainerProfile extends React.Component<ContainerProfilePropsType> {
   loadProfileData = () => {
      let userIdFromURL: number | null = Number(this.props.userIdFromURL)
      if (!userIdFromURL) userIdFromURL = this.props.authId
      this.props.getProfileUserInfo(userIdFromURL)
      this.props.getProfileStatus(userIdFromURL)
   }
   componentDidMount = () => this.loadProfileData()
   componentDidUpdate = (prevProps: Readonly<ContainerProfilePropsType>) => {
      const id = this.props.userIdFromURL
      const prevId = prevProps.userIdFromURL
      const prevLargePhoto = prevProps.profileUserInfo.photos.large
      const largePhoto = this.props.profileUserInfo.photos.large;
      (id !== prevId || largePhoto !== prevLargePhoto) && this.loadProfileData()
   }

   addPostCallback = (post: string) => this.props.addPost(post)
   updateStatusCallback = (status: string) => this.props.updateProfileStatus(status)
   updatePhotoCallback = (file: File) => this.props.uploadProfilePhoto(file)

   render = () => {
      return (
         <Profile {...this.props} userIdFromURL={this.props.userIdFromURL}
                  updatePhotoCallback={this.updatePhotoCallback}
                  addPostCallback={this.addPostCallback}
                  updateStatusCallback={this.updateStatusCallback}
         />
      )
   }
}
export type ContainerProfilePropsType = MapStateToPropsType & MapDispatchToPropsType
type MapStateToPropsType = {
   profileUserInfo: ProfileUserInfoType
   posts: PostsType[]
   authId: number | null
   status: string
   userIdFromURL?: string | null
}
type MapDispatchToPropsType = {
   getProfileUserInfo(userID: number | null): void
   addPost(post: string): void
   getProfileStatus(userID: number | null): void
   updateProfileStatus(status: string): void
   uploadProfilePhoto(file: File): void
}

const mapStateToProps = (state: RootState): MapStateToPropsType => {
   return {
      profileUserInfo: getUserInfo(state),
      posts: getPosts(state),
      authId: getAuthId(state),
      status: getStatus(state),
   }
}

export default compose<ComponentType>(
   connect(mapStateToProps, {getProfileUserInfo, addPost, getProfileStatus, updateProfileStatus, uploadProfilePhoto}),
   withRouter,
   withAuthRedirect,
)(ContainerProfile)
