import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanActivateChild,
  CanLoad,
  Router,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { map, tap } from 'rxjs';
import { userDataSelector } from '../store/authorization/authorization.reducer';

@Injectable()
export class AuthGuard implements CanLoad, CanActivate, CanActivateChild {
  constructor(private readonly router: Router, private store$: Store) {}

  canLoad() {
    return this.checkAuth();
  }

  canActivate() {
    return this.checkAuth();
  }

  canActivateChild() {
    return this.checkAuth();
  }

  isAuth = (isLogin: boolean): boolean =>
    !!(isLogin || localStorage.getItem('token'));

  private checkAuth() {
    return this.store$.select(userDataSelector).pipe(
      tap(
        ({ isLogin }) =>
          !this.isAuth(isLogin) && this.router.navigate(['/login'])
      ),
      map(({ isLogin }) => this.isAuth(isLogin))
    );
  }
}
