import {UsersType} from "../../Components/Content/Messages/User/User";
import {UsersMessagesType} from "../../Components/Content/Messages/UserMessages/UserMessages";
import {ActionCreatorsType} from "../redax-store";
import {MESSAGES_ACTIONS_TYPES} from "./messagesActions";

const initialMessagesPageState = {
   users: [
      {id: 0, name: "Alex", ava: "https://vraki.net/sites/default/files/inline/images/30_55.jpg"},
      {id: 1, name: "Sasha", ava: "https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg"},
      {id: 2, name: "Sveta", ava: "https://vraki.net/sites/default/files/inline/images/1_6.png"},
      {id: 3, name: "Yana", ava: "https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-2.jpg"},
      {id: 4, name: "Valera", ava: "https://vraki.net/sites/default/files/mood/m.jpg"}
   ] as UsersType[],
   usersMessages: [
      {id: 0, message: "Hi"},
      {id: 1, message: "How are you"},
      {id: 2, message: "What is your name"},
      {id: 2, message: "What is your name"},
   ] as UsersMessagesType[],
}

export type MessagesPageType = typeof initialMessagesPageState

export const messagesReducer = (state: MessagesPageType = initialMessagesPageState, action: ActionCreatorsType): MessagesPageType => {
   switch (action.type) {
      case MESSAGES_ACTIONS_TYPES.ADD_MESSAGE:
         return {
            ...state,
            usersMessages: [
               {id: 3, message: action.message},
               ...state.usersMessages,
            ],
         }
      default: return state
   }
}