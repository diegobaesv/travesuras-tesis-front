import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HOST_BACKEND } from '../shared/var.constant';

@Injectable({
  providedIn: 'root'
})
export class MatriculaService {

  url= `${HOST_BACKEND}/matricula`  

  constructor(private http: HttpClient) { }

  matricularAlumno(id_alumno: number, id_distribucion_ambiente: number, fecha_matricula: Date,id_usuario: number){

    const body = { 
      id_alumno: id_alumno,
      id_distribucion_ambiente: id_distribucion_ambiente,
      fecha_matricula: fecha_matricula,
      id_usuario:id_usuario
     };
     console.log(body)
    return this.http.post(`${this.url}`, body, {
      headers: {
        'content-type': "application/json"
      }
    });
    
  }

  buscarEstadoMatriculaAlumno(id_alumno:number){
    return this.http.get(`${this.url}/alumno/${id_alumno}/estado`);
  }

}
