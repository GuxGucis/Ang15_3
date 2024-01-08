// Un resolver es algo que intermedio que se dispara cuando intentamos acceder a una ruta, pero para acceder a dicha ruda,
//  necesitamos de ciertos datos, que el 'resolver' verifica

import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { Observable, of } from "rxjs";

const departaments = ['Marketing', 'Sales', 'RRHH', 'Other'];

@Injectable({ providedIn: 'root' })
export class DataResolverService implements Resolve<any> {
    
    resolve(): Observable<any>{
        // TODO: Call Service
        return of(departaments);
    }

}