import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Certification } from '../certification';
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
  certifications: Certification[];

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.employee=new Employee();
    this.employeeService.getEmployeeById(this.id).subscribe(data=>{
      this.employee=data;
    });
    this.employeeService.getCertificationsByEmployeeId(this.id).subscribe(data=>{
      this.certifications=data;});


    this.getSkillList();
    // this.getCertificationList();
  }

  getSkillList(){
    this.employeeService.getSkillsByEmployeeId(this.id).subscribe(data=>{
      this.skillList=data;
      console.log(this.skillList);
    });
  }

  // getCertificationList(){
  //   this.employeeService.getCertificationsByEmployeeId(this.id).subscribe(data=>{
  //     this.certifications=data;
  //     console.log(this.certifications);
  //   });
  // }

  showSkillsAndCertificates(){
    this.router.navigate(['/employees/skills'+this.id]);
  }


  goBackHome(){
    if(confirm("Are you sure you want to go back to home page?")){
      this.router.navigate(['/home/'+this.employee.id]);
    }
    
  }
}
