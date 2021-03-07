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
import {InputNumberModule} from 'primeng/inputnumber';
import {ToastModule} from 'primeng/toast';
import {CardModule} from 'primeng/card';
import {PasswordModule} from 'primeng/password';


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
    TableModule,
    InputNumberModule,
    ToastModule,
    CardModule,
    PasswordModule
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
    TableModule,
    InputNumberModule,
    ToastModule,
    CardModule,
    PasswordModule
  ]
})
export class PrimengModule { }