import {DispatchType} from "./redax-store";
import {PeopleType} from "../Components/Content/Peoples/People/People";

const initialPeoplesPageState = {
   peoples: []
}

export type PeoplesPageType = {
   peoples: PeopleType[] | []
}

export const peoplesReducer = (state: PeoplesPageType = initialPeoplesPageState, action: DispatchType): PeoplesPageType => {
   switch (action.type) {
      case "SET_PEOPLES": {
         return {
            ...state,
            peoples: [...state.peoples, ...action.peoples]
         }
      }
      case "FOLLOW": {
         return {
            ...state,
            peoples: state.peoples.map(p => p.id === action.people_ID ? {...p, followed: true} : p)
         }
      }
      case "UNFOLLOW": {
         return {
            ...state,
            peoples: state.peoples.map(p => p.id === action.people_ID ? {...p, followed: false} : p)
         }
      }
      default:
         return state
   }
}

export const followAC = (people_ID: number) => ({type: 'FOLLOW', people_ID} as const)
export const unfollowAC = (people_ID: number) => ({type: 'UNFOLLOW', people_ID} as const)
export const setPeoplesAC = (peoples: PeopleType[]) => ({type: 'SET_PEOPLES', peoples} as const)