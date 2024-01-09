import { Pipe, PipeTransform } from "@angular/core";
import { City } from "../services/data.service";

@Pipe({
    name: 'filter',
})

export class FilterPipe implements PipeTransform {
    
    
    transform(cities: City[], args: string): City[]{

        if (!args || args?.length < 2)return cities;
            // Si args es una cadena vacía, devuelve todas las ciudades. Y no empieza a buscar hasta que tiene al menos 2 caracteres.
        
        let result: City[] = [];

        for(const city of cities){
            if(city.name.toLowerCase().indexOf(args.toLocaleLowerCase()) > -1){ //Si encuentra algo devolvera la posicion si no -1
                result = [...result, city]; //Añadimos lo encontrado
            }
        }

        return result;
    }

}

//LOS Pipes sirven para transformar datos, este es uno custom

