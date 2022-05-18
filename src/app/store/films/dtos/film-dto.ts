import { FilmTypes } from '../interfaces';

export interface FilmDto {
  kinopoiskId: number;
  imdbId: string;
  nameRu: string;
  nameEn: string;
  nameOriginal: string;
  countries: { country: string }[];
  genres: { genre: string }[];
  ratingKinopoisk: number;
  ratingImdb: number;
  year: number;
  type: FilmTypes;
  posterUrl: string;
  posterUrlPreview: string;
}
