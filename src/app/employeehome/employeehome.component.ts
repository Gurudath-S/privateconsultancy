import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Certification } from '../certification';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Skill } from '../skill';

@Component({
  selector: 'app-employeehome',
  templateUrl: './employeehome.component.html',
  styleUrls: ['./employeehome.component.css']
})
export class EmployeehomeComponent implements OnInit {


  employee: Employee;
  id: number;
  skills: Skill[];
  certifications: Certification[];

  constructor(private router: Router, private route: ActivatedRoute, private employeeService: EmployeeService) { }

  ngOnInit(): void {

    if(this.employee==undefined||this.employee==null){
      this.employee = new Employee();}
    
    this.id=this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(data=>{
      console.log(data);
      this.employee=data;
    });
    this.employeeService.getSkillsByEmployeeId(this.id).subscribe(data=>{
      this.skills=data;});

    this.employeeService.getCertificationsByEmployeeId(this.id).subscribe(data=>{
      this.certifications=data;});

    console.log(this.employee);
  }
  updateEmployee() {
    this.id=this.employee.id;
    this.router.navigate(['/update/'+this.id]);
  }
  logout() {
    if(confirm("Are you sure you want to logout?")){
      localStorage.removeItem('token');
    this.router.navigate(['/login']);
    }
    
  }


}



