import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HOST_BACKEND } from '../shared/var.constant';

@Injectable({
  providedIn: 'root'
})
export class DocentesService {

  url= `${HOST_BACKEND}/docentes`  

  constructor(private http: HttpClient) { }

  getDocentes(){
    return this.http.get(`${this.url}`);
  }
}
