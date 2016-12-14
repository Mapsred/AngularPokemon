import { NgModule } from "@angular/core"
import { PokemonComponent } from "./pokemon.component"
import { PokemonService } from "./pokemon.service"
import { MaterialModule } from '@angular/material';
import {OVERLAY_PROVIDERS, MdIconRegistry} from "@angular/material";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [PokemonComponent],
  imports: [MaterialModule, CommonModule],
  exports: [],
  providers: [OVERLAY_PROVIDERS, MdIconRegistry, PokemonService]
})
export class PokemonModule { }
