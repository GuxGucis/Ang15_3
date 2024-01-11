import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface City {

  _id: string;
  name: string;

}

const initCity: City = {
  _id: '',
  name: ''
};

@Injectable({
  providedIn: 'root'
})

export class DataService {

  private city$ = new BehaviorSubject<City>(initCity); //A dierencia de Subject normal, este puede recuperar ciudades introducidas anteriormente. Y requiere de un valor por defecto, en este caso una ciudad vacias
  private readonly API = environment.api;

  constructor(private readonly http: HttpClient) { }

  //Comunicación entres componentes que no esta relacionados es un ejemplo, docu https://www.danywalls.com/how-to-share-data-between-components-in-angular
  get selectedCity$(): Observable<City>{
    return this.city$.asObservable();
  }// Es como que lo pone "publico"
  setCity(city: City): void{
    this.city$.next(city);
  }

  addNewCity(city: string): Observable<City>{
    const body = {name: city };
    return this.http.post<City>(this.API, body);
  }
  getCities(): Observable<City[]>{
    return this.http.get<City[]>(this.API);
  }

  updateCity( city: City): Observable<void>{
    const body = {name: city.name };
    return this.http.put<void>(`${this.API}/${city._id}`, body);
  }
  deleteCity( id: string ): Observable<void>{
    return this.http.delete<void>(`${this.API}/${id}`);
  }

}
