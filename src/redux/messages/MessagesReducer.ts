import {ActionCreatorsType} from "../redax-store";
import {MESSAGES_ACTIONS_TYPES} from "./messagesActions";

const initialMessagesPageState = {
   users: [
      {
         userId: "user1",
         author: "bla bla",
         avatar: ""
      }
   ] as UserType[],
   usersMessages: {
      ["user1"]: [
         {
            author: "",
            content: "We supply a serlity design resources (Sketch and Axure).",
            avatar: "",
            datetime: ""
         },
         {
            author: "",
            content: "We supply a series of design principles, practical pattees (Sketch and Axure).",
            avatar: "",
            datetime: ""
         },
         {
            author: "",
            content: "We supply a series of design principles, practical patterns andsources (Sketch and Axure).",
            avatar: "",
            datetime: ""
         },
      ],
   } as UsersMessagesType,
}

export type MessagesPageType = typeof initialMessagesPageState

export const messagesReducer = (state: MessagesPageType = initialMessagesPageState, action: ActionCreatorsType): MessagesPageType => {
   switch (action.type) {
      case MESSAGES_ACTIONS_TYPES.ADD_MESSAGE:
         return {
            ...state,
            users: [
               ...state.users,
               {
                  userId: action.payload.id,
                  author: action.payload.name,
                  avatar: action.payload.photo,
               }
            ],
            usersMessages: {
               ...state.usersMessages,
               [action.payload.id]: []
            }
         }
      case MESSAGES_ACTIONS_TYPES.SEND_MESSAGE:
         if (action.payload.id) {
            return {
               ...state,
               usersMessages: {
                  ...state.usersMessages,
                  [action.payload.id]: [...state.usersMessages[action.payload.id], {
                     author: action.payload.message.author,
                     content: action.payload.message.content,
                     avatar: action.payload.message.avatar,
                     datetime: action.payload.message.datetime
                  }]
               }
            }
         } else {
            return {
               ...state
            }
         }
      default:
         return state
   }
}

export type UserType = {
   userId: string
   author: string
   avatar: string
}

export type UsersMessagesType = {
   [userId: string]: MessageType[]
}

export type MessageType = {
   content: any | null
   author: string | null
   avatar: string | null
   datetime: string | null
}

