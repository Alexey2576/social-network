import {ProfileUserInfoType} from "./profileReducer";

export enum PROFILE_ACTIONS_TYPES {
   ADD_POST = 'profileReducer/ADD_POST',
   SET_PROFILE_USER_INFO = 'profileReducer/SET_PROFILE_USER_INFO',
   SET_PROFILE_STATUS = 'profileReducer/SET_PROFILE_STATUS',
}

export type ProfileActionCreatorsType =
   ReturnType<typeof addPostAC>
   | ReturnType<typeof setProfileUserInfo>
   | ReturnType<typeof setProfileStatus>

export const addPostAC = (post: string) => ({type: PROFILE_ACTIONS_TYPES.ADD_POST, post} as const)
export const setProfileUserInfo = (profileUserInfo: ProfileUserInfoType) => ({type: PROFILE_ACTIONS_TYPES.SET_PROFILE_USER_INFO, profileUserInfo} as const)
export const setProfileStatus = (status: string) => ({type: PROFILE_ACTIONS_TYPES.SET_PROFILE_STATUS, status} as const)