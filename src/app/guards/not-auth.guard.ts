import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { BehaviorSubject, map, tap } from 'rxjs';
import { userDataSelector } from '../store/authorization/authorization.reducer';
import { AuthorizationService } from '../store/authorization/authorization.service';

@Injectable()
export class NotAuthGuard implements CanLoad {
  constructor(private readonly router: Router, private store$: Store) {}

  canLoad() {
    return this.checkAuth();
  }

  isAuth = (isLogin: boolean): boolean =>
    !!(isLogin || localStorage.getItem('token'));

  private checkAuth() {
    return this.store$.select(userDataSelector).pipe(
      tap(({ isLogin }) => this.isAuth(isLogin) && this.router.navigate([''])),
      map(({ isLogin }) => !this.isAuth(isLogin))
    );
  }
}
