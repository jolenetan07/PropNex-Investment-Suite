import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { Place } from '../place.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  loadedFavPlaces: Place[];
  loadedRecPlaces: Place[];

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.loadedFavPlaces = this.homeService.favPlaces;
    this.loadedRecPlaces = this.homeService.personalRecPlaces;
  }

}
