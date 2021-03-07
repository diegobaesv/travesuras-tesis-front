import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MenuItem} from 'primeng/api';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  items: MenuItem[]=[];
  
  usuarioName: String='';

  constructor(private router : Router, private toastService: ToastService) { }

  ngOnInit(): void {
    this.items = [
      /*{
          label: 'File',
          items: [{
                  label: 'New', 
                  icon: 'pi pi-fw pi-plus',
                  items: [
                      {label: 'Project'},
                      {label: 'Other'},
                  ]
              },
              {label: 'Open'},
              {label: 'Quit'}
          ]
      },
      {
          label: 'INSTITUCIÓN EDUCATIVA TRAVESURAS', routerLink:'/principal'
          
      }*/
  ];

  const session: any = JSON.parse(localStorage.getItem("x-session")||'{}');
  this.usuarioName = session['username']
  if(this.usuarioName == undefined){
    this.router.navigate(['/login']);
    this.toastService.mensajeIncorrecto('No hay usuario logueado')
    
  }
  
  }

  cerrarSesion(){
    this.router.navigate(['/login']);
    localStorage.clear();
    this.toastService.mensajeCorrecto('Cierre de sesion correcto')
    

  }

}
