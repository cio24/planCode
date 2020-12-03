import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Materia } from '../materia/Materia';

@Component({
  selector: 'app-cuatrimestre',
  templateUrl: './cuatrimestre.component.html',
  styleUrls: ['./cuatrimestre.component.css']
})
export class CuatrimestreComponent implements OnInit {
  

  @Input()
  public materias!: Materia[];
  
  @Input()
  public semesterNumber!: number;
  
  constructor() {
  }


  ngOnInit(): void {
  }

}
