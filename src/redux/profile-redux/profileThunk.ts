import {ThunkDispatchType, ThunkType} from "../redax-store";
import {profileAPI} from "../../api/api";
import {addPostAC, setProfileStatus, setProfileUserInfo} from "./profileActions";

export const getProfileUserInfo = (userID: number | null): ThunkType => async (dispatch: ThunkDispatchType) => {
   if (userID) {
      let data = await profileAPI.getProfile(userID.toString())
      dispatch(setProfileUserInfo(data))
   }
}

export const getProfileStatus = (userID: number | null): ThunkType => async (dispatch: ThunkDispatchType) => {
   if (userID) {
      let status: string = await profileAPI.getStatus(userID.toString())
      dispatch(setProfileStatus(status))
   }
}

export const updateProfileStatus = (status: string): ThunkType => async (dispatch: ThunkDispatchType) => {
   let data = await profileAPI.updateStatus(status)
   if (data.resultCode === 0)
      dispatch(setProfileStatus(status))
}

export const addPost = (post: string) => (dispatch: ThunkDispatchType) => dispatch(addPostAC(post))
