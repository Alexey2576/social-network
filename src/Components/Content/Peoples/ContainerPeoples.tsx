import {AppDispatch, RootState} from "../../../redux/redax-store";
import {useDispatch, useSelector} from "react-redux";
import {Peoples} from "./Peoples";
import React, {useEffect, useMemo} from 'react';
import axios from "axios";
import {Preloader} from "../../Preloader/Preloader";
import {PeoplesPageType} from "../../../redux/peoples-redux/peoplesReducer";
import {
   follow,
   setCurrentPage,
   setIsFetching,
   setPeoples,
   setTotalCount,
   unfollow
} from "../../../redux/peoples-redux/peoplesActions";
import {selectAllPropsPeoples} from "../../../redux/peoples-redux/peoplesSelectors";
import {userAPI} from "../../../api/api";

export const ContainerPeoples: React.FC = () => {
   const {
      peoples,
      totalCount,
      currentPage,
      countPeoplesOnPage,
      isFetching,
      flag
   } = useSelector<RootState, PeoplesPageType>(selectAllPropsPeoples)
   const dispatch = useDispatch<AppDispatch>()
   useEffect(() => {
      dispatch(setIsFetching(true))
      userAPI.getUsers(countPeoplesOnPage, currentPage).then(data => {
            dispatch(setIsFetching(false))
            dispatch(setPeoples(data.items))
            dispatch(setTotalCount(data.totalCount))
         })
   }, [])

   useEffect(() => {
      setIsFetching(true)
      userAPI.getUsers(countPeoplesOnPage, currentPage).then(data => {
            dispatch(setIsFetching(false))
            dispatch(setPeoples(data.items))
         })
   }, [currentPage, countPeoplesOnPage, flag])

   const followCallback = (people_id: number) => dispatch(follow(people_id, !flag))
   const unfollowCallback = (people_id: number) => dispatch(unfollow(people_id, !flag))
   const setCurrentPageCallback = (currentPage: number) => dispatch(setCurrentPage(currentPage))

   return (
      <>
         {isFetching && <Preloader/>}
         <Peoples peoples={peoples}
                  totalCount={totalCount}
                  countPeoplesOnPage={countPeoplesOnPage}
                  followCallback={followCallback}
                  unfollowCallback={unfollowCallback}
                  setCurrentPageCallback={setCurrentPageCallback}
         />
      </>)
};