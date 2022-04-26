import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import { AuthorizationActions } from './authorization.actions';
import { AuthorizationState } from './interfaces/';

export const AUTHORIZATION_NAME = 'authorization-name';

const initialState: AuthorizationState = {
  token: null,
  email: '',
  password: '',
  secondPassword: '',
  userName: '',
  isLogin: false,
  rememberUser: false,
  loading: false,
};

export const authorizationReducer = createReducer(
  initialState,
  on(AuthorizationActions.loginResponseAction, (state, actionData) => ({
    ...state,
    ...actionData.payload,
  })),
  on(AuthorizationActions.registrationResponseAction, (state, actionData) => ({
    ...state,
    ...actionData.payload,
  })),
  on(AuthorizationActions.logoutResponseAction, (state, actionData) => ({
    ...(actionData.payload ? initialState : state),
  })),
  on(AuthorizationActions.getUserDataResponseAction, (state, actionData) => ({
    ...state,
    ...actionData.payload,
  }))
);

const getFeature =
  createFeatureSelector<AuthorizationState>(AUTHORIZATION_NAME);

export const userDataSelector = createSelector(getFeature, (state) => ({
  email: state.email,
  userName: state.userName,
  isLogin: state.isLogin,
}));

export const userDataLoadingSelector = createSelector(
  getFeature,
  (state) => state.loading
);
