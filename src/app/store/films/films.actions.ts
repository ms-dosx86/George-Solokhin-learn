import { createAction, props } from '@ngrx/store';
import { CurrentFilm } from './interfaces/';
import { Film } from './interfaces/';
import { Films } from './interfaces/Films';

export namespace FilmsActions {
  export const getFilmsRequest = createAction(
    'GET_FILMS_REQUEST',
    props<{ page: number | string }>()
  );

  export const getFilmsResponse = createAction(
    'GET_FILMS_RESPONSE',
    props<{ payload: Films }>()
  );

  export const getCurrentFilmRequest = createAction(
    'GET_CURRENT_FILM_REQUEST',
    props<{ id: number }>()
  );

  export const getCurrentFilmResponse = createAction(
    'GET_CURRENT_FILM_RESPONSE',
    props<{ payload: CurrentFilm }>()
  );

  export const setFilmsLoading = createAction('SET_FILMS_LOADING');

  export const setFilmsError = createAction(
    'SET_FILMS_ERROR',
    props<{ error: string }>()
  );
}
