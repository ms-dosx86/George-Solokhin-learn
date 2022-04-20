import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { AuthErrorStateMatcher } from 'src/app/helpers/auth-error-state-matcher';
import { AuthorizationActions } from 'src/app/store/authorization/authorization.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  constructor(private readonly fb: FormBuilder, private store$: Store) {}

  readonly form: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    rememberUser: [false],
  });

  hidePassword = true;

  matcher = new AuthErrorStateMatcher();

  errors = {
    email: '',
    password: '',
  };

  getEmailErrorMessage(email: AbstractControl) {
    if (email.hasError('required')) {
      this.errors.email = 'You must enter a email';
    } else {
      this.errors.email = email.hasError('email') ? 'Not a valid email' : '';
    }
  }

  getPasswordErrorMessage = (password: AbstractControl) => {
    this.errors.password = password.hasError('required')
      ? 'You must enter a password'
      : '';
  };

  validateControls() {
    this.getEmailErrorMessage(this.form.get('email') as AbstractControl);
    this.getPasswordErrorMessage(this.form.get('password') as AbstractControl);
  }

  login() {
    if (this.form.invalid) {
      this.validateControls();
      return;
    }
    this.store$.dispatch(AuthorizationActions.loginAction(this.form.value));
  }
}
