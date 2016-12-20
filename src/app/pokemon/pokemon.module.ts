import { NgModule } from "@angular/core"
import { PokemonComponent } from "./pokemon.component"
import { PokemonService } from "./pokemon.service"
import { MaterialModule } from '@angular/material';
import {OVERLAY_PROVIDERS, MdIconRegistry} from "@angular/material";
import {CommonModule} from "@angular/common";
import {LayoutDirective} from "../directive/LayoutDirective";
import {FlexDirective} from "../directive/FlexDirective";


@NgModule({
  declarations: [PokemonComponent, LayoutDirective, FlexDirective],
  imports: [MaterialModule, CommonModule],
  exports: [],
  providers: [OVERLAY_PROVIDERS, MdIconRegistry, PokemonService]
})
export class PokemonModule { }
