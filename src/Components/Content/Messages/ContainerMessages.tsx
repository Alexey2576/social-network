import {connect} from "react-redux";
import {Messages} from "./Messages";
import {compose} from "@reduxjs/toolkit";
import {RootState} from "../../../redux/redax-store";
import React, {ComponentType, PureComponent} from 'react';
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {addMessage, changeValueMessage} from "../../../redux/messages/messagesThunk";

class ContainerMessages extends PureComponent<ContainerMessagesPropsType> {

   addMessageCallback = (message: string) => this.props.addMessage(message)

   render() {
      return <Messages addMessageCallback={this.addMessageCallback} />
   }
}

export type ContainerMessagesPropsType = MapStateToPropsType & MapDispatchToPropsType
type MapStateToPropsType = {
   // users: UsersType[]
   // usersMessages: UsersMessagesType[]
}
type MapDispatchToPropsType = {
   addMessage(message: string): void
   changeValueMessage(newChangeText: string): void
}

const mapStateToProps = (state: RootState): MapStateToPropsType => {
   return {
      // users: getUsers(state),
      // usersMessages: getUsersMessages(state),
   }
}

export default compose<ComponentType>(
   connect(mapStateToProps, {addMessage, changeValueMessage}),
   withAuthRedirect,
)(ContainerMessages)