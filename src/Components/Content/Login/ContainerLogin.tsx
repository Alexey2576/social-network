import React, {ComponentType} from 'react';
import {Login} from "./Login";
import {UserLoginType} from "../../../redux/auth/authReducer";
import {compose} from "@reduxjs/toolkit";
import {connect} from "react-redux";
import {getLogInData} from "../../../redux/auth/authThunk";
import {FORM_ERROR} from "final-form";
import {useNavigate} from "react-router-dom";
import {RootState} from "../../../redux/redax-store";
import {getCaptchaUrl} from "../../../redux/auth/authSelectors";

type ContainerLoginPropsType = MapStateToPropsType & MapDispatchToPropsType

const ContainerLogin: React.FC<ContainerLoginPropsType> = React.memo(({ getLogInData, captchaUrl }) => {

   let navigate = useNavigate();
   const onSubmitHandler = async (loginData: UserLoginType) => {
      let data = await getLogInData(loginData)
      if (data.resultCode !== 0) {
         return {[FORM_ERROR]: data.messages[0]}
      } else {
         navigate(`/profile/${data.data.userId}`)
      }
   }
   return (
      <div>
         <Login onSubmit={onSubmitHandler} captchaUrl={captchaUrl}/>
      </div>
   );
})

type MapStateToPropsType = {
   captchaUrl: string | null
}
type MapDispatchToPropsType = { getLogInData(loginData: UserLoginType): Promise<any> }

const mapStateToProps = (state: RootState): MapStateToPropsType => ({
   captchaUrl: getCaptchaUrl(state)
})

export default compose<ComponentType>(
   connect(mapStateToProps, {getLogInData}),
)(ContainerLogin)


