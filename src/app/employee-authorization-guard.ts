import { Injectable, OnInit } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { EmployeeService } from "./employee.service";



@Injectable()
export class EmployeeAuthorizationGuard implements OnInit,CanActivate {
    id: number;
    verified: boolean;
   
    
    constructor(private employeeService: EmployeeService, private router: Router, private route: ActivatedRoute) {}
    ngOnInit(): void {
        this.id=this.route.snapshot.params['id'];
        this.authorize();
    
    }
    authorize(){
        this.employeeService.isAuth(this.route.snapshot.params['id']).subscribe(
            (data:boolean) => {
                this.verified = data;
                console.log(data);
            });
            

    }

   
    

    

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
     if(this.verified){
        return true;
     }
     else{
        //  this.router.navigate(['unauthorized']);
         return true;
     }

    // if (this.employee.role=="employer") {
    //   return true;
    // } else {
    //     this.router.navigate(["/unauthorized"]);
    //     return false;
    //     }
    }
}
