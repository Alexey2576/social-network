import {ActionCreatorsType} from "../redax-store";
import {PeopleType} from "../../Components/Content/Peoples/People/People";
import {PEOPLES_ACTIONS_TYPES} from "./peoplesActions";

export type PeoplesPageType = {
   peoples: PeopleType[] | []
   totalCount: number
   currentPage: number
   countPeoplesOnPage: number
   isFetching: boolean
}

const initialPeoplesPageState: PeoplesPageType = {
   peoples: [],
   totalCount: 0,
   currentPage: 2,
   countPeoplesOnPage: 15,
   isFetching: false
}

export const peoplesReducer = (state: PeoplesPageType = initialPeoplesPageState, action: ActionCreatorsType): PeoplesPageType => {
   switch (action.type) {
      case PEOPLES_ACTIONS_TYPES.SET_PEOPLES:
         return { ...state, peoples: [...action.peoples] }
      case PEOPLES_ACTIONS_TYPES.FOLLOW:
         return {
            ...state,
            peoples: state.peoples.map(p => p.id === action.people_ID ? {...p, followed: true} : p)
         }
      case PEOPLES_ACTIONS_TYPES.UNFOLLOW:
         return {
            ...state,
            peoples: state.peoples.map(p => p.id === action.people_ID ? {...p, followed: false} : p)
         }
      case PEOPLES_ACTIONS_TYPES.SET_TOTAL_COUNT:
         return { ...state, totalCount: action.totalCount }
      case PEOPLES_ACTIONS_TYPES.SET_CURRENT_PAGE:
         return { ...state, currentPage: action.currentPage }
      case PEOPLES_ACTIONS_TYPES.SET_IS_FETCHING:
         return { ...state, isFetching: action.isFetching }
      default: return state
   }
}

