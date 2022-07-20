import { Component, Input, OnInit } from '@angular/core';
import { StyleType } from 'src/app/shared/model/style_type.model';

@Component({
  selector: 'app-info-profile',
  templateUrl: './info-profile.component.html',
  styleUrls: ['./info-profile.component.scss'],
})
export class InfoProfileComponent implements OnInit {
  urlUndefined = '../../../../../assets/img/UserImgGray.png';
  Style: StyleType = null;
  @Input()
  url: string | undefined;
  @Input()
  widthImage: string | undefined;
  @Input()
  fullname: string = '';
  @Input()
  colorText: string | undefined;
  @Input()
  date: number | undefined;
  constructor() {}

  ngOnInit(): void {
    this.Style = {
      width: this.widthImage,
      color: this.colorText,
    };
    this.url = this.url ? this.url : this.urlUndefined;
  }
}
