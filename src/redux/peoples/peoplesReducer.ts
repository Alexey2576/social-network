import {ActionCreatorsType} from "../redax-store";
import {PeopleType} from "../../Components/Content/Peoples/People/People";
import {PEOPLES_ACTIONS_TYPES} from "./peoplesActions";
import {updateObjectInArray} from "../../Components/Commons/Utils/functions-helpers";

export type PeoplesPageType = {
   peoples: PeopleType[] | []
   totalCount: number
   currentPage: number
   countPeoplesOnPage: number
   isFetching: boolean
   flag: boolean
   isFollowing: boolean
   following_ID: number[]
}

const initialPeoplesPageState: PeoplesPageType = {
   peoples: [],
   totalCount: 0,
   currentPage: 2,
   countPeoplesOnPage: 15,
   isFetching: false,
   flag: false,
   isFollowing: false,
   following_ID: [],
}

export const peoplesReducer = (state: PeoplesPageType = initialPeoplesPageState, action: ActionCreatorsType): PeoplesPageType => {
   switch (action.type) {
      case PEOPLES_ACTIONS_TYPES.SET_PEOPLES:
         return { ...state, peoples: [...action.peoples] }
      case PEOPLES_ACTIONS_TYPES.FOLLOW:
         return {
            ...state,
            peoples: updateObjectInArray(state.peoples, action.people_ID, "id", {followed: true}),
            flag: action.flag
         }
      case PEOPLES_ACTIONS_TYPES.UNFOLLOW:
         return {
            ...state,
            peoples: updateObjectInArray(state.peoples, action.people_ID, "id", {followed: false}),
            flag: action.flag
         }
      case PEOPLES_ACTIONS_TYPES.SET_TOTAL_COUNT:
         return { ...state, totalCount: action.totalCount }
      case PEOPLES_ACTIONS_TYPES.SET_CURRENT_PAGE:
         return { ...state, currentPage: action.currentPage }
      case PEOPLES_ACTIONS_TYPES.SET_IS_FETCHING:
         return { ...state, isFetching: action.isFetching }
      case PEOPLES_ACTIONS_TYPES.SET_IS_FOLLOWING:
         return {
            ...state,
            following_ID: action.isFollowing
               ? [...state.following_ID, action.followUser_ID]
               : state.following_ID.filter(id => id !== action.followUser_ID)
         }
      default: return state
   }
}

