import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import 'hammerjs';

import {AppComponent} from './app.component';
import {appRoutes} from './app.routes';
import {LocalStorageModule} from 'angular-2-local-storage';

import {PokemonModule} from './pokemon/pokemon.module';
import {PokemonDetailModule} from './pokemon-detail/pokemon-detail.module';
import {PokemonCollectionModule} from './pokemon-collection/pokemon-collection.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PokemonModule,
    PokemonDetailModule,
    PokemonCollectionModule,
    RouterModule.forRoot(appRoutes),
    LocalStorageModule.withConfig({prefix: 'my-app', storageType: 'localStorage'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
