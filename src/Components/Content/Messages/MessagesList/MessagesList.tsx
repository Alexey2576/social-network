import React, {FC} from "react";
import {Comment, List} from "antd";

export const MessagesList: FC<MessagesListType> = ({messages}) => (
   <List
      dataSource={messages}
      header={`Messages with NAME`}
      itemLayout="horizontal"
      renderItem={props => <Comment {...props} />}
   />
)
type MessagesListType = {
   messages: MessageType[]
}

export type MessageType = {
   content: any | null
   author: string | null
   avatar: string | null
   datetime: string | null
}
