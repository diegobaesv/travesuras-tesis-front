import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Alumno } from '../models/alumno';
import { HOST_BACKEND } from '../shared/var.constant';

@Injectable({
  providedIn: 'root'
})
export class PagosService {


  url= `${HOST_BACKEND}/pagos`  

  constructor(private http: HttpClient) { }

  pagoAlumno(concepto: string, metodo: string, monto: number, fecha_pago: Date, id_alumno: number, id_usuario: number) {

    const body = {
      concepto: concepto,
      metodo: metodo,
      monto: monto,
      fecha_pago: fecha_pago,
      id_alumno: id_alumno,
      id_usuario: id_usuario
    };

    return this.http.post(`${this.url}`, body, {
      headers: {
        'content-type': "application/json"
      }
    });
  }

  getPagosByAlumnoId(id_alumno:number){
    return this.http.get(`${this.url}/alumno/${id_alumno}`);
  }



}
