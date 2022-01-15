import {ActionCreatorsType} from "./redax-store";
import {PeopleType} from "../Components/Content/Peoples/People/People";

const initialPeoplesPageState = {
   peoples: [],
   totalCount: 0,
   currentPage: 2,
   countPeoplesOnPage: 15,
   isFetching: false
}

export type PeoplesPageType = {
   peoples: PeopleType[] | []
   totalCount: number
   currentPage: number
   countPeoplesOnPage: number
   isFetching: boolean
}

export const peoplesReducer = (state: PeoplesPageType = initialPeoplesPageState, action: ActionCreatorsType): PeoplesPageType => {
   switch (action.type) {
      case "SET_PEOPLES": {
         return {
            ...state,
            peoples: [...action.peoples]
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
      case "SET_TOTAL_COUNT": {
         return {
            ...state,
            totalCount: action.totalCount
         }
      }
      case "SET_CURRENT_PAGE": {
         return {
            ...state,
            currentPage: action.currentPage
         }
      }
      case "SET_IS_FETCHING": {
         return {
            ...state,
            isFetching: action.isFetching
         }
      }
      default:
         return state
   }
}

export const follow = (people_ID: number) => ({type: 'FOLLOW', people_ID} as const)
export const unfollow = (people_ID: number) => ({type: 'UNFOLLOW', people_ID} as const)
export const setPeoples = (peoples: PeopleType[]) => ({type: 'SET_PEOPLES', peoples} as const)
export const setTotalCount = (totalCount: number) => ({type: 'SET_TOTAL_COUNT', totalCount} as const)
export const setCurrentPage = (currentPage: number) => ({type: 'SET_CURRENT_PAGE', currentPage} as const)
export const setIsFetching = (isFetching: boolean) => ({type: 'SET_IS_FETCHING', isFetching} as const)
