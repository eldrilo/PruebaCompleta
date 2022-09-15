import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioAlumnoComponent } from './componentes/formulario-alumno/formulario-alumno.component';
import { FormularioSeccionComponent } from './componentes/formulario-seccion/formulario-seccion.component';
import { ListarAlumnosComponent } from './componentes/listar-alumnos/listar-alumnos.component';
import { ListarHistorialComponent } from './componentes/listar-historial/listar-historial.component';
import { AlumnosComponent } from './componentes/alumnos/alumnos.component';
import { HistorialComponent } from './componentes/historial/historial.component';


@NgModule({
  declarations: [
    AppComponent,
    FormularioAlumnoComponent,
    FormularioSeccionComponent,
    ListarAlumnosComponent,
    ListarHistorialComponent,
    AlumnosComponent,
    HistorialComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
