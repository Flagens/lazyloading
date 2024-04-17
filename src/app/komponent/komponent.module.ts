import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { KomponentComponent } from './komponent/komponent.component';

const routes: Routes = [
  { path: '', component: KomponentComponent }
];

@NgModule({
  declarations: [
    KomponentComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class KomponentModule { }