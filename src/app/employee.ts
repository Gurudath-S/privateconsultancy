import { Certification } from "./certification";
import { Skill } from "./skill";

export class Employee {
    id: number;
    name: string;
    email: string;
    password: string;
    role: string; 

    skills: Skill[];
    certificates: Certification[];
  username: string;

  getRole(): string {
    return this.role;
  }
  constructor(){}
    
}
