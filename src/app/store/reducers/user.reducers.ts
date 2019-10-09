import {UserActions} from "../actions/user/user.actions";
import {UserState, initialUserState} from "../state/user.state";
import {UserActionsEnum} from "../actions/user/user-action.enum";

export const userReducers = (state = initialUserState, action: UserActions): UserState => {
  switch (action.type) {
    case UserActionsEnum.GetUsersSuccess:
      return {
        ...state,
        users: action.payload
      };
    case UserActionsEnum.GetUserSuccess: {
      return {
        ...state,
        selectedUser: action.payload
      };
    }
    default:
      return state;
  }
};
