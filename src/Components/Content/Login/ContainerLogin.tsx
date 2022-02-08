import React, {ComponentType} from 'react';
import {Login} from "./Login";
import {UserLoginType} from "../../../redux/auth-redux/authReducer";
import {compose} from "@reduxjs/toolkit";
import {connect} from "react-redux";
import {getLogInData} from "../../../redux/auth-redux/authThunk";
import {FORM_ERROR} from "final-form";
import {useNavigate} from "react-router-dom";

type ContainerLoginPropsType = MapStateToPropsType & MapDispatchToPropsType

const ContainerLogin: React.FC<ContainerLoginPropsType> = (
   {
      getLogInData
   }
) => {

   let navigate = useNavigate();
   const onSubmitHandler = async (loginData: UserLoginType) => {

      let data = await getLogInData(loginData)
      if (data.resultCode === 1) {
         return {[FORM_ERROR]: data.messages[0]}
      } else {
         navigate(`/profile/${data.data.userId}`);
      }
   }
   return (
      <div>
         <Login onSubmit={onSubmitHandler}/>
      </div>
   );
}




type MapStateToPropsType = {}
type MapDispatchToPropsType = {
   getLogInData(loginData: UserLoginType): Promise<any>
}

const mapStateToProps = (): MapStateToPropsType => {
   return {}
}
export default compose<ComponentType>(
   connect(mapStateToProps, {getLogInData}),
)(ContainerLogin)


