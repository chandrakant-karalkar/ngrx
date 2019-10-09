import {GetUsersAction} from "./get-users.action";
import {GetUsersSuccessAction} from "./get-users-success.action";
import {GetUserAction} from "./get-user.action";
import {GetUserSuccessAction} from "./get-user-success.action";

export type UserActions = GetUsersAction | GetUsersSuccessAction | GetUserAction | GetUserSuccessAction;
