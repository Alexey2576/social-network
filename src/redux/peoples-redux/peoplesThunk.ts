import {
   followSuccess,
   setCurrentPage,
   setIsFetching,
   setIsFollowing,
   setPeoples,
   setTotalCount,
   unfollowSuccess
} from "./peoplesActions";
import {ActionCreatorsType, AppDispatch, ThunkDispatchType, ThunkType} from "../redax-store";
import {userAPI} from "../../api/api";
import {Dispatch} from "@reduxjs/toolkit";


export const getPeoples = (countPeoplesOnPage: number, currentPage: number): ThunkType =>
   async (dispatch: ThunkDispatchType) => {
      dispatch(setIsFetching(true))
      let data = await userAPI.getUsers(countPeoplesOnPage, currentPage)
      dispatch(setIsFetching(false))
      dispatch(setPeoples(data.items))
      dispatch(setTotalCount(data.totalCount))
      dispatch(setCurrentPage(currentPage))
   }
export const unfollow = (people_ID: number, flag: boolean) => (dispatch: Dispatch<ActionCreatorsType>) => {
   dispatch(setIsFollowing(true, people_ID))
   userAPI.unfollow(people_ID).then(data => {
      if (data.resultCode === 0) {
         dispatch(unfollowSuccess(people_ID, flag))
         dispatch(setIsFollowing(false, people_ID))
      }
   })
}
export const follow = (people_ID: number, flag: boolean) => (dispatch: AppDispatch) => {
   dispatch(setIsFollowing(true, people_ID))
   userAPI.follow(people_ID).then(data => {
      if (data.resultCode === 0) {
         dispatch(followSuccess(people_ID, flag))
         dispatch(setIsFollowing(false, people_ID))
      }
   })
}