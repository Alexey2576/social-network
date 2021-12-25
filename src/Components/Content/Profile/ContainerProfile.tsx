import {addPostAC, changeValuePostAC} from "../../../redux/ProfileReducer";
import {AppDispatch, RootState} from "../../../redux/redax-store";
import Profile from "./Profile";
import {connect} from "react-redux";
import {PostsType} from "./Post/Post";

type MapStatePropsType = {
   posts: PostsType[]
   changeTextAreaPost: string
}
type MapDispatchPropsType = {
   addPostCallback: () => void
   changeValueCallback: (value: string) => void
}
export type ContainerProfileType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: RootState): MapStatePropsType => {
   return {
      posts: state.profilePage.posts,
      changeTextAreaPost: state.profilePage.changeTextAreaPost
   }
}

const mapDispatchToProps = (dispatch: AppDispatch): MapDispatchPropsType => {
   return {
      addPostCallback: () => dispatch(addPostAC()),
      changeValueCallback: (value: string) => dispatch(changeValuePostAC(value))
   }
}

export const ContainerProfile = connect(mapStateToProps, mapDispatchToProps)(Profile)