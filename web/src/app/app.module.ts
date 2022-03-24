import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { NgxMaskModule } from 'ngx-mask'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccessModule } from './access/access.module';
import { ComicBooksComponent } from './comic-books/comic-books.component';
import { HeaderComponent } from './comic-books/header/header.component';
import { DetailsBooksComponent } from './comic-books/details-books/details-books.component';
import { CardBooksComponent } from './comic-books/card-books/card-books.component';

@NgModule({
  declarations: [
    AppComponent,
    ComicBooksComponent,
    HeaderComponent,
    DetailsBooksComponent,
    CardBooksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    AccessModule,
    NgxMaskModule.forRoot({
      dropSpecialCharacters: false //ao salvar mantem o mascara
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
