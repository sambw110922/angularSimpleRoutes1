import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GryffindorComponent } from './gryffindor/gryffindor.component';
import { SlytherinComponent } from './slytherin/slytherin.component';
import { HufflepuffComponent } from './hufflepuff/hufflepuff.component';
import { RavenclawComponent } from './ravenclaw/ravenclaw.component';
import { SecretHouseComponent } from './secret-house/secret-house.component';

import { HouseLeaderComponent } from './house-leader/house-leader.component';

import { ErrorPageComponent } from './error-page/error-page.component';

const routes: Routes = [
  { 
    path : "gryffindor", 
    component: GryffindorComponent, 
    children:[
      { 
        path : "leader",
        component: HouseLeaderComponent
      }
    ]
  },
  { path : "slytherin", component: SlytherinComponent },
  { path : "ravenclaw", component: RavenclawComponent },
  { path : "hufflepuff", component: HufflepuffComponent },
  { path : "secret-house-hush", pathMatch: 'full', component: SecretHouseComponent },
  { path : "**", component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
