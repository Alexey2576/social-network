import {ThunkDispatchType, ThunkType} from "../redax-store";
import {authAPI, securityAPI} from "../../api/api";
import {UserLoginType} from "./authReducer";
import {setAuthData, setCaptchaUrl} from "./authActions";

export const getLogInData = (loginData: UserLoginType): ThunkType => async (dispatch: ThunkDispatchType): Promise<any> => {
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

export const getLogOutData = (): ThunkType => async (dispatch: ThunkDispatchType) => {
   try {
      let data = await authAPI.logOut()
      if (data.resultCode === 0) {
         dispatch(setAuthData(null, null, null, false))
      }
   } catch (e) {
      console.log("authThunk -> getLogOutData ", e)
   }
}

export const getAppData = (): ThunkType => async (dispatch: ThunkDispatchType) => {
   try {
      let data = await authAPI.getLoggedData()
      if (data.resultCode === 0) {
         const {id, email, login} = data.data
         dispatch(setAuthData(id, email, login, true))
      }
   } catch (e) {
      console.log("authThunk -> getAppData ", e)
   }
}

export const getCaptchaUrl = (): ThunkType => async (dispatch: ThunkDispatchType) => {
   try {
      let data = await securityAPI.getCaptchaURL()
      dispatch(setCaptchaUrl(data.url))
   } catch (e) {
      console.log("authThunk -> getCaptchaUrl ", e)
   }
}