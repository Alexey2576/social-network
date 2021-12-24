import React from "react";
import {addMessageAC, changeValueMessageAC, MessagesPageType} from "../../../redux/MessagesReducer";
import {AppDispatch, DispatchType, RootState} from "../../../redux/redax-store";
import Messages from "./Messages";
import {connect} from "react-redux";

type ContainerMessagesType = {
   messagesPage: MessagesPageType
   dispatch: (action: DispatchType) => void
}

const mapStateToProps = (state: RootState) => {
   return {
      users: state.messagesPages.users,
      usersMessages: state.messagesPages.usersMessages,
      changeTextAreaMessage: state.messagesPages.changeTextAreaMessage
   }
}

const mapDispatchToProps = (dispatch: AppDispatch) => {
   return {
      addMessageCallback: () => dispatch(addMessageAC()),
      changeValueCallback: (value: string) => dispatch(changeValueMessageAC(value))
   }
}

export const ContainerMessages: React.FC<ContainerMessagesType> = connect(mapStateToProps, mapDispatchToProps)(Messages)