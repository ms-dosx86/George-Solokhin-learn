import { createAction, props } from '@ngrx/store';
import {
  AuthRequestData,
  AuthResponseData,
  RegistrationRequestData,
  RegistrationResponseData,
  UserInfo,
} from './interfaces/';

export namespace AuthorizationActions {
  export const loginAction = createAction(
    'LOGIN_REQUEST',
    props<AuthRequestData>()
  );

  export const registrationAction = createAction(
    'REGISTRATION_REQUEST',
    props<RegistrationRequestData>()
  );

  export const loginResponseAction = createAction(
    'LOGIN_RESPONSE',
    props<{ payload: AuthResponseData }>()
  );

  export const registrationResponseAction = createAction(
    'REGISTRATION_RESPONSE',
    props<{ payload: RegistrationResponseData }>()
  );

  export const logoutAction = createAction('LOGOUT_REQUEST');

  export const logoutResponseAction = createAction(
    'LOGOUT_RESPONSE',
    props<{ payload: boolean }>()
  );

  export const getUserDataAction = createAction('GET_USER_DATA');

  export const getUserDataResponseAction = createAction(
    'GET_USER_DATA_RESPONSE',
    props<{ payload: UserInfo }>()
  );

  export const setAuthLoading = createAction('SET_AUTH_LOADING');

  export const endAuthLoading = createAction('END_AUTH_LOADING');
}
