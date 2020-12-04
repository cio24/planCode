import { Component, Input, OnInit } from '@angular/core';
import { GestorDeMateriasService } from '../gestor-de-materias.service';
import { Materia } from '../materia/Materia';

@Component({
  selector: 'app-carrera',
  templateUrl: './carrera.component.html',
  styleUrls: ['./carrera.component.css']
})
export class CarreraComponent implements OnInit {

  @Input()
  public urlCarrera!: string;

  public anios!: Materia[][][];

  constructor(private gestorDeMaterias: GestorDeMateriasService) {
   }

  ngOnInit(): void {
    this.anios = this.gestorDeMaterias.getAniosCarrera(this.urlCarrera);
  }

}
