import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmployerhomeComponent } from './employerhome/employerhome.component';
import { EmployeehomeComponent } from './employeehome/employeehome.component';
import { RegistrationComponent } from './registration/registration.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { EmployeeupdateComponent } from './employeeupdate/employeeupdate.component';
import { CommonModule } from '@angular/common';
import { UnauthorizedaccessComponent } from './unauthorizedaccess.component';
import { EmployeeAuthorizationGuard } from './employee-authorization-guard';
import { EmployeeLoginGuard } from './employee-login-guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployerhomeComponent,
    EmployeehomeComponent,
    RegistrationComponent,
    EmployeedetailsComponent,
    EmployeeupdateComponent,
    UnauthorizedaccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [EmployeeAuthorizationGuard, EmployeeLoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
