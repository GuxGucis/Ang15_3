import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'filter',
})

export class FilterPipe implements PipeTransform {
    
    
    transform(values: string[], args: string): string[]{

        if (!args || args?.length < 2)return values;
            // Si args es una cadena vacía, devuelve todas las ciudades. Y no empieza a buscar hasta que tiene al menos 2 caracteres.
        
        let result: string[] = [];

        for(const value of values){
            if(value.toLowerCase().indexOf(args.toLocaleLowerCase()) > -1){ //Si encuentra algo devolvera la posicion si no -1
                result = [...result, value]; //Añadimos lo encontrado
            }
        }

        return result;
    }

}

//LOS Pipes sirven para transformar datos, este es uno custom

