import {
   followSuccess,
   setCurrentPage,
   setPeoples,
   setTotalCount,
   unfollowSuccess
} from "./peoplesActions";
import {ThunkDispatchType, ThunkType} from "../redax-store";
import {userAPI} from "../../api/api";
import {followUnfollowFlow} from "../../Components/Commons/Utils/functions-helpers";

export const getPeoples = (countPeoplesOnPage: number, currentPage: number): ThunkType => async (dispatch: ThunkDispatchType) => {
   try {
      let data = await userAPI.getUsers(countPeoplesOnPage, currentPage)
      dispatch(setPeoples(data.items))
      dispatch(setTotalCount(data.totalCount))
      dispatch(setCurrentPage(currentPage))
   } catch (e) {
      console.log("peoplesThunk -> getPeoples ", e)
   }
}

export const unfollow = (people_ID: number, flag: boolean): ThunkType => async (dispatch: ThunkDispatchType) => {
   await followUnfollowFlow(people_ID, flag, dispatch, userAPI.setUnfollow(people_ID), unfollowSuccess)
}
export const follow = (people_ID: number, flag: boolean): ThunkType => async (dispatch: ThunkDispatchType) => {
   await followUnfollowFlow(people_ID, flag, dispatch, userAPI.setFollow(people_ID), followSuccess)
}