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

  public count_dataArr;
  public countT_dataArr;
  public avg_dataArr;
  public avgT_dataArr;
  public max_dataArr;
  public maxT_dataArr;


  numLocHidden = false;
  numTypeHidden = false;
  expLocHidden = false;
  expTypeHidden = false;

  private pricepsmData;
  private volumeData;

  constructor(private dataService: StatsDataService, private alertController: AlertController) { }

  ngOnInit() {
    this.dataService.getCountData().subscribe(data=>{this.count_data = data});
    this.dataService.getCountTypeData().subscribe(data=>{this.countT_data = data});
    this.dataService.getAvgData().subscribe(data=>{this.avg_data = data});
    this.dataService.getAvgTypeData().subscribe(data=>{this.avgT_data = data});
    this.dataService.getMaxData().subscribe(data=>{this.max_data = data});
    this.dataService.getMaxTypeData().subscribe(data=>{this.maxT_data = data});

    this.dataService.getPricepsmData().subscribe(data=>{
      this.pricepsmData = data
    });
    this.dataService.getVolumeData().subscribe(data=>{
      this.volumeData = data
    });

    this.width  = window.innerWidth;
    // this.height  = window.innerHeight;

  }

  ionViewWillEnter(){
    this.pricepsmData["name"] = "Price psm";
    this.volumeData["name"] = "Volume";
    let data = [this.pricepsmData, this.volumeData];

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


    this.count_dataArr = this.count_data.split("\r\n").slice(1,6); 
    for (let i = 0; i < 5; i++){
      this.count_dataArr[i] = this.count_dataArr[i].split(",");
    }
    this.count_dataArr = this.count_dataArr.sort(this.sort2Darray);
    
    this.countT_dataArr = this.countT_data.split("\r\n").slice(1,17); 
    for (let i = 0; i < 16; i++){
      this.countT_dataArr[i] = this.countT_dataArr[i].split(",");
    }
    this.countT_dataArr = this.countT_dataArr.sort(this.sort2Darray);

    this.avg_dataArr = this.avg_data.split("\r\n").slice(1,6); 
    for (let i = 0; i < 5; i++){
      this.avg_dataArr[i] = this.avg_dataArr[i].split(",");
      this.avg_dataArr[i][1] = this.avg_dataArr[i][1].slice(0,this.avg_dataArr[i][1].indexOf("."));
    }
    this.avg_dataArr = this.avg_dataArr.sort(this.sort2Darray);

    this.avgT_dataArr = this.avgT_data.split("\r\n").slice(1,17); 
    for (let i = 0; i < 16; i++){
      this.avgT_dataArr[i] = this.avgT_dataArr[i].split(",");
      this.avgT_dataArr[i][1] = this.avgT_dataArr[i][1].slice(0,this.avgT_dataArr[i][1].indexOf("."));
    }
    this.avgT_dataArr = this.avgT_dataArr.sort(this.sort2Darray);
    
    this.max_dataArr = this.max_data.split("\r\n").slice(1,6); 
    for (let i = 0; i < 5; i++){
      this.max_dataArr[i] = this.max_dataArr[i].split(",");
      this.max_dataArr[i][1] = this.max_dataArr[i][1].slice(0,this.max_dataArr[i][1].indexOf("."));
    }
    this.max_dataArr = this.max_dataArr.sort(this.sort2Darray);

    this.maxT_dataArr = this.maxT_data.split("\r\n").slice(1,17); 
    for (let i = 0; i < 16; i++){
      this.maxT_dataArr[i] = this.maxT_dataArr[i].split(",");
      this.maxT_dataArr[i][1] = this.maxT_dataArr[i][1].slice(0,this.maxT_dataArr[i][1].indexOf("."));
    }
    this.maxT_dataArr = this.maxT_dataArr.sort(this.sort2Darray);

    // console.log(this.count_data);
    // console.log(this.avg_data);
    // console.log(this.max_data);
    // console.log(this.pricepsmData)
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

  async trendsInfoClick(){
    console.log("trends info button clicked");
    const alert = await this.alertController.create({
      header: 'Price and Volume Trends',
      subHeader: 'How is this calculated?',
      message: 'All transactions are averaged by month, then the average price per square meter and volume of transactions each month are presented.',
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
