import {ThunkDispatchType, ThunkType} from "../redax-store";
import {authAPI} from "../../api/api";
import {UserLoginType} from "./authReducer";
import {setAuthData} from "./authActions";
import {setIsFetching} from "../peoples-redux/peoplesActions";

export const getLogInData = (loginData: UserLoginType): ThunkType => async (dispatch: ThunkDispatchType): Promise<any> => {
   dispatch(setIsFetching(true))
   let data = await authAPI.logIn(loginData)
   dispatch(setIsFetching(false))
   if (data.resultCode === 0) {
      await dispatch(getAppData())
   }
   return data
}

export const getLogOutData = (): ThunkType => async (dispatch: ThunkDispatchType) => {
   dispatch(setIsFetching(true))
   let data = await authAPI.logOut()
   dispatch(setIsFetching(false))
   if (data.resultCode === 0) {
      dispatch(setAuthData(null, null, null, false))
   }
}

export const getAppData = (): ThunkType => async (dispatch: ThunkDispatchType) => {
   dispatch(setIsFetching(true))
   let data = await authAPI.getLoggedData()
   dispatch(setIsFetching(false))
   if (data.resultCode === 0) {
      const {id, email, login} = data.data
      dispatch(setAuthData(id, email, login, true))
   }
}