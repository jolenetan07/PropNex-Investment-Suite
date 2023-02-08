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
  private readonly volume_URL = 'assets/stats/volume_graph.json';

  constructor(protected http: HttpClient) { }

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
