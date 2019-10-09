import {Action} from "@ngrx/store";
import {Config} from "../../../models/config";

export enum ConfigActionEnum {
  GetConfig = "[Config] get Config",
  GetConfigSuccess = "[Config] get Config Success"
}

export class GetConfigAction implements Action {
  public readonly type = ConfigActionEnum.GetConfig;
}

export class GetConfigSuccessAction implements Action {
  public readonly type = ConfigActionEnum.GetConfigSuccess;

  constructor(public payload: Config) {

  }
}


export type ConfigActions = GetConfigAction | GetConfigSuccessAction;
