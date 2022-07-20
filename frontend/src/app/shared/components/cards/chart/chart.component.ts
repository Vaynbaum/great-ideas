import { Component, OnInit, Input } from '@angular/core';
import { GoogleChart } from 'src/app/shared/model/googleCharts.model';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  @Input()
  charts:GoogleChart[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
