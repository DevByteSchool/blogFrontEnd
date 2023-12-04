import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CoreRoutingModule } from './core-routing.module';
import { RouterModule } from '@angular/router';
import { HomeModule } from '../modules/home/home.module';



@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    RouterModule,
    HomeModule
  ],
  exports: [HeaderComponent,
    FooterComponent],
})
export class CoreModule { }
