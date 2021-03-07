import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlumnosComponent } from './components/pages/alumnos/alumnos.component';
import { AmbientesComponent } from './components/pages/ambientes/ambientes.component';
import { ApoderadosComponent } from './components/pages/apoderados/apoderados.component';
import { DocentesComponent } from './components/pages/docentes/docentes.component';
import { LoginComponent } from './components/pages/login/login.component';
import { MatriculaComponent } from './components/pages/matricula/matricula.component';
import { PagosComponent } from './components/pages/pagos/pagos.component';
import { PrincipalComponent } from './components/pages/principal/principal.component';
import { UsuariosComponent } from './components/pages/usuarios/usuarios.component';
import { TemplateMasterComponent } from './components/templates/template-master/template-master.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  
  {path:'',component:TemplateMasterComponent, children: [
    {path:'principal',component: PrincipalComponent},
    {path:'matricula',component: MatriculaComponent},
    {path:'pagos',component: PagosComponent},
    {path: 'alumnos', component: AlumnosComponent},
    {path: 'docentes', component: DocentesComponent},
    {path: 'apoderados', component: ApoderadosComponent},
    {path: 'ambientes', component: AmbientesComponent},
    {path: 'usuarios', component: UsuariosComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
