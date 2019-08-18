import { Component, OnInit, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label, SingleDataSet } from 'ng2-charts';

@Component({
  selector: 'app-graphics',
  templateUrl: './graphics.component.html',
  styles: []
})
export class GraphicsComponent implements OnInit {

  @Input('chartData') doughnutChartData: SingleDataSet[];
  @Input('chartLabels') doughnutChartLabels: Label[];
  @Input('chartType') doughnutChartType: ChartType;

  constructor() { }

  ngOnInit() {
  }

}
