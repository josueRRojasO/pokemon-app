import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './card/card.component';
import { ModalCardComponent } from './modal/modal-card.component';
import { TypeColorService } from '../services/type-color.service'


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CardComponent,
    ModalCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    CardComponent,
    ModalCardComponent
  ],
  providers: [TypeColorService]
})
export class SharedModule { }
