import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { Design1Component } from './components/design1/design1.component';
import { Design2Component } from './components/design2/design2.component';
import { Design3Component } from './components/design3/design3.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    Design1Component,
    Design2Component,
    Design3Component,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
