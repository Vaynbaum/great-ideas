import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/shared/model/user.model';
import { AuthService } from 'src/app/shared/servecies/auth.service';
import { UserService } from 'src/app/shared/servecies/user.service';
import { Item } from '../models/item.model';
import { Purchas } from '../models/purchas.model';
import { ItemService } from './item.service';
const URL = 'http://localhost:3000/purchases';
@Injectable({
  providedIn: 'root',
})
export class PurchasesService {
  constructor(
    private authService: AuthService,
    private itemService: ItemService,
    private userService: UserService,
    private http: HttpClient
  ) {}

  getPurchasesByUser() {
    return this.http.get(
      `${URL}?userId=${this.authService.user?.id}&?_expand=user&_expand=typeItem`
    );
  }

  buy() {
    if (
      this.authService?.user?.balls &&
      this.itemService.currentItem &&
      this.authService.user.balls >= this.itemService.currentItem.price
    ) {
      this.itemService.currentItem.number--;
      this.authService.user.balls -= this.itemService.currentItem.price;
      let newItem = new Item(
        this.itemService.currentItem.number,
        this.itemService.currentItem.price,
        this.itemService.currentItem.typeItemId,
        this.itemService.currentItem.id
      );
      // console.log('buy purchases', this.itemService.currentItem);
      if (this.itemService.currentItem.number > 0) {
        this.itemService.updateItemById(newItem).subscribe(() => {
          this.http
            .post(
              `${URL}`,
              new Purchas(
                this.itemService.currentItem?.typeItemId as number,
                this.authService.user?.id as number
              )
            )
            .subscribe(() => {
              // console.log('buy purchases post', this.itemService.currentItem);
              this.userService
                .updateUser(this.authService.user as User)
                .subscribe((user: any) => {
                  // console.log(user);
                });
            });
        });
      } else {
        this.itemService.deleteItem(newItem.id).subscribe(() => {
          this.http
            .post(
              `${URL}`,
              new Purchas(
                this.itemService.currentItem?.typeItemId as number,
                this.authService.user?.id as number
              )
            )
            .subscribe(() => {
              // console.log('buy purchases post', this.itemService.currentItem);
              this.userService
                .updateUser(this.authService.user as User)
                .subscribe((user: any) => {
                  // console.log(user);
                });
            });
        });
      }
    }
  }
}
