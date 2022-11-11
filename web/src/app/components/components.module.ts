import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { CardBooksComponent } from './card-books/card-books.component';
import { HeaderComponent } from './header/header.component';
import { TitleComponent } from './title/title.component';

@NgModule({
  declarations: [
    CardBooksComponent,
    HeaderComponent,
    TitleComponent,
  ],
  exports: [
    CardBooksComponent,
    HeaderComponent,
    TitleComponent,
    ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
  ]
})
export class ComponentModule { }
