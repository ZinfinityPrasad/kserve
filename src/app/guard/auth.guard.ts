import { DataSharingService } from './../service/data-sharing.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private share: DataSharingService,
    private router: Router){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    let bool: boolean;
    this.share.currentUser.subscribe(data =>{
      console.log('user values',data);
      if(data!=null || data!= undefined){
        console.log('coming in true phase');
        bool = true;
        return true;
      }else{
        this.router.navigate(['']);
        bool = false;
        return false;
      }
    });
    return bool;
  }
  
}
