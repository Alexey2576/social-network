import {ActionCreatorsType} from "../redax-store";
import {APP_ACTIONS_TYPES} from "./appAction";

type InitialAppStateType = {
   isInit: boolean
}

const initialAppState: InitialAppStateType = {
   isInit: false
}

export const appReducer = (state: InitialAppStateType = initialAppState, action: ActionCreatorsType): InitialAppStateType => {
   switch (action.type) {
      case APP_ACTIONS_TYPES.APP_INIT_DATA:
         return { ...state, isInit: action.isInit }
      default: return state
   }
}