import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/auth/user.model';
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
  currUser: User;

  constructor(
    private homeService: HomeService,
    private authService: AuthService,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.currUser = this.authService.currentUser;
    this.loadedFavPlaces = this.homeService.favPlaces;
    this.loadedRecPlaces = this.homeService.personalRecPlaces;
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
          console.log('edited!');
        }
      });
  }

}
