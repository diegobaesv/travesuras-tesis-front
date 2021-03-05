import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ambientes',
  templateUrl: './ambientes.component.html',
  styleUrls: ['./ambientes.component.css']
})
export class AmbientesComponent implements OnInit {

  ambientes:any[]=[];

  constructor() { }

  ngOnInit(): void {
  }

}
