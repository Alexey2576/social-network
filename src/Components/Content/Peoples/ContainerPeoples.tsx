import {RootState} from "../../../redux/redax-store";
import {connect} from "react-redux";
import {Peoples} from "./Peoples";
import React, {ComponentType} from 'react';
import {follow, getPeoples, unfollow} from "../../../redux/peoples/peoplesThunk";
import {compose} from "@reduxjs/toolkit";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {
   getCurrentPage,
   getFlag,
   getFollowing_ID,
   getIsFetching,
   getIsFollowing,
   getPageSize,
   getPeoplesFromState,
   getTotalCount
} from "../../../redux/peoples/peoplesSelectors";
import {Spin} from "antd";
import {setCountPeoplesOnPage} from "../../../redux/peoples/peoplesActions";
import {PeopleType} from "../../../api/api";

class ContainerPeoples extends React.PureComponent<ContainerPeoplePropsType> {
   componentDidMount = () => {
      this.props.getPeoples(this.props.pageSize, this.props.currentPage)
   }

   sendMessageCallback = (userInfo: PeopleType) => {}
   setCurrentPageCallback = (currentPage: number) => this.props.getPeoples(this.props.pageSize, currentPage)
   setSizePageCallback = (currentPage: number, size: number) => {this.props.setCountPeoplesOnPage(currentPage, size)}
   followCallback = (people_id: number) => this.props.follow(people_id, !this.props.flag)
   unfollowCallback = (people_id: number) => this.props.unfollow(people_id, !this.props.flag)

   render = () => {
      return (
         <>
            {this.props.isFetching && <Spin size={"large"}/>}
            <Peoples {...this.props}
                     followCallback={this.followCallback}
                     unfollowCallback={this.unfollowCallback}
                     onShowSizeChange={this.setSizePageCallback}
                     setCurrentPageCallback={this.setCurrentPageCallback}
            />
         </>
      )
   }
}

export type ContainerPeoplePropsType = MapStateToPropsType & MapDispatchToPropsType
type MapStateToPropsType = {
   peoples: PeopleType[] | []
   totalCount: number
   currentPage: number
   pageSize: number
   isFetching: boolean
   flag: boolean
   isFollowing: boolean
   following_ID: number[]
}
type MapDispatchToPropsType = {
   follow(people_ID: number, flag: boolean): void
   unfollow(people_ID: number, flag: boolean): void
   getPeoples(countPeoplesOnPage: number, currentPage: number): void
   setCountPeoplesOnPage(currentPage: number, countPeoplesOnPage: number): void
}

const mapStateToProps = (state: RootState): MapStateToPropsType => {
   return {
      peoples: getPeoplesFromState(state),
      totalCount: getTotalCount(state),
      currentPage: getCurrentPage(state),
      pageSize: getPageSize(state),
      isFetching: getIsFetching(state),
      flag: getFlag(state),
      isFollowing: getIsFollowing(state),
      following_ID: getFollowing_ID(state),
   }
}

export default compose<ComponentType>(
   connect(mapStateToProps, {follow, unfollow, getPeoples, setCountPeoplesOnPage}),
   withAuthRedirect,
)(ContainerPeoples)