import {setProfilePhoto} from "../profile/profileActions";

export enum AUTH_ACTIONS_TYPES {
   SET_AUTH_DATA = 'authReducer/SET_AUTH_DATA',
   SET_CAPTCHA_URL = 'authReducer/SET_CAPTCHA_URL',
}

export type AuthActionCreatorsType =
   | ReturnType<typeof setAuthData>
   | ReturnType<typeof setCaptchaUrl>
   | ReturnType<typeof setProfilePhoto>


export const setAuthData = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => (
   {
      type: AUTH_ACTIONS_TYPES.SET_AUTH_DATA,
      payload: {id, email, login, isAuth,}
   } as const)

export const setCaptchaUrl = (captchaUrl: string | null) => (
   {
      type: AUTH_ACTIONS_TYPES.SET_CAPTCHA_URL,
      payload: {captchaUrl}
   } as const)
