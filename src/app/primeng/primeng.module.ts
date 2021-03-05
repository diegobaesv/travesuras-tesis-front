import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MenuModule} from 'primeng/menu';
import {MenubarModule} from 'primeng/menubar';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {InputMaskModule} from 'primeng/inputmask';
import {CalendarModule} from 'primeng/calendar';
import {DropdownModule} from 'primeng/dropdown';
import {TableModule} from 'primeng/table';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MenuModule,
    MenubarModule,
    AutoCompleteModule,
    ButtonModule,
    InputTextModule,
    InputMaskModule,
    CalendarModule,
    DropdownModule,
    TableModule
  ],
  exports:  [
    MenuModule,
    MenubarModule,
    AutoCompleteModule,
    ButtonModule,
    InputTextModule,
    InputMaskModule,
    CalendarModule,
    DropdownModule,
    TableModule
  ]
})
export class PrimengModule { }