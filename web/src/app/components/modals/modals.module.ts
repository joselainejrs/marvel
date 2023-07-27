import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalStatusComponent } from './modal-status/modal-status.component';
import { ModalPayComponent } from './modal-pay/modal-pay.component';
import { ModalActionComponent } from './modal-action/modal-action.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';



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
  ]
})
export class ModalsModule { }
