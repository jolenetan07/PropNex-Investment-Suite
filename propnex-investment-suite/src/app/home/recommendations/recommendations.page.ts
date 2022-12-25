import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { Place } from '../place.model';
import { SegmentChangeEventDetail } from '@ionic/core';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.page.html',
  styleUrls: ['./recommendations.page.scss'],
})
export class RecommendationsPage implements OnInit {
  loadedPlaces?: Place[];
  displayedPlaces?: Place[];

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.loadedPlaces = this.homeService.personalRecPlaces;
    this.displayedPlaces = this.loadedPlaces;
  }

  onFilterUpdate(event: CustomEvent<SegmentChangeEventDetail>) {
    if (event.detail.value === 'personal') {
      this.displayedPlaces = this.homeService.personalRecPlaces;
    } else {
      this.displayedPlaces = this.homeService.trendRecPlaces;
    }
  }

}
