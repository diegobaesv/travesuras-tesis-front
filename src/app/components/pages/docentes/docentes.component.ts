import { Component, OnInit } from '@angular/core';
import { Docente } from 'src/app/models/docente';
import { DocentesService } from 'src/app/services/docentes.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-docentes',
  templateUrl: './docentes.component.html',
  styleUrls: ['./docentes.component.css']
})
export class DocentesComponent implements OnInit {

  docentes:Docente[]=[];

  constructor(private docentesService: DocentesService, private toastService: ToastService) { }

  ngOnInit(): void {
    this.cargarTablaDocentes();
  }

  cargarTablaDocentes(){
    this.docentesService.getDocentes().subscribe((data:any)=>{
      if(data){
        this.docentes=data['data'];
      }
    },err=>{
      this.toastService.mensajeIncorrecto('No se pudo conectar a la BD');
    })
  }

}
