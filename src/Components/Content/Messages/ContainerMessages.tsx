import {addMessageAC, changeValueMessageAC} from "../../../redux/MessagesReducer";
import {AppDispatch, RootState} from "../../../redux/redax-store";
import Messages from "./Messages";
import {connect} from "react-redux";
import {UsersMessagesType} from "./UserMessages/UserMessages";
import {UsersType} from "./User/User";

type MapStatePropsType = {
   users: UsersType[]
   usersMessages: UsersMessagesType[]
   changeTextAreaMessage: string
}
type MapDispatchPropsType = {
   addMessageCallback: () => void
   changeValueCallback: (value: string) => void
}
export type ContainerMessagesType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: RootState) => {
   return {
      users: state.messagesPage.users,
      usersMessages: state.messagesPage.usersMessages,
      changeTextAreaMessage: state.messagesPage.changeTextAreaMessage
   }
}

const mapDispatchToProps = (dispatch: AppDispatch) => {
   return {
      addMessageCallback: () => dispatch(addMessageAC()),
      changeValueCallback: (value: string) => dispatch(changeValueMessageAC(value))
   }
}

export const ContainerMessages = connect(mapStateToProps, mapDispatchToProps)(Messages)