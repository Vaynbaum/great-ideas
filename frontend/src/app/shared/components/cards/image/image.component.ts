import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StyleType } from 'src/app/shared/model/style_type.model';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
})
export class ImageComponent implements OnInit {
  urlUndefined = '../../../../../assets/img/nonPhoto.png';
  Style: StyleType = null;
  @Input()
  widthImage: string | undefined;
  @Input()
  url: string | undefined;
  @Output()
  clickImg = new EventEmitter<any>();
  constructor() {}

  onClick(event: any) {
    this.clickImg.emit(event);
  }

  ngOnInit(): void {
    this.Style = {
      width: this.widthImage,
    };
    this.url = this.url ? this.url : this.urlUndefined;
  }
}
