import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Filter } from 'src/app/shared/model/filter.model';
import { Item } from '../shared/models/item.model';
import { TypeItem } from '../shared/models/typeItem.model';
import { ItemService } from '../shared/services/item.service';

type LocalFormatItem = {
  number: number;
  price: number;
  typeItem: TypeItem;
  name?: string;
  description?: string;
  urlImg?: string;
  id?: number;
};

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  filters: Filter[] = [
    {
      placeholder: 'Название',
      value: '',
      field: 'name',
      type: 'name',
    },
  ];
  filterValue: Filter = {
    value: '',
    field: 'name',
  };
  items: LocalFormatItem[] = [];
  isLoaded = false;
  showOnlyPage = false;
  currentItemId: number | undefined;
  constructor(
    private title: Title,
    private meta: Meta,
    private itemService: ItemService
  ) {
    title.setTitle('Магазин бонусов');
    meta.addTags([
      {
        name: 'keywords',
        content:
          'бонусы,магазин,сувениры,идеи,отличные идеи,купить,обменять,баллы',
      },
      {
        name: 'description',
        content:
          'Страница магазина бонусов, чтобы обменять баллы на бонусы и сувениры',
      },
    ]);
  }

  ngOnInit(): void {
    this.itemService.getItems().subscribe((items: any) => {
      items.forEach((i: Item) => {
        this.items.push({
          number: i.number,
          price: i.price,
          typeItem: i.typeItem,
          name: i.typeItem?.name,
          urlImg: i.typeItem?.imgUrl,
          description: i.typeItem?.description,
          id: i.id,
        });
      });
      this.isLoaded = true;
    });
  }
  filter(event: any) {
    console.log(event);
    this.filterValue = event;
  }

  clickItem(item: Item) {
    this.currentItemId = item.id;
    this.showOnlyPage = true;
  }
  onBuy(event: any) {
    if (this.itemService.currentItem) {
      let i = this.itemService.currentItem;
      // console.log(i);
      if (i.number > 0) {
        this.items[event].number--;
      } else {
        this.items = this.items.filter((item) => item.id != i.id);
      }
    }
  }
  onBack() {
    this.showOnlyPage = false;
  }
}
