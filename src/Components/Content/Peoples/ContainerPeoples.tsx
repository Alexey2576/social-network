import {AppDispatch, RootState} from "../../../redux/redax-store";
import {connect} from "react-redux";
import {Peoples} from "./Peoples";
import {PeopleType} from "./People/People";
import {followAC, setPeoplesAC, unfollowAC} from "../../../redux/PeoplesReducer";

type MapStatePropsType = {
   peoples: PeopleType[]
}
type MapDispatchPropsType = {
   follow: (people_id: number) => void
   unfollow: (people_id: number) => void
   setPeoples: (peoples: PeopleType[]) => void
}
export type ContainerPeoplesType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: RootState): MapStatePropsType => {
   return {
      peoples: state.peoplesPage.peoples
   }
}

const mapDispatchToProps = (dispatch: AppDispatch): MapDispatchPropsType => {
   return {
      follow: (people_id: number) => dispatch(followAC(people_id)),
      unfollow: (people_id: number) => dispatch(unfollowAC(people_id)),
      setPeoples: (peoples: PeopleType[]) => dispatch(setPeoplesAC(peoples))
   }
}

export const ContainerPeoples = connect(mapStateToProps, mapDispatchToProps)(Peoples)