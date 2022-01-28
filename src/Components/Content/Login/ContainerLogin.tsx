import React, {ComponentType} from 'react';
import {Login} from "./Login";
import {UserLoginType} from "../../../redux/auth-redux/authReducer";
import {compose} from "@reduxjs/toolkit";
import {connect} from "react-redux";
import {getLoggingData} from "../../../redux/auth-redux/authThunk";

type ContainerLoginPropsType = MapStateToPropsType & MapDispatchToPropsType

class ContainerLogin extends React.Component<ContainerLoginPropsType> {

   onSubmitHandler = (loginData: UserLoginType) => {
      this.props.getLoggingData(loginData)
   }

   render = () => {
      return (
         <div>
            <Login onSubmit={this.onSubmitHandler}/>
         </div>
      );
   }
}

type MapStateToPropsType = {}
type MapDispatchToPropsType = {
   getLoggingData(loginData: UserLoginType): void
}

const mapStateToProps = (): MapStateToPropsType  => {
   return {}
}
export default compose<ComponentType>(
   connect(mapStateToProps, { getLoggingData }),
)(ContainerLogin)


