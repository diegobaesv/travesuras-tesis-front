import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { ToastService } from 'src/app/services/toast.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios: Usuario[] = [];

  constructor(private usuariosService: UsuariosService, private toastService: ToastService) { }

  ngOnInit(): void {
    this.cargarUsuariosTabla();
  }

  cargarUsuariosTabla(){
    this.usuariosService.getUsuarios().subscribe((data:any)=>{
      if(data){
        this.usuarios=data['data'];
      }
    },err=>{
      this.toastService.mensajeIncorrecto('No se pudo conectar a la BD');
    });
  }



}
