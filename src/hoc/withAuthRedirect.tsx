import {RootState} from "../redux/redax-store";
import React, {ComponentType} from "react";
import {connect} from "react-redux";
import ContainerLogin from "../Components/Content/Login/Login";

type MapStateToPropsType = {
   isAuth: boolean
}
const mapStateToProps = (state: RootState): MapStateToPropsType => {
   return {
      isAuth: state.authState.isAuth
   }
}

export function withAuthRedirect<T>(Component: ComponentType<T>) {
   const ComponentWithAuthRedirectProp = (props: MapStateToPropsType) => {
      let {isAuth, ...restProps} = props
      if (!isAuth) return <ContainerLogin/>
      return <Component {...restProps as T}/>
   }
   return connect(mapStateToProps)(ComponentWithAuthRedirectProp)
}