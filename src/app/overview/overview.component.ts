import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip, SingleDataSet } from 'ng2-charts';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
//   public lineChartData: ChartDataSets[] = [
//     { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
//   ];
//   public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
//   public lineChartOptions: (ChartOptions & { annotation: any }) = {
//     responsive: true,
//   };
//   public lineChartColors: Color[] = [
//     {
//       borderColor: 'black',
//       backgroundColor: 'rgba(255,0,0,0.3)',
//     },
//   ];
//   public lineChartLegend = true;
//   public lineChartType = 'line';
//   public lineChartPlugins = [];

//   constructor() { }

//   ngOnInit() {
//   }
// }


public lineChartOptions: ChartOptions = {
  responsive: true,
};
public lineChartLabels: Label[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
public lineChartType: ChartType = "line";
public lineChartLegend = false;
public lineChartPlugins = [];


public lineChartData: ChartDataSets[] = [
  { data: [19,7,15,12,17,10]},
  { data: [15,10,15,16,15,23]},
 
];

constructor() { }

ngOnInit() {
}
}