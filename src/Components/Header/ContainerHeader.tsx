import React, {ComponentType, PureComponent} from "react";
import {HeaderSN} from "./Header";
import {connect} from "react-redux";
import {RootState} from "../../redux/redax-store";
import {getLogOutData} from "../../redux/auth/authThunk";
import {compose} from "@reduxjs/toolkit";
import {getEmail, getId, getIsAuth, getLogin} from "../../redux/auth/authSelectors";

class ContainerHeader extends PureComponent<HeaderPropsType, HeaderStateType> {
   logOutCallback = () => this.props.getLogOutData()

   render = () => (
      <HeaderSN
         {...this.props}
         logOutCallback={this.logOutCallback}
         collapsed={this.props.collapsed}
         toggle={this.props.toggle}
      />
   )
}

type HeaderStateType = {}
type HeaderPropsType = MapStateToPropsType
   & MapDispatchToPropsType
   & { collapsed: boolean; toggle: () => void }
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
      id: getId(state),
      email: getEmail(state),
      isAuth: getIsAuth(state),
      login: getLogin(state)
   }
}

export default compose<ComponentType<{
   collapsed: boolean
   toggle: () => void
}>>(
   connect(mapStateToProps, {getLogOutData}))
(ContainerHeader)