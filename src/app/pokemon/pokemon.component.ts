import {Component, OnInit} from '@angular/core';
import {PokemonService} from "./pokemon.service";
import {Pokemon} from "../model/pokemon";
import {Router} from "@angular/router";

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  private pokemons: any = [];
  private title = "Pokemons";

  constructor(private router: Router, private pokemonService: PokemonService) {
  }

  ngOnInit() {
    this.pokemonService.getPokemons().subscribe(pokemons => this.pokemons = pokemons);
  }


  getId(url: string) {
    let splited = url.split("/");

    return splited[splited.length - 2];
  }

  clicked(event, url: string) {
    this.router.navigate(['/detail', this.getId(url)]);
  }

}
