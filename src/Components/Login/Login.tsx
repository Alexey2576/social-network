import React, {ComponentType, PureComponent} from "react";
import ContainerLoginForm from "../Commons/LoginForm/ContainerLoginForm";
import {Navigate} from "react-router-dom";
import {RootState} from "../../redux/redax-store";
import {getIsAuth} from "../../redux/auth/authSelectors";
import {compose} from "@reduxjs/toolkit";
import {connect} from "react-redux";
import {Home} from "../Home/Home";
import {Layout} from "antd";

class Login extends PureComponent<HomeType> {
   render() {

      if (this.props.isAuth) {
         return <Navigate to={"/"}/>
      }

      return (
         <Layout
            className="site-layout"
            style={{
               height: "100vh",
               display: "flex",
               flexDirection: "row",
               alignItems: "center",
               justifyContent: "left",
               padding: "0 400px"
            }}
         >
            <Home/>
            <ContainerLoginForm/>
         </Layout>
      )
   }
}

type HomeType = MapStateToPropsType
type MapStateToPropsType = {
   isAuth: boolean
}
const mapStateToProps = (state: RootState): MapStateToPropsType => {
   return {
      isAuth: getIsAuth(state),
   }
}

export default compose<ComponentType>(
   connect(mapStateToProps, {}))
(Login)