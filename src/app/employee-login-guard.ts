import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { LoginService } from "./login.service";

@Injectable()
export class EmployeeLoginGuard implements CanActivate{
    value: boolean;

    constructor(private loggedin:LoginService,private router: Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

        this.value= this.loggedin.getIsLoggedIn();
       if(this.value){
           return true;
       }
       else{
           this.router.navigate(['/login']);
              return false;
       }
    }
    
}