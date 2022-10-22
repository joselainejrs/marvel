import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterService } from './register/register.service';
import { AccessService } from './access/access.service';
import { ComicBooksService } from './comics/comic-books.service';

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
