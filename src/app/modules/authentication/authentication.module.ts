import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { NewPasswordComponent } from './components/new-password/new-password.component';
import { AuthenticationComponent } from './authentication.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [LoginComponent, RegisterComponent, ForgotPasswordComponent, NewPasswordComponent, AuthenticationComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    SharedModule
  ]
})
export class AuthenticationModule { }
