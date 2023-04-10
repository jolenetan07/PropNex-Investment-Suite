import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { fbPostal, fbUser } from 'src/app/pages/auth/firebase.model';
import { PlaceService } from 'src/app/services/place.service';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})

export class MainPage implements OnInit {

  currUser: fbUser;
  loadedFBPostals: fbPostal[];
  private fbPostalsSub: Subscription;
  result: fbPostal;


  constructor(
    private authService: AuthService,
    private modalCtrl: ModalController,
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
    this.currUser = this.authService.currFbUser;
    this.placeService.fetchFBPostals().subscribe(() => {

    });

  }

  // navigate to edit user profile form
  onEditProfile() {
    this.modalCtrl
      .create({ component: EditProfileComponent })
      .then(modalEl => {
        modalEl.present();
        return modalEl.onDidDismiss();
      })
      .then(resultData => {
        if (resultData.role === 'confirm') {
          this.ionViewWillEnter();
        }
      });
  }

  // navigate to place details page
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
