import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileMaterialModule } from 'src/app/material/profile-material.module';

@NgModule({
  declarations: [ProfileComponent],
  imports: [CommonModule, ProfileRoutingModule, ProfileMaterialModule],
})
export class ProfileModule {}
