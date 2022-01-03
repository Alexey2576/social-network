import {DispatchType} from "./redax-store";
import {PeopleType} from "../Components/Content/Peoples/People/People";

const initialPeoplesPageState = {
   peoples: [],
   totalCount: 0,
   currentPage: 2,
   countPeoplesOnPage: 5,
   countPages: 10
}

export type PeoplesPageType = {
   peoples: PeopleType[] | []
   totalCount: number
   currentPage: number
   countPeoplesOnPage: number
   countPages: number
}

export const peoplesReducer = (state: PeoplesPageType = initialPeoplesPageState, action: DispatchType): PeoplesPageType => {
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
      case "SET_COUNT_PAGES": {
         return {
            ...state,
            countPages: Math.ceil(state.totalCount / state.countPeoplesOnPage)
         }
      }
      default:
         return state
   }
}

export const followAC = (people_ID: number) => ({type: 'FOLLOW', people_ID} as const)
export const unfollowAC = (people_ID: number) => ({type: 'UNFOLLOW', people_ID} as const)
export const setPeoplesAC = (peoples: PeopleType[]) => ({type: 'SET_PEOPLES', peoples} as const)
export const setTotalCountAC = (totalCount: number) => ({type: 'SET_TOTAL_COUNT', totalCount} as const)
export const setCurrentPageAC = (currentPage: number) => ({type: 'SET_CURRENT_PAGE', currentPage} as const)
export const setCountPagesAC = () => ({type: 'SET_COUNT_PAGES'} as const)