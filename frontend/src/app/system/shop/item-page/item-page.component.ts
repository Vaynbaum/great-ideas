import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Stat } from 'src/app/shared/model/statistic.model';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UrlImgService } from 'src/app/shared/services/url-img.service';
import { Item } from '../../shared/models/item.model';
import { ItemService } from '../../shared/services/item.service';
import { PurchasesService } from '../../shared/services/purchases.service';

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.scss'],
})
export class ItemPageComponent implements OnInit {
  @Input()
  itemId: number | undefined;
  @Output()
  onBuy = new EventEmitter<number>();
  @Output()
  onbBack = new EventEmitter<boolean>();
  isLoaded = false;

  stats: Stat[] = [
    {
      str: 'количество',
      val: 0,
    },
    {
      str: 'цена',
      val: 0,
    },
  ];

  constructor(
    private URLImgService: UrlImgService,
    public activeRoute: ActivatedRoute,
    private itemService: ItemService,
    private purchasesService: PurchasesService
  ) {}
  getUrlImg(url: string | undefined) {
    return this.URLImgService.getURLImg(url);
  }

  public get item() {
    return this.itemService.currentItem;
  }

  back() {
    this.onbBack.emit(true);
  }

  buy() {
    if (this.item?.number && this.item?.number > 0) {
      // console.log('buy item-page pred buy', this.item);
      this.purchasesService.buy();
      this.stats[0].val = this.item?.number;
      this.stats[1].val = this.item?.price;
      this.onBuy.emit((this.item.id as number) - 1);
      // console.log('buy item-page post buy', this.item);
    }
  }

  ngOnInit(): void {
    this.itemService.getItemById(this.itemId).subscribe((item: any) => {
      this.itemService.currentItem = item;
      // console.log('ngOnInit item-page', this.itemService.currentItem);
      this.isLoaded = true;
      this.stats[0].val = this.item?.number;
      this.stats[1].val = this.item?.price;
    });
  }
}
