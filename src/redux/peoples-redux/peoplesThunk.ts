import {
   followSuccess,
   setCurrentPage,
   setIsFetching,
   setIsFollowing,
   setPeoples, setTotalCount,
   unfollowSuccess
} from "./peoplesActions";
import {ActionCreatorsType, AppDispatch, RootState} from "../redax-store";
import {userAPI} from "../../api/api";
import {ThunkAction} from "redux-thunk";

type ThunkType = ThunkAction<Promise<void>, RootState, unknown, ActionCreatorsType>

export const getPeoples = (countPeoplesOnPage: number, currentPage: number): ThunkType =>
   async (dispatch) => {
      dispatch(setCurrentPage(currentPage))
      dispatch(setIsFetching(true))
      let data = await userAPI.getUsers(countPeoplesOnPage, currentPage)
      dispatch(setIsFetching(false))
      dispatch(setPeoples(data.items))
      dispatch(setTotalCount(data.totalCount))

   }
export const unfollow = (people_ID: number, flag: boolean) => (dispatch: AppDispatch) => {
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