import {ProfileUserInfoType} from "./profileReducer";

export enum PROFILE_ACTIONS_TYPES {
   ADD_POST = 'profileReducer/ADD_POST',
   CHANGE_VALUE_POST = 'profileReducer/CHANGE_VALUE_POST',
   SET_PROFILE_USER_INFO = 'profileReducer/SET_PROFILE_USER_INFO',
   SET_PROFILE_STATUS = 'profileReducer/SET_PROFILE_STATUS',
}

export type ProfileActionCreatorsType =
   ReturnType<typeof addPostAC>
   | ReturnType<typeof changeValuePostAC>
   | ReturnType<typeof setProfileUserInfo>
   | ReturnType<typeof setProfileStatus>

export const addPostAC = () => ({type: PROFILE_ACTIONS_TYPES.ADD_POST} as const)
export const changeValuePostAC = (newChangeText: string) => ({type: PROFILE_ACTIONS_TYPES.CHANGE_VALUE_POST, newChangeText} as const)
export const setProfileUserInfo = (profileUserInfo: ProfileUserInfoType) => ({type: PROFILE_ACTIONS_TYPES.SET_PROFILE_USER_INFO, profileUserInfo} as const)
export const setProfileStatus = (status: string) => ({type: PROFILE_ACTIONS_TYPES.SET_PROFILE_STATUS, status} as const)