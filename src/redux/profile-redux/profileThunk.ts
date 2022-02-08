import {ThunkDispatchType, ThunkType} from "../redax-store";
import {profileAPI} from "../../api/api";
import {addPostAC, setProfileStatus, setProfileUserInfo} from "./profileActions";
import {setIsFetching} from "../peoples-redux/peoplesActions";

export const getProfileUserInfo = (userID: number | null): ThunkType => async (dispatch: ThunkDispatchType) => {
   if (userID) {
      dispatch(setIsFetching(true))
      let data = await profileAPI.getProfile(userID.toString())
      dispatch(setIsFetching(false))
      dispatch(setProfileUserInfo(data))
   }
}

export const getProfileStatus = (userID: number | null): ThunkType => async (dispatch: ThunkDispatchType) => {
   if (userID) {
      dispatch(setIsFetching(true))
      let status: string = await profileAPI.getStatus(userID.toString())
      dispatch(setIsFetching(false))
      dispatch(setProfileStatus(status))
   }
}

export const updateProfileStatus = (status: string): ThunkType => async (dispatch: ThunkDispatchType) => {
   dispatch(setIsFetching(true))
   let data = await profileAPI.updateStatus(status)
   dispatch(setIsFetching(false))
   if (data.resultCode === 0)
      dispatch(setProfileStatus(status))
}

export const addPost = (post: string) => (dispatch: ThunkDispatchType) => dispatch(addPostAC(post))
