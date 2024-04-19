import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { SharedModule } from '../shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    PokemonListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NgxPaginationModule
  ],
  exports: [PokemonListComponent]
})
export class ListModule { }
