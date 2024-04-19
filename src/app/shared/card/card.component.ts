import { Component, Input } from '@angular/core';

export interface BasicPokemonCard {
  name: string;
  url: string
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  private _pokemon!: BasicPokemonCard;
  public get pokemon(): BasicPokemonCard {
    return this._pokemon;
  }
  @Input()
  public set pokemon(value: BasicPokemonCard) {
    this._pokemon = value;
    console.log(value);
  }

  cardColor: string = ''
  pokemonURL: string = ''

  constructor() {}

}
