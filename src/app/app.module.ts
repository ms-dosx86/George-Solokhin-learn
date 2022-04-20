import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import {
  authorizationReducer,
  AUTHORIZATION_NAME,
} from './store/authorization/authorization.reducer';
import { AuthorizationEffects } from './store/authorization/authorization.effects';
import { AuthorizationService } from './store/authorization/authorization.service';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NotAuthGuard } from './guards/not-auth.guard';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    EffectsModule.forRoot([AuthorizationEffects]),
    StoreModule.forRoot({ [AUTHORIZATION_NAME]: authorizationReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
  ],
  providers: [AuthorizationService, AuthGuard, NotAuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
