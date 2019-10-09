import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {UserService} from "./user.service";
import {StoreModule} from "@ngrx/store";
import {appReducers} from "./store/reducers/app.reducers";
import {EffectsModule} from "@ngrx/effects";
import {UserEffects} from "./store/effects/user.effects";
import {ConfigEffects} from "./store/effects/config.effects";
import {UsersComponent as UsersContainerComponent} from "./containers/users/users.component";
import {UsersComponent} from "./components/users/users.component";
import {UserComponent} from "./containers/user/user.component";
import {UserDetailsComponent} from "./components/user-details/user-details.component";
import {StoreRouterConnectingModule} from "@ngrx/router-store";
import {AppRoutingModule} from "./app-routing.module";
import {environment} from "../environments/environment";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";

@NgModule({
  declarations: [
    AppComponent,
    UsersContainerComponent,
    UsersComponent,
    UserComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([UserEffects, ConfigEffects]),
    StoreRouterConnectingModule.forRoot({stateKey: "router"}),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
