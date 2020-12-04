import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Materia } from './materia/Materia';
import { catchError, retry } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GestorDeMateriasService {

  private urlCarrera!: string;
  public dark: boolean = true;
  public mode: string = "Light";

  constructor(private htttp: HttpClient) { }

  public todasLasMaterias: Materia[] = [];

  public getAniosCarrera(urlCarrera: string): Materia[][][] {
    this.urlCarrera = urlCarrera;
    let anios:Materia[][][] = [];
    this.htttp.get<{ [key: string]: any }>(urlCarrera + ".json").subscribe( carrera => {
      for(let keyAnio in carrera){
        let anio: Materia[][] = [];
        for(let keyCuatrimestre in carrera[keyAnio]){
          let cuatrimestre: Materia[] = [];
          let contador: number = 0;
          carrera[keyAnio][keyCuatrimestre].forEach((m:any) => {
            let materia: Materia = new Materia(m,keyCuatrimestre,keyAnio,contador,this);
            console.log("nueva materia cargada:");
            console.log(materia);
            this.todasLasMaterias.push(materia);
            cuatrimestre.push(materia);
            contador = contador + 1;
          });
          anio.push(cuatrimestre);
        }
        anios.push(anio);
      }
    });
    return anios;
  }

  public actualizarMateria(materia: Materia): void {
    console.log("nota de cursada: " + materia.notaCursada);
    let rf: string[] = [];
    for(let m of materia.requisitosFinal){
      rf.push(m.id);
    }
    
    let rc: string[] = [];
    for(let m of materia.requisitosDirectosCursada){
      rf.push(m.id);
    }
    
    let fa: string;
    if(materia.finalAprobado)
      fa = "true"
    else
      fa = "false"

    let ca: string;
    if(materia.cursadaAprobada)
      ca = "true"
    else
      ca = "false"

    let m: {} = {
      "id": materia.id,
      "nombre": materia.nombre,
      "nick": materia.nick,
      "notaCursada": materia.notaCursada,
      "notaFinal": materia.notaFinal,
      "cursadaAprobada": ca,
      "finalAprobado": fa,
      "promocionada": materia.promocionada,
      "condicional": materia.condicional,
      "requisitosCursada": rc,
      "requisitosFinal": rf,
      "equivalencias": [],
      "tipo": materia.tipo
    };

    console.log("la materia que se sube es: ");
    console.log(m);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'my-auth-token'
      })
    };
    let url = this.urlCarrera + "/" + materia.anio + "/" + materia.cuatrimiestre + "/" +materia.pos + ".json";
    this.htttp.put(url, m, httpOptions).subscribe(
      res => {
          console.log(res);
      }
  );;
  
  }
}
