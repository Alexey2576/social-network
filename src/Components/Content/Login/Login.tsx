import React, {ComponentType} from 'react';
import {MyForm} from "./Form/MyForm";
import {UserLoginType} from "../../../redux/auth-redux/authReducer";
import {RootState} from "../../../redux/redax-store";
import {compose} from "@reduxjs/toolkit";
import {connect} from "react-redux";
import {getLoggingData} from "../../../redux/auth-redux/authThunk";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";

type ContainerLoginPropsType = MapStateToPropsType & MapDispatchToPropsType

class ContainerLogin extends React.Component<ContainerLoginPropsType> {

   onSubmitHandler = (loginData: UserLoginType) => this.props.getLoggingData(loginData)

   render = () => {
      return (
         <div>
            <MyForm onSubmit={this.onSubmitHandler}/>
         </div>
      );
   }
}

type MapStateToPropsType = {}
type MapDispatchToPropsType = {
   getLoggingData(loginData: UserLoginType): void
}

const mapStateToProps = (state: RootState): MapStateToPropsType  => {
   return {}
}
export default compose<ComponentType>(
   connect(mapStateToProps, { getLoggingData }),
)(ContainerLogin)


