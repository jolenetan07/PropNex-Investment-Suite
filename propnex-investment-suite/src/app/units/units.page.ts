import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home/home.service';
import { Place } from '../home/place.model';

@Component({
  selector: 'app-units',
  templateUrl: './units.page.html',
  styleUrls: ['./units.page.scss'],
})
export class UnitsPage implements OnInit {
  loadedPlaces: Place[];
  result: Place;

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.loadedPlaces = this.homeService.allPlaces;
    //this.result = [...this.loadedPlaces];
  }

  handleChange(event) {
    const query = event.target.value;
    this.result  = this.homeService.searchPlace(query);
  }

}
