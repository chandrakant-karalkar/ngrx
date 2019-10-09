import {Component, OnInit} from "@angular/core";
import {select, Store} from "@ngrx/store";
import {ActivatedRoute} from "@angular/router";

import {AppState} from "../../store/state/app.state";
import {GetUserAction} from "../../store/actions/user/get-user.action";
import {selectSelectedUser} from "../../store/selectors/user.selectors";

@Component({
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  user$ = this._store.pipe(select(selectSelectedUser));

  constructor(
    private _store: Store<AppState>,
    private _route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this._store.dispatch(new GetUserAction(this._route.snapshot.params.id));
  }
}
