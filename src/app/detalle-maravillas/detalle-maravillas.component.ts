import { Component, Input, OnInit } from '@angular/core';
import { Maravilla } from '../maravillas/maravilla';

@Component({
  selector: 'app-detalle-maravillas',
  templateUrl: './detalle-maravillas.component.html',
  styleUrls: ['./detalle-maravillas.component.css']
})
export class DetalleMaravillasComponent implements OnInit {

  @Input() public maravilla:Maravilla = {} as Maravilla;

  constructor() { }

  ngOnInit() {
  }

}
