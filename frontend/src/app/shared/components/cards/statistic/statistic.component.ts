import { Component, Input, OnInit } from '@angular/core';
import { Stat } from 'src/app/shared/model/statistic.model';
@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss'],
})
export class StatisticComponent implements OnInit {
  @Input()
  statistics: Stat[] = [];
  @Input()
  statistic: Stat | undefined;
  constructor() {}

  ngOnInit(): void {}
}
