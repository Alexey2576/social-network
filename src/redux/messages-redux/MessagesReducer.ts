import {UsersType} from "../../Components/Content/Messages/User/User";
import {UsersMessagesType} from "../../Components/Content/Messages/UserMessages/UserMessages";
import {ActionCreatorsType} from "../redax-store";
import {MESSAGES_ACTIONS_TYPES} from "./messagesActions";
import {v1} from 'uuid';

const initialMessagesPageState = {
   users: [
      {id: v1(), name: "Alex", ava: "https://vraki.net/sites/default/files/inline/images/30_55.jpg"},
      {id: v1(), name: "Sasha", ava: "https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg"},
      {id: v1(), name: "Sveta", ava: "https://vraki.net/sites/default/files/inline/images/1_6.png"},
      {id: v1(), name: "Yana", ava: "https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-2.jpg"},
      {id: v1(), name: "Valera", ava: "https://vraki.net/sites/default/files/mood/m.jpg"}
   ] as UsersType[],
   usersMessages: [
      {id: v1(), message: "Hi"},
      {id: v1(), message: "How are you"},
      {id: v1(), message: "What is your name"},
      {id: v1(), message: "What is your name"},
   ] as UsersMessagesType[],
}

export type MessagesPageType = typeof initialMessagesPageState

export const messagesReducer = (state: MessagesPageType = initialMessagesPageState, action: ActionCreatorsType): MessagesPageType => {
   switch (action.type) {
      case MESSAGES_ACTIONS_TYPES.ADD_MESSAGE:
         return {
            ...state,
            usersMessages: [
               {id: v1(), message: action.message},
               ...state.usersMessages,
            ],
         }
      default: return state
   }
}