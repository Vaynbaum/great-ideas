import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appFilter',
})
export class SearchPipe implements PipeTransform {
  transform(items: any[], value: string, field: string): any {
    if (items.length === 0 || !value) {
      return items;
    }
    return items.filter((i) => {
      if (field === 'date') {
        let valDate = new Date(value);
        valDate.setHours(0, 0, 0, 0);
        let date = new Date(i[field]);
        date.setHours(0, 0, 0, 0);
        return (
          date
            .toDateString()
            .toLowerCase()
            .indexOf(valDate.toDateString().toLowerCase()) !== -1
        );
      }
      console.log(items, value, field);
      return (
        i[field]
          .toString()
          .toLowerCase()
          .indexOf(value.toString().toLowerCase()) !== -1
      );
    });
  }
}
