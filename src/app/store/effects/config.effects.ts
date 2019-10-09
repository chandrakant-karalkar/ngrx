import {Actions, Effect, ofType} from "@ngrx/effects";
import {Injectable} from "@angular/core";
import {ConfigService} from "../../config.service";
import {switchMap} from "rxjs/operators";
import {Config} from "../../models/config";
import {of} from "rxjs";
import {ConfigActionEnum, GetConfigAction, GetConfigSuccessAction} from "../actions/config/config.actions";

@Injectable()
export class ConfigEffects {

  constructor(private configService: ConfigService, private actions$: Actions) {
  }


  @Effect()
  getConfig$ = this.actions$.pipe(
    ofType<GetConfigAction>(ConfigActionEnum.GetConfig),
    switchMap(() => this.configService.getConfig()),
    switchMap((config: Config) => {
      return of(new GetConfigSuccessAction(config);
    })
  );
}
