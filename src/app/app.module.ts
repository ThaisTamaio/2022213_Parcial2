import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MaravillasModule } from './maravillas/maravillas.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarMaravillasComponent } from './listar-maravillas/listar-maravillas.component';
import { DetalleMaravillasComponent } from './detalle-maravillas/detalle-maravillas.component';

@NgModule({
  declarations: [
    AppComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaravillasModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
