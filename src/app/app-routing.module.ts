import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'komponent', pathMatch: 'full' },
  { path: 'komponent', loadChildren: () => import('./komponent/komponent.module').then(m => m.KomponentModule) },
  { path: 'submodul', loadChildren: () => import('./submodul/submodul.module').then(m => m.SubmodulModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }