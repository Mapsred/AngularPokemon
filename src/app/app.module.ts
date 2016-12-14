import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MaterialModule} from '@angular/material';
import {AppService} from './app.service'
import { RouterModule, Routes } from '@angular/router';
import 'hammerjs';

import {AppComponent} from './app.component';
import { PokemonComponent } from './pokemon/pokemon.component';

const appRoutes: Routes = [
  { path: '', component: PokemonComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})

export class AppModule {
}
