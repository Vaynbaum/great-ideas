import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Button } from 'src/app/shared/model/button.model';
import { UrlImgService } from 'src/app/shared/servecies/url-img.service';
import { Idea } from 'src/app/system/shared/models/idea.model';

@Component({
  selector: 'app-idea',
  templateUrl: './idea.component.html',
  styleUrls: ['./idea.component.scss'],
})
export class IdeaComponent implements OnInit {
  @Input()
  idea: Idea | undefined;
  @Input()
  colorText = '#962715';
  @Input()
  showTopPanel: boolean = false;
  @Output() onEditClick = new EventEmitter<Idea>();
  @Output() onDeleteClick = new EventEmitter<Idea>();

  btns: Button[] = [
    {
      text: 'Редактировать',
      urlWhite: '../../../../../assets/img/EditImgWhite.png',
      urlRed: '../../../../../assets/img/EditImgRed.png',
      func: () => {
        this.onEditClick.emit(this.idea);
      },
    },
    {
      text: 'Удалить',
      urlWhite: '../../../../../assets/img/DeleteImgWhite.png',
      urlRed: '../../../../../assets/img/DeleteImgRed.png',
      func: () => {
        this.onDeleteClick.emit(this.idea);
      },
    },
  ];
  constructor(private URLImgService: UrlImgService) {}

  clickToButton(event: number) {
    this.btns[event].func();
  }

  getUrlImg(url: string | undefined) {
    return this.URLImgService.getURLImg(url);
  }

  ngOnInit(): void {}
}
