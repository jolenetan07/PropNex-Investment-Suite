import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { Place } from '../place.model';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.page.html',
  styleUrls: ['./favourites.page.scss'],
})
export class FavouritesPage implements OnInit {
  loadedPlaces?: Place[];

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.loadedPlaces = this.homeService.favPlaces;

  }

}
