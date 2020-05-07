import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { LibrosLeidosService } from './_services/libros-leidos.service';
import { LibrosRecomendadosService } from './_services/libros-recomendados.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    LibrosLeidosService,
    LibrosRecomendadosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
