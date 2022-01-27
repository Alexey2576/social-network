import {PostsType} from "../../Components/Content/Profile/Post/Post";
import {ActionCreatorsType} from "../redax-store";
import {PROFILE_ACTIONS_TYPES} from "./profileActions";

export type ProfileUserInfoType = {
   userId: number
   lookingForAJob: boolean
   lookingForAJobDescription: string
   fullName: string
   contacts: {
      github: string
      vk: string
      facebook: string
      instagram: string
      twitter: string
      website: string
      youtube: string
      mainLink: string
   }
   photos: {
      small: string
      large: string
   }

}

const initialProfilePageState = {
   profileUserInfo: null as ProfileUserInfoType | null,
   status: null as string | null,
   posts: [
      {id: 0, message: "Hello", like: 10},
      {id: 1, message: "Hello", like: 20},
      {id: 2, message: "Hello", like: 30},
   ] as PostsType[],
   changeTextAreaPost: '' as string
}

export type ProfilePageType = typeof initialProfilePageState

export const profileReducer = (state: ProfilePageType = initialProfilePageState, action: ActionCreatorsType): ProfilePageType => {
   switch (action.type) {
      case PROFILE_ACTIONS_TYPES.ADD_POST:
         return {
            ...state,
            posts: [
               ...state.posts,
               {id: 3, message: state.changeTextAreaPost, like: 0}
            ],
            changeTextAreaPost: ""
         }
      case PROFILE_ACTIONS_TYPES.CHANGE_VALUE_POST:
         return {
            ...state,
            changeTextAreaPost: action.newChangeText
         }
      case PROFILE_ACTIONS_TYPES.SET_PROFILE_USER_INFO:
         return {
            ...state,
            profileUserInfo: action.profileUserInfo
         }
      case PROFILE_ACTIONS_TYPES.SET_PROFILE_STATUS:
         return {
            ...state,
            status: action.status
         }
      default: return state
   }
}