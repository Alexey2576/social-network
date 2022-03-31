import {ActionCreatorsType} from "../redax-store";
import {AUTH_ACTIONS_TYPES} from "./authActions";
import {PhotosType} from "../profile/profileReducer";
import {PROFILE_ACTIONS_TYPES} from "../profile/profileActions";

export type UserLoggedType = {
   id: number | null
   email: string | null
   login: string | null
   isAuth: boolean
   photos: PhotosType | null
   captchaUrl: string | null
}
export type UserLoginType = {
   email: string | null
   password: string | null
   rememberMe: boolean
   captcha: string | null
}

const initialAuthState: UserLoggedType = {
   id: null,
   email: null,
   login: null,
   isAuth: false,
   photos: null,
   captchaUrl: null
}

export const authReducer = (state: UserLoggedType = initialAuthState, action: ActionCreatorsType): UserLoggedType => {
   switch (action.type) {
      case AUTH_ACTIONS_TYPES.SET_AUTH_DATA:
      case AUTH_ACTIONS_TYPES.SET_CAPTCHA_URL:
         return {
            ...state,
            ...action.payload
         }
      case PROFILE_ACTIONS_TYPES.SET_PROFILE_PHOTOS:
         return {
            ...state,
            photos: action.photos
         }
      default: return state
   }
}