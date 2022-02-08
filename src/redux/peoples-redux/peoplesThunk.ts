import {
   followSuccess,
   setCurrentPage,
   setIsFetching,
   setPeoples,
   setTotalCount,
   unfollowSuccess
} from "./peoplesActions";
import {ThunkType} from "../redax-store";
import {userAPI} from "../../api/api";
import {followUnfollowFlow} from "../../Components/Commons/Utils/functions-helpers";

export const getPeoples = (countPeoplesOnPage: number, currentPage: number): ThunkType =>
   async (dispatch) => {
      dispatch(setIsFetching(true))
      let data = await userAPI.getUsers(countPeoplesOnPage, currentPage)
      dispatch(setIsFetching(false))
      dispatch(setPeoples(data.items))
      dispatch(setTotalCount(data.totalCount))
      dispatch(setCurrentPage(currentPage))
   }

export const unfollow = (people_ID: number, flag: boolean): ThunkType => async (dispatch) => {
   await followUnfollowFlow(people_ID, flag, dispatch, userAPI.setUnfollow(people_ID), unfollowSuccess)
}
export const follow = (people_ID: number, flag: boolean): ThunkType => async (dispatch) => {
   await followUnfollowFlow(people_ID, flag, dispatch, userAPI.setFollow(people_ID), followSuccess)
}