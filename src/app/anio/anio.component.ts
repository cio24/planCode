import { Component, OnInit } from '@angular/core';
import { Materia } from '../materia/Materia';

@Component({
  selector: 'app-anio',
  templateUrl: './anio.component.html',
  styleUrls: ['./anio.component.css']
})
export class AnioComponent implements OnInit {

  public m1 : Materia;
  public m2 : Materia;
  public m3 : Materia;
  public m4 : Materia;
  public m5 : Materia;
  public m6 : Materia;
  public m7 : Materia;
  public m8 : Materia;
  public m9 : Materia;
  public primerCuatrimestre: Materia[];
  public segundoCuatrimestre: Materia[];

  constructor() { 
    this.primerCuatrimestre = [];
    this.segundoCuatrimestre = [];

    this.m1 = new Materia("Introducción a la Programación I", "ProgI");
    this.m1.showAsRequirement = true;

    this.m2 = new Materia("Álgebra I", "Álgebra");
    this.m2.cursadaAprobada = true;
    this.m2.notaCursada = 4;

    this.m3 = new Materia("Análisis Matemático I", "AnálisisI");
    this.m3.cursadaAprobada = true;
    this.m3.notaCursada = 4;
    this.m3.finalAprobado = true;
    this.m3.notaFinal = 10;
    this.m3.showAscorrelative = true;

    this.m4 = new Materia("Química","Química");
    this.m4.cursadaAprobada = true;
    this.m4.notaCursada = 7;
    this.m4.finalAprobado = true;
    this.m4.notaFinal = 7;
    this.m4.condicional = true;

    this.m5 = new Materia("Ciencias de la Computación I","CienciasI");
    this.m5.cursadaAprobada = true;
    this.m5.notaCursada = 4;
    this.m5.finalAprobado = true;
    this.m5.notaFinal = 10;
    this.m5.showAscorrelative = true;

    this.m6 = new Materia("Introducción a la Programación II","ProgII");
    this.m6.showAsRequirement = true;


    this.m7 = new Materia("Álgebra Lineal","Lineal");
    this.m7.cursadaAprobada = true;
    this.m7.notaCursada = 7;
    this.m7.finalAprobado = true;
    this.m7.notaFinal = 7;
    this.m7.condicional = true;

    this.m8 = new Materia("Física General","Física");
    this.m8.cursadaAprobada = true;
    this.m8.notaCursada = 4;
    this.m8.finalAprobado = true;
    this.m8.notaFinal = 10;
    this.m8.showAscorrelative = true;

    this.m9 = new Materia("Matemática Discreta","Discreta");
    this.m9.cursadaAprobada = true;
    this.m9.notaCursada = 4;
    this.m9.finalAprobado = true;
    this.m9.notaFinal =8;
    this.m9.condicional = true;



    this.primerCuatrimestre.push(this.m1);
    this.primerCuatrimestre.push(this.m2);
    this.primerCuatrimestre.push(this.m3);
    this.primerCuatrimestre.push(this.m4);

    this.segundoCuatrimestre.push(this.m5);
    this.segundoCuatrimestre.push(this.m6);
    this.segundoCuatrimestre.push(this.m7);
    this.segundoCuatrimestre.push(this.m8);
    this.segundoCuatrimestre.push(this.m9);
  }

  ngOnInit(): void {
  }

}
