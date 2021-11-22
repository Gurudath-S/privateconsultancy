import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizedService } from '../authorized.service';
import { Employee } from '../employee';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output()
  employee: Employee=new Employee();
  
  verifyUser: Employee;

  

  constructor(private router: Router, private http: HttpClient,private loggedin:LoginService,private authorised: AuthorizedService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.http.get<Employee>(`http://localhost:8080/employees/email/`+this.employee.email).subscribe(data => {
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
      this.loggedin.setIsLoggedIn(true);
      if(this.verifyUser.role == "employer"){
        this.authorised.setIsAuthorized(true);
        this.router.navigate(['/home/'+this.verifyUser.id]);
      }

      else
      {
        this.authorised.setIsAuthorized(false);
        this.router.navigate(['/employeehome/'+this.verifyUser.id]);
      }
      
    }
   else{
     this.loggedin.setIsLoggedIn(false);
      alert("Login Failed");
    }
  }

}

