import {AppDispatch, RootState} from "../../../redux/redax-store";
import Messages from "./Messages";
import React from 'react';
import {connect} from "react-redux";
import {UsersMessagesType} from "./UserMessages/UserMessages";
import {UsersType} from "./User/User";
import {addMessage, changeValueMessage} from "../../../redux/messages-redux/messagesThunk";

export type ContainerMessagesPropsType = MapStateToPropsType & MapDispatchToPropsType
class ContainerMessages extends React.Component<ContainerMessagesPropsType, AppDispatch> {
   addMessageCallback = () => this.props.addMessage()
   changeValueMessageCallback = (newChangeText: string) => this.props.changeValueMessage(newChangeText)

   render() {
      return (
         <Messages users={this.props.users}
                   usersMessages={this.props.usersMessages}
                   changeTextAreaMessage={this.props.changeTextAreaMessage}
                   addMessageCallback={this.addMessageCallback}
                   changeValueMessageCallback={this.changeValueMessageCallback}
         />
      )
   }
}

type MapStateToPropsType = {
   users: UsersType[]
   usersMessages: UsersMessagesType[]
   changeTextAreaMessage: string
}
type MapDispatchToPropsType = {
   addMessage(): void
   changeValueMessage(newChangeText: string): void
}

const mapStateToProps = (state: RootState): MapStateToPropsType => {
   return {
      users: state.messagesPage.users,
      usersMessages: state.messagesPage.usersMessages,
      changeTextAreaMessage: state.messagesPage.changeTextAreaMessage,
   }
}

export default connect(mapStateToProps, { addMessage, changeValueMessage })(ContainerMessages)