import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppDispatch, RootState} from "../../redux/redax-store";
import {getAuthData} from "../../redux/auth-redux/authThunk";

type HeaderPropsType = MapStateToPropsType & MapDispatchToPropsType


class ContainerHeader extends React.Component<HeaderPropsType, AppDispatch> {
   componentDidMount = () => this.props.getAuthData()
   render = () => <Header {...this.props} />
}

type MapStateToPropsType = {
   id: number | null
   email: string | null
   login: string | null
   isAuth: boolean
}
type MapDispatchToPropsType = {
   getAuthData(): void
}

const mapStateToProps = (state: RootState): MapStateToPropsType => {
   return {
      id: state.authState.id,
      email: state.authState.email,
      isAuth: state.authState.isAuth,
      login: state.authState.login
   }
}

export default connect(mapStateToProps, { getAuthData })(ContainerHeader)