import React, {ComponentType} from 'react';
import {Login} from "./Login";
import {UserLoginType} from "../../../redux/auth-redux/authReducer";
import {compose} from "@reduxjs/toolkit";
import {connect} from "react-redux";
import {getLogInData} from "../../../redux/auth-redux/authThunk";
import {FORM_ERROR} from "final-form";

type ContainerLoginPropsType = MapStateToPropsType & MapDispatchToPropsType

class ContainerLogin extends React.Component<ContainerLoginPropsType> {

   onSubmitHandler = async (loginData: UserLoginType) => {
      let errors = await this.props.getLogInData(loginData)
      return {[FORM_ERROR]: errors.messages[0]}
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
   getLogInData(loginData: UserLoginType): Promise<any>
}

const mapStateToProps = (): MapStateToPropsType  => {
   return {}
}
export default compose<ComponentType>(
   connect(mapStateToProps, { getLogInData }),
)(ContainerLogin)


