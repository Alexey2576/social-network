import {AppDispatch, RootState} from "../../../redux/redax-store";
import {connect} from "react-redux";
import {Peoples} from "./Peoples";
import {PeopleType} from "./People/People";

type MapStatePropsType = {
   peoples: PeopleType[]
}
type MapDispatchPropsType = {

}
export type ContainerPeoplesType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: RootState): MapStatePropsType => {
   return {
      peoples: state.peoplesPage.peoples
   }
}

const mapDispatchToProps = (dispatch: AppDispatch): MapDispatchPropsType => {
   return {

   }
}

export const ContainerPeoples = connect(mapStateToProps, mapDispatchToProps)(Peoples)