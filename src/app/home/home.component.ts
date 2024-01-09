import { Component, OnInit } from '@angular/core';
import { City, DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  name!: string; //declaracion de una variable. (A rellenar)
  //name = 'Gugui' //se podría poner y si hace el enlazado doble aparecera esa con el valor predeterminado pero se puede cambiar.
  selection!: City;
  criterio = '';
  
  title = 'VideoAngular';

  cities: City[] = []

  constructor(private readonly dataSVs: DataService){}

  ngOnInit(): void {
    this.dataSVs.getCities().subscribe( cities => {
      this.cities = [... cities]
    });
  }

  addNewCity(city: string):void{
    //this.cities.push(city);
    this.dataSVs.addNewCity(city).subscribe( res =>{
      this.cities.push(res)
    })
  }

  onCitySelected(city: City):void{
    console.log('Event ->', city);
    this.selection = city;
  }

  onCityDeleted(id: string): void{

    console.log('city deleted ->', id)

  }

  Clear():void{
    this.selection = {
      _id: '',
      name: ''
    };
  }

}
