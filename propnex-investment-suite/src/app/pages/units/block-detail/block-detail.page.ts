import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionSheetController, AlertController, ModalController, NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { fbPostal, fbRec, fbUnit, fbUser } from 'src/app/pages/auth/firebase.model';
import { PlaceService } from '../../../services/place.service';
import { AddUnitComponent } from './add-unit/add-unit.component';
import { EditBlockComponent } from './edit-block/edit-block.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-block-detail',
  templateUrl: './block-detail.page.html',
  styleUrls: ['./block-detail.page.scss'],
})
export class BlockDetailPage implements OnInit {

  currUser: fbUser;
  currPlace: fbPostal;
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
    });

    this.fbRecsSub = this.placeService.fbRecs.subscribe(fbRecs => {
      this.loadedFBRecs = fbRecs;
    })
  }


  ionViewWillEnter() {
    this.currPlace = this.placeService.currPlace;
    
    this.placeService.fetchFBPostals().subscribe(() => {

    });
    
    this.placeService.fetchFBRecs().subscribe(() => {

    });
  }


  // search for unit
  handleChange(event) {
    const query = event.target.value;

    if (this.currPlace.units) {
      this.result  = this.currPlace.units.find(p => p.unitNumber === query);
    }

    this.placeService.currUnit = this.result;
  }


  // navigate to selected unit details page
  onSelectUnit() {
    this.router.navigate(['/', 'units', this.currPlace.postal, this.result.unitNumber]);
  }


  // add new unit / edit exiting place action sheet
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


  // edit existing place
  onEditBlock() {
    this.modalCtrl
      .create({ component: EditBlockComponent })
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


  // add new unit
  onAddUnit() {
    this.modalCtrl
      .create({ component: AddUnitComponent })
      .then(modalEl => {
        modalEl.present();
        return modalEl.onDidDismiss();
      });
  }


  // add place to favourites
  addToFav(postalCode: string) {
    // check if user has any favourites
    if (this.currUser.favourites && this.currUser.favourites.length > 0) {
      this.favPlace  = this.currUser.favourites.find(p => p.postal === postalCode);
      // check if place already in favourites
      if (this.favPlace) {
        this.presentFavAlert();
      } else { // place not in favourites, add
        this.recItem = this.loadedFBRecs.find(p => p.place === this.placeService.currPlace.name);
        this.findRecs = [this.recItem.rec1, this.recItem.rec2, this.recItem.rec3];
        
        this.authService.addFav(this.currUser.email, this.placeService.currPlace, this.findRecs).subscribe(()=>{

        });
      }
    } else { // user no favourites, add
      this.recItem = this.loadedFBRecs.find(p => p.place === this.placeService.currPlace.name);
      this.findRecs = [this.recItem.rec1, this.recItem.rec2, this.recItem.rec3];
      
      this.authService.addFav(this.currUser.email, this.placeService.currPlace, this.findRecs).subscribe(()=>{

      });
    }
  }


  // favourite already exist alert
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
