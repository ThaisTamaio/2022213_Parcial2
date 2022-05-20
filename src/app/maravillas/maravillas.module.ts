import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaravillasComponent } from './maravillas.component';
import { ListarMaravillasComponent } from '../listar-maravillas/listar-maravillas.component';
import { DetalleMaravillasComponent } from '../detalle-maravillas/detalle-maravillas.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MaravillasComponent, ListarMaravillasComponent, DetalleMaravillasComponent],
  exports: [MaravillasComponent]
})
export class MaravillasModule { }
