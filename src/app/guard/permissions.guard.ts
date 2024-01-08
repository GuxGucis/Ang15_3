import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PermissionsGuard implements CanActivate {
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if( this.hasUser()){
      return true;
    }
    alert('You don`t have permissions');
    return false;
  }

  hasUser(): boolean{
    return false; //No tenemos login de momento a si que truncamos el inicio de sesion
  }
  
}
