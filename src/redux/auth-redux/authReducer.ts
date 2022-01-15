import {ActionCreatorsType} from "../redax-store";
import {AUTH_ACTIONS_TYPES} from "./authActions";

export type UserLoggedType = {
   id: number | null
   email: string | null
   login: string | null
   isAuth: boolean
}

const initialAuthState: UserLoggedType = {
   id: null,
   email: null,
   login: null,
   isAuth: false
}

export const authReducer = (state: UserLoggedType = initialAuthState, action: ActionCreatorsType): UserLoggedType => {
   switch (action.type) {
      case AUTH_ACTIONS_TYPES.SET_AUTH_DATA: {
         return {
            ...state,
            ...action.payload
         }
      }
      default: return state
   }
}