import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { URL_UPLOAD_IMAGE } from '../../urls';

type Buttons = {
  text: string;
  urlWhite: string;
  urlRed: string;
  url: string;
  hover: boolean;
  link: string;
  queryParams?: object;
};

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  hover(element: Buttons, reverse: boolean = false) {
    element.hover = true;
    element.url = reverse ? element.urlRed : element.urlWhite;
  }

  nonhover(element: Buttons, reverse: boolean = false) {
    element.hover = false;
    element.url = reverse ? element.urlWhite : element.urlRed;
  }

  links: Buttons[] = [
    {
      text: 'Идеи',
      urlWhite: '../../../../../assets/img/IdeaImgWhite.png',
      urlRed: '../../../../../assets/img/IdeaImgRed.png',
      url: '../../../../../assets/img/IdeaImgWhite.png',
      hover: false,
      link: '/system/ideas',
    },
    {
      text: 'Магазин бонусов',
      urlWhite: '../../../../../assets/img/ShopImgWhite.png',
      urlRed: '../../../../../assets/img/ShopImgRed.png',
      url: '../../../../../assets/img/ShopImgWhite.png',
      hover: false,
      link: '/system/shop',
    },
  ];

  profileLinks: Buttons[] = [
    {
      text: 'Аккаунт',
      urlWhite: '../../../../../assets/img/UserImgWhite.png',
      urlRed: '../../../../../assets/img/UserImgRed.png',
      url: '../../../../../assets/img/UserImgRed.png',
      hover: false,
      link: '/system/account',
    },
    {
      text: 'Изменить',
      urlWhite: '../../../../../assets/img/EditImgWhite.png',
      urlRed: '../../../../../assets/img/EditImgRed.png',
      url: '../../../../../assets/img/EditImgRed.png',
      hover: false,
      link: '/system/account-edit',
    },
  ];

  exit: Buttons = {
    text: 'Выход',
    urlWhite: '../../../../../assets/img/ExitImgWhite.png',
    urlRed: '../../../../../assets/img/ExitImgRed.png',
    url: '../../../../../assets/img/ExitImgRed.png',
    hover: false,
    link: '/auth/login',
  };

  public get user() {
    return {
      name: `${this.authService.user?.lastname} ${this.authService.user?.firstname}`,
      url: this.authService.user?.url
        ? `${URL_UPLOAD_IMAGE}/${this.authService.user?.url}`
        : '../../../../../assets/img/UserImgWhite.png',
    };
  }

  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  logout() {
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }
}
