import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

import { RoutingModule } from './routing.module';

@NgModule({
  imports: [
    BrowserModule,
    RoutingModule
  ],
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ProfileComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
