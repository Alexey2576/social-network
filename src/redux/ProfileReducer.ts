import {PostsType} from "../Components/Content/Profile/Post/Post";
import {DispatchType} from "./redax-store";

const ADD_POST = 'ADD-POST'
const CHANGE_VALUE_POST = 'CHANGE-VALUE-POST'

export type ProfilePageType = {
   posts: Array<PostsType>,
   changeTextAreaPost: string
}

const initialState: ProfilePageType = {
   posts: [
      {id: 0, message: "Hello", like: 10},
      {id: 1, message: "Hello", like: 20},
      {id: 2, message: "Hello", like: 30},
   ],
   changeTextAreaPost: ''
}

const profileReducer = (state: ProfilePageType = initialState, action: DispatchType) => {
   switch (action.type) {
      case ADD_POST: {
         return {
            ...state,
            posts: [
               ...state.posts,
               {id: 3, message: state.changeTextAreaPost, like: 0}
            ],
            changeTextAreaPost: ""
         }
      }
      case CHANGE_VALUE_POST: {
         return {
            ...state,
            changeTextAreaPost: action.newChangeText
         }
      }
      default:
         return state
   }
}

export const addPostAC = () => ({ type: ADD_POST } as const)
export const changeValuePostAC = (newChangeText: string) => ({type: CHANGE_VALUE_POST, newChangeText} as const)

export default profileReducer