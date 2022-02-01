export enum APP_ACTIONS_TYPES {
   APP_INIT_DATA = 'authReducer/APP_INIT_DATA',
}

export type AppActionCreatorsType =
   ReturnType<typeof setAppInit>

export const setAppInit = () => ( { type: APP_ACTIONS_TYPES.APP_INIT_DATA, isInit: true } as const )