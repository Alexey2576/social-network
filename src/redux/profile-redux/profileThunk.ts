import {AppDispatch, ThunkDispatchType, ThunkType} from "../redax-store";
import {userAPI} from "../../api/api";
import {addPostAC, changeValuePostAC, setProfileUserInfo} from "./profileActions";

export const getProfileUserInfo = (userID: string): ThunkType => async (dispatch: ThunkDispatchType) => {
   debugger
   if (userID) {
      let data = await userAPI.getUserProfile(userID)
      dispatch(setProfileUserInfo(data))
   }
}
export const addPost = () => (dispatch: ThunkDispatchType) => dispatch(addPostAC())
export const changeValuePost = (newChangeText: string) => (dispatch: AppDispatch) => dispatch(changeValuePostAC(newChangeText))