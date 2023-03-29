import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { Place } from '../place.model';
import { SegmentChangeEventDetail } from '@ionic/core';
import { AlertController, IonItemSliding } from '@ionic/angular';
import { fbPostal, fbRec, fbUser } from 'src/app/pages/auth/firebase.model';
import { AuthService } from 'src/app/services/auth.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { PlaceService } from 'src/app/services/place.service';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.page.html',
  styleUrls: ['./recommendations.page.scss'],
})
export class RecommendationsPage implements OnInit {
  selectedView: string = 'personal';
  currUser: fbUser;
  //loadedPlaces?: Place[];
  //displayedPlaces?: Place[];
  loadedPlaces?: fbPostal[] | string[];
  //displayedPlaces?: fbPostal[] | string[];
  //result;
  loadedFBPostals: fbPostal[];
  private fbPostalsSub: Subscription;
  result: fbPostal;

  personalRecPlaces?: string[];
  generalRecPlaces?: fbPostal[];
  displayedPlaces?: fbPostal[] | string[];

  loadedFBRecs: fbRec[];
  private fbRecsSub: Subscription;
  recItem: fbRec;
  findRecs: string[];

  constructor(
    private homeService: HomeService,
    private authService: AuthService,
    private router: Router,
    private placeService: PlaceService,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.currUser = this.authService.currFbUser;
    this.displayedPlaces = this.authService.currFbUser.personalRec;
    this.fbPostalsSub = this.placeService.fbPostals.subscribe(fbPostals => {
      this.loadedFBPostals = fbPostals;
    });
    this.fbRecsSub = this.placeService.fbRecs.subscribe(fbRecs => {
      this.loadedFBRecs = fbRecs;
    });
    
    //this.personalRecPlaces = this.authService.currFbUser.personalRec;
    //this.generalRecPlaces = this.authService.currFbUser.generalRec;
  }

  ionViewWillEnter() {
    this.currUser = this.authService.currFbUser;
    this.displayedPlaces = this.authService.currFbUser.personalRec;
    this.placeService.fetchFBPostals().subscribe(() => {

    });
    this.placeService.fetchFBRecs().subscribe(() => {

    });
  } 

  onFilterUpdate(event: CustomEvent<SegmentChangeEventDetail>) {
    if (event.detail.value === 'personal') {
      this.displayedPlaces = this.authService.currFbUser.personalRec;
    } else {
      this.displayedPlaces = this.authService.currFbUser.generalRec;
    }
  }

  onClickPlace(postalCode: string) {
    this.result  = this.loadedFBPostals.find(p => p.postal === postalCode);
    this.placeService.currPlace = this.result;
    this.router.navigate(['/', 'units', this.result.postal]);
  }

  onAddPlace(postalCode: string, slidingEl: IonItemSliding) {
    slidingEl.close();
    let targetPlace = this.loadedFBPostals.find(p => p.postal === postalCode);
    
    if (this.currUser.favourites && this.currUser.favourites.length > 0) {
      let favPlace  = this.currUser.favourites.find(p => p.postal === postalCode);
      if (favPlace) {
        this.presentFavAlert();
      } else {
        this.recItem = this.loadedFBRecs.find(p => p.place === targetPlace.name);
        //console.log(this.recItem);
        this.findRecs = [this.recItem.rec1, this.recItem.rec2, this.recItem.rec3];
        //console.log(findRecs);
        this.authService.addFav(this.currUser.email, targetPlace, this.findRecs).subscribe(()=>{

        });
      }
    } else {
      this.recItem = this.loadedFBRecs.find(p => p.place === targetPlace.name);
      this.findRecs = [this.recItem.rec1, this.recItem.rec2, this.recItem.rec3];
      this.authService.addFav(this.currUser.email, targetPlace, this.findRecs).subscribe(()=>{

      });
    }
    //this.homeService.addFavPlace(postal);
  }

  async presentFavAlert() {
    const alert = await this.alertController.create({
      header: 'Already Exist',
      message: 'This place is already in your favourites!',
      buttons: ['OK'],
    });

    await alert.present();
  }

  ngOnDestroy() {
    if (this.fbPostalsSub) {
      this.fbPostalsSub.unsubscribe();
    }
    if (this.fbRecsSub) {
      this.fbRecsSub.unsubscribe();
    }
  }

}
