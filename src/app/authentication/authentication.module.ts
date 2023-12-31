import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { AuthRoutingModule } from './auth-routing.module';



@NgModule({
  declarations: [LoginComponent, RegisterComponent, ForgetPasswordComponent],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthenticationModule { }
