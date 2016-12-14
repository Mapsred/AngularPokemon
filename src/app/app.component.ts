import { Component } from '@angular/core';
import {AppService} from './app.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';
  private pokemons;

  constructor(protected appService: AppService) {}

  ngOnInit() {
    this.appService.getPokemons().subscribe(pokemons => this.pokemons = pokemons)
  }
}
