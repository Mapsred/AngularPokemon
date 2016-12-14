import { PokemonComponent } from "./pokemon/pokemon.component"
import { PokemonDetailComponent } from "./pokemon-detail/pokemon-detail.component"
import { Routes } from "@angular/router"

export const appRoutes: Routes = [
  { path: '', component: PokemonComponent },
  { path: 'detail/:id', component: PokemonDetailComponent },
];
