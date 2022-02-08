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
import {Route, Routes} from 'react-router-dom';
import ContainerLogin from "./Components/Content/Login/ContainerLogin";
import {Home} from "./Components/Home/Home";
import {getAppData} from "./redux/auth-redux/authThunk";

type AppPropsType = MapStateToPropsType & MapDispatchToPropsType

export class App extends React.Component<AppPropsType, AppDispatch> {
   componentDidMount = () => {
      this.props.getAppData()
   }

   render() {
      return (
         <div className={s.App}>
            <ContainerHeader/>
            {!this.props.isAuth &&
            <Routes>
              <Route path={'/'} element={<Home/>}/>
              <Route path={'/login'} element={<ContainerLogin/>}/>
            </Routes>
            }
            {this.props.isAuth &&
            <div className={s.contentAndNavbar}>
              <Navbar/>
              <Content/>
              <Contacts/>
            </div>}
         </div>
      );
   }
}


type MapStateToPropsType = {
   isAuth: boolean
}
type MapDispatchToPropsType = {
   getAppData(): void
}

const mapStateToProps = (state: RootState): MapStateToPropsType => {
   return {
      isAuth: state.authState.isAuth
   }
}

export default compose<ComponentType>(
   connect(mapStateToProps, {getAppData}))
(App)
