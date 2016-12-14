import { Component, OnInit } from '@angular/core';
import {AppService} from "../app.service";

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  title = 'app works!';
  private pokemons;

  constructor(protected appService: AppService) {}

  ngOnInit() {
    this.appService.getPokemons().subscribe(pokemons => this.pokemons = pokemons)
  }

}
