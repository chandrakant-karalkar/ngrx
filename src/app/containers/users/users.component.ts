import {Component, OnInit} from "@angular/core";
import {select, Store} from "@ngrx/store";

import {Router} from "@angular/router";
import {AppState} from "../../store/state/app.state";
import {selectUserList} from "../../store/selectors/user.selectors";
import {GetUsersAction} from "../../store/actions/user/get-users.action";

@Component({
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  users$ = this._store.pipe(select(selectUserList));

  constructor(private _store: Store<AppState>, private _router: Router) {
  }

  ngOnInit() {
    this._store.dispatch(new GetUsersAction());
  }

  navigateToUser(id: number) {
    this._router.navigate(["user", id]);
  }
}
