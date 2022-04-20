export interface AuthRequestData {
  email: string;
  password: string;
  rememberUser: boolean;
}

export interface AuthResponseData extends AuthRequestData {
  userName: string;
  token: string | null;
  isLogin: boolean;
}
