import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SubmodulComponent } from './submodul/submodul.component';
import { Wewnatrz1Component } from './wewnatrz1/wewnatrz1.component';
import { Wewnatrz2Component } from './wewnatrz2/wewnatrz2.component';

const routes: Routes = [
  {
    path: '',
    component: SubmodulComponent,
    children: [
      { path: 'wewnatrz1', component: Wewnatrz1Component },
      { path: 'wewnatrz2', component: Wewnatrz2Component }
    ]
  }
];

@NgModule({
  declarations: [
    SubmodulComponent,
    Wewnatrz1Component,
    Wewnatrz2Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SubmodulModule { }