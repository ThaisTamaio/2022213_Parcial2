import { Component, OnInit } from '@angular/core';
import { Maravilla } from './maravilla';
import { MaravillasService } from './maravillas.service';


@Component({
  selector: 'app-maravillas',
  templateUrl: './maravillas.component.html',
  styleUrls: ['./maravillas.component.css']
})
export class MaravillasComponent implements OnInit {

  maravillas: Maravilla[] = {} as Maravilla[];

  maravillaSeleccionada: Maravilla | undefined;

  constructor(private maravillasService:MaravillasService) { }

  ngOnInit() {
    this.maravillasService.getMaravillas().subscribe(maravillas => {
      this.maravillas = maravillas;
    });
  }

  clickMaravilla(maravilla:Maravilla){
    this.maravillaSeleccionada = maravilla;
  }

}
