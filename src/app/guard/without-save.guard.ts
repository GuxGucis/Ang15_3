import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WithoutSaveGuard implements CanDeactivate<unknown> {
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if(this.hasUser()){
        return true;
      }

      return confirm('You have unsave changes'); //Como tal no estamos comprobando si ha guardado o no eso abria que hacerlo a mano, comprobar si el formulario esta 'dirty' o cosas asi. Esto es solo usa demostración 

  }

  hasUser(): boolean{
    return false //lo mismo es para truncar el logueo
  }
  
}
