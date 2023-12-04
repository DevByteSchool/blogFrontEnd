import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider/slider.component';
import { HomeRoutingModule } from './home-routing.module';
import { SampleComponent } from './sample/sample.component';



@NgModule({
  declarations: [SliderComponent, SampleComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
