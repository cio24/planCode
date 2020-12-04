import { AfterViewInit, Component, ElementRef, Input, OnInit } from '@angular/core';
import { GestorDeMateriasService } from '../gestor-de-materias.service';
import { Materia } from '../materia/Materia';

@Component({
  selector: 'app-carrera',
  templateUrl: './carrera.component.html',
  styleUrls: ['./carrera.component.css']
})
export class CarreraComponent implements OnInit, AfterViewInit {

  @Input()
  public urlCarrera!: string;

  public anios!: Materia[][][];

  constructor(public gestorDeMaterias: GestorDeMateriasService, private elementRef: ElementRef) {
  }

  ngOnInit(): void {
    this.anios = this.gestorDeMaterias.getAniosCarrera(this.urlCarrera);
  }

  ngAfterViewInit(){
      this.elementRef.nativeElement.ownerDocument.body.style.backgroundImage = 'url(/assets/Bgblack.PNG)';
  }

  public changeBackground(): void {
    if(this.gestorDeMaterias.dark){
      this.elementRef.nativeElement.ownerDocument.body.style.backgroundImage = 'url(/assets/a.jpg)';
      this.gestorDeMaterias.dark = false;
      this.gestorDeMaterias.mode = "Dark";
    }
    else{
      this.elementRef.nativeElement.ownerDocument.body.style.backgroundImage = 'url(/assets/Bgblack.PNG)';
      this.gestorDeMaterias.dark = true;
      this.gestorDeMaterias.mode = "Light";
    }
  }

}
