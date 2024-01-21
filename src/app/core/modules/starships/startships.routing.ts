// src/app/lazy/lazy-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarshipWallComponent } from './components/starship-wall/starship-wall.component';

const routes: Routes = [
  { path: '', component: StarshipWallComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarShipRoutingModule {}

