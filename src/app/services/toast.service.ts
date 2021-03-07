import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private messageService: MessageService) { }


  mensajeCorrecto(mensaje: string) {
    this.messageService.add({severity:'success', summary: 'Conexion satisfactoria', detail: mensaje}); 
  }


  mensajeIncorrecto(mensaje: string) {
    this.messageService.add({severity:'error', summary: '¡Ups!, algo salió mal', detail: mensaje}); 
  }

}
