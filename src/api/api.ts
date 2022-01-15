import axios from "axios";

const instanceAxios = axios.create({
   withCredentials:true,
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   headers: { "API-KEY": "0b35bf30-9811-4ef2-8cc3-183ac4bf4914" },
})
export const userAPI = {
   getUsers: (countPeoplesOnPage: number, currentPage: number) => {
      return instanceAxios.get(`users?count=${countPeoplesOnPage}&page=${currentPage}`).then(response => response.data)
   },
   follow: (userID: number) => {
      return instanceAxios.post(`follow/${userID}`).then(response => response.data)
   },
   unfollow: (userID: number) => {
      return instanceAxios.delete(`follow/${userID}`).then(response => response.data)
   }
}

export const profileAPI = {
   getUserProfile: (userID: string) => {
      return instanceAxios.get(`profile/${userID}`).then(response => response.data)
   }
}