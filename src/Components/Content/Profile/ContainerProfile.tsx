import {RootState} from "../../../redux/redax-store";
import {Profile} from "./Profile";
import React, {ComponentType} from "react";
import {connect} from "react-redux";
import {ProfileUserInfoType} from "../../../redux/profile-redux/profileReducer";
import {PostsType} from "./Post/Post";
import {
   addPost,
   changeValuePost,
   getProfileStatus,
   getProfileUserInfo, updateProfileStatus
} from "../../../redux/profile-redux/profileThunk";
import {withRouter} from "../../../hoc/withRouter";
import {compose} from "@reduxjs/toolkit";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";

export type ContainerProfilePropsType = MapStateToPropsType & MapDispatchToPropsType

class ContainerProfile extends React.Component<ContainerProfilePropsType> {
   componentDidMount = () => {
      let userID = this.props.userID
      if (!userID) userID = this.props.myId
      this.props.getProfileUserInfo(userID)
      this.props.getProfileStatus(userID)
   }

   changeValuePostCallback = (newChangeText: string) => this.props.changeValuePost(newChangeText)
   addPostCallback = () => this.props.addPost()
   updateStatusCallback = (status: string) => this.props.updateProfileStatus(status)

   render = () => {
      return (
         <Profile {...this.props}
                  addPostCallback={this.addPostCallback}
                  updateStatusCallback={this.updateStatusCallback}
                  changeValuePostCallback={this.changeValuePostCallback}
         />
      )
   }
}

type MapStateToPropsType = {
   profileUserInfo: ProfileUserInfoType | null
   posts: PostsType[]
   changeTextAreaPost: string
   myId: number | null
   status: string | null
   userID?: number | null
}
type MapDispatchToPropsType = {
   getProfileUserInfo(userID: number | null): void
   addPost(): void
   changeValuePost(newChangeText: string): void
   getProfileStatus(userID: number | null): void
   updateProfileStatus(status: string): void
}

const mapStateToProps = (state: RootState): MapStateToPropsType  => {
  return {
     profileUserInfo: state.profilePage.profileUserInfo,
     posts: state.profilePage.posts,
     changeTextAreaPost: state.profilePage.changeTextAreaPost,
     myId: state.authState.id,
     status: state.profilePage.status,
  }
}
export default compose<ComponentType>(
   connect(mapStateToProps, { getProfileUserInfo, addPost, changeValuePost, getProfileStatus, updateProfileStatus }),
   withRouter,
   withAuthRedirect,
)(ContainerProfile)
