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
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationComponent {
  constructor(private readonly fb: FormBuilder, private store$: Store) {}

  hidePassword = {
    first: true,
    second: true,
  };

  readonly form: FormGroup = this.fb.group({
    userName: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    secondPassword: ['', [Validators.required, Validators.minLength(8)]],
  });

  matcher = new AuthErrorStateMatcher();

  errors = {
    userName: '',
    email: '',
    password: '',
    secondPassword: '',
  };

  getNameErrorMessage(userName: AbstractControl) {
    if (userName.hasError('required')) {
      this.errors.userName = 'You must enter a name';
      return;
    }

    this.errors.userName = userName.hasError('minLength')
      ? 'Your name must be longer than 2 symbols'
      : '';
  }

  getEmailErrorMessage(email: AbstractControl) {
    if (email.hasError('required')) {
      this.errors.email = 'You must enter a email';
    } else {
      this.errors.email = email.hasError('email') ? 'Not a valid email' : '';
    }
  }

  getPasswordErrorMessage = (
    field: 'password' | 'secondPassword',
    password: AbstractControl
  ) => {
    if (password.hasError('required')) {
      this.errors[field] = 'You must enter a password';
    } else {
      this.errors[field] = password.hasError('minLength')
        ? 'Your password must be longer than 8 symbols'
        : '';
    }
  };

  validateControls() {
    this.getNameErrorMessage(this.form.get('userName') as AbstractControl);
    this.getEmailErrorMessage(this.form.get('email') as AbstractControl);
    this.getPasswordErrorMessage(
      'password',
      this.form.get('password') as AbstractControl
    );
    this.getPasswordErrorMessage(
      'secondPassword',
      this.form.get('secondPassword') as AbstractControl
    );
  }

  changePasswordVisibility(field: keyof typeof this.hidePassword) {
    this.hidePassword = {
      ...this.hidePassword,
      [field]: !this.hidePassword[field],
    };
  }

  registrate() {
    if (this.form.invalid) {
      this.validateControls();
      return;
    }
    this.store$.dispatch(
      AuthorizationActions.registrationAction(this.form.value)
    );
  }
}
