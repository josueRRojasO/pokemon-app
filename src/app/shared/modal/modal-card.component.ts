import { Component, OnInit } from '@angular/core';
import { TypeColorService } from 'src/app/services/type-color.service';

@Component({
  selector: 'app-modal-card',
  templateUrl: './modal-card.component.html',
  styleUrls: ['./modal-card.component.scss']
})
export class ModalCardComponent implements OnInit {

  constructor(private typeColorService: TypeColorService) { }

  ngOnInit(): void {
    this.typeColorService.typeColors['bug']
  }

}
