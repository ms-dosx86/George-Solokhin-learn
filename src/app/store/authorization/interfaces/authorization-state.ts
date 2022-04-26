export interface AuthorizationState {
  token: string | null;
  email: string;
  password: string;
  secondPassword: string;
  userName: string;
  rememberUser: boolean;
  isLogin: boolean;
  loading: boolean;
}
