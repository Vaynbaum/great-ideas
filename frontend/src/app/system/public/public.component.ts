import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ChartType } from 'angular-google-charts';
import { GoogleChart } from 'src/app/shared/model/googleCharts.model';
import { Stat } from 'src/app/shared/model/statistic.model';
import { User } from 'src/app/shared/model/user.model';
import { UserService } from 'src/app/shared/services/user.service';

type DataToChart = [
  id: string,
  ideas: number,
  balls: number,
  town: string,
  users: number
];

@Component({
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss'],
})
export class PublicComponent implements OnInit {
  dataToChart: DataToChart[] = [];

  statistics: Stat[] = [];

  projectDescription = {
    title: 'О проекте',
    content: `Знать, что хотят жители города видеть из окна своего дома, чем они довольны и гордяться, а также, что действительно их беспокоит - цель данного проекта.
      Функционал данного веб-приложения способствует жителям высказать свое мнение и предложить идеи по благоустройству своего города.
      Взамен на это пользователи смогут обменять баллы, начисленные им за активность, на бонусы и сувенирные товары`,

    url: '../../../assets/img/imgMainPage.jpg',
  };
  currentDate: number = Date.now();

  titleTextStyle = {
    color: '#bd4330',
    italic: false,
    fontSize: 18,
    bold: true,
  };

  charts: GoogleChart[] = [
    {
      type: 'BubbleChart' as ChartType,
      columns: ['ID', 'Идеи', 'Баллы', 'Город', 'Пользователи'],
      opt: {
        width: 510,
        height: 250,
        hAxis: {
          title: 'Идеи',
          titleTextStyle: this.titleTextStyle,
        },

        vAxis: {
          title: 'Баллы',
          titleTextStyle: this.titleTextStyle,
        },

        bubble: {
          textStyle: {
            auraColor: 'none',
            fontSize: 14,
          },
          opacity: 0.5,
        },
        explorer: {
          action: ['dragToPan', 'rightClickToReset'],
        },

        chartArea: {
          height: 200,
          width: 320,
          top: 5,
        },
      },

      data: [],
    },
  ];

  constructor(
    private title: Title,
    private meta: Meta,
    private userService: UserService
  ) {
    title.setTitle('Основная страница');
    meta.addTags([
      {
        name: 'keywords',
        content:
          'отличные идеи,главный,страница,система,идея,отличное,основной,статистика,информация,о проекте',
      },
      {
        name: 'description',
        content: 'Главная страница системы',
      },
    ]);
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users: any) => {
      users.forEach((user: User) => {
        let ind = this.dataToChart.findIndex(
          (item) => item[3] === user.residency
        );
        if (ind > -1) {
          this.dataToChart[ind][1] += user.ideas;
          this.dataToChart[ind][2] +=
            User.numberBeginBalls + user.ideas * User.numberBallsForIdea;
          this.dataToChart[ind][4]++;
        } else {
          this.dataToChart.push([
            '',
            user.ideas,
            User.numberBeginBalls + user.ideas * User.numberBallsForIdea,
            user.residency,
            1,
          ]);
        }
      });
      this.charts[0].data = this.dataToChart;
    });
  }
}
