import {addPostAC, changeValuePostAC, ProfilePageType} from "../../../redux/ProfileReducer";
import {AppDispatch, DispatchType, RootState} from "../../../redux/redax-store";
import Profile from "./Profile";
import {connect} from "react-redux";
import React from "react";

type ContainerProfileType = {
   profilePage: ProfilePageType
   dispatch: (action: DispatchType) => void
}

const mapStateToProps = (state: RootState) => {
   return {
      posts: state.profilePage.posts,
      changeTextAreaPost: state.profilePage.changeTextAreaPost
   }
}

const mapDispatchToProps = (dispatch: AppDispatch) => {
   return {
      addPostCallback: () => dispatch(addPostAC()),
      changeValueCallback: (value: string) => dispatch(changeValuePostAC(value))
   }
}

export const ContainerProfile: React.FC<ContainerProfileType> = connect(mapStateToProps, mapDispatchToProps)(Profile)