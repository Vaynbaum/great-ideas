import { User } from 'src/app/shared/model/user.model';
import { TypeItem } from './typeItem.model';

export class Purchas {
  constructor(
    public typeItemId: number,
    public userId: number,
    public user?: User,
    public typeItem?: TypeItem,
    public id?: number
  ) {}
}
