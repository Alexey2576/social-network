import {AppDispatch, RootState} from "../../../redux/redax-store";
import {connect} from "react-redux";
import {Peoples} from "./Peoples";
import React, {ComponentType} from 'react';
import {Preloader} from "../../Preloader/Preloader";
import {PeopleType} from "./People/People";
import {follow, getPeoples, unfollow} from "../../../redux/peoples-redux/peoplesThunk";
import {compose} from "@reduxjs/toolkit";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";

export type ContainerPeoplePropsType = MapStateToPropsType & MapDispatchToPropsType

class ContainerPeoples extends React.Component<ContainerPeoplePropsType, AppDispatch> {
   componentDidMount = () => {
      this.props.getPeoples(this.props.countPeoplesOnPage, this.props.currentPage)
   }

   setCurrentPageCallback = (currentPage: number) => this.props.getPeoples(this.props.countPeoplesOnPage, currentPage)
   followCallback = (people_id: number) => this.props.follow(people_id, !this.props.flag)
   unfollowCallback = (people_id: number) => this.props.unfollow(people_id, !this.props.flag)

   render = () => {
      return (
         <>
            {this.props.isFetching && <Preloader/>}
            <Peoples {...this.props}
                     followCallback={this.followCallback}
                     unfollowCallback={this.unfollowCallback}
                     setCurrentPageCallback={this.setCurrentPageCallback}
            />
         </>
      )
   }
}

type MapStateToPropsType = {
   peoples: PeopleType[] | []
   totalCount: number
   currentPage: number
   countPeoplesOnPage: number
   isFetching: boolean
   flag: boolean
   isFollowing: boolean
   following_ID: number[]
}
type MapDispatchToPropsType = {
   follow(people_ID: number, flag: boolean): void
   unfollow(people_ID: number, flag: boolean): void
   getPeoples(countPeoplesOnPage: number, currentPage: number): void
}

const mapStateToProps = (state: RootState): MapStateToPropsType => {
   return {
      peoples: state.peoplesPage.peoples,
      totalCount: state.peoplesPage.totalCount,
      currentPage: state.peoplesPage.currentPage,
      countPeoplesOnPage: state.peoplesPage.countPeoplesOnPage,
      isFetching: state.peoplesPage.isFetching,
      flag: state.peoplesPage.flag,
      isFollowing: state.peoplesPage.isFollowing,
      following_ID: state.peoplesPage.following_ID,
   }
}

export default compose<ComponentType>(
   connect(mapStateToProps, {follow, unfollow, getPeoples}),
   withAuthRedirect,
)(ContainerPeoples)