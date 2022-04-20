export interface RegistrationRequestData {
  userName: string;
  email: string;
  password: string;
  secondPassword: string;
}

export interface RegistrationResponseData extends RegistrationRequestData {
  isLogin: boolean;
}
