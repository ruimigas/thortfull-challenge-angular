import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileRoutingModule } from './profile.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../shared/module/shared/shared.module';


@NgModule({
  imports: [
  CommonModule,
  ReactiveFormsModule,
  ProfileRoutingModule,
  SharedModule
  ],
  declarations: [
    ProfileComponent
  ]
})
export class ProfileModule { }
