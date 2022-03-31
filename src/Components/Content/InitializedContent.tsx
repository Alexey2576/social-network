import {Layout} from "antd";
import {Home} from "../Home/Home";
import {Navbar} from "../Navbar/Navbar";
import {compose} from "@reduxjs/toolkit";
import {Content} from "antd/es/layout/layout";
import {Route, Routes} from "react-router-dom";
import ContainerHeader from "../Header/ContainerHeader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import React, {ComponentType, lazy, PureComponent, Suspense} from "react";

const ContainerProfile = lazy(() => import("./Profile/ContainerProfile"));
const ContainerPeoples = lazy(() => import("./Peoples/ContainerPeoples"));
const ContainerMessages = lazy(() => import("./Messages/ContainerMessages"));

class InitializedContent extends PureComponent {
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
         <Layout style={{display: "block"}}>
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
         </Layout>
      )
   }
}

export default compose<ComponentType>(
   withAuthRedirect,
)(InitializedContent)
