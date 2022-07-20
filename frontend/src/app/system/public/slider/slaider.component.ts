import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  descriptions = [
    {
      url: '../../../assets/img/IdeaImgRed.png',
      text: `В разделе \"Идеи\" можно посмотреть все или только свои предложения,
      по благоустройству и улучшению города, а также добавить новую или изменить уже существующие.`,
    },
    {
      url: '../../../assets/img/ShopImgRed.png',
      text: `Раздел \"Магазин бонусов\" позволяет проиборести сувениры и бонусы спонсоров
      проекта за баллы, полученные после публикации идей.`,
    },
    {
      url: '../../../assets/img/UserImgRed.png',
      text: `\"Личный кабинет  \" содержит информацию о пользователе и
      статистику публикаци своих идей и приобретенные товары в магазине бонусов.`,
    },
    {
      url: '../../../assets/img/IdeaImgRed.png',
      text: `В разделе \"Идеи\" можно посмотреть все или только свои предложения,
      по благоустройству и улучшению города, а также добавить новую или изменить уже существующие.`,
    },
    {
      url: '../../../assets/img/ShopImgRed.png',
      text: `Раздел \"Магазин бонусов\" позволяет проиборести сувениры и бонусы спонсоров
      проекта за баллы, полученные после публикации идей.`,
    },
    {
      url: '../../../assets/img/UserImgRed.png',
      text: `\"Личный кабинет  \" содержит информацию о пользователе и
      статистику публикаци своих идей и приобретенные товары в магазине бонусов.`,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
