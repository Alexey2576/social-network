import {RootState} from "../redax-store";
import {ProfileUserInfoType} from "./profileReducer";
import {PostsType} from "../../Components/Content/Profile/Posts/Post/Post";

export const getUserInfo = (state: RootState): ProfileUserInfoType => state.profilePage.profileUserInfo
export const getPosts = (state: RootState): PostsType[] => state.profilePage.posts
export const getAuthId = (state: RootState): number | null => state.authState.id
export const getStatus = (state: RootState): string => state.profilePage.status

// Example
// export const getSelectorPosts = createSelector(getPosts, (posts) => posts.filter(p => true))
