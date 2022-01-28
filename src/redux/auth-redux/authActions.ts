export enum AUTH_ACTIONS_TYPES {
   SET_AUTH_DATA = 'authReducer/SET_AUTH_DATA',
   SET_LOGIN_DATA = 'authReducer/SET_LOGIN_DATA',
}

export type AuthActionCreatorsType =
   ReturnType<typeof setAuthData>
   // | ReturnType<typeof setLoginData>

export const setAuthData = (id: number, email: string, login: string, isAuth: boolean) => (
   {
      type: AUTH_ACTIONS_TYPES.SET_AUTH_DATA,
      payload: { id, email, login, isAuth, }
   } as const
)

// export const setLoginData = (email: string, password: string, rememberMe: boolean, captcha: boolean,) => (
//    {
//       type: AUTH_ACTIONS_TYPES.SET_LOGIN_DATA,
//       login: { email, password, rememberMe, captcha }
//    } as const
// )
