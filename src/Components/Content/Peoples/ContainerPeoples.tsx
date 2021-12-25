import {AppDispatch, RootState} from "../../../redux/redax-store";
import {connect} from "react-redux";
import {Peoples} from "./Peoples";
import {PeopleType} from "./People/People";
import {followAC, unfollowAC} from "../../../redux/PeoplesReducer";

type MapStatePropsType = {
   peoples: PeopleType[]
}
type MapDispatchPropsType = {
   follow: (people_id: number) => void
   unfollow: (people_id: number) => void
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
      unfollow: (people_id: number) => dispatch(unfollowAC(people_id))
   }
}

export const ContainerPeoples = connect(mapStateToProps, mapDispatchToProps)(Peoples)