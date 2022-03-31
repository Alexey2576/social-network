import {v1} from "uuid";
import {ActionCreatorsType} from "../redax-store";
import {PROFILE_ACTIONS_TYPES} from "./profileActions";
import {PostsType} from "../../Components/Content/Profile/Posts/Post/Post";

const initialProfilePageState = {
   profileUserInfo: {
      userId: 0,
      aboutMe: "",
      fullName: "",
      lookingForAJob: false,
      lookingForAJobDescription: "",
      photos: {
         small: "",
         large: "",
      },
      contacts: {
         vk: "",
         github: "",
         twitter: "",
         website: "",
         youtube: "",
         facebook: "",
         mainLink: "",
         instagram: "",
      }
   } as ProfileUserInfoType,
   status: "",
   posts: [
      {id: v1(), message: "Hello", like: 10},
      {id: v1(), message: "Hello", like: 20},
      {id: v1(), message: "Hello", like: 30},
   ] as PostsType[],
}

export const profileReducer = (state: ProfilePageType = initialProfilePageState, action: ActionCreatorsType): ProfilePageType => {
   switch (action.type) {
      case PROFILE_ACTIONS_TYPES.ADD_POST:
         return {
            ...state,
            posts: [
               ...state.posts,
               {id: v1(), message: action.post, like: 0}
            ],
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
      case PROFILE_ACTIONS_TYPES.SET_PROFILE_PHOTOS:
         return {
            ...state,
            profileUserInfo: {...state.profileUserInfo, photos: action.photos}
         }
      default: return state
   }
}

export type ProfilePageType = typeof initialProfilePageState
export type ProfileUserInfoType = {
   userId: number
   aboutMe: string
   fullName: string
   photos: PhotosType
   contacts: ContactsType
   lookingForAJob: boolean
   lookingForAJobDescription: string
}
export type PhotosType = {
   small: string
   large: string
}
export type ContactsType = {
   vk: string
   github: string
   twitter: string
   website: string
   youtube: string
   mainLink: string
   facebook: string
   instagram: string
}