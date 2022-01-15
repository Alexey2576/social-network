import React, {useEffect} from "react";
import s from './header.module.scss'
import logo from '../../assets/logo.png'
import ava from '../../assets/ava.jpg'
import {Header} from "./Header";
import {useDispatch, useSelector} from "react-redux";
import {selectAllPropsAuthState} from "../../redux/auth-redux/authSelectors";
import {AppDispatch, RootState} from "../../redux/redax-store";
import {UserLoggedType} from "../../redux/auth-redux/authReducer";
import axios from "axios";
import {setProfileUserInfo} from "../../redux/profile-redux/profileActions";
import {setAuthData} from "../../redux/auth-redux/authActions";

export const ContainerHeader: React.FC = () => {

   const authProps = useSelector<RootState, UserLoggedType>(selectAllPropsAuthState)
   const dispatch = useDispatch<AppDispatch>()

   useEffect(() => {
      axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
         withCredentials: true
      })
         .then(response => {
            if (response.data.resultCode === 0) {
               const {id, email, login} = response.data.data
               dispatch(setAuthData(id, email, login, true))
            }
         })
   }, [])
   return <Header {...authProps} />
}