import { Component, OnInit } from '@angular/core';
import {PokemonService} from "../pokemon/pokemon.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  constructor(private router: Router, private service: PokemonService) { }

  ngOnInit() {
  }

}
