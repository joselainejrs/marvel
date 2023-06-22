import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterService } from './pages/register/register.service';
import { AccessService } from './pages/access/access.service';
import { ComicBooksService } from './pages/comic-books/comic-books.service';
import { MarvelService } from './api/marvel/marvel.service';

@NgModule({
  declarations: [],
  imports: [ CommonModule ],
  providers:[
    RegisterService,
    AccessService,
    ComicBooksService,
    MarvelService

  ]
})
export class ServiceModule { }
