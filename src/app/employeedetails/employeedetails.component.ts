import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Skill } from '../skill';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private employeeService: EmployeeService) { }

  id: number;
  employee: Employee;
  skillList: Skill[];

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.employee=new Employee();
    this.employeeService.getEmployeeById(this.id).subscribe(data=>{
      this.employee=data;
    });

    this.getSkillList();
  }

  getSkillList(){
    this.employeeService.getSkillsByEmployeeId(this.id).subscribe(data=>{
      this.skillList=data;
      console.log(this.skillList);
    });
  }

  showSkillsAndCertificates(){
    this.router.navigate(['/employees/skills'+this.id]);
  }


  goBackHome(){
    this.router.navigate(['/home']);
  }
}
