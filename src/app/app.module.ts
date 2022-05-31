import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ItalianComponent } from './italian/italian.component';
import { GermanComponent } from './german/german.component';
import { PortugueseComponent } from './portuguese/portuguese.component';
import { FrenchComponent } from './french/french.component';

@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      FrenchComponent,
      ItalianComponent,
      GermanComponent,
      PortugueseComponent,
      FrenchComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
