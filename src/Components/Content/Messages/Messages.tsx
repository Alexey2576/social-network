import React, {FC, memo, useState} from "react";
import moment from 'moment';
import {MessagesList, MessageType} from "./MessagesList/MessagesList";
import {Editor} from "./Editor/Editor";

export const Messages: FC<MessagesType> = memo((props) => {
   const [state, setState] = useState({
      messages: [{
         author: null,
         avatar: null,
         content: null,
         datetime: null,
      }
      ] as MessageType[],
      submitting: false,
      value: '',
   })



   const handleSubmit = () => {
      if (!state.value) {
         return;
      }

      setState({
         ...state,
         submitting: true,
      });

      setTimeout(() => {
         setState({
            submitting: false,
            value: '',
            messages: [
               ...state.messages,
               {
                  author: 'Han Solo',
                  avatar: 'https://joeschmoe.io/api/v1/random',
                  content: <p>{state.value}</p>,
                  datetime: moment().fromNow(),
               },
            ],
         });
      }, 1000);
   }

   const handleChange = (e: any) => {
      setState({
         ...state,
         value: e.target.value,
      });
   };

   const {messages, submitting, value} = state;
   return (
      <>
         {messages.length > 0 && <MessagesList messages={messages}/>}
         <Editor
            onChange={handleChange}
            onSubmit={handleSubmit}
            submitting={submitting}
            value={value}
         />
      </>
   );
})

export type MessagesType = {
   addMessageCallback(message: string): void
}


