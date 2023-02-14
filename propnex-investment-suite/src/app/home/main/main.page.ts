import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { fbPostal, fbUser } from 'src/app/auth/firebase.model';
import { User } from 'src/app/auth/user.model';
import { PlaceService } from 'src/app/units/place.service';
import { Unit } from 'src/app/units/units.model';
import { HomeService } from '../home.service';
import { Place } from '../place.model';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  loadedFavPlaces: Place[];
  loadedRecPlaces: Place[];
  //currUser: User;
  currUser: fbUser;

  loadedFBPostals: fbPostal[];
  private fbPostalsSub: Subscription;
  result: fbPostal;

  constructor(
    private homeService: HomeService,
    private authService: AuthService,
    private modalCtrl: ModalController,
    private router: Router,
    private placeService: PlaceService
  ) { }

  ngOnInit() {
    // this.authService.fetchFBUsers().subscribe(() => {

    // });
    // this.currUser = this.authService.currentUser;
    this.currUser = this.authService.currFbUser;
    this.loadedFavPlaces = this.homeService.favPlaces;
    this.loadedRecPlaces = this.homeService.personalRecPlaces;
    this.fbPostalsSub = this.placeService.fbPostals.subscribe(fbPostals => {
      this.loadedFBPostals = fbPostals;
    })
  }

  ionViewWillEnter() {
    this.currUser = this.authService.currFbUser;
    this.placeService.fetchFBPostals().subscribe(() => {

    });

  }

  onEditProfile() {
    this.modalCtrl
      .create({ component: EditProfileComponent })
      .then(modalEl => {
        modalEl.present();
        return modalEl.onDidDismiss();
      })
      .then(resultData => {
        console.log(resultData.data, resultData.role);
        if (resultData.role === 'confirm') {
          this.ionViewWillEnter();
          console.log('edited!');
        }
      });
  }

  onClickPlace(postalCode: string) {
    this.result  = this.loadedFBPostals.find(p => p.postal === postalCode);
    this.placeService.currPlace = this.result;
    this.router.navigate(['/', 'units', this.result.postal]);
  }

  ngOnDestroy() {
    if (this.fbPostalsSub) {
      this.fbPostalsSub.unsubscribe();
    }
  }

}
