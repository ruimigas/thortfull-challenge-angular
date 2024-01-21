import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/starship',
    pathMatch:'full'
  },
  {
  path: 'starship', loadChildren: () => import('./core/modules/starships/starships.module').then(m => m.StarShipModule),
  },
  {
  path: 'profile', loadChildren: () => import('./core/modules/profile/profile.module').then(m => m.ProfileModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}

