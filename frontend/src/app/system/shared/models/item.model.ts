import { TypeItem } from './typeItem.model';

export class Item {
  constructor(
    public number: number,
    public price: number,
    public typeItemId: number,
    public id?: number,
    public typeItem?: any
  ) {}
}
