import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonContent, ModalController, NavController, PopoverController } from '@ionic/angular';
import { AuthService } from 'src/app/auth/auth.service';
import { fbPostal, fbUnit, fbUser } from 'src/app/auth/firebase.model';
import { User } from 'src/app/auth/user.model';
import { HomeService } from 'src/app/home/home.service';
import { Place } from 'src/app/home/place.model';
import { PlaceService } from '../../place.service';
import { EditUnitComponent } from './edit-unit/edit-unit.component';
import { FloorplanComponent } from './floorplan/floorplan.component';

@Component({
  selector: 'app-unit-detail',
  templateUrl: './unit-detail.page.html',
  styleUrls: ['./unit-detail.page.scss'],
})
export class UnitDetailPage implements OnInit {

  expandedItems = [false];

  isLoading = false;
  //place: Place;
  currPlace: fbPostal;
  currUnit: fbUnit;

  //currUser: User;
  currUser: fbUser;
  //places: Place[];
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
    private homeService: HomeService,
    private authService: AuthService,
    private modalCtrl: ModalController,
    private popoverController: PopoverController,
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private placeService: PlaceService
    //private router: Router
  ) { }

  ngOnInit() {
    this.currUser = this.authService.currFbUser;
    //this.places = this.homeService.allPlaces;
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('unitNumId')) {
        this.navCtrl.navigateBack('/units');
        return;
      }
      this.isLoading = true;
      //this.place = this.homeService.getPlace(paramMap.get('postalId'));
      //this.place = this.homeService.allPlaces.find((p) => p.postal === paramMap.get("postalId"));
      this.currPlace = this.placeService.currPlace;
      this.currUnit = this.placeService.currUnit;
      this.isLoading = false;
      
    });

  }


  handleChange(event) {
    console.log(event.detail.value);
  }

  onEditUnit() {
    console.log("edit specific unit details");
    this.modalCtrl
    .create({ component: EditUnitComponent })
    .then(modalEl => {
      modalEl.present();
      return modalEl.onDidDismiss();
    });

  }

  async presentPopover(e: Event) {
    const popover = await this.popoverController.create({
      component: FloorplanComponent,
      cssClass: 'my-custom-class',
      event: e,
    });

    await popover.present();

    const { role } = await popover.onDidDismiss();
    //this.roleMsg = `Popover dismissed with role: ${role}`;
  }
 
  toggleItem(index: number) {
    this.expandedItems[index] = !this.expandedItems[index];
  }

  isItemExpanded(index: number) {
    return this.expandedItems[index];
  }
  
}
