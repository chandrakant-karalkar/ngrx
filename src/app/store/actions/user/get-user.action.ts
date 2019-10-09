import {UserActionsEnum} from "./user-action.enum";
import {Action} from "@ngrx/store";

export class GetUserAction implements Action {
  public readonly type = UserActionsEnum.GetUser;

  constructor(public payload: number) {
  }
}
