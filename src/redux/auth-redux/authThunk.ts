import {ThunkDispatchType, ThunkType} from "../redax-store";
import {headerAPI} from "../../api/api";
import {setAuthData} from "./authActions";

export const getAuthData = (): ThunkType => async (dispatch: ThunkDispatchType) => {
   let data = await headerAPI.getAuthData()
   if (data.resultCode === 0) {
      const {id, email, login} = data.data
      dispatch(setAuthData(id, email, login, true))
   }
}