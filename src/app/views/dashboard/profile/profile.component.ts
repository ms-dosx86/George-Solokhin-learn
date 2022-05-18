import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthorizationActions } from 'src/app/store/authorization/authorization.actions';
import { userDataSelector } from 'src/app/store/authorization/authorization.reducer';
import { UserInfo } from 'src/app/store/authorization/interfaces';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent {
  constructor(private store$: Store) {}

  userData$: Observable<UserInfo> = this.store$.select(userDataSelector);

  logout() {
    this.store$.dispatch(AuthorizationActions.logoutAction());
  }
}
