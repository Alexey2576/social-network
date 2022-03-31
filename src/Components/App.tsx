import React, {ComponentType, PureComponent} from 'react';
import {compose} from "@reduxjs/toolkit";
import {connect} from "react-redux";
import {AppDispatch, RootState} from "../redux/redax-store";
import {Route, Routes} from 'react-router-dom';
import '../index'
import {Layout, Spin} from 'antd';
import InitializedContent from "./Content/InitializedContent";
import {NotFound} from "./NotFound/NotFound";
import {getAppData} from "../redux/auth/authThunk";
import Login from "./Login/Login";
import {getIsInitialized} from "../redux/app/appSelectors";

export class App extends PureComponent<AppPropsType, AppDispatch> {
   componentDidMount() {
      this.props.getAppData()
   }

   render() {

      if (!this.props.isInitialized) {
         return (<Spin size={"large"}/>)
      }

      return (
         <Layout className="site-layout" style={{minHeight: '100vh', display: "block"}}>
            <Routes>
               <Route path={"/*"} element={<InitializedContent/>}/>
               <Route path={"/login"} element={<Login/>}/>
               <Route path={"/404"} element={<NotFound/>}/>
            </Routes>
         </Layout>
      );
   }
}

type AppPropsType = MapStateToPropsType & MapDispatchToPropsType
type MapStateToPropsType = { isInitialized: boolean }
type MapDispatchToPropsType = { getAppData: () => void }

const mapStateToProps = (state: RootState): MapStateToPropsType => ({isInitialized: getIsInitialized(state)})

export default compose<ComponentType>(
   connect(mapStateToProps, {getAppData}))
(App)
