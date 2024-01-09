import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { NEVER } from 'rxjs';
import { City } from '../services/data.service';

@Component({
  selector: 'app-list-cities',
  templateUrl: './list-cities.component.html',
  styleUrls: ['./list-cities.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush 
  //Esto cambia la estrategia de renderizado de Angular, de manera "default" redeneriza dos veces seguida con cada minimo cambio en desarrollo (por si acaso)
  //Eso es un problema de rendimiento y si la app es muy grande, de tiempo, que es innecesario muchas veces, entonces se pone esto para aquellas partes que no lo necesitan
  //ser checkeadas siempre, y solo bajo demanda (bajo demanda es OnPush). Estos componentes son los que reciben los Input y los Output, que esta es la demanda de cambio
  //Angular funciona actulizando los arboles, de padres a hijos.
})
export class ListCitiesComponent {
  
  @Input() city!: City;
  @Input() selection!: City;
  
  overmouse!: City;

  @Output() citySelectedEvent = new EventEmitter<City>();
  @Output() cityOverEvent = new EventEmitter<City>();
  @Output() cityDeleteEvent = new EventEmitter<string>();

  
  onCitySelected(city: City):void{
    this.citySelectedEvent.emit(city);
  }

  onCityOver(city: City):void{
    this.overmouse = city;
  }

  onCityOut(): void {
    this.overmouse = {
      _id: '',
      name: ''
    }; // Resetear el valor de overmouse
  }

  onCityDelete(id: string): void{

    this.cityDeleteEvent.emit(id);
  }

}
