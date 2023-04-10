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

  // edit unit / edit all units with same numbers action sheet
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
    this.modalCtrl
    .create({ component: EditUnitComponent })
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

  // edit all units with same numbers
  onEditAllUnits() {
    this.modalCtrl
    .create({ component: EditAllUnitsComponent })
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

  // present floorplan popover
  async presentPopover(e: Event) {
    const popover = await this.popoverController.create({
      component: FloorplanComponent,
      cssClass: 'my-custom-class',
      event: e,
    });

    await popover.present();

    const { role } = await popover.onDidDismiss();

  }
 
  // toggle between expand and collapse list
  toggleItem(index: number) {
    this.expandedItems[index] = !this.expandedItems[index];
  }

  // check if list is expanded or collapsed
  isItemExpanded(index: number) {
    return this.expandedItems[index];
  }
  
}
