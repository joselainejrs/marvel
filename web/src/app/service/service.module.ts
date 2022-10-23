import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterService } from './pages/register/register.service';
import { AccessService } from './pages/access/access.service';
import { ComicBooksService } from './pages/comic-books/comic-books.service';

@NgModule({
  declarations: [],
  imports: [ CommonModule ],
  providers:[
    RegisterService,
    AccessService,
    ComicBooksService

  ]
})
export class ServiceModule { }
