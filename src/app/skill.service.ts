import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Skill } from './skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor(private http: HttpClient) { }

  getSkills(employeeId: number) {
    return this.http.get(`http://localhost:8080/employee/`+employeeId+`skills`);
  }

  addSkill(skill: Skill, employeeId: number) {
    return this.http.post(`http://localhost:8080/employee/`+employeeId+`skills`, skill);
  }
}
