import {connect} from "react-redux";
import {Messages} from "./Messages";
import {compose} from "@reduxjs/toolkit";
import {withRouter} from "../../../hoc/withRouter";
import {RootState} from "../../../redux/redax-store";
import React, {Component, ComponentType, } from 'react';
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {sendMessage} from "../../../redux/messages/messagesThunk";
import {UsersMessagesType} from "../../../redux/messages/MessagesReducer";

class ContainerMessages extends Component<ContainerMessagesPropsType> {

   shouldComponentUpdate = (nextProps: Readonly<ContainerMessagesPropsType>) => {
      const id = this.props.userIdFromURL
      const nextId = nextProps.userIdFromURL
      return id !== nextId;
   }

   userIdFromURL = this.props.userIdFromURL
   sendMessageCallback = async (message: string) => {
      return await this.props.sendMessage(this.userIdFromURL as string, message)
   }

   render() {
      return (
         <Messages userIdFromURL={this.userIdFromURL as string}
            messages={this.props.usersMessages[this.userIdFromURL as string]}
            sendMessageCallback={this.sendMessageCallback}
         />
      )
   }
}

export type ContainerMessagesPropsType = MapStateToPropsType & MapDispatchToPropsType
type MapStateToPropsType = {
   userIdFromURL?: string
   usersMessages: UsersMessagesType
}
type MapDispatchToPropsType = {
   sendMessage(userId: string, message: string): Promise<any>
}

const mapStateToProps = (state: RootState): MapStateToPropsType => {
   return {
      usersMessages: state.messagesPage.usersMessages,
   }
}

export default compose<ComponentType>(
   connect(mapStateToProps, {sendMessage}),
   withRouter,
   withAuthRedirect,
)(ContainerMessages)