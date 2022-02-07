import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { CardComponent } from './card/card.component';
import { CadastroDadosComponent } from './cadastro-dados/cadastro-dados.component';



@NgModule({
  declarations: [
    LoginComponent,
    CardComponent,
    CadastroDadosComponent
  ],
  imports: [
    CommonModule,
    RouterModule,

    FormsModule,
    ReactiveFormsModule
  ]
})
export class AcessoModule { }
