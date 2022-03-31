import {RootState} from "../redax-store";
import {PhotosType} from "../profile/profileReducer";

export const getId = (state: RootState): number | null => state.authState.id
export const getEmail = (state: RootState): string | null => state.authState.email
export const getLogin = (state: RootState): string | null => state.authState.login
export const getIsAuth = (state: RootState): boolean => state.authState.isAuth
export const getProfilePhotos = (state: RootState): PhotosType | null => state.authState.photos
export const getCaptchaUrl = (state: RootState): string | null => state.authState.captchaUrl