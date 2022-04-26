import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthorizationActions } from 'src/app/store/authorization/authorization.actions';
import { userDataSelector } from 'src/app/store/authorization/authorization.reducer';
import { UserInfo } from 'src/app/store/authorization/interfaces/';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {
  constructor(private store$: Store) {}

  userData$: Observable<UserInfo> = this.store$.select(userDataSelector);

  logout() {
    this.store$.dispatch(AuthorizationActions.logoutAction());
  }
}
