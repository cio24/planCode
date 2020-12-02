import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MateriaComponent } from './materia/materia.component';
import { CommonModule } from '@angular/common';
import { CuatrimestreComponent } from './cuatrimestre/cuatrimestre.component';
import { FormsModule } from '@angular/forms';
import { AnioComponent } from './anio/anio.component';

@NgModule({
  declarations: [
    AppComponent,
    MateriaComponent,
    CuatrimestreComponent,
    AnioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
