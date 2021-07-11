import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Import components
import {TaskComponent } from './components/task/task.component';
import {SigninComponent } from './components/signin/signin.component';
import {SignupComponent } from './components/signup/signup.component';
import {PrivateTaskComponent } from './components/private-task/private-task.component';

import { AuthGuard } from "./guards/auth.guard";

const routes: Routes = [
  {
    path:'',
    redirectTo:'tasks',
    pathMatch:'full'
  },
  {
    path:'tasks',
    component:TaskComponent
  },
  {
    path:'private-tasks',
    component:PrivateTaskComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'signin',
    component:SigninComponent
  },
  {
    path:'signup',
    component:SignupComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
