import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionSheetController, AlertController, ModalController, NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { fbPostal, fbRec, fbUnit, fbUser } from 'src/app/pages/auth/firebase.model';
import { User } from 'src/app/pages/auth/user.model';
import { HomeService } from 'src/app/pages/home/home.service';
import { Place } from 'src/app/pages/home/place.model';
import { AddBlockComponent } from '../add-block/add-block.component';
import { PlaceService } from '../../../services/place.service';
import { Unit } from '../units.model';
import { AddUnitComponent } from './add-unit/add-unit.component';
import { EditBlockComponent } from './edit-block/edit-block.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-block-detail',
  templateUrl: './block-detail.page.html',
  styleUrls: ['./block-detail.page.scss'],
})
export class BlockDetailPage implements OnInit {
  // currUser: User;
  currUser: fbUser;
  isLoading = false;
  //place: Place;
  currPlace: fbPostal;
  places: Place[];
  units: Unit[];
  result: fbUnit;
  favPlace: fbPostal;

  loadedFBRecs: fbRec[];
  private fbRecsSub: Subscription;
  recItem: fbRec;
  findRecs: string[];

  constructor(
    private authService: AuthService,
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private homeService: HomeService,
    private router: Router,
    private actionSheetCtrl: ActionSheetController,
    private modalCtrl: ModalController,
    private placeService: PlaceService,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.currUser = this.authService.currFbUser;
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('postalId')) {
        this.navCtrl.navigateBack('/units');
        return;
      }
      this.isLoading = true;
      //this.place = this.homeService.getPlace(paramMap.get('postalId'));
      //this.place = this.homeService.allPlaces.find((p) => p.postal === paramMap.get("postalId"));
      this.currPlace = this.placeService.currPlace;
      this.isLoading = false;
      
    });

    this.fbRecsSub = this.placeService.fbRecs.subscribe(fbRecs => {
      this.loadedFBRecs = fbRecs;
    })

    this.places = this.homeService.allPlaces;
    this.units = this.homeService.getBlockUnits();
  }

  ionViewWillEnter() {
    this.currPlace = this.placeService.currPlace;
    this.placeService.fetchFBPostals().subscribe(() => {

    });
    this.placeService.fetchFBRecs().subscribe(() => {

    });

  }



  handleChange(event) {
    const query = event.target.value;

    if (this.currPlace.units) {
      this.result  = this.currPlace.units.find(p => p.unitNumber === query);
    }
    this.placeService.currUnit = this.result;
  }

  onSelectUnit() {
    this.router.navigate(['/', 'units', this.currPlace.postal, this.result.unitNumber]);
  }

  onEditBlockOptions() {
    this.actionSheetCtrl.create({
      header: 'Please Choose',
      buttons: [
        { 
          text: 'Edit Place', 
          handler: () => { 
            this.onEditBlock();
          } 
        },
        {
          text: 'Add New Unit', 
          handler: () => { 
            this.onAddUnit();
          }
        },
        { text: 'Cancel', role: 'cancel' }
      ]
    })
    .then(actionSheetEl => {
      actionSheetEl.present();
    });
  }

  onEditBlock() {
    this.modalCtrl
      .create({ component: EditBlockComponent })
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

  onAddUnit() {
    this.modalCtrl
      .create({ component: AddUnitComponent })
      .then(modalEl => {
        modalEl.present();
        return modalEl.onDidDismiss();
      });
  }

  addToFav(postalCode: string) {
    // check if already in fav
    // if yes, dont add (alert?)
    // if no, add
    if (this.currUser.favourites && this.currUser.favourites.length > 0) {
      this.favPlace  = this.currUser.favourites.find(p => p.postal === postalCode);
      if (this.favPlace) {
        this.presentFavAlert();
      } else {
        this.recItem = this.loadedFBRecs.find(p => p.place === this.placeService.currPlace.name);
        this.findRecs = [this.recItem.rec1, this.recItem.rec2, this.recItem.rec3];
        this.authService.addFav(this.currUser.email, this.placeService.currPlace, this.findRecs).subscribe(()=>{

        });
      }
    } else {
      this.recItem = this.loadedFBRecs.find(p => p.place === this.placeService.currPlace.name);
      this.findRecs = [this.recItem.rec1, this.recItem.rec2, this.recItem.rec3];
      this.authService.addFav(this.currUser.email, this.placeService.currPlace, this.findRecs).subscribe(()=>{

      });
    }
    

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
    if (this.fbRecsSub) {
      this.fbRecsSub.unsubscribe();
    }
  }

}
