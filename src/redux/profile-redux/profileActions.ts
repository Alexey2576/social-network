import {ProfileUserInfoType} from "./profileReducer";

export enum PROFILE_ACTIONS_TYPES {
   ADD_POST = 'profileReducer/ADD_POST',
   CHANGE_VALUE_POST = 'profileReducer/CHANGE_VALUE_POST',
   SET_PROFILE_USER_INFO = 'profileReducer/SET_PROFILE_USER_INFO',
}

export const addPost = () => ({type: PROFILE_ACTIONS_TYPES.ADD_POST} as const)
export const changeValuePost = (newChangeText: string) => ({type: PROFILE_ACTIONS_TYPES.CHANGE_VALUE_POST, newChangeText} as const)
export const setProfileUserInfo = (profileUserInfo: ProfileUserInfoType) => ({type: PROFILE_ACTIONS_TYPES.SET_PROFILE_USER_INFO, profileUserInfo} as const)