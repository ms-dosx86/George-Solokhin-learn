import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, tap } from 'rxjs';
import { AuthorizationActions } from './authorization.actions';
import { AuthorizationService } from './authorization.service';
import { AuthRequestData, RegistrationRequestData } from './interfaces/';

@Injectable()
export class AuthorizationEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthorizationService,
    private router: Router
  ) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthorizationActions.loginAction),
      switchMap((action: AuthRequestData) =>
        this.authService
          .login({
            email: action.email,
            password: action.password,
            rememberUser: action.rememberUser,
          })
          .pipe(
            tap(() => AuthorizationActions.setAuthLoading()),
            map((payload) =>
              AuthorizationActions.loginResponseAction({ payload })
            ),
            tap(({ payload }) => {
              payload.token && localStorage.setItem('token', payload.token);
              this.router.navigate(['']);
              AuthorizationActions.endAuthLoading();
            })
          )
      )
    )
  );

  registration$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthorizationActions.registrationAction),
      switchMap((action: RegistrationRequestData) =>
        this.authService
          .registration({
            userName: action.userName,
            email: action.email,
            password: action.password,
            secondPassword: action.secondPassword,
          })
          .pipe(
            tap(() => AuthorizationActions.setAuthLoading()),
            map((payload) =>
              AuthorizationActions.registrationResponseAction({ payload })
            ),
            tap(() => {
              this.router.navigate(['']);
              AuthorizationActions.endAuthLoading();
            })
          )
      )
    )
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthorizationActions.logoutAction),
      switchMap(() =>
        this.authService.logout().pipe(
          tap(() => AuthorizationActions.setAuthLoading()),
          map(({ payload }) =>
            AuthorizationActions.logoutResponseAction({ payload })
          ),
          tap(() => {
            localStorage.removeItem('token');
            this.router.navigate(['login']);
            AuthorizationActions.endAuthLoading();
          })
        )
      )
    )
  );

  getUserData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthorizationActions.getUserDataAction),
      switchMap(() =>
        this.authService
          .getUserData(localStorage.getItem('token'))
          .pipe(
            map((payload) =>
              AuthorizationActions.getUserDataResponseAction({ payload })
            )
          )
      )
    )
  );
}
