import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { ReloadService } from 'src/app/services/reload.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string = '';
  clave: string = '';

  constructor(private reloadService: ReloadService, private loginServices: LoginService) {

  }

  ngOnInit(): void {
  }

  login() {
    this.loginServices.autenticar(this.username, this.clave);
  }

  reloadComponent() {
    this.reloadService.reloadComponent('login');
  }


}
