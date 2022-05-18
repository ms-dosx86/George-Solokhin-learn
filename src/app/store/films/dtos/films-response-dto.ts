import { FilmDto } from './film-dto';

export interface FilmsDto {
  total: number;
  totalPages: number;
  items: FilmDto[];
}
