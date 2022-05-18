import { NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';

const MaterialComponents = [MatPaginatorModule, MatCardModule];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents],
})
export class FilmsListMaterialModule {}
