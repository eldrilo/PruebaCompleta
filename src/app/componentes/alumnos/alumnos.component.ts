import { Component, Input,EventEmitter,OnInit,Output } from '@angular/core';
import { Alumno } from '../../modelo/alumno/alumno.component';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss']
})
export class AlumnosComponent  {
  @Input() public alumno! : Alumno;


}
