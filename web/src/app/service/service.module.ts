import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterService } from './pages/register/register.service';
import { AccessService } from './pages/access/access.service';
import { ComicBooksService } from './pages/comic-books/comic-books.service';
import { MarvelService } from './api/marvel/marvel.service';
import { MarvelStorageService } from './api/marvel/marvel-storage.service';

@NgModule({
  declarations: [],
  imports: [ CommonModule ],
  providers:[
    MarvelService,
    AccessService,
    RegisterService,
    ComicBooksService,
    MarvelStorageService
  ]
})
export class ServiceModule { }
