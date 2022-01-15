import {addMessage, changeValueMessage} from "../../../redux/MessagesReducer";
import {RootState} from "../../../redux/redax-store";
import Messages from "./Messages";
import {connect} from "react-redux";
import {UsersMessagesType} from "./UserMessages/UserMessages";
import {UsersType} from "./User/User";
import React from 'react';

type MapStatePropsType = {
   users: UsersType[]
   usersMessages: UsersMessagesType[]
   changeTextAreaMessage: string
}
type MapDispatchPropsType = {
   addMessage: () => void
   changeValueMessage: (value: string) => void
}
export type ContainerMessagesType = MapStatePropsType & MapDispatchPropsType

const ContainerMessages: React.FC<ContainerMessagesType> = (
   {
      users,
      usersMessages,
      changeTextAreaMessage,
      changeValueMessage,
      addMessage
   }
) => {
   return <Messages users={users}
                    usersMessages={usersMessages}
                    changeTextAreaMessage={changeTextAreaMessage}
                    addMessage={addMessage}
                    changeValueMessage={changeValueMessage}/>
}

const mapStateToProps = (state: RootState) => {
   return {
      users: state.messagesPage.users,
      usersMessages: state.messagesPage.usersMessages,
      changeTextAreaMessage: state.messagesPage.changeTextAreaMessage
   }
}

export default connect(mapStateToProps, {addMessage, changeValueMessage})(ContainerMessages)