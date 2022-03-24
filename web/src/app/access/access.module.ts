import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxMaskModule } from 'ngx-mask'

import { AccessService } from './access.service';

import { LoginComponent } from './login/login.component';
import { CardComponent } from './card/card.component';
import { RegisterDiceComponent } from './register-dice/register-dice.component';
import { RegisterPaymentComponent } from './register-payment/register-payment.component';
import { RegisterAddressComponent } from './register-address/register-address.component';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [
    LoginComponent,
    CardComponent,
    RegisterDiceComponent,
    RegisterPaymentComponent,
    RegisterAddressComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    HttpClientJsonpModule,
    NgxMaskModule.forChild(),

    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ AccessService ],
})
export class AccessModule { }
