import {RootState} from "../../../redux/redax-store";
import {Profile} from "./Profile";
import React, {ComponentType} from "react";
import {connect} from "react-redux";
import {ProfileUserInfoType} from "../../../redux/profile-redux/profileReducer";
import {PostsType} from "./Post/Post";
import {addPost, getProfileStatus, getProfileUserInfo, updateProfileStatus} from "../../../redux/profile-redux/profileThunk";
import {withRouter} from "../../../hoc/withRouter";
import {compose} from "@reduxjs/toolkit";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {getMyId, getPosts, getStatus, getUserInfo} from "../../../redux/profile-redux/profileSelectors";

class ContainerProfile extends React.PureComponent<ContainerProfilePropsType> {
   componentDidMount = () => {
      let userID = this.props.userID
      if (!userID) userID = this.props.myId
      this.props.getProfileUserInfo(userID)
      this.props.getProfileStatus(userID)
   }

   addPostCallback = (post: string) => this.props.addPost(post)
   updateStatusCallback = (status: string) => this.props.updateProfileStatus(status)

   render = () => {
      return (
         <Profile {...this.props}
                  addPostCallback={this.addPostCallback}
                  updateStatusCallback={this.updateStatusCallback}
         />
      )
   }
}
export type ContainerProfilePropsType = MapStateToPropsType & MapDispatchToPropsType
type MapStateToPropsType = {
   profileUserInfo: ProfileUserInfoType | null
   posts: PostsType[]
   myId: number | null
   status: string | null
   userID?: number | null
   navigate?: any
}
type MapDispatchToPropsType = {
   getProfileUserInfo(userID: number | null): void
   addPost(post: string): void
   getProfileStatus(userID: number | null): void
   updateProfileStatus(status: string): void
}

const mapStateToProps = (state: RootState): MapStateToPropsType => {
   return {
      profileUserInfo: getUserInfo(state),
      posts: getPosts(state),
      myId: getMyId(state),
      status: getStatus(state),
   }
}

export default compose<ComponentType>(
   connect(mapStateToProps, {getProfileUserInfo, addPost, getProfileStatus, updateProfileStatus}),
   withRouter,
   withAuthRedirect,
)(ContainerProfile)
