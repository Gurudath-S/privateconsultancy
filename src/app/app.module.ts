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
import { EmployeeupdateComponent } from './employeeupdate/employeeupdate.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployerhomeComponent,
    EmployeehomeComponent,
    RegistrationComponent,
    EmployeeupdateComponent,
    EmployeedetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
