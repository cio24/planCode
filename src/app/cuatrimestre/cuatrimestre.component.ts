import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Materia } from '../materia/Materia';

@Component({
  selector: 'app-cuatrimestre',
  templateUrl: './cuatrimestre.component.html',
  styleUrls: ['./cuatrimestre.component.css']
})
export class CuatrimestreComponent implements OnInit {
  
  public m1 : Materia;
  public m2 : Materia;
  public m3 : Materia;
  public m4 : Materia;
  public materias: Materia[];
  
  @Input()
  public semesterNumber!: number;
  
  constructor() {
    this.materias = [];

    this.m1 = new Materia("Introducción a la Programación I", "ProgI");
    this.m1.showAsRequirement = true;

    this.m2 = new Materia("Álgebra I", "Álgebra");
    this.m2.cursadaAprobada = true;
    this.m2.notaCursada = 4;

    this.m3 = new Materia("Análisis Matemático I", "AnálisisI");
    this.m3.cursadaAprobada = true;
    this.m3.notaCursada = 4;
    this.m3.finalAprobado = true;
    this.m3.notaFinal = 70;
    this.m3.showAscorrelative = true;

    this.m4 = new Materia("Química","Química");
    this.m4.cursadaAprobada = true;
    this.m4.notaCursada = 7;
    this.m4.finalAprobado = true;
    this.m4.notaFinal = 7;
    this.m4.condicional = true;



    this.materias.push(this.m1);
    this.materias.push(this.m2);
    this.materias.push(this.m3);
    this.materias.push(this.m4);
  }


  ngOnInit(): void {
  }

}
