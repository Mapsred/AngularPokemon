import { NgModule } from "@angular/core"
import { PokemonCollectionComponent } from "./pokemon-collection.component"
import { PokemonService } from "../pokemon/pokemon.service"
import { MaterialModule } from '@angular/material';
import {OVERLAY_PROVIDERS, MdIconRegistry} from "@angular/material";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [PokemonCollectionComponent],
  imports: [MaterialModule, CommonModule],
  exports: [],
  providers: [OVERLAY_PROVIDERS, MdIconRegistry, PokemonService]
})
export class PokemonCollectionModule { }
