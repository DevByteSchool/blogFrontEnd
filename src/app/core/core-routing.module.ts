import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';


const routes: Routes = [
  { path: '', loadChildren: () => import('../modules/home/home.module').then(m => m.HomeModule) },
  { path: 'auth', loadChildren: () => import('../authentication/authentication.module').then(m => m.AuthenticationModule) },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class CoreRoutingModule { }
