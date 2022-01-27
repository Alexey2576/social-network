export enum AUTH_ACTIONS_TYPES {
   SET_AUTH_DATA = 'authReducer/SET_AUTH_DATA',
}

export type AuthActionCreatorsType = ReturnType<typeof setAuthData>

export const setAuthData = (id: number, email: string, login: string, isAuth: boolean) => (
   {
      type: AUTH_ACTIONS_TYPES.SET_AUTH_DATA,
      payload: { id, email, login, isAuth, }
   } as const
)
