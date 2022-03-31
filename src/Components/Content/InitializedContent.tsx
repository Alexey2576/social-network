import React, {ComponentType, lazy, PureComponent, Suspense} from "react";
import {Route, Routes} from "react-router-dom";
import {Content} from "antd/es/layout/layout";
import ContainerHeader from "../Header/ContainerHeader";
import {Navbar} from "../Navbar/Navbar";
import {RootState} from "../../redux/redax-store";
import {getIsAuth} from "../../redux/auth/authSelectors";
import {compose} from "@reduxjs/toolkit";
import {connect} from "react-redux";
import {getAppData} from "../../redux/auth/authThunk";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {Home} from "../Home/Home";

const ContainerProfile = lazy(() => import("./Profile/ContainerProfile"));
const ContainerMessages = lazy(() => import("./Messages/ContainerMessages"));
const ContainerPeoples = lazy(() => import("./Peoples/ContainerPeoples"));

class InitializedContent extends PureComponent<InitializedContentType> {
   state = {
      collapsed: false,
   };
   toggle = () => {
      this.setState({
         collapsed: !this.state.collapsed,
      });
   };

   render() {
      return (
         <>
            <ContainerHeader
               collapsed={this.state.collapsed}
               toggle={this.toggle}
            />

            <div style={{display: "flex"}}>
               <Navbar
                  collapsed={this.state.collapsed}
                  toggle={this.toggle}
               />

               <Content
                  className="site-layout-background"
                  style={{
                     margin: '24px 16px',
                     padding: 24,
                     minHeight: 280,
                  }}
               >
                  <Suspense fallback={<div>Загрузка...</div>}>
                  <Routes>
                     <Route path={"/"}>
                        <Route index element={<Home/>}/>
                        <Route path="/profile/:userID"
                               element={<ContainerProfile/>}/>
                        <Route path="/messages"
                               element={<ContainerMessages/>}/>
                        <Route path="/peoples"
                               element={<ContainerPeoples/>}/>
                     </Route>
                  </Routes>
                  </Suspense>
               </Content>
            </div>
         </>
      )
   }
}

type InitializedContentType = MapStateToPropsType
type MapStateToPropsType = {
   isAuth: boolean
}

const mapStateToProps = (state: RootState): MapStateToPropsType => {
   return {
      isAuth: getIsAuth(state),
   }
}

export default compose<ComponentType>(
   withAuthRedirect,
   connect(mapStateToProps, {getAppData}),
)(InitializedContent)
