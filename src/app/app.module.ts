import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MateriaComponent } from './materia/materia.component';
import { CommonModule } from '@angular/common';
import { CuatrimestreComponent } from './cuatrimestre/cuatrimestre.component';
import { FormsModule } from '@angular/forms';
import { AnioComponent } from './anio/anio.component';
import { CarreraComponent } from './carrera/carrera.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MateriaComponent,
    CuatrimestreComponent,
    AnioComponent,
    CarreraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
