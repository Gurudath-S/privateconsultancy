import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
// import { Http2ServerRequest } from 'http2';
import { Employee } from '../employee';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output()
  employee: Employee=new Employee();
  
  verifyUser: Employee;

  

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.http.get<Employee>(`http://localhost:8080/login/`+this.employee.email).subscribe(data => {
        this.verifyUser = data;
        console.log(this.verifyUser);
        this.validateAndRoute();
      });


    // this.router.navigate(['/home']);
  }
  register(){
    this.router.navigate(['/register']);
  }

  validateAndRoute(){
    
    if(this.verifyUser.password == this.employee.password){
      console.log("Login Successful");
      if(this.verifyUser.role == "employer"){
        this.router.navigate(['/home']);
      }

      else
      {
        this.router.navigate(['/employeehome']);
      }
      
    }
   else{
      alert("Login Failed");
    }
  }

}

