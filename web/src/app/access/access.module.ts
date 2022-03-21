import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { CardComponent } from './card/card.component';
import { RegisterDiceComponent } from './register-dice/register-dice.component';
import { RegisterPaymentComponent } from './register-payment/register-payment.component';
import { RegisterAddressComponent } from './register-address/register-address.component';



@NgModule({
  declarations: [
    LoginComponent,
    CardComponent,
    RegisterDiceComponent,
    RegisterPaymentComponent,
    RegisterAddressComponent
  ],
  imports: [
    CommonModule,
    RouterModule,

    FormsModule,
    ReactiveFormsModule
  ]
})
export class AccessModule { }
