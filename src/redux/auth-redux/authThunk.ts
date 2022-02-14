import {ThunkDispatchType, ThunkType} from "../redax-store";
import {authAPI, securityAPI} from "../../api/api";
import {UserLoginType} from "./authReducer";
import {setAuthData, setCaptchaUrl} from "./authActions";

export const getLogInData = (loginData: UserLoginType): ThunkType => async (dispatch: ThunkDispatchType): Promise<any> => {
   let data = await authAPI.logIn(loginData)
   if (data.resultCode === 0) {
      await dispatch(getAppData())
   } else {
      if (data.resultCode === 10) {
         await dispatch(getCaptchaUrl())
      }
   }
   return data
}

export const getLogOutData = (): ThunkType => async (dispatch: ThunkDispatchType) => {
   let data = await authAPI.logOut()
   if (data.resultCode === 0) {
      dispatch(setAuthData(null, null, null, false))
   }
}

export const getAppData = (): ThunkType => async (dispatch: ThunkDispatchType) => {
   let data = await authAPI.getLoggedData()
   if (data.resultCode === 0) {
      const {id, email, login} = data.data
      dispatch(setAuthData(id, email, login, true))
   }
}

export const getCaptchaUrl = (): ThunkType => async (dispatch: ThunkDispatchType) => {
   let data = await securityAPI.getCaptchaURL()
   dispatch(setCaptchaUrl(data.url))
}