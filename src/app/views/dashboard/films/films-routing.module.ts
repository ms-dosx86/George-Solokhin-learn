import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmsListComponent } from './films-list/films-list.component';
import { FilmsComponent } from './films.component';
import { SingleFilmComponent } from './single-film/single-film.component';

const routes: Routes = [
  {
    path: '',
    component: FilmsComponent,
    children: [
      {
        path: '',
        component: FilmsListComponent,
      },
      {
        path: ':id',
        component: SingleFilmComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilmsRoutingModule {}
