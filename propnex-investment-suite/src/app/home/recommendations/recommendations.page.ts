import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { Place } from '../place.model';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.page.html',
  styleUrls: ['./recommendations.page.scss'],
})
export class RecommendationsPage implements OnInit {
  loadedPlaces?: Place[];

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.loadedPlaces = this.homeService.recPlaces;

  }

}
