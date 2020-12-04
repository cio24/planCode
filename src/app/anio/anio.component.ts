import { Component, Input, OnInit } from '@angular/core';
import { Materia } from '../materia/Materia';
import { Anio } from './Anio';

@Component({
  selector: 'app-anio',
  templateUrl: './anio.component.html',
  styleUrls: ['./anio.component.css']
})
export class AnioComponent implements OnInit {

  @Input()
  public anio!: Materia[][];

  constructor() { 

  }

  ngOnInit(): void {
  }

}
