import {RootState} from "../redax-store";

export const getIsInitialized = (state: RootState): boolean => state.appState.isInitialized