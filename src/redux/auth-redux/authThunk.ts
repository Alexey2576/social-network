import {ThunkDispatchType, ThunkType} from "../redax-store";
import {authAPI} from "../../api/api";
import {setAuthData} from "./authActions";
import {UserLoginType} from "./authReducer";
import {getAppData} from "../app-redux/appThunk";

export const getLogInData = (loginData: UserLoginType): ThunkType => async (dispatch: ThunkDispatchType): Promise<any> => {
   let data = await authAPI.logIn(loginData)
   if (data.resultCode === 0) {
      await dispatch(getAppData())
   } else return data
}

export const getLogOutData = (): ThunkType => async (dispatch: ThunkDispatchType) => {
   let data = await authAPI.logOut()
   if (data.resultCode === 0) {
      dispatch(setAuthData(null, null, null, false))
      await dispatch(getAppData())
   }
}