import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthorizationActions } from './store/authorization/authorization.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  constructor(private store$: Store) {}

  ngOnInit(): void {
    localStorage.getItem('token') &&
      this.store$.dispatch(AuthorizationActions.getUserDataAction());
  }
}
