import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HOST_BACKEND } from '../shared/var.constant';

@Injectable({
  providedIn: 'root'
})
export class AmbientesService {

  
  url= `${HOST_BACKEND}/ambientes`  

  constructor(private http: HttpClient) { }


  getAmbientes(){
    return this.http.get(`${this.url}`);
  }

}
