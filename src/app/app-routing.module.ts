import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployerhomeComponent } from './employerhome/employerhome.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { EmployeehomeComponent } from './employeehome/employeehome.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { EmployeeupdateComponent } from './employeeupdate/employeeupdate.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home/:id', component: EmployerhomeComponent},
  {path:'register', component: RegistrationComponent},
  {path:'employeehome/:id',component:EmployeehomeComponent},
  {path:'view', component:EmployeedetailsComponent},
  {path:'update/:id', component:EmployeeupdateComponent},
  {path:'employeedetails/:id', component:EmployeedetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
