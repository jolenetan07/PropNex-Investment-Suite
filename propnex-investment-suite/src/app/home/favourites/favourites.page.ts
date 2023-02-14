import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonItemSliding } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { fbPostal, fbUser } from 'src/app/auth/firebase.model';
import { PlaceService } from 'src/app/units/place.service';
import { HomeService } from '../home.service';
import { Place } from '../place.model';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.page.html',
  styleUrls: ['./favourites.page.scss'],
})
export class FavouritesPage implements OnInit {
  currUser: fbUser;
  //loadedPlaces?: Place[];
  loadedFBPostals: fbPostal[];
  private fbPostalsSub: Subscription;
  result: fbPostal;

  constructor(
    private homeService: HomeService,
    private authService: AuthService,
    private router: Router,
    private placeService: PlaceService
  ) { }

  ngOnInit() {
    this.currUser = this.authService.currFbUser;
    this.fbPostalsSub = this.placeService.fbPostals.subscribe(fbPostals => {
      this.loadedFBPostals = fbPostals;
    })
  }

  ionViewWillEnter() {
    this.placeService.fetchFBPostals().subscribe(() => {

    });
  } 

  onClickPlace(postalCode: string) {
    this.result  = this.loadedFBPostals.find(p => p.postal === postalCode);
    this.placeService.currPlace = this.result;
    this.router.navigate(['/', 'units', this.result.postal]);
  }

  onRemovePlace(postal: string, slidingEl: IonItemSliding) {
    slidingEl.close();
    //this.loadedPlaces = this.homeService.removeFavPlace(postal);
  }

  ngOnDestroy() {
    if (this.fbPostalsSub) {
      this.fbPostalsSub.unsubscribe();
    }
  }

}
