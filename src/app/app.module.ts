import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatriculaComponent } from './components/pages/matricula/matricula.component';
import { PrincipalComponent } from './components/pages/principal/principal.component';
import { TemplateMasterComponent } from './components/templates/template-master/template-master.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PagosComponent } from './components/pages/pagos/pagos.component';
import { AlumnosComponent } from './components/pages/alumnos/alumnos.component';
import { LoginComponent } from './components/pages/login/login.component';
import { PrimengModule } from './primeng/primeng.module';
import { DocentesComponent } from './components/pages/docentes/docentes.component';
import { ApoderadosComponent } from './components/pages/apoderados/apoderados.component';
import { AmbientesComponent } from './components/pages/ambientes/ambientes.component';
import { MessageService } from 'primeng/api';
import { ConstruccionComponent } from './components/pages/construccion/construccion.component';
import { UsuariosComponent } from './components/pages/usuarios/usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    MatriculaComponent,
    PrincipalComponent,
    TemplateMasterComponent,
    MenuBarComponent,
    SidebarComponent,
    PagosComponent,
    AlumnosComponent,
    LoginComponent,
    DocentesComponent,
    ApoderadosComponent,
    AmbientesComponent,
    ConstruccionComponent,
    UsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimengModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
