import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/models/alumno';
import { Apoderado } from 'src/app/models/apoderado';
import { AlumnosService } from 'src/app/services/alumnos.service';

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.css']
})
export class PagosComponent implements OnInit {

  boleta: string="A0001";
  
  deuda: string="S/. 150.00";

  conceptos: any[]=[
    {name: 'Matricula'},
    {name: 'Pension Enero'},
    {name: 'Pension Febrero'},
    {name: 'Pension Marzo'},
    {name: 'Pension Abril'},
    {name: 'Pension Mayo'}
  ];
  metodos: any[]=[
    {name: 'Efectivo'},
    {name: 'Transferencia'},
    {name: 'Deposito'}
  ];


  selectedAlumno!: Alumno;
  alumnos_autocompleteResult: Alumno[] = [];

  selectedApoderado!: Apoderado;
  selectedApoderadoNombreCompleto: string='';

  
  errorAlumno: boolean = false;

  constructor(private alumnosServices: AlumnosService) { }

  ngOnInit(): void {
    
  }

  searchAlumno(event: any) {
    var busqueda = event.query;
    this.alumnosServices.buscarAlumnoPorNombres(busqueda).subscribe((data: any) => {
      this.alumnos_autocompleteResult = data['data'];
    });
  }

  onSelectAlumno(alumno: Alumno){
    this.selectedApoderado=alumno.apoderado;
    console.log(this.selectedAlumno)
    this.selectedApoderadoNombreCompleto = `${this.selectedApoderado.nombres} ${this.selectedApoderado.apellido_paterno} ${this.selectedApoderado.apellido_materno}`
  }

}
