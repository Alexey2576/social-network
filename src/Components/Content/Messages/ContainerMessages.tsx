import {RootState} from "../../../redux/redax-store";
import {Messages} from "./Messages";
import React, {ComponentType} from 'react';
import {connect} from "react-redux";
import {UsersMessagesType} from "./UserMessages/UserMessages";
import {UsersType} from "./User/User";
import {addMessage, changeValueMessage} from "../../../redux/messages-redux/messagesThunk";
import {compose} from "@reduxjs/toolkit";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";

class ContainerMessages extends React.PureComponent<ContainerMessagesPropsType> {

   addMessageCallback = (message: string) => this.props.addMessage(message)

   render() {
      return (
         <Messages users={this.props.users}
                   usersMessages={this.props.usersMessages}
                   addMessageCallback={this.addMessageCallback}
         />
      )
   }
}

export type ContainerMessagesPropsType = MapStateToPropsType & MapDispatchToPropsType
type MapStateToPropsType = {
   users: UsersType[]
   usersMessages: UsersMessagesType[]
}
type MapDispatchToPropsType = {
   addMessage(message:string): void
   changeValueMessage(newChangeText: string): void
}

const mapStateToProps = (state: RootState): MapStateToPropsType => {
   return {
      users: state.messagesPage.users,
      usersMessages: state.messagesPage.usersMessages,
   }
}

export default compose<ComponentType>(
   connect(mapStateToProps, { addMessage, changeValueMessage }),
   withAuthRedirect,
)(ContainerMessages)