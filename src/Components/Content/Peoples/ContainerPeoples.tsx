import {AppDispatch, RootState} from "../../../redux/redax-store";
import {connect} from "react-redux";
import {Peoples} from "./Peoples";
import {PeopleType} from "./People/People";
import {
   followAC,
   setCountPagesAC,
   setCurrentPageAC,
   setPeoplesAC,
   setTotalCountAC,
   unfollowAC
} from "../../../redux/PeoplesReducer";

type MapStatePropsType = {
   peoples: PeopleType[]
   totalCount: number
   countPeoplesOnPage: number
   currentPage: number
   countPages: number
}
type MapDispatchPropsType = {
   follow: (people_id: number) => void
   unfollow: (people_id: number) => void
   setPeoples: (peoples: PeopleType[]) => void
   setTotalCount: (totalCount: number) => void
   setCurrentPage: (currentPage: number) => void
   setCountPages: () => void
}
export type ContainerPeoplesType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: RootState): MapStatePropsType => {
   return {
      peoples: state.peoplesPage.peoples,
      totalCount: state.peoplesPage.totalCount,
      countPeoplesOnPage: state.peoplesPage.countPeoplesOnPage,
      currentPage: state.peoplesPage.currentPage,
      countPages: state.peoplesPage.countPages
   }
}

const mapDispatchToProps = (dispatch: AppDispatch): MapDispatchPropsType => {
   return {
      follow: (people_id: number) => dispatch(followAC(people_id)),
      unfollow: (people_id: number) => dispatch(unfollowAC(people_id)),
      setPeoples: (peoples: PeopleType[]) => dispatch(setPeoplesAC(peoples)),
      setTotalCount: (totalCount: number) => dispatch(setTotalCountAC(totalCount)),
      setCurrentPage: (currentPage: number) => dispatch(setCurrentPageAC(currentPage)),
      setCountPages: () => dispatch(setCountPagesAC())
   }
}

export const ContainerPeoples = connect(mapStateToProps, mapDispatchToProps)(Peoples)