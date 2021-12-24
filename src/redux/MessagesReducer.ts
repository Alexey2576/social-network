import {UsersType} from "../Components/Content/Messages/User/User";
import {UsersMessagesType} from "../Components/Content/Messages/UserMessages/UserMessages";
import {DispatchType} from "./redax-store";

export type MessagesPageType = {
   users: Array<UsersType>
   usersMessages: Array<UsersMessagesType>
   changeTextAreaMessage: string
}

const initialState: MessagesPageType = {
   users: [
      {id: 0, name: "Alex", ava: "https://vraki.net/sites/default/files/inline/images/30_55.jpg"},
      {id: 1, name: "Sasha", ava: "https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg"},
      {id: 2, name: "Sveta", ava: "https://vraki.net/sites/default/files/inline/images/1_6.png"},
      {id: 3, name: "Yana", ava: "https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-2.jpg"},
      {id: 4, name: "Valera", ava: "https://vraki.net/sites/default/files/mood/m.jpg"}
   ],
   usersMessages: [
      {id: 0, message: "Hi"},
      {id: 1, message: "How are you"},
      {id: 2, message: "What is your name"},
      {id: 2, message: "What is your name"},
   ],
   changeTextAreaMessage: ""
}

const messagesReducer = (state: MessagesPageType = initialState, action: DispatchType) => {
   switch (action.type) {
      case "ADD-MESSAGE": {
         return {
            ...state,
            usersMessages: [
               {id: 3, message: state.changeTextAreaMessage},
               ...state.usersMessages,
            ],
            changeTextAreaMessage: ""
         }
      }
      case "CHANGE-VALUE-MESSAGE": {
         return  {
            ...state,
            changeTextAreaMessage: action.newChangeText
         }
      }
      default:
         return state
   }
}

export const addMessageAC = () => ({ type: 'ADD-MESSAGE' } as const)
export const changeValueMessageAC = (newChangeText: string) => ({type: 'CHANGE-VALUE-MESSAGE', newChangeText} as const)

export default messagesReducer