import {ActionCreatorsType} from "../redax-store";
import {AUTH_ACTIONS_TYPES} from "./authActions";

export type UserLoggedType = {
   id: number | null
   email: string | null
   login: string | null
   isAuth: boolean
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
      default: return state
   }
}