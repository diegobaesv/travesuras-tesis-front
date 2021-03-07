import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HOST_BACKEND } from '../shared/var.constant';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  url= `${HOST_BACKEND}/alumnos`  

  constructor(private http: HttpClient) { }

  buscarAlumnoPorNombres(busqueda: string){
    return this.http.get(`${this.url}/buscar/nombres/${busqueda}`);
  }

  getAlumnos(){
    return this.http.get(`${this.url}`);
  }

  getAlumnosByAmbienteId(id_distribucion_ambiente: number){
    return this.http.get(`${this.url}/ambiente/${id_distribucion_ambiente}`);
  }
  


  
}
