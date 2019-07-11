import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path:'',
    pathMatch: 'full', redirectTo: 'dashboard'
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  
  {
    path:'dashboard',
    component:DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
