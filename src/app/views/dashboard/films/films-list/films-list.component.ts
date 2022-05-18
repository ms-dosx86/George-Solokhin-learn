import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { filmsListSelector } from 'src/app/store/films/films.reducer';
import { Films } from 'src/app/store/films/interfaces/Films';
import { FilmsActions } from 'src/app/store/films/films.actions';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class FilmsListComponent implements OnInit {
  constructor(private store$: Store) {}

  filmsData$: Observable<ReturnType<typeof filmsListSelector>> =
    this.store$.select(filmsListSelector);

  ngOnInit(): void {
    this.getFilms(1);
  }

  onPageChange(pageIndex: number) {
    this.getFilms(pageIndex + 1);
  }

  private getFilms(page: number) {
    this.store$.dispatch(FilmsActions.setFilmsLoading());
    this.store$.dispatch(FilmsActions.getFilmsRequest({ page }));
  }
}
