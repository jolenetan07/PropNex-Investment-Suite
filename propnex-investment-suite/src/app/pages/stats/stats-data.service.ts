import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StatsDataService {

  private readonly count_URL = 'assets/stats/count_by_district.csv';
  private readonly countT_URL = 'assets/stats/count_by_type.csv';
  private readonly avg_URL = 'assets/stats/avg_by_district.csv';
  private readonly avgT_URL = 'assets/stats/avg_by_type.csv';
  private readonly max_URL = 'assets/stats/max_by_district.csv';
  private readonly maxT_URL = 'assets/stats/max_by_type.csv';

  
  private readonly price_psf_URL = 'assets/stats/price_psf_graph.json';
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

  getPricepsfData(){
    return this.http.get(this.price_psf_URL);
  }

  getMeanPredData(){
    return this.http.get(this.mean_pred_URL);
  }

  getCentralData(){
    return this.http.get(this.central_URL);
  }

  getEastData(){
    return this.http.get(this.east_URL);
  }

  getNEData(){
    return this.http.get(this.ne_URL);
  }

  getNorthData(){
    return this.http.get(this.north_URL);
  }

  getWestData(){
    return this.http.get(this.west_URL);
  }

  getCentralPredData(){
    return this.http.get(this.central_pred_URL);
  }

  getEastPredData(){
    return this.http.get(this.east_pred_URL);
  }

  getNEPredData(){
    return this.http.get(this.ne_pred_URL);
  }

  getNorthPredData(){
    return this.http.get(this.north_pred_URL);
  }

  getWestPredData(){
    return this.http.get(this.west_pred_URL);
  }

  getVolumeData(){
    return this.http.get(this.volume_URL);
  }

  getCountData() {
    return this.http.get(this.count_URL, { responseType: 'text' });
  }

  getCountTypeData() {
    return this.http.get(this.countT_URL, { responseType: 'text' });
  }

  getAvgData() {
    return this.http.get(this.avg_URL, { responseType: 'text' });
  }

  getAvgTypeData() {
    return this.http.get(this.avgT_URL, { responseType: 'text' });
  }

  getMaxData() {
    return this.http.get(this.max_URL, { responseType: 'text' });
  }

  getMaxTypeData() {
    return this.http.get(this.maxT_URL, { responseType: 'text' });
  }
}
