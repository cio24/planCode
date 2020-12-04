import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Anio } from './anio/Anio';
import { AnioComponent } from './anio/anio.component';
import { Materia } from './materia/Materia';
@Injectable({
  providedIn: 'root'
})
export class GestorDeMateriasService {

  constructor(private htttp: HttpClient) { }

  public todasLasMaterias: Materia[] = [];

  public getAniosCarrera(urlCarrera: string): Materia[][][] {
    let anios:Materia[][][] = [];
    this.htttp.get<{ [key: string]: any }>(urlCarrera).subscribe( carrera => {
      for(let keyAnio in carrera){
        let anio: Materia[][] = [];
        for(let keyCuatrimestre in carrera[keyAnio]){
          let cuatrimestre: Materia[] = [];
          carrera[keyAnio][keyCuatrimestre].forEach((m:any) => {
            let materia: Materia = new Materia(m,this);
            this.todasLasMaterias.push(materia);
            cuatrimestre.push(materia);
          });
          anio.push(cuatrimestre);
        }
        anios.push(anio);
      }
    });
    return anios;
  }

}
