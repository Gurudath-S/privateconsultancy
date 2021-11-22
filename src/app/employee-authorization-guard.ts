import { Injectable } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { AuthorizedService } from "./authorized.service";
import { EmployeeService } from "./employee.service";



@Injectable()
export class EmployeeAuthorizationGuard implements CanActivate {
   
    verified: boolean;
   
    
    constructor(private employeeService: EmployeeService, private router: Router, private route: ActivatedRoute,private authorised:AuthorizedService) {}
   
   
   
    

    

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
      this.verified = this.authorised.getIsAuthorized();
        if(this.verified){
            return true;
        }
        else{
            this.router.navigate(['/unauthorized']);
            return false;
        }
     
    }
}
