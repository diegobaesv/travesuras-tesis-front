import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'General',
        items: [
          { label: 'Matricula', routerLink:'matricula', icon: 'pi pi-fw pi-id-card' },
          { label: 'Pagos', routerLink:'pagos', icon: 'pi pi-fw pi-dollar' }
        ]
      },
      {
        label: 'Sistema',
        items: [
          { label: 'Alumnos', routerLink:'alumnos', icon: 'pi pi-fw pi-users' },
          { label: 'Docentes',  routerLink:'docentes',icon: 'pi pi-fw pi-users' },
          { label: 'Apoderados', routerLink:'apoderados', icon: 'pi pi-fw pi-users' },
          { label: 'Ambientes', routerLink:'ambientes', icon: 'pi pi-fw pi-briefcase' }
        ]
      },
      {
        label: 'Administrador',
        items: [
          { label: 'Usuarios', routerLink:'usuarios', icon: 'pi pi-fw pi-user' }
        ]
      }
    ];
  }

}
