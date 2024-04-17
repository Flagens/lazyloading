import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // Import RouterModule

import { AppRoutingModule } from './app-routing.module'; // Assuming you have a separate routing module
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // Import the routing module
    RouterModule // Import RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }