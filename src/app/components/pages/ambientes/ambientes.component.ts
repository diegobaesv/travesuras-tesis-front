import { Component, OnInit } from '@angular/core';
import { Ambiente } from 'src/app/models/ambiente';
import { AmbientesService } from 'src/app/services/ambientes.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-ambientes',
  templateUrl: './ambientes.component.html',
  styleUrls: ['./ambientes.component.css']
})
export class AmbientesComponent implements OnInit {

  ambientes:Ambiente[]=[];

  constructor(private ambientesService: AmbientesService, private toastService: ToastService) { }

  ngOnInit(): void {
    this.cargarTablaAmbientes();
  }

  cargarTablaAmbientes(){
    this.ambientesService.getAmbientes().subscribe((data:any)=>{
      if(data){
        this.ambientes=data['data'];
      }
    },err=>{
      this.toastService.mensajeIncorrecto('No se pudo conectar a la BD');
    });
  }

}
