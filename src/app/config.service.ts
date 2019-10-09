import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {Config} from "./models/config";

@Injectable({
  providedIn: "root"
})
export class ConfigService {

  getConfig(): Observable<Config> {
    return of({
      adminName: "Test",
      permissions: []
    });
  }
}
