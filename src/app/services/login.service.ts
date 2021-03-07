import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HOST_BACKEND } from '../shared/var.constant';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url: string = `${HOST_BACKEND}`

  constructor(private http: HttpClient, private toastService: ToastService, private router: Router) { }

  autenticar(username: string, clave: string){
    const body = { 
      username: username,
      clave: clave
     };
      return this.http.post<any>(`${this.url}/login`,body)
      .toPromise()
      .then(data=>{
        localStorage.setItem("x-session", JSON.stringify(data));
        this.router.navigate(['/principal']);
        this.toastService.mensajeCorrecto('Bienvenido al sistema: '+data.username);


      }).catch(err=>{
        const errorTexto=err.error.message;
        this.toastService.mensajeIncorrecto('Ocurrio un error al ingresar: '+errorTexto);
      })
  }

}
