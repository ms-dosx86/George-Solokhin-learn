import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, concatAll, map, Observable, of, toArray } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CurrentFilmDto } from './dtos/current-film-dto';
import { FilmDto } from './dtos/film-dto';
import { FilmsDto } from './dtos/films-response-dto';
import { CurrentFilm, Film } from './interfaces';
import { Films } from './interfaces/Films';

@Injectable()
export class FilmsService {
  constructor(private readonly http: HttpClient) {}

  private readonly apiUrl = `${environment.kinopoiskUrl}/api/v2.2`;
  private readonly headers = {
    'X-API-KEY': '14982cd7-2e44-4324-902c-4aed1dbeaa02',
    'Content-Type': 'application/json',
  };

  getFilms(page: string | number): Observable<Films | string> {
    return this.http
      .get<FilmsDto>(`${this.apiUrl}/films`, {
        headers: this.headers,
        params: { page: page ?? 1 },
      })
      .pipe(
        map((films: FilmsDto) => ({
          ...films,
          items: films.items.map(
            (film: FilmDto) => this.getEditedFilm(film) as Film
          ),
        })),
        catchError((err: Error) => of(err.message))
      );
  }

  getCurrentFilm(id: number): Observable<CurrentFilm | string> {
    return this.http
      .get<CurrentFilmDto>(`${this.apiUrl}/films/${id}`, {
        headers: this.headers,
      })
      .pipe(
        map((film) => this.getEditedFilm(film) as CurrentFilm),
        catchError((err: Error) => of(err.message))
      );
  }

  private getEditedFilm(film: FilmDto | CurrentFilmDto): Film | CurrentFilm {
    return {
      ...film,
      countries: film.countries.map((country) => country.country),
      genres: film.genres.map((genre) => genre.genre),
    };
  }
}
