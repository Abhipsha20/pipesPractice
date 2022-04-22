import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform { // PipeTransform is the interface that the age pipe class implements.
  // transform is the function that has returns the changed value.
  transform(value: any): any {
    console.log(value);
    let currentYear = new Date().getFullYear();
    let birthYear = value.toString();
    let birthVal = birthYear.slice(birthYear.lastIndexOf('-')+1);
    let ageUser = currentYear-birthVal;
    return ageUser;
  }

}
