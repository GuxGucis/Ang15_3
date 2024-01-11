import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { City, DataService } from '../services/data.service';
import { NgModel } from '@angular/forms';

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

  constructor(private readonly dataSvc: DataService){}

  // @ViewChild(NgModel)filterInput!: NgModel;

  // ngAfterViewInit(): void {
  //   this.filterInput.valueChanges?.subscribe(res => {
  //     this.filterInput() //LLamamos a una funcion con los filtros, ejemplo de otra manera de hacer los filtros
  //   })
  // }

  ngOnInit(): void {

    this.dataSvc.selectedCity$.subscribe(city => this.selection = city);

    this.dataSvc.getCities().subscribe( cities => {
      this.cities = [... cities]
    });
  }

  updateCity(city : City): void{
    this.dataSvc.updateCity(city).subscribe( res => {
      const tempArr = this.cities.filter( item => item._id !== city._id );
      this.cities = [...tempArr, city];
      this.Clear();
    })
  }

  addNewCity(city: string):void{
    //this.cities.push(city);
    this.dataSvc.addNewCity(city).subscribe( res =>{
      this.cities.push(res)
    })
  }

  onCitySelected(city: City):void{
    console.log('Event ->', city);
    //this.selection = city;
    this.dataSvc.setCity(city); // y con esto lo guardamos en el servicio no local, y si algun otro componente lo necesita, lo puede tener actualizado, por ejemplo en el reactive Form
  }

  onCityDeleted(id: string): void{

    if(confirm('Are you sure?')){
      this.dataSvc.deleteCity(id).subscribe( res => {
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
