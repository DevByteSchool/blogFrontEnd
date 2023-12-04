import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { SliderComponent } from './slider/slider.component';
import { SampleComponent } from './sample/sample.component';


const routes: Routes = [
  { path: '', component: SampleComponent },
];
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class HomeRoutingModule { }
