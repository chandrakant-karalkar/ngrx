import {UserActionsEnum} from "./user-action.enum";
import {User} from "../../../models/user";
import {Action} from "@ngrx/store";

export class GetUserSuccessAction implements Action {
  public readonly type = UserActionsEnum.GetUserSuccess;

  constructor(public payload: User) {

  }
}
