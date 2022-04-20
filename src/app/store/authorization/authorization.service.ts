import { BehaviorSubject, delay, map, Observable, timer } from 'rxjs';
import {
  AuthRequestData,
  AuthResponseData,
  RegistrationRequestData,
  RegistrationResponseData,
  UserInfo,
} from './interfaces/';

export class AuthorizationService {
  login(body: AuthRequestData): Observable<AuthResponseData> {
    return timer(1000).pipe(
      map(() => {
        const token = body.rememberUser ? Date.now().toString() : null;
        return {
          ...body,
          token,
          isLogin: true,
          userName: 'Ivanov Ivan',
        };
      })
    );
  }

  registration(
    body: RegistrationRequestData
  ): Observable<RegistrationResponseData> {
    return timer(1000).pipe(
      delay(1000),
      map(() => ({
        ...body,
        isLogin: true,
      }))
    );
  }

  logout(): Observable<{ payload: boolean }> {
    return timer(1000).pipe(
      map(() => ({
        payload: true,
      }))
    );
  }

  getUserData(token: string | null): Observable<UserInfo> {
    return timer(1000).pipe(
      map(() =>
        token
          ? {
              userName: 'Ivanov Ivan',
              email: 'ivanov@email.ru',
              isLogin: true,
            }
          : {
              userName: '',
              email: '',
              isLogin: false,
            }
      )
    );
  }
}
