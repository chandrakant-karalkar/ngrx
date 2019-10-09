import {AppState} from "../state/app.state";
import {UserService} from "../../user.service";
import {GetUserAction} from "../actions/user/get-user.action";
import {UserActionsEnum} from "../actions/user/user-action.enum";
import {map, switchMap, withLatestFrom} from "rxjs/operators";
import {selectUserList} from "../selectors/user.selectors";
import {of} from "rxjs";
import {GetUserSuccessAction} from "../actions/user/get-user-success.action";
import {GetUsersAction} from "../actions/user/get-users.action";
import {User} from "../../models/user";
import {GetUsersSuccessAction} from "../actions/user/get-users-success.action";
import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {select, Store} from "@ngrx/store";

@Injectable()
export class UserEffects {
  @Effect()
  getUser$ = this.actions$.pipe(
    ofType<GetUserAction>(UserActionsEnum.GetUser),
    map(action => action.payload),
    withLatestFrom(this.store.pipe(select(selectUserList))),
    switchMap(([id, users]) => {
      const selectedUser = users.find(user => user.id === id);
      return of(new GetUserSuccessAction(selectedUser));
    })
  );

  @Effect()
  getUsers$ = this.actions$.pipe(
    ofType<GetUsersAction>(UserActionsEnum.GetUsers),
    switchMap(() => this.userService.getUsers()),
    switchMap((users: User[]) => of(new GetUsersSuccessAction(users)))
  );

  constructor(private userService: UserService, private actions$: Actions, private store: Store<AppState>) {

  }

}
