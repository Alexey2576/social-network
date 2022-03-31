import {ActionCreatorsType} from "../redax-store";
import {MESSAGES_ACTIONS_TYPES} from "./messagesActions";
import {v1} from 'uuid';
import {MessagesType} from "../../Components/Content/Messages/Messages";

const initialMessagesPageState = {
   users: [
      {id: "user1", name: "Alex", ava: "https://vraki.net/sites/default/files/inline/images/30_55.jpg"},
      {id: "user2", name: "Sasha", ava: "https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg"},
      {id: "user3", name: "Sveta", ava: "https://vraki.net/sites/default/files/inline/images/1_6.png"},
      {id: "user4", name: "Yana", ava: "https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-2.jpg"},
      {id: "user5", name: "Valera", ava: "https://vraki.net/sites/default/files/mood/m.jpg"}
   ] as UserType[],
   usersMessages: {
      ["user1"]: [
         {userId: "user1", message: "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure)."},
         {message: "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure)."},
         {message: "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure)."},
         {userId: "user1", message: "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure)."},
      ],
      // ["user2"]: [],
      // ["user3"]: [],
      // ["user4"]: [],
      // ["user5"]: [],
   } as UsersMessagesType,
}

export type MessagesPageType = typeof initialMessagesPageState

export const messagesReducer = (state: MessagesPageType = initialMessagesPageState, action: ActionCreatorsType): MessagesPageType => {
   switch (action.type) {
      case MESSAGES_ACTIONS_TYPES.ADD_MESSAGE:
         return {
            ...state,
         }
      default:
         return state
   }
}

type UserType = {
   id: string,
   name: string,
   ava: string
}

type UsersMessagesType = {
   [userId: string]: MessageType[]
}

type MessageType = {
   userId?: string
   message: string
}

