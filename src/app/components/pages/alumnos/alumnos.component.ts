import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/models/alumno';
import { Ambiente } from 'src/app/models/ambiente';
import { AlumnosService } from 'src/app/services/alumnos.service';
import { AmbientesService } from 'src/app/services/ambientes.service';
import { ReloadService } from 'src/app/services/reload.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  alumnos:Alumno[]=[];

  selectedAmbiente!: Ambiente;
  ambientes: Ambiente[] = [];

  constructor(private reloadService: ReloadService,private alumnosService: AlumnosService, private ambientesService:AmbientesService,private toastService:ToastService) { }

  ngOnInit(): void {
    this.cargarDataAlumnos();
    this.cargarAmbientes();
  }

  cargarDataAlumnos(){
    this.alumnosService.getAlumnos().subscribe((data:any)=>{
      if(data){
        this.alumnos=data['data'];
      }
    },err=>{
      this.toastService.mensajeIncorrecto('Ocurrio un error al obtener los datos de alumnos')
    })
  }

  cargarAmbientes() {
    this.ambientesService.getAmbientes().subscribe((data: any) => {
      if(data){
        this.ambientes = data['data'];
      }
    },err=>{
      this.toastService.mensajeIncorrecto('No se pudo conectar a la BD');
    }
    );
  }

  onChangeAmbientes(ambiente: Ambiente) {
    this.cargarDataAlumnosByAmbiente(ambiente.id_distribucion_ambiente);
  }

  cargarDataAlumnosByAmbiente(id_distribucion_ambiente:number){
    this.alumnosService.getAlumnosByAmbienteId(id_distribucion_ambiente).subscribe((data:any)=>{
      if(data){
        this.alumnos=data['data'];
        this.toastService.mensajeCorrecto('Alumnos cargados con exito');
      }
    }, err=>{
      this.toastService.mensajeIncorrecto('Ocurrio un error al filtrar los datos');
    });
  }

  reloadComponent() {
    this.reloadService.reloadComponent('/alumnos');
  }
 

}
