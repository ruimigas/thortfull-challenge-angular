import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StarShipRoutingModule } from './startships.routing';
import { StarshipWallComponent } from './components/starship-wall/starship-wall.component';
import { SharedModule } from '../../../shared/module/shared/shared.module';


@NgModule({
  imports: [
  CommonModule,
  StarShipRoutingModule,
  SharedModule
  ],
  declarations: [
    StarshipWallComponent
  ]
})
export class StarShipModule { }
