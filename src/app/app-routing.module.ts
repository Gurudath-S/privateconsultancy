import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployerhomeComponent } from './employerhome/employerhome.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { EmployeehomeComponent } from './employeehome/employeehome.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { EmployeeupdateComponent } from './employeeupdate/employeeupdate.component';
import { UnauthorizedaccessComponent } from './unauthorizedaccess.component';
import { EmployeeAuthorizationGuard } from './employee-authorization-guard';
import { EmployeeLoginGuard } from './employee-login-guard';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home/:id', component: EmployerhomeComponent,canActivate:[EmployeeLoginGuard]},
  {path:'register', component: RegistrationComponent},
  {path:'employeehome/:id',component:EmployeehomeComponent,canActivate:[EmployeeLoginGuard]},
  {path:'view', component:EmployeedetailsComponent,canActivate:[EmployeeLoginGuard]},
  {path:'update/:id', component:EmployeeupdateComponent,canActivate:[EmployeeLoginGuard]},
  {path:'employeedetails/:id', component:EmployeedetailsComponent, canActivate: [EmployeeAuthorizationGuard,EmployeeLoginGuard]},
  {path:'unauthorized', component: UnauthorizedaccessComponent,canActivate:[EmployeeLoginGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
