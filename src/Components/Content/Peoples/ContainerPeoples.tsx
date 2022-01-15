import {RootState} from "../../../redux/redax-store";
import {connect} from "react-redux";
import {Peoples} from "./Peoples";
import {PeopleType} from "./People/People";
import {
   follow,
   setCurrentPage,
   setIsFetching,
   setPeoples,
   setTotalCount,
   unfollow
} from "../../../redux/PeoplesReducer";

import React, {useEffect} from 'react';
import axios from "axios";
import {Preloader} from "../../Preloader/Preloader";

type MapStatePropsType = {
   peoples: PeopleType[]
   totalCount: number
   countPeoplesOnPage: number
   currentPage: number
   isFetching: boolean
}
type MapDispatchPropsType = {
   follow: (people_id: number) => void
   unfollow: (people_id: number) => void
   setPeoples: (peoples: PeopleType[]) => void
   setTotalCount: (totalCount: number) => void
   setCurrentPage: (currentPage: number) => void
   setIsFetching: (isFetching: boolean) => void
}
export type ContainerPeoplesType = MapStatePropsType & MapDispatchPropsType

const ContainerPeoples: React.FC<ContainerPeoplesType> = (
   {
      peoples,
      countPeoplesOnPage,
      setPeoples,
      setTotalCount,
      totalCount,
      currentPage,
      unfollow,
      follow,
      setCurrentPage,
      setIsFetching,
      isFetching
   }
) => {
   useEffect(() => {
      setIsFetching(true)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${countPeoplesOnPage}&page=${currentPage}`)
         .then(response => {
            setIsFetching(false)
            setPeoples(response.data.items)
            setTotalCount(response.data.totalCount)
         })
   }, [])
   useEffect(() => {
      setIsFetching(true)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${countPeoplesOnPage}&page=${currentPage}`)
         .then(response => {
            setIsFetching(false)
            setPeoples(response.data.items)
         })
   }, [currentPage, countPeoplesOnPage])
   return <>
      { isFetching && <Preloader/>}
      <Peoples peoples={peoples}
               totalCount={totalCount}
               countPeoplesOnPage={countPeoplesOnPage}
               follow={follow}
               unfollow={unfollow}
               setCurrentPage={setCurrentPage}/></>
};


const mapStateToProps = (state: RootState): MapStatePropsType => {
   return {
      peoples: state.peoplesPage.peoples,
      totalCount: state.peoplesPage.totalCount,
      countPeoplesOnPage: state.peoplesPage.countPeoplesOnPage,
      currentPage: state.peoplesPage.currentPage,
      isFetching: state.peoplesPage.isFetching
   }
}

export default connect(mapStateToProps, {follow, unfollow, setPeoples, setTotalCount, setCurrentPage, setIsFetching})(ContainerPeoples)