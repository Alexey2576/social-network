import React, {ComponentType} from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppDispatch, RootState} from "../../redux/redax-store";
import {getLogOutData} from "../../redux/auth/authThunk";
import {compose} from "@reduxjs/toolkit";
import {getEmail, getId, getIsAuth, getLogin} from "../../redux/auth/authSelectors";

class ContainerHeader extends React.PureComponent<HeaderPropsType, AppDispatch> {
   logOutCallback = () => this.props.getLogOutData()

   render = () => (
      <Header {...this.props} logOutCallback={this.logOutCallback}/>
   )
}

type HeaderPropsType = MapStateToPropsType & MapDispatchToPropsType
type MapStateToPropsType = {
   id: number | null
   email: string | null
   login: string | null
   isAuth: boolean,
}
type MapDispatchToPropsType = {
   getAuthData(): void
   getLogOutData(): void
}

const mapStateToProps = (state: RootState): MapStateToPropsType => {
   return {
      id: getId(state),
      email: getEmail(state),
      isAuth: getIsAuth(state),
      login: getLogin(state),
   }
}

export default compose<ComponentType>(
   connect(mapStateToProps, {getLogOutData}))
(ContainerHeader)