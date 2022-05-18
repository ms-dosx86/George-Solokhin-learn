import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import { FilmsActions } from './films.actions';
import { FilmState } from './interfaces/';

export const FILMS_STATE = 'films-state';

const initialState: FilmState = {
  currentFilm: null,
  films: {
    total: 0,
    totalPages: 0,
    items: [],
  },
  loading: false,
  error: '',
};

export const filmsReducer = createReducer(
  initialState,
  on(FilmsActions.setFilmsLoading, (state) => ({
    ...state,
    loading: true,
    error: '',
    currentFilm: null,
    films: { ...state.films, items: [] },
  })),
  on(FilmsActions.setFilmsError, (state, actionData) => ({
    ...state,
    loading: false,
    error: actionData.error,
    currentFilm: null,
    films: { ...state.films, items: [] },
  })),
  on(FilmsActions.getFilmsResponse, (state, actionData) => ({
    ...state,
    loading: false,
    error: '',
    films: actionData.payload,
  })),
  on(FilmsActions.getCurrentFilmResponse, (state, actionData) => ({
    ...state,
    loading: false,
    error: '',
    currentFilm: actionData.payload,
  }))
);

const getFeature = createFeatureSelector<FilmState>(FILMS_STATE);

export const filmsListSelector = createSelector(getFeature, (state) => ({
  loading: state.loading,
  error: state.error,
  films: state.films,
}));

export const currentFilmSelector = createSelector(getFeature, (state) => ({
  loading: state.loading,
  error: state.error,
  currentFilm: state.currentFilm,
}));
