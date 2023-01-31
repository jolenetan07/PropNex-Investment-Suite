import { Component, OnInit } from '@angular/core';

declare var Plotly: any;

@Component({
  selector: 'app-stats',
  templateUrl: './stats.page.html',
  styleUrls: ['./stats.page.scss'],
})
export class StatsPage implements OnInit {

  constructor() { }

  ngOnInit() {
    var trace1 = {
      x: ['2020-10-04', '2021-11-04', '2023-12-04'],
      y: [90, 40, 60],
      type: 'scatter'
    };

    var trace2 = {
      x: ['2020-10-04', '2021-11-04', '2023-12-04'],
      y: [20, 10, 15],
      type: 'bar'
    };

    var data = [trace1, trace2];

    var layout = {
      showlegend: false,
      dragmode: 'pan',
      margin: {l:25, r:15, t:10, b:20}
    };

    var configs = {
      scrollZoom: false,
      responsive: true,
      displaylogo: false,
      modeBarButtonsToRemove: ['select2d', 'lasso2d', 'zoom2d', 'resetScale2d']
    }

    Plotly.newPlot('price-trends-graph', data, layout, configs);
  }

}
