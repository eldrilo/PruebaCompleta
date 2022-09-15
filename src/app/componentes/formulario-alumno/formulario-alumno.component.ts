import { Component, EventEmitter, Output,Input,OnInit} from '@angular/core';
import { Alumno} from '../../modelo/alumno/alumno.component';


@Component({
  selector: 'app-formulario-alumno',
  templateUrl: './formulario-alumno.component.html',
  styleUrls: ['./formulario-alumno.component.scss']
})

export class FormularioAlumnoComponent  {
@Output() public envio = new EventEmitter<Alumno>();
  public alumnoNuevo : Alumno = {
    rutUnico: 0,
    nombre:'',
    apellido:'',
    edad: 0,
    seccion: ''
  }


  public guardarElalumno(): void {
    const copia: Alumno = {
      ...this.alumnoNuevo
    }
    this.envio.emit(copia);
    this.alumnoNuevo = {
      rutUnico: 0,
      nombre:'',
      apellido:'',
      edad: 0,
      seccion: ''
    }
  }

    public cambiodeRut(evento: Event): void{
      const elemento = evento.target as HTMLInputElement;
      this.alumnoNuevo.rutUnico = Number.parseInt(elemento.value);
    }

    public cambiodeNombre(evento: Event): void {
      const elemento = evento.target as HTMLInputElement;
      this.alumnoNuevo.nombre = elemento.value;
    }
    public cambiodeApellido(evento: Event): void {
      const elemento = evento.target as HTMLInputElement;
      this.alumnoNuevo.apellido = elemento.value;
    }

    public cambiodeEdad(evento: Event): void {
      const elemento = evento.target as HTMLInputElement;
      this.alumnoNuevo.edad = Number.parseInt(elemento.value);
    }

    public cambiodeSeccion(evento: Event): void{
      const elemento = evento.target as HTMLInputElement;
      this.alumnoNuevo.seccion = elemento.value;
    }

}

