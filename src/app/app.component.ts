import {Component, OnInit} from "@angular/core";
import {select, Store} from "@ngrx/store";
import {AppState} from "./store/state/app.state";
import {selectConfig} from "./store/selectors/config.selectors";
import {GetConfigAction} from "./store/actions/config/config.actions";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"]
})
export class AppComponent implements OnInit {
  title = "Ngrx";
  config$ = this._store.pipe(select(selectConfig));

  constructor(private _store: Store<AppState>) {
  }

  ngOnInit() {
    this._store.dispatch(new GetConfigAction());
  }
}
