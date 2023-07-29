import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalStatusComponent } from './modal-status/modal-status.component';
import { ModalPayComponent } from '../../pages/modal-pay/modal-pay.component';
import { ModalActionComponent } from './modal-action/modal-action.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';



@NgModule({
  declarations: [
    ModalStatusComponent,
    ModalPayComponent,
    ModalActionComponent
  ],
  exports: [
    ModalStatusComponent,
    ModalPayComponent,
    ModalActionComponent
    ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forChild(),
  ]
})
export class ModalsModule { }
