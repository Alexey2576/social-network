export enum APP_ACTIONS_TYPES {
   SET_IS_INITIALIZE = 'appReducer/SET_IS_INITIALIZE',
}

export type AppActionCreatorsType =
  | ReturnType<typeof setIsInitialize>

export const setIsInitialize = ( isInitialized: boolean) => (
   {
      type: APP_ACTIONS_TYPES.SET_IS_INITIALIZE,
      payload: { isInitialized }
   } as const
)
