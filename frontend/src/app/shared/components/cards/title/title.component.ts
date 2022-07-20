import { Component, Input, OnInit } from '@angular/core';
import { StyleType } from 'src/app/shared/model/style_type.model';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {
  @Input()
  colorTitle: string | undefined;
  @Input()
  value: string | undefined;
  Style: StyleType = null

  constructor() { }

  ngOnInit(): void {
    this.Style = {
      color: this.colorTitle,
    }
  }

}
