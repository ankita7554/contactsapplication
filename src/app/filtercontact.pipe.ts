import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtercontact'
})
export class FiltercontactPipe implements PipeTransform {
  transform(value: any, searchContact: string): any {
    var resultArray = [];
    if (searchContact !== '') return value;
    value.forEach(element => {
      if (element.email === searchContact) resultArray.push(element);
    });
    return resultArray;
  }
}
