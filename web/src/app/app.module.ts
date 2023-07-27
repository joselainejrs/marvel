import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { NgxMaskModule } from 'ngx-mask'

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { PagesModule } from './pages/pages.module';
import { ServiceModule } from './service/service.module';
import { ComponentModule } from './components/components.module';
import { ModalsModule } from './components/modals/modals.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  exports:[
    ComponentModule,
    PagesModule,
    ServiceModule,
    ModalsModule,
  ],  
  imports: [
    ComponentModule,
    PagesModule,
    ServiceModule,
    ModalsModule,
    
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    NgxMaskModule.forRoot({
      dropSpecialCharacters: false //ao salvar mantem o mascara
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
