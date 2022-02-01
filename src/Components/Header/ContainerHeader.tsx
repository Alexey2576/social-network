import React, {ComponentType} from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppDispatch, RootState} from "../../redux/redax-store";
import {getLogOutData} from "../../redux/auth-redux/authThunk";
import {compose} from "@reduxjs/toolkit";

type HeaderPropsType = MapStateToPropsType & MapDispatchToPropsType

class ContainerHeader extends React.Component<HeaderPropsType, AppDispatch> {
   logOutCallback = () => this.props.getLogOutData()

   render = () => (
      <Header {...this.props} logOutCallback={this.logOutCallback}/>
   )
}

type MapStateToPropsType = {
   id: number | null
   email: string | null
   login: string | null
   isAuth: boolean
}
type MapDispatchToPropsType = {
   getAuthData(): void
   getLogOutData(): void
}

const mapStateToProps = (state: RootState): MapStateToPropsType => {
   return {
      id: state.authState.id,
      email: state.authState.email,
      isAuth: state.authState.isAuth,
      login: state.authState.login
   }
}

export default compose<ComponentType>(
   connect(mapStateToProps, {getLogOutData}))
(ContainerHeader)