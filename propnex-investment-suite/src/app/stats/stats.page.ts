import { Component, OnInit } from '@angular/core';

declare var Plotly: any;

@Component({
  selector: 'app-stats',
  templateUrl: './stats.page.html',
  styleUrls: ['./stats.page.scss'],
})
export class StatsPage implements OnInit {
  private width;
  private height;

  constructor() { }

  ngOnInit() {
    this.width  = window.innerWidth;
    this.height  = window.innerHeight;

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

    console.log("onInit this.width: "+ this.width);

    var layout = {
      showlegend: false,
      dragmode: 'pan',
      margin: {l:25, r:15, t:10, b:20},
      width: this.width
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
