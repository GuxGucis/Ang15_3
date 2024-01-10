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

  updateCity(city : City): void{
    this.dataSVs.updateCity(city).subscribe( res => {
      const tempArr = this.cities.filter( item => item._id !== city._id );
      this.cities = [...tempArr, city];
      this.Clear();
    })
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

    if(confirm('Are you sure?')){
      this.dataSVs.deleteCity(id).subscribe( res => {
        const tempArr = this.cities.filter(city => city._id !== id);
        this.cities = [...tempArr]
      })
    }

  }

  Clear():void{
    this.selection = {
      _id: '',
      name: ''
    };
  }

}
