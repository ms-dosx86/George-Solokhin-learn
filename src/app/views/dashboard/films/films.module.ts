import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmsRoutingModule } from './films-routing.module';
import { FilmsComponent } from './films.component';
import { StoreModule } from '@ngrx/store';
import { filmsReducer, FILMS_STATE } from 'src/app/store/films/films.reducer';
import { EffectsModule } from '@ngrx/effects';
import { FilmsEffects } from 'src/app/store/films/films.effects';
import { FilmsService } from 'src/app/store/films/films.service';
import { SingleFilmMaterialModule } from 'src/app/material/single-film-material.module';
import { SingleFilmComponent } from './single-film/single-film.component';
import { FilmsListComponent } from './films-list/films-list.component';
import { FilmsListMaterialModule } from 'src/app/material/films-list-material.module';

@NgModule({
  declarations: [FilmsComponent, SingleFilmComponent, FilmsListComponent],
  imports: [
    CommonModule,
    FilmsRoutingModule,
    StoreModule.forFeature(FILMS_STATE, filmsReducer),
    EffectsModule.forFeature([FilmsEffects]),
    SingleFilmMaterialModule,
    FilmsListMaterialModule,
  ],
  providers: [FilmsService],
})
export class FilmsModule {}
