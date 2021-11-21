import { tokenize } from '@angular/compiler/src/ml_parser/lexer';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Certification } from '../certification';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Skill } from '../skill';

@Component({
  selector: 'app-employeeupdate',
  templateUrl: './employeeupdate.component.html',
  styleUrls: ['./employeeupdate.component.css']
})
export class EmployeeupdateComponent implements OnInit {

  constructor(private route: ActivatedRoute, private employeeService: EmployeeService, private router: Router) { }

  id:number;
  employee: Employee=new Employee();
  skills: Skill[];
  certifications: Certification[];
  newSkill: Skill=new Skill();
  newCertificate: Certification=new Certification();
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(data=>{
      console.log(data);
      this.employee=data;
    });

    //get skills data

    this.employeeService.getSkillsByEmployeeId(this.id).subscribe(data=>{
      this.skills=data;}
    );

    //get certifications data
    
    this.employeeService.getCertificationsByEmployeeId(this.id).subscribe(data=>{
      this.certifications=data;
      console.log(this.certifications);
    if(this.certifications==null)
    {
      console.log("empty");
    }
    });//end of subscribe
  }

  addSkill(skill: string) {
    console.log(skill);
    this.employeeService.addSkillByEmployeeId(this.id,this.newSkill).subscribe(data=>{
      console.log(data);
      this.router.navigate(['/update/'+this.id]);
    });
    
  }

  addCertification(certification: string) {
    console.log(certification);
    this.employeeService.addCertificationByEmployeeId(this.id,this.newCertificate).subscribe(data=>{
      console.log(data);
      this.router.navigate(['/update/'+this.id]);
    });
  }

  removeSkill(skill: string) {
    console.log(skill);
  }

  removeCertification(certification: string) {
    console.log(certification);
  }

  logout() {
    
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
    

}
