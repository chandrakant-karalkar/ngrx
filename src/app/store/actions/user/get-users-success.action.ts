import {UserActionsEnum} from "./user-action.enum";
import {User} from "../../../models/user";
import {Action} from "@ngrx/store";

export class GetUsersSuccessAction implements Action {
  public readonly type = UserActionsEnum.GetUsersSuccess;

  constructor(public payload: User[]) {
  }
}
