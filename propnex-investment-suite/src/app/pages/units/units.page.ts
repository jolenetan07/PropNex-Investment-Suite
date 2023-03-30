import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { fbPostal, fbRec, fbUser } from '../auth/firebase.model';
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

  loadedFBRecs: fbRec[];
  private fbRecsSub: Subscription;
  recItem: fbRec;
  findRecs: string[];

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

    this.fbRecsSub = this.placeService.fbRecs.subscribe(fbRecs => {
      this.loadedFBRecs = fbRecs;
    })
  }

  ionViewWillEnter() {
    this.placeService.fetchFBPostals().subscribe(() => {

    });

    this.placeService.fetchFBRecs().subscribe(() => {

    });

  }

  handleChange(event) {
    const query = event.target.value;
    this.result  = this.loadedFBPostals.find(p => p.postal === query);

    if (this.result) {
      this.placeService.currPlace = this.result;
      this.recItem = this.loadedFBRecs.find(p => p.place === this.placeService.currPlace.name);
      this.findRecs = [this.recItem.rec1, this.recItem.rec2, this.recItem.rec3];
    }

  }

  onSelectPlace() {
    this.router.navigate(['/', 'units', this.result.postal]);
  }

  onAddBlock() {
    this.modalCtrl
      .create({ component: AddBlockComponent })
      .then(modalEl => {
        modalEl.present();
        return modalEl.onDidDismiss();
      });
  }

  // fetchRec() {
  //   this.placeService.fetchFBRecs().subscribe(() => {

  //   });
  // }

  ngOnDestroy() {
    if (this.fbPostalsSub) {
      this.fbPostalsSub.unsubscribe();
    }
    if (this.fbRecsSub) {
      this.fbRecsSub.unsubscribe();
    }
  }
}
