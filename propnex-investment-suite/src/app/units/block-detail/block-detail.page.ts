import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/home/home.service';
import { Place } from 'src/app/home/place.model';

@Component({
  selector: 'app-block-detail',
  templateUrl: './block-detail.page.html',
  styleUrls: ['./block-detail.page.scss'],
})
export class BlockDetailPage implements OnInit {
  places: Place[];
  logs: string[] = [];

  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit() {
    this.places = this.homeService.allPlaces;
  }


  handleChange(event) {
    console.log(event.detail.value);
  }

}
