import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './card/card.component';
import { ModalCardComponent } from './modal/modal-card.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CardComponent,
    ModalCardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
