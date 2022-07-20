import { Component, Input, OnInit } from '@angular/core';
import { Stat } from 'src/app/shared/model/statistic.model';
import { Purchas } from 'src/app/system/shared/models/purchas.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input()
  purchas: Purchas | undefined;
  @Input()
  number: number | undefined;
  @Input()
  name: string | undefined;
  constructor() {}
  statistic: Stat | undefined;
  ngOnInit(): void {
    this.statistic = {
      val: this.number,
      str: this.name,
    };
  }
}
