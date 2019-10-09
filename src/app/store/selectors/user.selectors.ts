import {AppState} from "../state/app.state";
import {UserState} from "../state/user.state";
import {createSelector} from "@ngrx/store";

const selectUsers = (state: AppState) => state.userState;

export const selectUserList = createSelector(
  selectUsers,
  (state: UserState) => state.users
);

export const selectSelectedUser = createSelector(
  selectUsers,
  (state: UserState) => state.selectedUser
);
