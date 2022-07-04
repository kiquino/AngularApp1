import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizar'
})
export class CapitalizarPipe implements PipeTransform {

  transform(value: string): string {
    value.toLowerCase();

    let nombre = value.split("");
   
    for (let index = 0; index < nombre.length; index++) {
      if(index == 0){
        nombre[index]= nombre[index].toUpperCase();

      }
    }

    return nombre.join("");
  }

}
