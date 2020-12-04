import { Component, Input, OnInit } from '@angular/core';
import { GestorDeMateriasService } from '../gestor-de-materias.service';
import { Materia } from './Materia';

@Component({
  selector: 'app-materia',
  templateUrl: './materia.component.html',
  styleUrls: ['./materia.component.css']
})
export class MateriaComponent implements OnInit {

  @Input()
  public materia!: Materia;
  
  public pass!: string;
  
  public isMouseOver: boolean;
  public final!: number;

  constructor(public gestorDeMaterias: GestorDeMateriasService) {
    this.isMouseOver = false;
  }

  ngOnInit(): void {
    this.materia.todasLasMaterias = this.gestorDeMaterias.todasLasMaterias;
  }

  public showAsDark(): boolean {
    return !this.materia.showAscorrelative && !this.materia.showAsRequirement && !this.isMouseOver && this.gestorDeMaterias.dark;
  }

  public showAsLight(): boolean {
    return !this.materia.showAscorrelative && !this.materia.showAsRequirement && !this.isMouseOver && !this.gestorDeMaterias.dark;
  }

  public showAsCorrelative(): boolean {
    return this.materia.showAscorrelative && !this.isMouseOver;
  }

  public showAsRequirement(): boolean {
    return this.materia.showAsRequirement && !this.isMouseOver;
  }
  
  public actualizarFinalAprobado(): void {
    if(this.materia.notaFinal < 4 || this.materia.notaFinal > 10)
      this.materia.finalAprobado = false;
    else
      this.materia.finalAprobado = true;
  }

  public actualizarCursadaAprobada(): void {
    if(this.materia.notaCursada < 4 || this.materia.notaCursada > 10)
      this.materia.cursadaAprobada = false;
    else
      this.materia.cursadaAprobada = true;
  }

  public actualizarMateria(): void {
    this.gestorDeMaterias.actualizarMateria(this.materia);
  }

}
