import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/models/alumno';
import { Apoderado } from 'src/app/models/apoderado';
import { Pago } from 'src/app/models/pago';
import { AlumnosService } from 'src/app/services/alumnos.service';
import { PagosService } from 'src/app/services/pagos.service';
import { ReloadService } from 'src/app/services/reload.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.css']
})
export class PagosComponent implements OnInit {



  conceptos: any[] = [
    { nombre: 'Matricula',          codigo: 'MATRIC'},
    { nombre: 'Pension Enero',      codigo: 'PENERO'},
    { nombre: 'Pension Febrero',    codigo: 'PFEBRE'},
    { nombre: 'Pension Marzo',      codigo: 'PMARZO'},
    { nombre: 'Pension Abril',      codigo: 'PABRIL' },
    { nombre: 'Pension Mayo',       codigo: 'PEMAYO' },
    { nombre: 'Pension Junio',      codigo: 'PJUNIO' },
    { nombre: 'Pension Julio',      codigo: 'PJULIO' },
    { nombre: 'Pension Agosto',     codigo: 'PAGOST' },
    { nombre: 'Pension Setiembre',  codigo: 'PSETIE' },
    { nombre: 'Pension Octubre',    codigo: 'POCTUB'},
    { nombre: 'Pension Noviembre',  codigo: 'PNOVIE'},
    { nombre: 'Pension Diciembre',  codigo: 'PDICIE' }];
 
  metodos: any[] = [
    { nombre: 'Efectivo',           codigo: 'EFECTI' },
    { nombre: 'Transferencia',      codigo: 'TRANSF' },
    { nombre: 'Deposito',           codigo: 'DEPOSI' }
  ];


  selectedAlumno!: Alumno;
  alumnos_autocompleteResult: Alumno[] = [];

  selectedApoderado!: Apoderado;
  selectedApoderadoNombreCompleto: string = '';

  pagosDeAlumno: Pago[] = [];

  selectedMonto: number = 0;
  selectedFechaPago: Date = new Date();
  selectedConceptoCodigo: string='MATRIC'; 
  selectedMetodoCodigo: string='EFECTI'; 

  errorAlumno: boolean = false;
  errorMonto: boolean = false;
  errorFechaPago: boolean = false;

  constructor(private reloadService: ReloadService,private alumnosServices: AlumnosService, private pagosService:PagosService, private toastService:ToastService) { }

  ngOnInit(): void {

  }

  searchAlumno(event: any) {
    var busqueda = event.query;
    this.alumnosServices.buscarAlumnoPorNombres(busqueda).subscribe((data: any) => {
      this.alumnos_autocompleteResult = data['data'];
    });
  }

  onSelectAlumno(alumno: Alumno) {
    this.selectedApoderado = alumno.apoderado;
    this.selectedApoderadoNombreCompleto = `${this.selectedApoderado.nombres} ${this.selectedApoderado.apellido_paterno} ${this.selectedApoderado.apellido_materno}`
    this.cargarPagosTabla();
  }


  cargarPagosTabla() {

    this.pagosService.getPagosByAlumnoId(this.selectedAlumno.id_alumno).subscribe((data:any)=>{
      if(data){
        console.log(data)
        this.pagosDeAlumno = data['data'].map((item:any)=>({
          metodo: this.metodos.find(met=>{
            return item.metodo == met.codigo
          }
            ).nombre,
          concepto: this.conceptos.find(con=>{
            return item.concepto == con.codigo
          }).nombre,
          monto: item.monto,
          usuario: item.usuario,
          fecha_pago: item.fecha_pago
        }));

        console.log(this.pagosDeAlumno)
        this.toastService.mensajeCorrecto('Se cargaron los pagos correctamente');
      }
    }, err=>{
      this.toastService.mensajeCorrecto('Hubo un error al cargar los pagos');
    });

  }

  guardarPago() {
    this.variablesErrorTo(false);

    if (!this.selectedAlumno ) {
      this.errorAlumno = true;
    }

    if (!this.selectedMonto) {
      this.errorMonto = true;
    }

    if (!this.selectedFechaPago) {
      this.errorFechaPago = true;
    }

    if (this.selectedAlumno && this.selectedMonto && this.selectedFechaPago) {
      this.pagosService.pagoAlumno(this.selectedConceptoCodigo,this.selectedMetodoCodigo,this.selectedMonto,this.selectedFechaPago,this.selectedAlumno.id_alumno,1).subscribe(data=>{
        if(data){
          this.toastService.mensajeCorrecto('Pago guardado correctamente');
          this.cargarPagosTabla();
          this.reiniciarDatosPago();
        }
      }, err=>{
        this.toastService.mensajeIncorrecto('No se pudo guardar el pago');
      });
    }
  }

  onSelectConcepto(code: string){
    this.selectedConceptoCodigo = code;
  }

  onSelectMetodo(code: string){
    this.selectedMetodoCodigo = code;
  }

  variablesErrorTo(val: boolean) {
    this.errorAlumno = val;
    this.errorMonto = val;
    this.errorFechaPago = val;
  }

  reiniciarDatosPago(){
    this.selectedMonto = 0;
    this.selectedFechaPago = new Date();
  }

  reloadComponent() {
    this.reloadService.reloadComponent('/pagos');
  }



}
