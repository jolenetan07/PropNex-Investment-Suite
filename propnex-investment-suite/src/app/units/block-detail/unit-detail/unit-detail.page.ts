import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent, ModalController, PopoverController } from '@ionic/angular';
import { AuthService } from 'src/app/auth/auth.service';
import { fbUser } from 'src/app/auth/firebase.model';
import { User } from 'src/app/auth/user.model';
import { HomeService } from 'src/app/home/home.service';
import { Place } from 'src/app/home/place.model';
import { EditUnitComponent } from './edit-unit/edit-unit.component';
import { FloorplanComponent } from './floorplan/floorplan.component';

@Component({
  selector: 'app-unit-detail',
  templateUrl: './unit-detail.page.html',
  styleUrls: ['./unit-detail.page.scss'],
})
export class UnitDetailPage implements OnInit {

  shownGroup = null;

  //currUser: User;
  currUser: fbUser;
  places: Place[];
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
    'Area: ',
    'No. Of Rooms: ',
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
    private popoverController: PopoverController
    //private router: Router
  ) { }

  ngOnInit() {
    this.currUser = this.authService.currFbUser;
    this.places = this.homeService.allPlaces;
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

  toggleGroup(group) {
    if (this.isGroupShown(group)) {
      this.shownGroup = null;
    } else {
      this.shownGroup = group;
    }
  }

  isGroupShown(group) {
    return this.shownGroup === group;
  }


}
