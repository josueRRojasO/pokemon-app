import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonCard } from 'src/app/models/pokemon-card';
import { PokemonList, Result } from 'src/app/models/pokemon-list';
import { PokemonInfoService } from 'src/app/services/pokemon-info.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit, OnDestroy {

  pokemon!: Pokemon
  pokemonList!: PokemonList
  pokemonCardInfo!: PokemonCard
  modalSwitch: boolean = false
  unsubscribeSignal: EventEmitter<any> = new EventEmitter<any>()
  p: number = 1;
  constructor(private pokemonInfoService: PokemonInfoService) { }

  ngOnInit(): void {
    this.getAllPokemon()
  }

  ngOnDestroy(): void {
    this.unsubscribeSignal.next
    this.unsubscribeSignal.unsubscribe()
  }

  getAllPokemon(){
    this.pokemonInfoService
    .getPokemonList()
    .pipe(takeUntil(this.unsubscribeSignal))
    .subscribe(pokemonList => {
      this.pokemonList = pokemonList
      console.log(this.pokemonList);
    })
  }

  initializePokemonValue(name: string) {
    this.pokemonInfoService
    .getPokemonByName(name)
    .pipe(takeUntil(this.unsubscribeSignal))
    .subscribe(
      (pokemon) => {
        this.pokemon = pokemon
        this.createPokemonModalCardInfo()
        this.modalSwitch = true
      },
      (err) => { console.log(err) },
    )
  }

  cratePokemonCardInfo(){
    if(!this.pokemonList) return;
  }

  createPokemonModalCardInfo() {
    if (!this.pokemon) return;

    const { types, stats, name, sprites } = this.pokemon;

    const type = types.map((type) => type.type.name).join(' / ');
    const url = sprites?.front_default || '';

    const { base_stat: hp } = stats.find((stat) => stat.stat.name === 'hp') || { base_stat: 0 };
    const { base_stat: attack } = stats.find((stat) => stat.stat.name === 'attack') || { base_stat: 0 };
    const { base_stat: defense } = stats.find((stat) => stat.stat.name === 'defense') || { base_stat: 0 };
    const { base_stat: special_attack } = stats.find((stat) => stat.stat.name === 'special-attack') || { base_stat: 0 };
    const { base_stat: special_defense } = stats.find((stat) => stat.stat.name === 'special-defense') || { base_stat: 0 };
    const { base_stat: speed } = stats.find((stat) => stat.stat.name === 'speed') || { base_stat: 0 };

    this.pokemonCardInfo = {
      name,
      type,
      hp,
      attack,
      defense,
      special_attack,
      special_defense,
      speed,
      url
    };
  }

  openModal(pokemon: Result){
    this.initializePokemonValue(pokemon.name)
  }
  closeModal($event: boolean){
    this.modalSwitch = false
  }

  trackByItems(index: number, name: any): number {
    return name;
  }

}
