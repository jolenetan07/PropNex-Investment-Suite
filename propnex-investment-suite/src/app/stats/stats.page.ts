import { Component, OnInit, Injectable } from '@angular/core';
import { StatsDataService } from './stats-data.service';
import { AlertController } from '@ionic/angular';

declare var Plotly: any;

@Component({
  selector: 'app-stats',
  templateUrl: './stats.page.html',
  styleUrls: ['./stats.page.scss'],
})
export class StatsPage implements OnInit {
  private width: number;
  // private height;
  public count_data;
  public countT_data;
  public avg_data;
  public avgT_data;
  public max_data;
  public maxT_data;

  numLocHidden = false;
  numTypeHidden = false;
  expLocHidden = false;
  expTypeHidden = false;

  constructor(private dataService: StatsDataService, private alertController: AlertController) { }

  ngOnInit() {
    this.dataService.getCountData().subscribe(data=>{this.count_data = data});
    this.dataService.getCountTypeData().subscribe(data=>{this.countT_data = data});
    this.dataService.getAvgData().subscribe(data=>{this.avg_data = data});
    this.dataService.getAvgTypeData().subscribe(data=>{this.avgT_data = data});
    this.dataService.getMaxData().subscribe(data=>{this.max_data = data});
    this.dataService.getMaxTypeData().subscribe(data=>{this.maxT_data = data});

    this.width  = window.innerWidth;
    // this.height  = window.innerHeight;

    let trace1 = {
      x: ['2020-10-04', '2021-11-04', '2023-12-04'],
      y: [90, 40, 60],
      type: 'scatter'
    };

    let trace2 = {
      x: ['2020-10-04', '2021-11-04', '2023-12-04'],
      y: [20, 10, 15],
      type: 'bar'
    };

    let data = [trace1, trace2];

    console.log("onInit this.width: "+ this.width);

    let layout = {
      showlegend: false,
      dragmode: 'pan',
      margin: {l:25, r:15, t:10, b:20},
      width: this.width
    };

    let configs = {
      scrollZoom: false,
      responsive: true,
      displaylogo: false,
      modeBarButtonsToRemove: ['select2d', 'lasso2d', 'zoom2d', 'resetScale2d']
    }

    Plotly.newPlot('price-trends-graph', data, layout, configs);
  }

  ionViewWillEnter(){
    this.count_data = this.count_data.split("\r\n").slice(1,6); 
    for (let i = 0; i < 5; i++){
      this.count_data[i] = this.count_data[i].split(",");
    }
    this.count_data = this.count_data.sort(this.sort2Darray);
    
    this.countT_data = this.countT_data.split("\r\n").slice(1,17); 
    for (let i = 0; i < 16; i++){
      this.countT_data[i] = this.countT_data[i].split(",");
    }
    this.countT_data = this.countT_data.sort(this.sort2Darray);

    this.avg_data = this.avg_data.split("\r\n").slice(1,6); 
    for (let i = 0; i < 5; i++){
      this.avg_data[i] = this.avg_data[i].split(",");
      this.avg_data[i][1] = this.avg_data[i][1].slice(0,this.avg_data[i][1].indexOf("."));
    }
    this.avg_data = this.avg_data.sort(this.sort2Darray);

    this.avgT_data = this.avgT_data.split("\r\n").slice(1,17); 
    for (let i = 0; i < 16; i++){
      this.avgT_data[i] = this.avgT_data[i].split(",");
      this.avgT_data[i][1] = this.avgT_data[i][1].slice(0,this.avgT_data[i][1].indexOf("."));
    }
    this.avgT_data = this.avgT_data.sort(this.sort2Darray);
    
    this.max_data = this.max_data.split("\r\n").slice(1,6); 
    for (let i = 0; i < 5; i++){
      this.max_data[i] = this.max_data[i].split(",");
      this.max_data[i][1] = this.max_data[i][1].slice(0,this.max_data[i][1].indexOf("."));
    }
    this.max_data = this.max_data.sort(this.sort2Darray);

    this.maxT_data = this.maxT_data.split("\r\n").slice(1,17); 
    for (let i = 0; i < 16; i++){
      this.maxT_data[i] = this.maxT_data[i].split(",");
      this.maxT_data[i][1] = this.maxT_data[i][1].slice(0,this.maxT_data[i][1].indexOf("."));
    }
    this.maxT_data = this.maxT_data.sort(this.sort2Darray);

    console.log(this.count_data);
    console.log(this.avg_data);
    console.log(this.max_data);
  }

  async countInfoClick() {
    console.log("count info button clicked");
    const alert = await this.alertController.create({
      header: 'Most Number of Units Sold',
      subHeader: 'How is this calculated?',
      message: 'All transactions over the last 6 months are grouped by their region/type, and the number of transactions for each region/type is totaled.',
      buttons: ['OK'],
    });

    await alert.present();
  }
  
  async maxInfoClick(){
    console.log("max info button clicked");
    const alert = await this.alertController.create({
      header: 'Most Expensive Units',
      subHeader: 'How is this calculated?',
      message: 'All transactions over the last 6 months are grouped by their region/type, and the most expensive transaction by price per square meter is presented.',
      buttons: ['OK'],
    });

    await alert.present();
  }

  async avgLocInfoClick(){
    console.log("avgLocInfoClick");
    const alert = await this.alertController.create({
      header: 'Most Expensive Locations',
      subHeader: 'How is this calculated?',
      message: 'All transactions over the last 6 months are grouped by their region, and the mean for each region presented.',
      buttons: ['OK'],
    });

    await alert.present();
  }

  async avgTypeInfoClick(){
    console.log("avgLocInfoClick");
    const alert = await this.alertController.create({
      header: 'Most Expensive Property Types',
      subHeader: 'How is this calculated?',
      message: 'All transactions over the last 6 months are grouped by their type, and the mean for each type presented.',
      buttons: ['OK'],
    });

    await alert.present();
  }

  private sort2Darray(a,b){
    let a1 = Number(a[1]);
    let b1 = Number(b[1]);
    return b1-a1;
  }

  numLocButton(){
    console.log("numLocButton");
    this.numLocHidden = !this.numLocHidden;
  }
  numTypeButton(){
    console.log("numTypeButton");
    this.numTypeHidden = !this.numTypeHidden;
  }
  expLocButton(){
    console.log("ExpLocButton");
    this.expLocHidden = !this.expLocHidden;
  }
  expTypeButton(){
    console.log("ExpTypeButton");
    this.expTypeHidden = !this.expTypeHidden;
  }

}
