import {ThunkDispatchType, ThunkType} from "../redax-store";
import {authAPI} from "../../api/api";
import {setAuthData} from "../auth-redux/authActions";
import {setAppInit} from "./appAction";

export const getAppData = (): ThunkType => async (dispatch: ThunkDispatchType) => {
   let data = await authAPI.getLoggedData()
   if (data.resultCode === 0) {
      const {id, email, login} = data.data
      dispatch(setAuthData(id, email, login, true))
      dispatch(setAppInit())
   }
}