import { Component, OnInit } from '@angular/core';
import { IonItemSliding } from '@ionic/angular';
import { AuthService } from 'src/app/auth/auth.service';
import { fbUser } from 'src/app/auth/firebase.model';
import { HomeService } from '../home.service';
import { Place } from '../place.model';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.page.html',
  styleUrls: ['./favourites.page.scss'],
})
export class FavouritesPage implements OnInit {
  currUser: fbUser;
  loadedPlaces?: Place[];

  constructor(
    private homeService: HomeService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.currUser = this.authService.currFbUser;
  }

  ionViewWillEnter() {
    this.loadedPlaces = this.homeService.favPlaces;
  } 

  onRemovePlace(postal: string, slidingEl: IonItemSliding) {
    slidingEl.close();
    this.loadedPlaces = this.homeService.removeFavPlace(postal);
  }

}
