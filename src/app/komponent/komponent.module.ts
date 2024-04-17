import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { KomponentComponent } from './komponent/komponent.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: KomponentComponent }
];

@NgModule({
  declarations: [
    KomponentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class KomponentModule { }