import React, {ComponentType} from 'react';
import './App.module.scss';
import {Navbar} from "./Components/Navbar/Navbar";
import {Content} from "./Components/Content/Content";
import s from './App.module.scss'
import {Contacts} from "./Components/Contacts/Contacts";
import ContainerHeader from "./Components/Header/ContainerHeader";
import {compose} from "@reduxjs/toolkit";
import {connect} from "react-redux";
import {AppDispatch, RootState} from "./redux/redax-store";
import {getAppData} from "./redux/app-redux/appThunk";
import ContainerLogin from "./Components/Content/Login/ContainerLogin";
import {Route, Routes} from "react-router-dom";

type AppPropsType = MapStateToPropsType & MapDispatchToPropsType

export class App extends React.Component<AppPropsType, AppDispatch> {
   componentDidMount = async () => {
      await this.props.getAppData()
      // if (!this.props.isInit)
      //    return <ContainerLogin/>
   }

   render() {
      return (
         <div className={s.App}>
            {!this.props.isInit
               ?
               <Routes>
                  <Route path="/login"
                         element={<ContainerLogin/>}/>
               </Routes>
               :
               <><ContainerHeader/>
                  <div className={s.contentAndNavbar}>
                     <Navbar/>
                     <Content/>
                     <Contacts/>
                  </div>
               </>

            }

         </div>
      );
   }
}

type MapStateToPropsType = {
   isInit: boolean
}
type MapDispatchToPropsType = {
   getAppData(): void
}

const mapStateToProps = (state: RootState): MapStateToPropsType => {
   return {
      isInit: state.appState.isInit
   }
}

export default compose<ComponentType>(
   connect(mapStateToProps, {getAppData}))
(App)
