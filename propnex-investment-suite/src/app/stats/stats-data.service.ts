import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class StatsDataService {
  // public csv_data = "default";

  private readonly count_URL:string = 'assets/stats/count_by_district.csv';
  private readonly countT_URL:string = 'assets/stats/count_by_type.csv';
  private readonly avg_URL:string = 'assets/stats/avg_by_district.csv';
  private readonly avgT_URL:string = 'assets/stats/avg_by_type.csv';
  private readonly max_URL:string = 'assets/stats/max_by_district.csv';
  private readonly maxT_URL:string = 'assets/stats/max_by_type.csv';

  
  private readonly price_psm_URL:string = 'assets/stats/price_psm_graph.json';
  private readonly volume_URL:string = 'assets/stats/volume_graph.json';

  constructor(protected http: HttpClient, public platform: Platform) { 
    let android_prefix:string = 'file:///android_asset/www/';
    if (platform.is('android')){
      this.price_psm_URL = android_prefix.concat(this.price_psm_URL);
      this.volume_URL = android_prefix.concat(this.volume_URL);
      this.count_URL = android_prefix.concat(this.count_URL);
      this.countT_URL = android_prefix.concat(this.countT_URL);
      this.avg_URL = android_prefix.concat(this.avg_URL);
      this.avgT_URL = android_prefix.concat(this.avgT_URL);
      this.max_URL = android_prefix.concat(this.max_URL);
      this.maxT_URL = android_prefix.concat(this.maxT_URL);
    }
  }

  getPricepsmData(){
    console.log("Fetch price psm data from assets");
    return this.http.get(this.price_psm_URL);
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
