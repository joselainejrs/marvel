import { NgModule } from '@angular/core';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ComicBooksService } from './comic-books.service';

import { CardBooksComponent } from './card-books/card-books.component';
import { DetailsBooksComponent } from './details-books/details-books.component';
import { HeaderComponent } from './header/header.component';
import { HqBooksComponent } from './hq-books/hq-books.component';
import { TitleComponent } from './title/title.component';

@NgModule({
  declarations: [ 
    CardBooksComponent,
    DetailsBooksComponent,
    HeaderComponent,
    HqBooksComponent,
    TitleComponent    
  ],
  exports:[
    CardBooksComponent,
    DetailsBooksComponent,
    HeaderComponent,
    HqBooksComponent,
    TitleComponent
  ],
  imports: [
    CommonModule, 
    RouterModule,
    HttpClientModule,
    HttpClientJsonpModule,
  ], 
  providers: [ ComicBooksService ],
})
export class ComicBooksModule { }
