import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HOST_BACKEND } from '../shared/var.constant';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  url= `${HOST_BACKEND}/usuarios`  


  constructor(private http: HttpClient) { }

  getUsuarios(){
    return this.http.get(`${this.url}`);
  }

}
