import {AppDispatch, RootState} from "../../../redux/redax-store";
import {Profile} from "./Profile";
import React from "react";
import {connect} from "react-redux";
import {ProfileUserInfoType} from "../../../redux/profile-redux/profileReducer";
import {PostsType} from "./Post/Post";
import {addPost, changeValuePost, getProfileUserInfo} from "../../../redux/profile-redux/profileThunk";
import {useParams} from "react-router-dom";

export type ContainerProfilePropsType = MapStateToPropsType & MapDispatchToPropsType

class ContainerProfile extends React.Component<ContainerProfilePropsType, AppDispatch> {
   componentDidMount = () => {
      // @ts-ignore
      let userID = this.props.userID
      if (!userID) userID = "2"
      this.props.getProfileUserInfo(userID)

   }

   changeValuePostCallback = (newChangeText: string) => this.props.changeValuePost(newChangeText)
   addPostCallback = () => this.props.addPost()

   render = () => {
      return (
         <Profile {...this.props}
                  addPostCallback={this.addPostCallback}
                  changeValuePostCallback={this.changeValuePostCallback}
         />
      )
   }
}

type MapStateToPropsType = {
   profileUserInfo: ProfileUserInfoType | null
   posts: PostsType[]
   changeTextAreaPost: string
}
type MapDispatchToPropsType = {
   getProfileUserInfo(userID: string): void
   addPost(): void
   changeValuePost(newChangeText: string): void
}

const mapStateToProps = (state: RootState): MapStateToPropsType  => {
  return {
     profileUserInfo: state.profilePage.profileUserInfo,
     posts: state.profilePage.posts,
     changeTextAreaPost: state.profilePage.changeTextAreaPost
  }
}

function withRouter(Component: any) {
   function ComponentWithRouterProp(props: any) {
      // let location = useLocation();
      // let navigate = useNavigate();
      let {userID} = useParams();
      return (
         <Component {...props} userID={userID} />
      );
   }

   return ComponentWithRouterProp;
}

export default connect(mapStateToProps, { getProfileUserInfo, addPost, changeValuePost })(withRouter(ContainerProfile))

