import {ThunkDispatchType, ThunkType} from "../redax-store";
import {authAPI} from "../../api/api";
import {setAuthData} from "./authActions";
import {UserLoginType} from "./authReducer";

export const getAuthData = (): ThunkType => async (dispatch: ThunkDispatchType) => {
   let data = await authAPI.getLoggedData()
   if (data.resultCode === 0) {
      const {id, email, login} = data.data
      dispatch(setAuthData(id, email, login, true))
   }
}

export const getLoggingData = (loginData: UserLoginType): ThunkType => async () => {
   let data = await authAPI.getLoginData(loginData)
   if (data.resultCode === 0) {
      getAuthData()
   }
}