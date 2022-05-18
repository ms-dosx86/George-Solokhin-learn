import { Location } from '@angular/common';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FilmsActions } from 'src/app/store/films/films.actions';
import { currentFilmSelector } from 'src/app/store/films/films.reducer';

@Component({
  selector: 'app-single-film',
  templateUrl: './single-film.component.html',
  styleUrls: ['./single-film.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SingleFilmComponent implements OnInit {
  constructor(private store$: Store, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.store$.dispatch(FilmsActions.setFilmsLoading());
    this.store$.dispatch(
      FilmsActions.getCurrentFilmRequest({
        id: +(this.route.snapshot.paramMap.get('id') as string),
      })
    );
  }

  filmData$: Observable<ReturnType<typeof currentFilmSelector>> =
    this.store$.select(currentFilmSelector);
}
