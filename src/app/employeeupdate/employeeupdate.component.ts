import { tokenize } from '@angular/compiler/src/ml_parser/lexer';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Certification } from '../certification';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { LoginService } from '../login.service';
import { Skill } from '../skill';

@Component({
  selector: 'app-employeeupdate',
  templateUrl: './employeeupdate.component.html',
  styleUrls: ['./employeeupdate.component.css']
})
export class EmployeeupdateComponent implements OnInit {

  constructor(private route: ActivatedRoute, private employeeService: EmployeeService, private router: Router,private loggedin:LoginService) { }

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
    if(confirm("Are you sure you want to add this skill?")){

    
    console.log(skill);
    this.employeeService.addSkillByEmployeeId(this.id,this.newSkill).subscribe(data=>{
      console.log(data);
      this.router.navigate(['/update/'+this.id]);
      window.location.reload();
    });
  }
  else{
    alert("cancelled");
  }
    
  }

  addCertification(certification: string) {
    console.log(certification);
    if(confirm("Are you sure you want to add this certification?")){
      this.employeeService.addCertificationByEmployeeId(this.id,this.newCertificate).subscribe(data=>{
      console.log(data);
      this.router.navigate(['/update/'+this.id]);
    });
    }
    else{
      alert("cancelled");
    }
    
  }

  removeSkill(skill: string) {
    if(confirm("Are you sure you want to remove this skill?")){
      console.log(skill);
    }
    else{
      console.log("cancelled");
    }
    
  }

  removeCertification(certification: string) {
    console.log(certification);
  }

  logout() {
   if( confirm("Are you sure you want to logout?")){
     this.loggedin.setIsLoggedIn(false);
      localStorage.removeItem('token');
    this.router.navigate(['/login']);
   }
    
   
  }
    

}
