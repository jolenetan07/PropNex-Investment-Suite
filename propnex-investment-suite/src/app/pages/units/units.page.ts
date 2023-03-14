import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { fbPostal, fbUser } from '../auth/firebase.model';
import { User } from '../auth/user.model';
import { HomeService } from '../home/home.service';
import { Place } from '../home/place.model';
import { AddBlockComponent } from './add-block/add-block.component';
import { PlaceService } from '../../services/place.service';
import { Unit } from './units.model';

@Component({
  selector: 'app-units',
  templateUrl: './units.page.html',
  styleUrls: ['./units.page.scss'],
})
export class UnitsPage implements OnInit {
  //currUser: User;
  currUser: fbUser;
  //loadedPlaces: Place[];
  // result: Place;

  loadedFBPostals: fbPostal[];
  private fbPostalsSub: Subscription;
  result: fbPostal;

  constructor(
    private authService: AuthService,
    //private homeService: HomeService,
    private router: Router,
    private modalCtrl: ModalController,
    private placeService: PlaceService
  ) { }

  ngOnInit() {
    this.currUser = this.authService.currFbUser;
    //this.loadedPlaces = this.homeService.allPlaces;

    this.fbPostalsSub = this.placeService.fbPostals.subscribe(fbPostals => {
      this.loadedFBPostals = fbPostals;
    })
  }

  ionViewWillEnter() {
    this.placeService.fetchFBPostals().subscribe(() => {

    });

  }

  handleChange(event) {
    const query = event.target.value;
    //console.log(query);
    //this.result  = this.homeService.getPlace(query);
    this.result  = this.loadedFBPostals.find(p => p.postal === query);
    this.placeService.currPlace = this.result;
    //console.log(this.result);
  }

  onSelectPlace() {
    // this.router.navigate(['/', 'units', 'block-detail']);
    this.router.navigate(['/', 'units', this.result.postal]);
  }

  onAddBlock() {
    console.log("add new block");
    this.modalCtrl
      .create({ component: AddBlockComponent })
      .then(modalEl => {
        modalEl.present();
        return modalEl.onDidDismiss();
      });
  }

  ngOnDestroy() {
    if (this.fbPostalsSub) {
      this.fbPostalsSub.unsubscribe();
    }
  }
}
