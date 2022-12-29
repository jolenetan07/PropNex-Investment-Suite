import { Component, OnInit } from '@angular/core';
import { IonItemSliding } from '@ionic/angular';
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
    
  }

  ionViewWillEnter() {
    this.loadedPlaces = this.homeService.favPlaces;
  } 

  onRemovePlace(postal: string, slidingEl: IonItemSliding) {
    slidingEl.close();
    this.loadedPlaces = this.homeService.removeFavPlace(postal);
  }

}
