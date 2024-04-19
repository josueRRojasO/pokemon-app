import { Component, Input } from '@angular/core';
import { PokemonCard } from 'src/app/models/pokemon-card';
import { TypeColorService } from 'src/app/services/type-color.service';

@Component({
  selector: 'app-modal-card',
  templateUrl: './modal-card.component.html',
  styleUrls: ['./modal-card.component.scss']
})
export class ModalCardComponent {

  private _pokemon!: PokemonCard;
  public get pokemon(): PokemonCard {
    return this._pokemon;
  }
  @Input()
  public set pokemon(value: PokemonCard) {
    this._pokemon = value;
    this.initializeParams()
  }

  cardColor: string = ''
  pokemonURL: string = ''

  constructor(private typeColorService: TypeColorService) {}

  initializeParams(): void {
      if(!this._pokemon) return
      const firstType = this.filterType(this.pokemon.type)
      this.initializeURL(this.pokemon.url)
      this.initializeCardColor(firstType)
  }

  initializeCardColor(type: string) {
    this.cardColor = this.typeColorService.typeColors[type]
  }

  filterType(type: string){
    return type.slice(0, type.lastIndexOf(" /"));
  }

  initializeURL(url: string) {
    this.pokemonURL = url
  }
}
