import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Maravilla } from '../maravillas/maravilla';

@Component({
  selector: 'app-listar-maravillas',
  templateUrl: './listar-maravillas.component.html',
  styleUrls: ['./listar-maravillas.component.css']
})
export class ListarMaravillasComponent implements OnInit {

  @Input () public maravillas:Maravilla[] | undefined;
  @Output() clickMaravillas = new EventEmitter<Maravilla>();

  constructor() { }

  ngOnInit() {
  }

  clickMaravilla(maravilla:Maravilla){
    this.clickMaravillas.emit(maravilla);
  }

}
