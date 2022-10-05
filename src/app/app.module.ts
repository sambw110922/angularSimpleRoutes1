import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavLinksComponent } from './nav-links/nav-links.component';
import { GryffindorComponent } from './gryffindor/gryffindor.component';
import { SlytherinComponent } from './slytherin/slytherin.component';
import { RavenclawComponent } from './ravenclaw/ravenclaw.component';
import { HufflepuffComponent } from './hufflepuff/hufflepuff.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { SecretHouseComponent } from './secret-house/secret-house.component';
import { HouseLeaderComponent } from './house-leader/house-leader.component';

@NgModule({
  declarations: [
    AppComponent,
    NavLinksComponent,
    GryffindorComponent,
    SlytherinComponent,
    RavenclawComponent,
    HufflepuffComponent,
    ErrorPageComponent,
    SecretHouseComponent,
    HouseLeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
