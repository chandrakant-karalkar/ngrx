import {RouterReducerState} from "@ngrx/router-store";
import {initialUserState, UserState} from "./user.state";
import {ConfigState, initialConfigState} from "./config.state";

export interface AppState {
  router?: RouterReducerState;
  userState: UserState;
  configState: ConfigState;
}

export const initialAppState: AppState = {
  userState: initialUserState,
  configState: initialConfigState
};

export function getInitialState(): AppState {
  return initialAppState;
}
