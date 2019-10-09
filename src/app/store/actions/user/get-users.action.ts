import {UserActionsEnum} from "./user-action.enum";
import {Action} from "@ngrx/store";

export class GetUsersAction implements Action {
  public readonly type = UserActionsEnum.GetUsers;
}
