import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import {Alumno} from './../../modelo/alumno/alumno.component';

@Component({
  selector: 'app-listar-alumnos',
  templateUrl: './listar-alumnos.component.html',
  styleUrls: ['./listar-alumnos.component.scss']
})
export class ListarAlumnosComponent  {
  @Input() public alumno!: Array<Alumno>;
  @Output() public posIndex = new EventEmitter<number>();

  public escucharId(id: number): void {
    const pos = this.alumno.findIndex((elemento) => {
      return id === elemento.rutUnico;
    });
    this.posIndex.emit(pos);
  }


}
