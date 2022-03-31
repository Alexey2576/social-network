import {APP_ACTIONS_TYPES, AppActionCreatorsType} from "./appActions";

export type AppPageType = {
   isInitialized: boolean
}

const initialAuthState: AppPageType = {
   isInitialized: false
}

export const appReducer = (state: AppPageType = initialAuthState, action: AppActionCreatorsType): AppPageType => {
   switch (action.type) {
      case APP_ACTIONS_TYPES.SET_IS_INITIALIZE:
         return {
            ...state,
            ...action.payload
         }
      default:
         return state
   }
}