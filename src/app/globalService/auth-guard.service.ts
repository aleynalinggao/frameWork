import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{
  isLogin = false;
  redirectUrl : string = '';
  constructor(private router: Router) {

  }
  canActivate(route: ActivatedRouteSnapshot , state: RouterStateSnapshot){
      let url = state.url;
      sessionStorage.setItem('url',url);
      return this.checkLogin(url);
  }
  checkLogin(url: string){
    if(sessionStorage.getItem('isLogin')){
        this.isLogin = true
    }
    if(this.isLogin){
      return true;
    }
    this.router.navigateByUrl('/login');
    return false;
  }

}
