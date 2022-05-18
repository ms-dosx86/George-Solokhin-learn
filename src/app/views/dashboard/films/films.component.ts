import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filmsListSelector } from 'src/app/store/films/films.reducer';
import { Film } from 'src/app/store/films/interfaces';
import { Films } from 'src/app/store/films/interfaces/Films';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilmsComponent implements OnInit {
  ngOnInit(): void {}
}
