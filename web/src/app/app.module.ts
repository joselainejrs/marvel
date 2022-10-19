import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { NgxMaskModule } from 'ngx-mask'

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { AccessModule } from './access/access.module';
import { FormsModule } from '@angular/forms';
import { ComicBooksModule } from './comic-books/comic-books.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    AccessModule,
    ComicBooksModule,
    FormsModule,
    NgxMaskModule.forRoot({
      dropSpecialCharacters: false //ao salvar mantem o mascara
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
