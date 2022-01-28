import axios from "axios";
import {UserLoginType} from "../redux/auth-redux/authReducer";

const instanceAxios = axios.create({
   withCredentials:true,
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   headers: { "API-KEY": "0b35bf30-9811-4ef2-8cc3-183ac4bf4914" },
})

type CommonResponseType<T> = {
   resultCode: number
   messages: string[]
   data: T
}

export const userAPI = {
   getUsers: (countPeoplesOnPage: number, currentPage: number) => {
      return instanceAxios.get(`users?count=${countPeoplesOnPage}&page=${currentPage}`)
         .then(response => response.data)
   },
   follow: (userID: number) => {
      return instanceAxios.post(`follow/${userID}`).then(response => response.data)
   },
   unfollow: (userID: number) => {
      return instanceAxios.delete(`follow/${userID}`).then(response => response.data)
   },
}

export const profileAPI = {
   getProfile: (userID: string) => {
      return instanceAxios.get(`profile/${userID}`).then(response => response.data)
   },
   getStatus: (userID: string) => {
      return instanceAxios.get(`profile/status/${userID}`).then(response => response.data)
   },
   updateStatus: (status: string) => {
      return instanceAxios.put(`profile/status`, {status}).then(response => response.data)
   }
}

export const headerAPI = {
   getLoggedData: () => {
      return instanceAxios.get<CommonResponseType<{id: number, email: string, login: string}>>('auth/me').then(response => response.data)
   },
   getLoginData: (loginData: UserLoginType) => {
      return instanceAxios.post<CommonResponseType<{userId: number}>>('auth/login', loginData).then(response => response.data)
   },
}