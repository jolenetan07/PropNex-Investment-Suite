import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StatsDataService {
  // public csv_data = "default";

  private readonly count_URL = 'assets/stats/count_by_district.csv';
  private readonly countT_URL = 'assets/stats/count_by_type.csv';
  private readonly avg_URL = 'assets/stats/avg_by_district.csv';
  private readonly avgT_URL = 'assets/stats/avg_by_type.csv';
  private readonly max_URL = 'assets/stats/max_by_district.csv';
  private readonly maxT_URL = 'assets/stats/max_by_type.csv';

  
  private readonly price_psm_URL = 'assets/stats/price_psm_graph.json';
  private readonly central_URL = 'assets/stats/Central_Region.json';
  private readonly east_URL = 'assets/stats/East_Region.json';
  private readonly ne_URL = 'assets/stats/North_East_Region.json';
  private readonly north_URL = 'assets/stats/North_Region.json';
  private readonly west_URL = 'assets/stats/West_Region.json';
  private readonly volume_URL = 'assets/stats/volume_graph.json';

  private readonly mean_pred_URL = 'assets/stats/price_pred.json';
  private readonly central_pred_URL = 'assets/stats/Central_Region_Pred.json';
  private readonly east_pred_URL = 'assets/stats/East_Region_Pred.json';
  private readonly ne_pred_URL = 'assets/stats/North_East_Region_Pred.json';
  private readonly north_pred_URL = 'assets/stats/North_Region_Pred.json';
  private readonly west_pred_URL = 'assets/stats/West_Region_Pred.json';

  constructor(protected http: HttpClient) { }

  getPricepsmData(){
    console.log("Fetch price psm data from assets");
    return this.http.get(this.price_psm_URL);
  }

  getMeanPredData(){
    console.log("Fetch mean pred data from assets");
    return this.http.get(this.mean_pred_URL);
  }

  getCentralData(){
    console.log("Fetch central data from assets");
    return this.http.get(this.central_URL);
  }

  getEastData(){
    console.log("Fetch east data from assets");
    return this.http.get(this.east_URL);
  }

  getNEData(){
    console.log("Fetch north-east data from assets");
    return this.http.get(this.ne_URL);
  }

  getNorthData(){
    console.log("Fetch north data from assets");
    return this.http.get(this.north_URL);
  }

  getWestData(){
    console.log("Fetch west data from assets");
    return this.http.get(this.west_URL);
  }

  getCentralPredData(){
    console.log("Fetch central pred data from assets");
    return this.http.get(this.central_pred_URL);
  }

  getEastPredData(){
    console.log("Fetch east pred data from assets");
    return this.http.get(this.east_pred_URL);
  }

  getNEPredData(){
    console.log("Fetch north-east pred data from assets");
    return this.http.get(this.ne_pred_URL);
  }

  getNorthPredData(){
    console.log("Fetch north pred data from assets");
    return this.http.get(this.north_pred_URL);
  }

  getWestPredData(){
    console.log("Fetch west pred data from assets");
    return this.http.get(this.west_pred_URL);
  }

  getVolumeData(){
    console.log("Fetch volume data from assets");
    return this.http.get(this.volume_URL);
  }

  getCountData() {
    console.log("Fetch count stats data from assets");
    return this.http.get(this.count_URL, { responseType: 'text' });
  }

  getCountTypeData() {
    console.log("Fetch count by type stats data from assets");
    return this.http.get(this.countT_URL, { responseType: 'text' });
  }

  getAvgData() {
    console.log("Fetch avg stats data from assets");
    return this.http.get(this.avg_URL, { responseType: 'text' });
  }

  getAvgTypeData() {
    console.log("Fetch avg by type stats data from assets");
    return this.http.get(this.avgT_URL, { responseType: 'text' });
  }

  getMaxData() {
    console.log("Fetch max stats data from assets");
    return this.http.get(this.max_URL, { responseType: 'text' });
  }

  getMaxTypeData() {
    console.log("Fetch max by type stats data from assets");
    return this.http.get(this.maxT_URL, { responseType: 'text' });
  }
}
