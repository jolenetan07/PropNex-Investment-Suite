import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonItemSliding } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { fbPostal, fbUser } from 'src/app/pages/auth/firebase.model';
import { PlaceService } from 'src/app/services/place.service';


@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.page.html',
  styleUrls: ['./favourites.page.scss'],
})


export class FavouritesPage implements OnInit {

  currUser: fbUser;
  loadedFBPostals: fbPostal[];
  private fbPostalsSub: Subscription;
  result: fbPostal;
  loadedFBUsers: fbUser[];
  private fbUsersSub: Subscription;
  loadedFavPlaces?: fbPostal[];


  constructor(
    private authService: AuthService,
    private router: Router,
    private placeService: PlaceService,
  ) { }


  ngOnInit() {
    this.fbUsersSub = this.authService.fbUsers.subscribe(fbUsers => {
      this.loadedFBUsers = fbUsers;
    });

    this.currUser = this.authService.currFbUser;
    this.fbPostalsSub = this.placeService.fbPostals.subscribe(fbPostals => {
      this.loadedFBPostals = fbPostals;
    });

    this.loadedFavPlaces = this.currUser.favourites;
  }


  ionViewWillEnter() {
    this.fbUsersSub = this.authService.fbUsers.subscribe(fbUsers => {
      this.loadedFBUsers = fbUsers;
    });

    this.placeService.fetchFBPostals().subscribe(() => {

    });

    this.loadedFavPlaces = this.currUser.favourites;
  } 

  
  // naivgate to selected place details page
  onClickPlace(postalCode: string) {
    this.result  = this.loadedFBPostals.find(p => p.postal === postalCode);
    this.placeService.currPlace = this.result;
    this.router.navigate(['/', 'units', this.result.postal]);
  }


  // remove selected place from favourites
  onRemovePlace(postalCode: string, slidingEl: IonItemSliding) {
    slidingEl.close();
    let targetdUserIndex = this.loadedFBUsers.findIndex(u => u.email === this.currUser.email);
    let targetdPlaceIndex = this.currUser.favourites.findIndex(u => u.postal === postalCode);
    this.loadedFavPlaces = this.currUser.favourites.filter(pl => pl.postal !== postalCode);
    this.authService.removeFav(targetdUserIndex, targetdPlaceIndex).subscribe(()=>{

    });
  }


  ngOnDestroy() {
    if (this.fbPostalsSub) {
      this.fbPostalsSub.unsubscribe();
    }

    if (this.fbUsersSub) {
      this.fbUsersSub.unsubscribe();
    }
  }

  
}
