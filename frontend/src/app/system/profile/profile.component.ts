import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Stat } from 'src/app/shared/model/statistic.model';
import { User } from 'src/app/shared/model/user.model';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UserService } from 'src/app/shared/services/user.service';
import { URL_UPLOAD_IMAGE } from 'src/app/shared/urls';
import { Purchas } from '../shared/models/purchas.model';
import { PurchasesService } from '../shared/services/purchases.service';
import { UnloadService } from '../shared/services/unload.service';

enum IndexsStatistics {
  Ideas,
  Balls,
  Town = 0,
  Email,
  Password,
}

type DisplayPurchas = {
  item: Purchas;
  number: number;
};

type DisplayInfo = {
  fullname: string;
  stat: Stat[];
  info: Stat[];
  url: string;
  urlUndefined: string;
};

const url = `${URL_UPLOAD_IMAGE}/`;
@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  purchases: DisplayPurchas[] = [];
  //@ts-ignore
  user: User;
  isLoaded = false;
  displayUser: DisplayInfo = {
    fullname: '',
    stat: [
      { val: 0, str: 'идей' },
      { val: 0, str: 'баллов' },
    ],
    info: [
      { val: '', str: 'город' },
      { val: '', str: 'email' },
      { val: '', str: 'пароль' },
    ],
    url: '',
    urlUndefined: '../../../assets/img/UserImgGray.png',
  };

  constructor(
    private title: Title,
    private meta: Meta,
    private userService: UserService,
    private router: Router,
    private unloadService: UnloadService,
    private authService: AuthService,
    private purchasesService: PurchasesService
  ) {
    title.setTitle('Личный кабинет пользователя');
    meta.addTags([
      {
        name: 'keywords',
        content:
          'личный,кабинет,аккаунт,пользователь,просмотр,данные,отличные идеи,персональные,удаление,количество,идеи,баллы,бонус',
      },
      { name: 'description', content: 'Личный кабинет пользователя' },
    ]);
  }
  ngOnInit(): void {
    //@ts-ignore
    this.user = this.authService.user;
    this.displayUser.fullname = `${this.user?.lastname} ${this.user?.firstname}`;
    this.displayUser.url = this.user?.url
      ? `${url}${this.user.url}`
      : this.displayUser.urlUndefined;
    this.displayUser.stat[IndexsStatistics.Ideas].val = this.user?.ideas
      ? this.user.ideas
      : 0;
    this.displayUser.stat[IndexsStatistics.Balls].val = this.user?.balls
      ? this.user.balls
      : 0;
    this.displayUser.info[IndexsStatistics.Town].val = this.user.residency;
    this.displayUser.info[IndexsStatistics.Email].val = this.user.email;
    this.displayUser.info[IndexsStatistics.Password].val = this.user.password;
    this.purchasesService.getPurchasesByUser().subscribe((purchases: any) => {
      purchases.forEach((item: any) => {
        const ind = this.purchases.findIndex(
          (i: DisplayPurchas) => i.item.typeItemId === item.typeItemId
        );

        if (ind >= 0) {
          this.purchases[ind].number++;
        } else {
          this.purchases.push({
            item: item,
            number: 1,
          });
        }
      });
      this.isLoaded = true;
    });
  }

  onOpenFileDialog() {
    document.getElementById('file-input')?.click();
  }

  async fileChange(event: any) {
    let fileList: FileList = event.target.files;
    if (!fileList.length) {
      return;
    }
    let image = fileList[0];

    try {
      const { data } = await this.unloadService.unload(image);
      let newUser: User = new User(
        this.user.email,
        this.user.password,
        this.user.lastname,
        this.user.firstname,
        this.user.residency,
        this.user.ideas,
        this.user.balls,
        data,
        this.user.id
      );
      this.userService.updateUser(newUser).subscribe((user: any) => {
        this.displayUser.url = `${url}${user.url}`;
        this.authService.user = newUser;
      });
    } catch (error) {
      console.log(console.error);
    }
  }

  deleteProfile() {
    this.userService.deleteUser(this.user?.id as number).subscribe(() => {
      window.localStorage.clear();
      this.router.navigate(['/auth/login'], {
        queryParams: {
          deleteUser: true,
        },
      });
    });
  }
}
