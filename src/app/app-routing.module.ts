import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ItalianComponent } from './italian/italian.component';
import { GermanComponent } from './german/german.component';
import { PortugueseComponent } from './portuguese/portuguese.component';
import { FrenchComponent } from './french/french.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'french', component: FrenchComponent},
  { path: 'italian', component: ItalianComponent},
  { path: 'german', component: GermanComponent},
  { path: 'portuguese', component: PortugueseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
