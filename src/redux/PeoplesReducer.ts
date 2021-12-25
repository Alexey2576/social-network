import {DispatchType} from "./redax-store";
import {PeopleType} from "../Components/Content/Peoples/People/People";

const initialPeoplesPageState = {
   peoples: [
      {
         id: 1,
         name: "Alex",
         status: "Hi! i am React JS Junior developer and I am looking for a job",
         photos: {
            small: "https://img.a.transfermarkt.technology/portrait/big/66515-1564401694.jpg",
            large: "https://img.a.transfermarkt.technology/portrait/big/66515-1564401694.jpg"
         },
         followed: false
      },
      {
         id: 1,
         name: "Bob",
         status: "Hi! i am React JS Junior developer and I am looking for a job",
         photos: {
            small: "https://image.shutterstock.com/image-illustration/jakarta-indonesia-december-10-2020-260nw-1871169331.jpg",
            large: "https://image.shutterstock.com/image-illustration/jakarta-indonesia-december-10-2020-260nw-1871169331.jpg"
         },
         followed: true
      },
      {
         id: 1,
         name: "Liza",
         status: "Hi! i am React JS Junior developer and I am looking for a job",
         photos: {
            small: "https://media.philstar.com/photos/2019/05/20/liza-new_2019-05-20_10-46-16.jpg",
            large: "https://media.philstar.com/photos/2019/05/20/liza-new_2019-05-20_10-46-16.jpg"
         },
         followed: false
      }
   ] as PeopleType[]
}

export type PeoplesPageType = typeof initialPeoplesPageState

export const peoplesReducer = (state: PeoplesPageType = initialPeoplesPageState, action: DispatchType): PeoplesPageType => {
   switch (action.type) {
      case "SET_PEOPLES": {
         return {
            ...state,
            peoples: [...state.peoples, ...action.peoples]
         }
      }
      case "FOLLOW": {
         return {
            ...state,
            peoples: state.peoples.map(p => p.id === action.people_ID ? {...p, followed: true} : p)
         }
      }
      case "UNFOLLOW": {
         return {
            ...state,
            peoples: state.peoples.map(p => p.id === action.people_ID ? {...p, followed: false} : p)
         }
      }
      default:
         return state
   }
}

export const followAC = (people_ID: number) => ({type: 'FOLLOW', people_ID} as const)
export const unfollowAC = (people_ID: number) => ({type: 'UNFOLLOW', people_ID} as const)
export const setPeoplesAC = (peoples: PeopleType[]) => ({type: 'SET_PEOPLES', peoples} as const)