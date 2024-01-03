import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-list-cities',
  templateUrl: './list-cities.component.html',
  styleUrls: ['./list-cities.component.scss']
})
export class ListCitiesComponent {
  
  @Input() city!: string;
  @Input() selection!: string;
  
  overmouse!: string;

  @Output() cityClickedEvent = new EventEmitter<string>();
  @Output() cityOverEvent = new EventEmitter<string>();

  
  cityCliked(city: string):void{
    this.cityClickedEvent.emit(city);
  }

  cityOver(city: string):void{
    this.overmouse = city;
  }

  cityOut(): void {
    this.overmouse = ''; // Resetear el valor de overmouse
  }

}
