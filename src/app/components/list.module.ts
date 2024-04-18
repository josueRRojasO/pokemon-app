import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    PokemonListComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [PokemonListComponent]
})
export class ListModule { }
