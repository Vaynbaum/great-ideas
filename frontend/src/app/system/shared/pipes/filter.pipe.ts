import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appfilter',
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], mode: boolean, id: number | undefined): any {
    return mode
      ? items
      : items.filter((i) => {
          return i.userId == id;
        });
  }
}
