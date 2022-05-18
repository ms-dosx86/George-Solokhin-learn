import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs';
import { FilmsActions } from './films.actions';
import { FilmsService } from './films.service';

@Injectable()
export class FilmsEffects {
  constructor(private actions$: Actions, private filmsService: FilmsService) {}

  getFilms$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FilmsActions.getFilmsRequest),
      switchMap(({ page }) =>
        this.filmsService
          .getFilms(page)
          .pipe(
            map((payload) =>
              typeof payload === 'string'
                ? FilmsActions.setFilmsError({ error: payload })
                : FilmsActions.getFilmsResponse({ payload })
            )
          )
      )
    )
  );

  getCurrentFilm$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FilmsActions.getCurrentFilmRequest),
      switchMap(({ id }) =>
        this.filmsService.getCurrentFilm(id).pipe(
          map((payload) => {
            return typeof payload === 'string'
              ? FilmsActions.setFilmsError({ error: payload })
              : FilmsActions.getCurrentFilmResponse({ payload });
          })
        )
      )
    )
  );
}
