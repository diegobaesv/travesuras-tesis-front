import { Component,  OnInit } from '@angular/core';
import { Alumno } from 'src/app/models/alumno';
import { Ambiente } from 'src/app/models/ambiente';
import { AlumnosService } from 'src/app/services/alumnos.service';
import { AmbientesService } from 'src/app/services/ambientes.service';
import { MatriculaService } from 'src/app/services/matricula.service';

@Component({
  selector: 'app-matricula',
  templateUrl: './matricula.component.html',
  styleUrls: ['./matricula.component.css']
})
export class MatriculaComponent implements OnInit {

  selectedAlumno!: Alumno;
  alumnos_autocompleteResult: Alumno[] = [];

  selectedAmbiente!: Ambiente;
  ambientes: Ambiente[] = [];

  selectedVacantes: number | string = '';

  selectedDocenteNombreCompleto: string='';

  selectedFecha: Date =new Date();

  selectedEstadoMatriculaTexto: string = '';
  selectedEstadoMatricula :boolean = false;

  errorAlumno: boolean = false;
  errorAmbiente: boolean = false;
  errorFechaMatricula: boolean = false;

  constructor(private alumnosServices: AlumnosService, private ambientesService: AmbientesService, private matriculaService: MatriculaService) {
  }

  ngOnInit(): void {
    this.cargarAmbientes();

  }

  searchAlumno(event: any) {
    var busqueda = event.query;
    this.alumnosServices.buscarAlumnoPorNombres(busqueda).subscribe((data: any) => {
      this.alumnos_autocompleteResult = data['data'];
    });
  }


  cargarAmbientes() {
    this.ambientesService.getAmbientes().subscribe((data: any) => {
      this.ambientes = data['data'];
    });
  }


  onChangeAmbientes(ambiente: Ambiente) {
    this.selectedDocenteNombreCompleto = `${ambiente.docente.nombres} ${ambiente.docente.apellido_paterno} ${ambiente.docente.apellido_materno}`;
    this.selectedVacantes = ambiente.aula.capacidad

  }

  onSelectAlumno(alumno: Alumno){
    this.buscarEstadoMatriculaAlumno(alumno.id_alumno);
  }

  buscarEstadoMatriculaAlumno(id_alumno: number){
    this.matriculaService.buscarEstadoMatriculaAlumno(id_alumno).subscribe((data: any)=>{
      this.selectedEstadoMatricula = data['estado']
      this.selectedEstadoMatriculaTexto = this.selectedEstadoMatricula  ? 'MATRICULADO': 'SIN MATRICULAR'

      console.log(data['estado'])
    })
  }

  matricular(event: any) {
    this.variablesErrorTo(false);

    if (!this.selectedAlumno) {
      this.errorAlumno = true;
    }
    if(!this.selectedAmbiente){
      this.errorAmbiente = true;
    }
    if(!this.selectedFecha){
      this.errorFechaMatricula = true;
    }
    if(this.selectedAlumno && this.selectedAmbiente && this.selectedFecha){
      this.matriculaService.matricularAlumno(this.selectedAlumno.id_alumno,this.selectedAmbiente.id_distribucion_ambiente, this.selectedFecha,1).subscribe(data=>{
        console.log(data)
      });
    }
  }

  variablesErrorTo(val:boolean){
    this.errorAlumno = val;
    this.errorAmbiente = val;
    this.errorFechaMatricula = val;
  }



}
