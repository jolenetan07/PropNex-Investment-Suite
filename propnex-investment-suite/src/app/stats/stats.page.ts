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

    var data = [trace1];

    var layout = {
      title: '',
      showlegend: false,
      width: '400',
      height: '300'
    };

    var configs = {
      scrollZoom: true,
      responsive: true,
      displaylogo: false
    }

    Plotly.newPlot('price-trends-graph', data, layout, configs);
  }

}
