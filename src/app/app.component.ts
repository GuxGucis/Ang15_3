import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  name!: string; //declaracion de una variable. (A rellenar)
  //name = 'Gugui' //se podría poner y si hace el enlazado doble aparecera esa con el valor predeterminado pero se puede cambiar.
  selection!: string;
  
  title = 'VideoAngular';

  cities = ['Madrid', 'Guarroman', 'Mostoles']

  addNewCity(city: string):void{
    this.cities.push(city)
  }

  cityCliked(city: string):void{
    console.log('Event ->', city);
    this.selection = city;
  }

  Clear():void{
    this.selection = '';
  }

}
