import {PostsType} from "../Components/Content/Profile/Post/Post";
import {DispatchType} from "./redax-store";

const initialProfilePageState = {
   posts: [
      {id: 0, message: "Hello", like: 10},
      {id: 1, message: "Hello", like: 20},
      {id: 2, message: "Hello", like: 30},
   ] as PostsType[],
   changeTextAreaPost: ''
}


type ProfilePageType = typeof initialProfilePageState

export const profileReducer = (state: ProfilePageType = initialProfilePageState, action: DispatchType): ProfilePageType => {
   switch (action.type) {
      case 'ADD-POST': {
         return {
            ...state,
            posts: [
               ...state.posts,
               {id: 3, message: state.changeTextAreaPost, like: 0}
            ],
            changeTextAreaPost: ""
         }
      }
      case 'CHANGE-VALUE-POST': {
         return {
            ...state,
            changeTextAreaPost: action.newChangeText
         }
      }
      default:
         return state
   }
}

export const addPostAC = () => ({ type: 'ADD-POST' } as const)
export const changeValuePostAC = (newChangeText: string) => ({type: 'CHANGE-VALUE-POST', newChangeText} as const)