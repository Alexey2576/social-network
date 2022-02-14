import {RootState, ThunkDispatchType, ThunkType} from "../redax-store";
import {profileAPI} from "../../api/api";
import {addPostAC, setProfilePhoto, setProfileStatus, setProfileUserInfo} from "./profileActions";
import {ProfileUserInfoType} from "./profileReducer";

export const getProfileUserInfo = (userID: number | null): ThunkType => async (dispatch: ThunkDispatchType) => {
   try {
      if (userID) {
         let data = await profileAPI.getProfile(userID.toString())
         dispatch(setProfileUserInfo(data))
      }
   } catch (e) {
      console.log("profileThunk -> getProfileUserInfo ", e)
   }
}

export const getProfileStatus = (userID: number | null): ThunkType => async (dispatch: ThunkDispatchType) => {
   try {
      if (userID) {
         let status: string = await profileAPI.getStatus(userID.toString())
         dispatch(setProfileStatus(status))
      }
   } catch (e) {
      console.log("profileThunk -> getProfileStatus ", e)
   }
}

export const updateProfileStatus = (status: string): ThunkType => async (dispatch: ThunkDispatchType) => {
   try {
      let data = await profileAPI.updateStatus(status)
      if (data.resultCode === 0)
         dispatch(setProfileStatus(status))
   } catch (e) {
      console.log("profileThunk -> updateProfileStatus ", e)
   }
}

export const uploadProfilePhoto = (file: File): ThunkType => async (dispatch: ThunkDispatchType) => {
   try {
      let data = await profileAPI.uploadPhoto(file)
      if (data.resultCode === 0) {
         dispatch(setProfilePhoto(data.data))
      }
   } catch (e) {
      console.log("profileThunk -> uploadProfilePhoto ", e)
   }
}

export const updateProfileData = (profileData: ProfileUserInfoType): ThunkType => async (dispatch: ThunkDispatchType, getState: () => RootState): Promise<any> => {
   try {
      const authId = getState().authState.id
      let data = await profileAPI.updateProfile(profileData)
      if (data.resultCode === 0)
         await dispatch(getProfileUserInfo(authId))
      return data
   } catch (e) {
      console.log("profileThunk -> updateProfileData ", e)
   }
}

export const addPost = (post: string): ThunkType => async (dispatch: ThunkDispatchType) => {
   dispatch(addPostAC(post))
}
