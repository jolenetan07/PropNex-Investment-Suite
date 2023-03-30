import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController, ModalController, NavController, PopoverController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { fbPostal, fbUnit, fbUser } from 'src/app/pages/auth/firebase.model';
import { PlaceService } from '../../../../services/place.service';
import { EditAllUnitsComponent } from './edit-all-units/edit-all-units.component';
import { EditUnitComponent } from './edit-unit/edit-unit.component';
import { FloorplanComponent } from './floorplan/floorplan.component';


@Component({
  selector: 'app-unit-detail',
  templateUrl: './unit-detail.page.html',
  styleUrls: ['./unit-detail.page.scss'],
})


export class UnitDetailPage implements OnInit {

  expandedItems = [false];
  currPlace: fbPostal;
  currUnit: fbUnit;
  currUser: fbUser;
  unitDetails: string[] = [
    'Homeowner Race: ',
    'Country Of Citizenship: ',
    'Decorative Style: ',
    'Extension Request: ',
    'Price: ',
    'Title Deed: ',
    'House Age: ',
    'Building Height: ',
    'No. Of Units (total): ',
    'No. Of Units (per floor): ',
    'Room Type: ',
    'No. Of Toilets: ',
    'House Structure: ',
    'Door Facing: ',
    'Room Orientation: ',
    'Corner Unit: ',
    'Ground/Top Floor: ',
    'Western Sun: ',
    'Noisy: ',
    'Refurbished State: ',
    'Landscape From Window: ',
    'Bomb Shelter: ',
    'Open Kitchen: ',
    'Gas Management Fee: ',
    'House Tax: ',
    'Rental Status: ',
    'VR Link: '
  ]


  constructor(
    private authService: AuthService,
    private modalCtrl: ModalController,
    private popoverController: PopoverController,
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private placeService: PlaceService,
    private actionSheetCtrl: ActionSheetController,
  ) { }


  ngOnInit() {
    this.currUser = this.authService.currFbUser;

    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('unitNumId')) {
        this.navCtrl.navigateBack('/units');
        return;
      }
      
      this.currPlace = this.placeService.currPlace;
      this.currUnit = this.placeService.currUnit;
    });
  }

  ionViewWillEnter() {
    this.currPlace = this.placeService.currPlace;
    this.currUnit = this.placeService.currUnit;
    this.placeService.fetchFBPostals().subscribe(() => {

    });

  }


  // edit this existing unit / edit all existing units with same unit number action sheet
  onEditUnitOptions() {
    this.actionSheetCtrl.create({
      header: 'Please Choose',
      buttons: [
        { 
          text: 'Edit This Unit', 
          handler: () => { 
            this.onEditUnit();
          } 
        },
        {
          text: 'Edit All Same Units', 
          handler: () => { 
            this.onEditAllUnits();
          }
        },
        { text: 'Cancel', role: 'cancel' }
      ]
    })
    .then(actionSheetEl => {
      actionSheetEl.present();
    });
  }


  // edit this unit
  onEditUnit() {
    console.log("edit this unit details");
    this.modalCtrl
    .create({ component: EditUnitComponent })
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


  // edit all units with same unit number
  onEditAllUnits() {
    console.log("edit all same number unit details");
    this.modalCtrl
    .create({ component: EditAllUnitsComponent })
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

  // floorplan popover
  async presentPopover(e: Event) {
    const popover = await this.popoverController.create({
      component: FloorplanComponent,
      cssClass: 'my-custom-class',
      event: e,
    });

    await popover.present();

    const { role } = await popover.onDidDismiss();
  }
 
  // check if unit detail list expanded / collapsed
  toggleItem(index: number) {
    this.expandedItems[index] = !this.expandedItems[index];
  }


  // expand unit detail list
  isItemExpanded(index: number) {
    return this.expandedItems[index];
  }
  
  
}
