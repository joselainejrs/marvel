import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { CardPayComponent } from './card-pay/card-pay.component';
import { HeaderComponent } from './header/header.component';
import { TitleComponent } from './title/title.component';
import { ModalsModule } from './modals/modals.module';

@NgModule({
  declarations: [
    CardPayComponent,
    HeaderComponent,
    TitleComponent,
  ],
  exports: [
    CardPayComponent,
    HeaderComponent,
    TitleComponent,
    ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ModalsModule
  ]
})
export class ComponentModule { }
