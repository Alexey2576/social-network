import {UserLoginType} from "./authReducer";
import {setIsInitialize} from "../app/appActions";
import {authAPI, securityAPI} from "../../api/api";
import {setAuthData, setCaptchaUrl} from "./authActions";
import {setProfilePhoto} from "../profile/profileActions";
import {getProfileUserInfo} from "../profile/profileThunk";
import {ThunkDispatchType, ThunkType} from "../redax-store";

export const getLogInData = (loginData: UserLoginType): ThunkType =>
   async (dispatch: ThunkDispatchType): Promise<any> => {
      try {
         let data = await authAPI.logIn(loginData)
         if (data.resultCode === 0) {
            await dispatch(getAppData())
         } else {
            if (data.resultCode === 10) {
               await dispatch(getCaptchaUrl())
            }
         }
         return data
      } catch (e) {
         console.log("authThunk -> getLogInData ", e)
      }
   }

export const getLogOutData = (): ThunkType =>
   async (dispatch: ThunkDispatchType) => {
      try {
         let data = await authAPI.logOut()
         if (data.resultCode === 0) {
            dispatch(setAuthData(null, null, null, false))
         }
      } catch (e) {
         console.log("authThunk -> getLogOutData ", e)
      }
   }

export const getAppData = (): ThunkType =>
   async (dispatch: ThunkDispatchType) => {
      try {
         let data = await authAPI.getLoggedData()
         if (data.resultCode === 0) {
            const {id, email, login} = data.data
            dispatch(setAuthData(id, email, login, true))
            const profileData = await dispatch(getProfileUserInfo(id))
            if (profileData) {
               dispatch(setProfilePhoto(profileData.photos))
            }

         }
      } catch (e) {
         console.log("authThunk -> getAppData ", e)
      } finally {
         dispatch(setIsInitialize(true))
      }
   }

export const getCaptchaUrl = (): ThunkType =>
   async (dispatch: ThunkDispatchType) => {
      try {
         let data = await securityAPI.getCaptchaURL()
         dispatch(setCaptchaUrl(data.url))
      } catch (e) {
         console.log("authThunk -> getCaptchaUrl ", e)
      }
   }