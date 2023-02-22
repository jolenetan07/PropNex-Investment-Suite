import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonItemSliding } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { fbPostal, fbUser } from 'src/app/auth/firebase.model';
import { PlaceService } from 'src/app/units/place.service';
import { HomeService } from '../home.service';
import { Place } from '../place.model';
import { HttpClient } from '@angular/common/http';

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

  loadedFBUsers: fbUser[];
  private fbUsersSub: Subscription;

  constructor(
    private homeService: HomeService,
    private authService: AuthService,
    private router: Router,
    private placeService: PlaceService,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.fbUsersSub = this.authService.fbUsers.subscribe(fbUsers => {
      this.loadedFBUsers = fbUsers;
    });
    this.currUser = this.authService.currFbUser;
    this.fbPostalsSub = this.placeService.fbPostals.subscribe(fbPostals => {
      this.loadedFBPostals = fbPostals;
    })
  }

  ionViewWillEnter() {
    this.fbUsersSub = this.authService.fbUsers.subscribe(fbUsers => {
      this.loadedFBUsers = fbUsers;
    });

    this.placeService.fetchFBPostals().subscribe(() => {

    });
  } 

  onClickPlace(postalCode: string) {
    this.result  = this.loadedFBPostals.find(p => p.postal === postalCode);
    this.placeService.currPlace = this.result;
    this.router.navigate(['/', 'units', this.result.postal]);
  }

  onRemovePlace(postalCode: string, slidingEl: IonItemSliding) {
    console.log('before');
    console.log(this.currUser.favourites);
    slidingEl.close();
    //let targetPlace = this.loadedFBPostals.find(p => p.postal === postalCode);
    //this.authService.removeFav(this.currUser.email, targetPlace).subscribe(()=>{
    let targetdUserIndex = this.loadedFBUsers.findIndex(u => u.email === this.currUser.email);
    let targetdPlaceIndex = this.currUser.favourites.findIndex(u => u.postal === postalCode);
    console.log(targetdUserIndex, targetdPlaceIndex);
    this.authService.removeFav(targetdUserIndex, targetdPlaceIndex).subscribe((data)=>{
      console.log('hi1');
      console.log(data);

    });
    //console.log('after', this.currUser);
    //this.loadedPlaces = this.homeService.removeFavPlace(postal);
    // this.http.delete(`https://propnexfyp-user.asia-southeast1.firebasedatabase.app/${targetdUserIndex}/favourites/${targetdPlaceIndex}.json`).subscribe((res) => {
      
    // });
    console.log('after');
    console.log(this.currUser.favourites);
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
