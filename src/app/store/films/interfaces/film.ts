import { FilmTypes } from './films-types';

export interface Film {
  kinopoiskId: number;
  imdbId: string;
  nameRu: string;
  nameEn: string;
  nameOriginal: string;
  countries: string[];
  genres: string[];
  ratingKinopoisk: number;
  ratingImdb: number;
  year: number;
  type: FilmTypes;
  posterUrl: string;
  posterUrlPreview: string;
}
