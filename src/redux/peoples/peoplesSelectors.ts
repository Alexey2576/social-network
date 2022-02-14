import {RootState} from "../redax-store";
import {PeopleType} from "../../Components/Content/Peoples/People/People";

export const getPeoplesFromState = (state: RootState): PeopleType[] | [] => state.peoplesPage.peoples
export const getTotalCount = (state: RootState): number => state.peoplesPage.totalCount
export const getCurrentPage = (state: RootState): number => state.peoplesPage.currentPage
export const getPageSize = (state: RootState): number => state.peoplesPage.countPeoplesOnPage
export const getIsFetching = (state: RootState): boolean => state.peoplesPage.isFetching
export const getFlag = (state: RootState): boolean => state.peoplesPage.flag
export const getIsFollowing = (state: RootState): boolean => state.peoplesPage.isFollowing
export const getFollowing_ID = (state: RootState): number[] => state.peoplesPage.following_ID