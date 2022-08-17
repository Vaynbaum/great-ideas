import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Button } from 'src/app/shared/model/button.model';
import { User } from 'src/app/shared/model/user.model';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UrlImgService } from 'src/app/shared/services/url-img.service';
import { Idea } from 'src/app/system/shared/models/idea.model';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
})
export class PanelComponent implements OnInit {
  @Input()
  idea: Idea | undefined;
  @Input()
  colorText: string = '#962715';
  @Input()
  buttons: Button[] | undefined;
  @Output()
  onClickButton = new EventEmitter<number>();
  @Input()
  reverse: boolean = true;
  constructor(
    private URLImgService: UrlImgService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  getAuthor(user: User): string {
    return `${user.lastname} ${user.firstname}`;
  }

  canEdit(id: number | undefined) {
    return id == this.authService.user?.id;
  }

  getUrlImg(url: string | undefined) {
    return this.URLImgService.getURLImg(url);
  }

  clickToBtn(index: number) {
    this.onClickButton.emit(index);
  }
}
