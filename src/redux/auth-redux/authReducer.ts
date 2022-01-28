import {ActionCreatorsType} from "../redax-store";
import {AUTH_ACTIONS_TYPES} from "./authActions";

export type UserLoggedType = {
   id: number | null
   email: string | null
   login: string | null
   isAuth: boolean
}
export type UserLoginType = {
   email: string | null
   password: string | null
   rememberMe: boolean
   captcha: boolean
}

const initialAuthState: UserLoggedType = {
   id: null,
   email: null,
   login: null,
   isAuth: false
}

export const authReducer = (state: UserLoggedType = initialAuthState, action: ActionCreatorsType): UserLoggedType => {
   switch (action.type) {
      case AUTH_ACTIONS_TYPES.SET_AUTH_DATA:
         return {
            ...state,
            ...action.payload
         }
      // case AUTH_ACTIONS_TYPES.SET_LOGIN_DATA:
      //    return {
      //       ...state,
      //    }
      default: return state
   }
}