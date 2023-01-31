import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionSheetController, ModalController, NavController } from '@ionic/angular';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/auth/user.model';
import { HomeService } from 'src/app/home/home.service';
import { Place } from 'src/app/home/place.model';
import { AddBlockComponent } from '../add-block/add-block.component';
import { Unit } from '../units.model';
import { AddUnitComponent } from './add-unit/add-unit.component';
import { EditBlockComponent } from './edit-block/edit-block.component';

@Component({
  selector: 'app-block-detail',
  templateUrl: './block-detail.page.html',
  styleUrls: ['./block-detail.page.scss'],
})
export class BlockDetailPage implements OnInit {
  currUser: User;
  isLoading = false;
  place: Place;
  places: Place[];
  units: Unit[];
  result: Unit;

  constructor(
    private authService: AuthService,
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private homeService: HomeService,
    private router: Router,
    private actionSheetCtrl: ActionSheetController,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.currUser = this.authService.currentUser;
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('postalId')) {
        this.navCtrl.navigateBack('/units');
        return;
      }
      this.isLoading = true;
      //this.place = this.homeService.getPlace(paramMap.get('postalId'));
      this.place = this.homeService.allPlaces.find((p) => p.postal === paramMap.get("postalId"));
      this.isLoading = false;
      
    });

    this.places = this.homeService.allPlaces;
    this.units = this.homeService.getBlockUnits();
  }



  handleChange(event) {
    const query = event.target.value;
    //console.log(query);
    //this.units = this.homeService.getBlockUnits(query);
    this.result  = this.homeService.searchUnit('470142',query);
    //console.log(this.result);
  }

  onSelectUnit() {
    // to change
    this.router.navigate(['/', 'units', 'block-detail', 'unit-detail']);
  }

  onEditBlockOptions() {
    console.log("choose to add new unit to block or edit block details");

    this.actionSheetCtrl.create({
      header: 'Please Choose',
      buttons: [
        { 
          text: 'Edit Block', 
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

}
