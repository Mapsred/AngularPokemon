import { NgModule } from "@angular/core"
import { PokemonDetailComponent } from "./pokemon-detail.component"
import { PokemonService } from "../pokemon/pokemon.service"
import { MaterialModule } from '@angular/material';
import {OVERLAY_PROVIDERS, MdIconRegistry} from "@angular/material";
import {CommonModule} from "@angular/common";


@NgModule({
  declarations: [PokemonDetailComponent],
  imports: [MaterialModule, CommonModule],
  exports: [],
  providers: [OVERLAY_PROVIDERS, MdIconRegistry, PokemonService]
})
export class PokemonDetailModule { }
