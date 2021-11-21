import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employeehome',
  templateUrl: './employeehome.component.html',
  styleUrls: ['./employeehome.component.css']
})
export class EmployeehomeComponent implements OnInit {


  employee: Employee;
  id: number;

  constructor(private router: Router, private route: ActivatedRoute, private employeeService: EmployeeService) { }

  ngOnInit(): void {
    
    this.id=this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(data=>{
      console.log(data);
      this.employee=data;
    });
    console.log(this.employee);
  }
  updateEmployee() {
    this.id=this.employee.id;
    this.router.navigate(['/update/'+this.id]);
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }


}



