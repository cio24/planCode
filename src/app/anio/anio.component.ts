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
  public m10 : Materia;
  public m11 : Materia;
  public m12 : Materia;
  public m13 : Materia;
  public m14 : Materia;
  public primerCuatrimestre: Materia[];
  public segundoCuatrimestre: Materia[];
  public primerCS: Materia[];

  constructor() { 
    this.primerCuatrimestre = [];
    this.segundoCuatrimestre = [];
    this.primerCS = [];

    this.m1 = new Materia("Introducción a la Programación I", "ProgI");

    this.m2 = new Materia("Álgebra I", "Álgebra");
    this.m2.cursadaAprobada = true;
    this.m2.notaCursada = 4;

    this.m3 = new Materia("Análisis Matemático I", "AnálisisI");
    this.m3.cursadaAprobada = true;
    this.m3.notaCursada = 4;
    this.m3.finalAprobado = true;
    this.m3.notaFinal = 10;

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

    this.m6 = new Materia("Introducción a la Programación II","ProgII");
    this.m6.requisitosDirectos.add(this.m1);


    this.m7 = new Materia("Álgebra Lineal","Lineal");
    this.m7.cursadaAprobada = true;
    this.m7.notaCursada = 7;
    this.m7.finalAprobado = true;
    this.m7.notaFinal = 7;
    this.m7.condicional = true;
    this.m7.requisitosDirectos.add(this.m2);

    this.m8 = new Materia("Física General","Física");
    this.m8.cursadaAprobada = true;
    this.m8.notaCursada = 4;
    this.m8.finalAprobado = true;
    this.m8.notaFinal = 10;
    this.m8.requisitosDirectos.add(this.m3);

    this.m9 = new Materia("Matemática Discreta","Discreta");
    this.m9.cursadaAprobada = true;
    this.m9.notaCursada = 4;
    this.m9.finalAprobado = true;
    this.m9.notaFinal= 8;
    this.m9.condicional = true;
    this.m9.requisitosDirectos.add(this.m2);

    this.m10 = new Materia("Ciencias de la Computación II","CienciasII");
    this.m10.cursadaAprobada = true;
    this.m10.notaCursada = 4;
    this.m10.finalAprobado = true;
    this.m10.notaFinal= 8;
    this.m10.condicional = true;
    this.m10.requisitosDirectos.add(this.m6);
    this.m10.requisitosDirectos.add(this.m5);
    this.m10.requisitosDirectos.add(this.m9);

    this.m11 = new Materia("Análisis y Diseño de Algoritmos I","AlgoritmosI");
    this.m11.cursadaAprobada = true;
    this.m11.notaCursada = 4;
    this.m11.finalAprobado = true;
    this.m11.notaFinal= 8;
    this.m11.condicional = true;
    this.m11.requisitosDirectos.add(this.m6);
    this.m11.requisitosDirectos.add(this.m5);
    this.m11.requisitosDirectos.add(this.m9);

    this.m12 = new Materia("Introducción a la Arquitectura de Sistemas","IntroArqui");
    this.m12.cursadaAprobada = true;
    this.m12.notaCursada = 4;
    this.m12.finalAprobado = true;
    this.m12.notaFinal= 8;
    this.m12.condicional = true;
    this.m12.requisitosDirectos.add(this.m6);

    this.m13 = new Materia("Análisis Matemático II","AnálisisII");
    this.m13.cursadaAprobada = true;
    this.m13.notaCursada = 4;
    this.m13.finalAprobado = true;
    this.m13.notaFinal= 8;
    this.m13.condicional = true;
    this.m13.requisitosDirectos.add(this.m2);

    this.m14 = new Materia("Electricidad y Magnetismo","Electricidad");
    this.m14.cursadaAprobada = true;
    this.m14.notaCursada = 4;
    this.m14.finalAprobado = true;
    this.m14.notaFinal= 8;
    this.m14.condicional = true;
    this.m14.requisitosDirectos.add(this.m8);

    this.primerCuatrimestre.push(this.m1);
    this.primerCuatrimestre.push(this.m2);
    this.primerCuatrimestre.push(this.m3);
    this.primerCuatrimestre.push(this.m4);

    this.segundoCuatrimestre.push(this.m5);
    this.segundoCuatrimestre.push(this.m6);
    this.segundoCuatrimestre.push(this.m7);
    this.segundoCuatrimestre.push(this.m8);
    this.segundoCuatrimestre.push(this.m9);

    this.primerCS.push(this.m10);
    this.primerCS.push(this.m11);
    this.primerCS.push(this.m12);
    this.primerCS.push(this.m13);
    this.primerCS.push(this.m14);

    let todas: Set<Materia> = new Set<Materia>();
    todas.add(this.m1);
    todas.add(this.m2);
    todas.add(this.m3);
    todas.add(this.m4);
    todas.add(this.m6);
    todas.add(this.m7);
    todas.add(this.m8);
    todas.add(this.m9);
    todas.add(this.m10);
    todas.add(this.m11);
    todas.add(this.m12);
    todas.add(this.m13);
    todas.add(this.m14);

    this.m1.todasLasMaterias = todas;
    this.m2.todasLasMaterias = todas;
    this.m3.todasLasMaterias = todas;
    this.m4.todasLasMaterias = todas;
    this.m5.todasLasMaterias = todas;
    this.m6.todasLasMaterias = todas;
    this.m7.todasLasMaterias = todas;
    this.m8.todasLasMaterias = todas;
    this.m9.todasLasMaterias = todas;
    this.m10.todasLasMaterias = todas;
    this.m11.todasLasMaterias = todas;
    this.m12.todasLasMaterias = todas;
    this.m13.todasLasMaterias = todas;
    this.m14.todasLasMaterias = todas;


  }

  ngOnInit(): void {
  }

}
