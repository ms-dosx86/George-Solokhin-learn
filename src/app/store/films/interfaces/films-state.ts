import { CurrentFilm } from './current-film';
import { Films } from './Films';

export interface FilmState {
  loading: boolean;
  error: string;
  currentFilm: CurrentFilm | null;
  films: Films;
}
